-- Allow anonymous users to insert email subscriptions
CREATE POLICY "Anyone can insert email subscriptions" 
ON public.email_subscribers 
FOR INSERT 
WITH CHECK (true);

-- Fix analytics events to allow anonymous tracking without requiring users table
ALTER TABLE public.analytics_events DROP CONSTRAINT IF EXISTS analytics_events_user_id_fkey;

-- Make user_id nullable since we want to allow anonymous analytics
ALTER TABLE public.analytics_events ALTER COLUMN user_id DROP NOT NULL;