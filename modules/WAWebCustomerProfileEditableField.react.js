__d("WAWebCustomerProfileEditableField.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebUimUie.react",
	"WDSButton.react",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = {
		row: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		editButtonContainer: {
			marginInlineStart: "xvc5jky",
			opacity: "xg01cxk",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		editButtonVisible: {
			opacity: "x1hc1fzr",
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
		},
		editFieldRow: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		fieldContainer: {
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		editActions: {
			columnGap: "x1trrmfo",
			marginTop: "x1380le5",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(62), n = e.icon, a = e.label, i = e.onSave, l = e.placeholder, c = e.value, d = _(!1), g = d[0], h = d[1], y = _(!1), C = y[0], b = y[1], v = _(c), S = v[0], R = v[1], L = p(null), E, k;
		t[0] !== g ? (E = function() {
			if (g) {
				var e;
				(e = L.current) == null || e.focus();
			}
		}, k = [g], t[0] = g, t[1] = E, t[2] = k) : (E = t[1], k = t[2]), m(E, k);
		var I;
		t[3] !== c ? (I = function() {
			R(c), h(!0);
		}, t[3] = c, t[4] = I) : I = t[4];
		var T = I, D;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			b(!0);
		}, t[5] = D) : D = t[5];
		var x = D, $;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			b(!1);
		}, t[6] = $) : $ = t[6];
		var P = $, N;
		t[7] !== S || t[8] !== i || t[9] !== c ? (N = function() {
			var e = S.trim();
			e !== c && i(e), h(!1);
		}, t[7] = S, t[8] = i, t[9] = c, t[10] = N) : N = t[10];
		var M = N, w;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (w = function() {
			h(!1);
		}, t[11] = w) : w = t[11];
		var A = w, F;
		t[12] !== M ? (F = function(t) {
			t.key === "Enter" ? (t.preventDefault(), M()) : t.key === "Escape" && (t.stopPropagation(), A());
		}, t[12] = M, t[13] = F) : F = t[13];
		var O = F;
		if (g) {
			var B;
			t[14] !== n ? (B = u.jsx(o("WAWebFlex.react").FlexItem, {
				align: "center",
				justify: "center",
				xstyle: f.iconContainer,
				children: n
			}), t[14] = n, t[15] = B) : B = t[15];
			var W, q;
			t[16] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xdj266r x14z9mp xat24cr x1lziwak x16ovd2e x12xbjc7 x1iw51ew xde1mab xh8yej3" }, q = { className: "xhslqc4 x1pg5gke x181vq82 x1uc92m" }, t[16] = W, t[17] = q) : (W = t[16], q = t[17]);
			var U;
			t[18] !== a ? (U = u.jsx("legend", babelHelpers.extends({}, q, { children: a })), t[18] = a, t[19] = U) : U = t[19];
			var V;
			t[20] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by x14ug900 xjb2p0i x1qlqyl8 x15bjb6t x1a2a7pz xexx8yu x18d9i69 x1c1uobl xyri2b xh8yej3" }, t[20] = V) : V = t[20];
			var H = l != null ? String(l) : void 0, G;
			t[21] === Symbol.for("react.memo_cache_sentinel") ? (G = function(t) {
				return R(t.target.value);
			}, t[21] = G) : G = t[21];
			var z;
			t[22] !== S || t[23] !== O || t[24] !== H ? (z = u.jsx("input", babelHelpers.extends({}, V, {
				ref: L,
				value: S,
				placeholder: H,
				onChange: G,
				onKeyDown: O
			})), t[22] = S, t[23] = O, t[24] = H, t[25] = z) : z = t[25];
			var j;
			t[26] !== U || t[27] !== z ? (j = u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: f.fieldContainer,
				children: u.jsxs("fieldset", babelHelpers.extends({}, W, { children: [U, z] }))
			}), t[26] = U, t[27] = z, t[28] = j) : j = t[28];
			var K;
			t[29] !== j || t[30] !== B ? (K = u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: f.editFieldRow,
				gap: 12,
				children: [B, j]
			}), t[29] = j, t[30] = B, t[31] = K) : K = t[31];
			var Q;
			t[32] === Symbol.for("react.memo_cache_sentinel") ? (Q = u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcClose.react"),
				size: "small",
				variant: "tonal",
				onPress: A,
				"aria-label": s._(
					/*BTDS*/
					""
				)
			}), t[32] = Q) : Q = t[32];
			var X;
			t[33] === Symbol.for("react.memo_cache_sentinel") ? (X = s._(
				/*BTDS*/
				""
			), t[33] = X) : X = t[33];
			var Y;
			t[34] !== M ? (Y = u.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "end",
				xstyle: f.editActions,
				children: [Q, u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcCheck.react"),
					size: "small",
					variant: "filled",
					onPress: M,
					"aria-label": X
				})]
			}), t[34] = M, t[35] = Y) : Y = t[35];
			var J;
			return t[36] !== K || t[37] !== Y ? (J = u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "EditableFieldEdit",
				escapable: !0,
				requestDismiss: A,
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: f.row,
					children: [K, Y]
				})
			}), t[36] = K, t[37] = Y, t[38] = J) : J = t[38], J;
		}
		var Z;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (Z = { className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n" }, t[39] = Z) : Z = t[39];
		var ee;
		t[40] !== n ? (ee = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: f.iconContainer,
			children: n
		}), t[40] = n, t[41] = ee) : ee = t[41];
		var te;
		t[42] !== a || t[43] !== l || t[44] !== c ? (te = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: f.fieldContainer,
			children: c !== "" ? u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: a
			}), u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				maxLines: 1,
				children: c
			})] }) : u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				maxLines: 1,
				children: l != null ? l : ""
			})
		}), t[42] = a, t[43] = l, t[44] = c, t[45] = te) : te = t[45];
		var ne = C && f.editButtonVisible, re;
		t[46] !== ne ? (re = [f.editButtonContainer, ne], t[46] = ne, t[47] = re) : re = t[47];
		var oe;
		t[48] === Symbol.for("react.memo_cache_sentinel") ? (oe = { className: "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn" }, t[48] = oe) : oe = t[48];
		var ae;
		t[49] !== a ? (ae = s._(
			/*BTDS*/
			"",
			[s._param("fieldLabel", a)]
		), t[49] = a, t[50] = ae) : ae = t[50];
		var ie;
		t[51] === Symbol.for("react.memo_cache_sentinel") ? (ie = u.jsx(r("WDSIconIcEdit.react"), {
			width: 20,
			height: 20
		}), t[51] = ie) : ie = t[51];
		var le;
		t[52] !== T || t[53] !== ae ? (le = u.jsx("button", babelHelpers.extends({}, oe, {
			onClick: T,
			"aria-label": ae,
			children: ie
		})), t[52] = T, t[53] = ae, t[54] = le) : le = t[54];
		var se;
		t[55] !== re || t[56] !== le ? (se = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: re,
			children: le
		}), t[55] = re, t[56] = le, t[57] = se) : se = t[57];
		var ue;
		return t[58] !== ee || t[59] !== te || t[60] !== se ? (ue = u.jsx("div", babelHelpers.extends({
			role: "group",
			onMouseEnter: x,
			onMouseLeave: P
		}, Z, { children: u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: f.row,
			children: [
				ee,
				te,
				se
			]
		}) })), t[58] = ee, t[59] = te, t[60] = se, t[61] = ue) : ue = t[61], ue;
	}
	l.default = g;
}), 226);
