import { NestInterceptor, CallHandler, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";


export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() => {
          const statusCode = response.statusCode;
          const method = request.method;
          const url = request.url;
          const time = Date.now() - now;

          console.log(
            `${method} ${url} ${statusCode} - ${time}ms`,
          );
        }),
      );
  }
}