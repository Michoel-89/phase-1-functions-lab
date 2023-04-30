function distanceFromHqInBlocks(someValue) {
    let HQ = 42;
    if (someValue > HQ) {
        return someValue - HQ 
    } else {
        return HQ - someValue;
    }
  }
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (destination > start) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
  }
  function calculatesFarePrice(start, destination) {
    let d = distanceTravelledInFeet(start, destination);
    if (d < 400) {
        return 0;
    } else if (d < 2000) {
        return (d - 400) * 0.02;
    } else if (d < 2500) {
        return 25;
    } else if (d >= 2500) {
        return 'cannot travel that far';
    }
  }