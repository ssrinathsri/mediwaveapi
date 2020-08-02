import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedsModule } from './feeds/feeds.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FeedsModule, UsersModule, MongooseModule.forRoot('mongodb+srv://admin:7YaPbDRtNPcfBD3P@employees-sru2a.mongodb.net/Employees?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
