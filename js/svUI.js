var appurl = 'http://edu.sv-solutions.com.ua/skok/svUI/';
(function($) {

    var checkboxOptions = {
        id: 'checkbox',
        class: 'checkbox',
        sprite: appurl + 'img/svCBX.png',
        scroll_checked: 10,
        scroll_unchecked: 96,
        padding: '0 0 0 40px',
        height: 32,
        opts: []
    }

    var radioOptions = {
        id: 'radio',
        class: 'radio',
        sprite: appurl + 'img/svRadio.png',
        scroll_checked: 13,
        scroll_unchecked: 93,
        padding: '0 0 0 40px',
        height: 32,
        opts: []
    }

    var galleryOptions = {
        id: 'gallery',
        class: 'gallery',
        opts: []
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
        },
        gallery: function(params) {

            var options = $.extend({}, galleryOptions, params);
            var optsHtml = '';
            var max = options.opts.length;
            var i;
            optsHtml += '<div class="image-bar"><div id="inimage-bar-' + options.id + '" class="inimage-bar">';
            for (i = 0; i < max; i++) {
                if (i == 0) {
                    optsHtml += '<div image="' + options.baseurl + options.opts[i].image + '" item_id="' + i + '" id="' + options.id + '_' + i + '" class="image-item active image-item-' + options.id + '"><img height="150" src="' + options.baseurl + options.opts[i].thumb + '"></div>';
                } else {
                    optsHtml += '<div image="' + options.baseurl + options.opts[i].image + '" item_id="' + i + '" id="' + options.id + '_' + i + '" class="image-item image-item-' + options.id + '"><img height="150" src="' + options.baseurl + options.opts[i].thumb + '"></div>';
                }
            }



            optsHtml += '</div></div>';
            optsHtml += '<div id="loader-' + options.id + '" class="loader"></div><div id="main-image-' + options.id + '" class="main-image"><div item_id="1" class="next" id="next-' + options.id + '"></div><img style="width: 100%;" src="' + options.baseurl + options.opts[0].image + '"></div>';
            $('#' + options.id).hide().html(optsHtml);

            $('img').load(function() {
                var arrowsHeight = $('#main-image-' + options.id).height();

                $('#prev-' + options.id).css({
                    height: arrowsHeight + 'px'
                });

                $('#next-' + options.id).css({
                    height: arrowsHeight + 'px'
                });
                $('#' + options.id).fadeIn(200);
                
            });

            function checkPrevPosition(item_id) {
                if (parseInt(item_id) == 0) {
                    return 'display: none;';
                }
            }

            function checkNextPosition(item_id) {
                if (parseInt(item_id) == (max - 1)) {
                    return 'display: none;';
                }
            }

            function getPrevPosition(item_id) {
                return (parseInt(item_id) - 1);
            }

            function getNextPosition(item_id) {
                return (parseInt(item_id) + 1);
            }

            function animateBar(item_id) {
                var left = parseInt(item_id) * 160;
                var image = $('#gallery_' + item_id).attr('image');

                $('#inimage-bar-' + options.id).animate({
                    left: "-" + left + "px"
                });

                $('.image-item-' + options.id).each(function() {
                    $(this).removeClass('active');
                });

                $('#gallery_' + item_id).addClass('active');

                $('#main-image-' + options.id).hide().html(
                        '<div style="' + checkPrevPosition(item_id) + '" item_id="' + getPrevPosition(
                        item_id) + '" class="prev" id="prev-' + options.id + '"></div><div style="' + checkNextPosition(
                        item_id) + '" item_id="' + getNextPosition(
                        item_id) + '" class="next" id="next-' + options.id + '"></div><img style="width: 100%;" src="' + image + '">');
                $('#loader-' + options.id).show();

                $('img').load(function() {
                    $('#loader-' + options.id).hide();
                    $('#main-image-' + options.id).fadeIn(200);
                    var arrowsHeight = $('#main-image-' + options.id).height();

                    $('#prev-' + options.id).css({
                        height: arrowsHeight + 'px'
                    });

                    $('#next-' + options.id).css({
                        height: arrowsHeight + 'px'
                    });

                });

            }

            $('#' + options.id).on('click', '#prev-' + options.id, function() {
                var item_id = $(this).attr('item_id');
                var image = $(this).attr('image');

                animateBar(item_id);

            });

            $('#' + options.id).on('click', '#next-' + options.id, function() {
                var item_id = $(this).attr('item_id');
                var image = $(this).attr('image');

                animateBar(item_id);

            });

            $('#' + options.id).on('click', '.image-item-' + options.id, function() {
                var item_id = $(this).attr('item_id');
                var image = $(this).attr('image');

                animateBar(item_id);
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