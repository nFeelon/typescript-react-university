//2
let myProm1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randN = Math.floor(Math.random() * 100);
        resolve(randN);
    }, 3000);
});

myProm1.then((number) => {
    console.log(number);
}).catch((error) => {
    console.error(`Ошибка: ${error}`);
});

//3
function delayPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randN = Math.floor(Math.random() * 100);
            resolve(randN);
        }, delay);
    });
}

Promise.all([delayPromise(3000), delayPromise(2000), delayPromise(1000)]).then((numbers) => {
    console.log(numbers);
}).catch((error) => {
    console.error(`Ошибка: ${error}`);
});

//4

let pr = new Promise((res,rej) => {
    rej('ku')
});

pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))
//2 4 5, catch и then возвращают новый успешный промис

//5
let prom2 = new Promise(resolve => {
    resolve(21);
}).then(result => {
    console.log(result);
    return result*2;
}).then(result => {
    console.log(result);
    return result;
});

//6
async function prom3() {
    let result1 = await Promise.resolve(21);
    console.log(result1);

    let result2 = result1*2;
    console.log(result2);

    return result2;
}

prom3();

//7
let promise = new Promise(res => {
    res('Resolved primise - 1');
})

promise
    .then((res) => {
        console.log("Resolved promise - 2");
        return "OK";
    })
    .then((res) => {
        console.log(res);
    });

//8

let promise2 = promise;

promise2
    .then((res) => {
        console.log("Resolved promise - 2");
        return "OK";
    })
    .then((res) => {
        console.log(res);
    })

//9
let promise3 = promise;

promise3
    .then((res) => {
        console.log(res);
        return "OK";
    })
    .then((res1)=> {
        console.log(res1);
    })

//10
let promise4 = promise;

promise4
    .then((res) => {
        console.log(res);
        return res;
        
    })
    .then((res1) => {
        console.log('Resolved promise - 2');
    })

//11
let promise5 = promise;

promise5
    .then((res) => {
        console.log(res);
        return res;
    })
    .then((res1) => {
        console.log(res1);
    })

//12
let promise6 = promise;

promise6
    .then((res) => {
        console.log(res);
    })
    .then((res1) => {
        console.log(res1);
    })

//13
// ---> 4
