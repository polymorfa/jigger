__d("createInstamadilloAddMessagePayload", ["I64", "InstamadilloMessageIdUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return t != null ? { ephemeralityParams: { ephemeralDurationSec: (e || (e = o("I64"))).to_int32(t) } } : {};
	}
	function u(t) {
		return t.isForwarded === !0 ? { forwardingParams: { forwardedThreadId: (e || (e = o("I64"))).to_string(t.threadKey) } } : {};
	}
	function c(t) {
		if (t.replySourceId == null && t.replySourceTimestampMs == null) return {};
		function n() {
			return t.replySourceId != null ? { repliedToMessageOtid: o("InstamadilloMessageIdUtils").fromInstamadilloMessageId(t.replySourceId).stanzaId } : {};
		}
		function r() {
			return t.replySourceTimestampMs != null ? { repliedToMessageWaServerTimeSec: (e || (e = o("I64"))).to_string(t.replySourceTimestampMs) } : {};
		}
		return { repliedToMessage: babelHelpers.extends({}, n(), r()) };
	}
	function d(e, t) {
		var n = {
			content: { text: { text: t ? void 0 : e.text } },
			metadata: babelHelpers.extends({}, s(e.ephemeralDurationInSec), u(e), c(e))
		};
		return n;
	}
	function m(e, t) {
		var n = {
			content: { media: t },
			metadata: babelHelpers.extends({}, s(e.ephemeralDurationInSec), u(e), c(e))
		};
		return n;
	}
	function p(e, t) {
		var n = {
			content: { receiverFetchXma: JSON.parse(t) },
			metadata: babelHelpers.extends({}, s(e.ephemeralDurationInSec), u(e), c(e))
		};
		return n;
	}
	l.createInstamadilloAddMessageTextPayload = d, l.createInstamadilloAddMessageMediaPayload = m, l.createInstamadilloAddMessageReceiverFetchXmaPayload = p;
}), 98);
