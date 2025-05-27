import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [PedidoController],
  providers: [PedidoService],
  imports: [PrismaModule],
})
export class PedidoModule {}
