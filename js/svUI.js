var appurl = 'http://edu.sv-solutions.com.ua/skok/svUI/';

(function($) {

    var checkboxOptions = {
        id: 'checkbox',
        class: 'checkbox',
        sprite: appurl + 'img/svCBX.png',
        scroll_checked: 10,
        scroll_unchecked: 96,
        padding: '0 0 0 40px',
        height: 32
    }

    var radioOptions = {
        id: 'radio',
        class: 'radio',
        sprite: appurl + 'img/svRadio.png',
        scroll_checked: 13,
        scroll_unchecked: 93,
        padding: '0 0 0 40px',
        height: 32
    }

    var methods = {
        checkbox: function(params) {

            var options = $.extend({}, checkboxOptions, params);

            var optsHtml = '';
            var max = options.opts.length;
            var i;
            for (i = 0; i < max; i++) {
                optsHtml += '<div style="background:url(' + options.sprite
                        + ') no-repeat scroll 0 -' + options.scroll_unchecked + 'px transparent; padding: ' + options.padding + '; display: table; cursor: pointer;" status="unchecked" class="'
                        + options.class + '"><span style="display: table-cell; height: ' + options.height + 'px; vertical-align: middle;">' + options.opts[i].text + '</span></div>';
            }

            $('#' + options.id).html(optsHtml);

            $('.' + options.class).click(function() {
                var check = $(this).attr('status');
                if (check == 'unchecked') {
                    $(this).attr('status', 'checked');
                    $(this).attr('style', "background: url(" + options.sprite
                            + ") no-repeat scroll 0 -" + options.scroll_checked + "px transparent; padding: " + options.padding + "; display: table; cursor: pointer;");
                } else if (check == 'checked') {
                    $(this).attr('status', 'unchecked');
                    $(this).attr('style', "background: url(" + options.sprite
                            + ") no-repeat scroll 0 -" + options.scroll_unchecked + "px transparent; padding: " + options.padding + "; display: table; cursor: pointer;");
                }
            });

        },
        radio: function(params) {

            var options = $.extend({}, radioOptions, params);

            var optsHtml = '';
            var max = options.opts.length;
            var i;
  
            for (i = 0; i < max; i++) {
                    optsHtml += '<div style="background:url(' + options.sprite
                            + ') no-repeat scroll 0 -' + options.scroll_unchecked + 'px transparent; padding: ' + options.padding + '; display: table; cursor: pointer;" status="unchecked" class="'
                            + options.class + '" val="' + options.opts[i].value + '"><span style="display: table-cell; height: ' + options.height + 'px; vertical-align: middle;">' + options.opts[i].text
                            + '</span></div>';
                }
   


            $('#' + options.id).html(optsHtml);

            $('.' + options.class).click(function() {
                $('.' + options.class).each(function() {
                    $(this).attr('status', 'unchecked');
                    $(this).attr('style', "background: url(" + options.sprite
                            + ") no-repeat scroll 0 -" + options.scroll_unchecked + "px transparent; padding: " + options.padding + "; display: table; cursor: pointer;");
                });

                $(this).attr('status', 'checked');
                $(this).attr('style', "background: url(" + options.sprite
                        + ") no-repeat 0 -" + options.scroll_checked + "px transparent; padding: " + options.padding + "; display: table; cursor: pointer;");
            
            });

        }
    };



    $.fn.svUI = function(method) {

        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.svUI');
        }
    };

})(jQuery);