function solution(N) {
    let L = 0;
    let R = 1;
    result = ""
    for (let i = 0; i < N; i++) {
        if (L != N || R != N) {
            L = 2 * L - R
            console.log(L, R)
            result += "L"
        } if (R > L) {
            R = 2 * R - L
            result += "R"
            if (Math.abs(L) == N || Math.abs(R) == N) {
                return result
            }

        }

    }

    return result
}

console.log(solution(21))