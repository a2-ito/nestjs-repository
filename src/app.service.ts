import { Injectable } from '@nestjs/common';
import { Task } from './repository/in-memory/task';
import { ITaskRepository } from './repository/in-memory/i-task.repository';

@Injectable()
export class AppService {
  constructor(private readonly taskRepository: ITaskRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  getAll(): Promise<Task[]> {
    return this.taskRepository.getAll();
  }
}

