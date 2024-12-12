import Link from 'next/link';

interface Border {
    commonName: string;
    countryCode: string;
}


interface borderProps {

    borders: any;

    countryCode: any;

}

export default function Borders(props: borderProps) {
    if (!props.borders) {
        return <div>No borders available</div>;
    }

    return (
        <div>
            <ul>
                {props.borders.map((border: Border) => (
                    <li key={border.countryCode}>
                        <Link href={`/country/${encodeURIComponent(border.commonName.toLowerCase())}/${encodeURIComponent(border.countryCode.toLowerCase())}`}>
                            {border.commonName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}