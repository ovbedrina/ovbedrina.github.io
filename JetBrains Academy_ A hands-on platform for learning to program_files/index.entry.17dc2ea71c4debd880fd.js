(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/5Ja":function(e,t,o){"use strict";var n=o("KI45");o("hfKm")(t,"__esModule",{value:!0}),t.default=t.Events=void 0,o("a1Th"),o("Btvt");var a=n(o("pbKT")),r=n(o("/HRN")),l=n(o("WaGi")),i=n(o("K47E")),u=n(o("N9n2")),f=n(o("ZDA2")),s=n(o("/+P4")),d=n(o("xHqa")),c=n(o("FxFC")),p=o("4ZJ8");function v(e){var t=function(){if("undefined"==typeof Reflect||!a.default)return!1;if(a.default.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call((0,a.default)(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=(0,s.default)(e);if(t){var r=(0,s.default)(this).constructor;o=(0,a.default)(n,arguments,r)}else o=n.apply(this,arguments);return(0,f.default)(this,o)}}var y={READY:"ready",QUALITY_CHANGE:"quality_change",END:"end",PLAY:"play",PAUSE:"pause",BUFFERING:"buffering",CUED:"cued"};t.Events=y;var h=function(e){(0,u.default)(o,e);var t=v(o);function o(e,n){var a;return(0,r.default)(this,o),a=t.call(this,e,n),void 0===window.YT?(a.throwError("YouTube Iframe API is not loaded, make sure component created via VideoPlayer.create"),(0,f.default)(a,(0,i.default)(a))):(a._player=a._createYouTubePlayer(),a)}return(0,l.default)(o,[{key:"_createYouTubePlayer",value:function(){var e=this.node,t=this.config,o=this._emitter.emit,n=(0,p.createYouTubePlayerConfig)(t),a=new YT.Player(e,n);a.addEventListener("onReady",(function(e){o(y.READY,e)})),a.addEventListener("onPlaybackQualityChange",(function(e){o(y.QUALITY_CHANGE,e)}));var r=YT.PlayerState;return a.addEventListener("onStateChange",(function(e){switch(e.data){case r.ENDED:o(y.END,e);break;case r.PLAYING:o(y.PLAY,e);break;case r.PAUSED:o(y.PAUSE,e);break;case r.BUFFERING:o(y.BUFFERING,e);break;case r.CUED:o(y.CUED,e)}})),a}},{key:"loadVideoById",value:function(e){this._player.cueVideoById(e)}},{key:"loadVideoByUrl",value:function(e){var t=(0,p.getVideoId)(e);t?this.loadVideoByUrl(t):this.throwError("Invalid video URL")}}],[{key:"create",value:function(e,t){return(0,p.loadYouTubePlayerApi)().then((function(){return new o(e,t)}))}}]),o}(c.default);t.default=h,(0,d.default)(h,"defaultConfig",{width:"640",height:"480",videoId:null,videoUrl:null,autoPlay:!1,showRelativeVideos:!1})},0:function(e,t,o){o("ctTR"),e.exports=o("iMcM")},"0VM1":function(e,t,o){"use strict";var n=o("KI45"),a=o("hfKm");a(t,"__esModule",{value:!0}),a(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("/5Ja"))},"4ZJ8":function(e,t,o){"use strict";var n=o("KI45");o("hfKm")(t,"__esModule",{value:!0}),t.getVideoId=f,t.getThumbUrl=function(e){var t=f(e);return u.replace("{video_id}",t).replace("{thumb_id}","0")},t.createYouTubePlayerConfig=function(e){var t=function(e){return!0===e?1:0},o=e.startTime,n=e.videoId;if("videoUrl"in e){n=f(e.videoUrl);var a=e.videoUrl.split("?")[1];if(a){var l=r.default.parse(a);l.t&&(o=l.t)}}return{width:e.width,height:e.height,videoId:n,playerVars:{rel:t(e.showRelatedVideos),autoplay:t(e.autoPlay),start:void 0!==o?o:0,html5:1}}},t.loadExternalScript=s,t.waitForYouTubePlayerApi=d,t.loadYouTubePlayerApi=function(){if(c)return a.default.resolve();return s(l).then((function(){return d()})).then((function(){return c=!0}))},t.THUMB_URL_PATTERN=t.VIDEO_ID_REGEXP=t.API_URL=void 0;var a=n(o("eVuF"));o("KKXr"),o("pIFo"),o("SRfc");var r=n(o("hhHN")),l="https://www.youtube.com/player_api";t.API_URL=l;var i=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;t.VIDEO_ID_REGEXP=i;var u="https://img.youtube.com/vi/{video_id}/{thumb_id}.jpg";function f(e){var t=null;if(!e)return null;var o=e.match(i);return null!==o&&void 0!==o[7]&&(t=o[7]),t}function s(e){return new a.default((function(t,o){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=t,n.onerror=o,document.head.appendChild(n)}))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;function t(o){void 0===window.YT||void 0===window.YT.Player?setTimeout(t.bind(null,o),e):o()}return new a.default((function(e,o){return t(e)}))}t.THUMB_URL_PATTERN=u;var c=!1},OQRv:function(e,t,o){"use strict";var n=o("KI45"),a=o("hfKm");a(t,"__esModule",{value:!0}),a(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("p44T"))},"TC+S":function(e,t,o){},TK9I:function(e,t,o){},eVda:function(e,t,o){},iMcM:function(e,t,o){var n=o("KI45");o("eVda"),o("V6oK"),o("TK9I"),o("yC9c"),o("yaiE");var a=n(o("EVdn")),r=n(o("OQRv"));(0,a.default)(document).ready((function(){new r.default(".js-video")}))},p44T:function(e,t,o){"use strict";var n=o("KI45");o("hfKm")(t,"__esModule",{value:!0}),t.default=void 0,o("a1Th"),o("Btvt");var a=n(o("pbKT"));o("dRSK");var r=n(o("/HRN")),l=n(o("WaGi")),i=n(o("K47E")),u=n(o("N9n2")),f=n(o("ZDA2")),s=n(o("/+P4")),d=n(o("EVdn")),c=n(o("FxFC")),p=n(o("0VM1")),v=o("4ZJ8");function y(e){var t=function(){if("undefined"==typeof Reflect||!a.default)return!1;if(a.default.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call((0,a.default)(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=(0,s.default)(e);if(t){var r=(0,s.default)(this).constructor;o=(0,a.default)(n,arguments,r)}else o=n.apply(this,arguments);return(0,f.default)(this,o)}}o("TC+S");var h=function(e){(0,u.default)(o,e);var t=y(o);function o(e,n){var a;(0,r.default)(this,o),a=t.call(this,e,n);var l=(0,d.default)(a.node);a.$node=l;var u=a.videoUrl;if(!u)return a.throwError("Video URL should be provided as `href` attribute of <a> tag"),(0,f.default)(a,(0,i.default)(a));var s=l.find("img");return 1===s.length||(s=a.createThumb((0,v.getThumbUrl)(u)),l.find("a").append(s)),a.$thumb=s,l.on("click",(function(e){e.preventDefault(),a.createPlayer()})),a}return(0,l.default)(o,[{key:"createThumb",value:function(e){return(0,d.default)('<img src="'.concat(e,'" class="embedded-video__thumb">'))}},{key:"createPlayer",value:function(){var e=this.$node,t={videoUrl:this.videoUrl,autoPlay:!0},o=(0,d.default)('<div class="embedded-video__player-wrap"></div>');return e.append(o),p.default.create(o.get(0),t)}},{key:"videoUrl",get:function(){return this.$node.find("a").attr("href")||null}}]),o}(c.default);t.default=h},yC9c:function(e,t,o){var n=o("4BeY"),a=o("IaFt"),r=new n({id:"beam-academy",use:"beam-academy-usage",viewBox:"0 0 1440 761",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 761" id="beam-academy">\n    <defs>\n        <linearGradient id="beam-academy_a" x1="138.822%" x2="44.561%" y1="60.624%" y2="49.112%">\n            <stop offset="0%" stop-color="#15DD69" />\n            <stop offset="8.735%" stop-color="#1FD178" />\n            <stop offset="25.421%" stop-color="#3AB29E" />\n            <stop offset="48.152%" stop-color="#6480DB" />\n            <stop offset="55.967%" stop-color="#746DF2" />\n            <stop offset="100%" stop-color="#B81DF5" />\n        </linearGradient>\n        <linearGradient id="beam-academy_b" x1="24.004%" x2="96.356%" y1="-23.701%" y2="142.175%">\n            <stop offset="0%" stop-color="#15DD69" />\n            <stop offset="10.418%" stop-color="#2AD186" />\n            <stop offset="26.884%" stop-color="#46BFAD" />\n            <stop offset="42.03%" stop-color="#5BB3C9" />\n            <stop offset="55.231%" stop-color="#68ACDA" />\n            <stop offset="65.022%" stop-color="#6CA9E0" />\n            <stop offset="100%" stop-color="#B81DF5" />\n        </linearGradient>\n        <linearGradient id="beam-academy_c" x1="-11.917%" x2="46.898%" y1="58.254%" y2="50.773%">\n            <stop offset="0%" stop-color="#4CED8D" />\n            <stop offset="100%" stop-color="#15DD69" />\n        </linearGradient>\n        <linearGradient id="beam-academy_d" x1="52.172%" x2="165.142%" y1="39.508%" y2="-65.193%">\n            <stop offset=".407%" stop-color="#4CED8D" />\n            <stop offset="7.706%" stop-color="#3DE983" />\n            <stop offset="21.597%" stop-color="#17DE6B" />\n            <stop offset="22.391%" stop-color="#15DD69" />\n            <stop offset="27.631%" stop-color="#1FD178" />\n            <stop offset="37.642%" stop-color="#3AB29E" />\n            <stop offset="51.279%" stop-color="#6480DB" />\n            <stop offset="55.967%" stop-color="#746DF2" />\n            <stop offset="100%" stop-color="#B81DF5" />\n        </linearGradient>\n    </defs>\n    <g fill="none" fill-rule="nonzero">\n        <path fill="url(#beam-academy_a)" d="M1195.245 444.263L0 0h60l1228 406.5z" transform="translate(-212 -50)" />\n        <path fill="url(#beam-academy_b)" d="M1250.98 181.382l75.283 244.785-75.283 14.35-128.36-272.944z" transform="translate(-212 -50)" />\n        <path fill="url(#beam-academy_c)" d="M653.9 810.342c4.49-4.61 1208.937-604.06 1208.937-604.06v-13.94L577.512 619.69 653.9 810.342z" transform="translate(-212 -50)" />\n        <path fill="url(#beam-academy_d)" d="M1250.98 181.382L653.9 810.342l-200.385-110.91 33.817-122.973L988.45 148.088z" transform="translate(-212 -50)" />\n    </g>\n</symbol>'});a.add(r);e.exports=r},yaiE:function(e,t,o){var n=o("4BeY"),a=o("IaFt"),r=new n({id:"beam-blue",use:"beam-blue-usage",viewBox:"0 0 954 690",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 954 690" id="beam-blue">\n    <defs>\n        <linearGradient id="beam-blue_a" x1="96.733%" x2="-3.124%" y1="17.703%" y2="91.727%">\n            <stop offset="0%" stop-color="#FCF84A" />\n            <stop offset="100%" stop-color="#21D789" />\n        </linearGradient>\n        <linearGradient id="beam-blue_b" x1="47.755%" x2="51.214%" y1="8.018%" y2="97.967%">\n            <stop offset="0%" stop-color="#FCF84A" />\n            <stop offset="100%" stop-color="#21D789" />\n        </linearGradient>\n        <linearGradient id="beam-blue_c" x1="9.255%" x2="89.449%" y1="20.856%" y2="69.947%">\n            <stop offset="0%" stop-color="#6E6EF4" />\n            <stop offset="0%" stop-color="#6E6EF4" />\n            <stop offset="27.213%" stop-color="#8383F4" />\n            <stop offset="50.704%" stop-color="#9090F4" />\n            <stop offset="59.571%" stop-color="#8299E7" />\n            <stop offset="76.227%" stop-color="#5EB0C4" />\n            <stop offset="98.731%" stop-color="#24D58C" />\n            <stop offset="100%" stop-color="#21D789" />\n        </linearGradient>\n    </defs>\n    <g fill="none" fill-rule="nonzero">\n        <path fill="url(#beam-blue_a)" d="M1278 257L739 550.352 780.446 603l478.36-231.79z" transform="translate(-113 -103)" />\n        <path fill="url(#beam-blue_b)" d="M1278.295 664.647C1242.578 715.855 1440 382.599 1440 390.836c0 8.236-87.663-112.066-87.663-112.066L1279.752 257 993 607.305l285.295 57.342z" transform="translate(-113 -103)" />\n        <path fill="url(#beam-blue_c)" d="M0 2.263L1008.966 897l201.56-111.158L1278 665.01 357.886 0z" transform="translate(-113 -103)" />\n    </g>\n</symbol>'});a.add(r);e.exports=r}},[[0,0]]]);
//# sourceMappingURL=index.entry.bf5745817cefae955a67.js.map