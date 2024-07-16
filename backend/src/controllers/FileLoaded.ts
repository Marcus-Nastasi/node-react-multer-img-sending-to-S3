import { Request, Response } from "express"

export default class FileLoaded {
   static done(request: Request, response: Response) {
      response.status(202).json({ message: 'File uploaded successfully' }).end();
   }
}


