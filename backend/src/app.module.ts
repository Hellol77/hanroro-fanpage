import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BoardModule } from './board/board.module';
import { BoardController } from './board/board.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGOOSE_CONNECT_STRING),
    BoardModule,
  ],
  controllers: [AppController, BoardController],
  providers: [AppService],
})
export class AppModule {}
