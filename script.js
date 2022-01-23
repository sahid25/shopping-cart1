

const removeItem1 = document.getElementById('removeItem1').addEventListener('click', function () {
    const cartItem1 = document.getElementById('cartItem1').style.display = 'none';
    let subTotal = document.getElementById('subTotal').innerText = '00';

})

const removeItem2 = document.getElementById('removeItem2').addEventListener('click', function () {
    const cartItem2 = document.getElementById('cartItem2').style.display = 'none';
    let subTotal = document.getElementById('subTotal').innerText = '00';
});

// const phnPlus = document.getElementById('phnPlus').addEventListener('click', function () {
//     handleProductChange('phone', 'phnCost', true );
// });
// const phnMinus = document.getElementById('phnMinus').addEventListener('click', function () {
//     handleProductChange('phone', 'phnCost', false );
// });

// const casePlus = document.getElementById('casePlus').addEventListener('click', function () {
//     handleProductChange('case', 'caseCost', true );
// });
// const caseMinus = document.getElementById('caseMinus').addEventListener('click', function () {
//     handleProductChange('case', 'caseCost', false );
// });

function handleProductChange(id, outputId, isIncrese, subtotalId) {
    let product = document.getElementById(id + 'Input');
    let productCount = parseInt(product.value);
    let productNewCount = productCount;
    if (isIncrese == true) {
        productNewCount = productCount + 1;
        
    }
    if (isIncrese == false && productCount > 0) {
        productNewCount = productCount - 1;

    }
    product.value = productNewCount;
    // const countNumber = productNewCount * numberIs;
    let productTotal = 0;
    if (id == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (id == 'case') {
        productTotal = productNewCount * 59;
    }
        const totalValue = document.getElementById(outputId).innerText = productTotal;
        calculateTotal();
}

function calculateTotal() {
    const phoneCount = getProductValue('phoneInput');
    const caseCount = getProductValue('caseInput');

    const calculateTotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subTotal').innerText = calculateTotal;
    const calculateTex = Math.round(calculateTotal * 0.1);
    document.getElementById('texAmount').innerText = calculateTex;
    const calculateBudget =  calculateTotal + calculateTex ;
    document.getElementById('budgetTotal').innerText = calculateBudget;
    console.log(calculateBudget);
}
function getProductValue(id) {
    const productInput = document.getElementById(id);
    const productCount = parseInt(productInput.value);
    return productCount;
}