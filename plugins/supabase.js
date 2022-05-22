import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nsiyekxisadbvfadgjqy.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaXlla3hpc2FkYnZmYWRnanF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIwMzAxMTUsImV4cCI6MTk2NzYwNjExNX0.SAwyVxqg1Uw8EMdDnhHNnkY0AvbGKmhZvV0afPSlJHs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
