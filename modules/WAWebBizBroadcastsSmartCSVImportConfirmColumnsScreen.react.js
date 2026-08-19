__d("WAWebBizBroadcastsSmartCSVImportConfirmColumnsScreen.react", [
	"fbt",
	"WAWebBizBroadcastsSmartCSVImportContactUtils",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebSelect.react",
	"WAWebSelectMenuItem.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useId, m = c.useState, p = 240, _ = 3, f = {
		columnSection: {
			rowGap: "x1j3ira4",
			$$css: !0
		},
		content: {
			rowGap: "x1j3ira4",
			$$css: !0
		},
		controlsStyle: {
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		previewCard: {
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingBottom: "xvpt6g3",
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xdx6fka",
			rowGap: "x1f0uite",
			$$css: !0
		},
		root: {
			rowGap: "x1f0uite",
			width: "xh8yej3",
			$$css: !0
		},
		sectionIntro: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		title: {
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function g(e) {
		var t, n, a = o("react-compiler-runtime").c(60), i = e.contacts, l = e.context, c = e.onClose, p = e.onContinue, g = l.detection, y;
		a[0] !== l ? (y = R(l), a[0] = l, a[1] = y) : y = a[1];
		var b = y, v = g.phoneColumn, S = m((t = b == null ? void 0 : b.header) != null ? t : null), L = S[0], E = S[1], k = m((n = v == null ? void 0 : v.header) != null ? n : l.headerRow.length > 0 ? l.headerRow[0] : null), I = k[0], T = k[1], D = d(), x;
		a[2] !== i || a[3] !== l || a[4] !== I ? (x = I != null && o("WAWebBizBroadcastsSmartCSVImportContactUtils").isSmartCSVImportPhoneHeaderValid(i, l, I), a[2] = i, a[3] = l, a[4] = I, a[5] = x) : x = a[5];
		var $ = x, P = I != null && !$, N = !$, M;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), a[6] = M) : M = a[6];
		var w;
		a[7] !== $ || a[8] !== p || a[9] !== L || a[10] !== I ? (w = function() {
			!$ || I == null || p({
				nameHeader: L,
				phoneHeader: I
			});
		}, a[7] = $, a[8] = p, a[9] = L, a[10] = I, a[11] = w) : w = a[11];
		var A;
		a[12] !== N || a[13] !== w ? (A = u.jsx(r("WDSButton.react"), {
			disabled: N,
			label: M,
			onPress: w,
			variant: "filled",
			testid: "biz-broadcasts-confirm-columns-continue-button"
		}), a[12] = N, a[13] = w, a[14] = A) : A = a[14];
		var F;
		a[15] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), a[15] = F) : F = a[15];
		var O;
		a[16] !== c ? (O = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			"aria-label": F,
			onPress: c,
			variant: "borderless",
			testid: "biz-broadcasts-confirm-columns-close-button"
		}), a[16] = c, a[17] = O) : O = a[17];
		var B;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (B = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			xstyle: f.title,
			children: s._(
				/*BTDS*/
				""
			)
		}), a[18] = B) : B = a[18];
		var W;
		a[19] !== O ? (W = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: f.header,
			children: [O, B]
		}), a[19] = O, a[20] = W) : W = a[20];
		var q;
		a[21] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), a[21] = q) : q = a[21];
		var U;
		a[22] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.sectionIntro,
			children: [q, u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), a[22] = U) : U = a[22];
		var V;
		a[23] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
			/*BTDS*/
			""
		), a[23] = V) : V = a[23];
		var H;
		a[24] !== l.headerRow || a[25] !== L ? (H = u.jsx(h, {
			headers: l.headerRow,
			label: V,
			onChange: E,
			testid: "biz-broadcasts-confirm-columns-name-select",
			value: L
		}), a[24] = l.headerRow, a[25] = L, a[26] = H) : H = a[26];
		var G;
		a[27] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
			/*BTDS*/
			""
		), a[27] = G) : G = a[27];
		var z = P ? D : void 0, j;
		a[28] !== l.headerRow || a[29] !== I || a[30] !== P || a[31] !== z ? (j = u.jsx(h, {
			headers: l.headerRow,
			label: G,
			onChange: T,
			testid: "biz-broadcasts-confirm-columns-phone-select",
			value: I,
			isInvalid: P,
			describedById: z
		}), a[28] = l.headerRow, a[29] = I, a[30] = P, a[31] = z, a[32] = j) : j = a[32];
		var K;
		a[33] !== D || a[34] !== P ? (K = P ? u.jsx("div", {
			id: D,
			children: u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "secondaryNegative",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : null, a[33] = D, a[34] = P, a[35] = K) : K = a[35];
		var Q;
		a[36] !== H || a[37] !== j || a[38] !== K ? (Q = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.columnSection,
			children: [
				U,
				H,
				j,
				K
			]
		}), a[36] = H, a[37] = j, a[38] = K, a[39] = Q) : Q = a[39];
		var X;
		a[40] === Symbol.for("react.memo_cache_sentinel") ? (X = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), a[40] = X) : X = a[40];
		var Y;
		a[41] === Symbol.for("react.memo_cache_sentinel") ? (Y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.sectionIntro,
			children: [X, u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), a[41] = Y) : Y = a[41];
		var J;
		a[42] !== i ? (J = i.slice(0, _), a[42] = i, a[43] = J) : J = a[43];
		var Z;
		a[44] !== l || a[45] !== $ || a[46] !== L || a[47] !== I || a[48] !== J ? (Z = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.previewCard,
			children: [Y, u.jsx(C, {
				contacts: J,
				context: l,
				nameHeader: L,
				phoneHeader: I,
				showPhoneValues: $
			})]
		}), a[44] = l, a[45] = $, a[46] = L, a[47] = I, a[48] = J, a[49] = Z) : Z = a[49];
		var ee;
		a[50] !== Q || a[51] !== Z ? (ee = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.content,
			children: [Q, Z]
		}), a[50] = Q, a[51] = Z, a[52] = ee) : ee = a[52];
		var te;
		a[53] !== W || a[54] !== ee ? (te = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.root,
			children: [W, ee]
		}), a[53] = W, a[54] = ee, a[55] = te) : te = a[55];
		var ne;
		return a[56] !== c || a[57] !== te || a[58] !== A ? (ne = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
			actions: A,
			onOverlayClick: c,
			testid: "biz-broadcasts-confirm-columns-modal",
			controlsStyle: f.controlsStyle,
			children: te
		}), a[56] = c, a[57] = te, a[58] = A, a[59] = ne) : ne = a[59], ne;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(23), n = e.describedById, r = e.headers, a = e.isInvalid, i = e.label, l = e.onChange, c = e.testid, d = e.value, m = n === void 0 ? null : n, _ = a === void 0 ? !1 : a, f;
		t[0] !== r || t[1] !== d ? (f = y(r, d), t[0] = r, t[1] = d, t[2] = f) : f = t[2];
		var g = f, h = g == null ? null : String(g), C;
		t[3] !== r || t[4] !== l ? (C = function(t) {
			var e, n = Number(t);
			l((e = r[n]) != null ? e : null);
		}, t[3] = r, t[4] = l, t[5] = C) : C = t[5];
		var v = C, S = m != null ? m : void 0, R = h != null ? h : "", L;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[6] = L) : L = t[6];
		var E;
		if (t[7] !== r || t[8] !== c) {
			var k;
			t[10] !== c ? (k = function(t, n) {
				return u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
					optionId: String(n),
					primary: b(n, t),
					searchCriteria: t,
					testid: c + "-option-" + n
				}, n + ":" + t);
			}, t[10] = c, t[11] = k) : k = t[11], E = r.map(k), t[7] = r, t[8] = c, t[9] = E;
		} else E = t[9];
		var I;
		t[12] !== v || t[13] !== i || t[14] !== h || t[15] !== R || t[16] !== E || t[17] !== c ? (I = u.jsx(o("WAWebSelect.react").Select, {
			ariaRoleDescription: i,
			defaultLabel: L,
			initialSelection: h,
			label: i,
			menuMaxHeight: p,
			onChange: v,
			testid: c,
			theme: "about-20-screen",
			width: "100%",
			children: E
		}, R), t[12] = v, t[13] = i, t[14] = h, t[15] = R, t[16] = E, t[17] = c, t[18] = I) : I = t[18];
		var T;
		return t[19] !== _ || t[20] !== S || t[21] !== I ? (T = u.jsx("div", {
			"aria-describedby": S,
			"aria-invalid": _,
			children: I
		}), t[19] = _, t[20] = S, t[21] = I, t[22] = T) : T = t[22], T;
	}
	function y(e, t) {
		if (t == null) return null;
		var n = e.indexOf(t);
		return n === -1 ? null : n;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(29), n = e.contacts, a = e.context, i = e.nameHeader, l = e.phoneHeader, c = e.showPhoneValues, d, m, p, f, g;
		if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== c) {
			var h = v(a, i), y = v(a, l);
			d = a.sampleRows.slice(0, _), t[10] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "xs2akgl xrvj5dj xcjjqqt x8a3fw1" }, t[10] = m) : m = t[10];
			var C;
			t[11] !== i ? (C = i != null ? i : s._(
				/*BTDS*/
				""
			), t[11] = i, t[12] = C) : C = t[12], t[13] !== C ? (p = u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDeemphasized",
				children: C
			}), t[13] = C, t[14] = p) : p = t[14];
			var b;
			t[15] !== l ? (b = l != null ? l : s._(
				/*BTDS*/
				""
			), t[15] = l, t[16] = b) : b = t[16], t[17] !== b ? (f = u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDeemphasized",
				children: b
			}), t[17] = b, t[18] = f) : f = t[18], g = d.map(function(e, t) {
				var a, i, l, s, d = n[t];
				return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDefault",
					children: (i = S(e, h)) != null ? i : d != null ? o("WAWebBizBroadcastsSmartCSVImportContactUtils").formatSmartCSVImportContactName(d) : ""
				}), u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDefault",
					children: c && (l = (s = S(e, y)) != null ? s : d == null ? void 0 : d.phone) != null ? l : ""
				})] }, (a = d == null ? void 0 : d.rowIndex) != null ? a : t);
			}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = c, t[5] = d, t[6] = m, t[7] = p, t[8] = f, t[9] = g;
		} else d = t[5], m = t[6], p = t[7], f = t[8], g = t[9];
		var R;
		t[19] !== n || t[20] !== d.length || t[21] !== c ? (R = d.length === 0 ? n.map(function(e) {
			return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDefault",
				children: o("WAWebBizBroadcastsSmartCSVImportContactUtils").formatSmartCSVImportContactName(e)
			}), u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDefault",
				children: c ? e.phone : ""
			})] }, e.rowIndex);
		}) : null, t[19] = n, t[20] = d.length, t[21] = c, t[22] = R) : R = t[22];
		var L;
		return t[23] !== m || t[24] !== p || t[25] !== f || t[26] !== g || t[27] !== R ? (L = u.jsxs("div", babelHelpers.extends({}, m, { children: [
			p,
			f,
			g,
			R
		] })), t[23] = m, t[24] = p, t[25] = f, t[26] = g, t[27] = R, t[28] = L) : L = t[28], L;
	}
	function b(e, t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("column number", e + 1), s._param("column header", t)]
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e, t) {
		if (t == null) return null;
		var n = e.headerRow.indexOf(t);
		return n === -1 ? null : n;
	}
	function S(e, t) {
		if (t == null) return null;
		var n = e[t];
		if (typeof n != "string") return null;
		var r = n.trim();
		return r === "" ? null : r;
	}
	function R(e) {
		var t, n, r = e.detection;
		return (t = (n = r.fullNameColumn) != null ? n : r.firstNameColumn) != null ? t : r.lastNameColumn;
	}
	l.default = g;
}), 226);
