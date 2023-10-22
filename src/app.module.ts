import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config'
import { UserModule } from './user/user.module';
import { VerticalController } from './vertical/vertical.controller';
import { VerticalService } from './vertical/vertical.service';
import { VerticalModule } from './vertical/vertical.module';
import { CardController } from './card/card.controller';
import { CardService } from './card/card.service';
import { CardModule } from './card/card.module';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, VerticalModule, CardModule, CommentModule],
  controllers: [AppController, VerticalController, CardController, CommentController],
  providers: [AppService, VerticalService, CardService],
})
export class AppModule {}
