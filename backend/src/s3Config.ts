import dotenv from 'dotenv';
dotenv.config();

import { S3Client } from '@aws-sdk/client-s3';

const s3 = new S3Client({
   region: process.env.aws_region,
   credentials: {
      accessKeyId: process.env.aws_accessKeyId,
      secretAccessKey: process.env.aws_secretKey
   }
});

export default s3;



