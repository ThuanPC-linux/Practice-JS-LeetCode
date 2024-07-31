let inputUser = document.getElementById('input-array');

let pInputResult = document.getElementById('input-result');
let pOutputResult = document.getElementById('output-result');
let addInputValue = document.getElementById('add-value');

let valueINPUT = [], calls = [], countSum = [], n = 0;

renderResultInputDefault(valueINPUT);

addInputValue.addEventListener('click',pushValueInput)


function createCounter(valueINPUT){
    for(let i=0; i<=valueINPUT[1] ;i++){
        n = valueINPUT[0]++;
        calls.push("call");
        countSum.push(n);
    }
}

function renderResultInputDefault(valueINPUT = []){
    if (valueINPUT.length == 0 || valueINPUT == undefined){
        const numberResultInput = `Value = [ n, L ]`;
        pInputResult.innerText = numberResultInput;
    } 
}

function renderResultInput(valueINPUT){
    const numberResultInput = `Value = [ ${valueINPUT[0]}, ${valueINPUT[1]} ]`;
    pInputResult.innerText = numberResultInput;
}

function renderResultOutput(valueINPUT){
    createCounter(valueINPUT)
    const numberResultOutput = `[ ${countSum} ] AND [ ${calls} ]`;
    pOutputResult.innerHTML = numberResultOutput;
}


function pushValueInput(){
    const valueFill = inputUser.value.trim();

    if(valueFill){

        if(valueINPUT.length < 3){
            valueINPUT.push(Number(valueFill));

            if( valueINPUT.length == 2){
                renderResultInput(valueINPUT);
                renderResultOutput(valueINPUT);
            }
        }
        inputUser.value = '';
        
    }
    else{
        alert("Please don't leave the input value empty!");
    }
}