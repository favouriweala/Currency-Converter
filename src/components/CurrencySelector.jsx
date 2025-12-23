function CurrencySelector(props) {
  return (
    <div >

      {/* FROM CURRENCY */}
      <div className="space-y-3 mb-6">

        <div className="bg-[#293946] rounded-2xl p-8">
          <div className="flex justify-between text-lg text-slate-300">
            <span className="font-semibold">{props.fromCurrency}</span>
            <span>Main account</span>
          </div>
        </div>

        <div className="bg-[#293946] rounded-2xl p-4">
          <input
            type="number"
            value={props.amount}
            onChange={(e) => props.setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full bg-transparent outline-none text-3xl"
          />
        </div>
      </div>

      {/* SWAP BUTTON */}
      <div className="flex justify-center mb-4">
        <button
          onClick={props.swapCurrencies}
          className="bg-slate-300 text-slate-800 w-10 h-10 rounded-full flex items-center justify-center text-lg"
        >
          ⇅
        </button>
      </div>

      {/* TO CURRENCY */}
      <div className="space-y-3">

        <div className="bg-[#445c70] rounded-2xl p-8">
          <div className="flex justify-between text-lg text-slate-300">
            <span className="font-semibold">{props.toCurrency}</span>
            <span>Current account</span>
          </div>
        </div>

        <div className="bg-[#445c70] rounded-2xl p-8">
          <div className="text-3xl">
            {props.convertedAmount}
          </div>
        </div>
      </div>

      {/* TRANSFER BUTTON */}
      {/* <button className="w-full bg-emerald-200 text-slate-900 py-3 rounded-full font-medium">
        Transfer
      </button> */}
    </div>
  );
}

export default CurrencySelector;
