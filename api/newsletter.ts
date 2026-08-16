// Brevo list "Potencial Arquitetado - Newsletter" (id 3), created in the ROI Labs Brevo account.
const BREVO_LIST_ID = 3;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email } = req.body ?? {};
  if (typeof email !== 'string' || !email.includes('@')) {
    res.status(400).json({ error: 'E-mail inválido' });
    return;
  }

  const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY as string,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, listIds: [BREVO_LIST_ID], updateEnabled: true }),
  });

  if (brevoRes.ok) {
    res.status(200).json({ ok: true });
    return;
  }

  const data = await brevoRes.json().catch(() => ({}));
  if (data.code === 'duplicate_parameter') {
    res.status(400).json({ error: 'já está inscrito' });
    return;
  }

  res.status(502).json({ error: data.message || 'Erro ao inscrever' });
}
