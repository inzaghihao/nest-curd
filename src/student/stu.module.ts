import { Module } from '@nestjs/common';
import { StuController } from './stu.controller';
import { StuService } from './stu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StuController],
  providers: [StuService],
})
export class StuModule {}
