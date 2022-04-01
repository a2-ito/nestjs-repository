import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { InMemoryRepositoryModule } from './repository/in-memory/module';

@Module({
  imports: [InMemoryRepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
