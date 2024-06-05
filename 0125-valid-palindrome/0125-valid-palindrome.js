// 대문자 알파벳 범위
const upperCaseA = 'A'.charCodeAt(0); // 65
const upperCaseZ = 'Z'.charCodeAt(0); // 90

// 소문자 알파벳 범위
const lowerCaseA = 'a'.charCodeAt(0); // 97
const lowerCaseZ = 'z'.charCodeAt(0); // 122

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) return true

    const FILTERED_STRING = [...s]
        .map(char => {
            const codeAt = char.charCodeAt(0)
            const isUppercase = codeAt >= 65 && codeAt <= 90
            const isLowercase = codeAt >= 97 && codeAt <= 122
            
            if (isUppercase || isLowercase) {
                return char.toLowerCase()
            }

            if (char == ' ') {
                return ''
            }

            if (Number.isInteger(Number(char))) {
                return char
            }

            return ''
        })
        .join('')

    let start = 0
    let end = FILTERED_STRING.length - 1
    let result = true

    for (const char of FILTERED_STRING) {
        if (start > end || start === end) break

        const startChar = FILTERED_STRING[start]
        const endChar = FILTERED_STRING[end]

        if (startChar !== endChar) {
            result = false
            break;
        }

        start += 1
        end -= 1
    }

    return result
};