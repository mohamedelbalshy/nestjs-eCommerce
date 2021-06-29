import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ProductsController } from './products/products.controller';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UsersModule],
  controllers: [
    AppController,
    UsersController,
    ProductsController,
    OrdersController,
  ],
  providers: [AppService, UsersService],
})
export class AppModule {}
