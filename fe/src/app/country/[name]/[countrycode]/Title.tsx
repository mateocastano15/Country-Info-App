interface titleProps {
    name: string;
    flag: string;
}

export default function Title(props: titleProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ marginRight: '10px' }}>{props.name}</h1>
            <img src={props.flag} alt="flag" style={{ width: '30px', height: '20px' }} />
        </div>
    );
}