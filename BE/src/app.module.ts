import { Module } from '@nestjs/common';
import { CountryModule } from './Country/Country.module';

@Module({
  imports: [CountryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
