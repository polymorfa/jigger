__d("WAWebContactPhoneNumberField.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebPhoneNumberInput.react",
	"WDSIconIcCheck.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = {
		paddingTop9: {
			paddingTop: "x96k8nx",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		}
	}, _ = {
		inputRow: {
			borderBottomWidth: "xlxy82",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x16pkwpw",
			$$css: !0
		},
		inputFocused: {
			borderBottomColor: "x1rrvw3c",
			$$css: !0
		},
		checkMark: {
			color: "xdlexau",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(21), n = e.countryCode, a = e.errorMessageDOMId, i = e.errorShown, l = e.isValid, c = e.numberWithoutPrefix, f = e.onChange, g = e.onEnter, h = m(!1), y = h[0], C = h[1], b = d(null), v;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = "x1n2onr6 xeuugli", t[0] = v) : v = t[0];
		var S;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx("div", {
			className: "x1pg5gke x1d3mw78 xm7witj",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[1] = S) : S = t[1];
		var R = y && _.inputFocused, L;
		t[2] !== R ? (L = [_.inputRow, R], t[2] = R, t[3] = L) : L = t[3];
		var E;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (E = [p.paddingTop9, p.paddingBottom5], t[4] = E) : E = t[4];
		var k, I;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			C(!1);
		}, I = function() {
			C(!0);
		}, t[5] = k, t[6] = I) : (k = t[5], I = t[6]);
		var T;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), t[7] = T) : T = t[7];
		var D;
		t[8] !== n || t[9] !== a || t[10] !== i || t[11] !== c || t[12] !== f || t[13] !== g ? (D = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: E,
			grow: 1,
			shrink: 1,
			children: u.jsx(r("WAWebPhoneNumberInput.react"), {
				countryCodeIso: n,
				errorMessageDOMId: a,
				errorShown: i,
				onBlur: k,
				onFocus: I,
				onChange: f,
				onEnter: g,
				phoneNumberWithoutCountryPrefix: c,
				ref: b,
				showCountryPrefix: !1,
				ariaLabel: T
			})
		}), t[8] = n, t[9] = a, t[10] = i, t[11] = c, t[12] = f, t[13] = g, t[14] = D) : D = t[14];
		var x;
		t[15] !== l ? (x = l && u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 0,
			shrink: 0,
			children: u.jsx(r("WDSIconIcCheck.react"), { xstyle: _.checkMark })
		}), t[15] = l, t[16] = x) : x = t[16];
		var $;
		return t[17] !== x || t[18] !== L || t[19] !== D ? ($ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: v,
			grow: 1,
			align: "stretch",
			dir: "auto",
			children: [S, u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: L,
				align: "center",
				children: [D, x]
			})]
		}), t[17] = x, t[18] = L, t[19] = D, t[20] = $) : $ = t[20], $;
	}
	l.default = f;
}), 226);
