
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){

        resultElement.textContent = `Congratulations on being a centenarian - bit you are too old to enter the site!`
    }

    else if(age == 0){
        resultElement.textContent =`You can't eneter. You were just bourne`
    }
    
    else if(age >= 18) {
        
        resultElement.textContent = `You are old enough to drink alcohol`
    }
    
    else if(age < 0){
       
        resultElement.textContent = `Your age can't be blow zero`
    }
    
    
    else{
        
        resultElement.textContent = "You are underage to drink alcolhol"
    }

}



