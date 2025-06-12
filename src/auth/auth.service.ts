import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private readonly JWTService: JwtService, private readonly prisma: PrismaService){}


    async createToken(userId: number): Promise<string> {
        const payload = { userId };
        return this.JWTService.sign(payload);
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

        return user;


      
       
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

        await this.prisma.user.update({
          where: {id},
          data: {
            password
          }
        })

        return true;
       
    }
   
}