import { Module } from '@nestjs/common';
import { ViagemCRUDService} from './services/viagemCRUD.service';
import { ViagemUsuarioController } from './controllers/viagemUsuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { ViagemSchema } from './entities/viagem.entity';
import { ViagemUsuarioService } from './services/viagemUsuario.service';
import { ViagemCRUDController } from './controllers/viagemCRUD.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'viagens', schema: ViagemSchema }]),
    JwtModule,
    UserModule
  ],
  providers: [
    ViagemUsuarioService,
    ViagemCRUDService,
  ],
  controllers: [
    ViagemUsuarioController,
    ViagemCRUDController,
  ],
  exports: [
    ViagemUsuarioService,
    ViagemCRUDService,
  ]
})
export class ViagemModule {}
