import { GetObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
dotenv.config();

import S3Config from '../config/S3Config';

export default class S3Service {

   static async getFileUrl(): Promise<string> {

      const getObj = {
         Bucket: process.env.aws_bucket_name,
         Key: '15088a3d-2f69-4280-b73f-5fcba0fd225b-61AOlD477dS._SY466_.jpg'
      }

      const goc = new GetObjectCommand(getObj);

      try {

         const requst = await S3Config.client().send(goc);

         console.log(requst.Body)

         console.log(`https://${process.env.aws_bucket_name}.s3.${process.env.aws_region}.amazonaws.com/15088a3d-2f69-4280-b73f-5fcba0fd225b-61AOlD477dS._SY466_.jpg`);

      } catch(e: any) {
         console.log(e);
      }

      return '';
   }
}



