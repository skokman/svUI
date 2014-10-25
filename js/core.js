$(document).ready(function() {
    var i;

    // opts is array of objects (text + value)
    var opts = [];
    for (i = 0; i < 5; i++) {
        opts[i] = {
            text: 'Option №' + i,
            value: i
        }
    }
 
    $().svUI('checkbox', {
        id: 'cbx',
        class: 'mycbx',
        opts: opts
    });
    
    $().svUI('radio', {
        id: 'radio',
        class: 'myradio',
        opts: opts
    });


});

