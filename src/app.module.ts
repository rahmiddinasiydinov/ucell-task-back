import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RegionsModule } from './regions/regions.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }), RegionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
