let inputUser = document.getElementById('input-array');

let pInputResult = document.getElementById('input-result');
let pOutputResult = document.getElementById('output-result');
let addInputValue = document.getElementById('add-value');

let nums = [];


addInputValue.addEventListener('click',pushNums)

function numsLastFind(nums){
    if (nums.constructor == Array){
        for(let i=0; i <= nums.length ;i++){
            if (nums[i] == undefined)
                return nums[i - 1];
        } 
    } 
}

function renderResultInput(nums){
    const numberResultInput = `[${nums}]`;
    pInputResult.innerText = numberResultInput;
}

function renderResultOutput(nums){
    const numsLastResult = numsLastFind(nums);
    const numberResultOutput = `[${numsLastResult}]`;
    pOutputResult.innerText = numberResultOutput;
}

function changeData(valueChange){
    
    if (valueChange == "null" || valueChange == "NULL"){
        return valueChange = null;
    }

    if (valueChange == "[]"){
        return valueChange = [];
    }

    if (valueChange == '{}'){
        return valueChange = {};
    }

    if ( valueChange >= 0 || valueChange <= 100){
        return Number(valueChange);
    }

    if (valueChange.constructor == String ){
        return String(valueChange);
    }
}


function pushNums(){
    const valueFill = inputUser.value;
    let valueReal;

    if(valueFill){
        valueReal = changeData(valueFill);
        nums.push(valueReal);
        console.log(nums);

        renderResultInput(nums)
        renderResultOutput(nums)
        inputUser.value = '';
    }
    else{
        alert("Please don't leave the input value empty!");
    }
}