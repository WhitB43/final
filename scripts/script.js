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

function send(sS, bread, cheese, vegetables) {
    
    if($('#fL').is(':checked')) {
        this.sS = 'Footlong';
    }
    if($('#6i').is(':checked')) {
        this.sS = '6 Inch';
    }

    this.bread = $('#bread').find(":selected").val();

    this.cheese = $('#cheese').find(":selected").val();

    if($('#checkL').is(':checked')){
        this.vegetables = this.vegetables + $('checkL').val() + ", ";
    }
    if($('#checkT').is(':checked')){
        this.vegetables = this.vegetables + $('checkT').val() + ", ";
    }
    if($('#checkP').is(':checked')){
        this.vegetables = this.vegetables + $('checkP').val() + ", ";
    }
    if($('#checkO').is(':checked')){
        this.vegetables = this.vegetables + $('checkO').val() + ", ";
    }
    if($('#checkM').is(':checked')){
        this.vegetables = this.vegetables + $('checkM').val() + ", ";
    }
    if($('#checkBP').is(':checked')){
        this.vegetables = this.vegetables + $('checkBP').val() + ", ";
    }
    if($('#checkJ').is(':checked')){
        this.vegetables = this.vegetables + $('checkL').val() + ", ";
    }
    if($('#checkBO').is(':checked')){
        this.vegetables = this.vegetables + $('checkBO').val() + ", ";
    }
    if($('#checkGO').is(':checked')){
        this.vegetables = this.vegetables + $('checkGO').val() + ", ";
    }
};

document.getElementById('submit').addEventListener('click', () => {
  order.send(order.sS, order.bread, order.cheese, order.vegetables);
  console.log(JSON.stringify(order));
  document.getElementById('sent').innerText = JSON.stringify(order, null, 2);
});

document.getElementById('load').addEventListener('click', () => {
  console.log(JSON.stringify(order));
  document.getElementById('sent').innerText = JSON.stringify(order, null, 2);
});
