import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {

    return await this.prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
       
      }

    });   
      
  }

  async findAll() {
    return await this.prisma.user.findMany({
      // select: {
      //   name: true
      // }
      
  });
  }

  async findOne(id: number) { 

    return await this.prisma.user.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: {
        id
      },
      data: updateUserDto
    }); 
    
  }
     

  async remove(id: number) {
    return  await this.prisma.user.delete({
      where: { id }
    });
  }
}
