var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    var myArray = [humanYears, 0, 0];

    if (humanYears == 1) {
        myArray = [1,15,15];
    } else if (humanYears == 2) {
        myArray = [2,24,24];
    } else {
        var catYears = 24;
        myArray[1] = (humanYears -2) * 4 + catYears;
        var dogYears = 24;
        myArray[2] = (humanYears -2) * 5 + dogYears;
    }    
    return myArray;
  }

  console.log(humanYearsCatYearsDogYears(10));
  