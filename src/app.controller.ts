import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './repository/in-memory/task';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
    */

  @Get()
  async getAll(): Promise<Task[]> {
    const tasks = await this.appService.getAll();

    return tasks;
  }

}
