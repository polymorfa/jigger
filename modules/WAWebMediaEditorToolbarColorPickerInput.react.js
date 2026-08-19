__d("WAWebMediaEditorToolbarColorPickerInput.react", [
	"WAWebCopyPasteSelectable.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaEditorToolbarColor.react",
	"WAWebMediaEditorToolbarColorChip.react",
	"WAWebMediaEditorToolbarColorPickerConsts",
	"WAWebMediaEditorUtilsColor",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = c.useState, _ = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, f = {
		container: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			display: "x78zum5",
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		defaultHeight: {
			minHeight: "x7ywyr2",
			$$css: !0
		},
		compactHeight: {
			maxHeight: "x1aa1le3",
			$$css: !0
		},
		input: {
			backgroundColor: "xjbqb8w",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			color: "x14ug900",
			fontSize: "x6prxxf",
			lineHeight: "x1fc57z9",
			outline: "x1a2a7pz",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(28), a = t.color, i = t.onColorPickerClose, l = t.onChangeColor, s = t.theme, c = s === void 0 ? o("WAWebMediaEditorToolbarColor.react").Theme.Default : s, g = m(null), h;
		n[0] !== a ? (h = a.toHex(), n[0] = a, n[1] = h) : h = n[1];
		var y = p(h), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1], L, E;
		n[2] !== a || n[3] !== S ? (L = function() {
			S || b(a.toHex());
		}, E = [a, S], n[2] = a, n[3] = S, n[4] = L, n[5] = E) : (L = n[4], E = n[5]), d(L, E);
		var k;
		n[6] !== l ? (k = function(t) {
			var e = t.target.value;
			if (b(e), !(!e || !o("WAWebMediaEditorUtilsColor").isValidHex(e))) {
				var n = o("WAWebMediaEditorUtilsColor").Color.fromHex(e);
				l(n);
			}
		}, n[6] = l, n[7] = k) : k = n[7];
		var I = k, T;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			R(!1);
		}, n[8] = T) : T = n[8];
		var D = T, x;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			R(!0);
		}, n[9] = x) : x = n[9];
		var $ = x, P;
		n[10] !== c ? (P = (e || (e = r("stylex")))([f.container, c === o("WAWebMediaEditorToolbarColor.react").Theme.Default ? [f.defaultHeight, o("WDSPaddings.stylex").wdsPaddings.paddingHor8] : f.compactHeight]), n[10] = c, n[11] = P) : P = n[11];
		var N;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (N = {
			width: o("WAWebMediaEditorToolbarColorPickerConsts").CONTAINER_WIDTH,
			height: o("WAWebMediaEditorToolbarColorPickerConsts").INPUT_HEIGHT
		}, n[12] = N) : N = n[12];
		var M;
		n[13] !== a ? (M = u.jsx(r("WAWebMediaEditorToolbarColorChip.react"), {
			withBorder: !0,
			primaryColor: a,
			selected: !1,
			theme: "medium"
		}), n[13] = a, n[14] = M) : M = n[14];
		var w;
		n[15] !== i ? (w = { enter: i }, n[15] = i, n[16] = w) : w = n[16];
		var A;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (A = (e || (e = r("stylex"))).props([
			f.input,
			_.paddingBlock10,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor8
		]), n[17] = A) : A = n[17];
		var F;
		n[18] !== I || n[19] !== C ? (F = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
			selectable: !0,
			children: u.jsx("input", babelHelpers.extends({
				type: "text",
				ref: g
			}, A, {
				value: C,
				onChange: I,
				onBlur: D,
				onFocus: $
			}))
		}), n[18] = I, n[19] = C, n[20] = F) : F = n[20];
		var O;
		n[21] !== w || n[22] !== F ? (O = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: w,
			children: F
		}), n[21] = w, n[22] = F, n[23] = O) : O = n[23];
		var B;
		return n[24] !== O || n[25] !== P || n[26] !== M ? (B = u.jsxs("div", {
			className: P,
			style: N,
			children: [M, O]
		}), n[24] = O, n[25] = P, n[26] = M, n[27] = B) : B = n[27], B;
	}
	l.default = g;
}), 98);
