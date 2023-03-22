window.onload(ev, ()=> {
    console.log("We are on test")
})

class Kain {
    constructor(){
        this.name = 'Kain'
    }

    sayHello() {
        console.log('whats up bro')
    }
}

const kain = new Kain()

module.exports =  kain;