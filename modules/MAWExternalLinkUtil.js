__d("MAWExternalLinkUtil", [
	"FBLogger",
	"MAWOembedHelper",
	"MAWOembedIframeContainer.react",
	"Promise",
	"asyncToGeneratorRuntime",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = [], u = [
		"image/png",
		"image/jpeg",
		"image/jpg"
	], c = 2e3;
	function d(t) {
		return new (e || (e = (n("Promise"))))(function(e) {
			return r("setTimeout")(e, t);
		});
	}
	function m(t) {
		return (e || (e = n("Promise"))).race([t, d(c)]);
	}
	function p(e) {
		if (e == null) return null;
		var t = null, n = e.find(function(e) {
			return Object.values(S).some(function(n) {
				var r = n.schemes, o = n.url, a = r.some(function(t) {
					return t.test(e.entity.url);
				});
				return a && (t = o), a;
			});
		});
		return n == null || t == null ? null : {
			oEmbedRequest: t + "?url=" + encodeURIComponent(n.entity.url) + "&format=json",
			oEmbedUrl: n.entity.url
		};
	}
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n = e.fallbackUrl, a = e.qplEvent, i = e.request, l = (t = window.frames["maw-intermediate-iframe"]) != null ? t : null;
			if (l == null && (o("MAWOembedIframeContainer.react").createMAWOembedIframeContainer(), window.frames["maw-intermediate-iframe"] == null)) {
				a == null || a.addPoint("get_oembed_response_returned_null", { string: { get_oembed_response_return: "iframe cannot be found." } }), r("FBLogger")("messenger_web_sharing").warn("[external link] Cannot find the iframe to request oembed url response.");
				return;
			}
			try {
				var s = yield m(o("MAWOembedIframeContainer.react").requestUrl(i, o("MAWOembedHelper").MAWOembedIFrameMessageType.OEMBED_REQUEST_URL, l));
				if (s == null || s instanceof Blob) {
					a == null || a.addPoint("get_oembed_response_returned_null", { string: { get_oembed_response_returned_null: "oembedResponse is null or an instance of Blob." } }), r("FBLogger")("messenger_web").warn("[external link] Failed to fetch oEmbed response: expected json response but got blob.");
					return;
				}
				return y({
					fallbackUrl: n,
					rawResponse: s
				});
			} catch (e) {
				a == null || a.addPoint("get_oembed_response_returned_null", { string: { get_oembed_response_returned_null: "Error thrown when trying to fetch oembed response in iframe." } }), r("FBLogger")("messenger_web").warn("[External link] Error thrown when trying to fetch oembed response in iframe.");
				return;
			}
		}), f.apply(this, arguments);
	}
	function g(e) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a, i = t.qplEvent, l = t.xmaData;
			if (l == null) return (e || (e = n("Promise"))).resolve();
			var u = R(l.url), c = u != null && s.includes(u);
			if (c) return (e || (e = n("Promise"))).resolve();
			var d = l == null ? void 0 : l.thumbnail_url;
			if (d == null || !d) return i == null || i.addPoint("get_image_blob_response_returned_null", { string: { get_image_blob_response_returned_null: "url was null or undefined" } }), (e || (e = n("Promise"))).resolve();
			var p = (a = window.frames["maw-intermediate-iframe"]) != null ? a : null;
			if (p == null && (o("MAWOembedIframeContainer.react").createMAWOembedIframeContainer(), window.frames["maw-intermediate-iframe"] == null)) {
				i == null || i.addPoint("get_image_blob_response_returned_null", { string: { get_image_blob_response_returned_null: "iframe cannot be found." } }), r("FBLogger")("messenger_web").warn("[external link] Cannot find the iframe to request image blob response.");
				return;
			}
			var _ = yield m(o("MAWOembedIframeContainer.react").requestUrl(d, o("MAWOembedHelper").MAWOembedIFrameMessageType.THUMBNAIL_URL, p));
			return _ instanceof Blob ? _ : (i == null || i.addPoint("get_image_blob_response_returned_null", { string: { get_image_blob_response_returned_null: "imageBlobResponse is not instance of Blob" } }), r("FBLogger")("messenger_web").warn("[external link] Failed to fetch image blob response. "), (e || (e = n("Promise"))).resolve());
		}), h.apply(this, arguments);
	}
	function y(e) {
		var t, n = e.fallbackUrl, o = e.rawResponse;
		if (o.version !== "1.0") throw r("FBLogger")("messenger_web").mustfixThrow("Unsupported response version from oEmbed API");
		if (o.type === "photo" && o.url == null) throw r("FBLogger")("messenger_web").mustfixThrow("Unsupported response from oEmbed API: photo does not have url field");
		return {
			author_name: o.author_name != null ? decodeURIComponent(o.author_name) : void 0,
			height: o.height,
			thumbnail_height: o.thumbnail_height,
			thumbnail_url: o.thumbnail_url,
			thumbnail_width: o.thumbnail_width,
			title: o.title != null ? decodeURIComponent(o.title) : void 0,
			type: o.type,
			url: (t = o.url) != null ? t : n,
			width: o.width
		};
	}
	function C(e) {
		var t = v.some(function(t) {
			return t.test(e);
		});
		return t ? !0 : Object.values(S).some(function(t) {
			var n = t.url;
			return e.startsWith(n);
		});
	}
	var b = new RegExp("^http(?:s)?:\\/\\/i\\.ytimg\\.com.+$"), v = [
		new RegExp("^http(?:s)?:\\/\\/i1\\.sndcdn\\.com.+$"),
		new RegExp("^http(?:s)?:\\/\\/i\\.scdn\\.co.+$"),
		new RegExp("^http(?:s)?:\\/\\/(?:#!)?[^#?\\/]+\\.cloudfront\\.net.+$"),
		new RegExp("^http(?:s)?:\\/\\/pi\\.tedcdn\\.com.+$"),
		new RegExp("^http(?:s)?:\\/\\/static01\\.nyt\\.com.+$"),
		new RegExp("^http(?:s)?:\\/\\/i\\.vimeocdn\\.com.+$"),
		new RegExp("^http(?:s)?:\\/\\/(?:#!)?[^#?\\/]+\\.tiktokcdn\\.com.+$"),
		b
	], S = {
		NYTimes: {
			discovery: !0,
			schemes: [
				new RegExp("^http(?:s)?:\\/\\/www\\.nytimes\\.com\\/svc\\/oembed$"),
				new RegExp("^http(?:s)?:\\/\\/nytimes\\.com\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?nytimes\\.com\\/.+$")
			],
			url: "https://www.nytimes.com/svc/oembed/json/"
		},
		SoundCloud: {
			schemes: [
				new RegExp("^http(?:s)?:\\/\\/soundcloud\\.com\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/on\\.soundcloud\\.com\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/soundcloud\\.app\\.goog\\.gl\\/.+$")
			],
			url: "https://soundcloud.com/oembed"
		},
		Spotify: {
			discovery: !0,
			schemes: [new RegExp("^http(?:s)?:\\/\\/open\\.spotify\\.com\\/.+$")],
			url: "https://open.spotify.com/oembed"
		},
		Spreaker: {
			discovery: !0,
			schemes: [new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?spreaker\\.com\\/.+$")],
			url: "https://api.spreaker.com/oembed"
		},
		TED: {
			discovery: !0,
			schemes: [new RegExp("^http(?:s)?:\\/\\/ted\\.com\\/talks\\/.+$"), new RegExp("^http(?:s)?:\\/\\/www\\.ted\\.com\\/talks\\/.+$")],
			url: "https://www.ted.com/services/v1/oembed.json"
		},
		TikTok: {
			schemes: [new RegExp("^http(?:s)?:\\/\\/www\\.tiktok\\.com\\/.+$"), new RegExp("^http(?:s)?:\\/\\/www\\.tiktok\\.com\\/(?:#!)?[^#?\\/]+\\/video\\/.+$")],
			url: "https://www.tiktok.com/oembed"
		},
		Vimeo: {
			discovery: !0,
			schemes: [
				new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/album\\/(?:#!)?[^#?\\/]+\\/video\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/channels\\/(?:#!)?[^#?\\/]+\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/groups\\/(?:#!)?[^#?\\/]+\\/video\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/ondemand\\/(?:#!)?[^#?\\/]+\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/player\\.vimeo\\.com\\/video\\/.+$")
			],
			url: "https://vimeo.com/api/oembed.json"
		},
		youtube: {
			discovery: !0,
			schemes: [
				new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?youtube\\.com\\/watch.+$"),
				new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?youtube\\.com\\/v\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/youtu\\.be\\/.+$"),
				new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?youtube\\.com\\/playlist\\?list\\=.+$"),
				new RegExp("^http(?:s)?:\\/\\/youtube\\.com\\/playlist\\?list\\=.+$"),
				new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?youtube\\.com\\/shorts.+$")
			],
			url: "https://www.youtube.com/oembed"
		}
	};
	function R(e) {
		return Object.keys(S).find(function(t) {
			return S[t].schemes.some(function(t) {
				return t.test(e);
			});
		});
	}
	l.allowedPreviewTypes = u, l.findFirstAvailableOembedUrlAndRequestPair = p, l.getOembedResponse = _, l.getImageBlobResponse = g, l.isAllowedRequestForFbsbx = C;
}), 98);
