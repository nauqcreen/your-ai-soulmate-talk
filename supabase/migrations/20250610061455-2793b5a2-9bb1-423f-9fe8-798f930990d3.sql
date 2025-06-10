
-- Enable Row Level Security on email_subscribers table
ALTER TABLE public.email_subscribers ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert email subscriptions
-- This is needed since users aren't authenticated when signing up for emails
CREATE POLICY "Anyone can insert email subscriptions" 
  ON public.email_subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that prevents public reading of email addresses
-- Only authenticated users with admin role could read (if you implement auth later)
CREATE POLICY "No public select on email subscriptions" 
  ON public.email_subscribers 
  FOR SELECT 
  USING (false);

-- Prevent public updates and deletes
CREATE POLICY "No public updates on email subscriptions" 
  ON public.email_subscribers 
  FOR UPDATE 
  USING (false);

CREATE POLICY "No public deletes on email subscriptions" 
  ON public.email_subscribers 
  FOR DELETE 
  USING (false);
