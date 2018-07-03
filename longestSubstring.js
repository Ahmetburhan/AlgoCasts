// 3. Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

//     Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = {};
    let left = 0;
    let strArray = s.split('');
    return strArray.reduce((max,v,i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Max.max(max, i - left + 1)
    }, 0)

}





lengthOfLongestSubstring("pwkowkeow") 