import { useEffect, useRef, useState } from "react";
import {promises as fs} from "fs";

async function wordFetcher(): Promise<string>{
  const filepath = "KindCoders-Wordle/src/data/Words.txt"
  try {
    const data = await fs.readFile(filepath, "utf-8")
    const lines = data.split("/n").filter(Boolean)
    if (lines.length === 0) {
      throw new Error('The file is empty or does not exist.');
    }
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
  } catch (error) {
    throw new Error(`Failed to read the file: ${error}`);
  }
  }

function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const ulref = useRef<HTMLUListElement>(null)


  const [guess, setGuess] = useState<string[]>([])

  const goalWord = "Spook";

  const filterWord = () => {
    let temp = goalWord

    for (let i = 0; i < 5; i++) {
      const listElement = ulref.current?.childNodes[i] as HTMLLIElement;
      if (guess[i] == goalWord[i]) {
        listElement.classList.add("bg-green-500" ,"text-black")
        listElement.innerHTML = guess[i]
        temp = temp.slice(0, i) + " " + temp.slice(i + 1, temp.length);
      }
    }

    for (let i = 0; i < 5; i++) {
      const listElement = ulref.current?.childNodes[i] as HTMLLIElement;

      if (temp.includes(guess[i])) {
        listElement.classList.add("bg-yellow-500", "text-black")
        listElement.innerHTML = guess[i]
        var index = temp.indexOf(guess[i]);
        temp = temp.slice(0, index) + " "+ temp.slice(index + 1, temp.length);
      }
    }

    for (let i = 0; i < 5; i++) {
      const listElement = ulref.current?.childNodes[i] as HTMLLIElement;

      if (listElement.innerHTML == "") {
        listElement.classList.add("bg-gray-500", "text-white")
        listElement.innerHTML = guess[i]
      }
    }

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setGuess(prevGuess => [...prevGuess, ...inputRef.current!.value.toLowerCase().split("")]);
    inputRef.current!.value = "";
  }

  useEffect(() => {
    if(guess.length != 0){
      filterWord(); 
    }
  }, [guess]);

  return (

    <section className="container">

      <h1>Hello World</h1>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input ref={inputRef} type="text" name="word" id="" minLength={5} maxLength={5} />
      </form>

      <ul className="grid gap-x-4 w-64 mx-auto" ref={ulref} >

        <li id="list-0" className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>
        <li id="list-1" className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>
        <li id="list-2" className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>
        <li id="list-3" className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>
        <li id="list-4" className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>

      </ul>

    </section>

  )
}

export default App
