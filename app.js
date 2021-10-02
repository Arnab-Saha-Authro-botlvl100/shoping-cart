document.getElementById('case-plus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value);
    // console.log(caseNumber);
    caseInput.value = caseNumber + 1;
    const valuetext = document.getElementById('iphone11-price').innerText;
    const price = parseFloat(valuetext);
    const totalprice = price + 1219;
    document.getElementById('iphone11-price').innerText = totalprice;
    const caseprice = parseFloat(document.getElementById('iphone11-silicone').innerText);
    const tk = caseprice + totalprice;
    console.log(caseprice);
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = tk; 
})

document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value);
    // console.log(caseNumber);
    const valuetext = document.getElementById('iphone11-price').innerText;
    const price = parseFloat(valuetext);
    if(caseInput.value == 0){
        caseInput.value = 0;
        
        let totalprice = 0;
        document.getElementById('iphone11-price').innerText = totalprice;
    }
    else if(caseInput.value >0 ){
        caseInput.value = caseNumber - 1;
        
        let totalprice = price - 1219;
        document.getElementById('iphone11-price').innerText = totalprice;
    }
    else if(caseInput.value <0 ){
        caseInput.value = 0;
        
        let totalprice = 0;
        document.getElementById('iphone11-price').innerText = totalprice;
    }
    const caseprice = parseFloat(document.getElementById('iphone11-silicone').innerText);
    const tk = caseprice + parseFloat(document.getElementById('iphone11-price').innerText);
    console.log(caseprice);
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = tk; 
    
})

document.getElementById('case-plus2').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number2');
    const caseNumber = parseInt(caseInput.value);
    // console.log(caseNumber);
    caseInput.value = caseNumber + 1;
    const valuetext = document.getElementById('iphone11-silicone').innerText;
    const price = parseFloat(valuetext);
    const totalprice = price + 59;
    document.getElementById('iphone11-silicone').innerText = totalprice;
    const tk = totalprice + parseFloat(document.getElementById('iphone11-price').innerText);
    // console.log(caseprice);
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = tk;
})

document.getElementById('case-minus2').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number2');
    const caseNumber = parseInt(caseInput.value);
    // console.log(caseNumber);
    const valuetext = document.getElementById('iphone11-silicone').innerText;
    const price = parseFloat(valuetext);
    if(caseInput.value == 0){
        caseInput.value = 0;
        
        let totalprice = 0;
        document.getElementById('iphone11-silicone').innerText = totalprice;
    }
    else if(caseInput.value >0 ){
        caseInput.value = caseNumber - 1;
        
        let totalprice = price - 59;
        document.getElementById('iphone11-silicone').innerText = totalprice;
    }
    else if(caseInput.value <0 ){
        caseInput.value = 0;
        
        let totalprice = 0;
        document.getElementById('iphone11-silicone').innerText = totalprice;
    }
    const tk = parseFloat(document.getElementById('iphone11-silicone').innerText) + parseFloat(document.getElementById('iphone11-price').innerText);
    // console.log(caseprice);
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = tk;
})