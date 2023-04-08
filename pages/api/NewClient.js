import { render } from '@react-email/render';
import NewClient from '@/Emails/NewClient';
import transporter from '@/NodeMailer/NodeMailer.Confing';



export default function handler(req, res) {
  const { FirstName, LastName, Email } = req.body;

  const emailHTML = render(<NewClient FirstName={ FirstName } LastName={ LastName } />)

  const options = {
    from: `LAOUAR MOUAAD<${process.env.NEXT_PUBLIC_USER}>`,
    to: Email,
    subject: 'Welcome to Speedo Services',
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
  