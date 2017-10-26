if (typeof flash45ru == "undefined" || !flash45ru) {
    var flash45ru = {};
}
flash45ru.subscribes = {
    init: function () {

        $(document).ajaxStart(function () {
            $(document.body).css({'cursor': 'wait'});
        }).ajaxStop(function () {
            $(document.body).css({'cursor': 'default'});
        });

        $thisObj = flash45ru.subscribes;
        $('[data-subscribe]').on('click', function (e) {

            var self = this,
                form = $(self).closest('form');

            $thisObj.subscribe(form);
        });
    },
    subscribe: function (form) {
        if ($("#subscribe-email").val().length > 0) {
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                success: function (data) {
                    data = jQuery.parseJSON(data);
                    if (data.status == 'success') {
                        $('.successSubscribe').html('<p><br>' + data.message);
                    } else if (data.status == 'error') {
                        $('.errorSubscribe').html('<p><br>' + data.message);
                    }
                },
            });
        }
    }
};
$(function () {
    flash45ru.subscribes.init();
});