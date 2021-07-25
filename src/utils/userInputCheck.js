const cities = require("cities-list");
console.log(cities["new york"]) 

const userInputCheck = (input) => {
    if (!input.length) {
        return false
    }
    input = input.toLowerCase().trim().replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '');
    const inputHashMap = returnCharFreqHashmap(input);
    let closestCityName = null;
    let closestCityAcurracyLevel = 0;


    for (let city in cities) {
        const tempCity = city.toLowerCase().replace(/\s+/g, '');
        const currentCityHashMap = returnCharFreqHashmap(tempCity);
        let temp;

        if(tempCity===input) {
            return city
        }

        const comparisonResult = compareUserinputAndCityName(inputHashMap, currentCityHashMap);
        if(comparisonResult===5) {
            console.log(city)
            return city;
        }
        else if(comparisonResult===4) {
            console.log("almost identical", city)
            temp = isCurrentAccuracyGreater(closestCityAcurracyLevel, comparisonResult);
            if(temp) {
                closestCityName=city;
            }
        }
        else if(comparisonResult===3) {
            console.log("minor difference", city)
            temp = isCurrentAccuracyGreater(closestCityAcurracyLevel, comparisonResult);
            if(temp) {
                closestCityName=city;
            }
        }
        else if(comparisonResult===2) {
            console.log("small difference", city)
            temp = isCurrentAccuracyGreater(closestCityAcurracyLevel, comparisonResult);
            if(temp) {
                closestCityName=city;
            }
        }
    }
    // console.log(closestCityName)
    return closestCityName;
}

const compareUserinputAndCityName = (userInputHashMap, cityNameHashMap) => {
    let identicalProperties = true;
    let numOfDifferentFrequencyLetters = 0;
    let numOfDifferentObjectKeys = Math.abs(Object.keys(userInputHashMap).length - Object.keys(cityNameHashMap).length); 
    for(let property in userInputHashMap) {
        if(!(cityNameHashMap.hasOwnProperty(property))) {
            identicalProperties = false;
        }
        else {
            if(userInputHashMap[property]!==cityNameHashMap[property]) {
                numOfDifferentFrequencyLetters++;
            }
        }
    }

    if(identicalProperties && numOfDifferentFrequencyLetters===0 && numOfDifferentObjectKeys===0) {
        return 5 //"identical"
    }
    else if(identicalProperties && numOfDifferentFrequencyLetters < 3 && numOfDifferentObjectKeys < 3) {
        console.log(numOfDifferentObjectKeys)
        return 4 //"almost-identical"
    }
    else if(identicalProperties && numOfDifferentObjectKeys < 2) {
        return 3 //"minor-difference"
    }
    else if(identicalProperties && numOfDifferentFrequencyLetters < 2 && numOfDifferentObjectKeys < 2) {
        return 2 //"small-difference"
    }
    else if(!identicalProperties && numOfDifferentFrequencyLetters > 2) {
        return 1 //"big-difference";
    }
}


const returnCharFreqHashmap = (str) => {
    const hashmap = {};

    for(let i=0; i<str.length; i++) {
        hashmap.hasOwnProperty(str[i]) ? hashmap[str[i]]++ : hashmap[str[i]] = 1;
    }
    return hashmap;
}

const isCurrentAccuracyGreater = (prevAccuracy, currentAccuracy) => {
    if(prevAccuracy < currentAccuracy) {
        return true
    }
    return false
}


export default userInputCheck;