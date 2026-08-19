__d("MAWSecureViewOnceMessageBubble.react", [
	"MWViewOnceMessageIcon",
	"MWXIconStrict.react",
	"MWXMessageBubble.react",
	"MWXText.react",
	"MessengerWebUXLogger",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(21), n = e.connectBottom, a = e.connectTop, i = e.label, l = e.mediaRenderQpl, c = e.outgoing, d, m;
		t[0] !== l ? (d = function() {
			l == null || l.addPoint("render-tombstoned-message", { bool: { outgoing_or_has_seen: !0 } }), l == null || l.endSuccessAfterDelay();
		}, m = [l], t[0] = l, t[1] = d, t[2] = m) : (d = t[1], m = t[2]), u(d, m);
		var p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = { eventName: "view_once_message_bubble_rendered" }, t[3] = p) : p = t[3];
		var _ = r("MessengerWebUXLogger").useImpressionLoggerRef(p), f = c ? "right" : "left", g = c ? "outgoing" : "incoming", h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "x6s0dn4 x78zum5" }, t[4] = h) : h = t[4];
		var y;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x1lliihq xbelrpt xbyyjgo" }, t[5] = y) : y = t[5];
		var C = c ? "white" : "primary", b;
		t[6] !== C ? (b = s.jsx("div", babelHelpers.extends({}, y, { children: s.jsx(r("MWXIconStrict.react"), {
			color: C,
			icon: r("MWViewOnceMessageIcon"),
			isDecorative: !0,
			size: 18
		}) })), t[6] = C, t[7] = b) : b = t[7];
		var v = c ? "secondaryOnMedia" : "secondary", S;
		t[8] !== i || t[9] !== v ? (S = s.jsx(r("MWXText.react"), {
			color: v,
			type: "bodyLink3",
			children: i
		}), t[8] = i, t[9] = v, t[10] = S) : S = t[10];
		var R;
		t[11] !== _ || t[12] !== S || t[13] !== b ? (R = s.jsxs("div", babelHelpers.extends({}, h, {
			"data-testid": void 0,
			ref: _,
			children: [b, S]
		})), t[11] = _, t[12] = S, t[13] = b, t[14] = R) : R = t[14];
		var L;
		return t[15] !== n || t[16] !== a || t[17] !== R || t[18] !== f || t[19] !== g ? (L = s.jsx(r("MWXMessageBubble.react"), {
			align: f,
			color: g,
			connectBottom: n,
			connectTop: a,
			variant: "opaque",
			children: R
		}), t[15] = n, t[16] = a, t[17] = R, t[18] = f, t[19] = g, t[20] = L) : L = t[20], L;
	}
	l.default = c;
}), 98);
