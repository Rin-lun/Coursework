const monitor = {
    sizes: {
        height: {
            value: 30,
            scale: 'cm'
        },
        width: {
            value: 50,
            scale: 'cm'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'GHz'
    },
    color: 'black',
    resolution: '4K'
}

// У нас есть объект юзера

const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },
    contacts: {
        email: 'john@gmail.com',
        phone: '+380123456789'
    }
}

// Задача: с использованием деструктаризации получить значение name, city, email, и phone

const {name, address: {city}, contacts: {email, phone}} = user;