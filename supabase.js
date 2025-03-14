import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tytqhynyngacgwotruxi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5dHFoeW55bmdhY2d3b3RydXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5Mjc5NDQsImV4cCI6MjA1NzUwMzk0NH0.iATNtASF6llrz-t7D2lWEthwcaVLesldnIqMSkEpAmo';
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: Fetch users
async function fetchUsers() {
  const { data, error } = await supabase.from('users').select('id, email');
  if (error) {
    console.error('Error fetching users:', error);
  } else {
    console.log('Users:', data);
  }
}

fetchUsers();