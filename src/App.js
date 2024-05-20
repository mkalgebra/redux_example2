import { useState } from "react";
import "./App.css";
import { incBalance, decBalance } from "./bankAccountActions";
import { connect } from "react-redux";

function App({ podaci, uplati, isplati }) {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <p>Trenutno stanje: {podaci.balance} eura</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={() => uplati(value)}>UPLATI</button>
      <button onClick={() => isplati(value)}>ISPLATI</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    podaci: state,
  };
}

const mapDispatchToProps = {
  uplati: (val) => incBalance(val),
  isplati: (val) => decBalance(val),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
