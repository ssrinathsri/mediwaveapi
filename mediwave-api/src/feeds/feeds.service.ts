import { FeedsDTO } from './../dto/feeds.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeedsInterface } from './../schemas/feeds.schema';

@Injectable()
export class FeedsService {
    private userInterface: FeedsInterface[] = [];
    constructor(@InjectModel('Feeds') private readonly feedsModel: Model<FeedsInterface>) { }

    async createFeeds(userDto: FeedsDTO) {
        const newfeeds = new this.feedsModel(userDto);
        const results = await newfeeds.save();
        console.log(results);
        return results;
    }
    async getFeeds() {
        const feeds = await this.feedsModel.find().exec();
        console.log('this getEmployees', feeds);
        return feeds;
    }

    async getByFeedsId(awards: number): Promise<FeedsInterface> {
        const fetchNumberOfAwards = await this.feedsModel.find({noOfawards: {$gt: awards}});
        console.log('checking getNumberOfAwards', awards);
        return fetchNumberOfAwards;
    }
}
