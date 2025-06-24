import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";
import { UserService } from "src/user/user.service";
import { AuthRegisterDto } from "./dto/auth-register.dto";
import { access } from "fs";

@Injectable()
export class AuthService {
    constructor(
        private readonly JWTService: JwtService, 
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ) {}


    async createToken(user: User){
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name
        };

        return {
            accessToken: this.JWTService.sign(
            payload,
            {
                expiresIn: '1h', 
                subject: String(user.id),
                issuer: 'login-service',
                audience: 'users'
            })};
    }

    async checkToken(token: string): Promise<any> {
        try {
            return this.JWTService.verify(token);
        } catch (error) {
            return null; 
        }
    }

    async login(email: string, password: string){

        const user = await this.prisma.user.findFirst({
            where: {
                email,
                password 
            }
        });
        if (!user) {
            throw new Error('Credenciais inválidas.');
        }

        return this.createToken(user);


      
       
    }

    async forget(email: string){

        const user = await this.prisma.user.findFirst({
            where: {
                email
                
            }
        });
        if (!user) {
            throw new UnauthorizedException('Email incorreto.');
        }

        return true;


    }

    async reset(password: string, token: string){

        const id =0;

        const user = await this.prisma.user.update({
          where: {
            id
        },
          data: {
            password
          },
        });

         return this.createToken(user);
       
    }

    async register(data: AuthRegisterDto){

        const user = await this.userService.create(data);

        return this.createToken(user);
    }
   
}