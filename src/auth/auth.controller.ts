import { Controller, Post } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { AuthRegisterDto } from "./dto/auth-register.dto";
import { AuthForgetDto } from "./dto/auth-forget.dto";

@Controller('auth')
export class AuthController {

    @Post('login')
    async login(@Body() body:AuthLoginDto) {       
       
    }

     @Post('register')
    async register(@Body() body:AuthRegisterDto) {       
       
    }


    @Post('forgot-password')
    async forgotPassword(@Body() body: AuthForgetDto) {

    }





}