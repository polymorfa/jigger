__d("WAWebCustomerProfileDateField.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSDatePicker.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = {
		row: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		editButtonContainer: {
			flexShrink: "x2lah0s",
			opacity: "xg01cxk x5b7970",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.getUTCFullYear(), n = String(e.getUTCMonth() + 1).padStart(2, "0"), r = String(e.getUTCDate()).padStart(2, "0");
		return t + "-" + n + "-" + r;
	}
	function f(e) {
		return e.toLocaleDateString(void 0, {
			year: "numeric",
			month: "long",
			day: "numeric",
			timeZone: "UTC"
		});
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(49), n = e.icon, a = e.label, i = e.monthDayOnly, l = e.onSave, c = e.placeholder, d = e.value, g = m(null), h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			var e;
			(e = g.current) == null || e.showPicker();
		}, t[0] = h) : h = t[0];
		var y = h, C;
		t[1] !== l ? (C = function(t) {
			var e = t.target.value;
			if (e !== "") {
				var n = e.split("-").map(Number), r = n[0], o = n[1], a = n[2];
				l(new Date(Date.UTC(r, o - 1, a)));
			} else l(null);
		}, t[1] = l, t[2] = C) : C = t[2];
		var b = C, v;
		t[3] !== l ? (v = function(t) {
			l(t != null ? new Date(Date.UTC(2e3, t.getMonth(), t.getDate())) : null);
		}, t[3] = l, t[4] = v) : v = t[4];
		var S = v;
		if (i === !0) {
			var R;
			t[5] !== d ? (R = d != null ? new Date(2e3, d.getUTCMonth(), d.getUTCDate()) : null, t[5] = d, t[6] = R) : R = t[6];
			var L = R, E;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n x-default-marker" }, t[7] = E) : E = t[7];
			var k;
			t[8] !== n ? (k = u.jsx(o("WAWebFlex.react").FlexItem, {
				align: "center",
				justify: "center",
				xstyle: p.iconContainer,
				children: n
			}), t[8] = n, t[9] = k) : k = t[9];
			var I;
			t[10] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x98rzlu xeuugli x6ikm8r x10wlt62" }, t[10] = I) : I = t[10];
			var T;
			t[11] !== L || t[12] !== S || t[13] !== a ? (T = u.jsx("div", babelHelpers.extends({}, I, { children: u.jsx(r("WDSDatePicker.react"), {
				label: a,
				mode: "birthday",
				onChange: S,
				testID: "customer_manager_birthday_picker",
				value: L
			}) })), t[11] = L, t[12] = S, t[13] = a, t[14] = T) : T = t[14];
			var D;
			t[15] !== k || t[16] !== T ? (D = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				xstyle: p.row,
				children: [k, T]
			}), t[15] = k, t[16] = T, t[17] = D) : D = t[17];
			var x;
			return t[18] !== E || t[19] !== D ? (x = u.jsx("div", babelHelpers.extends({ role: "group" }, E, { children: D })), t[18] = E, t[19] = D, t[20] = x) : x = t[20], x;
		}
		var $;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n x-default-marker" }, t[21] = $) : $ = t[21];
		var P;
		t[22] !== n ? (P = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: p.iconContainer,
			children: n
		}), t[22] = n, t[23] = P) : P = t[23];
		var N;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (N = { className: "x98rzlu xeuugli x6ikm8r x10wlt62" }, t[24] = N) : N = t[24];
		var M;
		t[25] !== a || t[26] !== c || t[27] !== d ? (M = u.jsx("div", babelHelpers.extends({}, N, { children: d != null ? u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: a
		}), u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			maxLines: 1,
			children: f(d)
		})] }) : u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			maxLines: 1,
			children: c
		}) })), t[25] = a, t[26] = c, t[27] = d, t[28] = M) : M = t[28];
		var w;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (w = { className: "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn" }, t[29] = w) : w = t[29];
		var A;
		t[30] !== a ? (A = s._(
			/*BTDS*/
			"",
			[s._param("fieldLabel", a)]
		), t[30] = a, t[31] = A) : A = t[31];
		var F;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(r("WDSIconIcEdit.react"), {
			width: 20,
			height: 20
		}), t[32] = F) : F = t[32];
		var O;
		t[33] !== A ? (O = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: p.editButtonContainer,
			children: u.jsx("button", babelHelpers.extends({}, w, {
				onClick: y,
				"aria-label": A,
				children: F
			}))
		}), t[33] = A, t[34] = O) : O = t[34];
		var B;
		t[35] !== O || t[36] !== P || t[37] !== M ? (B = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: p.row,
			children: [
				P,
				M,
				O
			]
		}), t[35] = O, t[36] = P, t[37] = M, t[38] = B) : B = t[38];
		var W;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "xqtp20y xg01cxk x6ikm8r x10wlt62 x10l6tqk xnalus7" }, t[39] = W) : W = t[39];
		var q;
		t[40] !== d ? (q = d != null ? _(d) : "", t[40] = d, t[41] = q) : q = t[41];
		var U;
		t[42] !== b || t[43] !== q ? (U = u.jsx("input", babelHelpers.extends({}, W, {
			ref: g,
			type: "date",
			value: q,
			onChange: b,
			tabIndex: -1
		})), t[42] = b, t[43] = q, t[44] = U) : U = t[44];
		var V;
		return t[45] !== B || t[46] !== U || t[47] !== $ ? (V = u.jsxs("div", babelHelpers.extends({ role: "group" }, $, { children: [B, U] })), t[45] = B, t[46] = U, t[47] = $, t[48] = V) : V = t[48], V;
	}
	l.default = g;
}), 226);
