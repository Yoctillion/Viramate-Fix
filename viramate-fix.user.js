// ==UserScript==
// @name         Viramate fix
// @namespace    https://github.com/Yoctillion
// @version      1.1
// @description  fix Viramate for DMM version
// @author       Yoctillion
// @match        http://game.granbluefantasy.jp
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

    let prevNode;
    for (let node of document.head.children) {
        if (node.tagName === 'META' && node.name === 'apple-mobile-web-app-title') {
            prevNode = node;
        } else if (node.tagName === 'SCRIPT' && node.src === 'https://cdn-connect.mobage.jp/jssdk/mobage-menubar.2.4.2.min.js') {
            // mobage version
            return;
        }
    }

    let script = document.createElement('script');
    script.src = 'https://cdn-connect.mobage.jp/jssdk/mobage-menubar.2.4.2.min.js'; // <- the main difference between mobage and other versions
    prevNode.parentNode.insertBefore(script, prevNode.nextSibling);

    let createCss = function (css) {
        let style = document.createElement('style');
        style.innerHTML = css;
        return style;
    };

    let appendCss = function (css) {
        document.head.appendChild(createCss(css));
    };

    let css = 'div[data-menubar-container=MenuBarContainer] > nav > * { display: none; }';
    appendCss(css);
})();
