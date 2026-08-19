__d("WAWebHatchApprovalDialog.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebHatchApprovalIcon.react",
	"WAWebHatchApprovalOption",
	"WDSBaseRadio.react",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useId, m = c.useState, p = "hatch-approval-option";
	function _(e) {
		return e.spaceReaderGrantEligible ? [{
			option: r("WAWebHatchApprovalOption").AllowOnce,
			testid: "hatch-approval-option-allow-once",
			label: s._(
				/*BTDS*/
				""
			)
		}, {
			option: r("WAWebHatchApprovalOption").Deny,
			testid: "hatch-approval-option-deny",
			label: s._(
				/*BTDS*/
				""
			)
		}] : [
			{
				option: r("WAWebHatchApprovalOption").AllowOnce,
				testid: "hatch-approval-option-allow-once",
				label: e.turnGrantEligible ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			},
			{
				option: r("WAWebHatchApprovalOption").AllowAlways,
				testid: "hatch-approval-option-allow-always",
				label: s._(
					/*BTDS*/
					""
				)
			},
			{
				option: r("WAWebHatchApprovalOption").Deny,
				testid: "hatch-approval-option-deny",
				label: s._(
					/*BTDS*/
					""
				)
			}
		];
	}
	var f = {
		request: {
			textAlign: "x2b8uid",
			rowGap: "x129bwdz",
			$$css: !0
		},
		options: {
			marginTop: "x1de0gy",
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(74), n = e.defaultOption, a = e.iconUrl, i = e.onConfirm, l = e.onDismiss, c = e.onSeeDetails, g = e.richDescription, h = e.spaceReaderGrantEligible, y = e.title, C = e.turnGrantEligible, b = n === void 0 ? r("WAWebHatchApprovalOption").AllowOnce : n, v = h === void 0 ? !1 : h, S = C === void 0 ? !1 : C, R = m(b), L = R[0], E = R[1], k = d(), I, T, D, x, $, P, N, M, w, A, F, O, B, W, q;
		if (t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== c || t[4] !== k || t[5] !== g || t[6] !== L || t[7] !== v || t[8] !== y || t[9] !== S) {
			var U = _({
				spaceReaderGrantEligible: v,
				turnGrantEligible: S
			}), V;
			t[25] !== i || t[26] !== L ? (V = function() {
				i(L);
			}, t[25] = i, t[26] = L, t[27] = V) : V = t[27];
			var H = V, G;
			t[28] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
				/*BTDS*/
				""
			), t[28] = G) : G = t[28];
			var z;
			t[29] !== H ? (z = {
				label: G,
				onPress: H,
				testid: "hatch-approval-confirm",
				variant: "filled"
			}, t[29] = H, t[30] = z) : z = t[30];
			var j;
			t[31] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
				/*BTDS*/
				""
			), t[31] = j) : j = t[31];
			var K;
			t[32] !== l ? (K = {
				label: j,
				onPress: l,
				testid: "hatch-approval-cancel",
				variant: "borderless"
			}, t[32] = l, t[33] = K) : K = t[33];
			var Q;
			t[34] !== z || t[35] !== K ? (Q = u.jsx(r("WDSButtonGroup.react"), {
				orientation: "stacked",
				width: "fill",
				primaryButtonProps: z,
				secondaryButtonProps: K
			}), t[34] = z, t[35] = K, t[36] = Q) : Q = t[36];
			var X = Q;
			T = r("WDSDialog.react"), W = X, q = "expressive", D = "expressive", x = l, $ = !0, P = "md", N = "hatch-approval-dialog", t[37] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
				/*BTDS*/
				""
			), t[37] = M) : M = t[37];
			var Y;
			t[38] !== a ? (Y = u.jsx(r("WAWebHatchApprovalIcon.react"), {
				iconUrl: a,
				size: "medium"
			}), t[38] = a, t[39] = Y) : Y = t[39];
			var J;
			t[40] !== y ? (J = u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				testid: "hatch-approval-summary",
				children: y
			}), t[40] = y, t[41] = J) : J = t[41];
			var Z;
			t[42] !== c || t[43] !== g ? (Z = c != null && u.jsxs(u.Fragment, { children: [g !== "" && (/[.!?]$/.test(g.trimEnd()) ? " " : ". "), u.jsx(r("WDSTextualLink.react"), {
				textConfig: "Body2",
				onClick: c,
				testid: "hatch-approval-see-details",
				children: s._(
					/*BTDS*/
					""
				)
			})] }), t[42] = c, t[43] = g, t[44] = Z) : Z = t[44];
			var ee;
			t[45] !== g || t[46] !== Z ? (ee = u.jsxs(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				testid: "hatch-approval-action",
				children: [g, Z]
			}), t[45] = g, t[46] = Z, t[47] = ee) : ee = t[47], t[48] !== Y || t[49] !== J || t[50] !== ee ? (w = u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: f.request,
				children: [
					Y,
					J,
					ee
				]
			}), t[48] = Y, t[49] = J, t[50] = ee, t[51] = w) : w = t[51], I = o("WAWebFlex.react").FlexColumn, A = f.options, F = "radiogroup", t[52] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
				/*BTDS*/
				""
			), t[52] = O) : O = t[52];
			var te;
			t[53] !== k || t[54] !== L ? (te = function(t) {
				var e = t.label, n = t.option, o = t.testid, a = k + "-" + o;
				return u.jsxs("label", {
					"data-testid": o + "-row",
					htmlFor: a,
					className: "x78zum5 x6s0dn4 x1s70e7g x1ypdohk xscbp6u x1xrf6ya",
					children: [u.jsx(r("WDSBaseRadio.react"), {
						checked: L === n,
						id: a,
						name: p,
						onChange: function() {
							return E(n);
						},
						testid: o,
						value: o
					}), u.jsx("div", {
						className: "x1iyjqo2",
						children: u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: e
						})
					})]
				}, o);
			}, t[53] = k, t[54] = L, t[55] = te) : te = t[55], B = U.map(te), t[0] = a, t[1] = i, t[2] = l, t[3] = c, t[4] = k, t[5] = g, t[6] = L, t[7] = v, t[8] = y, t[9] = S, t[10] = I, t[11] = T, t[12] = D, t[13] = x, t[14] = $, t[15] = P, t[16] = N, t[17] = M, t[18] = w, t[19] = A, t[20] = F, t[21] = O, t[22] = B, t[23] = W, t[24] = q;
		} else I = t[10], T = t[11], D = t[12], x = t[13], $ = t[14], P = t[15], N = t[16], M = t[17], w = t[18], A = t[19], F = t[20], O = t[21], B = t[22], W = t[23], q = t[24];
		var ne;
		t[56] !== I || t[57] !== A || t[58] !== F || t[59] !== O || t[60] !== B ? (ne = u.jsx(I, {
			xstyle: A,
			role: F,
			"aria-label": O,
			children: B
		}), t[56] = I, t[57] = A, t[58] = F, t[59] = O, t[60] = B, t[61] = ne) : ne = t[61];
		var re;
		return t[62] !== T || t[63] !== D || t[64] !== x || t[65] !== $ || t[66] !== P || t[67] !== N || t[68] !== M || t[69] !== w || t[70] !== ne || t[71] !== W || t[72] !== q ? (re = u.jsxs(T, {
			footer: W,
			headerType: q,
			layoutType: D,
			onDismiss: x,
			open: $,
			size: P,
			testid: N,
			title: M,
			children: [w, ne]
		}), t[62] = T, t[63] = D, t[64] = x, t[65] = $, t[66] = P, t[67] = N, t[68] = M, t[69] = w, t[70] = ne, t[71] = W, t[72] = q, t[73] = re) : re = t[73], re;
	}
	l.default = g;
}), 226);
