!function(t){function e(e){for(var o,a,c=e[0],s=e[1],u=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(l&&l(e);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={0:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="js/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([63,1]),n()}({22:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return u});n(52);var o=n(10),r=n.n(o),i=n(11),a=n.n(i),c="2018-05-27";function s(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}function u(){document.querySelectorAll(".js-init--stats").forEach(function(e){var n,o,i,u,l={date:(n=a()(c,"DD/MM/YYYY"),o=a()().diff(n,"days"),i=["день","дня","дней"],o<0?{header:-1*o,description:"".concat(s(-1*o,i)," до открытия")}:o>0?{header:o,description:"".concat(s(o,i)," с открытия")}:{header:"Сегодня",description:"открытие сервера"})},d=e.innerHTML;function f(){e.innerHTML=r.a.render(d,l)}r.a.parse(d),f(),u=function(t,e){var n;delete l.stats;try{n=JSON.parse(t)}catch(t){n={}}if(e&&n.is_online){var o=n.response;l.stats=[{header:o.cap,description:"кап"},{header:o.online,description:s(o.online,["игрок","игрока","игроков"])},{header:o.rates,description:"рейты"}],f()}else l.error={header:"Произошла ошибка",description:"В данный момент мы не можем получить данные с сервера."},f()},t.ajax({url:"".concat("https://host.magicofgods.ru").concat("/api/server"),timeout:3e4}).done(function(t){return u(t,!0)}).fail(function(t){return u(t,!1)})})}}).call(this,n(0))},23:function(t,e,n){"use strict";(function(t){function o(){t(".js-init--main-gallery").each(function(){t(this).slick({adaptiveHeight:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:5e3})})}n.d(e,"a",function(){return o})}).call(this,n(0))},24:function(t,e,n){"use strict";(function(t){function o(){t(".js-init--features-gallery").each(function(){t(this).slick({arrows:!1,adaptiveHeight:!0,slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})})}n.d(e,"a",function(){return o})}).call(this,n(0))},25:function(t,e,n){"use strict";(function(t){function o(){t("a[href^='#']").on("click",function(e){e.preventDefault(),e.stopPropagation(),t.scrollTo(this.getAttribute("href"),400)})}n.d(e,"a",function(){return o})}).call(this,n(0))},26:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return r});var o=n(64);function r(){var e=document.querySelector(".js-init--header"),n=document.querySelector("body");e&&window.addEventListener("scroll",Object(o.a)(function(){n.style.top||e.classList.toggle("active",0!==window.scrollY)},200)),t("#main-nav").hcOffcanvasNav({insertClose:!1})}}).call(this,n(0))},63:function(t,e,n){"use strict";n.r(e);n(28);var o=n(0),r=n(21),i=n.n(r);n(29),n(47),n(48),n(49),n(50),n(51);var a=n(22),c=n(23),s=n(24),u=n(25),l=n(26);window.$=o,window.jQuery=o,i()(),o(document).ready(function(){!!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)&&document.querySelector("html").classList.add("is-mac"),Object(l.a)(),VK.Widgets.Group("vk-news",{mode:4,width:"auto",height:"600"},150619577),VK.Widgets.CommunityMessages("vk_community_messages",150619577,{expandTimeout:"30000",disableNewMessagesSound:"1",tooltipButtonText:"Есть вопрос?"}),Object(a.a)(),Object(c.a)(),Object(s.a)(),Object(u.a)()})}});
//# sourceMappingURL=bundle.js.map