import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    CompaniesModule,
    PostsModule,
    CategoriesModule,
    AuthModule,
    ProvidersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
