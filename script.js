// plus function
function plusValue(id) {
    let thisId = parseInt(document.getElementById(id).value, 10);
    thisId++;
    document.getElementById(id).value = thisId++;
}

// Minus function

function minusValue(id) {
    let minusId = parseInt(document.getElementById('input1').value);
    minusId--;
    document.getElementById('input1').value = minusId--;
}
// Display none
function displayNone(id) {
    const idName = document.getElementById(id).style.display = 'none';

}


//  remove Elements
const removeItem = document.getElementById('removeItem1').addEventListener('click', function () {
    displayNone('cartItem1');
});

const removeItem2 = document.getElementById('removeItem2').addEventListener('click', function () {
    displayNone('cartItem2');
});
// Pluse Value
const btnPlus = document.getElementById('btnPlus').addEventListener('click', function () {
    plusValue('input1');

})
// Minus Value
const btnMinus = document.getElementById('btnMinus').addEventListener('click', function () {
    minusValue('input1')
});


