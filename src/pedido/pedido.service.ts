import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto/create-pedido.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PedidoService {

    // constructor(private readonly prisma: PrismaService) {}

    // async create(prisma: CreatePedidoDto){
    //     return await this.prisma.pedido.create({
    //         data: prisma
    // });

       
    // }
}
