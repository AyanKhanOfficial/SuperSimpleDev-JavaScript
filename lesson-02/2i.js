let basketballPrice = 2095;
let toasterPrice = 1899;
let tshirtPrice = 799;
let total = (basketballPrice + toasterPrice + tshirtPrice) / 100;
console.log(`Total Items Price:  ${total}`);

let shippingPrice = 499;
let totalBeforTax = total + shippingPrice / 100;
console.log(`Total before tax: ${totalBeforTax}`);

let afterTax = Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100;
console.log(`Estimated Tax (10%): ${afterTax}`);

let final =
  (2095 + 799 + 1899 + 499) / 100 +
  Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100;
console.log(final);
