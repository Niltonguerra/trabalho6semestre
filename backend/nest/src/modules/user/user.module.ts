import {  Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { RolesGuardUser } from './Guards/roles-user.guard';
import { JwtAuthGuardUser } from './Guards/jwt-auth-user.guard';
import { AuthUserService } from './services/authUser.service';
import { JwtStrategyUser } from './strategies/jwtUser.strategy';
import { AuthController } from './controllers/auth.controller';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/services/email.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule,
  ],
  providers: [
    UserService,
    AuthUserService,
    JwtService, 
    JwtAuthGuardUser,
    JwtStrategyUser,
    RolesGuardUser,
    EmailService,
  ],
  controllers: [
    UserController,
    AuthController,
  ],
  exports: [
    UserService,
    JwtAuthGuardUser,
    RolesGuardUser,
  ],

})

export class UserModule{}
