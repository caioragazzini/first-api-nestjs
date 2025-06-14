import { Controller, Post } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { AuthRegisterDto } from "./dto/auth-register.dto";
import { AuthForgetDto } from "./dto/auth-forget.dto";
import { AuthResetDto } from "./dto/auth-reset.dto";
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() {email, password}:AuthLoginDto) {     
        return this.authService.login(email, password); 
       
    }

     @Post('register')
    async register(@Body() body:AuthRegisterDto) {   

        return this.userService.create(body);       
    }

    @Post('forget')
    async forgotPassword(@Body() body: AuthForgetDto) {

        return this.authService.forget(body.email);
    }

@Post('reset')
    async reset(@Body() { password, token }: AuthResetDto) {

        return this.authService.reset(password, token);
    }

}