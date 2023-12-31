let maximum =parseInt(prompt("Enter the maximum number !"));
while(!maximum){
    maximum=parseInt(prompt("Enter a valid number"));

}
const target=Math.floor(Math.random()*maximum)+1;
let guess=prompt("Enter your first guess! Type 'q' to quit");
let attempts =1;
while(parseInt(guess)!==target){
    if(guess==='q')
    break;
guess=parseInt(guess)
    
    if(guess>target)
   { guess=prompt("Too high! Enter new guess:");
    attempts++;}
    else if(guess<target)
    {guess=prompt("Too Low! Enter new guess:");
    attempts++;}
else
{guess=prompt("Invalid guess, please enter a number or 'q' to quit");}
}
if(guess=='q')
{console.log("ok, You Quit!");}
else{
console.log("Congrats You Win!");
console.log("You got it! It took you ${attempts} guesses");
}