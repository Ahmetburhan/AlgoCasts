// let str1 = "12354987";
// let str2 = "1235498799999";

let sumLarge = (str1,str2) => {
    let result = [];
    let handCount = 0
    for (let i = str1.length - 1; i >= 0; i--) {
        for (let j = str2.length - 1; j >= 0; j--) {
            console.log(str1[i], str2[j])
            if ((Number(str1[i]) + Number(str2[j])) >= 10 ) {
               result.push( (Number(str1[i]) + Number(str2[j])) % 10 + handCount )
               handCount++
               i--
               console.log("result @", str1[i], str1[j], "result=", result, "hand=", handCount)
            } else {
                if (handCount => 0){
                result.push((Number(str1[i]) + Number(str2[j])) + handCount);
                handCount = 0;

    
                }
            }

    } return result.reverse().join('');

}
}

console.log(sumLarge("212","222"));
