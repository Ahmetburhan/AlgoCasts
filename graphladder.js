function oneLetterDifference(word1, word2) {
    if (word1.length !== word2.length) return false;

    let differences = 0;

    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            differences++;
        }
    }
    return differences === 1;
}

function wordLadder(beginWord, endWord, wordList) {

    // O(V + E)
    let graph = {};

    wordList.push(beginWord)



    // O(N^2)
    for (let i = 0; i < wordList.length; i++) {
        graph[wordList[i]] = [];
        for (let j = 0; j < wordList.length; j++) {

            // O(K)
            if (oneLetterDifference(wordList[i], wordList[j])) {
                graph[wordList[i]].push(wordList[j]);
            }
        }
    }

    let seen = new Set();
    let queue = [];

    queue.push([beginWord, 1]);
    seen.add(beginWord);

    while (queue.length > 0) {
        let current = queue.shift();
        let word = current[0];
        let distance = current[1];

        if (word === endWord) return distance;

        let adjacentWords = graph[word];

        for (let i = 0; i < adjacentWords.length; i++) {
            if (!seen.has(adjacentWords[i])) {
                seen.add(adjacentWords[i]);
                queue.push([adjacentWords[i], distance + 1]);
            }
        }
    }
    return -1;
}

wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])