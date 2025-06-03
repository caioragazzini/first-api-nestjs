import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly JWTService: JwtService) {} 

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
   
}