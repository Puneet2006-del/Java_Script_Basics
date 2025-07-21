// IIFE = Immediately Invoked Function Expressions 

(function main(){
    // Named IIFE
    console.log("DB CONNECTED")
})(); // semi colon to stop immediately invoked function 

(()=>{
    // Unnamed IIFE
    console.log("DB CONNECTED TWO") // Using Arrow Function
})();

((name)=>{                                      
    console.log(`DB CONNECTED TWO ${name}`) // name = parameter and Puneet = argument 
})("PUNEET");

