//interview question for create a common function for both sum(a,b) and sum((a),(b))
function sum(a,b) {
    return arguments.length === 2   //were two arguments passed?
      ? a+b                         //yes: return their sum
      : (b) => a+b                  //no:  return a function
  };
  console.log(sum(2,3));
  console.log(sum(2)(3));