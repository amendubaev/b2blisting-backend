import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get('profile')
  @Auth()
  async profile(@CurrentUser('id') id: string) {
    return this.usersService.getProfile(id);
  }

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.getById(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
