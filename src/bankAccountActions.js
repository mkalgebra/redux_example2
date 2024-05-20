export function incBalance(value) {
  return {
    type: "INC",
    value: value,
  };
}

export function decBalance(value) {
  return {
    type: "DEC",
    value: value,
  };
}
