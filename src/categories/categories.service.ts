import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) { }

  create(createCategoryDto: CreateCategoryDto) {
    const category = this.prisma.category.create({
      data: createCategoryDto,
    });

    return category;
  }

  findAll() {
    const categories = this.prisma.category.findMany();

    return categories;
  }

  findOne(id: string) {
    const category = this.prisma.category.findFirst({
      where: {
        id,
      },
    });

    return category;
  }

  findBySlug(slug: string) {
    const category = this.prisma.category.findFirst({
      where: {
        slug,
      },
      include: {
        providers: true,
      },
    });

    return category;
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = this.prisma.category.update({
      where: {
        id,
      },
      data: updateCategoryDto,
    });

    return category;
  }

  remove(id: string) {
    const category = this.prisma.category.delete({
      where: {
        id,
      },
    });

    // TODO: откреплять/удалять посты, где была привязана категория

    return category;
  }
}
