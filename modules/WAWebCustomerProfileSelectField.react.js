__d("WAWebCustomerProfileSelectField.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebUimUie.react",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = c.useRef, _ = c.useState, f = {
		row: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		editButtonContainer: {
			marginInlineStart: "xvc5jky",
			flexShrink: "x2lah0s",
			opacity: "xg01cxk x5b7970",
			$$css: !0
		},
		editButton: {
			alignItems: "x6s0dn4",
			background: "x11g6tue",
			borderTopColor: "x1v8p93f",
			borderBottomColor: "x16stqrj",
			borderTopStyle: "x1ejq31n",
			borderBottomStyle: "x1sy0etr",
			borderTopWidth: "x972fbf",
			borderBottomWidth: "x1qhh985",
			borderInlineStartColor: "xv5lvn5",
			borderInlineEndColor: "x1o3jo1z",
			borderInlineStartStyle: "xstzfhl",
			borderInlineEndStyle: "x18oe1m7",
			borderInlineStartWidth: "x14e42zd",
			borderInlineEndWidth: "x10w94by",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			color: "xhslqc4",
			cursor: "x1ypdohk",
			display: "x78zum5",
			height: "xzpcc6d",
			justifyContent: "xl56j7k",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			width: "x1xephfl",
			":hover_backgroundColor": "x1nsvvxn",
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
		fieldContainer: {
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		editFieldRow: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		selectTrigger: {
			alignItems: "x6s0dn4",
			background: "x11g6tue",
			borderTopColor: "x1v8p93f",
			borderBottomColor: "x16stqrj",
			borderTopStyle: "x1ejq31n",
			borderBottomStyle: "x1sy0etr",
			borderTopWidth: "x972fbf",
			borderBottomWidth: "x1qhh985",
			borderInlineStartColor: "xv5lvn5",
			borderInlineEndColor: "x1o3jo1z",
			borderInlineStartStyle: "xstzfhl",
			borderInlineEndStyle: "x18oe1m7",
			borderInlineStartWidth: "x14e42zd",
			borderInlineEndWidth: "x10w94by",
			color: "x14ug900",
			cursor: "x1ypdohk",
			display: "x78zum5",
			fontFamily: "xjb2p0i",
			fontSize: "x1qlqyl8",
			justifyContent: "x1qughib",
			lineHeight: "x15bjb6t",
			outline: "x1a2a7pz",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
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
		var t = o("react-compiler-runtime").c(96), n = e.icon, a = e.label, i = e.onSave, l = e.options, c = e.placeholder, d = e.testid, m = e.value, g = _(!1), h = g[0], y = g[1], C = _(m), b = C[0], v = C[1], S = p(null), R;
		if (t[0] !== l || t[1] !== m) {
			var L;
			t[3] !== m ? (L = function(t) {
				return t.value === m;
			}, t[3] = m, t[4] = L) : L = t[4], R = l.find(L), t[0] = l, t[1] = m, t[2] = R;
		} else R = t[2];
		var E = R, k;
		if (t[5] !== b || t[6] !== l) {
			var I;
			t[8] !== b ? (I = function(t) {
				return t.value === b;
			}, t[8] = b, t[9] = I) : I = t[9], k = l.find(I), t[5] = b, t[6] = l, t[7] = k;
		} else k = t[7];
		var T = k, D;
		t[10] !== m ? (D = function() {
			v(m), y(!0);
		}, t[10] = m, t[11] = D) : D = t[11];
		var x = D, $;
		t[12] !== m ? ($ = function() {
			v(m), y(!1);
		}, t[12] = m, t[13] = $) : $ = t[13];
		var P = $, N;
		t[14] !== b || t[15] !== i || t[16] !== m ? (N = function() {
			b != null && b !== m && i(b), y(!1);
		}, t[14] = b, t[15] = i, t[16] = m, t[17] = N) : N = t[17];
		var M = N, w;
		if (t[18] !== b || t[19] !== l || t[20] !== d) {
			var A;
			t[22] !== b || t[23] !== d ? (A = function(t) {
				return u.jsx(r("WDSMenuItem.react"), {
					isToggleable: !0,
					onPress: function() {
						return v(t.value);
					},
					testid: d + "-option-" + t.value,
					title: t.label,
					toggled: b === t.value
				}, t.value);
			}, t[22] = b, t[23] = d, t[24] = A) : A = t[24], w = l.map(A), t[18] = b, t[19] = l, t[20] = d, t[21] = w;
		} else w = t[21];
		var F;
		t[25] !== w ? (F = u.jsx(r("WDSMenu.react"), { children: w }), t[25] = w, t[26] = F) : F = t[26];
		var O = F, B;
		t[27] !== O ? (B = {
			targetRef: S,
			menu: O,
			dismissable: !0
		}, t[27] = O, t[28] = B) : B = t[28];
		var W = r("useWDSMenu")(B), q = W.closeMenu, U = W.isMenuOpen, V = W.menuPortal, H = W.openMenu, G;
		t[29] !== q || t[30] !== U || t[31] !== H ? (G = function(t) {
			U ? q() : H(t);
		}, t[29] = q, t[30] = U, t[31] = H, t[32] = G) : G = t[32];
		var z = G, j;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (j = function(t) {
			S.current = t;
		}, t[33] = j) : j = t[33];
		var K = j;
		if (h) {
			var Q, X = d + "-edit", Y;
			t[34] !== n ? (Y = u.jsx(o("WAWebFlex.react").FlexItem, {
				align: "center",
				justify: "center",
				xstyle: f.iconContainer,
				children: n
			}), t[34] = n, t[35] = Y) : Y = t[35];
			var J, Z;
			t[36] === Symbol.for("react.memo_cache_sentinel") ? (J = { className: "xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xdj266r x14z9mp xat24cr x1lziwak x16ovd2e x12xbjc7 x1iw51ew xde1mab xh8yej3" }, Z = { className: "xhslqc4 x1pg5gke x181vq82 x1uc92m" }, t[36] = J, t[37] = Z) : (J = t[36], Z = t[37]);
			var ee;
			t[38] !== a ? (ee = u.jsx("legend", babelHelpers.extends({}, Z, { children: a })), t[38] = a, t[39] = ee) : ee = t[39];
			var te = d + "-select-trigger", ne = T != null ? "contentDefault" : "contentDeemphasized", re = (Q = T == null ? void 0 : T.label) != null ? Q : c, oe;
			t[40] !== ne || t[41] !== re ? (oe = u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: ne,
				maxLines: 1,
				children: re
			}), t[40] = ne, t[41] = re, t[42] = oe) : oe = t[42];
			var ae;
			t[43] === Symbol.for("react.memo_cache_sentinel") ? (ae = u.jsx(r("WDSIconIcArrowDropDown.react"), {
				height: 20,
				width: 20
			}), t[43] = ae) : ae = t[43];
			var ie;
			t[44] !== z || t[45] !== U || t[46] !== te || t[47] !== oe ? (ie = u.jsxs(r("WAWebUnstyledButton.react"), {
				xstyle: f.selectTrigger,
				"aria-expanded": U,
				"aria-haspopup": "menu",
				onClick: z,
				ref: K,
				testid: te,
				children: [oe, ae]
			}), t[44] = z, t[45] = U, t[46] = te, t[47] = oe, t[48] = ie) : ie = t[48];
			var le;
			t[49] !== ee || t[50] !== ie ? (le = u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: f.fieldContainer,
				children: u.jsxs("fieldset", babelHelpers.extends({}, J, { children: [ee, ie] }))
			}), t[49] = ee, t[50] = ie, t[51] = le) : le = t[51];
			var se;
			t[52] !== Y || t[53] !== le ? (se = u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: f.editFieldRow,
				gap: 12,
				children: [Y, le]
			}), t[52] = Y, t[53] = le, t[54] = se) : se = t[54];
			var ue = d + "-cancel", ce;
			t[55] === Symbol.for("react.memo_cache_sentinel") ? (ce = s._(
				/*BTDS*/
				""
			), t[55] = ce) : ce = t[55];
			var de;
			t[56] !== P || t[57] !== ue ? (de = u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcClose.react"),
				size: "small",
				variant: "tonal",
				onPress: P,
				testid: ue,
				"aria-label": ce
			}), t[56] = P, t[57] = ue, t[58] = de) : de = t[58];
			var me = b == null, pe = d + "-confirm", _e;
			t[59] === Symbol.for("react.memo_cache_sentinel") ? (_e = s._(
				/*BTDS*/
				""
			), t[59] = _e) : _e = t[59];
			var fe;
			t[60] !== M || t[61] !== me || t[62] !== pe ? (fe = u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcCheck.react"),
				size: "small",
				variant: "filled",
				disabled: me,
				onPress: M,
				testid: pe,
				"aria-label": _e
			}), t[60] = M, t[61] = me, t[62] = pe, t[63] = fe) : fe = t[63];
			var ge;
			t[64] !== de || t[65] !== fe ? (ge = u.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "end",
				xstyle: f.editActions,
				children: [de, fe]
			}), t[64] = de, t[65] = fe, t[66] = ge) : ge = t[66];
			var he;
			t[67] !== V || t[68] !== X || t[69] !== se || t[70] !== ge ? (he = u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: f.row,
				testid: X,
				children: [
					se,
					ge,
					V
				]
			}), t[67] = V, t[68] = X, t[69] = se, t[70] = ge, t[71] = he) : he = t[71];
			var ye;
			return t[72] !== P || t[73] !== he ? (ye = u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "CustomerProfileSelectFieldEdit",
				escapable: !0,
				requestDismiss: P,
				children: he
			}), t[72] = P, t[73] = he, t[74] = ye) : ye = t[74], ye;
		}
		var Ce;
		t[75] === Symbol.for("react.memo_cache_sentinel") ? (Ce = { className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n x-default-marker" }, t[75] = Ce) : Ce = t[75];
		var be;
		t[76] !== n ? (be = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: f.iconContainer,
			children: n
		}), t[76] = n, t[77] = be) : be = t[77];
		var ve;
		t[78] !== a || t[79] !== E ? (ve = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: f.fieldContainer,
			children: E != null ? u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: a
			}), u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				maxLines: 1,
				children: E.label
			})] }) : u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				maxLines: 1,
				children: a
			})
		}), t[78] = a, t[79] = E, t[80] = ve) : ve = t[80];
		var Se;
		t[81] !== a ? (Se = s._(
			/*BTDS*/
			"",
			[s._param("fieldLabel", a)]
		), t[81] = a, t[82] = Se) : Se = t[82];
		var Re = d + "-edit-button", Le;
		t[83] === Symbol.for("react.memo_cache_sentinel") ? (Le = u.jsx(r("WDSIconIcEdit.react"), {
			width: 20,
			height: 20
		}), t[83] = Le) : Le = t[83];
		var Ee;
		t[84] !== x || t[85] !== Se || t[86] !== Re ? (Ee = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: f.editButtonContainer,
			children: u.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: f.editButton,
				"aria-label": Se,
				onClick: x,
				testid: Re,
				children: Le
			})
		}), t[84] = x, t[85] = Se, t[86] = Re, t[87] = Ee) : Ee = t[87];
		var ke;
		t[88] !== be || t[89] !== ve || t[90] !== Ee ? (ke = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: f.row,
			children: [
				be,
				ve,
				Ee
			]
		}), t[88] = be, t[89] = ve, t[90] = Ee, t[91] = ke) : ke = t[91];
		var Ie;
		return t[92] !== Ce || t[93] !== ke || t[94] !== d ? (Ie = u.jsx("div", babelHelpers.extends({
			"data-testid": d,
			role: "group"
		}, Ce, { children: ke })), t[92] = Ce, t[93] = ke, t[94] = d, t[95] = Ie) : Ie = t[95], Ie;
	}
	l.default = g;
}), 226);
