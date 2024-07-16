import { Request, Response } from "express"

export const send = (req: Request, res: Response) => 
   res.status(202).json({ message: 'File uploaded successfully' }).end();


