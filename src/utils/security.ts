/**
 * Security utilities for input sanitization and XSS prevention
 */

// HTML entities to escape XSS attempts
const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

/**
 * Sanitize HTML input to prevent XSS attacks
 */
export function sanitizeHtml(input: string): string {
  if (typeof input !== 'string') return '';
  return input.replace(/[&<>"'`=\/]/g, char => HTML_ENTITIES[char] || char);
}

/**
 * Sanitize email input with specific validation
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') return '';
  
  // Remove dangerous characters while preserving valid email format
  const sanitized = email
    .trim()
    .toLowerCase()
    .replace(/[<>'"]/g, '') // Remove HTML-dangerous chars
    .replace(/[^\w\-_.@]/g, ''); // Only allow valid email characters
  
  return sanitized;
}

/**
 * Sanitize general text input
 */
export function sanitizeText(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>'"]/g, '') // Remove HTML-dangerous chars
    .replace(/\s+/g, ' ') // Normalize whitespace
    .substring(0, 1000); // Limit length
}

/**
 * Validate and sanitize age input
 */
export function sanitizeAge(age: string): string {
  if (typeof age !== 'string') return '';
  
  // Only allow predefined age ranges
  const validAges = ['under 23', '23 to 30', 'upper 30'];
  return validAges.includes(age) ? age : '';
}

/**
 * Validate and sanitize address input
 */
export function sanitizeAddress(address: string): string {
  if (typeof address !== 'string') return '';
  
  // For predefined addresses
  const validCities = ['hanoi'];
  if (validCities.includes(address.toLowerCase())) {
    return address;
  }
  
  // For custom address input
  return sanitizeText(address);
}

/**
 * Rate limiting utility for form submissions
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts = 5, windowMs = 60000) { // 5 attempts per minute
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = userAttempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Record this attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }

  getRemainingAttempts(identifier: string): number {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    const recentAttempts = userAttempts.filter(time => now - time < this.windowMs);
    return Math.max(0, this.maxAttempts - recentAttempts.length);
  }
}

export const formRateLimiter = new RateLimiter();

/**
 * Generate secure session identifier
 */
export function generateSecureSessionId(): string {
  const timestamp = Date.now();
  const random = crypto.getRandomValues(new Uint32Array(3));
  return `session_${timestamp}_${Array.from(random).map(n => n.toString(36)).join('')}`;
}

/**
 * Hash sensitive data for analytics
 */
export async function hashSensitiveData(data: string): Promise<string> {
  if (!data) return '';
  
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}