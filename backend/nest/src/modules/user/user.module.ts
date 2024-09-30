import {  Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { RolesGuardUser } from './Guards/rolesUser.guard';
import { JwtAuthGuardUser } from './Guards/jwtAuthUser.guard';
import { AuthUserService } from './services/authUser.service';
import { JwtStrategyUser } from './strategies/jwtUser.strategy';
import { AuthUserController } from './controllers/auth.controller';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/services/email.service';
import { PrestadorService } from './services/prestador.service';
import { VeiculoService } from './services/veiculo.service';
import { PrestadorController } from './controllers/prestador.controller';
import { VeiculoController } from './controllers/veiculo.controller';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule,
  ],
  providers: [
    UserService,
    AuthUserService, 
    JwtAuthGuardUser,
    JwtStrategyUser,
    RolesGuardUser,
    EmailService,
    PrestadorService,
    JwtService,
    VeiculoService,
  ],
  controllers: [
    UserController,
    AuthUserController,
    PrestadorController,
    VeiculoController,
  ],
  exports: [
    UserService,
    JwtAuthGuardUser,
    RolesGuardUser,
    JwtStrategyUser,
    JwtService,
    UserService,
    VeiculoService,
    PrestadorService,
  ],

})

export class UserModule{}
