/*jslint browser: true*/
/*global jQuery*/

;(function ($, window) {
    'use strict';

    $.fn.confirmUnloadIfModified = function (options) {
        var form                    = this,
            confirmUnload           = true,
            initialSerializedValue  = form.serialize(),
            settings                = $.extend({
                'message' : "You've started to fill in the form."
            }, options);

        this.find("input:submit").click(function () {
            confirmUnload = false;
            return true;
        });

        window.onbeforeunload = function () {
            if (confirmUnload && (form.serialize() !== initialSerializedValue)) {
                return (settings.message);
            }
        };

        return this;
    };
}(jQuery, window));
