import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors';
import { json, raw } from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'FomeFacil', // Substitua por uma string aleatória para assinar as sessões
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(
    '/webhook',
    raw({ type: 'application/json' }) // O Stripe envia dados como JSON
  );

  app.useGlobalPipes(new ValidationPipe());
  app.use(cors());
  app.enableCors({
    origin: '*', // Permite qualquer origem
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(3100, '0.0.0.0');
  console.log(`Application is running on: http://localhost:3100`);
}
bootstrap();
