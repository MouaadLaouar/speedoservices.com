import { render } from '@react-email/render';
import NewClient from '@/Emails/NewClient';
import transporter from '@/NodeMailer/NodeMailer.Confing';



export default function handler(req, res) {

  const emailHTML = render(<NewClient Data={ req.body } />)

  const options = {
    from: `Speedo Services Support<${process.env.NEXT_PUBLIC_USER}>`,
    to: 'kayakist46@gmail.com',
    subject: 'Nouveaux Client',
    html: emailHTML
  }
    
  transporter.sendMail(options).then((err, result) => {
    if(err) {
      res.send(err)
    } else { 
      res.send('OK')
      console.log(req.body)
    }
  })
}
  