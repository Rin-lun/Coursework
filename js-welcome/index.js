// Сериализация - процесс перевоплощения JS объекта в JSON
// Десиарилизация - процесс перевоплощения JSON в JS объект

// Поверхностные копии объекта (shallow copy) - копия, где копируются только ссылки на элементы, а не сами значения

const originalObject = {
    users : [
        {
            name: 'John',
            age: 25
        },
        {
            name: 'Lucky',
            age: 33
        }
    ]
}

const shallowCopy = {...originalObject};

// Глубокая копия (deep copy) - создание полноценной копии объекта, где копируется как ссылка на её элементы, так и её значения

const deepCopy = JSON.parse(JSON.stringify(originalObject));