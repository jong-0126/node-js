function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

console.log('1. 시작');
delay(1000).then(() => {
    console.log('2. 1초후 시작')        
}, 1000);

console.log('3. 끝');