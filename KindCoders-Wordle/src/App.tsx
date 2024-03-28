import { useRef, useState } from "react";

function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const [guess, setGuess] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    setGuess(inputRef.current!.value.split(""))
    

    inputRef.current!.value = "";
  }

  return (
    
    <section className="container">
      
      <h1>Hello World</h1>
      
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input ref={inputRef} type="text" name="word" id="" minLength={5} maxLength={5} />
      </form>

      <ul className="grid">
      {guess.map(letter => <li>{letter}</li> )}
      </ul>

    </section>

  )
}

export default App
