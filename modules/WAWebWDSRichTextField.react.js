__d("WAWebWDSRichTextField.react", [
	"fbt",
	"WAWebEmojiNode",
	"WAWebEmojiPickerPlugin",
	"WAWebEmojisPlugin.react",
	"WAWebL10N",
	"WDSRichTextField.react",
	"react",
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebTextFieldEmojiPicker"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u = [
		"children",
		"emoji",
		"nodes",
		"characterCountRenderer"
	], c, d = c || (c = o("react")), m = c.useMemo;
	function p(e, t) {
		var n = r("WAWebL10N").n(e), o = r("WAWebL10N").n(t);
		return s._(
			/*BTDS*/
			"",
			[s._param("current-count", n), s._param("max-count", o)]
		);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n, a, i, l, s, c = o("react-compiler-runtime").c(35), m, _;
		c[0] !== t ? (_ = t.ref, m = babelHelpers.objectWithoutPropertiesLoose(t, e), c[0] = t, c[1] = m, c[2] = _) : (m = c[1], _ = c[2]);
		var f, g, h, y, C;
		if (c[3] !== m) {
			var b = m;
			f = b.children, g = b.emoji, h = b.nodes, C = b.characterCountRenderer, y = babelHelpers.objectWithoutPropertiesLoose(b, u), c[3] = m, c[4] = f, c[5] = g, c[6] = h, c[7] = y, c[8] = C;
		} else f = c[4], g = c[5], h = c[6], y = c[7], C = c[8];
		var v = C === void 0 ? p : C, S = (n = g) == null || (n = n.picker) == null ? void 0 : n.ariaLabel, R;
		c[9] !== S ? (R = { emojiPickerAriaLabel: S }, c[9] = S, c[10] = R) : R = c[10];
		var L = r("useWAWebTextFieldEmojiPicker")(R), E = L.emojiPicker, k = L.enableEmojiPicker, I = L.openEmojiPicker, T = L.richTextFieldRef, D = r("useMergeRefs")(T, _ != null ? _ : null), x = g != null && (g.display === !0 || g.picker != null || g.keyboardShortcut === !0), $;
		e: {
			if (!x) {
				$ = h;
				break e;
			}
			var P;
			c[11] !== h ? (P = h != null ? h : [], c[11] = h, c[12] = P) : P = c[12];
			var N = P, M;
			c[13] !== N ? (M = N.includes(o("WAWebEmojiNode").EmojiNode) ? N : [o("WAWebEmojiNode").EmojiNode].concat(N), c[13] = N, c[14] = M) : M = c[14], $ = M;
		}
		var w = $, A;
		c[15] !== k || c[16] !== I || c[17] !== S ? (A = S != null ? {
			emojiPickerAriaLabel: S,
			isEmojiPickerOpen: k.isEmojiPickerOpen,
			onEmojiPress: I
		} : void 0, c[15] = k, c[16] = I, c[17] = S, c[18] = A) : A = c[18];
		var F = A, O;
		if (c[19] !== ((a = g) == null ? void 0 : a.emojiSize) || c[20] !== ((i = g) == null ? void 0 : i.keyboardShortcut) || c[21] !== ((l = g) == null ? void 0 : l.transformTextEmoji) || c[22] !== x) {
			var B, W, q, U, V, H, G;
			O = x ? d.jsxs(d.Fragment, { children: [d.jsx(r("WAWebEmojisPlugin.react"), {
				transformTextEmoji: (B = (W = g) == null ? void 0 : W.transformTextEmoji) != null ? B : !0,
				emojiSize: (q = g) == null ? void 0 : q.emojiSize
			}), ((U = g) == null ? void 0 : U.keyboardShortcut) === !0 ? d.jsx(r("WAWebEmojiPickerPlugin"), {}) : null] }) : null, c[19] = (V = g) == null ? void 0 : V.emojiSize, c[20] = (H = g) == null ? void 0 : H.keyboardShortcut, c[21] = (G = g) == null ? void 0 : G.transformTextEmoji, c[22] = x, c[23] = O;
		} else O = c[23];
		var z = O, j;
		c[24] !== v || c[25] !== f || c[26] !== z || c[27] !== w || c[28] !== D || c[29] !== F || c[30] !== y ? (j = d.jsxs(r("WDSRichTextField.react"), babelHelpers.extends({ ref: D }, y, {
			characterCountRenderer: v,
			nodes: w,
			enableEmojiPicker: F,
			children: [z, f]
		})), c[24] = v, c[25] = f, c[26] = z, c[27] = w, c[28] = D, c[29] = F, c[30] = y, c[31] = j) : j = c[31];
		var K = ((s = g) == null ? void 0 : s.picker) != null ? E : null, Q;
		return c[32] !== j || c[33] !== K ? (Q = d.jsxs(d.Fragment, { children: [j, K] }), c[32] = j, c[33] = K, c[34] = Q) : Q = c[34], Q;
	}
	l.default = _;
}), 226);
