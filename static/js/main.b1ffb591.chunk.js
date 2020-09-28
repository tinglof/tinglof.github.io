/*! For license information please see main.b1ffb591.chunk.js.LICENSE.txt */
(this.webpackJsonpbreathing=this.webpackJsonpbreathing||[]).push([[0],[,function(A,e,t){A.exports={"progress-dot":"box-breathing_progress-dot__7Q_9Q",box:"box-breathing_box__2cMW9",wrapper:"box-breathing_wrapper__1BeF5",instruction:"box-breathing_instruction__3Gf9x",active:"box-breathing_active__1bWvP",inhale:"box-breathing_inhale__1AlzT",exhale:"box-breathing_exhale__KgG7J","hold-post-inhale":"box-breathing_hold-post-inhale__3PsvI","hold-post-exhale":"box-breathing_hold-post-exhale__32MB-"}},function(A,e,t){A.exports={wrapper:"activity-screen_wrapper__1BtJz",headline:"activity-screen_headline__2aZZt","state-text-wrapper":"activity-screen_state-text-wrapper__EETdf","state-text":"activity-screen_state-text__zuIVf","circle-wrapper":"activity-screen_circle-wrapper__3GhVu",circle:"activity-screen_circle__3H1AH",indicator:"activity-screen_indicator__TmZZG",countdown:"activity-screen_countdown__1bw3b","button-wrapper":"activity-screen_button-wrapper__2dLFA"}},,,,,function(A,e,t){A.exports={wrapper:"swipe-input_wrapper__30ETy",title:"swipe-input_title__1bRGN",headline:"swipe-input_headline__3rw7b"}},,function(A,e,t){A.exports={wrapper:"start-screen_wrapper__36pci",headline:"start-screen_headline__2maBH",headlinewrapper:"start-screen_headlinewrapper__1APjj",icon:"start-screen_icon__34Wwn","button-wrapper":"start-screen_button-wrapper__1VBMX",start:"start-screen_start__3XQLl","button-text":"start-screen_button-text__1uspB"}},function(A,e,t){A.exports={item:"input-item_item__25x9U",visible:"input-item_visible__2x8wh"}},,,function(A,e,t){A.exports={wrapper:"hrv-breathing_wrapper__3FvDh","inner-wrapper":"hrv-breathing_inner-wrapper__2v1Og"}},function(A,e,t){},,,,,,function(A,e,t){A.exports={wrapper:"button_wrapper__1g0X5"}},function(A,e,t){A.exports=t.p+"static/media/bell_one.3386ebae.webm"},function(A,e,t){A.exports=t.p+"static/media/bell_two.451898a0.webm"},function(A,e,t){A.exports=t.p+"static/media/bell_one.eee967f9.mp3"},function(A,e,t){A.exports=t.p+"static/media/bell_two.17c587a8.mp3"},function(A,e,t){A.exports=t.p+"static/media/done.d29d3e8e.mp3"},function(A,e,t){A.exports=t.p+"static/media/done.b3ee8616.webm"},function(A,e,t){var n;window,n=function(){return function(A){var e={};function t(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return A[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=A,t.c=e,t.d=function(A,e,n){t.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:n})},t.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},t.t=function(A,e){if(1&e&&(A=t(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var a in A)t.d(n,a,function(e){return A[e]}.bind(null,a));return n},t.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s=0)}([function(A,e,t){"use strict";var n=function(){function A(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),e}}(),a=t(1),i=a.webm,o=a.mp4,r="undefined"!==typeof navigator&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream,s="wakeLock"in navigator,c=function(){function A(){var e=this;if(function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,A),s){this._wakeLock=null;var t=function(){null!==e._wakeLock&&"visible"===document.visibilityState&&e.enable()};document.addEventListener("visibilitychange",t),document.addEventListener("fullscreenchange",t)}else r?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("title","No Sleep"),this.noSleepVideo.setAttribute("playsinline",""),this._addSourceToVideo(this.noSleepVideo,"webm",i),this._addSourceToVideo(this.noSleepVideo,"mp4",o),this.noSleepVideo.addEventListener("loadedmetadata",(function(){e.noSleepVideo.duration<=1?e.noSleepVideo.setAttribute("loop",""):e.noSleepVideo.addEventListener("timeupdate",(function(){e.noSleepVideo.currentTime>.5&&(e.noSleepVideo.currentTime=Math.random())}))})))}return n(A,[{key:"_addSourceToVideo",value:function(A,e,t){var n=document.createElement("source");n.src=t,n.type="video/"+e,A.appendChild(n)}},{key:"enable",value:function(){var A=this;s?navigator.wakeLock.request("screen").then((function(e){A._wakeLock=e,console.log("Wake Lock active."),A._wakeLock.addEventListener("release",(function(){console.log("Wake Lock released.")}))})).catch((function(A){console.error(A.name+", "+A.message)})):r?(this.disable(),console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "),this.noSleepTimer=window.setInterval((function(){document.hidden||(window.location.href=window.location.href.split("#")[0],window.setTimeout(window.stop,0))}),15e3)):this.noSleepVideo.play()}},{key:"disable",value:function(){s?(this._wakeLock&&this._wakeLock.release(),this._wakeLock=null):r?this.noSleepTimer&&(console.warn("\n          NoSleep now disabled for older iOS devices.\n        "),window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause()}}]),A}();A.exports=c},function(A,e,t){"use strict";A.exports={webm:"data:video/webm;base64, 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",mp4:"data:video/mp4;base64, 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"}}])},A.exports=n()},,,function(A,e,t){A.exports=t(43)},,,,,function(A,e,t){},,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),i=t(17),o=t.n(i),r=(t(35),t(6)),s=t(1),c=t.n(s),l=t(3),g=function(A){var e=Object(l.c)({animation:{animate:{x:320},transition:{duration:4,ease:"linear"}},step:1},{animation:{animate:{y:240},transition:{duration:4,ease:"linear"}},step:2},{animation:{animate:{x:0},transition:{duration:4,ease:"linear"}},step:3},{animation:{animate:{y:0},transition:{duration:4,ease:"linear"}},step:4}),t=Object(r.a)(e,2),n=t[0],i=t[1];return a.a.createElement("div",{className:c.a.wrapper},a.a.createElement("h1",{className:[c.a.headline,"hero-heading"].join(" ")},"Box Breathing"),a.a.createElement("div",{className:c.a.box},a.a.createElement("div",{className:c.a.animationBox},a.a.createElement(l.b.div,Object.assign({className:c.a["progress-dot"]},n.animation,{onAnimationComplete:function(){return i()}})),a.a.createElement("p",{className:[c.a.instruction,c.a.inhale,1===n.step?c.a.active:""].join(" ")},"Inhale"),a.a.createElement("p",{className:[c.a.instruction,c.a["hold-post-inhale"],2===n.step?c.a.active:""].join(" ")},"Hold"),a.a.createElement("p",{className:[c.a.instruction,c.a.exhale,3===n.step?c.a.active:""].join(" ")},"Exhale"),a.a.createElement("p",{className:[c.a.instruction,c.a["hold-post-exhale"],4===n.step?c.a.active:""].join(" ")},"Hold"))))};g.defaultProps={inhale:4,exhale:4,holdPostInhale:4,holdPostExhale:4};var h=t(18),B=t(19),m=t(5),E=t(29),u=t(28),p=t(13),C=t.n(p),d=t(9),I=t.n(d),Q=t(7),b=t.n(Q),k=t(4),w=t(10),Z=t.n(w),V=function(A){var e=A.onClick,t=A.value,n=A.visible,i=A.style;return a.a.createElement("div",{style:i,className:[Z.a.item,n?Z.a.visible:""].join(" "),onClick:e},a.a.createElement("div",{className:Z.a.value},t))},S=function(A){var e=A.title,t=A.headline,i=A.inputValues,o=A.onChangeValue,r=Object(n.useRef)(null),s=Object(k.e)({debounce:10,ref:r},(function(A,e){return e&&o(i[e]),e})),c=Object(k.d)({ref:r});Object(k.c)({ref:r});var l=i&&i instanceof Array?i.map((function(A,e){return 0===e?a.a.createElement(k.a,{key:e,margin:{left:"calc(50% - (".concat(95,"px/2)"),right:"10px"},snapAlign:"center"},a.a.createElement(V,{style:{width:95,height:95},onClick:function(){o(A),c(e)},visible:s===e,value:A})):e===i.length-1?a.a.createElement(k.a,{key:e,margin:{left:"10px",right:"calc(50% - (".concat(95,"px/2)")},snapAlign:"center"},a.a.createElement(V,{style:{width:95,height:95},onClick:function(){o(A),c(e)},visible:s===e,value:A})):a.a.createElement(k.a,{key:e,margin:{left:"10px",right:"10px"},snapAlign:"center"},a.a.createElement(V,{style:{width:95,height:95},onClick:function(){o(A),c(e)},visible:s===e,value:A}))})):[];return a.a.createElement("div",{className:b.a.wrapper},a.a.createElement("div",{className:b.a["text-wrapper"]},e&&a.a.createElement("p",{className:b.a.title},e),t&&a.a.createElement("h2",{className:b.a.headline},t)),a.a.createElement(k.b,{ref:r,direction:"horizontal",height:"auto"},l))};S.defaultProps={onChangeValue:function(){}};var Y=S,O=t(20),J=t.n(O),G=function(A){var e=A.children,t=A.onClick;return a.a.createElement("button",{onClick:t,className:J.a.wrapper},e)};G.defaultProps={onClick:function(){return console.log("No func assigned")}};var M=G,D=function(A){var e=A.onChangeInBreath,t=A.onChangeOutBreath,n=A.onChangeSessionLength,i=A.onStart,o=A.inBreathValues,r=A.outBreathValues,s=A.sessionLengthValues;return a.a.createElement("div",{className:I.a.wrapper},a.a.createElement("h1",{className:[I.a.headline,"hero-heading"].join(" ")},"Heart Rate Variability"),a.a.createElement(Y,{title:"seconds",headline:"breath in",onChangeValue:e,inputValues:o}),a.a.createElement(Y,{title:"seconds",headline:"breath out",onChangeValue:t,inputValues:r}),a.a.createElement(Y,{title:"minutes",headline:"session length",onChangeValue:n,inputValues:s}),a.a.createElement("div",{className:I.a["button-wrapper"]},a.a.createElement(M,{onClick:i},"lets go")))};D.defaultProps={};var X=D,v=t(2),x=t.n(v),f=t(14),F=t.n(f),y=t(11),j=t.n(y),R=function(A){var e=A.intialTimeInMin,t=A.onCountDownEnd;return a.a.createElement(j.a,{formatValue:function(A){return"".concat(A<10?"0".concat(A):A)},initialTime:60*e*1e3,direction:"backward",checkpoints:[{time:0,callback:t}]},a.a.createElement("div",{className:F.a.timer},a.a.createElement(j.a.Minutes,null)," ",a.a.createElement("span",{className:F.a.divider}," : ")," ",a.a.createElement(j.a.Seconds,null)))};R.defaultProps={onCountDownEnd:function(){},intialTimeInMin:10};var W=R,q=t(8),_=t(21),N=t.n(_),L=t(22),T=t.n(L),U=t(23),K=t.n(U),H=t(24),z=t.n(H),P=t(25),$=t.n(P),AA=t(26),eA=t.n(AA),tA=function(A){var e=A.inBreath,t=A.outBreath,i=A.sessionLength,o=A.back,s=Object(n.useState)(!0),c=Object(r.a)(s,2),g=c[0],h=c[1],B=1e3*e,m=1e3*t,E=new q.Howl({src:[eA.a,$.a],volume:.5}),u=new q.Howl({src:[N.a,K.a],sprite:{adjustedSound:[0,B]}}),p=new q.Howl({src:[T.a,z.a],sprite:{adjustedSound:[0,m]}}),C=Object(l.c)({animation:{animate:{rotate:[0,180]},transition:{duration:e,ease:"easeInOut"}},colorAnimation:{animate:{background:"#6878EA"},transition:{duration:1.8,ease:"easeIn"}},step:1,soundOnComplete:u,text:"inhale"},{animation:{animate:{rotate:[180,360]},transition:{duration:t,ease:"easeInOut"}},colorAnimation:{animate:{background:"#5264e7"},transition:{duration:1.8,ease:"easeIn"}},step:2,soundOnComplete:p,text:"exhale"}),d=Object(r.a)(C,2),I=d[0],Q=d[1];return a.a.createElement("div",{className:x.a.wrapper},a.a.createElement("h1",{className:[x.a.headline,"hero-heading"].join(" ")},"Breathe"),a.a.createElement("div",{className:x.a["circle-wrapper"]},a.a.createElement(l.a,null,a.a.createElement("div",{className:x.a["state-text-wrapper"]},a.a.createElement(l.b.div,{key:I.text,className:x.a["state-text"],initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:"easeInOut"},exit:{opacity:0}},I.text))),a.a.createElement(l.b.div,Object.assign({},I.animation,{onAnimationComplete:function(){if(g){Q();var A=I.soundOnComplete.play("adjustedSound");I.soundOnComplete.fade(1,0,B,A)}else E.play()},className:x.a.circle}),a.a.createElement(l.b.div,Object.assign({},I.colorAnimation,{className:x.a.indicator})))),i&&"number"===typeof i&&a.a.createElement("div",{className:x.a.countdown},a.a.createElement(W,{onCountDownEnd:function(){return h(!1)},intialTimeInMin:i})),a.a.createElement("div",{className:x.a["button-wrapper"]},a.a.createElement(M,{onClick:function(){o(),q.Howler.stop()}},"back to main")))};tA.defaultProps={inBreath:4,outBreath:6};var nA=tA,aA=t(27),iA=t.n(aA),oA=[4.5,5,5.5,6,6.5,7,7.5,8,9,10],rA=[5,5.5,6,6.5,7,7.5,8,9,10,11,12,13,14],sA=["off",5,10,15,20,25,30,35,40,45],cA=function(A){Object(E.a)(t,A);var e=Object(u.a)(t);function t(A){var n;return Object(h.a)(this,t),(n=e.call(this,A)).state={step:1,inBreath:oA[0],outBreath:rA[0],sessionLength:sA[0]},n.nosleep=null,n.onChangeInBreath=n.onChangeInBreath.bind(Object(m.a)(n)),n.onChangeOutBreath=n.onChangeOutBreath.bind(Object(m.a)(n)),n.onChangeSessionLength=n.onChangeSessionLength.bind(Object(m.a)(n)),n}return Object(B.a)(t,[{key:"enableNoSleep",value:function(){this.nosleep&&this.nosleep.disable(),this.nosleep=new iA.a,this.nosleep.enable(),console.log("Nosleep enabled")}},{key:"disableNoSleep",value:function(){this.nosleep&&this.nosleep.disable()}},{key:"onChangeInBreath",value:function(A){A&&A!==this.state.inBreath&&this.setState({inBreath:A})}},{key:"onChangeOutBreath",value:function(A){A&&A!==this.state.outBreath&&this.setState({outBreath:A})}},{key:"onChangeSessionLength",value:function(A){A&&A!==this.state.sessionLength&&this.setState({sessionLength:A})}},{key:"renderStep",value:function(){var A=this;switch(this.state.step){case 1:return a.a.createElement(X,{inBreathValues:oA,outBreathValues:rA,sessionLengthValues:sA,onStart:function(){A.setState({step:2}),A.enableNoSleep()},onChangeSessionLength:this.onChangeSessionLength,onChangeInBreath:this.onChangeInBreath,onChangeOutBreath:this.onChangeOutBreath});case 2:return a.a.createElement(nA,{back:function(){A.setState({step:1}),A.disableNoSleep()},inBreath:this.state.inBreath,outBreath:this.state.outBreath,sessionLength:this.state.sessionLength})}}},{key:"render",value:function(){return a.a.createElement("div",{className:C.a.wrapper},a.a.createElement("div",{className:C.a["inner-wrapper"]},this.renderStep()))}}]),t}(n.Component);var lA=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(cA,null))};t(41),t(42);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(lA,null)),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.b1ffb591.chunk.js.map