import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { ParamId } from 'src/decorators/param-id.decorator';

@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

 
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@ParamId() id : number) {
    console.log({id});
    return this.userService.findOne(id);
  }


  @Put(':id')
  async update(@Param('id') id, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Patch(':id')
  async partialUpdate(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  return this.userService.update(+id,updateUserDto); // método separado no service
}

  @Delete(':id')
  async remove(@ParamId() id: number){
    return this.userService.remove(+id);
  }
}
