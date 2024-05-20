export default function bankAccountReducer(state = { balance: 0 }, action) {
  console.log(typeof state.balance);
  switch (action.type) {
    case "INC":
      return {
        balance: state.balance + Number(action.value),
      };
    case "DEC":
      return {
        balance: state.balance - Number(action.value),
      };
    default:
      return state;
  }
}
