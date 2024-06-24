/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // 1. 주어진 좌표로 left, right, top, bottom을 구한다.
        // 1-1. top, bottom의 규칙을 찾는다.
    // 2. 문제의 조건대로 4방향 좌표의 값이 주어진 좌표의 값과 같다면 
        // 2-1. 1.번을 반복한다.
    // 3. 좌표들을 주어진 색상으로 모두 변경한다.
    const fill = (sr, sc, cur) => {
        if (image.length <= sr || sr < 0) {
            return
        }
        if (image[0].length <= sc || sc < 0) {
            return
        }
        if (cur != image[sr][sc]) {
            return
        }
        if(image[sr][sc] == color) {
            return 
        }

        image[sr][sc] = color;

        fill(sr - 1, sc, cur);
        fill(sr + 1, sc, cur);
        fill(sr, sc - 1, cur);
        fill(sr, sc + 1, cur);
    }
    fill(sr,sc, image[sr][sc])
    
    return image
};