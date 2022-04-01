import { ITaskRepository } from './i-task.repository';
import { TaskInMemoryRepository } from './task.repository';

export default [
  // Repository
  {
    provide: ITaskRepository,
    useClass: TaskInMemoryRepository,
  },
];
