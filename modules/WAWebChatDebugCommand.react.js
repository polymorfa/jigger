__d("WAWebChatDebugCommand.react", [
	"WAWebDebugCommandGetters",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebHighlightedText.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebStateUtils",
	"WAWebUnstyledButton.react",
	"react",
	"react-compiler-runtime",
	"useWAWebActiveSelection",
	"useWAWebDebugCommandValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		paddingInlineStart30: {
			paddingInlineStart: "x162tt16",
			$$css: !0
		},
		paddingInlineEnd30: {
			paddingInlineEnd: "x5zjp28",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		}
	}, c = {
		button: {
			width: "xh8yej3",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		container: {
			height: "xdiz9cm",
			fontSize: "x1jchvi3",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			textAlign: "x1yc453h",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		inactive: {
			":hover_backgroundColor": "x17gydlx",
			$$css: !0
		},
		active: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		name: {
			fontSize: "x1jchvi3",
			$$css: !0
		},
		doc: {
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			color: "xraqfvc",
			display: "x1lliihq",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(28), n = e.debugCommand, a = n.id, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [o("WAWebDebugCommandGetters").getDoc, o("WAWebDebugCommandGetters").getName], t[0] = i) : i = t[0];
		var l = o("useWAWebDebugCommandValues").useDebugCommandValues(a, i), d = l[0], p = l[1], _ = e.onClick, f = r("useWAWebActiveSelection")(e.active, a), g = f[0], h = f[1], y;
		t[1] !== n || t[2] !== _ ? (y = function(t) {
			_(t, o("WAWebStateUtils").unproxy(n));
		}, t[1] = n, t[2] = _, t[3] = y) : y = t[3];
		var C = y, b = m, v;
		t[4] !== C ? (v = {
			enter: C,
			space: C
		}, t[4] = C, t[5] = v) : v = t[5];
		var S = v, R = h && c.active, L = !h && c.inactive, E;
		t[6] !== R || t[7] !== L ? (E = [
			c.button,
			u.paddingInlineStart30,
			R,
			L
		], t[6] = R, t[7] = L, t[8] = E) : E = t[8];
		var k = "li-" + a, I;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (I = [c.container, u.paddingInlineEnd30], t[9] = I) : I = t[9];
		var T;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (T = [c.name, u.paddingBottom5], t[10] = T) : T = t[10];
		var D;
		t[11] !== p || t[12] !== e.searchQuery ? (D = s.jsx(r("WAWebFlexItem.react"), { children: s.jsx(o("WAWebHighlightedText.react").HighlightedText, {
			text: p,
			xstyle: T,
			searchQuery: e.searchQuery
		}) }), t[11] = p, t[12] = e.searchQuery, t[13] = D) : D = t[13];
		var x;
		t[14] !== d ? (x = s.jsx(r("WAWebFlexItem.react"), { children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
			xstyle: c.doc,
			text: d,
			ellipsify: !0
		}) }), t[14] = d, t[15] = x) : x = t[15];
		var $;
		t[16] !== x || t[17] !== D ? ($ = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			align: "stretch",
			xstyle: I,
			children: [D, x]
		}), t[16] = x, t[17] = D, t[18] = $) : $ = t[18];
		var P;
		t[19] !== C || t[20] !== $ || t[21] !== E || t[22] !== k ? (P = s.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: E,
			testid: k,
			onClick: C,
			children: $
		}), t[19] = C, t[20] = $, t[21] = E, t[22] = k, t[23] = P) : P = t[23];
		var N;
		return t[24] !== S || t[25] !== g || t[26] !== P ? (N = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: g,
			onFocus: b,
			handlers: S,
			children: P
		}), t[24] = S, t[25] = g, t[26] = P, t[27] = N) : N = t[27], N;
	}
	function m(e) {
		e.stopPropagation(), e.preventDefault();
	}
	l.default = d;
}), 98);
