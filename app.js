function extractValue(arr,key) {
    return arr.reduce(function(allObjects, nextVal) {
         allObjects.push(nextVal[key]);
         return allObjects;
    }, []);
}

function vowelCount(str){
    const vowels = "aeiou";
    return str.split("").reduce(function(acc, nextLetter) {
        let lowerCased = nextLetter.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1) {
            if(acc[lowerCased]) {
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }, {});
}

//had to code along solution starting at the reduce function parameters
function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, next, idx) {
        acc[idx][key] = value;
        return acc;
    }, arr);
}

function partition(arr, callback) {
    return arr.reduce(function(acc, next) {
        if(callback(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}