// ==UserScript==
// @name         faster-timer-for-s2oj
// @namespace    http://tampermonkey.net/
// @version      1.1.4
// @description  Time goes fas
// @author       XiEn
// @match        https://www.sjzezoj.com/*
// @match        https://sjzezoj.com/*
// @icon         https://sjzezoj.com/images/logo_small.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('#t-2022sx').hide();
    $('#t-2022sx').after("<b id=\"t-2022sx-fast\"></b>");
    $('#t-noip2022').hide();
    $('#t-noip2022').after("<b id=\"t-2022noip-fast\"></b>");

    var sx2022 = new Date('2022-04-16').getTime();
    var noip2022 = new Date('2022-11-19').getTime();
    setInterval(() => {
        var now = new Date().getTime();
        $('#t-2022sx-fast').text(((sx2022 - now) / (24 * 60 * 60) / 1000).toFixed(8));
        $('#t-2022noip-fast').text(((noip2022 - now) / (24 * 60 * 60) / 1000).toFixed(8));
    }, 0);
})();
