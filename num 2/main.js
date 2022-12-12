function addRandom (num) {
    return new Promise ((resolve, reject) =>{
    let ran = num + Math.round(Math.random() * 100 + 1);
    setTimeout(() => {
        if (ran >= 50) {
             resolve(`Your number is ${ran}`)
        } else {
            reject (Error('cry, your number is less than 50'))
        }
    }, 2000)
        })  
    }
async function call (num) {
    try {let result = await addRandom(num);
    console.log(result)}
    catch(err) {
        console.log(err.message)
    }
}
call (1)