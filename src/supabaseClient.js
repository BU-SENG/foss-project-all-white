import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://ligypemgemlmilklqjmklozs.supabase.co' 
const supabaseKey = 'sb_publishable_FieZpbl3jpRwZ2btnrfubQ_TR-CqdDe'

export const supabase = createClient(supabaseUrl, supabaseKey)