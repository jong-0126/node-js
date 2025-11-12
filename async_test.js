function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cookRamen() {        
    console.log('물 끓이기 시작');
    await delay(2000);
    console.log('면 넣기');
    await delay(2000)
    console.log('스프 넣기');
    await delay(1000);
    console.log('라면 완성');
}

cookRamen();