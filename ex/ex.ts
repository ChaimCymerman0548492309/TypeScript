// console.log("hi")




// function bigger(a: number, b: number): number {
//     return Math.max(a, b);
// }
// console.log(bigger(2, 3))
// printBigger(5, 6)
// function printBigger(a: number, b: number): void {
//     console.log(Math.max(a, b));
// }
// console.log(module(4))
// function module(a: number): string {
//     return String((a % 2 === 0))
// }
// console.log(getLength("dsad"))
// function getLength(a: string): number {
//     return a.length
// }
// console.log(array(5))
// function array(a: number): number[] {
//     let arr: number[] = []
//     for (let i = 1; i < a; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(bigFromArray([2, 3, 3, 4, 1, 5]))
// function bigFromArray(arr: number[]): number {
//     let max: number = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// type person = {
//     name: string;
//     age: number
//     isStudent: boolean
// };
// const myUser: person = {
//     name: 'avi',
//     age: 20,
//     isStudent: true
// }
// getPerson(myUser)
// function getPerson(a: person): void {
//     console.log(`my name is ${a.name},I ${a.age} years old, and I am ${a.isStudent} student`)
// }
// console.log(isMinor(myUser))
// function isMinor(a: person): boolean {
//     return (a.age < 18)
// }
// interface book {
//     title: string;
//     author: string;
//     year: number
// }
// type readercopy = { favoriteBook: book }
// type reader = person & readercopy;
// const myUser2: reader[] = [{
//     name: 'avi',
//     age: 20,
//     isStudent: true,
//     favoriteBook: {
//         title: "dsa",
//         author: "fsdfsd",
//         year: 2005
//     }
// },
// {
//     name: 'yos',
//     age: 22,
//     isStudent: false,
//     favoriteBook: {
//         title: "milhama",
//         author: "moshe",
//         year: 2003
//     }
// }
// ]
// console.log(getMevugar(myUser2))
// function getMevugar(arr: reader[]): reader {
//     let maxAge: number = arr[0].age
//     let maxReader: reader = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].age > maxAge) {
//             maxAge = arr[i].age
//             maxReader = arr[i]
//         }
//     }
//     return maxReader
// }
// console.log(getOldBook(myUser2))
// function getOldBook(arr: reader[]):book{
//     let oldBook: book = arr[0].favoriteBook
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].favoriteBook.year < oldBook.year) {
//             oldBook = arr[i].favoriteBook
//         }
//     }
//     return oldBook
// }











const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function getDobels(arr: number[]): number[] {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}


console.log(getDobels(arr))

function Dobels(nam1: number, nam2: number): number {
    return nam1 * nam2
}


console.log(Dobels(1, 3))



function chakPlndrom(nam1: string): boolean {
    for (let i = 0; i < nam1.length / 2; i++) {
        if (nam1[i] !== nam1[nam1.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(chakPlndrom('nan'));
console.log(chakPlndrom('hello'));


function capitalizeFirstLetter(words: string[]): String[] {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

const inputArray = ['uppEr', 'loWer', 'MiXeD'];
const resultArray = capitalizeFirstLetter(inputArray);
console.log(resultArray); // ['Upper', 'Lower', 'Mixed']


interface Input {
    firstName: string;
    lastName: string;
}

interface Output {
    firstInitial: string;
    lastInitial: string;
}

const input: Input = { firstName: "John", lastName: "Doe" };
const output: Output = { firstInitial: "J", lastInitial: "D" };

function getInitials(input: Input): Output {
    const firstInitial = input.firstName.charAt(0);
    const lastInitial = input.lastName.charAt(0);
    const result: Output = { firstInitial, lastInitial };
    return result;
}

const initials: Output = getInitials(input);
console.log(initials); // { firstInitial: "J", lastInitial: "D" }

interface Person {
    name: string;
    age: number;
}


function calculateAverageAge(people : Person[] ) : number {
    if (people.length === 0) {
        return 0; // או ערך ברירת מחדל אחר
    }

    var totalAge = 0;
    for (var i = 0; i < people.length; i++) {
        totalAge += people[i].age;
    }

    var averageAge = totalAge / people.length;
    return averageAge;
}
const peopleArray: Person[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 40 },
];

var averageAge = calculateAverageAge(peopleArray);
console.log(averageAge); // יצג: 31.666666666666668







// // git init
// // git add .
// // git commit -m "first commit"
// // git branch -M main
// // git remote add origin https://github.com/ChaimCymerman0548492309/TypeScript.git
// // git push -u origin main