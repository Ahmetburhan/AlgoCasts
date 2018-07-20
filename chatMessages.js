/*
    Complete the functions to pass the tests.
*/

class Chatroom {
 
    constructor() {
        this.messages = [];
    
    }

    addMessage(author, recipient, messageText) {
        // Create a message with author, recipient, messageText and time

        // this.author = author;
        // this.recipient = recipient;
        // this.messageText = messageText;
        // let oneMessage = {this.author, this.recipient, this.messageText};
        // console.log(oneMessage)
        // result.push(oneMessage);
        // console.log(result)
        this.messages.push({author,recipient,messageText})
       
     
    }

    getMessages() {
       
       console.log("getting messages array",this.messages)
        return this.messages;

        // Return a list in reverse chronological order
    }

    getMessagesCountByRecipient(recipient) {
        // Return message count for recipient
        // if (this.recipient === recipient) {
        //     return this.recipient;
        // }
        let counter = 0;
        this.messages.forEach(message => {
            if(message.recipient === recipient) {
                counter++;
            }
        })
        console.log("counter",counter)
        return counter;
    }
}

const chatroom = new Chatroom();

chatroom.addMessage('Alice', 'Bob', 'Hi!');
chatroom.addMessage('Bob', 'Alice', 'Hello');
chatroom.addMessage('Bob', 'Alice', 'How are you doing today?');

/* Tests */

const messages = chatroom.getMessages();
console.log("here is chatroom",chatroom);
console.log("number is here", Object.keys(chatroom.getMessages()).length)
console.log(typeof messages)

console.log("recipient", messages.recipient);

console.log("this is author", messages.author)



console.log(chatroom.getMessagesCountByRecipient('Alice'))

// console.assert(chatroom.getMessagesCountByRecipient('Alice') === "Alice");

console.assert(messages.length === 3);
// console.assert(messages.author[0] === 'Bob');

console.assert(chatroom.getMessagesCountByRecipient('Alice') === 2);