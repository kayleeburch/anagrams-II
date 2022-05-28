exports.anagramsFor = function(word, listOfWords) {
    let searchWord = removeWhiteSpace(sort(word.split('')))
    let result = []
    for(let word in listOfWords) {
        if(JSON.stringify(removeWhiteSpace(sort(turnToArr(listOfWords[word])))) == JSON.stringify(searchWord)) {
            result.push(listOfWords[word])
        }
    }
    return result
};

function sort(x){
    return x.sort()
}

function removeWhiteSpace(x){
    return x.filter(word => word !== ' ');
}

function turnToArr(x){
    return x.split('')
}