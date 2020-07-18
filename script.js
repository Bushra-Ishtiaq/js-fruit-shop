
function addApple(){
    let myPocket = parseInt(document.querySelector("#amount").value);
    let appleNumber = parseInt(document.querySelector("#appleitem").value);
    let totalBill = parseInt(document.querySelector("#bill").value);
    if (myPocket < totalBill + 10) {
        alert("You don't have sufficient money");
    }else{
        document.querySelector("#appleitem").value = ++appleNumber;
    }
    makeBill();
}
function minusApple() {
    let appleNumber = parseInt(document.querySelector('#appleitem').value);
    if (appleNumber == 0) {
        alert("You don't have any Apples");
    } else {
        document.querySelector('#appleitem').value = --appleNumber;
    }
    makeBill();
}
function addBanana() {
    let bananaNumber = parseInt(document.querySelector('#bananaitem').value);
    let myPocket = parseInt(document.querySelector('#amount').value);
    let totalBill = parseInt(document.querySelector("#bill").value);
    if (myPocket < totalBill + 15) {
        alert("You don't have any sufficient money");
    } else {
        document.querySelector('#bananaitem').value = ++bananaNumber;
    }
    makeBill();

}

function minusBanana() {
    let bananaNumber = parseInt(document.querySelector('#bananaitem').value);
    if (bananaNumber == 0) {
        alert("You don't have any Apples");
    } else {
        document.querySelector('#bananaitem').value = --bananaNumber;
    }
    makeBill();
}

function addOrange() {
    let orangeNumber = parseInt(document.querySelector('#orangeitem').value);
    let myPocket = parseInt(document.querySelector('#amount').value);
    let totalBill = parseInt(document.querySelector("#bill").value);
    if (myPocket < totalBill + 7) {
        alert("You don't have any sufficient money");
    } else {
        document.querySelector('#orangeitem').value = ++orangeNumber;
    }
    makeBill();
}

function minusOrange() {
    let orangeNumber = parseInt(document.querySelector('#orangeitem').value);
    if (orangeNumber == 0) {
        alert("You don't have any Apples");
    } else {
        document.querySelector('#orangeitem').value = --orangeNumber;
    }
    makeBill();
}

function makeBill() {
    let appleNumber = parseInt(document.querySelector('#appleitem').value) * 10;
    let orangeNumber = parseInt(document.querySelector('#orangeitem').value) * 7;
    let bananaNumber = parseInt(document.querySelector('#bananaitem').value) * 15;

    totalBill = appleNumber + orangeNumber + bananaNumber;
    document.querySelector("#bill").value = totalBill;
}



