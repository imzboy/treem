import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@/lib/supabase';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    const { data: currentData } = await supabase
      .from('investor_summary')
      .select('distributions_received')
      .single();

    const newValue = (currentData?.distributions_received ?? 0) + 100;

    const { data, error } = await supabase
      .from('investor_summary')
      .update({ distributions_received: newValue })
      .eq('id', "f6284349-0e47-4f84-8714-06e09fb56af0");

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
