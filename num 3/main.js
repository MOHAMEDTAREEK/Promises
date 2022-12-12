function addRandom (num) {
    return new Promise ((resolve) =>{
    let ran = num + Math.round(Math.random() * 100 + 1);
    setTimeout(() => {
             resolve(ran)
    }, 2000)
        })  
    }
        const arr = [1,2,3,5,6,8,7,4,5,2,1];
        async function call (arr) {
            const arr2= arr.map( x => addRandom(x))
               let Final = await Promise.all(arr2)
                console.log(Final)
                const initialValue = 0;
                const sum = Final.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                initialValue
                    );

console.log(sum);
           }
          call (arr)
         
            
