'use strict';


// LOOPS //

/*
for(let kick = 1; kick <= 10; kick++){
    console.log(`John kick the ball ${kick} times`)
}

const profile = [
    'Olabisi',
    'Michael',
     2022 - 2000,
    'Frontend Developer',
    ['Paul', 'Dorcas', 'James'],
    true
];

const types = [];

for(let i = 0; i < profile.length; i++){

    // reading from profile //
    console.log(profile[i], typeof profile[i])

    // filling types array //
   /* types[i] = typeof profile[i]

   types.push(typeof profile[i])
}

console.log(types)

const year = [2000, 2001, 2002, 2003];
const ages = [];

for(let i = 0; i < year.length; i++){
    ages.push(2022 - year[i])
}
console.log(ages)

console.log('=== ONLY STRINGS ==')

for(let i = 0; i < profile.length; i++){
    // continue and break //
    if(typeof profile[i] !== 'string') continue

    console.log(profile[i], typeof profile[i])
}

console.log('=== ONLY NUMBER ==')
for(let i = 0; i < profile.length; i++){
    // continue and break //
    if(typeof profile[i] === 'number') break

    console.log(profile[i], typeof profile[i])
}

const profile = [
    'Olabisi',
    'Michael',
     2022 - 2000,
    'Frontend Developer',
    ['Paul', 'Dorcas', 'James']
];

for(let i = profile.length - 1; i >= 0; i--){
    console.log(profile[i])
}

for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`====== Starting Exercise ${exercise}`)

    
}

console.log('====== NEXT PAGE  =====')

for(let rep = 1; rep <=10; rep++){
    console.log(`Lifting weight repetition ${rep}`)
}*/

let rep = 1;
while(rep <= 10){
    /*console.log(`Lifting weight repetition ${rep}`)*/
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1 

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
    if(dice === 6){
        console.log('Loop is about to end....')
    } 
}