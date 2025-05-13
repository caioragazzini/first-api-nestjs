import { CreatePedidoDto } from "./create-pedido.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
   
  

}
