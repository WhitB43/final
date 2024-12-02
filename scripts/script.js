var sS = '';
var bread = '';
var cheese = '';
var vegetables = '';

function send() {
    if($('#fL').is(':checked')) {
        sS = 'Footlong';
    }
    if($('#6i').is(':checked')) {
        sS = '6 Inch';
    }

    bread = $('#bread').find(":selected").val();

    cheese = $('#cheese').find(":selected").val();

    if($('#checkL').is(':checked')){
        vegetables = vegetables + $('checkL').val() + " ";
    }
    if($('#checkT').is(':checked')){
        vegetables = vegetables + $('checkT').val() + " ";
    }
    if($('#checkP').is(':checked')){
        vegetables = vegetables + $('checkP').val() + " ";
    }
    if($('#checkO').is(':checked')){
        vegetables = vegetables + $('checkO').val() + " ";
    }
    if($('#checkM').is(':checked')){
        vegetables = vegetables + $('checkM').val() + " ";
    }
    if($('#checkBP').is(':checked')){
        vegetables = vegetables + $('checkBP').val() + " ";
    }
    if($('#checkJ').is(':checked')){
        vegetables = vegetables + $('checkL').val() + " ";
    }
    if($('#checkBO').is(':checked')){
        vegetables = vegetables + $('checkBO').val() + " ";
    }
    if($('#checkGO').is(':checked')){
        vegetables = vegetables + $('checkGO').val() + " ";
    }

    final = 'Size: ' + sS + '\nBread: ' + bread + '\nCheese: ' + cheese + '\nVegetables: ' + vegetables

    document.getElementById('sent').innerHTML = final

}

if ($('#btnSubmit').is(':clicked')) {
    send();
}