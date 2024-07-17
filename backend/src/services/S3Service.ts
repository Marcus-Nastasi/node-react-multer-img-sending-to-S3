import { S3Client } from "@aws-sdk/client-s3";
import AWS from '@aws-sdk/client-s3'
import dotenv from 'dotenv';
dotenv.config();

export default class S3Service {

   static getFileUrl(filename: string): string {
      return '';
   }
}


