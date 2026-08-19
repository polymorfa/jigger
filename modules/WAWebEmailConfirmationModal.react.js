__d("WAWebEmailConfirmationModal.react", [
	"fbt",
	"WAWebConfirmationModal.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"useWAWebConfirmationActions"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, f = { error: {
		color: "x30a034",
		fontSize: "x1nxh6w3",
		$$css: !0
	} };
	function g(e) {
		var t = o("react-compiler-runtime").c(37), n = e.actions, a = e.actionText, i = e.actionType, l = e.contentText, c = e.onCancel, d = e.onCompletion, g = e.successText, h = e.tsNavigationData, y = r("useWAWebConfirmationActions")(n, d, g), C = y.actionFailure, b = y.failureText, v = y.isRunningAction, S = y.runActions, R = p(!1), L = R[0], E = R[1], k = p(""), I = k[0], T = k[1], D = p(!1), x = D[0], $ = D[1], P = m(null), N;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (N = function(t) {
			E(!1), T(t.target.value);
		}, t[0] = N) : N = t[0];
		var M = N, w;
		t[1] !== S ? (w = function() {
			S();
		}, t[1] = S, t[2] = w) : w = t[2];
		var A = w, F;
		t[3] !== A ? (F = function(t) {
			t.key === "Enter" && A();
		}, t[3] = A, t[4] = F) : F = t[4];
		var O = F, B;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			$(!0);
		}, t[5] = B) : B = t[5];
		var W = B, q;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
			$(!1);
		}, t[6] = q) : q = t[6];
		var U = q, V;
		t[7] !== I ? (V = I.trim(), t[7] = I, t[8] = V) : V = t[8];
		var H = V === "", G;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (G = { className: "x1n2onr6 x14ug900 x1ed109x" }, t[9] = G) : G = t[9];
		var z;
		t[10] !== x || t[11] !== L ? (z = {
			0: { className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x1g83kfv x3qq2k7 x2x8art x1qor8vf" },
			2: { className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf xlze6vy x47fsot x1rrvw3c x18djku1" },
			1: { className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f" },
			3: { className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f" }
		}[!!x << 1 | !!L << 0], t[10] = x, t[11] = L, t[12] = z) : z = t[12];
		var j, K, Q;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), K = s._(
			/*BTDS*/
			""
		), Q = { className: "x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xjbqb8w xh8yej3 x6prxxf x1heor9g xexx8yu xyri2b x18d9i69 x1c1uobl" }, t[13] = j, t[14] = K, t[15] = Q) : (j = t[13], K = t[14], Q = t[15]);
		var X;
		t[16] !== I || t[17] !== O ? (X = u.jsx("input", babelHelpers.extends({
			ref: P,
			type: "text",
			value: I,
			onChange: M,
			onFocus: W,
			onBlur: U,
			onKeyDown: O,
			"data-testid": "email-confirmation-input",
			"aria-label": j,
			placeholder: K
		}, Q)), t[16] = I, t[17] = O, t[18] = X) : X = t[18];
		var Y;
		t[19] !== X || t[20] !== z ? (Y = u.jsx("label", babelHelpers.extends({}, G, { children: u.jsx("div", babelHelpers.extends({}, z, { children: X })) })), t[19] = X, t[20] = z, t[21] = Y) : Y = t[21];
		var J;
		t[22] !== L ? (J = L && u.jsx(o("WAWebFlex.react").FlexRow, {
			testid: "email-confirmation-modal-email-mismatch",
			xstyle: [_.marginTop10, f.error],
			children: s._(
				/*BTDS*/
				""
			)
		}), t[22] = L, t[23] = J) : J = t[23];
		var Z;
		return t[24] !== C || t[25] !== a || t[26] !== i || t[27] !== l || t[28] !== b || t[29] !== A || t[30] !== v || t[31] !== c || t[32] !== Y || t[33] !== J || t[34] !== H || t[35] !== h ? (Z = u.jsxs(r("WAWebConfirmationModal.react"), {
			actionFailure: C,
			actionText: a,
			actionType: i,
			contentText: l,
			failureText: b,
			isInputEmpty: H,
			isRunningAction: v,
			onCancel: c,
			onSubmit: A,
			testidPrefix: "email-confirmation-modal",
			tsNavigationData: h,
			children: [Y, J]
		}), t[24] = C, t[25] = a, t[26] = i, t[27] = l, t[28] = b, t[29] = A, t[30] = v, t[31] = c, t[32] = Y, t[33] = J, t[34] = H, t[35] = h, t[36] = Z) : Z = t[36], Z;
	}
	l.default = g;
}), 226);
