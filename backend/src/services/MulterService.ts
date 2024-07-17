import multer, { Multer } from 'multer';
import multerS3 from 'multer-s3';
import { randomUUID } from 'crypto';
import { Request } from 'express';

import S3Config from '../config/S3Config';

export default class MulterService {

   static upload: Multer = multer({
      storage: multerS3({
         s3: S3Config.client(),
         bucket: process.env.aws_bucket_name as string,
         metadata: (req: Request, file: Express.Multer.File, cb) => {
            cb(null, { fieldName: file.fieldname });
         },
         key: (req: Request, file: Express.Multer.File, cb) => {
            cb(null, randomUUID() + '-' + file.originalname);
         }
      })
   });
}


