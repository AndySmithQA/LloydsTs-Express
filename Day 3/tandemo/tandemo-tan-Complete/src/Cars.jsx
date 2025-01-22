import { useQuery } from "@tanstack/react-query"

export default function Cars() {
    
    const { isLoading, error, data } = useQuery({
        queryKey: ['cars'],
        queryFn: () => 
            fetch('http://localhost:4000/cars')
            .then(res => res.json())  
    })
    if (isLoading) return <div>Loading...</div>

    if (error) return <div>An error has occurred: {error.message}</div>
    
    
    return (
        <>
        <h1>Cars</h1>
            {data && data.map(car => (
                <div key={car.id}>
                    <h2>{car.make}</h2>
                    <p>{car.model}</p>
                </div>
            )
            )}  
        </>
    )
}