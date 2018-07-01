var computers = [
    { name: "Apple", ram: 24 },
    { name: "Compaq", ram: 4 },
    { name: "Dell", ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputerCanRun = false;
//every checks boole all of them &&
let every = computers.every((computer) => computer.ram > 16)
every

"----"

//some checks boolen all of them with ||

let some = computers.some((computer) => computer.ram > 16)
some



var names = [
    "Alexandria",
    "leyla",
    "cay"
];


names.every((name) => name.length > 4);

names.some((name) => name.length > 4);


