const pair = {
    '(': ')',
    '{': '}',
    '[': ']'
}

function isValid(s: string): boolean {
    if (s.length % 2 === 1) {
        return false
    }
    if (Object.values(pair).includes(s[0])) {
        return false
    }
    if (Object.keys(pair).includes(s[s.length - 1])) {
        return false
    }

    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (Object.keys(pair).includes(s[i])) {
            stack.push(s[i])
            continue;
        }

        if (pair[stack.pop()] !== s[i]) {
            return false
        }
    }

    return stack.length === 0
};