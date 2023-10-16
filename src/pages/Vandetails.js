import { useQuery } from '@tanstack/react-query'
import { getVanById } from '../api/serverController'
import { useNavigate, useParams } from 'react-router-dom'

const Vandetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { isError, isLoading, error, data:vans } = useQuery({
        queryKey: ["user", id],
        queryFn: ()=>getVanById(id),
    })

    if (isLoading) {
        return 'loading'
    }

    if (isError) {
        return `Error: ${error.meassage}`
    }

    return (
        <div>
         <button onClick={()=>navigate(`/`)}>Back to List Page</button>
         <div  className="image-dispaly">
         <img src={vans.image} alt={vans.name} width="520px"/>
         </div>
         <div className="con-dispaly">
            <h1>Name: {vans.name}</h1>
            <h1>Price per day: ${vans['price/day']}</h1>
            <h1>Details: {vans.details}</h1>
            </div>
        </div>
    )
}

export default Vandetails
