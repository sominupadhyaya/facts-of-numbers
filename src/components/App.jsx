import React , {useState} from "react"
import { useFetch } from "../hooks/useFetch"
import '../styles/App.css'
const App = () => { 
    let [counter , setCount] = useState(0)    
    
    let url = `http://numbersapi.com/${counter}/trivia`
    
    const {data, loading} = useFetch(url)

    return (
    <div className="App">

    <h1 className="text-main">Facts about numbers</h1>
    <h2>{loading? 'loading' : data}</h2>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>Checkout a new fact about the number {counter+1}</button> <br />
    {counter !== 0 ?
    <button onClick={() => setCount(prevCount => prevCount - 1)}>Go back to fact about the number {counter-1}</button>
    : null}
    </div>
    )
}

export default App
