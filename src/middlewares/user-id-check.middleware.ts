import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction , Request, Response} from "express";

export class UserIdCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    console.log('antes do middleware userIdCheckMiddleware');

    

    if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {   
        
      throw new BadRequestException('O id do usuário deve ser um número positivo maior que zero.');
    }

    console.log('depois do middleware userIdCheckMiddleware');

    next();


  }
}