
//problem -1

    //-------------
    // this function will receive a parameter and will calculate with multiply, sum, devide and substract and finally will return the result.
    //-------------

function mindGame(number) { 

   // -------------
    //the below condition will check the data type and will return a error message .
   // -------------
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

  //-------------
    // this function will receive a parameter and will get a string and will find the even or odd based on input charecters
    //-------------

function evenOdd(inputStr) { 

    if (typeof inputStr === 'number') {
       return ('Error: Input should be a string, not a number.')  
      
    } else {
    let length = inputStr.length  // this line will get the total index of string
    if (length % 2 == 0) {       // this condition will check if this value is even 
        return ('Even')
    } else { 
        return ('Odd')
    }
    }

}

//problem -3

function isLGSeven(number) { // this function will take a parameter and calculte the blew conditins

    let differece = number - 7 // it will give the substract from number 
    if (differece < 7) { // it will compare between input number and 7
        return differece
    } else if(differece > 7 ) { 
        return number * 2 // it'll return double value of input 
    }
    
}

//problem -4

    //-------------
    // this function will receive a parameter as array and will findout the bad data (negative value) from array
    //-------------
function findingBadData(arr) { 
  if (typeof arr === 'string') {
       return ('Error: Input should be a number, not a string.')  
      
  } else {
      let badData = 0
      let goodData = 0
      
    for (let i = 0; i < arr.length; i++) { // get the total elements from array
        if (arr[i] < 0 ) { // if the value is less than 0 it will store negative value on badData
            badData++
        } else if (arr >= 0){ 
            goodData++
        }   
    }
    return badData
    }
  
}







  


