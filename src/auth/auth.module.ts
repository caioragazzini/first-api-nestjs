import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: process.env.JWT_SECRET}),
    ],
    controllers: [],
    providers: [],
    exports: []
})

export class AuthModule {}