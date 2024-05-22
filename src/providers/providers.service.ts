import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { PrismaService } from 'src/prisma.service';
import { Providers } from '@prisma/client';
import { makeSlug } from 'src/utils/utils';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Injectable()
export class ProvidersService {
  constructor(private prisma: PrismaService) { }

  async create(createProviderDto: CreateProviderDto): Promise<Providers> {
    // const isProviderExists = await this.prisma.providers.findUnique({
    //   where: { title: createProviderDto.title },
    // });

    // if (isProviderExists) {
    //   throw new BadRequestException('Provider already exists');
    // }

    const name = createProviderDto.title;
    const slug = makeSlug(name);
    const categoryId = createProviderDto.categories;
    createProviderDto.categories = {
      connect: { id: categoryId },
    };

    const data = { slug, ...createProviderDto };
    console.log(data);

    const provider = await this.prisma.providers.create({
      data,
    });

    return provider;
  }

  findAll() {
    return this.prisma.providers.findMany();
  }

  findOne(id: string) {
    return this.prisma.providers.findUnique({
      where: {
        id,
      },
      include: {
        categories: true,
      },
    });
    // .categories();
  }

  getBySlug(slug: string) {
    return this.prisma.providers.findUnique({
      where: {
        slug,
      },
    });
    // .categories();
  }

  update(id: string, updateProviderDto: UpdateProviderDto) {
    // return this.prisma.providers.update({
    //   where: {
    //     id,
    //   },
    //   data: { updateProviderDto },
    // });
    return id;
  }

  remove(id: string) {
    return this.prisma.providers.delete({
      where: {
        id,
      },
    });
  }
}
