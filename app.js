// app.js
//
// Task Manager
//
//This program allows the user to pick one of three categories and put to do items in them.  The 
//possible categories are Home, Play, and Work.  Once the user has finished typing in all their tasks
//the program prints out a final list of all tasks by category.
//
// Z. Ames 7/10/14

//load modules
var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

//arrays
var play =[];
var work = [];
var home = [];

var option = prompt('Do you want to (a)dd or (q)uit? ');


while (option != 'q'){
var list = prompt(chalk.yellow('Which list do you want to edit? (p)lay, (h)ome, (w)ork '));
var add = prompt(chalk.grey('What would you like to add? '));
  if (list === 'p' ){
    play.push(add);
  }else if(list === 'h'){
    home.push(add);
  }else{
    work.push (add);
  }
  option = prompt('Do you want to (a)dd or (q)uit? ');
}

//Print out lists:
console.log('')
console.log(chalk.white.bold.underline('YOUR TASKS:'));
console.log(chalk.red('These tasks are on your ') +chalk.red.bold.underline('PLAY')+chalk.red(' list:'));
for (i=0; i<play.length; i++){
console.log(chalk.red('   *  '+play[i]));
}

console.log(chalk.blue('These tasks are on your ')+chalk.blue.bold.underline('HOME') +chalk.blue(' list:'));
for (j=0; j<home.length; j++){
console.log(chalk.blue('   *  '+home[j]));
}

console.log(chalk.green('These tasks are on your ')+chalk.green.bold.underline('WORK')+chalk.green(' list:'));
for (k=0; k<work.length; k++){
console.log(chalk.green('   *  '+work[k]));
}
