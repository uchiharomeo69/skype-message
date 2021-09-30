import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { MessageModule } from './message/message.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MessageModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: `${process.env.MONGO_URL}`,
          autoCreate: true,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
