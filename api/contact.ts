const SENDER = { name: 'Potencial Arquitetado', email: 'flow.controlx@gmail.com' };

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, subject, message } = req.body ?? {};
  if (!name || typeof email !== 'string' || !email.includes('@') || !message) {
    res.status(400).json({ error: 'Campos obrigatórios faltando' });
    return;
  }

  const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY as string,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: SENDER,
      to: [{ email: SENDER.email }],
      replyTo: { email, name },
      subject: `[Contato] ${subject || 'Nova mensagem'} — ${name}`,
      htmlContent: `<p><strong>Nome:</strong> ${escapeHtml(name)}</p>` +
        `<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>` +
        `<p><strong>Mensagem:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    }),
  });

  if (!brevoRes.ok) {
    res.status(502).json({ error: 'Erro ao enviar mensagem' });
    return;
  }

  res.status(200).json({ ok: true });
}
