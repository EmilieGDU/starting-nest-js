import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    // Endpoint to create new records (POST handler)
    @Post()
    @HttpCode(204) // In Nest, the status code is always 200 by default, except for POST requests which are 201. We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level
    create(): string {
        return 'This action adds a new cat'
    }
    
    // Endpoint to fetch the cats resource (GET route)
    @Get()
    /*  Handlers often need access to the client request details. Nest provides access to the request object of the underlying platform (Express by default). We can access the request object by instructing Nest to inject it by adding the @Req() decorator to the handler's signature.
    In order to take advantage of Express typings (as in the request: Request parameter below), we need to install @types/express package. */ 
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }

    /* Nest provides decorators for all of the standard HTTP methods : @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), and @Head(). 
    In addition, @All() defines an endpoint that handles all of them. */
}
