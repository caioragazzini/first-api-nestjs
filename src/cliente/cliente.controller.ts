import { ClienteService } from './cliente.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}
    
    @Post()
    async create(@Body() createClienteDto: CreateClienteDto) {
        return this.clienteService.create(createClienteDto);
    }

}
