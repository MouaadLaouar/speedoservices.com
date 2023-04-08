import { render } from '@react-email/render';
import ContactUs from '@/Emails/ContactUs';
import transporter from '@/NodeMailer/NodeMailer.Confing';



export default function handler(req, res) {
  const { Email } = req.body;

  const emailHTML = render(<ContactUs Data={ req.body } />)
   // dont miss to change  the email for who resive the message
  const options = {
    from: `LAOUAR MOUAAD<${process.env.NEXT_PUBLIC_USER}>`,
    to: Email,
    subject: 'New Message !',
    html: emailHTML,
  }
    
  transporter.sendMail(options).then((err, result) => {
    if(err) {
      res.send(err)
    } else { 
      res.send('OK')
    }
  })
}