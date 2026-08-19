__d("MAWOembedIframeContainer.react", [
	"ConstUriUtils",
	"CookieConsentIFrameConfig",
	"FBLogger",
	"MAWOembedHelper",
	"Promise",
	"SecureMessageListener",
	"SecurePostMessage",
	"WAResolvable",
	"XFBSbxMAWProxyPageControllerRouteBuilder"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		return "https://www.fbsbx.com";
	}
	var u = new Map(), c = null;
	function d(t, a, i) {
		var l = u.get(t);
		if (l != null) return l.promise;
		var s = f();
		if (s == null) return (e || (e = n("Promise"))).resolve();
		r("SecurePostMessage").sendMessageToSpecificOrigin(i.contentWindow, {
			requestMessageType: a,
			requestURL: t
		}, s);
		var c = new (o("WAResolvable")).Resolvable();
		return u.set(t, c), c.promise;
	}
	function m(e) {
		if (e == null || typeof e != "object") return null;
		var t = e.url, n = e.value, a = e.type;
		if (t == null || n == null || a == null || typeof a != "string") return null;
		var i = o("MAWOembedHelper").MAWOembedIFrameMessageType.cast(a);
		if (typeof t == "string" && i != null) {
			if (i === o("MAWOembedHelper").MAWOembedIFrameMessageType.THUMBNAIL_URL && n instanceof Blob) return {
				type: o("MAWOembedHelper").MAWOembedIFrameMessageType.THUMBNAIL_URL,
				url: t,
				value: n
			};
			if (i === o("MAWOembedHelper").MAWOembedIFrameMessageType.OEMBED_REQUEST_URL && typeof n == "object" && n.title != null && n.thumbnail_url != null) {
				var l = {
					author_name: typeof n.author_name == "string" ? n.author_name : void 0,
					height: typeof n.height == "number" ? n == null ? void 0 : n.height : 150,
					thumbnail_height: typeof n.thumbnail_height == "number" ? n.thumbnail_height : void 0,
					thumbnail_url: typeof n.thumbnail_url == "string" ? n.thumbnail_url : void 0,
					thumbnail_width: typeof n.thumbnail_width == "number" ? n.thumbnail_width : void 0,
					title: typeof n.title == "string" ? n.title : void 0,
					type: typeof n.type == "string" ? n.type : "photo",
					version: typeof n.version == "string" ? n.version : "1.0",
					width: typeof n.width == "number" ? n.width : 200
				};
				return {
					type: o("MAWOembedHelper").MAWOembedIFrameMessageType.OEMBED_REQUEST_URL,
					url: t,
					value: l
				};
			}
		}
		return r("FBLogger")("messenger_web").warn("Failed to handle message %s from fbsbx: cannot process event message in the correct format", a), null;
	}
	var p = function(t) {
		var e = m(t.data);
		if (e != null) {
			var n = e.url, o = e.value, a = u.get(n);
			if (a == null) {
				r("FBLogger")("messenger_web").warn("Failed to handle message from fbsbx: cannot find the resolvable promise for the url");
				return;
			}
			a.resolve(o);
		}
	};
	function _() {
		var e, t, n = (e = window.frames["maw-intermediate-iframe"]) != null ? e : null, o = f();
		if (n != null) {
			var a;
			return (a = c) == null || a.beginListening(), c;
		}
		if (o == null) {
			r("FBLogger")("messenger_web").warn("Failed to create maw-intermediate-iframe iFrame: cannot find the fbsbxUri");
			return;
		}
		var i = document.createElement("iframe");
		return i.style.display = "none", i.className = "MAWOembedIframe", i.id = "maw-intermediate-iframe", i.src = o, (t = document.body) == null || t.appendChild(i), c = new (r("SecureMessageListener"))(window).setEventHandler(p).setSupportedOrigins(["fbsbx.com"]), c.beginListening(), c;
	}
	function f() {
		var e, t;
		return (e = r("XFBSbxMAWProxyPageControllerRouteBuilder").buildUri({ __cci: (t = r("CookieConsentIFrameConfig").consent_param) != null ? t : "" }).qualifyDomain(o("ConstUriUtils").getUri(s()))) == null ? void 0 : e.toString();
	}
	l.requestUrl = d, l.createMAWOembedIframeContainer = _;
}), 98);
