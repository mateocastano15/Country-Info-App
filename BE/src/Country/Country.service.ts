import { Injectable } from "@nestjs/common";

export interface Country{
    countryCode: string;
    name: string;
}

export interface CountryInfo{
    borders:string[]
    populationCounts: {
        year: string;
        value: number;
    }[]
    flag: string;
}

@Injectable({})
export class CountryService{
    getAvailableCountries(){
        return fetch('https://date.nager.at/api/v3/AvailableCountries', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
        
    }

    async getCountryInfo(country: Country): Promise<CountryInfo> {
        const [bordersResponse, populationResponse, flagResponse] = await Promise.all([
            fetch(`https://date.nager.at/api/v3/CountryInfo/${country.countryCode}`),
            fetch('https://countriesnow.space/api/v0.1/countries/population', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ country: country.name })
            }),
            fetch('https://countriesnow.space/api/v0.1/countries/flag/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ iso2: country.countryCode })
            })
        ]);
    
        if (!bordersResponse.ok || !populationResponse.ok || !flagResponse.ok) {
            throw new Error('Error fetching data');
        }
    
        const bordersData = await bordersResponse.json();
        const populationData = await populationResponse.json();
        const flagData = await flagResponse.json();
    
        const borders: string[] = bordersData.borders || [];
        const populationCounts: { year: string; value: number }[] = populationData.data.populationCounts || [];
        const flag: string = flagData.data.flag || "";
    
        const countryInfo: CountryInfo = {
            borders,
            populationCounts,
            flag,
        };
    
        return countryInfo;
    }
}
