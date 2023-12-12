export default function generateNextRM(lastRM) {
  const [prefix, numberStr] = lastRM.split('-');
  const nextNumber = parseInt(numberStr, 10) + 1;
  const nextRM = `${prefix}-${String(nextNumber).padStart(
    numberStr.length,
    '0',
  )}`;

  return nextRM;
}
