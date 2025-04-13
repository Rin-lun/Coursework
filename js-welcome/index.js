function helloUser() {
    const btn = event.target;
    
    if(btn.style.backgroundColor === 'red') {
        btn.style.backgroundColor = 'unset';
    }
    else {
        btn.style.backgroundColor = 'red';
    }
    
}

const button = document.getElementById('button');
button.addEventListener('mouseenter', helloUser);
