import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    /* 
    Handlers often need access to the client request details. Nest provides access to the request object of the underlying platform (Express by default). We can access the request object by instructing Nest to inject it by adding the @Req() decorator to the handler's signature.
    In order to take advantage of Express typings (as in the request: Request parameter below), we need to install @types/express package.
    */ 
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
}
