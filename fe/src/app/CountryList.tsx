import Link from "next/link";

export interface Country {
    countryCode:string
    name:string
}

export default async function CountryList() {
    const res = await fetch('http://localhost:8080/countries');
    const json = await res.json();

    return(
      <ul>
      {json.map((country: Country) => (
        <li key={country.countryCode}>
          <Link href={`/country/${encodeURIComponent(country.name.toLowerCase())}/${encodeURIComponent(country.countryCode.toLowerCase())}`}>
            {country.name}
          </Link>
        </li>
      ))}
    </ul>
    )
}