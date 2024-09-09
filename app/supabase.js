import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uevmwqosgfvckencvdee.supabase.co"; //process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVldm13cW9zZ2Z2Y2tlbmN2ZGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MjE2NTYsImV4cCI6MjA0MTE5NzY1Nn0.SsXDZsU05WZSha2OSII4NyrxpMUDAbGSvtqdElmnLCk"; //process.env.NEXT_PUBLIC_SUPABASE_URL;
export const supabase = createClient(supabaseUrl, supabaseKey);
