function getHitWord(str, words) {
    if(str === '') return [];
    let pattern = createSearchPattern(str)
    let reg = new RegExp(pattern)
    let hits = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].match(reg)) hits.push(words[i])
    }

    return hits
}

function kanaToHira(str) {
    return str.replace(/[\u30a1-\u30f6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    })
}

function hiraToKana(str) {
    return str.replace(/[\u3041-\u3096]/g, function(match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
    })
}

function createSearchPattern(str) {
    const hira = kanaToHira(str)
    const kana = hiraToKana(str)
    const upper = str.toUpperCase()
    const lower = str.toLowerCase()
    let pattern = ''
    for (let i = 0; i < hira.length; i++) {
        pattern += `[${hira[i] + kana[i] + upper[i] + lower[i]}]`
    };
    pattern += '.*$'

    return pattern
}

export default getHitWord