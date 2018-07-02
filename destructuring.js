var expense = {
    type: "Business",
    amount: "45USD"
}

//var type = expense.type;
//var amount = expense.amount;

const { type, amount } = expense;

type;
amount;



const companies = [
    "google", "facebook", "kayak"
]

const { length } = companies;

const [name, name2, ...rest] = companies;

name;
name2;
rest;
length;


const companies = [
    { name: "google", location: "Mountain view" },
    { name: "Facebook", location: "Menlo PArk" },
    { name: "Uber", location: "San Francisco" }
]

const [{ location }] = companies;

location


const Google = {
    locations: ["mountain view", "sf", "san jose"]
}


const { locations: [location, location2, ...rest] } = Google;
location2 //sf