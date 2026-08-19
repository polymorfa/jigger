__d("MpsReceiverFetchCache", [
	"FBLogger",
	"MpsReceiverFetchGraphQL",
	"WATimeUtils",
	"WmiMediaService",
	"WmiMediaServiceSchema",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 259200, s = 60;
	function u(e) {
		return e;
	}
	function c(e) {
		return Math.floor(e / 1e3);
	}
	function d() {
		return o("WATimeUtils").unixTime() + e;
	}
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("MpsReceiverFetchGraphQL").fetchXMAReceiverFetchInfoFromGraphQL(e, t);
			return n == null ? null : (yield o("WmiMediaService").mediaService().upsertReceiverFetchInfo({
				expirationTimestampSec: d(),
				rawData: JSON.stringify(n),
				receiverFetchId: e,
				receiverFetchType: o("WmiMediaServiceSchema").ReceiverFetchType.XMA
			}), n);
		}), p.apply(this, arguments);
	}
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("MpsReceiverFetchGraphQL").fetchStickerReceiverFetchInfoFromGraphQL(e);
			if (t == null) return null;
			var n = c(t.rawData.previewUrlExpirationTimestampMs), r = n - s;
			return yield o("WmiMediaService").mediaService().upsertReceiverFetchInfo({
				expirationTimestampSec: r,
				rawData: JSON.stringify(t.rawData),
				receiverFetchId: t.receiverFetchId,
				receiverFetchType: o("WmiMediaServiceSchema").ReceiverFetchType.Sticker
			}), t.rawData;
		}), f.apply(this, arguments);
	}
	function g(e) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = yield o("WmiMediaService").mediaService().getReceiverFetchInfo(e);
				return t == null || t.receiverFetchType !== o("WmiMediaServiceSchema").ReceiverFetchType.XMA || t.expirationTimestampSec == null || t.expirationTimestampSec <= o("WATimeUtils").unixTime() ? null : JSON.parse(t.rawData);
			} catch (e) {
				return r("FBLogger")("maw_receiver_fetch").catching(r("getErrorSafe")(e)).warn("Failed to read cached XMA receiver fetch info"), null;
			}
		}), h.apply(this, arguments);
	}
	function y(e) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = yield o("WmiMediaService").mediaService().getReceiverFetchInfo(e);
				return t == null || t.receiverFetchType !== o("WmiMediaServiceSchema").ReceiverFetchType.Sticker || t.expirationTimestampSec == null || t.expirationTimestampSec <= o("WATimeUtils").unixTime() ? null : JSON.parse(t.rawData);
			} catch (e) {
				return r("FBLogger")("messenger_web_media").catching(r("getErrorSafe")(e)).warn("Failed to read cached sticker receiver fetch info"), null;
			}
		}), C.apply(this, arguments);
	}
	function b(e, t) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n;
			return (n = yield g(e)) != null ? n : yield m(e, t);
		}), v.apply(this, arguments);
	}
	function S(e) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t;
			return (t = yield y(e)) != null ? t : yield _(e);
		}), R.apply(this, arguments);
	}
	l.asReceiverFetchId = u, l.fetchXMAReceiverFetchInfo = m, l.fetchStickerReceiverFetchInfo = _, l.maybeGetCachedXMAReceiverFetchInfo = g, l.maybeGetCachedStickerReceiverFetchInfo = y, l.getOrFetchXMAReceiverFetchInfo = b, l.getOrFetchStickerReceiverFetchInfo = S;
}), 98);
