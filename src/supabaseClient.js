import { createClient } from '@supabase/supabase-js'

// --- CHECK IF RUNNING LOCALLY ---
// Use the custom proxy path for local development, otherwise use the full URL.
const isLocal = window.location.hostname === 'localhost';

const supabaseUrl = isLocal 
  ? 'http://localhost:5173/supabase' // Use relative path for proxy
  : 'https://ligypemgemlmilklqjmklozs.supabase.co'; // Use full URL for production build

const supabaseKey = 'sb_publishable_FieZpbl3jpRwZ2btnrfubQ_TR-CqdDe'

export const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;