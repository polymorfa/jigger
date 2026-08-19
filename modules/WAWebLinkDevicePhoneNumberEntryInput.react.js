__d("WAWebLinkDevicePhoneNumberEntryInput.react", [
	"fbt",
	"WAWebHybridRegGating",
	"WAWebPhoneNumberInput.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useImperativeHandle, p = d.useRef, _ = d.useState, f = {
		inputWrapperWds: {
			height: "x1vqgdyp",
			$$css: !0
		},
		inputWrapper: {
			position: "x1n2onr6",
			paddingTop: "xqv4dci",
			paddingBottom: "x1aazizy",
			paddingLeft: "xd3ty66",
			paddingRight: "xcicffo",
			minWidth: "x1vktgvc",
			height: "x1qx5ct2",
			backgroundColor: "xk7ee7b",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			$$css: !0
		},
		inputWrapperFocused: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x47fsot",
			borderBottomColor: "x1rrvw3c",
			borderInlineStartColor: "x18djku1",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(33), a = t.a11yErrorMessage, i = t.countryCodeIso, l = t.icon, u = t.onBlur, d = t.onChange, g = t.onEnter, h = t.onFocus, y = t.phoneNumberWithoutCountryPrefix, C = t.ref, b = t.theme, v = t.xstyle, S = a.errorMessageDOMId, R = a.errorShown, L = b != null ? b === "wds" : o("WAWebHybridRegGating").isHybridRegEnabled(), E = _(!1), k = E[0], I = E[1], T = p(null), D;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			return { focus: function() {
				var e;
				(e = T.current) == null || e.focus();
			} };
		}, n[0] = D) : D = n[0], m(C, D);
		var x = {
			0: { className: "x1n2onr6 x1pha01r x1ed109x" },
			1: { className: "x1n2onr6 x1ed109x x14ug900" }
		}[!!L << 0], $;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			var e;
			(e = T.current) == null || e.focus();
		}, n[1] = $) : $ = n[1];
		var P;
		n[2] !== k || n[3] !== L || n[4] !== v ? (P = (e || (e = r("stylex"))).props(L ? f.inputWrapperWds : f.inputWrapper, k && !L && f.inputWrapperFocused, v), n[2] = k, n[3] = L, n[4] = v, n[5] = P) : P = n[5];
		var N = L ? "wds" : "default", M;
		n[6] !== u || n[7] !== I ? (M = function() {
			I(!1), u == null || u();
		}, n[6] = u, n[7] = I, n[8] = M) : M = n[8];
		var w;
		n[9] !== h || n[10] !== I ? (w = function() {
			I(!0), h == null || h();
		}, n[9] = h, n[10] = I, n[11] = w) : w = n[11];
		var A;
		n[12] !== L ? (A = L ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[12] = L, n[13] = A) : A = n[13];
		var F;
		n[14] !== a.errorMessage || n[15] !== i || n[16] !== S || n[17] !== R || n[18] !== l || n[19] !== d || n[20] !== g || n[21] !== y || n[22] !== N || n[23] !== M || n[24] !== w || n[25] !== A ? (F = c.jsx(r("WAWebPhoneNumberInput.react"), {
			theme: N,
			countryCodeIso: i,
			errorMessageDOMId: S,
			errorShown: R,
			errorMessage: a.errorMessage,
			icon: l,
			onBlur: M,
			onFocus: w,
			onChange: d,
			onEnter: g,
			phoneNumberWithoutCountryPrefix: y,
			ref: T,
			ariaLabel: A
		}), n[14] = a.errorMessage, n[15] = i, n[16] = S, n[17] = R, n[18] = l, n[19] = d, n[20] = g, n[21] = y, n[22] = N, n[23] = M, n[24] = w, n[25] = A, n[26] = F) : F = n[26];
		var O;
		n[27] !== P || n[28] !== F ? (O = c.jsx("div", babelHelpers.extends({}, P, { children: F })), n[27] = P, n[28] = F, n[29] = O) : O = n[29];
		var B;
		return n[30] !== O || n[31] !== x ? (B = c.jsx("div", babelHelpers.extends({}, x, {
			onClick: $,
			dir: "ltr",
			children: O
		})), n[30] = O, n[31] = x, n[32] = B) : B = n[32], B;
	}
	l.default = g;
}), 226);
