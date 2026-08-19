__d("WAWebMessageLoadingMedia.react", [
	"WATimeUtils",
	"WAWebBotTypes",
	"WAWebMediaGenerationFailedContent.react",
	"WAWebMediaHubLoadingSkeletons.react",
	"WAWebMessageCropping",
	"WAWebMsgGetters",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = o("WATimeUtils").MINUTE_SECONDS * 2;
	function c(e) {
		return e === "loading_image" ? o("WAWebMessageCropping").DEFAULT_HEIGHT_PICTURE : o("WAWebMessageCropping").DEFAULT_HEIGHT_VIDEO;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(7), n = e.msg, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [o("WAWebMsgGetters").getBotEditType, o("WAWebMsgGetters").getT], t[0] = r) : r = t[0];
		var a = o("useWAWebMsgValues").useMsgValues(n.id, r), i = a[0], l = a[1], d = o("WATimeUtils").unixTime(), p = i === o("WAWebBotTypes").BotMsgEditType.LAST || d - l > u;
		if (p) {
			var _;
			return t[1] !== n.subtype ? (_ = s.jsx(m, { subtype: n.subtype }), t[1] = n.subtype, t[2] = _) : _ = t[2], _;
		}
		var f;
		t[3] !== n.subtype ? (f = c(n.subtype), t[3] = n.subtype, t[4] = f) : f = t[4];
		var g;
		return t[5] !== f ? (g = s.jsx("div", { children: s.jsx(o("WAWebMediaHubLoadingSkeletons.react").WAWebMediaHubLoadingText, {
			width: o("WAWebMessageCropping").DEFAULT_WIDTH,
			height: f
		}) }), t[5] = f, t[6] = g) : g = t[6], g;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(9), n = e.subtype, a;
		t[0] !== n ? (a = c(n), t[0] = n, t[1] = a) : a = t[1];
		var i = a + "px", l;
		t[2] !== i ? (l = {
			width: o("WAWebMessageCropping").DEFAULT_WIDTH + "px",
			height: i
		}, t[2] = i, t[3] = l) : l = t[3];
		var u = l, d = n !== "loading_image", m;
		t[4] !== d ? (m = s.jsx(r("WAWebMediaGenerationFailedContent.react"), { isVideo: d }), t[4] = d, t[5] = m) : m = t[5];
		var p;
		return t[6] !== u || t[7] !== m ? (p = s.jsx("div", {
			style: u,
			children: m
		}), t[6] = u, t[7] = m, t[8] = p) : p = t[8], p;
	}
	l.default = d;
}), 98);
