/*
 * Implement all your JavaScript in this file!
 */


$('#clearButton').click(function () {
    $('#display').val('');
    sessionStorage.clear();

    $('#output').text( JSON.parse(sessionStorage) );
});

$('.digit').click(function () {
    var display = $('#display');
    var value = sessionStorage.getItem('isNewValue') ? '' : display.val();
    sessionStorage.setItem('isNewValue', false);
    display.val( value + $(this).val() );

    $('#output').text( JSON.parse(sessionStorage) );
});

$('.operator').click(function () {
    var calculation = sessionStorage.getItem(calculation);
    var calc_stack = calculation ? JSON.parse(calculation) : [];
    calc_stack.push($('#display').val());
    sessionStorage.setItem('calculation', JSON.stringify(calc_stack));
    sessionStorage.setItem('isNewValue', true);

    $('#output').text( JSON.parse(sessionStorage) );
});

$('#equalsButton').click(function () {
    var calc_stack = JSON.parse(sessionStorage.getItem('calculation'));
    $('#output').text(calc_stack);
    var val1 = calc_stack.unshift();
    var op = calc_stack.unshift();
    var val2 = calc_stack.unshift();
    $('#display').val( parseInt(val1) + parseInt(val2) );

    $('#output').text( JSON.parse(sessionStorage) );
});

