import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUser(): string {
        return 'user тут'
    }
    @Get('1')
    getUserq(): string {
        return 'User 1'
    }
}
