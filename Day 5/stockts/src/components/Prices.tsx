import { useLoaderData} from 'react-router-dom'
import ShowGraph from './graph/ShowGraph'

export default function Prices() {
    const prices: { closing: number }[] = useLoaderData()
    const lowestPrice = Math.min(...prices.map((price) => price.closing));
    const highestPrice = Math.max(...prices.map((price) => price.closing));
  
    return (
        <div className="runs">
            <div className="stat">Lowest - {lowestPrice}</div>
            <div className="stat">Highest - {highestPrice}</div>
    
             <ShowGraph /> 
        </div>
    )
}

//loader

export const pricesLoader = async () => {
    const res = await fetch('http://localhost:3001')

    return res.json()
}