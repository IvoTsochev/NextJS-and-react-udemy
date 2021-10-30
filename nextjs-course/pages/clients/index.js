import Link from 'next/link';

const Index = () => {

    const clients = [
        { id: 'max', name: 'Maximilian' },
        { id: 'manu', name: 'Manu' },
        { id: 'ivo', name: 'Ivo' }
    ]

    return (
        <div>
            <h1>The CLients Page</h1>
            <ul>
                {
                    clients.map((client) => (
                        <li key={client.id}>
                            <Link href={{
                                pathname: '/clients/[id]',
                                query: { id: client.id }
                            }}>
                                {client.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
}

export default Index;