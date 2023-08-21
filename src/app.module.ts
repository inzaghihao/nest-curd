import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuModule } from './student/stu.module';

@Module({
  imports: [
    StuModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // 数据库主机名
      port: 3306, // 数据库端口号
      username: 'root', // 数据库用户名
      password: 'root', // 数据库密码
      database: 'nest-table', // 数据库名
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体类所在的路径
      // synchronize: true, // 设置为 true 会自动创建数据库表结构，生产环境中请谨慎使用
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
