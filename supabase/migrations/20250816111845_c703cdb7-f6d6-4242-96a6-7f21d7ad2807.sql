-- Hardening: enforce email format and remove redundant insert policy

-- 1) Remove redundant admin-only INSERT policy (public INSERT remains)
DROP POLICY IF EXISTS "Admins can insert email subscriptions" ON public.email_subscribers;

-- 2) Add trigger to enforce email format on INSERT/UPDATE using existing function public.validate_email_format()
DROP TRIGGER IF EXISTS trg_validate_email_subscribers_email ON public.email_subscribers;
CREATE TRIGGER trg_validate_email_subscribers_email
BEFORE INSERT OR UPDATE ON public.email_subscribers
FOR EACH ROW
EXECUTE FUNCTION public.validate_email_format();