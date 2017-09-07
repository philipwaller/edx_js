/*
 * Implement all your JavaScript in this file!
 */

$('#clearButton').click(function () {
    $('#display').val('');
    sessionStorage.clear();
});

$('.digit').click(function () {
    var display = $('#display');
    var value = sessionStorage.getItem('is_new') ? '' : display.val();
    sessionStorage.setItem('is_new', '');
    display.val( value + $(this).val() );
});

$('.operator').click(function () {
    var stack = sessionStorage.getItem('stack');
    stack = (stack) ? JSON.parse(stack) : [];
    stack.unshift( parseInt($('#display').val()) );
    stack.unshift( $(this).text() );
    sessionStorage.setItem('stack', JSON.stringify(stack));
    sessionStorage.setItem('is_new', true);

    $('#output').text( 'stack: ' + stack );
});

$('#equalsButton').click(function () {
    var stack = sessionStorage.getItem('stack');
    stack = (stack) ? JSON.parse(stack) : [];
    stack.unshift( parseInt($('#display').val()) );

    var val1 = stack.shift();
    var op = stack.shift();
    var val2 = stack.shift();

    var result = val2 + val1;
    stack.unshift( result );
    sessionStorage.setItem('stack', JSON.stringify(stack));
    sessionStorage.setItem('is_new', true);

    $('#display').val( val1 + val2 );
    $('#output').text( 'stack: ' + stack );
});

