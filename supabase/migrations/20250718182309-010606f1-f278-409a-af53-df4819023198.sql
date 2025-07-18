-- Add age and address columns to email_subscribers table
ALTER TABLE public.email_subscribers 
ADD COLUMN age TEXT,
ADD COLUMN address TEXT;