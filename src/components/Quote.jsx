import React, { useEffect, useState } from 'react'

function Quote() {
  const[quote, setQuote] = useState("")

  useEffect(()=>{
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/quotes/random");
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        setQuote(data[0].content)
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, [])

  return (
    <div className='quote'>
      <p>{quote}</p>
    </div>
  )
}

export default Quote
