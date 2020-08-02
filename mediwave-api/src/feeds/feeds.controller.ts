import { Controller, Post, Body, Get, Query, Param, Put, Delete, Res, NotFoundException } from '@nestjs/common';
import { FeedsDTO } from './../dto/feeds.dto';
import { FeedsService } from './feeds.service';

@Controller('feeds')
export class FeedsController {
    constructor(private readonly feedsService: FeedsService) { }
    @Post()
    async createUsers(@Body() feedsDTO: FeedsDTO): Promise<any> {
        const results = await this.feedsService.createFeeds(feedsDTO);
        // console.log('Finally added employess', results);
        return results;
    }
    @Get()
    async getUsers() {
        const results = await this.feedsService.getFeeds();
        console.log('Get the all employees details', results);
        return results;
    }
    @Get(':empId')
    async getUserById(@Param('empId') empId) {
        const employeeId = await this.feedsService.getByFeedsId(empId);
        console.log('finally checking employess details 2', employeeId);
        return employeeId;
    }
}
