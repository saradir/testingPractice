function capitalize(str){
    if(typeof str != "string"){
        throw new Error('must provide a string');
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str){
    if(typeof str != "string"){
        throw new Error('must provide a string');
    }

    return str.split('').reverse().join('');
}

const calculator = {
    add(a, b){
        if(typeof a != 'number' || typeof b != 'number'){
            throw new Error('input must be a number');
        }
        return a + b;
    },

    subtract(a, b){
        if(typeof a != 'number' || typeof b != 'number'){
            throw new Error('input must be a number');
        }

        return a -b;
    },

    divide(a, b){
        if(typeof a != 'number' || typeof b != 'number'){
            throw new Error('input must be a number');
        }

        if(b === 0){
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    },

    multiply(a, b){
        if(typeof a != 'number' || typeof b != 'number'){
            throw new Error('input must be a number');
        }

        return a * b;
    }
}

function caesarCipher(str, shiftFactor){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedString = '';
    for(const char of str){
        if(!isAlphabetic(char)){
            console.log('not alphabetical');
            encryptedString += char;
            continue;
        }
        const shiftedIndex = (alphabet.indexOf(char.toLowerCase()) + shiftFactor) % 26;
        let shiftedChar = alphabet[shiftedIndex];
        if(isUppercase(char)){
           shiftedChar = shiftedChar.toUpperCase();
        }
        encryptedString += shiftedChar;
    }
    return encryptedString;
}

//helper function for caesar chipher
function isAlphabetic(char){
    return /^[a-zA-Z]$/.test(char);
}

//helper function for caesar chipher
function isUppercase(char){
    return /^[A-Z]$/.test(char);
}


function analyzeArray(arr){
    const length = arr.length;

    if(length === 0){
        throw new Error('Array must include at least 1 number');
    }
    let min = Infinity;
    let max = -Infinity;
    let average;
    let sum = 0;
    for(num of arr){

        if(!(typeof num === 'number')){
            throw new Error('array must contain only numbers');
        }
        if(num < min){
            min = num;
        }

        if(num > max){
            max = num;
        }

        sum += num;
    } 
    average = sum / length;

    return {average, min, max, length};
}
module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray };