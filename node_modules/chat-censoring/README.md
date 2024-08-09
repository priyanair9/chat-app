<div >
</p align="center">
	<h1 align="center">ChatCensoring</h1>
</p>
<p align="center">
	<a href="https://nodei.co/npm/chat-censoring/"><img src="https://nodei.co/npm/chat-censoring.png"></a>
</p>
	<p align="center">
	<img alt="npm" src="https://img.shields.io/npm/v/chat-censoring">
	<img alt="npm" src="https://img.shields.io/npm/dt/chat-censoring">
	<img alt="GitHub" src="https://img.shields.io/github/license/Toasty65/chatCensoring">
	<img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/Toasty65/ChatCensoring/main">
</p>
</div>

<br>

A tiny & simple package for your `chat application` that allows you to `remove` or `censor` bad words in chat.

# Installation 

### [npm](https://www.npmjs.com/package/chat-censoring): ###

```
npm i chat-censoring
```

# Features

- Check, if a message includes bad words
- Check **and** censor (if needed) a message

## Check message

This function takes your message as argument and checks, if it includes a bad word. As result it returns either true or false.

**Parameters:**

Parameter|Usage
---------|-----
message|The message you want to check



**Example:**

```js
const censoring = require('chat-censoring');

const isInsult = censoring.check('You are great!');
console.log(isInsult); // Prints false
```

```js
const censoring = require('chat-censoring');

const isInsult = censoring.check('You are fucking stupid!');
console.log(isInsult); // Prints true
```

## Censor message

This function checks if there is a bad word in your provided message and replaces this word(s) with the character of your choise.

**Parameter:**

Parameter|Usage
---------|-----
message|The message you want to check **and** censor if needed
censoringChar|The char you want to use to censor bad words



**Example:**

```js
const censoring = require('chat-censoring');

const friendlyMessage = censoring.censorMessage('This is fucking cool!', '*');
console.log(friendlyMessage); // Prints 'This is ******* cool!'
```

## [Deprecated] [Discord.js](https://www.npmjs.com/package/discord.js) example

This package was created with the motivation to censor chat messages in `Discord`. Of course it can be used in other applications as well

Here is an example how you can use it for your `Discord bot`:

```js
if(message.author.bot) return;

	if(!content.startsWith(prefix)) {

		if(censor.checkMessage(content)) {
			message.delete()
				.then(() => message.channel.send(`${message.author} said: ${censor.censorMessage(content, '#')}`))
				.catch(err => {
					console.log('An error occurred while censoring a message: ' + err);
					return message.channel.send('Unfortunately an error has occurred :(');
				});
		}
		return;
	}
```
