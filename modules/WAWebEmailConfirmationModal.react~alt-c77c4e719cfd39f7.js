__d("WAWebEmailConfirmationModal.react", [
	"fbt",
	"WAWebConfirmationModal.react",
	"WAWebFlex.react",
	"react",
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
		var t = e.actions, n = e.actionText, a = e.actionType, i = e.contentText, l = e.onCancel, c = e.onCompletion, g = e.successText, h = e.tsNavigationData, y = r("useWAWebConfirmationActions")(t, c, g), C = y.actionFailure, b = y.failureText, v = y.isRunningAction, S = y.runActions, R = p(!1), L = R[0], E = R[1], k = p(""), I = k[0], T = k[1], D = p(!1), x = D[0], $ = D[1], P = m(null), N = d(function(e) {
			E(!1), T(e.target.value);
		}, []), M = d(function() {
			S();
		}, [S]), w = d(function(e) {
			e.key === "Enter" && M();
		}, [M]), A = d(function() {
			$(!0);
		}, []), F = d(function() {
			$(!1);
		}, []);
		return u.jsxs(r("WAWebConfirmationModal.react"), {
			actionFailure: C,
			actionText: n,
			actionType: a,
			contentText: i,
			failureText: b,
			isInputEmpty: I.trim() === "",
			isRunningAction: v,
			onCancel: l,
			onSubmit: M,
			testidPrefix: "email-confirmation-modal",
			tsNavigationData: h,
			children: [u.jsx("label", {
				className: "x1n2onr6 x14ug900 x1ed109x",
				children: u.jsx("div", babelHelpers.extends({}, {
					0: { className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x1g83kfv x3qq2k7 x2x8art x1qor8vf" },
					2: { className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf xlze6vy x47fsot x1rrvw3c x18djku1" },
					1: { className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f" },
					3: { className: "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f" }
				}[!!x << 1 | !!L << 0], { children: u.jsx("input", {
					ref: P,
					type: "text",
					value: I,
					onChange: N,
					onFocus: A,
					onBlur: F,
					onKeyDown: w,
					"data-testid": "email-confirmation-input",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					placeholder: s._(
						/*BTDS*/
						""
					),
					className: "x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xjbqb8w xh8yej3 x6prxxf x1heor9g xexx8yu xyri2b x18d9i69 x1c1uobl"
				}) }))
			}), L && u.jsx(o("WAWebFlex.react").FlexRow, {
				testid: "email-confirmation-modal-email-mismatch",
				xstyle: [_.marginTop10, f.error],
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
