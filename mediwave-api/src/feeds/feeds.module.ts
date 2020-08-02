import { Module } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { FeedsController } from './feeds.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { FeedsSchema } from './../schemas/feeds.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Feeds', schema: FeedsSchema }])],
  providers: [FeedsService],
  controllers: [FeedsController]
})
export class FeedsModule {}
