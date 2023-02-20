(function(){
const hero = "batman"
console.log(hero)
})();

//These are "Immediately Invoked Function Expressions" , which provides us private scoping and saves us from variables or function variations

(function(){
    const hero = "superman"
    console.log(hero)
})();