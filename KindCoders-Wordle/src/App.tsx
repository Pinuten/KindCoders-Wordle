import { useRef, useState } from "react";

function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const [guess, setGuess] = useState<string[]>([])

  const goalWord = "spook";

  const letterGuesser = () => {

    for(let i = 0; i < 5; i++){

      if(guess[i] == goalWord[i]){
        //Printa guess i som grön 
      }
      else if(goalWord.includes(guess[i])){
        //Printa guess i som gul
      }
      else{
        //Printa som grå
      }

    }
  }

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
