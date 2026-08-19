__d("MWChatFileStatusIcon.react", [
	"fbt",
	"MWChatFileIconV2.react",
	"MWXCircleButton.react",
	"MWXIconExclamationMarkCircle",
	"MWXIconRefreshAlt",
	"MWXIconStrict.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.isError, a = e.isRetryableError, i = e.onRetry;
		if (n === !0) {
			var l, c;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x1g0dm76" }, c = { className: "x6s0dn4 xgx9qek x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x10w6t97 xl56j7k x1td3qas" }, t[0] = l, t[1] = c) : (l = t[0], c = t[1]);
			var d;
			return t[2] !== a || t[3] !== i ? (d = u.jsx("div", babelHelpers.extends({}, l, { children: u.jsx("div", babelHelpers.extends({}, c, { children: a === !0 ? u.jsx(r("MWXCircleButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				color: "primary",
				icon: r("MWXIconRefreshAlt"),
				onPress: i,
				size: 32,
				testid: void 0,
				type: "normal"
			}) : u.jsx("div", {
				"data-testid": void 0,
				children: u.jsx(r("MWXIconStrict.react"), {
					color: "primary",
					icon: r("MWXIconExclamationMarkCircle"),
					isDecorative: !0,
					size: 20
				})
			}) })) })), t[2] = a, t[3] = i, t[4] = d) : d = t[4], d;
		}
		var m;
		return t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx("div", {
			className: "x1g0dm76",
			children: u.jsx(r("MWChatFileIconV2.react"), {})
		}), t[5] = m) : m = t[5], m;
	}
	l.default = c;
}), 226);
