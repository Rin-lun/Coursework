const p = fetch('./user.json')
.then((response) => {
    return response.json(); // переделываем нули и еденицы в JS объект
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('FINALLY question closed');
});
