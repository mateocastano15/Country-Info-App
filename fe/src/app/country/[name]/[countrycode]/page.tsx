"use client";
import Title from "./Title";
import Borders from "./Borders";
import Population from "./Population";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Country {
    name: string;
    countrycode: string;
}

export default function Home() {
    const params = useParams();
    const [query, setQuery] = useState<Country>({ name: '', countrycode: '' });
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (params) {
            const { name, countrycode } = params;
            setQuery({ name: name as string, countrycode: countrycode as string });
        }
    }, [params]);

    useEffect(() => {
        if (query.name && query.countrycode) {
            fetch('http://localhost:8080/country', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ countryCode: query.countrycode, name: query.name })
            })
            .then(res => res.json())
            .then(data => {
                console.log('Fetched data:', data); // Debugging log
                setData(data);
            })
            .catch(error => console.error('Error:', error));
        }
    }, [query]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Title name={query.name} flag={data.flag} />
            <Borders borders={data.borders.commonName} countryCode={data.borders.CountryCode} />
            <Population populationCounts={data.populationCounts} />
        </div>
    );
}