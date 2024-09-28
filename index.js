
function distanceFromHqInBlocks(someValue) {  
    const hqLocation = 42; 
    return Math.abs(someValue - hqLocation);  
  }  
  
  function distanceFromHqInFeet(someValue) {  
    const blocks = distanceFromHqInBlocks(someValue);  
    return blocks * 264; 
  }  
  
 
  console.log(distanceFromHqInBlocks(60)); 
  console.log(distanceFromHqInFeet(60));   

  function distanceTravelledInFeet(start, destination) {  
    const blockLengthInFeet = 264;   
    const distanceInBlocks = Math.abs(destination - start); 
    return distanceInBlocks * blockLengthInFeet; 
}  

 
console.log(distanceTravelledInFeet(4, 10));  
console.log(distanceTravelledInFeet(11, 5));   
console.log(distanceTravelledInFeet(1, 13)); 



 
function calculatesFarePrice(start, destination) {  
    const distanceFeet = Math.abs(destination - start) * 264; 
    let fare;  
  
    if (distanceFeet <= 400) {  
      fare = 0; 
    } else if (distanceFeet > 400 && distanceFeet <= 2000) {  
      fare = (distanceFeet - 400) * 0.02;
    } else if (distanceFeet > 2000 && distanceFeet <= 2500) {  
      fare = 25;  
    } else {  
      return 'cannot travel that far';  
    }  
  
    return fare; 
  }