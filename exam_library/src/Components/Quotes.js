import React, {useEffect , useState}from 'react'

export default function Quotes() {

const [quote_data, setQuoteData] = useState({ });

  function Api(){
    let quote = fetch('http://localhost:9292/quote');
   quote.then(response=>response.json()).then(data => {
    setQuoteData(data)
   console.log(data); 
  })
 .catch(err => console.error(err));
 }

 useEffect(() => { 
  Api();
 },[]);

 
  return (
    <div className='quote-section'>
       <p>Get yourself motivated </p>
       <hr></hr>
       <hr></hr>

      <p>{quote_data.body}</p>
      <p>{quote_data.author}</p>
    </div>
  )
}