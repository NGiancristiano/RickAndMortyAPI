import { useState, useEffect } from "react"

function Personajes () {
    const [personajes,setPersonajes] = useState([])
    const [pagina,setPagina] = useState(1)

    useEffect(() => {
        console.log("Se monto")
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {setPersonajes(data.results)})
        .catch(e => console.log(e))
    },[])
   
    useEffect(()=>{
        console.log('Se actualizo')
        console.log(personajes)
    },[personajes])

    useEffect(()=>{
        console.log('Se actualizo')
        console.log(pagina)
    },[pagina])
    
    useEffect(()=>{
        return () => console.log('desmonto')
    },[])
    
    const nextPage = async() => {
        await setPagina(pagina+1)
        fetch(`https://rickandmortyapi.com/api/character?page=${pagina+1}`)
        .then(res => res.json())
        .then(data => {setPersonajes(data.results)})
        .catch(e => console.log(e))
    }

    const prevPage = async() => {
        if(pagina>1){
            await setPagina(pagina-1)
            fetch(`https://rickandmortyapi.com/api/character?page=${pagina-1}`)
            .then(res => res.json())
            .then(data => {setPersonajes(data.results)})
            .catch(e => console.log(e))
        }
        
    }
    
return (
    <div>
        <h2>Componente R y M</h2>
        <ul>
            { personajes.length === 0 && <p>Cargando...</p>}
            {
                personajes.map((personaje,i) => {
                    return (
                        <li key={i}>
                            <h3>{personaje.name}</h3>
                            <p>ID: {personaje.id}</p>
                            <img src={personaje.image} alt="avatar" width='150' />
                        </li>
                    )
                })
            }
            <button onClick={prevPage}>Pagina anterior</button>
            <button onClick={nextPage}>Siguiente pagina</button>
            
        </ul>
    </div>
)
}
export default Personajes