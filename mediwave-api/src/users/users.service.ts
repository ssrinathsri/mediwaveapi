import { UserDTO } from './../dto/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './../schemas/user.schema'

@Injectable()
export class UsersService {
    private userInterface: UserInterface[] = [];
    constructor(@InjectModel('Users') private readonly userModel: Model<UserInterface>) { }

    async createUsers(userDto: UserDTO) {
        const newUsers = new this.userModel(userDto);
        const results = await newUsers.save();
        console.log(results);
        return results;
    }
    async getUsers() {
        const users = await this.userModel.find().exec();
        console.log('this getEmployees', users);
        return users;
    }

    async getByUserId(awards: number): Promise<UserInterface> {
        const fetchNumberOfAwards = await this.userModel.find({noOfawards: {$gt: awards}});
        console.log('checking getNumberOfAwards', awards);
        return fetchNumberOfAwards;
    }
}
