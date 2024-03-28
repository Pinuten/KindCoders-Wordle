import { useRef } from "react"
type Props = {
    goalWord : string,
    guess : string[];
}

function Board({guess, goalWord}: Props) {

    const ulref = useRef<HTMLUListElement>(null)

    const filterWord = () => {
        let temp = goalWord;
    
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

      if(guess.length > 0){
        filterWord()
      }
    return (
        <ul className="grid gap-x-4 w-64 mx-auto" ref={ulref} >
            <li className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>
            <li className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>
            <li className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>
            <li className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>
            <li className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center`}></li>
        </ul>
    )
}

export default Board