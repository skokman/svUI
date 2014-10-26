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
    
    var opts_gal = [
        {
            image: 'pics/gallery_o_544bdb76a7ea3.png',
            thumb: 'pics/gallery_t_544bdb76d7fb9.png',
            title: 'Title #1'
        },
        {
            image: 'pics/gallery_o_544bdb80955a3.png',
            thumb: 'pics/gallery_t_544bdb80c6e49.png',
            title: 'Title #1'
        },
        {
            image: 'pics/gallery_o_544bdb85a1f9a.png',
            thumb: 'pics/gallery_t_544bdb85d3969.png',
            title: 'Title #1'
        },
        {
            image: 'pics/gallery_o_544bdba3c6185.png',
            thumb: 'pics/gallery_t_544bdba446799.png',
            title: 'Title #1'
        },
        {
            image: 'pics/gallery_o_544bdba3c6185.png',
            thumb: 'pics/gallery_t_544bdba446799.png',
            title: 'Title #1'
        },
        {
            image: 'pics/gallery_o_544bdba3c6185.png',
            thumb: 'pics/gallery_t_544bdba446799.png',
            title: 'Title #1'
        },
        {
            image: 'pics/gallery_o_544bdba3c6185.png',
            thumb: 'pics/gallery_t_544bdba446799.png',
            title: 'Title #1'
        },
        {
            image: 'pics/gallery_o_544bdba3c6185.png',
            thumb: 'pics/gallery_t_544bdba446799.png',
            title: 'Title #1'
        },
        {
            image: 'pics/gallery_o_544bdba3c6185.png',
            thumb: 'pics/gallery_t_544bdba446799.png',
            title: 'Title #1'
        }
    ];
    
    $().svUI('gallery', {
        baseurl: 'http://edu.sv-solutions.com.ua/skok/svUI/',
        id: 'gallery',
        class: 'mygallery',
        opts: opts_gal
    });


});

