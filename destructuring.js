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