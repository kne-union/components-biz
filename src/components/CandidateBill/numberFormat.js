export const formatMoney = (value, options = {}) => {
  const moneyOptions = Object.assign({}, { minDigits: 2, maxDigits: 2, defaultValue: 0, unit: 100 }, options);
  const { minDigits, maxDigits, defaultValue, unit } = moneyOptions;
  return value
    ? new Intl.NumberFormat('en', {
        minimumFractionDigits: minDigits,
        maximumFractionDigits: maxDigits
      }).format(value / unit)
    : defaultValue;
};

export const getPercentage = (value, afterValue) =>
  value && afterValue
    ? new Intl.NumberFormat(value / afterValue, {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(value / afterValue)
    : '0%';
