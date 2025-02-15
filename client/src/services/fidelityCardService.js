import { supabase } from '../lib/supabase';

export const fidelityCardService = {
  async getCards() {
    const { data, error } = await supabase
      .from('fidelityCard')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async addCard({ name, barcode }) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from('fidelityCard')
      .insert([
        {
          name,
          barcode,
          user_id: user.id,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteCard(id) {
    const { error } = await supabase.from('fidelityCard').delete().match({ id });

    if (error) throw error;
  },
};
