import {useState, useEffect} from "react";
import Header from '../../currency-converter-app/src/components/Header'
import AmountInput from './components/AmountInput'
import './App.css'
import CurrencySelector from './components/CurrencySelector'
import ConversionResult from './components/ConversionResult'
import CurrencyAPI from './api/CurrencyAPI';

function App() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchRates() {
      try {
        const data = await CurrencyAPI(); 
        
        if (data && data.error) {
            throw new Error(data.error.message || "API returned an error.");
        }
        
        setRates(data);
        setError(null); 
        
      } 
      catch (error) {
        setError("Failed to load exchange rates. Please check your connection"); 
      } 
      finally {
        setLoading(false); 
      }
    }
    fetchRates();
  }, []); 

  if (loading) {
    return (
      <div className='bg-white-600'>
        <Header/>
        <p>Loading exchange rate....</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-white-600'>
        <Header/>
        <p style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
            Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className='bg-white-600'>
      <Header/>
      <AmountInput/>
      <CurrencySelector rates={rates}/>
      <ConversionResult rates={rates}/>
    </div>
  );
} 
export default App