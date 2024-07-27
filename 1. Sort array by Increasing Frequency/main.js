let inputUser = document.getElementById('input-array');

let pInputResult = document.getElementById('input-result');
let pOutputResult = document.getElementById('output-result');
let addInputValue = document.getElementById('add-value');

let nums = [];

addInputValue.addEventListener('click',pushNums)


function frequencySort(nums){
    const numsFrequencyMap = new Map();
    for(let n of nums){
        numsFrequencyMap.set(n, (numsFrequencyMap.get(n)||0)+1)
    }
    return nums.sort((a,b)=>{
        if(numsFrequencyMap.get(a) == numsFrequencyMap.get(b)){
            return b-a
        }
        return numsFrequencyMap.get(a) - numsFrequencyMap.get(b);
    });
}

function renderResultInput(nums){
    const numberResultInput = `[${nums}]`;
    pInputResult.innerText = numberResultInput;
}

function renderResultOutput(nums){
    const numberResultOutput = `[${nums}]`;
    pOutputResult.innerText = numberResultOutput;
}


function pushNums(){
    const valueFill = inputUser.value.trim();

    if(valueFill){
        nums.push(Number(valueFill));
        renderResultInput(nums);
        inputUser.value = '';
        
        if(nums.length >= 6){
            frequencySort(nums);
            renderResultOutput(nums);
            inputUser.value = '';
        }
    }
    else{
        alert("Please don't leave the input value empty!");
    }
}