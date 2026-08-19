__d("WAWebBotPluginMsgBubbleMeta.react", [
	"WAWebClock",
	"WAWebProtobufsAICommon.pb",
	"WAWebSearchPluginBingIconIcon.react",
	"WAWebSearchPluginGoogleIconIcon.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 16;
	function c(e) {
		var t = o("react-compiler-runtime").c(26), n = e.botPluginSearchProvider, a = e.botPluginSearchQuery, i = e.botPluginSearchUrl, l = e.t, c = e.theme;
		if (n == null || i == null) return null;
		var d = null;
		e: switch (n) {
			case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.GOOGLE: {
				var m;
				t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(o("WAWebSearchPluginGoogleIconIcon.react").SearchPluginGoogleIconIcon, { height: u }), t[0] = m) : m = t[0], d = m;
				break e;
			}
			case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.BING: {
				var p;
				t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsx(o("WAWebSearchPluginBingIconIcon.react").SearchPluginBingIconIcon, { height: u }), t[1] = p) : p = t[1], d = p;
				break e;
			}
			case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.SUPPORT:
			case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.UNKNOWN:
		}
		var _ = null;
		if (c !== "date") {
			if (l != null) {
				var f;
				t[2] !== l ? (f = o("WAWebClock").Clock.timestampStr(l), t[2] = l, t[3] = f) : f = t[3], _ = f;
			}
		} else if (l != null) {
			var g;
			t[4] !== l ? (g = o("WAWebClock").Clock.relativeStr(l), t[4] = l, t[5] = g) : g = t[5], _ = g;
		}
		var h;
		t[6] !== a || t[7] !== i ? (h = a != null ? s.jsx("div", {
			className: "x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv",
			children: s.jsx(r("WDSTextualLink.react"), {
				href: i,
				textConfig: "Body1",
				children: a
			})
		}) : null, t[6] = a, t[7] = i, t[8] = h) : h = t[8];
		var y = h, C, b, v;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "xcxhlts x1y3qizg x19dbzi3 x78zum5 x1qughib" }, b = { className: "x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv" }, v = { className: "x78zum5 x6ikm8r x10wlt62" }, t[9] = C, t[10] = b, t[11] = v) : (C = t[9], b = t[10], v = t[11]);
		var S = d, R;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "xe2zdcy x4p5aij x6ikm8r x10wlt62" }, t[12] = R) : R = t[12];
		var L;
		t[13] !== y || t[14] !== R ? (L = s.jsx("div", babelHelpers.extends({}, R, { children: y })), t[13] = y, t[14] = R, t[15] = L) : L = t[15];
		var E;
		t[16] !== d || t[17] !== L ? (E = s.jsx("div", babelHelpers.extends({}, b, { children: s.jsxs("div", babelHelpers.extends({}, v, { children: [S, L] })) })), t[16] = d, t[17] = L, t[18] = E) : E = t[18];
		var k;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "x78zum5 x13a6bvl xpqajaz" }, t[19] = k) : k = t[19];
		var I;
		t[20] !== _ ? (I = s.jsx("div", babelHelpers.extends({}, k, { children: _ })), t[20] = _, t[21] = I) : I = t[21];
		var T;
		return t[22] !== I || t[23] !== C || t[24] !== E ? (T = s.jsxs("div", babelHelpers.extends({}, C, { children: [E, I] })), t[22] = I, t[23] = C, t[24] = E, t[25] = T) : T = t[25], T;
	}
	l.default = c;
}), 98);
