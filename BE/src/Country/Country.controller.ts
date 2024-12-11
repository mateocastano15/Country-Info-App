import { Body, Controller, Get, Post } from "@nestjs/common";
import { Country, CountryService } from "./Country.service";

@Controller({})
export class CountryController{

    constructor(private countryService: CountryService){}
    
    @Get('/countries')
    getAvailableCountries(){
        return this.countryService.getAvailableCountries();
    }

    @Post('/country')
    getCountryInfo(@Body() country: Country){
        return this.countryService.getCountryInfo(country);
    }
}