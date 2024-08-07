import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCounterDto } from './dto/create-counter.dto';
import { UpdateCounterDto } from './dto/update-counter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Counter } from './entities/counter.entity';

@Injectable()
export class CounterService {
  constructor(
    @InjectRepository(Counter)
    private countersRepository: Repository<Counter>,
  ) {}

  async create(createCounterDto: CreateCounterDto) {
    const counter = this.countersRepository.create(createCounterDto);
    return await this.countersRepository.save(counter);
  }

  async findAll() {
    return await this.countersRepository.find();
  }

  async findOne(id: number) {
    return await this.countersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCounterDto: UpdateCounterDto) {
    const counter = await this.findOne(id);
    if (!counter) throw new NotFoundException();

    Object.assign(counter, updateCounterDto);

    return await this.countersRepository.save(counter);
  }

  async remove(id: number) {
    const counter = await this.findOne(id);
    if (!counter) throw new NotFoundException();

    return await this.countersRepository.remove(counter);
  }
}
