const sendEmail = async (emailData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (response.ok) {
      console.log('E-mail enviado com sucesso')
    } else {
      console.error('Erro ao enviar e-mail:', response.statusText)
    }
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
  }
}

export default sendEmail
