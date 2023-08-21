import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Student } from './student.entity';
import initData from './initData';

@Injectable()
export class StuService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  // 查询列表带分页
  async getStudents(parmas: any): Promise<any> {
    const { keyword, page_size, page_no } = parmas;
    const offset = Number((page_no - 1) * page_size);
    let data = [];
    if (keyword) {
      const SQL = `select * from student where name like '%${keyword}%' or email like '%${keyword}%' or hobby like '%${keyword}%' `;
      data = await this.studentRepository.query(SQL);
    } else {
      data = await this.studentRepository
        .createQueryBuilder('student')
        .orderBy('student.create_time', 'DESC')
        .skip(offset)
        .take(page_size)
        .getMany();
    }
    const total = await this.studentRepository.count();
    return {
      data,
      total,
    };
  }

  async findOne(data: any): Promise<Student> {
    return this.studentRepository.findOneBy({ id: Equal(data.id) });
  }
  async create(data: Student): Promise<Student> {
    return this.studentRepository.save(data);
  }
  async update(data: Student): Promise<Student> {
    return this.studentRepository.update(data.id, data).then(() => data);
  }

  async delete(data: any): Promise<void> {
    return this.studentRepository
      .delete({ id: Equal(data.id) })
      .then(() => undefined);
  }
  // 重置数据表
  async resetTable() {
    await this.studentRepository
      .createQueryBuilder()
      .delete()
      .from(Student)
      .execute();
    await this.studentRepository
      .createQueryBuilder()
      .insert()
      .into(Student)
      .values(initData)
      .execute();
  }
}
