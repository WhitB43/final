var order = {
    sS: '6 Inch',
    bread: 'Rye',
    cheese: 'Swiss',
    vegetables: 'Lettuce, Onion, Black Olive, Green Olive'
};

var newOrder = {
    sS: '',
    bread: '',
    cheese: '',
    vegetables: ''
};

function send() {
    
    if($('#fL').is(':checked')) {
        newOrder.sS = 'Footlong';
    }
    if($('#6i').is(':checked')) {
        newOrder.sS = '6 Inch';
    }

    newOrder.bread = $('#bread').find(":selected").val();

    newOrder.cheese = $('#cheese').find(":selected").val();

    if($('#checkL').is(':checked')){
        newOrder.vegetables = newOrder.vegetables + $('checkL').val() + ", ";
    }
    if($('#checkT').is(':checked')){
        newOrder.vegetables = newOrder.vegetables + $('checkT').val() + ", ";
    }
    if($('#checkP').is(':checked')){
        newOrder.vegetables = newOrder.vegetables + $('checkP').val() + ", ";
    }
    if($('#checkO').is(':checked')){
        newOrder.vegetables = newOrder.vegetables + $('checkO').val() + ", ";
    }
    if($('#checkM').is(':checked')){
        newOrder.vegetables = newOrder.vegetables + $('checkM').val() + ", ";
    }
    if($('#checkBP').is(':checked')){
        newOrder.vegetables = newOrder.vegetables + $('checkBP').val() + ", ";
    }
    if($('#checkJ').is(':checked')){
        newOrder.vegetables = newOrder.vegetables + $('checkL').val() + ", ";
    }
    if($('#checkBO').is(':checked')){
        newOrder.vegetables = newOrder.vegetables + $('checkBO').val() + ", ";
    }
    if($('#checkGO').is(':checked')){
        newOrder.vegetables = newOrder.vegetables + $('checkGO').val() + ", ";
    }
};

document.getElementById('order').addEventListener('submit', (e) => {
  e.preventDefault();
  send();
  console.log(JSON.stringify(newOrder));
  document.getElementById('sent').innerText = JSON.stringify(newOrder, null, 2);
  order = newOrder;
});

document.getElementById('load').addEventListener('click', () => {
  console.log(JSON.stringify(order));
  document.getElementById('sent').innerText = JSON.stringify(order, null, 2);
});
