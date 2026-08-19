__d("WAWebBizBroadcastsSmartCSVImportSegmentAudienceScreen.react", [
	"fbt",
	"$InternalEnum",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebSelect.react",
	"WAWebSelectMenuItem.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = [], _ = 240, f = "calc(92vh - 72px)", g = "min(92vw, 500px)", h = s._(
		/*BTDS*/
		""
	).toString(), y = n("$InternalEnum")({
		ColumnBasedSplit: "column_based_split",
		DivideEqually: "divide_equally"
	}), C = {
		actions: {
			columnGap: "x1s70e7g",
			$$css: !0
		},
		controlsStyle: {
			paddingBottom: "xv6tirj",
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xyo0t3i",
			paddingInlineStart: "xb0esv5",
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			$$css: !0
		},
		previewCard: {
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingBottom: "xvg22vi",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1f0uite",
			$$css: !0
		},
		root: {
			boxSizing: "x9f619",
			maxHeight: "x1tcay5q",
			overflowY: "x1odjw0f",
			paddingTop: "x1h678fw",
			paddingInlineEnd: "xyo0t3i",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1f0uite",
			width: "x1pw0tm0",
			$$css: !0
		},
		selectField: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		title: {
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function b(e) {
		var t, n, a = o("react-compiler-runtime").c(83), i = e.contacts, l = e.context, c = e.errorList, d = e.maxContactsPerAudience, f = e.onBack, g = e.onContinue, h = e.onSkip, b = c === void 0 ? p : c, E;
		a[0] !== d ? (E = d === void 0 ? o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit() : d, a[0] = d, a[1] = E) : E = a[1];
		var k = E, x;
		a[2] !== l ? (x = L(l), a[2] = l, a[3] = x) : x = a[3];
		var $ = x, P;
		a[4] !== i || a[5] !== b ? (P = T(i, b), a[4] = i, a[5] = b, a[6] = P) : P = a[6];
		var N = P, M = (t = (n = l.rawRows) == null ? void 0 : n.length) != null ? t : N.length, w = k > 0 && M > k, A = m(w ? null : y.ColumnBasedSplit), F = A[0], O = A[1], B = m(null), W = B[0], q = B[1], U;
		if (a[7] !== $ || a[8] !== W) {
			var V;
			a[10] !== W ? (V = function(t) {
				return t.header === W;
			}, a[10] = W, a[11] = V) : V = a[11], U = $.find(V), a[7] = $, a[8] = W, a[9] = U;
		} else U = a[9];
		var H = U, G = F === y.ColumnBasedSplit ? H == null ? void 0 : H.header : null, z;
		e: {
			if (F === y.DivideEqually) {
				var j;
				a[12] !== w || a[13] !== k || a[14] !== N ? (j = w ? D(N, k) : [], a[12] = w, a[13] = k, a[14] = N, a[15] = j) : j = a[15], z = j;
				break e;
			}
			var K;
			a[16] !== i || a[17] !== l || a[18] !== b || a[19] !== k || a[20] !== G ? (K = G == null ? [] : I(i, b, l, G, k), a[16] = i, a[17] = l, a[18] = b, a[19] = k, a[20] = G, a[21] = K) : K = a[21], z = K;
		}
		var Q = z, X = Q.length === 0, Y;
		a[22] !== $ ? (Y = function(t) {
			var e, n = $.find(function(e) {
				return String(e.columnIndex) === t;
			});
			q((e = n == null ? void 0 : n.header) != null ? e : null);
		}, a[22] = $, a[23] = Y) : Y = a[23];
		var J = Y, Z;
		a[24] === Symbol.for("react.memo_cache_sentinel") ? (Z = function(t) {
			O(y.cast(t)), q(null);
		}, a[24] = Z) : Z = a[24];
		var ee = Z, te = F === y.ColumnBasedSplit, ne = !w, re;
		a[25] !== F || a[26] !== G ? (re = R(F, G), a[25] = F, a[26] = G, a[27] = re) : re = a[27];
		var oe = re, ae = F == null ? null : F, ie = H == null ? null : String(H.columnIndex), le;
		a[28] === Symbol.for("react.memo_cache_sentinel") ? (le = u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
			optionId: y.ColumnBasedSplit,
			primary: s._(
				/*BTDS*/
				""
			),
			testid: "biz-broadcasts-segment-audience-segment-by-select-option-column_based_split"
		}, y.ColumnBasedSplit), a[28] = le) : le = a[28];
		var se;
		a[29] !== w ? (se = [le].concat(w ? [u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
			optionId: y.DivideEqually,
			primary: s._(
				/*BTDS*/
				""
			),
			testid: "biz-broadcasts-segment-audience-segment-by-select-option-divide_equally"
		}, y.DivideEqually)] : []), a[29] = w, a[30] = se) : se = a[30];
		var ue = se, ce;
		a[31] !== h || a[32] !== ne ? (ce = ne ? u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: h,
			variant: "borderless",
			testid: "biz-broadcasts-segment-audience-skip-button"
		}) : null, a[31] = h, a[32] = ne, a[33] = ce) : ce = a[33];
		var de;
		a[34] === Symbol.for("react.memo_cache_sentinel") ? (de = s._(
			/*BTDS*/
			""
		), a[34] = de) : de = a[34];
		var me;
		a[35] !== Q || a[36] !== X || a[37] !== g ? (me = function() {
			X || g(Q);
		}, a[35] = Q, a[36] = X, a[37] = g, a[38] = me) : me = a[38];
		var pe;
		a[39] !== X || a[40] !== me ? (pe = u.jsx(r("WDSButton.react"), {
			disabled: X,
			label: de,
			onPress: me,
			variant: "filled",
			testid: "biz-broadcasts-segment-audience-continue-button"
		}), a[39] = X, a[40] = me, a[41] = pe) : pe = a[41];
		var _e;
		a[42] !== ce || a[43] !== pe ? (_e = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: C.actions,
			children: [ce, pe]
		}), a[42] = ce, a[43] = pe, a[44] = _e) : _e = a[44];
		var fe;
		a[45] === Symbol.for("react.memo_cache_sentinel") ? (fe = s._(
			/*BTDS*/
			""
		), a[45] = fe) : fe = a[45];
		var ge;
		a[46] !== f ? (ge = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcArrowBack.react"),
			"aria-label": fe,
			directional: !0,
			onPress: f,
			variant: "borderless",
			testid: "biz-broadcasts-segment-audience-back-button"
		}), a[46] = f, a[47] = ge) : ge = a[47];
		var he;
		a[48] === Symbol.for("react.memo_cache_sentinel") ? (he = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			xstyle: C.title,
			children: s._(
				/*BTDS*/
				""
			)
		}), a[48] = he) : he = a[48];
		var ye;
		a[49] !== ge ? (ye = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: C.header,
			children: [ge, he]
		}), a[49] = ge, a[50] = ye) : ye = a[50];
		var Ce;
		a[51] !== k ? (Ce = s._(
			/*BTDS*/
			"",
			[s._plural(k, "audience limit")]
		), a[51] = k, a[52] = Ce) : Ce = a[52];
		var be;
		a[53] !== Ce ? (be = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: Ce
		}), a[53] = Ce, a[54] = be) : be = a[54];
		var ve = ae != null ? ae : "", Se, Re;
		a[55] === Symbol.for("react.memo_cache_sentinel") ? (Se = s._(
			/*BTDS*/
			""
		), Re = s._(
			/*BTDS*/
			""
		), a[55] = Se, a[56] = Re) : (Se = a[55], Re = a[56]);
		var Le;
		a[57] !== F ? (Le = F != null ? s._(
			/*BTDS*/
			""
		) : void 0, a[57] = F, a[58] = Le) : Le = a[58];
		var Ee;
		a[59] !== ue || a[60] !== ae || a[61] !== ve || a[62] !== Le ? (Ee = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: C.selectField,
			children: u.jsx(o("WAWebSelect.react").Select, {
				ariaRoleDescription: Se,
				defaultLabel: Re,
				initialSelection: ae,
				label: Le,
				menuMaxHeight: _,
				onChange: ee,
				testid: "biz-broadcasts-segment-audience-segment-by-select",
				theme: "about-20-screen",
				width: "100%",
				children: ue
			}, ve)
		}), a[59] = ue, a[60] = ae, a[61] = ve, a[62] = Le, a[63] = Ee) : Ee = a[63];
		var ke;
		a[64] !== $ || a[65] !== J || a[66] !== ie || a[67] !== G || a[68] !== te ? (ke = te ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: C.selectField,
			children: u.jsx(o("WAWebSelect.react").Select, {
				ariaRoleDescription: s._(
					/*BTDS*/
					""
				),
				defaultLabel: s._(
					/*BTDS*/
					""
				),
				initialSelection: ie,
				label: G != null ? s._(
					/*BTDS*/
					""
				) : void 0,
				menuMaxHeight: _,
				onChange: J,
				testid: "biz-broadcasts-segment-audience-column-select",
				theme: "about-20-screen",
				width: "100%",
				children: $.map(S)
			}, ie != null ? ie : "")
		}) : null, a[64] = $, a[65] = J, a[66] = ie, a[67] = G, a[68] = te, a[69] = ke) : ke = a[69];
		var Ie;
		a[70] !== Q || a[71] !== oe ? (Ie = Q.length > 0 ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: C.previewCard,
			children: [
				u.jsx(r("WDSText.react"), {
					type: "Body3Emphasized",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsxs("div", {
					className: "xs2akgl xrvj5dj xcjjqqt xjl1d3b x1nbhmlj x1tiyuxx",
					children: [u.jsx(r("WDSText.react"), {
						type: "Body3Emphasized",
						colorName: "contentDeemphasized",
						children: oe
					}), u.jsx(r("WDSText.react"), {
						type: "Body3Emphasized",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsx("div", {
					className: "x78zum5 xdt5ytf xn7m530 x2lwn1j x1odjw0f x1f0uite",
					children: Q.map(v)
				})
			]
		}) : null, a[70] = Q, a[71] = oe, a[72] = Ie) : Ie = a[72];
		var Te;
		a[73] !== ye || a[74] !== be || a[75] !== Ee || a[76] !== ke || a[77] !== Ie ? (Te = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: C.root,
			children: [
				ye,
				be,
				Ee,
				ke,
				Ie
			]
		}), a[73] = ye, a[74] = be, a[75] = Ee, a[76] = ke, a[77] = Ie, a[78] = Te) : Te = a[78];
		var De;
		return a[79] !== f || a[80] !== _e || a[81] !== Te ? (De = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			actions: _e,
			onOverlayClick: f,
			testid: "biz-broadcasts-segment-audience-modal",
			controlsStyle: C.controlsStyle,
			children: Te
		}), a[79] = f, a[80] = _e, a[81] = Te, a[82] = De) : De = a[82], De;
	}
	function v(e, t) {
		return u.jsxs("div", {
			className: "xs2akgl xrvj5dj xcjjqqt xjl1d3b x1nbhmlj x1tiyuxx",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDefault",
				children: e.name
			}), u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDefault",
				children: k(e)
			})]
		}, e.name + ":" + t);
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		return u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
			optionId: String(e.columnIndex),
			primary: E(e),
			searchCriteria: e.header,
			testid: "biz-broadcasts-segment-audience-column-select-option-" + e.columnIndex
		}, e.columnIndex + ":" + e.header);
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e, t) {
		return e === y.DivideEqually ? s._(
			/*BTDS*/
			""
		) : t != null ? t : s._(
			/*BTDS*/
			""
		);
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = [];
		return e.segmentDetection.best != null && t.push(e.segmentDetection.best), t.push.apply(t, e.segmentDetection.alternatives), t;
	}
	function E(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("column number", e.columnIndex + 1), s._param("column header", e.header)]
		);
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t, n;
		return e.contacts.length + ((t = (n = e.errorList) == null ? void 0 : n.length) != null ? t : 0);
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e, t, n, r, o) {
		var a = U(n, r), i = new Map();
		for (var l of e) {
			var s, u = (s = a.get(l.rowIndex)) != null ? s : V(l.rawRow, r);
			P(i, u, {
				contact: l,
				rowIndex: l.rowIndex
			});
		}
		for (var c of t) {
			var d, m = (d = a.get(c.rowIndex)) != null ? d : H(c.rowData, r);
			P(i, m, {
				errorItem: c,
				rowIndex: c.rowIndex
			});
		}
		var p = [], _ = new Set();
		for (var f of i) {
			var g = f[0], h = f[1], y = N(h);
			if (y.length !== 0) {
				var C = M(y), b = w(y);
				if (C.length <= o) {
					p.push(O(y, B(g, _)));
					continue;
				}
				p.push.apply(p, x(g, C, b, _, o));
			}
		}
		return p;
	}
	function T(e, t) {
		var n = [];
		for (var r of e) n.push({
			contact: r,
			rowIndex: r.rowIndex
		});
		for (var o of t) n.push({
			errorItem: o,
			rowIndex: o.rowIndex
		});
		return N(n);
	}
	function D(e, t) {
		if (t <= 0) return [];
		for (var n = [], r = 0; r < e.length; r += t) {
			var o = e.slice(r, r + t);
			n.push(O(o, $(n.length + 1)));
		}
		return n;
	}
	function x(e, t, n, r, o) {
		var a = Math.ceil(t.length / o), i = Array.from({ length: a }, function() {
			return [];
		});
		for (var l of n) i[A(l, t, o, a)].push(l);
		for (var s = [], u = 0; u < a; u++) {
			var c = W(e, u + 1), d = t.slice(u * o, (u + 1) * o);
			s.push(O(N([].concat(d, i[u])), B(c, r)));
		}
		return s;
	}
	function $(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("segment number", String(e))]
		).toString();
	}
	function P(e, t, n) {
		var r = e.get(t);
		r == null && (r = [], e.set(t, r)), r.push(n);
	}
	function N(e) {
		return [].concat(e).sort(function(e, t) {
			return e.rowIndex - t.rowIndex;
		});
	}
	function M(e) {
		return e.filter(function(e) {
			return e.contact != null;
		});
	}
	function w(e) {
		return e.filter(function(e) {
			return e.errorItem != null;
		});
	}
	function A(e, t, n, r) {
		var o = F(t, e.rowIndex);
		return Math.min(Math.floor(o / n), r - 1);
	}
	function F(e, t) {
		for (var n = 0, r = e.length; n < r;) {
			var o = n + Math.floor((r - n) / 2);
			e[o].rowIndex < t ? n = o + 1 : r = o;
		}
		return n;
	}
	function O(e, t) {
		var n = [], r = [];
		for (var o of e) o.contact != null && n.push(o.contact), o.errorItem != null && r.push(o.errorItem);
		return r.length === 0 ? {
			contacts: n,
			name: t
		} : {
			contacts: n,
			errorList: r,
			name: t
		};
	}
	function B(e, t) {
		for (var n = e, r = 2; t.has(n);) n = q(e, r), r++;
		return t.add(n), n;
	}
	function W(e, t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("segment name", e), s._param("chunk number", String(t))]
		).toString();
	}
	function q(e, t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("audience name", e), s._param("duplicate number", String(t))]
		).toString();
	}
	function U(e, t) {
		var n = new Map(), r = e.rawRows;
		if (r == null) return n;
		for (var o = 0; o < r.length; o++) {
			var a = r[o];
			n.set(o, V(a.rowData, t));
		}
		return n;
	}
	function V(e, t) {
		var n = e == null ? void 0 : e[t];
		if (typeof n != "string") return h;
		var r = n.trim();
		return r === "" ? h : r;
	}
	function H(e, t) {
		var n = e[t];
		if (typeof n != "string") return h;
		var r = n.trim();
		return r === "" ? h : r;
	}
	l.default = b;
}), 226);
