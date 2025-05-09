import { Injectable } from '@nestjs/common';
import { PrismaService } from  'src/prisma/prisma.service'
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteService {

    constructor(private readonly prisma: PrismaService) {}

    async create(prisma : CreateClienteDto) {
        return await this.prisma.cliente.create({
            data: prisma
        });
    }

   
}
