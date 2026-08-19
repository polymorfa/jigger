__d("LSMediaUrlAttachment", ["I64", "LSMediaUrlUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		var t = e.previewUrlExpirationTimestampMs;
		return t != null && o("LSMediaUrlUtils").isTimestampExpired(t) ? e.previewUrlFallback : e.previewUrl;
	}
	function u(e) {
		var t = e.previewUrlExpirationTimestampMs;
		return t != null && o("LSMediaUrlUtils").isTimestampExpired(t) ? e.previewUrlFallback : e.previewUrlLarge;
	}
	function c(e) {
		var t = e.playableUrlExpirationTimestampMs;
		return t != null && o("LSMediaUrlUtils").isTimestampExpired(t) ? e.playableUrlFallback : e.playableUrl;
	}
	function d(e) {
		var t = e.imageUrlExpirationTimestampMs;
		return t != null && o("LSMediaUrlUtils").isTimestampExpired(t) ? e.imageUrlFallback : e.imageUrl;
	}
	function m(e) {
		var t = e.faviconUrlExpirationTimestampMs;
		return t != null && o("LSMediaUrlUtils").isTimestampExpired(t) ? e.faviconUrlFallback : e.faviconUrl;
	}
	function p(t) {
		try {
			var n = t.listItemContactUrlExpirationTimestampList1;
			return n != null && o("LSMediaUrlUtils").isTimestampExpired((e || (e = o("I64"))).of_string(n)) ? t.listItemContactUrlFallbackList1 : t.listItemContactUrlList1;
		} catch (e) {
			return t.listItemContactUrlList1;
		}
	}
	function _(t) {
		try {
			var n = t.listItemContactUrlExpirationTimestampList2;
			return n != null && o("LSMediaUrlUtils").isTimestampExpired((e || (e = o("I64"))).of_string(n)) ? t.listItemContactUrlFallbackList2 : t.listItemContactUrlList2;
		} catch (e) {
			return t.listItemContactUrlList2;
		}
	}
	function f(t) {
		try {
			var n = t.listItemContactUrlExpirationTimestampList3;
			return n != null && o("LSMediaUrlUtils").isTimestampExpired((e || (e = o("I64"))).of_string(n)) ? t.listItemContactUrlFallbackList3 : t.listItemContactUrlList3;
		} catch (e) {
			return t.listItemContactUrlList3;
		}
	}
	function g(e) {
		var t = e.headerImageUrlExpirationTimestampMs;
		return t != null && o("LSMediaUrlUtils").isTimestampExpired(t) ? e.headerImageUrlFallback : e.headerImageUrl;
	}
	function h(t) {
		try {
			var n = t.listItemProfilePictureUrlExpirationTimestamp1;
			return n != null && o("LSMediaUrlUtils").isTimestampExpired((e || (e = o("I64"))).of_string(n)) ? t.listItemProfilePictureUrlFallback1 : t.listItemProfilePictureUrl1;
		} catch (e) {
			return t.listItemProfilePictureUrl1;
		}
	}
	function y(t) {
		try {
			var n = t.listItemProfilePictureUrlExpirationTimestamp2;
			return n != null && o("LSMediaUrlUtils").isTimestampExpired((e || (e = o("I64"))).of_string(n)) ? t.listItemProfilePictureUrlFallback2 : t.listItemProfilePictureUrl2;
		} catch (e) {
			return t.listItemProfilePictureUrl2;
		}
	}
	function C(t) {
		try {
			var n = t.listItemProfilePictureUrlExpirationTimestamp3;
			return n != null && o("LSMediaUrlUtils").isTimestampExpired((e || (e = o("I64"))).of_string(n)) ? t.listItemProfilePictureUrlFallback3 : t.listItemProfilePictureUrl3;
		} catch (e) {
			return t.listItemProfilePictureUrl3;
		}
	}
	l.previewUrl = s, l.previewUrlLarge = u, l.playableUrl = c, l.imageUrl = d, l.faviconUrl = m, l.listItemContactUrlList1 = p, l.listItemContactUrlList2 = _, l.listItemContactUrlList3 = f, l.headerImageUrl = g, l.listItemProfilePictureUrl1 = h, l.listItemProfilePictureUrl2 = y, l.listItemProfilePictureUrl3 = C;
}), 98);
