import { Controller, Get, HttpCode, Param, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    // Endpoint to create new records (POST handler)
    @Post()
    @HttpCode(204) // In Nest, the status code is always 200 by default, except for POST requests which are 201. We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level
    create(): string {
        return 'This action adds a new cat'
    }
    
    // Endpoints to fetch the cats resources (GET routes)
    // Static path (without params)
    @Get()
    /*  Handlers often need access to the client request details. Nest provides access to the request object of the underlying platform (Express by default). We can access the request object by instructing Nest to inject it by adding the @Req() decorator to the handler's signature.
    In order to take advantage of Express typings (as in the request: Request parameter below), we need to install @types/express package. */ 
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }

    // Dynamic path (route with parameters -> accept dynamic data as part of the request [e.g., GET /cats/1 to get cat with id 1])
    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
    // @Param is used to decorate a method parameter (params in the example above), and makes the route parameters available as properties of that decorated method parameter inside the body of the method. As seen in the code above, we can access the id parameter by referencing params.id. We can also pass in a particular parameter token to the decorator, and then reference the route parameter directly by name in the method body.
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`;
    }


    /* Nest provides decorators for all of the standard HTTP methods : @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), and @Head(). 
    In addition, @All() defines an endpoint that handles all of them. */
}
