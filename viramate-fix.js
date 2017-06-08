// ==UserScript==
// @name         Viramate fix
// @namespace    https://github.com/Yoctillion
// @version      1.0
// @description  fix Viramate for DMM version
// @author       Yoctillion
// @match        http://game.granbluefantasy.jp
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

    // game container
    let container = document.getElementById('mobage-game-container');

    // exclude mobage version (?)
    if (container.parentElement !== document.body) {
        return;
    }

    let createDivWithClass = function (className) {
        let div = document.createElement('div');
        div.className = className;
        return div;
    };

    let createCss = function (css) {
        let style = document.createElement('style');
        style.innerHTML = css;
        return style;
    };

    let appendCss = function (css) {
        document.head.appendChild(createCss(css));
    };

    // copy from mobage version
    appendCss('.z5cwqEHi5T8D9u8TPHH6m{height:100%;max-height:100%}._2GSEVm9wJNRxSdrjUOaWsg{display:flex;display:-webkit-box;display:-ms-flexbox}._2lsvE43T8AGADGf6xw_zWs{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:strech;-ms-flex-pack:strech;justify-content:strech}._3GDjgeyJeTkUZsdsukD0CO{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._1F1JURU_e5JumwmOliYS9x{float:left}._3V0ix3VWkvczh8HX1oR5dI{background-color:#333a42;padding:10px}');
    appendCss('._2ZVw0TYkWYwvh2YurVv1OG,._38sXs6kUdRiSAYy7O-rDEe{position:absolute;top:0;left:0;width:100%;height:100%;zoom:reset}.SdEyhW_kE0xoDznTZ5Wr-{height:100%;overflow-y:auto;overflow-x:auto;z-index:9000;position:relative;-webkit-box-flex:1;box-flex:1;-ms-flex:1;flex:1}._2BWqQOPyLjOBWS8uhzI9ht,._3CTtyx1weTpsYWGGPfcPYc{z-index:9001;top:0;left:0;transition-duration:.3s;transition-timing-function:cubic-bezier(1,0,.5,1);transition-property:margin-left}._3CTtyx1weTpsYWGGPfcPYc{position:fixed}');

    // fix login page (any better way?)
    appendCss('html, body { height: 100%; }');

    let frame = createDivWithClass('_2ZVw0TYkWYwvh2YurVv1OG _2lsvE43T8AGADGf6xw_zWs _2GSEVm9wJNRxSdrjUOaWsg');
    let pseudoSideBar = createDivWithClass('_2BWqQOPyLjOBWS8uhzI9ht z5cwqEHi5T8D9u8TPHH6m');
    pseudoSideBar.style.background = '#1f1f1f';
    pseudoSideBar.style.width = '64px';
    let main = createDivWithClass('SdEyhW_kE0xoDznTZ5Wr-');

    container.parentNode.insertBefore(frame, container);
    frame.appendChild(pseudoSideBar);
    frame.appendChild(main);
    main.appendChild(container);
})();