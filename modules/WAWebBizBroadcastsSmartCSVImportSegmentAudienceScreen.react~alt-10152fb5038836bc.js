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
	"react"
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
		var t, n, a = e.contacts, i = e.context, l = e.errorList, c = l === void 0 ? p : l, f = e.maxContactsPerAudience, g = f === void 0 ? o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit() : f, h = e.onBack, b = e.onContinue, T = e.onSkip, D = d(function() {
			return S(i);
		}, [i]), x = d(function() {
			return k(a, c);
		}, [a, c]), $ = (t = (n = i.rawRows) == null ? void 0 : n.length) != null ? t : x.length, P = g > 0 && $ > g, N = m(P ? null : y.ColumnBasedSplit), M = N[0], w = N[1], A = m(null), F = A[0], O = A[1], B = D.find(function(e) {
			return e.header === F;
		}), W = M === y.ColumnBasedSplit ? B == null ? void 0 : B.header : null, q = d(function() {
			return M === y.DivideEqually ? P ? I(x, g) : [] : W == null ? [] : E(a, c, i, W, g);
		}, [
			a,
			i,
			c,
			P,
			g,
			M,
			x,
			W
		]), U = q.length === 0;
		function V(e) {
			var t, n = D.find(function(t) {
				return String(t.columnIndex) === e;
			});
			O((t = n == null ? void 0 : n.header) != null ? t : null);
		}
		function H(e) {
			w(y.cast(e)), O(null);
		}
		var G = M === y.ColumnBasedSplit, z = !P, j = v(M, W), K = M == null ? null : M, Q = B == null ? null : String(B.columnIndex), X = [u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
			optionId: y.ColumnBasedSplit,
			primary: s._(
				/*BTDS*/
				""
			),
			testid: "biz-broadcasts-segment-audience-segment-by-select-option-column_based_split"
		}, y.ColumnBasedSplit)].concat(P ? [u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
			optionId: y.DivideEqually,
			primary: s._(
				/*BTDS*/
				""
			),
			testid: "biz-broadcasts-segment-audience-segment-by-select-option-divide_equally"
		}, y.DivideEqually)] : []);
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			actions: u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: C.actions,
				children: [z ? u.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: T,
					variant: "borderless",
					testid: "biz-broadcasts-segment-audience-skip-button"
				}) : null, u.jsx(r("WDSButton.react"), {
					disabled: U,
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						U || b(q);
					},
					variant: "filled",
					testid: "biz-broadcasts-segment-audience-continue-button"
				})]
			}),
			onOverlayClick: h,
			testid: "biz-broadcasts-segment-audience-modal",
			controlsStyle: C.controlsStyle,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: C.root,
				children: [
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: C.header,
						children: [u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcArrowBack.react"),
							"aria-label": s._(
								/*BTDS*/
								""
							),
							directional: !0,
							onPress: h,
							variant: "borderless",
							testid: "biz-broadcasts-segment-audience-back-button"
						}), u.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							xstyle: C.title,
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							"",
							[s._plural(g, "audience limit")]
						)
					}),
					u.jsx(o("WAWebFlex.react").FlexColumn, {
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
							initialSelection: K,
							label: M != null ? s._(
								/*BTDS*/
								""
							) : void 0,
							menuMaxHeight: _,
							onChange: H,
							testid: "biz-broadcasts-segment-audience-segment-by-select",
							theme: "about-20-screen",
							width: "100%",
							children: X
						}, K != null ? K : "")
					}),
					G ? u.jsx(o("WAWebFlex.react").FlexColumn, {
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
							initialSelection: Q,
							label: W != null ? s._(
								/*BTDS*/
								""
							) : void 0,
							menuMaxHeight: _,
							onChange: V,
							testid: "biz-broadcasts-segment-audience-column-select",
							theme: "about-20-screen",
							width: "100%",
							children: D.map(function(e) {
								return u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
									optionId: String(e.columnIndex),
									primary: R(e),
									searchCriteria: e.header,
									testid: "biz-broadcasts-segment-audience-column-select-option-" + e.columnIndex
								}, e.columnIndex + ":" + e.header);
							})
						}, Q != null ? Q : "")
					}) : null,
					q.length > 0 ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
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
									children: j
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
								children: q.map(function(e, t) {
									return u.jsxs("div", {
										className: "xs2akgl xrvj5dj xcjjqqt xjl1d3b x1nbhmlj x1tiyuxx",
										children: [u.jsx(r("WDSText.react"), {
											type: "Body3",
											colorName: "contentDefault",
											children: e.name
										}), u.jsx(r("WDSText.react"), {
											type: "Body3",
											colorName: "contentDefault",
											children: L(e)
										})]
									}, e.name + ":" + t);
								})
							})
						]
					}) : null
				]
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e, t) {
		return e === y.DivideEqually ? s._(
			/*BTDS*/
			""
		) : t != null ? t : s._(
			/*BTDS*/
			""
		);
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = [];
		return e.segmentDetection.best != null && t.push(e.segmentDetection.best), t.push.apply(t, e.segmentDetection.alternatives), t;
	}
	function R(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("column number", e.columnIndex + 1), s._param("column header", e.header)]
		);
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t, n;
		return e.contacts.length + ((t = (n = e.errorList) == null ? void 0 : n.length) != null ? t : 0);
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e, t, n, r, o) {
		var a = W(n, r), i = new Map();
		for (var l of e) {
			var s, u = (s = a.get(l.rowIndex)) != null ? s : q(l.rawRow, r);
			x(i, u, {
				contact: l,
				rowIndex: l.rowIndex
			});
		}
		for (var c of t) {
			var d, m = (d = a.get(c.rowIndex)) != null ? d : U(c.rowData, r);
			x(i, m, {
				errorItem: c,
				rowIndex: c.rowIndex
			});
		}
		var p = [], _ = new Set();
		for (var f of i) {
			var g = f[0], h = f[1], y = $(h);
			if (y.length !== 0) {
				var C = P(y), b = N(y);
				if (C.length <= o) {
					p.push(A(y, F(g, _)));
					continue;
				}
				p.push.apply(p, T(g, C, b, _, o));
			}
		}
		return p;
	}
	function k(e, t) {
		var n = [];
		for (var r of e) n.push({
			contact: r,
			rowIndex: r.rowIndex
		});
		for (var o of t) n.push({
			errorItem: o,
			rowIndex: o.rowIndex
		});
		return $(n);
	}
	function I(e, t) {
		if (t <= 0) return [];
		for (var n = [], r = 0; r < e.length; r += t) {
			var o = e.slice(r, r + t);
			n.push(A(o, D(n.length + 1)));
		}
		return n;
	}
	function T(e, t, n, r, o) {
		var a = Math.ceil(t.length / o), i = Array.from({ length: a }, function() {
			return [];
		});
		for (var l of n) i[M(l, t, o, a)].push(l);
		for (var s = [], u = 0; u < a; u++) {
			var c = O(e, u + 1), d = t.slice(u * o, (u + 1) * o);
			s.push(A($([].concat(d, i[u])), F(c, r)));
		}
		return s;
	}
	function D(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("segment number", String(e))]
		).toString();
	}
	function x(e, t, n) {
		var r = e.get(t);
		r == null && (r = [], e.set(t, r)), r.push(n);
	}
	function $(e) {
		return [].concat(e).sort(function(e, t) {
			return e.rowIndex - t.rowIndex;
		});
	}
	function P(e) {
		return e.filter(function(e) {
			return e.contact != null;
		});
	}
	function N(e) {
		return e.filter(function(e) {
			return e.errorItem != null;
		});
	}
	function M(e, t, n, r) {
		var o = w(t, e.rowIndex);
		return Math.min(Math.floor(o / n), r - 1);
	}
	function w(e, t) {
		for (var n = 0, r = e.length; n < r;) {
			var o = n + Math.floor((r - n) / 2);
			e[o].rowIndex < t ? n = o + 1 : r = o;
		}
		return n;
	}
	function A(e, t) {
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
	function F(e, t) {
		for (var n = e, r = 2; t.has(n);) n = B(e, r), r++;
		return t.add(n), n;
	}
	function O(e, t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("segment name", e), s._param("chunk number", String(t))]
		).toString();
	}
	function B(e, t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("audience name", e), s._param("duplicate number", String(t))]
		).toString();
	}
	function W(e, t) {
		var n = new Map(), r = e.rawRows;
		if (r == null) return n;
		for (var o = 0; o < r.length; o++) {
			var a = r[o];
			n.set(o, q(a.rowData, t));
		}
		return n;
	}
	function q(e, t) {
		var n = e == null ? void 0 : e[t];
		if (typeof n != "string") return h;
		var r = n.trim();
		return r === "" ? h : r;
	}
	function U(e, t) {
		var n = e[t];
		if (typeof n != "string") return h;
		var r = n.trim();
		return r === "" ? h : r;
	}
	l.default = b;
}), 226);
