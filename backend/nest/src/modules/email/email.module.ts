import { Module } from '@nestjs/common';
import { EmailController } from './controllers/email.controller';
import { EmailService } from './services/email.service';
import { JwtModule} from '@nestjs/jwt';

import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    JwtModule,
  ],
  providers: [
    EmailService,
  ],
  controllers: [
    EmailController,
  ],
  exports: [
    EmailService,
  ], 
})
export class EmailModule {}
