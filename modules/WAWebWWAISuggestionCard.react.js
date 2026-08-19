__d("WAWebWWAISuggestionCard.react", [
	"fbt",
	"WAWebStopEvent",
	"WAWebWWAILogging",
	"WDSIconIcThumbDown.react",
	"WDSIconIcThumbUp.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(48), n = e.index, a = e.onSelect, i = e.suggestion, l = e.totalCards, c = m(null), d = o("useWAWebHover").useWAWebHover(c), _ = p(null), f = _[0], g = _[1], h;
		t[0] !== a || t[1] !== i ? (h = function() {
			a(i);
		}, t[0] = a, t[1] = i, t[2] = h) : h = t[2];
		var y = h, C;
		t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== l ? (C = function(t) {
			if (t.target === t.currentTarget) {
				if (t.key === "Enter" || t.key === " ") {
					t.preventDefault(), a(i);
					return;
				}
				if (t.key === "ArrowDown" || t.key === "ArrowUp") {
					o("WAWebStopEvent").stopEvent(t);
					var e = t.key === "ArrowDown" ? (n + 1) % l : (n - 1 + l) % l, r = t.currentTarget.parentElement, s = r == null ? void 0 : r.querySelectorAll("[role=\"option\"]"), u = s == null ? void 0 : s[e];
					u instanceof HTMLElement && u.focus();
				}
			}
		}, t[3] = n, t[4] = a, t[5] = i, t[6] = l, t[7] = C) : C = t[7];
		var b = C, v;
		t[8] !== f || t[9] !== i.tone ? (v = function(t, n) {
			o("WAWebStopEvent").stopEvent(n);
			var e = f === t ? null : t;
			e != null && o("WAWebWWAILogging").logFeedback(t === "up" ? "thumbs_up" : "thumbs_down", i.tone), g(e);
		}, t[8] = f, t[9] = i.tone, t[10] = v) : v = t[10];
		var S = v, R;
		t[11] !== S ? (R = function(t) {
			return S("up", t);
		}, t[11] = S, t[12] = R) : R = t[12];
		var L = R, E;
		t[13] !== S ? (E = function(t) {
			return S("down", t);
		}, t[13] = S, t[14] = E) : E = t[14];
		var k = E, I;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x78zum5 x1q0g3np x6s0dn4 x1xrf6ya xscbp6u xdx6fka xvtqlqk xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x1h3rtpe x1ypdohk xh8yej3 x9f619 x1yc453h x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ubxc9n xe1j47m x1cgwre2 xm2pc3q x8b8dig" }, t[15] = I) : I = t[15];
		var T = "wwai_suggestion_card_" + n, D;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x1iyjqo2 xs83m0k x1t1x2f9 x6ikm8r x10wlt62 xlyipyv xuxw1ft" }, t[16] = D) : D = t[16];
		var x;
		t[17] !== i.text ? (x = u.jsx("span", babelHelpers.extends({}, D, { children: u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body2",
			children: i.text
		}) })), t[17] = i.text, t[18] = x) : x = t[18];
		var $;
		t[19] !== f || t[20] !== d ? ($ = {
			0: { className: "x78zum5 x2lah0s x6s0dn4 x1trrmfo xg01cxk" },
			1: { className: "x78zum5 x2lah0s x6s0dn4 x1trrmfo x1hc1fzr" }
		}[!!(d || f != null) << 0], t[19] = f, t[20] = d, t[21] = $) : $ = t[21];
		var P;
		t[22] !== f ? (P = {
			0: { className: "x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd xjbqb8w x1ypdohk x14ug900 x1ubxc9n" },
			1: { className: "x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x1ubxc9n xk4n5i7 x1abdmlv" }
		}[(f === "up") << 0], t[22] = f, t[23] = P) : P = t[23];
		var N = "wwai_thumbs_up_" + n, M, w;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		).toString(), w = u.jsx(r("WDSIconIcThumbUp.react"), {
			width: 16,
			height: 16
		}), t[24] = M, t[25] = w) : (M = t[24], w = t[25]);
		var A;
		t[26] !== L || t[27] !== P || t[28] !== N ? (A = u.jsx("button", babelHelpers.extends({}, P, {
			"data-testid": N,
			onClick: L,
			type: "button",
			"aria-label": M,
			children: w
		})), t[26] = L, t[27] = P, t[28] = N, t[29] = A) : A = t[29];
		var F;
		t[30] !== f ? (F = {
			0: { className: "x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd xjbqb8w x1ypdohk x14ug900 x1ubxc9n" },
			1: { className: "x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x1ubxc9n xk4n5i7 x1abdmlv" }
		}[(f === "down") << 0], t[30] = f, t[31] = F) : F = t[31];
		var O = "wwai_thumbs_down_" + n, B, W;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		).toString(), W = u.jsx(r("WDSIconIcThumbDown.react"), {
			width: 16,
			height: 16
		}), t[32] = B, t[33] = W) : (B = t[32], W = t[33]);
		var q;
		t[34] !== k || t[35] !== F || t[36] !== O ? (q = u.jsx("button", babelHelpers.extends({}, F, {
			"data-testid": O,
			onClick: k,
			type: "button",
			"aria-label": B,
			children: W
		})), t[34] = k, t[35] = F, t[36] = O, t[37] = q) : q = t[37];
		var U;
		t[38] !== $ || t[39] !== A || t[40] !== q ? (U = u.jsxs("div", babelHelpers.extends({}, $, { children: [A, q] })), t[38] = $, t[39] = A, t[40] = q, t[41] = U) : U = t[41];
		var V;
		return t[42] !== y || t[43] !== b || t[44] !== U || t[45] !== T || t[46] !== x ? (V = u.jsxs("div", babelHelpers.extends({}, I, {
			ref: c,
			"data-testid": T,
			role: "option",
			"aria-selected": !1,
			tabIndex: 0,
			onClick: y,
			onKeyDown: b,
			children: [x, U]
		})), t[42] = y, t[43] = b, t[44] = U, t[45] = T, t[46] = x, t[47] = V) : V = t[47], V;
	}
	l.default = _;
}), 226);
