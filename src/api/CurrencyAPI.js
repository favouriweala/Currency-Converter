
const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const BASE_URL = import.meta.env.VITE_EXCHANGE_RATE_BASE_URL;
const BASE_CURRENCY = 'USD'; 
async function CurrencyAPI() {
    const url = `${BASE_URL}/${API_KEY}/latest/${BASE_CURRENCY}`; 
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } 
    catch (error) {
        throw error; 
    }
}

export default CurrencyAPI;