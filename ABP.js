window.document.getElementById("h237").parentNode.removeChild(window.document.getElementById("h237")),function(e,t){function n(e){e&&h237.nextFunction()}var a=e.document,d=["i","s","u"];n.prototype={rand:function(e){return Math.floor(Math.random()*e)},getElementBy:function(e,t){return e?a.getElementById(e):a.getElementsByTagName(t)},getStyle:function(e){var t=a.defaultView;return t&&t.getComputedStyle?t.getComputedStyle(e,null):e.currentStyle},deferExecution:function(e){setTimeout(e,250)},insert:function(e,t){var n=a.createElement("span"),d=a.body,i=d.childNodes.length,o=d.style,r=0,s=0;if("h237"==t){for(n.setAttribute("id",t),o.margin=o.padding=0,o.height="100%",i=this.rand(i);i>r;r++)1==d.childNodes[r].nodeType&&(s=Math.max(s,parseFloat(this.getStyle(d.childNodes[r]).zIndex)||0));s&&(n.style.zIndex=s+1),i++}n.innerHTML=e,d.insertBefore(n,d.childNodes[i-1])},displayMessage:function(e){var t=this;e="abisuq".charAt(t.rand(5)),t.insert("<"+e+'><img src="https://1.bp.blogspot.com/-hwoQRoL5lSQ/XpLphfcCLYI/AAAAAAAAAKI/HwFioLUyuQQ3Dzp5_Z7GZqd-dF_kEz0UQCLcBGAsYHQ/s1600/ABP.png" height="350" width="700" alt="Stop-AdBlock" /> <a href="JavaScript:window.location.reload()">[ Reload ...!!! ]</a>'+("</"+e+">"),"h237"),a.addEventListener&&t.deferExecution(function(){t.getElementBy("h237").addEventListener("DOMNodeRemoved",function(){t.displayMessage()},!1)})},i:function(){for(var e="DivTopAd,ad-zone-1,ad_190x90,ads-sticky,iqadtile5,leftframeAD,tobsideAd,ad,ads,adsense".split(","),t=e.length,n="",a=this,d=0,i="abisuq".charAt(a.rand(5));t>d;d++)a.getElementBy(e[d])||(n+="<"+i+' id="'+e[d]+'"></'+i+">");a.insert(n),a.deferExecution(function(){for(d=0;t>d;d++)if(null==a.getElementBy(e[d]).offsetParent||"none"==a.getStyle(a.getElementBy(e[d])).display)return a.displayMessage("#"+e[d]+"("+d+")");a.nextFunction()})},s:function(){var n,d,i,o,r={"pagead2.googlesyndic":"google_ad_client","js.adscale.de/getads":"adscale_slot_id","get.mirando.de/miran":"adPlaceId"},s=this,l=s.getElementBy(0,"script"),c=l.length-1;for(a.write=null,a.writeln=null;c>=0;--c)if(n=l[c].src.substr(7,20),r[n]!==t)return i=a.createElement("script"),i.type="text/javascript",i.src=l[c].src,d=r[n],e[d]=t,i.onload=i.onreadystatechange=function(){o=this,e[d]!==t||o.readyState&&"loaded"!==o.readyState&&"complete"!==o.readyState||(e[d]=i.onload=i.onreadystatechange=null,l[0].parentNode.removeChild(i))},l[0].parentNode.insertBefore(i,l[0]),void s.deferExecution(function(){return e[d]===t?s.displayMessage(i.src):void s.nextFunction()});s.nextFunction()},u:function(){var e,n,a="ad&adv_keywords=,-page-peel/,/adchain.,/adfootright.,/adsxml/ad,/adyard300.,/impopup/ad,/loadadsparam.,/meme_ad.,_adshare.".split(","),i=this,o=i.getElementBy(0,"img");o[0]!==t&&o[0].src!==t&&(e=new Image,e.onload=function(){n=this,n.onload=null,n.onerror=function(){d=null,i.displayMessage(n.src)},n.src=o[0].src+"#"+a.join("")},e.src=o[0].src),i.deferExecution(function(){i.nextFunction()})},nextFunction:function(){var e=d[0];e!==t&&(d.shift(),this[e]())}},e.h237=h237=new n,a.addEventListener?e.addEventListener("load",n,!1):e.attachEvent("onload",n)}(window);