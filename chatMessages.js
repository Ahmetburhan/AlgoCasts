/*
    Complete the functions to pass the tests.
*/

class Chatroom {
 
    constructor(author, recipient, messageText) {
        this.author = author;
        this.recipient = recipient;
        this.messageText = messageText;
        
    }

    addMessage(author, recipient, messageText) {
        // Create a message with author, recipient, messageText and time
        let result = [];

        this.author = author;
        this.recipient = recipient;
        this.messageText = messageText;
        let oneMessage = [this.author, this.recipient, this.messageText];
        console.log(oneMessage)
        result.push(oneMessage);
        // console.log(typeof oneMessage)

        return result;
       
     
    }

    getMessages() {
       
       
        return this;

        // Return a list in reverse chronological order
    }

    getMessagesCountByRecipient(recipient) {
        // Return message count for recipient
        if (this.recipient === recipient) {
            return this.recipient;
        }
        return `${recipient} is not on Chatroom`;
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

console.assert(chatroom.getMessagesCountByRecipient('Alice') === "Alice");

// console.assert(messages.length === 3);
// console.assert(messages.author[0] === 'Bob');

// console.assert(chatroom.getMessagesCountByRecipient('Alice') === 2);