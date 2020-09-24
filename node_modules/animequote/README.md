**!!!** If you are using 1.0.3 or lower, please update the package. **!!!**

# node-animequote
![npm downloads](https://img.shields.io/npm/dm/animequote.svg?maxAge=2592000) ![npm version](https://img.shields.io/npm/v/animequote.svg?maxAge=2592000) ![License](https://img.shields.io/github/license/austinhuang0131/node-animequote.svg?maxAge=2592000)

[![NPM](https://nodei.co/npm/animequote.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/animequote/)

Anime Quote Generator. In node.js. Made from [node-yoda-said](https://github.com/hemanth/node-yoda-said). Resources from [anime-quote-generator](https://github.com/jiashengc/anime-quote-generator).

Before installing, you want to make sure it works, eh? Click [Test animequote in your browser.](https://tonicdev.com/npm/animequote) at the right side of the npmjs page, then click `Run`. It will run a script and gives you a nice js object callback.

## How to use it?
```js
var aq = require('animequote@1.1.1'); // @1.1.1 is mandatory, but recommended if you have ever installed older version of the package.
console.log("\"" + aq().quotesentence + "\" --- " + aq().quotecharacter + " from " + aq().quoteanime);
```
### Output example
```json
{
    "quotenumber": 1,
    "quotesentence": "<Random>",
    "quotecharacter": "<Random>",
    "quoteanime": "<Random>"
}
```
For 1.0.x, it has a different output, which includes some pre-inserted characters (1 slash, 1 comma and 2 spaces). That’s why I suggest some of you to add `@1.1.1` in the script and update the package.
```json
{
    "quotenumber": 1,
    "quotesentence": "<Random>",
    "quotecharacter": "- <Random>,",
    "quoteanime": " <Random>"
}
```
### In console?
**UNTESTED**, so if you found a problem here, submit an issue in the [GitHub repo](https://github.com/austinhuang0131/node-animequote/issues).
```shell
$ npm install --global animequote
$ animequote
```
## Credit
* [node-yoda-said](https://github.com/hemanth/node-yoda-said), Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com).
* [anime-quote-generator](https://github.com/jiashengc/anime-quote-generator), Copyright (c) 2015 Chong Jia Sheng.
* Both are in MIT license.

## Contribute?
If you want to add a new quote, do it in the [original repo](https://github.com/jiashengc/anime-quote-generator) and remind me by creating an issue or DM me on Discord (austinhuang#1076).

## Contact
[![Discord](https://discordapp.com/api/guilds/188752295108935680/widget.png?style=banner2)](http://discord.me/0131)
