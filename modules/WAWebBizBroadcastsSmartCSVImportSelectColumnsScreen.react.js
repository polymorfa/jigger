__d("WAWebBizBroadcastsSmartCSVImportSelectColumnsScreen.react", [
	"fbt",
	"WAWebContactImportSmartColumnDetection",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebSelect.react",
	"WAWebSelectMenuItem.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"countWhere",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useId, m = c.useState, p = "min(92vh, 648px)", _ = "min(92vw, 436px)", f = {
		content: {
			minHeight: "x2lwn1j",
			overflowY: "x1odjw0f",
			rowGap: "x1j3ira4",
			$$css: !0
		},
		fieldWithHelper: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		footer: {
			width: "xh8yej3",
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			$$css: !0
		},
		previewCard: {
			backgroundColor: "x1h3rtpe",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingBottom: "xv6tirj",
			paddingTop: "x1h678fw",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xdx6fka",
			rowGap: "x121sasi",
			$$css: !0
		},
		previewHeader: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		root: {
			boxSizing: "x9f619",
			height: "x22hwcn",
			paddingBottom: "xv6tirj",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xyo0t3i",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1j3ira4",
			width: "xo89u87",
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
	}, g = 3, h = 240, y = .7;
	function C(e) {
		var t, n, a, i, l, c, p = o("react-compiler-runtime").c(56), _ = e.allHeaders, g = e.detection, h = e.onCancel, y = e.onConfirm, C = e.previewRows, S = (t = g.phoneColumn) == null ? void 0 : t.columnIndex, E = (n = (a = g.fullNameColumn) == null ? void 0 : a.columnIndex) != null ? n : (i = g.firstNameColumn) == null ? void 0 : i.columnIndex, k = ((l = g.phoneColumn) == null ? void 0 : l.confidence) === "medium", I = m(k ? S : null), T = I[0], D = I[1], x = m(k ? E : null), $ = x[0], P = x[1], N = d(), M = T != null && ((c = g.phoneColumn) == null ? void 0 : c.columnIndex) === T, w;
		p[0] !== M || p[1] !== T || p[2] !== C ? (w = T != null && (M || L(C, T)), p[0] = M, p[1] = T, p[2] = C, p[3] = w) : w = p[3];
		var A = w, F = T != null && !A, O = T != null && A, B = A ? T : null, W = $ != null || B != null || F, q;
		p[4] === Symbol.for("react.memo_cache_sentinel") ? (q = R(), p[4] = q) : q = p[4];
		var U = q, V;
		p[5] !== O || p[6] !== $ || p[7] !== y || p[8] !== T ? (V = function() {
			O && y({
				nameColumnIndex: $,
				phoneColumnIndex: T
			});
		}, p[5] = O, p[6] = $, p[7] = y, p[8] = T, p[9] = V) : V = p[9];
		var H = V, G;
		p[10] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
			/*BTDS*/
			""
		), p[10] = G) : G = p[10];
		var z;
		p[11] !== h ? (z = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			"aria-label": G,
			onPress: h,
			variant: "borderless",
			testid: "biz-broadcasts-column-picker-close-button"
		}), p[11] = h, p[12] = z) : z = p[12];
		var j;
		p[13] === Symbol.for("react.memo_cache_sentinel") ? (j = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			xstyle: f.title,
			children: s._(
				/*BTDS*/
				""
			)
		}), p[13] = j) : j = p[13];
		var K;
		p[14] !== z ? (K = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: f.header,
			children: [z, j]
		}), p[14] = z, p[15] = K) : K = p[15];
		var Q;
		p[16] === Symbol.for("react.memo_cache_sentinel") ? (Q = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), p[16] = Q) : Q = p[16];
		var X;
		p[17] === Symbol.for("react.memo_cache_sentinel") ? (X = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.sectionIntro,
			children: [Q, u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), p[17] = X) : X = p[17];
		var Y, J;
		p[18] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
			/*BTDS*/
			""
		), J = s._(
			/*BTDS*/
			""
		), p[18] = Y, p[19] = J) : (Y = p[18], J = p[19]);
		var Z;
		p[20] !== _ || p[21] !== $ ? (Z = u.jsx(v, {
			headers: _,
			value: $,
			onChange: P,
			label: Y,
			placeholder: J,
			testid: "biz-broadcasts-column-picker-name-select"
		}), p[20] = _, p[21] = $, p[22] = Z) : Z = p[22];
		var ee = F ? N : void 0, te;
		p[23] !== _ || p[24] !== T || p[25] !== F || p[26] !== ee ? (te = u.jsx(v, {
			headers: _,
			value: T,
			onChange: D,
			label: U,
			placeholder: U,
			testid: "biz-broadcasts-column-picker-phone-select",
			isInvalid: F,
			describedById: ee
		}), p[23] = _, p[24] = T, p[25] = F, p[26] = ee, p[27] = te) : te = p[27];
		var ne;
		p[28] !== N || p[29] !== T || p[30] !== F ? (ne = T == null || F ? u.jsx("div", {
			id: N,
			children: u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: F ? "secondaryNegative" : "contentDeemphasized",
				children: F ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})
		}) : null, p[28] = N, p[29] = T, p[30] = F, p[31] = ne) : ne = p[31];
		var re;
		p[32] !== te || p[33] !== ne ? (re = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.fieldWithHelper,
			children: [te, ne]
		}), p[32] = te, p[33] = ne, p[34] = re) : re = p[34];
		var oe;
		p[35] !== _ || p[36] !== $ || p[37] !== B || p[38] !== C || p[39] !== W ? (oe = W ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.previewCard,
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: f.previewHeader,
				children: [u.jsx(r("WDSText.react"), {
					type: "Body1Emphasized",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}), u.jsx(b, {
				allHeaders: _,
				nameColumnIndex: $,
				phoneColumnIndex: B,
				previewRows: C
			})]
		}) : null, p[35] = _, p[36] = $, p[37] = B, p[38] = C, p[39] = W, p[40] = oe) : oe = p[40];
		var ae;
		p[41] !== Z || p[42] !== re || p[43] !== oe || p[44] !== K ? (ae = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			grow: 1,
			xstyle: f.content,
			children: [
				K,
				X,
				Z,
				re,
				oe
			]
		}), p[41] = Z, p[42] = re, p[43] = oe, p[44] = K, p[45] = ae) : ae = p[45];
		var ie;
		p[46] === Symbol.for("react.memo_cache_sentinel") ? (ie = s._(
			/*BTDS*/
			""
		), p[46] = ie) : ie = p[46];
		var le = !O, se;
		p[47] !== H || p[48] !== le ? (se = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: f.footer,
			children: u.jsx(r("WDSButton.react"), {
				label: ie,
				variant: "filled",
				disabled: le,
				onPress: H,
				testid: "biz-broadcasts-column-picker-apply-button"
			})
		}), p[47] = H, p[48] = le, p[49] = se) : se = p[49];
		var ue;
		p[50] !== ae || p[51] !== se ? (ue = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.root,
			children: [ae, se]
		}), p[50] = ae, p[51] = se, p[52] = ue) : ue = p[52];
		var ce;
		return p[53] !== h || p[54] !== ue ? (ce = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			onOverlayClick: h,
			testid: "biz-broadcasts-column-picker-modal",
			children: ue
		}), p[53] = h, p[54] = ue, p[55] = ce) : ce = p[55], ce;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(25), n = e.allHeaders, a = e.nameColumnIndex, i = e.phoneColumnIndex, l = e.previewRows, s, c, d, m;
		if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l) {
			var p = l.slice(0, g), _ = a != null, f = i != null;
			t[8] !== _ || t[9] !== f ? (s = {
				0: { className: "xs2akgl xrvj5dj x8a3fw1 xcjjqqt" },
				1: { className: "xs2akgl xrvj5dj x8a3fw1 x1mkdm3x" }
			}[(!_ || !f) << 0], t[8] = _, t[9] = f, t[10] = s) : s = t[10], t[11] !== n || t[12] !== a ? (c = a != null ? u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDeemphasized",
				children: n[a]
			}) : null, t[11] = n, t[12] = a, t[13] = c) : c = t[13], t[14] !== n || t[15] !== i ? (d = i != null ? u.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDeemphasized",
				children: n[i]
			}) : null, t[14] = n, t[15] = i, t[16] = d) : d = t[16];
			var h;
			t[17] !== a || t[18] !== i ? (h = function(t, n) {
				var e, o;
				return u.jsxs(u.Fragment, { children: [a != null ? u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDefault",
					children: (e = t[a]) != null ? e : ""
				}) : null, i != null ? u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDefault",
					children: (o = t[i]) != null ? o : ""
				}) : null] }, n);
			}, t[17] = a, t[18] = i, t[19] = h) : h = t[19], m = p.map(h), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = s, t[5] = c, t[6] = d, t[7] = m;
		} else s = t[4], c = t[5], d = t[6], m = t[7];
		var y;
		return t[20] !== s || t[21] !== c || t[22] !== d || t[23] !== m ? (y = u.jsxs("div", babelHelpers.extends({}, s, { children: [
			c,
			d,
			m
		] })), t[20] = s, t[21] = c, t[22] = d, t[23] = m, t[24] = y) : y = t[24], y;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(19), n = e.describedById, r = e.headers, a = e.isInvalid, i = e.label, l = e.onChange, s = e.placeholder, c = e.testid, d = e.value, m = n === void 0 ? null : n, p = a === void 0 ? !1 : a, _;
		t[0] !== l ? (_ = function(t) {
			l(Number(t));
		}, t[0] = l, t[1] = _) : _ = t[1];
		var f = _, g = m != null ? m : void 0, y = d == null ? "" : String(d), C = d == null ? void 0 : String(d), b;
		if (t[2] !== r || t[3] !== c) {
			var v;
			t[5] !== c ? (v = function(t, n) {
				return u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
					optionId: String(n),
					primary: S(n, t),
					searchCriteria: t,
					testid: c + "-option-" + n
				}, n);
			}, t[5] = c, t[6] = v) : v = t[6], b = r.map(v), t[2] = r, t[3] = c, t[4] = b;
		} else b = t[4];
		var R;
		t[7] !== f || t[8] !== i || t[9] !== s || t[10] !== y || t[11] !== C || t[12] !== b || t[13] !== c ? (R = u.jsx(o("WAWebSelect.react").Select, {
			ariaRoleDescription: i,
			defaultLabel: s,
			initialSelection: C,
			label: i,
			menuMaxHeight: h,
			onChange: f,
			testid: c,
			theme: "about-20-screen",
			width: "100%",
			children: b
		}, y), t[7] = f, t[8] = i, t[9] = s, t[10] = y, t[11] = C, t[12] = b, t[13] = c, t[14] = R) : R = t[14];
		var L;
		return t[15] !== p || t[16] !== g || t[17] !== R ? (L = u.jsx("div", {
			"aria-describedby": g,
			"aria-invalid": p,
			children: R
		}), t[15] = p, t[16] = g, t[17] = R, t[18] = L) : L = t[18], L;
	}
	function S(e, t) {
		return "Column " + (e + 1) + ": " + t;
	}
	function R() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function L(e, t) {
		var n = e.slice(0, g).map(function(e) {
			var n;
			return (n = e[t]) != null ? n : "";
		}).filter(function(e) {
			return e.trim() !== "";
		});
		if (n.length === 0) return !1;
		var a = r("countWhere")(n, o("WAWebContactImportSmartColumnDetection").looksLikePhoneValue);
		return a / n.length >= y;
	}
	l.default = C;
}), 226);
