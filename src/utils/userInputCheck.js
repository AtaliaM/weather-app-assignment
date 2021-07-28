const cities = require("cities-list");

const userInputCheck = (input) => {
    if (!input.length) {
        return false
    }
    input = input.toLowerCase().trim().replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '');
    const inputHashMap = returnCharFreqHashmap(input);
    //first level check//
    const firstLevelResults = runFirstLevelCheck(input, inputHashMap);
    if (typeof firstLevelResults === 'string') {
        return firstLevelResults;
    }
    // console.log(firstLevelResults)
     
    //second level check//
    const secondLevelResults = runSecondLevelCheck(input, firstLevelResults);
    console.log(secondLevelResults)
    
    //third level check//
    //checking longest substring && comparing the city with longest substring length to user input length
    const thirdLevelResults = runThirdLevelCheck(input, secondLevelResults);
    if(thirdLevelResults.length===1) {
        return thirdLevelResults[0];
    }
   
    return thirdLevelResults;
}

const runFirstLevelCheck = (input,inputHashMap) => {
    let firstLevelResultCities = [];
    for (let city in cities) {
        const tempCity = city.toLowerCase().replace(/\s+/g, '');
        const currentCityHashMap = returnCharFreqHashmap(tempCity);

        if (tempCity === input) {
            return city
        }
        const firstLevelComparisonResult = firstLevelComparison(inputHashMap, currentCityHashMap);
        if (firstLevelComparisonResult) {
            firstLevelResultCities.push(tempCity)
        }
    }
    
    return firstLevelResultCities
}

const runSecondLevelCheck = (input, firstLevelResults) => {
    let secondLevelResultCities = [];
    for (let i = 0; i < firstLevelResults.length; i++) {
        secondLevelResultCities.push(secondLevelComparison(firstLevelResults[i], input))
    }
    return secondLevelResultCities;
}

const runThirdLevelCheck = (input,secondLevelResults) => {
    let largestSubstringLen = [0,""];
    let bestMatches = [];

    for(let i=0; i<secondLevelResults.length; i++) {
        if(secondLevelResults[i][1].length > largestSubstringLen[0]) {
            largestSubstringLen[0] = secondLevelResults[i][1].length;
            largestSubstringLen[1] = secondLevelResults[i][0];
            bestMatches.length = 0;
            bestMatches.push(secondLevelResults[i][0]);
        }
        else if(secondLevelResults[i][1].length===largestSubstringLen[0] && secondLevelResults[i][0].length===input.length) {
            // bestMatches.length = 0;
            bestMatches.push(secondLevelResults[i][0]);
        }
    }
console.log(bestMatches)
    return bestMatches;
}

const firstLevelComparison = (userInputHashMap, cityNameHashMap) => {
    let NumLettersWithNoMatch = 0;
    let numOfDifferentFrequencyLetters = 0;
    for (let property in userInputHashMap) {
        if (!(cityNameHashMap.hasOwnProperty(property))) {
            NumLettersWithNoMatch++;
        }
        else {
            if (userInputHashMap[property] !== cityNameHashMap[property]) {
                numOfDifferentFrequencyLetters++;
            }
        }
    }
    for (let property in cityNameHashMap) {
        if (!(userInputHashMap.hasOwnProperty(property))) {
            NumLettersWithNoMatch++;
        }
    }

    if ((!NumLettersWithNoMatch && !numOfDifferentFrequencyLetters) || (NumLettersWithNoMatch < 2 && numOfDifferentFrequencyLetters < 2)
    || (NumLettersWithNoMatch < 3 && numOfDifferentFrequencyLetters < 1)) {
        return 1;
    }
}

const secondLevelComparison = (currCity, input) => {
    let firstComaprison = "";
    let secondComparison = "";
    let tempCity = currCity;
    for(let i=0; i<currCity.length; i++) {
        if(input.includes(tempCity)) {
            firstComaprison = tempCity;
            break;
        }
        else {
            tempCity = tempCity.slice(1);
        }
    }

    tempCity = currCity;
    for(let i=0; i<currCity.length; i++) {
        if(input.includes(tempCity)) {
            secondComparison = tempCity;
            break;
        }
        else {
            tempCity = tempCity.slice(0,-1);
        }
    }
    return firstComaprison.length > secondComparison.length ? [currCity,firstComaprison] : [currCity,secondComparison];
}


const returnCharFreqHashmap = (str) => {
    const hashmap = {};

    for (let i = 0; i < str.length; i++) {
        hashmap.hasOwnProperty(str[i]) ? hashmap[str[i]]++ : hashmap[str[i]] = 1;
    }
    return hashmap;
}

export default userInputCheck;