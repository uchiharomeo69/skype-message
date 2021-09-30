import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';
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
  controllers: [],
  providers: [],
})
export class AppModule {}
