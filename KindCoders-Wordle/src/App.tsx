import { useRef, useState } from "react";
import Board from "./components/Board";


function App() {

  const inputRef = useRef<HTMLInputElement>(null)


  const [guess, setGuess] = useState<string[]>([])

  const goalWord = "spook";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setGuess([...guess, inputRef.current!.value.toLowerCase()]);

    inputRef.current!.value = "";
  }

  
  return (

    <section className="container">

      <h1>Hello World</h1>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input ref={inputRef} type="text" name="word" id="" minLength={5} maxLength={5} />
      </form>

    {
      guess.length > 0 && guess.map(guess => <Board goalWord={goalWord} guess={guess}/> )
    }

      

    </section>

  )
}

export default App
