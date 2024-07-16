import multer from 'multer';
import multerS3 from 'multer-s3';
import s3 from '../config/s3Config';
import { randomUUID } from 'crypto';

import { Request } from 'express';

export default class MulterClass {

   m: typeof multer;

   constructor() {
      this.m = multer;
   }

   static upload: multer.Multer = multer({
      storage: multerS3({
         s3: s3,
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


