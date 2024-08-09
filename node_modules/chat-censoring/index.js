const { swearWords } = require('./swearWords');

exports.checkMessage = message => {
    if(!message) throw new Error('No message provided!');
    if(typeof message !=='string') throw new Error('The provided parameter is not of type string!');

    message = message.toLowerCase();

    return swearWords.some(word => message === word.toLowerCase());
}

exports.censorMessage = (message, censoringChar) => {
    if(!message) throw new Error('No message provided!');
    if(!censoringChar) throw new Error('No censoring char provided!');
    if(censoringChar.length > 1) throw new Error('The censoring char should not be longer than 1 character');
    if(typeof message !== 'string') throw new Error('The provided parameter is not of type string!');    

    let friendlyMessage = '';

    for(const messagePart of message.replace(/\s{2,}/g, ' ').split(' ')) {
        if(this.checkMessage(messagePart)) {
            friendlyMessage += ` ${messagePart.replace(/./g, censoringChar)}`;
            continue;
        }

        friendlyMessage += ` ${messagePart}`;
    }
    
    return friendlyMessage.trim();
}