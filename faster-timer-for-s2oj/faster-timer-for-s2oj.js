// ==UserScript==
// @name         faster-timer-for-s2oj
// @namespace    http://tampermonkey.net/
// @version      1.1.4
// @description  Time goes fast!
// @author       XiEn
// @match        https://www.sjzezoj.com/*
// @match        https://sjzezoj.com/*
// @icon         https://sjzezoj.com/images/logo_small.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("div[class='col-xs-6 col-sm-4 col-md-3']:contains(倒计时)").children("center").hide()
    $("div[class='col-xs-6 col-sm-4 col-md-3']:contains(倒计时)").append(
        '<center><div>'+
        '<h1>倒计时</h1>'+
        '<br/>'+
        '<p>距离 <b>2022 年省选</b> 还有 <b id="t-2022sx-fast">-1</b> 天</p>'+
        '<p>距离 <b>NOIP 2022</b> 还有 <b id="t-2022noip-fast">-1</b> 天</p>'+
        '</div></center>'
    );

    var sx2022 = new Date('2022-04-16').getTime();
    var noip2022 = new Date('2022-11-19').getTime();
    setInterval(() => {
        var now = new Date().getTime();
        $('#t-2022sx-fast').text(((sx2022 - now) / (24 * 60 * 60) / 1000).toFixed(8));
        $('#t-2022noip-fast').text(((noip2022 - now) / (24 * 60 * 60) / 1000).toFixed(8));
    }, 0);
})();
