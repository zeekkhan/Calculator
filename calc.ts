#! /usr/bin/env node

import inquirer from "inquirer";
import {sum,sub,mul,div} from "./functions.js";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import chalkAnimation from 'chalk-animation';
import showBanner from "node-banner";

let answers= [{
    name:"again",
    type:"confirm",
    message: chalk.red("Do you want to calculate again"),
}]

let answer=[
    {
        name: "num1",
        type: "number",
        message: gradient.cristal("Enter your First Number:"),
        validate:(input:number)=>{
            if(isNaN(input)){
                return "Please Enter Number!!";
            }
            return true;
        }
    },
    {
        name: "num2",
        type: "number",
        message: gradient.cristal("Enter your Second Number"),
        validate:(input:number)=>{
            if(isNaN(input)){
                return "Please Enter Number!!";
            }
            return true;
        }
    },
    {
        name: "operation",
        type: "list",
        choices: ["add","sub","mul","div"],
        message: gradient.cristal(" Enter yout operator"),
        
    }
];

(async () => {
    await showBanner('By AZIZ');
})();
(async () => {
    await showBanner('Smart Calculator', 'This is a Smart Calculator ',"blue", "green");
})();


async function Calculator(){
    let condition=true;
    while(condition){
let {num2, num1, operation} = await inquirer.prompt(answer);
if(operation == "add"){
    console.log(gradient.rainbow("The sum of two Number is"),sum(num1,num2))
};
if(operation == "sub"){
    console.log(gradient.rainbow("The Subtaction of two Number is"),sub(num1,num2))
};
if(operation == "mul"){
    console.log(gradient.rainbow("The Multiplicaation of two Number is"),mul(num1,num2))
};
if(operation == "div"){
    console.log(gradient.rainbow("The Division of two Number is"),div(num1,num2))
};
let {again}=await inquirer.prompt(answers)
condition=again;
}
};

setTimeout(() => {
    
    Calculator();
}, 1000);
