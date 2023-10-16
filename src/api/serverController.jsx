export async  function getAllVansDAta() {
    const response = await fetch('http://localhost:3000/Vans')
    return response.json();
}
export async function getVanById(id) {
    const response = await fetch(`http://localhost:3000/vans/${id}`)
    return response.json();
}