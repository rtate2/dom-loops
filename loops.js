// loop through the rainbow and print out the colors to the page

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// const ew = ['black', 'gray', 'red'];

// const printToDom = (toPrint, divId) => {
    // document.getElementById(divId).innerHTML += toPrint
// }

// const printRainbow = (colorArr) => {
    // // for (let i = 0; i < colorArr.length; i++) {
        // const color = colorArr[i]
        // printToDom(color, 'rainbow')
    // }
// }

// printRainbow(colors);
// printRainbow(ew);

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const instructors = [
    {first: "Zoe", last: "Ames"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ];

  const printNames = (namesArray) => {
    for (let i = 0; i < namesArray.length; i++) {
        const person = namesArray[i]; 
        const element = `<p>${person.first} ${person.last}</p>`
        printToDom(element, 'people')
    }
}

// for (let index = 0; index < Array.length; index++) {
//     const element = array[index];
// }

  printNames(instructors);
  