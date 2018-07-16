// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.

// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3


/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
Time is O(m*n) [where m is num of rows and n is num of columns],
Space is O(m*n)
*/
var numIslands = function (grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }

    let count = 0;


    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                DFS(grid, i, j);
                count++;
            }
        }
    }

    return count;
}

function DFS(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] !== '1') {
        return;
    }

    grid[i][j] = 0;

    DFS(grid, i - 1, j); // Top
    DFS(grid, i + 1, j); // Bottom
    DFS(grid, i, j - 1); // Left
    DFS(grid, i, j + 1); // Right
}

let grid = [
    ["1", "1", "1", "0", "1"], 
    ["1", "1", "0", "0", "0"], 
    ["1", "1", "0", "1", "0"], 
    ["0", "0", "0", "1", "0"]] 

console.log(numIslands(grid))

