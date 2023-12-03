import { supabase } from "$lib/supabaseClient"

export async function load({params}) {
  const { data } = await supabase.from("Blog_Post").select().eq('id', params.blogsId);
  
 
  return {
    Blog_Post: data,
  }
}