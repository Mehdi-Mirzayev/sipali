function convertToManat(amount) {
  return amount.toFixed(2) + ' ₼';
}


var amount = parseFloat(prompt("Məbləği daxil edin:"));


if (!isNaN(amount)) {

  console.log("Daxil edilən məbləğ: " + convertToManat(amount));
} else {

  console.log("Xahiş edirəm düzgün bir rəqəm daxil edin.");
}
