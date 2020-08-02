import { Controller, Post, Body, Get, Query, Param, Put, Delete, Res, NotFoundException } from '@nestjs/common';
import { UserDTO } from './../dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userssService: UsersService) { }
    @Post()
    async createUsers(@Body() userDTO: UserDTO): Promise<any> {
        const results = await this.userssService.createUsers(userDTO);
        // console.log('Finally added employess', results);
        return results;
    }
    @Get()
    async getUsers() {
        const results = await this.userssService.getUsers();
        console.log('Get the all employees details', results);
        return results;
    }
    @Get(':userId')
    async getUserById(@Param('userId') userId) {
        const getUserById = await this.userssService.getByUserId(userId);
        console.log('finally checking employess details 2', getUserById);
        return getUserById;
    }
}
