// import nextConnect from "next-connect"
// import multer from "multer"
// ////////

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: './public/uploads',
//         filename: (req, file, cb) => cb(null, file.originalname)
//     })
// })

// ////////

// const apiRoute = nextConnect({
//     onError(error, req, res) {
//         res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
//     },
//     onNoMatch(req, res) {
//         res.status(405).json({ error: `Method ${ req.method } Not Allowed`})
//     }
// })

// ///////

// apiRoute.use(upload.array('theFiles'));

// ///////

// apiRoute.post((req, res) => {
//     res.status(200).json({ data: "LAOUAR MED MOUAAD FROM APIROPUOTE" })
// })

// // export default (req, res) => {
// //     if(req.method === 'POST') {
// //         res.status(200).json({ data: "LAOUAR MED MOUAAD" })
// //     } else {
// //         res.status(405).json({ error: `Method ${ req.method } Not Allowed`})
// //     }
// //  console.log(req.method)
// // }

// export default apiRoute;

// export const confing = {
//     api: {
//         bodyParser: false,
//     },
// }


import nextConnect from 'next-connect';
import multer from 'multer';
import transporter from '@/NodeMailer/NodeMailer.Confing';
import fs from 'fs'


const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
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
  
  console.log(req.body.Name)

  ////
  const options = {
    from: `Contact Speedo Services<contact@speedoservices.com>`,
    //to: 'speedospport@gmail.com',
    to: 'laouarmouaad@gmail.com',
    subject: 'New Message !',
    html: "<h1>Hello Mouaad</h1>",
    attachments: [
        {
            filename: 'mouaad.jpg',
            path: req.files[0].path
        },
        {
            filename: 'Hello.jpg',
            path: req.files[1].path
        }
    ]
  }
    
  await transporter.sendMail(options).then((err, result) => {
    if(err) {
      res.send(err)
    } else { 
        res.status(200).json({ data: 'success' });
    }
  })

  ///
  //delete files

  for(let i = 0; i < req.files.length; i++) {
    try {
        fs.unlinkSync(req.files[i].path)
    } catch(err) {
        console.log(err)
    }
  }

  ////
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};