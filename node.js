function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const messageData = {
    greetings: ['Hello', 'Hi', 'Hey', 'Greetings'],
    fortunes: ['great luck', 'good luck', 'bad luck', 'terrible luck'],
    advice: ['take a walk', 'read a book', 'try something new', 'trust yourself']
};

let message = [];

for (let category in messageData) {
    let randomIndex = generateRandomNumber(messageData[category].length);
    switch(category) {
        case 'greetings':
            message.push(`${messageData[category][randomIndex]}!`);
            break;
        case 'fortunes':
            message.push(`Your fortune today is: "${messageData[category][randomIndex]}"`);
            break;
        case 'advice':
            message.push(`You should: ${messageData[category][randomIndex]}.`);
            break;
    }
}

console.log(message.join('\n'));
console.log("Hello from Node.js!");

