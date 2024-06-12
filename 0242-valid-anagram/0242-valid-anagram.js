/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map()

    for (const char of s) {
        if (!map.has(char)) {
            map.set(char, 1)
            
            continue;
        }

        map.set(char, map.get(char) + 1)
    }

    for (const char of t) {
        
        if (!map.has(char)) {
            return false
        }
        
        if (map.get(char) - 1 === 0) {
            map.delete(char)
        } else {
            map.set(char, map.get(char) - 1)
        }
    }

    return !Boolean(map.size)
};