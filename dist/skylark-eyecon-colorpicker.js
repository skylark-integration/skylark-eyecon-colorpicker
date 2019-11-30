/**
 * skylark-eyecon-colorpicker - A version of eyecon color picker that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-eyecon-colorpicker/
 * @license MIT
 */
!function(e,o){var r=o.define,require=o.require,t="function"==typeof r&&r.amd,i=!t&&"undefined"!=typeof exports;if(!t&&!r){var a={};r=o.define=function(e,o,r){"function"==typeof r?(a[e]={factory:r,deps:o.map(function(o){return function(e,o){if("."!==e[0])return e;var r=o.split("/"),t=e.split("/");r.pop();for(var i=0;i<t.length;i++)"."!=t[i]&&(".."==t[i]?r.pop():r.push(t[i]));return r.join("/")}(o,e)}),resolved:!1,exports:null},require(e)):a[e]={factory:null,resolved:!0,exports:r}},require=o.require=function(e){if(!a.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=a[e];if(!module.resolved){var r=[];module.deps.forEach(function(e){r.push(require(e))}),module.exports=module.factory.apply(o,r)||null,module.resolved=!0}return module.exports}}if(!r)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-eyecon-colorpicker/colorpicker",["skylark-langx/skylark","skylark-jquery"],function(e,o){var r,t,i,a,n,c,l,d,s,p,u,f,h,v,k,m,g,b,y,_,x,w,C,M,I,q,P,N,S,O,H,z,E,j,T,Y,W,B=(r=65,t={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},i=function(e,r){var t=T(e);o(r).data("colorpicker").fields.eq(1).val(t.r).end().eq(2).val(t.g).end().eq(3).val(t.b).end()},a=function(e,r){o(r).data("colorpicker").fields.eq(4).val(e.h).end().eq(5).val(e.s).end().eq(6).val(e.b).end()},n=function(e,r){o(r).data("colorpicker").fields.eq(0).val(Y(e)).end()},c=function(e,r){o(r).data("colorpicker").selector.css("backgroundColor","#"+Y({h:e.h,s:100,b:100})),o(r).data("colorpicker").selectorIndic.css({left:parseInt(150*e.s/100,10),top:parseInt(150*(100-e.b)/100,10)})},l=function(e,r){o(r).data("colorpicker").hue.css("top",parseInt(150-150*e.h/360,10))},d=function(e,r){o(r).data("colorpicker").currentColor.css("backgroundColor","#"+Y(e))},s=function(e,r){o(r).data("colorpicker").newColor.css("backgroundColor","#"+Y(e))},p=function(e){var t=e.charCode||e.keyCode||-1;if(t>r&&t<=90||32==t)return!1;var i=o(this).parent().parent();!0===i.data("colorpicker").livePreview&&u.apply(this)},u=function(e){var r,t=o(this).parent().parent();this.parentNode.className.indexOf("_hex")>0?t.data("colorpicker").color=r=E(z(this.value)):this.parentNode.className.indexOf("_hsb")>0?t.data("colorpicker").color=r=O({h:parseInt(t.data("colorpicker").fields.eq(4).val(),10),s:parseInt(t.data("colorpicker").fields.eq(5).val(),10),b:parseInt(t.data("colorpicker").fields.eq(6).val(),10)}):t.data("colorpicker").color=r=j(H({r:parseInt(t.data("colorpicker").fields.eq(1).val(),10),g:parseInt(t.data("colorpicker").fields.eq(2).val(),10),b:parseInt(t.data("colorpicker").fields.eq(3).val(),10)})),e&&(i(r,t.get(0)),n(r,t.get(0)),a(r,t.get(0))),c(r,t.get(0)),l(r,t.get(0)),s(r,t.get(0)),t.data("colorpicker").onChange.apply(t,[r,Y(r),T(r)])},f=function(e){var r=o(this).parent().parent();r.data("colorpicker").fields.parent().removeClass("colorpicker_focus")},h=function(){r=this.parentNode.className.indexOf("_hex")>0?70:65,o(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"),o(this).parent().addClass("colorpicker_focus")},v=function(e){var r=o(this).parent().find("input").focus(),t={el:o(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:e.pageY,field:r,val:parseInt(r.val(),10),preview:o(this).parent().parent().data("colorpicker").livePreview};o(document).bind("mouseup",t,m),o(document).bind("mousemove",t,k)},k=function(e){return e.data.field.val(Math.max(0,Math.min(e.data.max,parseInt(e.data.val+e.pageY-e.data.y,10)))),e.data.preview&&u.apply(e.data.field.get(0),[!0]),!1},m=function(e){return u.apply(e.data.field.get(0),[!0]),e.data.el.removeClass("colorpicker_slider").find("input").focus(),o(document).unbind("mouseup",m),o(document).unbind("mousemove",k),!1},g=function(e){var r={cal:o(this).parent(),y:o(this).offset().top};r.preview=r.cal.data("colorpicker").livePreview,o(document).bind("mouseup",r,y),o(document).bind("mousemove",r,b)},b=function(e){return u.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,e.pageY-e.data.y)))/150,10)).get(0),[e.data.preview]),!1},y=function(e){return i(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),n(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),o(document).unbind("mouseup",y),o(document).unbind("mousemove",b),!1},_=function(e){var r={cal:o(this).parent(),pos:o(this).offset()};r.preview=r.cal.data("colorpicker").livePreview,o(document).bind("mouseup",r,w),o(document).bind("mousemove",r,x)},x=function(e){return u.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,e.pageY-e.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,e.pageX-e.data.pos.left))/150,10)).get(0),[e.data.preview]),!1},w=function(e){return i(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),n(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),o(document).unbind("mouseup",w),o(document).unbind("mousemove",x),!1},C=function(e){o(this).addClass("colorpicker_focus")},M=function(e){o(this).removeClass("colorpicker_focus")},I=function(e){var r=o(this).parent(),t=r.data("colorpicker").color;r.data("colorpicker").origColor=t,d(t,r.get(0)),r.data("colorpicker").onSubmit(t,Y(t),T(t),r.data("colorpicker").el)},q=function(e){var r=o("#"+o(this).data("colorpickerId"));r.data("colorpicker").onBeforeShow.apply(this,[r.get(0)]);var t=o(this).offset(),i=S(),a=t.top+this.offsetHeight,n=t.left;return a+176>i.t+i.h&&(a-=this.offsetHeight+176),n+356>i.l+i.w&&(n-=356),r.css({left:n+"px",top:a+"px"}),0!=r.data("colorpicker").onShow.apply(this,[r.get(0)])&&r.show(),o(document).bind("mousedown",{cal:r},P),!1},P=function(e){N(e.data.cal.get(0),e.target,e.data.cal.get(0))||(0!=e.data.cal.data("colorpicker").onHide.apply(this,[e.data.cal.get(0)])&&e.data.cal.hide(),o(document).unbind("mousedown",P))},N=function(e,o,r){if(e==o)return!0;if(e.contains)return e.contains(o);if(e.compareDocumentPosition)return!!(16&e.compareDocumentPosition(o));for(var t=o.parentNode;t&&t!=r;){if(t==e)return!0;t=t.parentNode}return!1},S=function(){var e="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(e?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(e?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(e?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(e?document.documentElement.clientHeight:document.body.clientHeight)}},O=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},H=function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},z=function(e){var o=6-e.length;if(o>0){for(var r=[],t=0;t<o;t++)r.push("0");r.push(e),e=r.join("")}return e},E=function(e){return j(function(e){return{r:(e=parseInt(e.indexOf("#")>-1?e.substring(1):e,16))>>16,g:(65280&e)>>8,b:255&e}}(e))},j=function(e){var o={h:0,s:0,b:0},r=Math.min(e.r,e.g,e.b),t=Math.max(e.r,e.g,e.b),i=t-r;return o.b=t,o.s=0!=t?255*i/t:0,0!=o.s?e.r==t?o.h=(e.g-e.b)/i:e.g==t?o.h=2+(e.b-e.r)/i:o.h=4+(e.r-e.g)/i:o.h=-1,o.h*=60,o.h<0&&(o.h+=360),o.s*=100/255,o.b*=100/255,o},T=function(e){var o={},r=Math.round(e.h),t=Math.round(255*e.s/100),i=Math.round(255*e.b/100);if(0==t)o.r=o.g=o.b=i;else{var a=i,n=(255-t)*i/255,c=r%60*(a-n)/60;360==r&&(r=0),r<60?(o.r=a,o.b=n,o.g=n+c):r<120?(o.g=a,o.b=n,o.r=a-c):r<180?(o.g=a,o.r=n,o.b=n+c):r<240?(o.b=a,o.r=n,o.g=a-c):r<300?(o.b=a,o.g=n,o.r=n+c):r<360?(o.r=a,o.g=n,o.b=a-c):(o.r=0,o.g=0,o.b=0)}return{r:Math.round(o.r),g:Math.round(o.g),b:Math.round(o.b)}},Y=function(e){return r=T(e),t=[r.r.toString(16),r.g.toString(16),r.b.toString(16)],o.each(t,function(e,o){1==o.length&&(t[e]="0"+o)}),t.join("");var r,t},W=function(){var e=o(this).parent(),r=e.data("colorpicker").origColor;e.data("colorpicker").color=r,i(r,e.get(0)),n(r,e.get(0)),a(r,e.get(0)),c(r,e.get(0)),l(r,e.get(0)),s(r,e.get(0))},{init:function(e){if("string"==typeof(e=o.extend({},t,e||{})).color)e.color=E(e.color);else if(void 0!=e.color.r&&void 0!=e.color.g&&void 0!=e.color.b)e.color=j(e.color);else{if(void 0==e.color.h||void 0==e.color.s||void 0==e.color.b)return this;e.color=O(e.color)}return this.each(function(){if(!o(this).data("colorpickerId")){var r=o.extend({},e);r.origColor=e.color;var t="collorpicker_"+parseInt(1e3*Math.random());o(this).data("colorpickerId",t);var k=o('<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>').attr("id",t);r.flat?k.appendTo(this).show():k.appendTo(document.body),r.fields=k.find("input").bind("keyup",p).bind("change",u).bind("blur",f).bind("focus",h),k.find("span").bind("mousedown",v).end().find(">div.colorpicker_current_color").bind("click",W),r.selector=k.find("div.colorpicker_color").bind("mousedown",_),r.selectorIndic=k.find("div.colorpicker_color div div"),r.el=this,r.hue=k.find("div.colorpicker_hue div"),k.find("div.colorpicker_hue").bind("mousedown",g),r.newColor=k.find("div.colorpicker_new_color"),r.currentColor=k.find("div.colorpicker_current_color"),k.data("colorpicker",r),k.find("div.colorpicker_submit").bind("mouseenter",C).bind("mouseleave",M).bind("click",I),i(r.color,k.get(0)),a(r.color,k.get(0)),n(r.color,k.get(0)),l(r.color,k.get(0)),c(r.color,k.get(0)),d(r.color,k.get(0)),s(r.color,k.get(0)),r.flat?k.css({position:"relative",display:"block"}):o(this).bind(r.eventName,q)}})},showPicker:function(){return this.each(function(){o(this).data("colorpickerId")&&q.apply(this)})},hidePicker:function(){return this.each(function(){o(this).data("colorpickerId")&&o("#"+o(this).data("colorpickerId")).hide()})},setColor:function(e){if("string"==typeof e)e=E(e);else if(void 0!=e.r&&void 0!=e.g&&void 0!=e.b)e=j(e);else{if(void 0==e.h||void 0==e.s||void 0==e.b)return this;e=O(e)}return this.each(function(){if(o(this).data("colorpickerId")){var r=o("#"+o(this).data("colorpickerId"));r.data("colorpicker").color=e,r.data("colorpicker").origColor=e,i(e,r.get(0)),a(e,r.get(0)),n(e,r.get(0)),l(e,r.get(0)),c(e,r.get(0)),d(e,r.get(0)),s(e,r.get(0))}})}});return o.fn.extend({ColorPicker:B.init,ColorPickerHide:B.hidePicker,ColorPickerShow:B.showPicker,ColorPickerSetColor:B.setColor}),o}),e("skylark-eyecon-colorpicker/main",["./colorpicker"],function(e){return e}),e("skylark-eyecon-colorpicker",["skylark-eyecon-colorpicker/main"],function(e){return e})}(r),!t){var n=require("skylark-langx/skylark");i?module.exports=n:o.skylarkjs=n}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-eyecon-colorpicker.js.map
