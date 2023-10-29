const camelize = (string) => string.split(/[-\s]/).map(word => word.toLowerCase()[0].toUpperCase() + word.substr(1))

console.log(camelize('JavaScript coding ChAlLenge'));
console.log(camelize('JavaScript-coding-challenge'));
console.log(camelize('javaScriptCodingChallenge'));