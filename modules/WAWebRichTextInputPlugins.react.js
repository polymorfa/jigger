__d("WAWebRichTextInputPlugins.react", [
	"WAWebEmojisPlugin.react",
	"WAWebFloatingToolbarPlugin.react",
	"WAWebMentionsPlugin.react",
	"WAWebTextFormatPreviewPlugin.react",
	"WAWebTextFormatShortcutsPlugin.react",
	"WAWebTextModifierPlugin",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(26), n = e.blockQuoteEnabled, a = e.bulletPointsEnabled, i = e.emojiSize, l = e.floatingToolbarEnabled, u = e.groupMetadata, c = e.highlightedBotCommands, d = e.inlineCodeEnabled, m = e.internLinksEnabled, p = e.linksEnabled, _ = e.numberedListEnabled, f = e.phoneNumbersEnabled, g = e.spoilerEnabled, h = e.textFormatEnabled, y = e.textFormatShortcutsEnabled, C = e.transformTextEmoji, b = n === void 0 ? !1 : n, v = a === void 0 ? !1 : a, S = l === void 0 ? !1 : l, R = d === void 0 ? !1 : d, L = m === void 0 ? !1 : m, E = p === void 0 ? !1 : p, k = _ === void 0 ? !1 : _, I = f === void 0 ? !1 : f, T = g === void 0 ? !1 : g, D = h === void 0 ? !1 : h, x = y === void 0 ? !1 : y, $ = C === void 0 ? !0 : C, P;
		t[0] !== i || t[1] !== $ ? (P = s.jsx(r("WAWebEmojisPlugin.react"), {
			emojiSize: i,
			transformTextEmoji: $
		}), t[0] = i, t[1] = $, t[2] = P) : P = t[2];
		var N;
		t[3] !== u ? (N = s.jsx(r("WAWebMentionsPlugin.react"), { groupMetadata: u }), t[3] = u, t[4] = N) : N = t[4];
		var M;
		t[5] !== v || t[6] !== k ? (M = s.jsx(r("WAWebTextModifierPlugin"), {
			autoToggleListBulletSymbol: v,
			autoToggleListNumberSymbol: k
		}), t[5] = v, t[6] = k, t[7] = M) : M = t[7];
		var w;
		t[8] !== b || t[9] !== v || t[10] !== S || t[11] !== c || t[12] !== R || t[13] !== L || t[14] !== E || t[15] !== k || t[16] !== I || t[17] !== T || t[18] !== D || t[19] !== x ? (w = D && s.jsxs(s.Fragment, { children: [
			s.jsx(r("WAWebTextFormatPreviewPlugin.react"), {
				bulletPointsEnabled: v,
				numberedListEnabled: k,
				inlineCodeEnabled: R,
				blockQuoteEnabled: b,
				internLinksEnabled: L,
				phoneNumbersEnabled: I,
				linksEnabled: E,
				highlightedBotCommands: c,
				spoilerEnabled: T
			}),
			S && s.jsx(o("WAWebFloatingToolbarPlugin.react").FloatingToolbarPlugin, {
				bulletPointsEnabled: v,
				numberedListEnabled: k,
				inlineCodeEnabled: R,
				blockQuoteEnabled: b
			}),
			x && s.jsx(r("WAWebTextFormatShortcutsPlugin.react"), {
				bulletPointsEnabled: v,
				numberedListEnabled: k,
				inlineCodeEnabled: R,
				blockQuoteEnabled: b
			})
		] }), t[8] = b, t[9] = v, t[10] = S, t[11] = c, t[12] = R, t[13] = L, t[14] = E, t[15] = k, t[16] = I, t[17] = T, t[18] = D, t[19] = x, t[20] = w) : w = t[20];
		var A;
		return t[21] !== P || t[22] !== N || t[23] !== M || t[24] !== w ? (A = s.jsxs(s.Fragment, { children: [
			P,
			N,
			M,
			w
		] }), t[21] = P, t[22] = N, t[23] = M, t[24] = w, t[25] = A) : A = t[25], A;
	}
	l.default = u;
}), 98);
