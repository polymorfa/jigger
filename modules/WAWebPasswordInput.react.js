__d("WAWebPasswordInput.react", [
	"fbt",
	"WAWebClassnames",
	"WAWebCopyPasteSelectable.react",
	"WDSButton.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"react-gui-use-focus",
	"useMergeRefs",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = { accentIconColor: {
		color: "x1v5yvga",
		$$css: !0
	} };
	function g(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e.iconXstyle ? (n = [e.iconXstyle, f.accentIconColor], t[0] = e.iconXstyle, t[1] = n) : n = t[1];
		var a;
		return t[2] !== e || t[3] !== n ? (a = c.jsx(r("WDSIconIcVisibility.react"), babelHelpers.extends({}, e, { iconXstyle: n })), t[2] = e, t[3] = n, t[4] = a) : a = t[4], a;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e.iconXstyle ? (n = [e.iconXstyle, f.accentIconColor], t[0] = e.iconXstyle, t[1] = n) : n = t[1];
		var a;
		return t[2] !== e || t[3] !== n ? (a = c.jsx(r("WDSIconIcVisibilityOff.react"), babelHelpers.extends({}, e, { iconXstyle: n })), t[2] = e, t[3] = n, t[4] = a) : a = t[4], a;
	}
	function y(t) {
		var n = o("react-compiler-runtime").c(35), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.enableShowPassword, d = l.focusOnMount, f = l.showByDefault, y = u === void 0 ? !1 : u, C = d === void 0 ? !1 : d, b = f === void 0 ? !1 : f, v = r("useWAWebToggle")(b), S = v[0], R = v[1], L = p(null), E = _(!1), k = E[0], I = E[1], T;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (T = { onFocusChange: I }, n[3] = T) : T = n[3];
		var D = o("react-gui-use-focus").useFocus(T), x = r("useMergeRefs")(L, D, i), $, P;
		n[4] !== C ? ($ = function() {
			if (C) {
				var e;
				(e = L.current) == null || e.focus();
			}
		}, P = [C], n[4] = C, n[5] = $, n[6] = P) : ($ = n[5], P = n[6]), m($, P);
		var N = S ? g : h, M;
		n[7] !== S ? (M = S ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[7] = S, n[8] = M) : M = n[8];
		var w = M, A;
		n[9] !== k ? (A = {
			0: { className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xso031l x1q0q8m5 x16pkwpw x1j85h84" },
			1: { className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xv7zg05 x1q0q8m5 x1rrvw3c x18d9i69" }
		}[!!k << 0], n[9] = k, n[10] = A) : A = n[10];
		var F;
		n[11] !== a.appLockUpsellEnabled ? (F = o("WAWebClassnames").classnamesConvertMeToStylexPlease(o("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, a.appLockUpsellEnabled === !0 ? "x1jchvi3 x14ug900 x1iyjqo2 xsl91qr x1aq9cx1 xe0m388 xhe8bae xe73qa2 xsgwwv8 xuhg6hn xli3dgm x1isl193 x1e225iy x1bnlyaz x12ws5rt x1a2a7pz x6ikm8r x10wlt62 x16w0wmm x1yrsyyn x10b6aqq x1icxu4v" : "x1jchvi3 x14ug900 x1iyjqo2 xsl91qr x1aq9cx1 xe0m388 xhe8bae xe73qa2 xsgwwv8 xuhg6hn xli3dgm x1isl193 x1e225iy x1bnlyaz x12ws5rt x1a2a7pz xk7ee7b x6ikm8r x10wlt62 x1yrsyyn x1icxu4v x10b6aqq x25sj25"), n[11] = a.appLockUpsellEnabled, n[12] = F) : F = n[12];
		var O = S ? "text" : "password", B;
		n[13] !== x || n[14] !== a.onBlur || n[15] !== a.onChange || n[16] !== a.onKeyDown || n[17] !== a.pattern || n[18] !== a.placeholder || n[19] !== a.required || n[20] !== a.testid || n[21] !== a.title || n[22] !== a.value || n[23] !== O || n[24] !== F ? (B = c.jsx("input", {
			className: F,
			"data-testid": a.testid,
			onBlur: a.onBlur,
			onChange: a.onChange,
			onKeyDown: a.onKeyDown,
			pattern: a.pattern,
			placeholder: a.placeholder,
			ref: x,
			required: a.required,
			title: a.title,
			type: O,
			value: a.value
		}), n[13] = x, n[14] = a.onBlur, n[15] = a.onChange, n[16] = a.onKeyDown, n[17] = a.pattern, n[18] = a.placeholder, n[19] = a.required, n[20] = a.testid, n[21] = a.title, n[22] = a.value, n[23] = O, n[24] = F, n[25] = B) : B = n[25];
		var W;
		n[26] !== N || n[27] !== w || n[28] !== y || n[29] !== R ? (W = y && c.jsx(r("WDSButton.react"), {
			Icon: N,
			"aria-label": w,
			xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd8,
			onPress: R,
			variant: "borderless"
		}), n[26] = N, n[27] = w, n[28] = y, n[29] = R, n[30] = W) : W = n[30];
		var q;
		return n[31] !== B || n[32] !== W || n[33] !== A ? (q = c.jsxs("div", babelHelpers.extends({}, A, { children: [B, W] })), n[31] = B, n[32] = W, n[33] = A, n[34] = q) : q = n[34], q;
	}
	l.default = y;
}), 226);
