export async  function getAllVansDAta() {
    const response = await fetch('http://localhost:3000/Vans')
    return response.json();
}
