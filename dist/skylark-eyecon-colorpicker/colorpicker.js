/**
 * skylark-eyecon-colorpicker - A version of eyecon color picker that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-eyecon-colorpicker/
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-jquery"],function(e,o){var t,r,i,a,c,n,l,d,s,p,u,h,f,v,m,k,g,b,_,x,w,y,C,M,I,q,P,N,S,H,O,z,Y,E,T,j,W,B=(t=65,r={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},i=function(e,t){var r=T(e);o(t).data("colorpicker").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()},a=function(e,t){o(t).data("colorpicker").fields.eq(4).val(e.h).end().eq(5).val(e.s).end().eq(6).val(e.b).end()},c=function(e,t){o(t).data("colorpicker").fields.eq(0).val(j(e)).end()},n=function(e,t){o(t).data("colorpicker").selector.css("backgroundColor","#"+j({h:e.h,s:100,b:100})),o(t).data("colorpicker").selectorIndic.css({left:parseInt(150*e.s/100,10),top:parseInt(150*(100-e.b)/100,10)})},l=function(e,t){o(t).data("colorpicker").hue.css("top",parseInt(150-150*e.h/360,10))},d=function(e,t){o(t).data("colorpicker").currentColor.css("backgroundColor","#"+j(e))},s=function(e,t){o(t).data("colorpicker").newColor.css("backgroundColor","#"+j(e))},p=function(e){var r=e.charCode||e.keyCode||-1;if(r>t&&r<=90||32==r)return!1;!0===o(this).parent().parent().data("colorpicker").livePreview&&u.apply(this)},u=function(e){var t,r=o(this).parent().parent();this.parentNode.className.indexOf("_hex")>0?r.data("colorpicker").color=t=Y(z(this.value)):this.parentNode.className.indexOf("_hsb")>0?r.data("colorpicker").color=t=H({h:parseInt(r.data("colorpicker").fields.eq(4).val(),10),s:parseInt(r.data("colorpicker").fields.eq(5).val(),10),b:parseInt(r.data("colorpicker").fields.eq(6).val(),10)}):r.data("colorpicker").color=t=E(O({r:parseInt(r.data("colorpicker").fields.eq(1).val(),10),g:parseInt(r.data("colorpicker").fields.eq(2).val(),10),b:parseInt(r.data("colorpicker").fields.eq(3).val(),10)})),e&&(i(t,r.get(0)),c(t,r.get(0)),a(t,r.get(0))),n(t,r.get(0)),l(t,r.get(0)),s(t,r.get(0)),r.data("colorpicker").onChange.apply(r,[t,j(t),T(t)])},h=function(e){o(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")},f=function(){t=this.parentNode.className.indexOf("_hex")>0?70:65,o(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"),o(this).parent().addClass("colorpicker_focus")},v=function(e){var t=o(this).parent().find("input").focus(),r={el:o(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:e.pageY,field:t,val:parseInt(t.val(),10),preview:o(this).parent().parent().data("colorpicker").livePreview};o(document).bind("mouseup",r,k),o(document).bind("mousemove",r,m)},m=function(e){return e.data.field.val(Math.max(0,Math.min(e.data.max,parseInt(e.data.val+e.pageY-e.data.y,10)))),e.data.preview&&u.apply(e.data.field.get(0),[!0]),!1},k=function(e){return u.apply(e.data.field.get(0),[!0]),e.data.el.removeClass("colorpicker_slider").find("input").focus(),o(document).unbind("mouseup",k),o(document).unbind("mousemove",m),!1},g=function(e){var t={cal:o(this).parent(),y:o(this).offset().top};t.preview=t.cal.data("colorpicker").livePreview,o(document).bind("mouseup",t,_),o(document).bind("mousemove",t,b)},b=function(e){return u.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,e.pageY-e.data.y)))/150,10)).get(0),[e.data.preview]),!1},_=function(e){return i(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),c(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),o(document).unbind("mouseup",_),o(document).unbind("mousemove",b),!1},x=function(e){var t={cal:o(this).parent(),pos:o(this).offset()};t.preview=t.cal.data("colorpicker").livePreview,o(document).bind("mouseup",t,y),o(document).bind("mousemove",t,w)},w=function(e){return u.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,e.pageY-e.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,e.pageX-e.data.pos.left))/150,10)).get(0),[e.data.preview]),!1},y=function(e){return i(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),c(e.data.cal.data("colorpicker").color,e.data.cal.get(0)),o(document).unbind("mouseup",y),o(document).unbind("mousemove",w),!1},C=function(e){o(this).addClass("colorpicker_focus")},M=function(e){o(this).removeClass("colorpicker_focus")},I=function(e){var t=o(this).parent(),r=t.data("colorpicker").color;t.data("colorpicker").origColor=r,d(r,t.get(0)),t.data("colorpicker").onSubmit(r,j(r),T(r),t.data("colorpicker").el)},q=function(e){var t=o("#"+o(this).data("colorpickerId"));t.data("colorpicker").onBeforeShow.apply(this,[t.get(0)]);var r=o(this).offset(),i=S(),a=r.top+this.offsetHeight,c=r.left;return a+176>i.t+i.h&&(a-=this.offsetHeight+176),c+356>i.l+i.w&&(c-=356),t.css({left:c+"px",top:a+"px"}),0!=t.data("colorpicker").onShow.apply(this,[t.get(0)])&&t.show(),o(document).bind("mousedown",{cal:t},P),!1},P=function(e){N(e.data.cal.get(0),e.target,e.data.cal.get(0))||(0!=e.data.cal.data("colorpicker").onHide.apply(this,[e.data.cal.get(0)])&&e.data.cal.hide(),o(document).unbind("mousedown",P))},N=function(e,o,t){if(e==o)return!0;if(e.contains)return e.contains(o);if(e.compareDocumentPosition)return!!(16&e.compareDocumentPosition(o));for(var r=o.parentNode;r&&r!=t;){if(r==e)return!0;r=r.parentNode}return!1},S=function(){var e="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(e?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(e?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(e?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(e?document.documentElement.clientHeight:document.body.clientHeight)}},H=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},O=function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},z=function(e){var o=6-e.length;if(o>0){for(var t=[],r=0;r<o;r++)t.push("0");t.push(e),e=t.join("")}return e},Y=function(e){return E(function(e){return{r:(e=parseInt(e.indexOf("#")>-1?e.substring(1):e,16))>>16,g:(65280&e)>>8,b:255&e}}(e))},E=function(e){var o={h:0,s:0,b:0},t=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),i=r-t;return o.b=r,o.s=0!=r?255*i/r:0,0!=o.s?e.r==r?o.h=(e.g-e.b)/i:e.g==r?o.h=2+(e.b-e.r)/i:o.h=4+(e.r-e.g)/i:o.h=-1,o.h*=60,o.h<0&&(o.h+=360),o.s*=100/255,o.b*=100/255,o},T=function(e){var o={},t=Math.round(e.h),r=Math.round(255*e.s/100),i=Math.round(255*e.b/100);if(0==r)o.r=o.g=o.b=i;else{var a=i,c=(255-r)*i/255,n=t%60*(a-c)/60;360==t&&(t=0),t<60?(o.r=a,o.b=c,o.g=c+n):t<120?(o.g=a,o.b=c,o.r=a-n):t<180?(o.g=a,o.r=c,o.b=c+n):t<240?(o.b=a,o.r=c,o.g=a-n):t<300?(o.b=a,o.g=c,o.r=c+n):t<360?(o.r=a,o.g=c,o.b=a-n):(o.r=0,o.g=0,o.b=0)}return{r:Math.round(o.r),g:Math.round(o.g),b:Math.round(o.b)}},j=function(e){return t=T(e),r=[t.r.toString(16),t.g.toString(16),t.b.toString(16)],o.each(r,function(e,o){1==o.length&&(r[e]="0"+o)}),r.join("");var t,r},W=function(){var e=o(this).parent(),t=e.data("colorpicker").origColor;e.data("colorpicker").color=t,i(t,e.get(0)),c(t,e.get(0)),a(t,e.get(0)),n(t,e.get(0)),l(t,e.get(0)),s(t,e.get(0))},{init:function(e){if("string"==typeof(e=o.extend({},r,e||{})).color)e.color=Y(e.color);else if(void 0!=e.color.r&&void 0!=e.color.g&&void 0!=e.color.b)e.color=E(e.color);else{if(void 0==e.color.h||void 0==e.color.s||void 0==e.color.b)return this;e.color=H(e.color)}return this.each(function(){if(!o(this).data("colorpickerId")){var t=o.extend({},e);t.origColor=e.color;var r="collorpicker_"+parseInt(1e3*Math.random());o(this).data("colorpickerId",r);var m=o('<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>').attr("id",r);t.flat?m.appendTo(this).show():m.appendTo(document.body),t.fields=m.find("input").bind("keyup",p).bind("change",u).bind("blur",h).bind("focus",f),m.find("span").bind("mousedown",v).end().find(">div.colorpicker_current_color").bind("click",W),t.selector=m.find("div.colorpicker_color").bind("mousedown",x),t.selectorIndic=m.find("div.colorpicker_color div div"),t.el=this,t.hue=m.find("div.colorpicker_hue div"),m.find("div.colorpicker_hue").bind("mousedown",g),t.newColor=m.find("div.colorpicker_new_color"),t.currentColor=m.find("div.colorpicker_current_color"),m.data("colorpicker",t),m.find("div.colorpicker_submit").bind("mouseenter",C).bind("mouseleave",M).bind("click",I),i(t.color,m.get(0)),a(t.color,m.get(0)),c(t.color,m.get(0)),l(t.color,m.get(0)),n(t.color,m.get(0)),d(t.color,m.get(0)),s(t.color,m.get(0)),t.flat?m.css({position:"relative",display:"block"}):o(this).bind(t.eventName,q)}})},showPicker:function(){return this.each(function(){o(this).data("colorpickerId")&&q.apply(this)})},hidePicker:function(){return this.each(function(){o(this).data("colorpickerId")&&o("#"+o(this).data("colorpickerId")).hide()})},setColor:function(e){if("string"==typeof e)e=Y(e);else if(void 0!=e.r&&void 0!=e.g&&void 0!=e.b)e=E(e);else{if(void 0==e.h||void 0==e.s||void 0==e.b)return this;e=H(e)}return this.each(function(){if(o(this).data("colorpickerId")){var t=o("#"+o(this).data("colorpickerId"));t.data("colorpicker").color=e,t.data("colorpicker").origColor=e,i(e,t.get(0)),a(e,t.get(0)),c(e,t.get(0)),l(e,t.get(0)),n(e,t.get(0)),d(e,t.get(0)),s(e,t.get(0))}})}});return o.fn.extend({ColorPicker:B.init,ColorPickerHide:B.hidePicker,ColorPickerShow:B.showPicker,ColorPickerSetColor:B.setColor}),o});
//# sourceMappingURL=sourcemaps/colorpicker.js.map