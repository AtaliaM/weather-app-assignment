const cities = require("cities-list");

const userInputCheck = (input) => {
    if (!input.length) {
        return false
    }
    input = input.toLowerCase().trim().replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '');
    const inputHashMap = returnCharFreqHashmap(input);
    let firstLevelComparisonCities = [];
    let secondLevelComparisonCities = [];
    let largestSubstringLen = [0,""];
    let bestMatches = [];

    //first level check//
    for (let city in cities) {
        const tempCity = city.toLowerCase().replace(/\s+/g, '');
        const currentCityHashMap = returnCharFreqHashmap(tempCity);

        if (tempCity === input) {
            return city
        }

        const firstLevelComparisonResult = firstLevelComparison(inputHashMap, currentCityHashMap);
        if (firstLevelComparisonResult) {
            firstLevelComparisonCities.push(tempCity)
        }
    }

    //second level check//
    for (let i = 0; i < firstLevelComparisonCities.length; i++) {
        secondLevelComparisonCities.push(secondLevelComparison(firstLevelComparisonCities[i], input))
    }

    //third level check//
    //checking longest substring && comparing the city with longest substring length to user input length
    for(let i=0; i<secondLevelComparisonCities.length; i++) {
        if(secondLevelComparisonCities[i][1].length > largestSubstringLen[0]) {
            largestSubstringLen[0] = secondLevelComparisonCities[i][1].length;
            largestSubstringLen[1] = secondLevelComparisonCities[i][0];
            bestMatches.length = 0;
            bestMatches.push(secondLevelComparisonCities[i][0]);
        }
        else if(secondLevelComparisonCities[i][1].length===largestSubstringLen[0] && secondLevelComparisonCities[i][0].length===input.length) {
            bestMatches.length = 0;
            bestMatches.push(secondLevelComparisonCities[i][0]);
        }
    }
    console.log(secondLevelComparisonCities)
    console.log(bestMatches)
    return bestMatches[0];
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