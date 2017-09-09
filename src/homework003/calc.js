/*
 * Implement all your JavaScript in this file!
 */
$(function () {
    sessionStorage.clear();
    $('#display').val('');
});

$('#clearButton').click(function () {
    sessionStorage.clear();
    $('#display').val('');
    $('#output').html('<p>clear</p>');
});

$('.digit,.operator,.equals').click(function () {
    $('#display').val( 
            handler( $(this).attr('class'), $(this).val() ) 
        );
});

var handler = function(key, value) {
    var calc = sessionStorage.getItem('calc');
    calc = (calc) ? 
            JSON.parse(calc) : 
            { acc: null, op: null, val: null, lst: null };

    switch (key) {
    case 'digit' : 
            if (calc.acc && calc.op && !calc.val) {
                calc.val = value;
            } else if (calc.lst == '=') {
                calc.acc = null;
                calc.op = null;
                calc.val = value;
            } else {
                calc.val = calc.val ? calc.val + value : value;
            }
            display = calc.val;
            break;

    case 'operator' :
            if (calc.val && !calc.op && !calc.acc) {
                calc.acc = calc.val;
            } else if (!calc.val || calc.lst == '=') {
                // do nothing
            } else {
                calc.acc = eval(calc.acc + calc.op + calc.val);
            }    
            calc.val = '';
            calc.op = value;
            display = calc.acc;
            break;

    case 'equals' :
            if (calc.acc && calc.op && calc.val) {
                calc.acc = eval(calc.acc + calc.op + calc.val);
                display = calc.acc;
            } else if (!calc.val) {
                // do nothing
            } else {
                display = calc.val;
            }
            break;
    }
    calc.lst = value;
    sessionStorage.setItem('calc', JSON.stringify(calc));

    $('#output').html(
            '<p><ul>' +
            '<li>accumulator: ' + calc.acc + '</li>' +
            '<li>operator: ' + calc.op + '</li>' +
            '<li>value: ' + calc.val + '</li>' +
            '<li>last: ' + calc.lst + '</li>' +
            '</ul></p>'
        );

    return display;
};

