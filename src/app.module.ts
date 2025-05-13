import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';


@Module({
  imports: [UserModule, PrismaModule, ClienteModule, PedidoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
