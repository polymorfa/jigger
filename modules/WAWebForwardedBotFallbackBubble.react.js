__d("WAWebForwardedBotFallbackBubble.react", [
	"fbt",
	"WAWebMessagePlaceholder.react",
	"WAWebMessageTextBubble.react",
	"WDSIconIcMessageReport.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = o("react-compiler-runtime").c(22), n = e.displayAuthor, a = e.displayType, i = e.mode, l = e.msg, c = e.onDownloadClick, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[0] = d) : d = t[0];
		var m = d, p;
		t[1] !== c ? (p = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), c());
		}, t[1] = c, t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(r("WDSIconIcMessageReport.react"), {}), t[3] = f) : f = t[3];
		var g;
		t[4] !== l ? (g = l.unsafe(), t[4] = l, t[5] = g) : g = t[5];
		var h = "forwarded-bot-fallback-bubble-" + i, y;
		t[6] !== h ? (y = u.jsx("span", {
			"data-testid": h,
			children: m
		}), t[6] = h, t[7] = y) : y = t[7];
		var C;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "xo1mcw5 x1ypdohk" }, t[8] = C) : C = t[8];
		var b;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[9] = b) : b = t[9];
		var v;
		t[10] !== _ || t[11] !== c ? (v = u.jsx("span", babelHelpers.extends({}, C, {
			"data-testid": "forwarded-bot-fallback-download-cta",
			onClick: c,
			onKeyDown: _,
			role: "button",
			tabIndex: 0,
			children: b
		})), t[10] = _, t[11] = c, t[12] = v) : v = t[12];
		var S;
		t[13] !== g || t[14] !== y || t[15] !== v ? (S = u.jsxs(r("WAWebMessagePlaceholder.react"), {
			Icon: f,
			msg: g,
			children: [
				y,
				" ",
				v
			]
		}), t[13] = g, t[14] = y, t[15] = v, t[16] = S) : S = t[16];
		var R;
		return t[17] !== n || t[18] !== a || t[19] !== l || t[20] !== S ? (R = u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: l,
			displayType: a,
			displayAuthor: n,
			children: S
		}), t[17] = n, t[18] = a, t[19] = l, t[20] = S, t[21] = R) : R = t[21], R;
	}
	l.default = d;
}), 226);
