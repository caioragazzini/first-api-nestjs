import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;
  
  
    @IsStrongPassword({
      minLength: 4,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
    })
    password:  string;
}
