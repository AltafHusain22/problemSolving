
//problem -1

    //-------------
    // this function will receive a parameter and will calculate with multiply, sum, devide and substract and finally will return the result.
    //-------------

function mindGame(number) { 

    //-------------
    // the below condition will check the data type and will return a error message .
    //-------------
    if (typeof number === 'string') {
       return ('Error: Input should be a number, not a string.')  
      
    } else { 
    let result = 0
    let multiply = number * 3
    let sum = multiply + 10
    let divide = sum / 2
    let substract = divide - 5
    let finalResult = result += substract
    return finalResult
    }  
}

//problem -2


