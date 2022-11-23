import { Controller, Get } from '@nestjs/common';

@Controller('customers') // 'customers' is a prefix declared for every route -> it's a path prefix
export class CustomersController {
    @Get('profile') // 'profile' is a path information added in the decorator -> in this case, the path prefix of 'customers' combined with the decorator of @Get('profile') would produce a route mapping for requests like GET /customers/profile. And in this example, when a GET request is made to this endpoint, Nest routes the request to the user-defined findAll() method.
    findAll(): string {
        return 'This action returns the profile of the customer';
    }
}
