import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PedidoService {

    constructor(private readonly prisma: PrismaService) {}

    async FindOne(id : number) {

        const pedido = await this.prisma.pedido.findUnique({
            where: {
                id 
            }
        })
        if(!pedido) {
            return { message: 'Pedido não encontrado' };
        }   
        return {
            message: 'Pedido encontrado',
            pedido
        }
    }
    
   

  
}
