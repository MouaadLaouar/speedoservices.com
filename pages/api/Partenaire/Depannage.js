import nextConnect from 'next-connect';
import multer from 'multer';
import transporter from '@/NodeMailer/NodeMailer.Confing';
import fs from 'fs'
import { render } from '@react-email/render';
import Depannage from '@/Emails/Partenaire/Depannage';

const upload = multer({
    storage: multer.diskStorage({
      destination: './tmp',
      filename: (req, file, cb) => cb(null, file.originalname),
    }),
});

const apiRoute = nextConnect({
    onError(error, req, res) {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.array('theFiles'));

apiRoute.post( async (req, res) => {
  
    
    const emailHtml = render(<Depannage Data={ req.body } />)
  
    ////
    const options = {
      from: `Contact Speedo Services<contact@speedoservices.com>`,
      to: 'speedospport@gmail.com',
      subject: 'Nouveaux Partnaire !',
      html: emailHtml,
      attachments: [
          {
            filename: 'Carte_Gris.jpg',
            path: req.files[0].path
          },
          {
            filename: 'Permis.jpg',
            path: req.files[1].path
          },
          {
            filename: 'Register_De_Commerce.jpg',
            path: req.files[2].path
          }
      ]
    }
      
    await transporter.sendMail(options).then((err, result) => {
      if(err) {
        res.send(err)
      } else { 
          res.status(200).json({ data: 'success' });
      }

      for(let i = 0; i < req.files.length; i++) {
        try {
            fs.unlinkSync(req.files[i].path)
        } catch(err) {
            console.log(err)
        }
      }
    })
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false
    }
}