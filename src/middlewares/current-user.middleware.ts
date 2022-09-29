import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private usersService: UsersService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.session || {};
    if (userId) {
      const user = await this.usersService.findOne(userId);
      req.currentUser = user;
    }
    next();
  }
}
