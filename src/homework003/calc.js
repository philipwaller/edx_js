/*
 * Implement all your JavaScript in this file!
 */


$('#clearButton').click(function () {
    $('#display').val('');
    // clean out sessionStorage
});

$('.digit').click(function () {
    var display = $('#display');
    var value = sessionStorage.isNewValue ? '' : display.val();
    sessionStorage.isNewValue = '';
    display.val( value + $(this).val() );
});

$('.operator').click(function () {
    var calculation = [];
    if (sessionStorage.calculation) {
        calculation = JSON.parse(sessionStorage.calculation);
    }
    calculation.push($('#display'));
    sessionStorage.calculation = JSON.stringify(calculation);
    sessionStorage.isNewValue = 'yes';
});

$('#equalsButton').click(function () {
    var calculation = JSON.parse(sessionStorage.calculation);
    var val1 = calculation.unshift();
    var op = calculation.unshift();
    var val2 = calculation.unshift();
    $('#display').val( parseInt(val1) + parseInt(val2) );
});

