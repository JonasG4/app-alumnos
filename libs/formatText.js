export function formatNumber(number) {
  const numbers = number.toString().split(".");
  let integer = parseInt(numbers[0].replace(/\D/g, ""));
  let decimal = numbers[1] ? numbers[1].replace(/\D/g, "") : "";

  if (!isNaN(integer)) {
    integer = integer.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }

  if (numbers.length >= 2) {
    decimal = decimal.slice(0, 2);
    return `${integer}.${decimal}`;
  }

  const newPrice = integer ? integer : "";
  return newPrice;
}
