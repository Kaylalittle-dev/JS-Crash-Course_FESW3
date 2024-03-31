/*Converting Temperatures

Celsius-to-Fahrenheit formula:

F = C x 1.8 +32
*/

let celsius = 10;
let fahrenheit = [(celsius * 1.8) + 32] /*convert to celsius to fahrenheit*/

console.log(fahrenheit) /*print out results*/


// Change exercise

let cash = 45
let price = 50
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's $${difference} change.`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a great day!")
}
else {
    console.log(`not enough money - you still owe $${difference * -1}.`)
}



let cash2 = 50
let price2 = 40
let isStoreOpen = true

let receipt = cash2 >= price2 && isStoreOpen ? "give receipt" : "do not give receipt"
console.log(receipt)

// 'give receipt' : 'do not ive receipt'

// cash2 >= price2 && isStoreOpen ? console.log('give receipt') : console.log('do not give receipt')


// let count = 1
// while (count <= 100) {
//     console.log (count)
//     count = count + 1
// }

for (let i=1; i <= 100; i++) {
    console.log(i)
}


/*Write a for-loop that loops through 1 to 20
* If number is divisible by 3, print "Frontend"
* If number is divisible by 5, print "Simplified"
* If number is divisble by 3 and 5, print "Frontend Simplified"
* If number is *not* divisible by either 3 or 5, print number

@example
1 -> 1
2 -> 2
3 -> "Frontend"
4 -> 4
5 -> "Simplified"
*...
15 -> "Frontend Simplified"
...
20 -> "Simplified"
*/ 

for (let i=1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} --> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} --> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} --> Simplified`)
    }
    
    else {
        console.log(`${i} --> ${i}`)
    }
}