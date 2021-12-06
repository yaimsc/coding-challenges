/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */
module.exports = function(width) {
  // return `${ width }`;
  if(width < 2){
    throw "ERROR: minimum width is 2"
  }
  
  //Vars
  
  let adidas = ''; 
  let numStripes = 3; 
  let minHeight = Math.floor(Math.sqrt(width));
  let totalHeight = minHeight*numStripes;

  let stripe="@".repeat(width); 
  let stripes=Array(numStripes).fill(stripe); 

  let separator = ' '; 
  
  for(let i = 0; i < totalHeight; i++){
    let offset = Math.floor(i % minHeight);
    let skip = numStripes - 1 - Math.floor(i/minHeight); 
    adidas += separator.repeat(Math.floor((skip*width) + offset));
    adidas += stripes.slice(skip,numStripes).join(separator);
    if (i != totalHeight - 1) {
      adidas += '\n';
    }
  }

  return adidas; 

};