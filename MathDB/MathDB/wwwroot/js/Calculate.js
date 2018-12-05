//Calculate 
function Calculate() {
    var FirstInput = parseInt(document.getElementById("First").value);
    var SecondInput = parseInt(document.getElementById("Second").value);
    var TotalAmount;

    if (ValidateNumber(FirstInput, SecondInput) && SecondInput != 0) {
        if (FindOperator() == "Add")
            TotalAmount = AddNum(FirstInput, SecondInput);
        else if (FindOperator() == "Multiply")
            TotalAmount = SubNum(FirstInput, SecondInput);
        else if (FindOperator() == "Subtract")
            TotalAmount = MultNum(FirstInput, SecondInput);
        else {
            TotalAmount = DivNum(FirstInput, SecondInput);
        }
        document.getElementById("total").innerHTML = "Total: " + TotalAmount;
    }
    else
        document.getElementById("total").innerHTML = "Only numbers are accepted. Cannot Divide by zero!";
}

//helper function - determines if the two inputs are numbers
function ValidateNumber(input1, input2) {
    if (Number.isNaN(input1) && Number.isNaN(input2))
        return false;

    return true;
}

function FindOperator() {
    return document.getElementById("Operator").value;
}

function AddNum(input1, input2) {
    return TotalAmount = input1 + input2;
}

function SubNum(input1, input2) {
    return TotalAmount = input1 * input2;
}

function MultNum(input1, input2) {
    return TotalAmount = input1 - input2;
}

function DivNum(input1, input2) {
    return TotalAmount = input1 / input2;
}