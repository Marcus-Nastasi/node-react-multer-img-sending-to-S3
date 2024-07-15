import multer from 'multer';
import multerS3 from 'multer-s3';
import s3 from '../s3Config';
import { randomUUID } from 'crypto';

const upload: multer.Multer = multer({
   storage: multerS3({
      s3: s3,
      bucket: process.env.aws_bucket_name,
      metadata: (req, file, cb) => {
         cb(null, { fieldName: file.fieldname });
      },
      key: (req, file, cb) => {
         cb(null, randomUUID() + '-' + file.originalname);
      }
   })
});

export default upload;

