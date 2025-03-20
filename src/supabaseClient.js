import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://bcpzkiqnvwzmgxagvehq.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcHpraXFudnd6bWd4YWd2ZWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0Mzg3OTAsImV4cCI6MjA1ODAxNDc5MH0.XSl6D3Px5fgUzXZRRYcO5hV8YldFfRm1dMgjpobVrAc"; // Replace with your Supabase Anon Key

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
