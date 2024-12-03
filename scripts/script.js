let order = {
    sS: '6 Inch',
    bread: 'Rye',
    cheese: 'Swiss',
    vegetables: 'Lettuce, Onion, Black Olive, Green Olive'
};

function send() {
    if($('#fL').is(':checked')) {
        order.sS = 'Footlong';
    }
    if($('#6i').is(':checked')) {
        order.sS = '6 Inch';
    }

    order.bread = $('#bread').find(":selected").val();

    order.cheese = $('#cheese').find(":selected").val();

    if($('#checkL').is(':checked')){
        order.vegetables = order.vegetables + $('checkL').val() + ", ";
    }
    if($('#checkT').is(':checked')){
        order.vegetables = order.vegetables + $('checkT').val() + ", ";
    }
    if($('#checkP').is(':checked')){
        order.vegetables = order.vegetables + $('checkP').val() + ", ";
    }
    if($('#checkO').is(':checked')){
        order.vegetables = order.vegetables + $('checkO').val() + ", ";
    }
    if($('#checkM').is(':checked')){
        order.vegetables = order.vegetables + $('checkM').val() + ", ";
    }
    if($('#checkBP').is(':checked')){
        order.vegetables = order.vegetables + $('checkBP').val() + ", ";
    }
    if($('#checkJ').is(':checked')){
        order.vegetables = order.vegetables + $('checkL').val() + ", ";
    }
    if($('#checkBO').is(':checked')){
        order.vegetables = order.vegetables + $('checkBO').val() + ", ";
    }
    if($('#checkGO').is(':checked')){
        order.vegetables = order.vegetables + $('checkGO').val() + ", ";
    }
}

document.getElementById('order').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(JSON.stringify(order));
  document.getElementById('sent').innerText = JSON.stringify(order, null, 2);
});

if (('#btnSubmit').is(':clicked')) {
    send();
}
