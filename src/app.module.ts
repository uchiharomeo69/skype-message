import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { MessageModule } from './message/message.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MessageModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRootAsync({
    //   useFactory: () => {
    //     console.log('uri', process.env.MONGO_URL);
    //     return {
    //       uri:
    //         process.env.MONGO_URL ||
    //         'mongodb+srv://huypt:123@cluster0.oyzgo.mongodb.net/mess_message?retryWrites=true&w=majority',
    //       autoCreate: true,
    //     };
    //   },
    // }),
    MongooseModule.forRoot(
      'mongodb+srv://huypt:123@cluster0.oyzgo.mongodb.net/mess_message?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
