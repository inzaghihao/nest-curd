import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { StuService } from './stu.service';

@Controller('stu')
export class StuController {
  constructor(private readonly stuService: StuService) {}

  @Post('getStudents')
  @HttpCode(200)
  getStudents(@Body() body: any): any {
    return this.stuService.getStudents(body);
  }
  @Post('delete')
  delete(@Body() body: any) {
    return this.stuService.delete(body);
  }
  @Post('create')
  create(@Body() body: any) {
    return this.stuService.create(body);
  }
  @Post('update')
  update(@Body() body: any) {
    return this.stuService.update(body);
  }
  @Post('resetTable')
  resetTable() {
    return this.stuService.resetTable();
  }
  @Post('findOne')
  findOne(@Body() body: any) {
    return this.stuService.findOne(body);
  }
}
