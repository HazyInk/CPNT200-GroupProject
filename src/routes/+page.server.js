import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("Blog_Post").select();
  return {
    Blog_Post: data ?? [],
  };
}