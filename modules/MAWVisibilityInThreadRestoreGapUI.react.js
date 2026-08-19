__d("MAWVisibilityInThreadRestoreGapUI.react", [
	"fbt",
	"BaseTheme.react",
	"MWXButton.react",
	"MWXText.react",
	"react",
	"react-compiler-runtime",
	"useMAWVisibilityRestoreGapUIController"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		dark: {
			"primary-button-background": "var(--chat-composer-button-color, var(--accent))",
			"primary-button-text": "var(--always-white)"
		},
		light: {
			"primary-button-background": "var(--chat-composer-button-color, var(--accent))",
			"primary-button-text": "var(--always-white)"
		},
		type: "VARIABLES"
	};
	function d() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "xul0bl0 x1lliihq x2lah0s" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsxs("svg", babelHelpers.extends({ "aria-hidden": "true" }, t, {
			fill: "none",
			focusable: "false",
			height: "40",
			viewBox: "0 0 40 40",
			width: "40",
			xmlns: "http://www.w3.org/2000/svg",
			children: [u.jsx("path", {
				d: "M10.483 9.52989C11.0041 10.3487 12.1434 10.4802 12.9378 9.92265C14.9369 8.51965 17.3723 7.69615 20 7.69615C26.6684 7.69615 32.0982 12.9994 32.3018 19.6184C32.3083 19.8307 32.1355 20.0038 31.9231 20.0038H29.7457C28.734 20.0038 28.1209 21.1207 28.6641 21.9742L33.1491 29.0222C33.6529 29.8139 34.8086 29.8139 35.3124 29.0222L39.7975 21.9742C40.3406 21.1207 39.7275 20.0038 38.7159 20.0038H36.5385C36.326 20.0038 36.1543 19.8304 36.1493 19.6181C35.9444 10.8748 28.7926 3.85 20 3.85C16.4166 3.85 13.1057 5.01679 10.4265 6.99118C9.81395 7.4426 9.69628 8.29358 10.1048 8.93555L10.483 9.52989Z",
				fill: "currentColor"
			}), u.jsx("path", {
				d: "M29.517 30.4778C28.9959 29.659 27.8566 29.5275 27.0622 30.085C25.0631 31.488 22.6277 32.3115 20 32.3115C13.3316 32.3115 7.90184 27.0083 7.69823 20.3893C7.69169 20.177 7.8645 20.0038 8.07692 20.0038H10.2543C11.266 20.0038 11.8791 18.887 11.3359 18.0335L6.85086 10.9855C6.34707 10.1938 5.1914 10.1938 4.6876 10.9855L0.202517 18.0335C-0.340622 18.887 0.272479 20.0038 1.28414 20.0038H3.46154C3.67395 20.0038 3.84569 20.1773 3.85067 20.3896C4.05558 29.1329 11.2074 36.1577 20 36.1577C23.5834 36.1577 26.8943 34.9909 29.5735 33.0165C30.1861 32.5651 30.3037 31.7141 29.8952 31.0721L29.517 30.4778Z",
				fill: "currentColor"
			})]
		})), e[1] = n) : n = e[1], n;
	}
	function m() {
		var e = o("react-compiler-runtime").c(17), t = r("useMAWVisibilityRestoreGapUIController")(), n = t.onOpenRestoreDialog, a = t.ref, i = t.shouldShowGapUI;
		if (!i) return null;
		var l;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x1eb86dx x78zum5 xl56j7k x1y1aw1k xwib8y2 x1g0dm76 xpdmqnj xh8yej3" }, e[0] = l) : l = e[0];
		var m, p, _, f, g;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x6s0dn4 x443n21 x1xn7y0n x1uxb8k9 x1vmbcc8 x16xm01d x9f619 x78zum5 xdt5ytf x1u5z0ei x1nhvcw1 xxc7z9f x6ikm8r x10wlt62 x7sb2j6 x84yb8i x110972j xziim83 xh8yej3" }, p = { className: "x6s0dn4 x78zum5 xdt5ytf x1h5wmu3 x1nhvcw1 x398du xh8yej3" }, _ = { className: "x6s0dn4 x78zum5 xdt5ytf x1h5wmu3 x1nhvcw1 x10bebk3 xh8yej3" }, f = u.jsx(d, {}), g = { className: "x1xmf6yo xh8yej3" }, e[1] = m, e[2] = p, e[3] = _, e[4] = f, e[5] = g) : (m = e[1], p = e[2], _ = e[3], f = e[4], g = e[5]);
		var h, y;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("div", babelHelpers.extends({}, g, { children: u.jsx(r("MWXText.react"), {
			align: "center",
			isSemanticHeading: !0,
			type: "headlineEmphasized1",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), y = { className: "xw7yly9 xh8yej3" }, e[6] = h, e[7] = y) : (h = e[6], y = e[7]);
		var C, b, v;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx("div", babelHelpers.extends({}, p, { children: u.jsxs("div", babelHelpers.extends({}, _, { children: [
			f,
			h,
			u.jsx("div", babelHelpers.extends({}, y, { children: u.jsx(r("MWXText.react"), {
				align: "center",
				color: "secondary",
				type: "body4",
				children: s._(
					/*BTDS*/
					""
				)
			}) }))
		] })) })), v = { className: "x78zum5 x10w6t97 x1sy10c2 x398du xh8yej3" }, C = { className: "x1iyjqo2" }, e[8] = C, e[9] = b, e[10] = v) : (C = e[8], b = e[9], v = e[10]);
		var S;
		e[11] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), e[11] = S) : S = e[11];
		var R;
		e[12] !== n ? (R = u.jsxs("div", babelHelpers.extends({}, m, { children: [b, u.jsx("div", babelHelpers.extends({}, v, { children: u.jsx("div", babelHelpers.extends({}, C, { children: u.jsx(r("BaseTheme.react"), {
			config: c,
			children: u.jsx(r("MWXButton.react"), {
				label: S,
				onPress: n,
				size: 32,
				testid: void 0,
				type: "primary"
			})
		}) })) }))] })), e[12] = n, e[13] = R) : R = e[13];
		var L;
		return e[14] !== a || e[15] !== R ? (L = u.jsx("div", babelHelpers.extends({}, l, {
			ref: a,
			children: R
		})), e[14] = a, e[15] = R, e[16] = L) : L = e[16], L;
	}
	l.default = m;
}), 226);
