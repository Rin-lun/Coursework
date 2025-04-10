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

// const height = monitor.sizes.height.value;

// const {resolution, color: monitorColor} = monitor;

// console.log(resolution);
// console.log(monitorColor);

// Задача: вытянуть value для высоты и ширины монитора

// const {sizes: {height: {value: heightValue}, width: {value: widthValue}}, brightness, refresh: {value: refreshValue}} = monitor;

// const {sizes: {height: {scale: heightScale}, width: {scale: widthScale}}} = monitor;

// console.log(heightValue);
// console.log(widthValue);
// console.log(refreshValue);
// console.log(heightScale);
// console.log(widthScale);

const {color, brightness, resolution, ...restOfMonitor} = monitor;