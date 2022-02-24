 const quoteBtn = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then( data => displayQuote(data.quote))
 } 
 quoteBtn()

 const displayQuote = (data) =>{
    const quoteInner = document.getElementById('quote_inner')
    quoteInner.innerText = data
 }


 const date = new Date();
 document.getElementById('newDate').innerText = date.toDateString();
 

