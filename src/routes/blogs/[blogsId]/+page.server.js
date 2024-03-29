import { supabase } from "$lib/supabaseClient"

export async function load({params}) {
  /* selects the id of the blogs inside the supabase and loads it inside the folder, this creates a dynamic layout. */
  const { data } = await supabase.from("Blog_Post").select().eq('id', params.blogsId);
  const { data: self } = await supabase.from("Blog_Post_Self").select().eq('id', params.blogsId);
  
 
  return {
    Blog_Post: data,
    Blog_Post_Self: self,
  }
}