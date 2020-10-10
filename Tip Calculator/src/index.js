// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:


// Write the function to find the calculateTip obtained.
function calculateTip(amount, rating) {
  switch(rating)
  {
    case 'Excellent':
      return Math.round((amount*20)/100);
    case 'great':
      return Math.round((amount*15)/100);
    case 'good':
      return Math.round((amount*10)/100);
    case 'Poor':
      return Math.round((amount*5)/100);
    case 'Terrible':
      return (amount*0);
    default:
      return "Rating not recognised";
  }
}
//Use SpecRunner to check the Test Cases.