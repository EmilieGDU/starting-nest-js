import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CustomersController, CatsController],
  providers: [AppService],
})
export class AppModule {}
