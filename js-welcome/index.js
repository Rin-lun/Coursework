const p = new Promise(executor); // pending

function executor(resolve, reject) {
    setTimeout(() => {
        resolve('It time'); // fullfilled
    }, 15000)
}

const h1 = document.querySelector('#root');

p.then((data) => {
    h1.append(str);
});