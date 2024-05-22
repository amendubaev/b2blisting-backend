import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthDto } from 'src/auth/dto/auth.tdo';
import { hash } from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  getAll() {
    return this.prisma.user.findMany();
  }

  getById(id: string) {
    if (!id) {
      throw new ForbiddenException('id is empty')
    }

    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getProfile(id: string) {
    const profile = await this.getById(id);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = profile;

    return rest;
  }

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      name: '',
      password: await hash(dto.password),
    };

    return this.prisma.user.create({
      data: user,
    });
  }

  // update(id: string, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} user`;
  // }
}
