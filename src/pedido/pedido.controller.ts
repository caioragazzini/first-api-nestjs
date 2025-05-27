import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PedidoService } from './pedido.service';


@Controller('pedido')
export class PedidoController {

constructor(private readonly pedidoService : PedidoService) {}

@Get(':id')
 async findOne(@Param('id', ParseIntPipe) id : number) {
    const pedido = await this.pedidoService.FindOne(id);

    if(!pedido) {
        return { message: 'Pedido não encontrado' };
    }

    return {
        message: 'Pedido encontrado',
        pedido
        
    }
}

}





