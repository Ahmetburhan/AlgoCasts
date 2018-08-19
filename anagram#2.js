function anagrams(str1, str2) {
    return helper(str1) == helper(str2);

    function helper(str) {

        return str
            .toLowerCase()
            .split("")
            .sort()
            .join("")

    }


}





anagrams('rail safety', 'fairy tales') //--> True
anagrams('RAIL SAFETY', 'fairy tales')// --> True
  // anagrams('Hi there', 'Bye there')