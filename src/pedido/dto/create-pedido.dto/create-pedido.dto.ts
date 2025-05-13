import { IsDate, IsString } from "class-validator";

export class CreatePedidoDto {


   
    @IsString()
    clienteId: string;

    @IsDate()
    dataPedido: Date;

    @IsString()
    status: string;


}
