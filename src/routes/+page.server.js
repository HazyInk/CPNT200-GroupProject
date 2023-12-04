import { supabase } from "$lib/supabaseClient";

export const load = async (loadEvent) => {
  const { data } = await supabase.from("Blog_Post").select();
  const { data: self } = await supabase.from("Blog_Post_Self").select();
  return {
    Blog_Post: data,
    Blog_Post_Self: self
  }
}
  


