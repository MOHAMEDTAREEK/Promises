/*const hi = name => {
    return new Promise(resolve => {
        setTimeout(() => {
     resolve(`hala hala hala ${name}`)
        }, 2000)
    })
}
const call = (name) => {
    hi(name) (
        (resolved) => {
            console.log(resolved)
        }
    )
}
call('bottle')*/

function hi (name) {
     return  new Promise (resolve => {
        setTimeout(() => {
     resolve(`hala hala hala ${name}`)
        }, 2000)
    });
};

async function call (name) {
 let result = await hi(name);
 console.log(result)
}
call ("bottle")
 
     

