import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X, Shield, BarChart3 } from 'lucide-react';

const CONSENT_STORAGE_KEY = 'tinktalk_analytics_consent';

interface ConsentPreferences {
  analytics: boolean;
  interactions: boolean;
  performance: boolean;
}

interface ConsentBannerProps {
  onConsentChange: (preferences: ConsentPreferences) => void;
}

export const ConsentBanner = ({ onConsentChange }: ConsentBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    analytics: false,
    interactions: false,
    performance: true // Essential performance tracking enabled by default
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) {
      setIsVisible(true);
    } else {
      try {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
        onConsentChange(parsed);
      } catch {
        setIsVisible(true);
      }
    }
  }, [onConsentChange]);

  const handleAcceptAll = () => {
    const allConsent = {
      analytics: true,
      interactions: true,
      performance: true
    };
    savePreferences(allConsent);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      analytics: false,
      interactions: false,
      performance: true // Keep essential performance tracking
    };
    savePreferences(minimalConsent);
  };

  const handleCustomize = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: ConsentPreferences) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(prefs));
    setIsVisible(false);
    onConsentChange(prefs);
  };

  const updatePreference = (key: keyof ConsentPreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 bg-background/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-sm">Quyền riêng tư & Dữ liệu</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Chúng tôi thu thập dữ liệu để cải thiện trải nghiệm của bạn. Bạn có thể chọn loại dữ liệu muốn chia sẻ.
        </p>

        {showDetails && (
          <div className="space-y-3 mb-4 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm">Phân tích sử dụng</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => updatePreference('analytics', e.target.checked)}
                className="rounded"
              />
            </div>
            <p className="text-xs text-muted-foreground ml-6">
              Thu thập dữ liệu về cách bạn sử dụng trang web để cải thiện tính năng.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm">Tương tác người dùng</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.interactions}
                onChange={(e) => updatePreference('interactions', e.target.checked)}
                className="rounded"
              />
            </div>
            <p className="text-xs text-muted-foreground ml-6">
              Theo dõi các tương tác như click, hover để tối ưu giao diện.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Hiệu suất cơ bản</span>
              </div>
              <input
                type="checkbox"
                checked={preferences.performance}
                disabled={true}
                className="rounded"
              />
            </div>
            <p className="text-xs text-muted-foreground ml-6">
              Cần thiết để đảm bảo trang web hoạt động tốt. Không thể tắt.
            </p>
          </div>
        )}

        <div className="flex gap-2">
          {!showDetails ? (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRejectAll}
                className="flex-1"
              >
                Từ chối
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDetails(true)}
                className="flex-1"
              >
                Tùy chỉnh
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="flex-1"
              >
                Chấp nhận
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDetails(false)}
                className="flex-1"
              >
                Quay lại
              </Button>
              <Button
                size="sm"
                onClick={handleCustomize}
                className="flex-1"
              >
                Lưu lựa chọn
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export const getConsentPreferences = (): ConsentPreferences | null => {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};