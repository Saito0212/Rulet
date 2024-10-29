let input_list = new Array();

window.onload = () => {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    input_list.push(input1, input2);

    let addInput = document.getElementById("addInput");
    addInput.onclick = addInputEvent;

    let rulet = document.getElementById("rulet");
    rulet.onclick = ruletProcess;
}

function addInputEvent(){
    let inputs = document.getElementById("inputs");
    let input = document.createElement("input");
    input.type = "text";
    input.className = "input";
    inputs.appendChild(input);
    input_list.push(input);
}

function ruletProcess(){
    try{
        let result = document.getElementById("result");
        let randNum = Math.floor(Math.random() * input_list.length);
        console.log(randNum);
        let result_value = input_list[randNum].value;
        while(true){
            if(result_value.length <= 0){
                randNum = Math.floor(Math.random() * input_list.length);
                result_value = input_list[randNum].value;
                console.log(randNum);
            }else break;
        }
        result.textContent = "The result is \"" + result_value + "\"";
    }
    catch(e){
        console.log(e);
    }
}