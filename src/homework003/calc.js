/*
 * Implement all your JavaScript in this file!
 */

$('#clearButton').click(function () {
    $('#display').val('');
    reset();
});

$('.digit').click(function () {
    var display = $('#display');
    var value = sessionStorage.getItem('is_new') ? '' : display.val();
    sessionStorage.setItem('is_new', '');
    display.val( value + $(this).val() );
});

$('.operator').click(function () {
    var result = calc();
    reset( result + $(this).val() );
});

$('#equalsButton').click(function () {
    calc();
    reset();
});

var calc = function() {
    var eqn = sessionStorage.getItem('equation');
    var display = $('#display');
    var result = eval( eqn + display.val() );
    display.val( result );
    return result;
};

var reset = function (eqn) {
    sessionStorage.clear();
    sessionStorage.setItem('is_new', true);
    sessionStorage.setItem('equation', eqn ? eqn : '');
};


