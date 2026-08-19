__d("MWPMessageParsingUtils", [
	"I64",
	"LSBitFlag",
	"LSIntEnum",
	"LSMessageReplySourceTypeV2",
	"MWPMessageHasXMA",
	"MWUnvaultedText",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 280, c = 3e5;
	function d(e) {
		return !r("isStringNullOrEmpty")(e.text);
	}
	function m(t) {
		var n = t.replySourceTypeV2;
		return n == null ? !1 : !(e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").FORWARD));
	}
	function p(t) {
		var n = t.replySourceTypeV2;
		return n == null ? !1 : (e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").FORWARD));
	}
	function _(e) {
		var t = e.text;
		return t = o("MWUnvaultedText").getMWUnvaultedText(!1, t), (t != null ? t : "").length > u;
	}
	var f = [
		128,
		256,
		65536,
		131072,
		262144,
		524288,
		4294967296,
		1048576,
		2097152,
		4194304,
		8388608,
		16777216,
		33554432,
		67108864,
		1073741824,
		4096,
		512
	].filter(Boolean);
	function g(e) {
		return e.isAdminMessage || f.some(function(t) {
			return o("LSBitFlag").has((s || (s = o("LSIntEnum"))).ofNumber(t), e.displayedContentTypes);
		}) || _(e);
	}
	function h(e, t) {
		return r("MWPMessageHasXMA")(e) && r("MWPMessageHasXMA")(t);
	}
	function y(e, t) {
		return e.botResponseId != null && t.botResponseId != null && e.botResponseId === t.botResponseId;
	}
	function C(t, n) {
		if (n === void 0) return !0;
		var r = Math.abs((e || (e = o("I64"))).to_float(t.timestampMs) - e.to_float(n.timestampMs)) > c, a = p(t), i = e.equal(t.senderId, n.senderId);
		return n.isUnsent || t.isUnsent || n.isExpired || h(n, t) && !y(n, t) || t.isExpired || m(t) || !i || r || a || g(t) ? !0 : g(n);
	}
	function b(e, t) {
		return t == null || C(e, t);
	}
	function v(e, t) {
		return t == null || C(t, e);
	}
	function S(e, t, n) {
		return n === "below" ? d(e) ? !0 : !b(e, t) : !1;
	}
	function R(e, t, n) {
		return n === "below" ? !v(e, t) : v(e, t) ? !1 : d(e);
	}
	var L = {
		shouldConnectBottom: R,
		shouldConnectTop: S
	};
	l.hasText = d, l.isForwarded = p, l.isInDifferentGroup = C, l.isStartOfGroup = b, l.isEndOfGroup = v, l.MessageWithAttachments = L;
}), 98);
