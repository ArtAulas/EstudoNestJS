import { Module } from '@nestjs/common';
import { AppController } from './Controller/app.controller';
import { ImagensController } from './Controller/imagens.controller';
import { AppService } from './Service/app.service';
import { ImagensService } from './Service/imagens.service';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),],
  controllers: [AppController, ImagensController],
  providers: [AppService, ImagensService],
})
export class AppModule {}
