import dotenv from 'dotenv';
dotenv.config();

import { S3Client } from '@aws-sdk/client-s3';

export default class S3Config {

   static client(): S3Client {
      return new S3Client({
         region: process.env.aws_region,
         credentials: {
            accessKeyId: process.env.aws_accessKeyId,
            secretAccessKey: process.env.aws_secretKey
         }
      });
   }
}

