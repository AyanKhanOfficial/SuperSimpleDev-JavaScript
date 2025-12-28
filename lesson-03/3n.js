console.log(`Items (${2 + 2}): $${(2 * 2095 + 2 * 799) / 100}`);
console.log(`Shipping & handling: $${(499 * 2) / 100}`);
console.log(`Total before tax: $${(2 * 2095 + 2 * 799 + 499 * 2) / 100}`);
`Estimated tax (10%): $${
  Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100
}`;
