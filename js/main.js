// var calcDisplay = $('.calc-display').val();

function insrt(num) {
    // calcDisplay.val(calcDisplay + num);

    $('.calc-display').val($('.calc-display').val() + num);
}


function eql() {
    $('.calc-display').val(eval($('.calc-display').val()));
}


function c() {
    $('.calc-display').val('');
}

function del() {
    var value = $('.calc-display').val();
    $('.calc-display').val(value.substring('0', value.length - 1));
}