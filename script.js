

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
        // const totaL = document.getElementById(subtotalId).innerText = productTotal ;
}