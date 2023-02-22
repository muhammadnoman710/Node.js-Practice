(function(message){
const hero = "batman"
console.log(message,hero)
})("Hello");

//These are "Immediately Invoked Function Expressions" , which provides us private scoping and saves us from variables or function variations

(function(message){
    const hero = "superman"
    console.log(message,hero)
})("HI");