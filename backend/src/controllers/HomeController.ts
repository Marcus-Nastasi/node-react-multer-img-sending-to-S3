import { Request, Response } from "express";

export default class HomeController {
   static index(request: Request, response: Response) {
      response.status(200).render('index.html');
   }
}


