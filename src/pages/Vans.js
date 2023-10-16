
import { useQuery } from '@tanstack/react-query'
import {  getAllVansDAta } from '../api/serverController'
import { useNavigate } from 'react-router-dom';

function Vans() {

  const navigate = useNavigate();
//   const queryClient = useQueryClient()

const {isLoading,isError,data:vans,error} = useQuery({
  queryKey:["vans"],
  queryFn: getAllVansDAta
})


if (isLoading) {
  return '...Loading';
}
if (isError) {
  return `Error: ${error.meassage}`;
}

  return (
    <div>
    <h1>Your Listed Vans</h1>
    <div className="vans-list">
      {vans.map((van) => (
        <div key={van.id} className="van-card">
          <img src={van.image} alt={van.name} />
          <div className="van-details">
            <h2>{van.name}</h2>
            <p>Price per day: ${van['price/day']}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Vans
