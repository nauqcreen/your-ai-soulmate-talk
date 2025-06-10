
-- Tạo bảng để lưu email subscribers
CREATE TABLE public.email_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'active',
  source TEXT DEFAULT 'website'
);

-- Tạo index để tìm kiếm nhanh
CREATE INDEX idx_email_subscribers_email ON public.email_subscribers(email);
CREATE INDEX idx_email_subscribers_subscribed_at ON public.email_subscribers(subscribed_at DESC);

-- Thêm comment để mô tả bảng
COMMENT ON TABLE public.email_subscribers IS 'Bảng lưu danh sách email đăng ký nhận thông tin sớm';
