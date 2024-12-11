import { Module } from "@nestjs/common";
import { CountryController } from "./Country.controller";
import { CountryService } from "./Country.service";

@Module({
    controllers: [CountryController],
    providers: [CountryService]
})
export class CountryModule {}