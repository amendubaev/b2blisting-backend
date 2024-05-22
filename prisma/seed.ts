import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const seed = async () => {
  try {
    // Создание пользователей
    for (let i = 0; i < 10; i++) {
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          password: faker.internet.password(),
          name: faker.person.firstName(),
          //   role: Math.random() < 0.5 ? Role.USER : Role.ADMIN,
          //   posts: {
          //     create: [
          //       {
          //         title: faker.lorem.words(3),
          //         slug: faker.lorem.slug(),
          //         content: faker.lorem.paragraphs(2),
          //         active: true,
          //         capital: String(faker.number.int()),
          //         limit: String(faker.number.int()),
          //         age: String(faker.number.int()),
          //         score: Score.FIVE,
          //         users: faker.number.int(),
          //       },
          //     ],
          //   },
        },
      });
    }

    // Создание providers
    for (let j = 0; j < 5; j++) {
      await prisma.providers.create({
        data: {
          title: faker.lorem.words(2),
          slug: faker.lorem.slug(),
          content: faker.lorem.paragraphs(2),
          active: true,
          score: 'FIVE',
          //   parentCategoryId: { connect: { id: faker.datatype.uuid() } }, // Например, подключение к родительской категории
          //   childCategories: {
          //     create: Array.from({ length: 3 }, () => ({
          //       title: faker.lorem.words(1),
          //       slug: faker.lorem.slug(),
          //       active: Math.random() < 0.8,
          //     })),
          //   },
        },
      });
    }

    // Создание категорий
    for (let j = 0; j < 5; j++) {
      await prisma.category.create({
        data: {
          title: faker.lorem.words(2),
          slug: faker.lorem.slug(),
          active: true,
          //   parentCategoryId: { connect: { id: faker.datatype.uuid() } }, // Например, подключение к родительской категории
          //   childCategories: {
          //     create: Array.from({ length: 3 }, () => ({
          //       title: faker.lorem.words(1),
          //       slug: faker.lorem.slug(),
          //       active: Math.random() < 0.8,
          //     })),
          //   },
        },
      });
    }

    // Также добавьте генерацию данных для остальных моделей как Media, Banner, Providers, PaymentMethods и др.

    console.log('Seed data successfully inserted.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
