import { createParamDecorator, ExecutionContext, NotFoundException } from "@nestjs/common";

export const User = createParamDecorator((filter: string, context: ExecutionContext) => {

    const request = context.switchToHttp().getRequest();

if (!request.user) {
        throw new NotFoundException('Usuário não encontrado no contexto da requisição. Certifique-se de que o guard AuthGuard está sendo utilizado corretamente.');
    }   
    
    if(filter) {
        return request.user[filter];
    }
    return request.user;

});
