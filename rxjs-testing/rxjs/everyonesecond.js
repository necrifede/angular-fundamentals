const {Observable} = rxjs
// of, from, interval: ways to create an Observable

// const observable = new Observable(function subscribe(subscriber){
//     const id = setInterval(() => {
//         subscriber.next('hi')
//     }, 1000)
//     setTimeout(() => {
//         clearInterval(id)
//         // subscriber.complete()
//         subscriber.error(new Error('ahhh!'))
//     }, 9000)
// })
const observable = new Observable(function subscribe(subscriber){
    const id = setInterval(() => {
        subscriber.next('hi')
    }, 1000)

    setTimeout(() => {
        // subscriber.complete()
        subscriber.error(new Error('ahhh!'))
    }, 9000)

    return () => {
        console.log('cleared!')
        clearInterval(id)
    }
})

observable.subscribe({
    next: (p) => {console.log(`here: ${p}`)},
    error: (e) => {console.log('error: ', e)},
    complete: () => {console.log('done!')},
})

// observable.subscribe((a)=>{console.log(`second: ${a}`)})
