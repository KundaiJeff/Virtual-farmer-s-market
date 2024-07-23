import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ecqwisloufxeetrijhbg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjcXdpc2xvdWZ4ZWV0cmlqaGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5MDM5NTMsImV4cCI6MjAzNjQ3OTk1M30.U-KVcj5kRuwDk-My-fm0M4qE3u9W0fnP6RrUOcyllqU';


export const supabase =createClient(supabaseUrl,supabaseAnonKey);


