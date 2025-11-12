function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
    console.log('시작');
    await delay(1000);
    console.log('1초 기다림');
    console.log('다음 작업 수행');
}

start();
