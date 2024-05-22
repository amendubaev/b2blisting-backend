import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) { }

  // create(createPostDto: CreatePostDto) {
  //   return 'This action adds a new post';
  // }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  // update(id: string, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} post`;
  // }
}
