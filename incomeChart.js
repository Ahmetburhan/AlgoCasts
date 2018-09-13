function housing(input) {
    if (typeof input == "undefined" || typeof input == "null"){
        return console.log("Please check the input again!")
    }
    if (Array.isArray(input)) {
        return console.log("Input value should be defined as String please try again!")
    }
    let report = input.split("\n")
    let result = {
        fixed_expenses_before_education: 0,
        tradelines: []
    }
    let helper = function (str) {
        let strArray = str.split(" ")
        let date = strArray[0];
        let code = strArray[1]
        let code_sub = strArray[2];
        let monthly_payment = (strArray[3].charAt(0) === "$") ? parseInt(strArray[3].slice(1).split('.').join("")) : parseInt(strArray[3].split('.').join(""));
        let balance = (strArray[4].charAt(0) === "$") ? parseInt(strArray[4].slice(1).split('.').join("")) : parseInt(strArray[4].split('.').join("")) || 0;


        class Report {
            constructor(date, code, code_sub, monthly_payment, balance) {
                this.date = date,
                    this.code = code,
                    this.code_sub = code_sub,
                    this.monthly_payment = monthly_payment,
                    this.balance = balance,
                    this.tradelines = function () {
                        let type = ""
                        //checking morgage line or not
                        if (this.code === "10" && this.code_sub === "12" || this.code_sub === "15") {
                            type = "morgage";
                            return {
                                "type": type,
                                "monthly_payment": this.monthly_payment,
                                "current_balance": this.balance
                            }
                        }
                        //checking if report is education related
                        if (this.code === "5") {
                            type = "education";
                            return {
                                "type": type,
                                "monthly_payment": this.monthly_payment,
                                "current_balance": this.balance
                            }
                        }
                        // remaining categories will be coded as "other"
                        else {
                            type = "other";
                            return {
                                "type": type,
                                "monthly_payment": this.monthly_payment,
                                "current_balance": this.balance
                            }
                        }
                    }
            }
        }
        let rem = new Report(date, code, code_sub, monthly_payment, balance)
        // console.log(rem.tradelines())
        result.tradelines.push(rem.tradelines())
    }

    for (let sentence of report) {
        // console.log(sentence)
        helper(sentence)
    }
    result.tradelines.forEach(el => {
        if (el.type !== "education") {
            result.fixed_expenses_before_education += el.monthly_payment
            // console.log(el.monthly_payment)
        }
    })
    return result;
}

let input = "2015-10-10 10 12 $1470.31 $659218.00\n2015-10-10 5 1 $431.98 $51028.00\n2015-10-09 8 15 $340.12 $21223.20\n2015-10-10 10 15 $930.12 $120413.00\n2015-10-09 12 5 $150.50 $6421.21"


console.log(housing(input))
console.log(housing())
console.log(housing([]))