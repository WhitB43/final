

let order = {
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
    
    if($('#fl').is(':checked')) {
        newOrder.sS = 'Footlong';
    }
    if($('#6i').is(':checked')) {
        newOrder.sS = '6 Inch';
    }

    newOrder.bread = $('#bread').find(":selected").val();

    newOrder.cheese = $('#cheese').find(":selected").val();

    newOrder.vegetables = "";

    if($('#checkL').is(':checked')){
        newOrder.vegetables += $('#checkL').val() + ", ";
    }
    if($('#checkT').is(':checked')){
        newOrder.vegetables += $('#checkT').val() + ", ";
    }
    if($('#checkP').is(':checked')){
        newOrder.vegetables += $('#checkP').val() + ", ";
    }
    if($('#checkO').is(':checked')){
        newOrder.vegetables += $('#checkO').val() + ", ";
    }
    if($('#checkM').is(':checked')){
        newOrder.vegetables += $('#checkM').val() + ", ";
    }
    if($('#checkBP').is(':checked')){
        newOrder.vegetables += $('#checkBP').val() + ", ";
    }
    if($('#checkJ').is(':checked')){
        newOrder.vegetables += $('#checkL').val() + ", ";
    }
    if($('#checkBO').is(':checked')){
        newOrder.vegetables += $('#checkBO').val() + ", ";
    }
    if($('#checkGO').is(':checked')){
        newOrder.vegetables += $('#checkGO').val() + ", ";
    }
    console.log(JSON.stringify(newOrder, null, 2));
    console.log($('#checkGO').is(':checked'));
};

document.getElementById('order').addEventListener('submit', (e) => {
  e.preventDefault();
});

document.getElementById('load').addEventListener('click', () => {
  //updates new order
  newOrder.sS = order.sS;
  newOrder.bread = order.bread;
  newOrder.cheese = order.cheese;
  newOrder.vegetables = order.vegetables;

  console.log(JSON.stringify(order));
  document.getElementById('sent').innerText = JSON.stringify(order, null, 2);
});

document.getElementById('btnSubmit').addEventListener('click', () => {
    //updates last order 
    if(!(newOrder.sS === '' && newOrder.bread === '' && newOrder.cheese === '' && newOrder.vegetables === '')){
        order.sS = newOrder.sS;
        order.bread = newOrder.bread;
        order.cheese = newOrder.cheese;
        order.vegetables = newOrder.vegetables;
    }
    send();
    console.log(JSON.stringify(newOrder));
    document.getElementById('sent').innerText = JSON.stringify(newOrder, null, 2);
});
