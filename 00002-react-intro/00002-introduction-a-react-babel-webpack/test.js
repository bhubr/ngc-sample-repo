const rootDiv = document.querySelector('#root');
const rootDivContent = rootDiv.innerHTML;

console.log(rootDivContent);

assert.ok(rootDivContent.includes('<h1>React webpack</h1>'));
