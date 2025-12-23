function ConversionResult(props) {
  const convertedAmount =
    ((props.rates[props.toCurrency] / props.rates[props.fromCurrency]) * props.amount)
      .toFixed(2);

  return (
    <div className="mt-5 bg-slate-700 rounded-2xl p-4 text-white">

      <h2 className="text-2xl font-semibold">
        {props.amount} {props.fromCurrency}
        <span className="text-slate-400 mx-2">=</span>
        {convertedAmount} {props.toCurrency}
      </h2>
    </div>
  );
}

export default ConversionResult;
