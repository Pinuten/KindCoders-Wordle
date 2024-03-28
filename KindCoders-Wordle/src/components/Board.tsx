type Props = {
    goalWord: string,
    guess: string;
}

type Letter = {
    color: string,
    letter: string
    ,
}
const generateLetters = (answer: string, guess: string): Letter[] => {
    let temp = answer;

    let returnArr: Letter[] = [
        { letter: guess[0], color: "text-white bg-gray-500" },
        { letter: guess[1], color: "text-white bg-gray-500" },
        { letter: guess[2], color: "text-white bg-gray-500" },
        { letter: guess[3], color: "text-white bg-gray-500" },
        { letter: guess[4], color: "text-white bg-gray-500" },];

    for (let i = 0; i < 5; i++) {
        if (guess[i] == answer[i]) {
            returnArr[i].color = "bg-green-500 text-black"
            temp = temp.slice(0, i) + " " + temp.slice(i + 1, temp.length);
        }
    }

    for (let i = 0; i < 5; i++) {

        if (temp.includes(guess[i])) {
            returnArr[i].color = "bg-yellow-500 text-black"
            var index = temp.indexOf(guess[i]);
            temp = temp.slice(0, index) + " " + temp.slice(index + 1, temp.length);
        }
    }
    return returnArr;
}

function Board({ guess, goalWord }: Props) {

    let letters = generateLetters(goalWord, guess);

    return (
        <ul className="grid gap-x-4 w-64 mx-auto" >
            {letters.map(({color, letter}) => <li className={`h-12 w-12 border border-white rounded-sm list-none flex justify-center items-center ${color}`}> {letter}</li>)}
        </ul>
    )
}

export default Board