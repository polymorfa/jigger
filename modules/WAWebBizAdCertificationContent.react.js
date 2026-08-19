__d("WAWebBizAdCertificationContent.react", [
	"fbt",
	"WAWebChevronCustomIcons",
	"WAWebClickable.react",
	"WAWebFlex.react",
	"WDSIconIcCheck.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = {
		bulletItem: {
			alignItems: "x1cy8zhl",
			columnGap: "x1s70e7g",
			$$css: !0
		},
		bulletList: {
			rowGap: "x1qvou4u",
			$$css: !0
		},
		checkmarkIcon: {
			color: "x1du590y",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		content: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		dropdownContent: {
			paddingTop: "x1tiyuxx",
			rowGap: "x1qvou4u",
			$$css: !0
		},
		dropdownHeader: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		dropdownHeaderText: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		headerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		iconContainer: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		linkList: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		section: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		subsection: {
			paddingTop: "x16ovd2e",
			rowGap: "x129bwdz",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(23), n = e.children, a = e.subtitle, i = e.title, l = c(!1), s = l[0], m = l[1], p;
		t[0] !== s ? (p = function() {
			m(!s);
		}, t[0] = s, t[1] = p) : p = t[1];
		var _ = p, f;
		t[2] !== i ? (f = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: i
		}), t[2] = i, t[3] = f) : f = t[3];
		var g;
		t[4] !== a ? (g = a != null ? u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: a
		}) : null, t[4] = a, t[5] = g) : g = t[5];
		var h;
		t[6] !== f || t[7] !== g ? (h = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.dropdownHeaderText,
			children: [f, g]
		}), t[6] = f, t[7] = g, t[8] = h) : h = t[8];
		var y;
		t[9] !== s ? (y = s ? u.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, { height: 20 }) : u.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, { height: 20 }), t[9] = s, t[10] = y) : y = t[10];
		var C;
		t[11] !== h || t[12] !== y ? (C = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: d.dropdownHeader,
			children: [h, y]
		}), t[11] = h, t[12] = y, t[13] = C) : C = t[13];
		var b;
		t[14] !== _ || t[15] !== C ? (b = u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: _,
			children: C
		}), t[14] = _, t[15] = C, t[16] = b) : b = t[16];
		var v;
		t[17] !== n || t[18] !== s ? (v = s ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.dropdownContent,
			children: n
		}) : null, t[17] = n, t[18] = s, t[19] = v) : v = t[19];
		var S;
		return t[20] !== b || t[21] !== v ? (S = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.section,
			children: [b, v]
		}), t[20] = b, t[21] = v, t[22] = S) : S = t[22], S;
	}
	function p() {
		var e = o("react-compiler-runtime").c(38), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.iconContainer,
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Headline2",
				xstyle: d.headerText,
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = n) : n = e[1];
		var a;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[2] = a) : a = e[2];
		var i;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[3] = i) : i = e[3];
		var l;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.section,
			children: [i, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[4] = l) : l = e[4];
		var c;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[5] = c) : c = e[5];
		var p;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.section,
			children: [c, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[6] = p) : p = e[6];
		var _;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), e[7] = _) : _ = e[7];
		var f;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[8] = f) : f = e[8];
		var g;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[9] = g) : g = e[9];
		var h;
		e[10] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[10] = h) : h = e[10];
		var y;
		e[11] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.section,
			children: [h, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[11] = y) : y = e[11];
		var C;
		e[12] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[12] = C) : C = e[12];
		var b;
		e[13] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.section,
			children: [C, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[13] = b) : b = e[13];
		var v;
		e[14] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[14] = v) : v = e[14];
		var S;
		e[15] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.subsection,
			children: [
				g,
				y,
				b,
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: d.section,
					children: [v, u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			]
		}), e[15] = S) : S = e[15];
		var R;
		e[16] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[16] = R) : R = e[16];
		var L;
		e[17] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[17] = L) : L = e[17];
		var E;
		e[18] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.section,
			children: [L, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[18] = E) : E = e[18];
		var k;
		e[19] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[19] = k) : k = e[19];
		var I;
		e[20] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.section,
			children: [k, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[20] = I) : I = e[20];
		var T;
		e[21] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[21] = T) : T = e[21];
		var D;
		e[22] === Symbol.for("react.memo_cache_sentinel") ? (D = u.jsxs(m, {
			title: _,
			children: [
				f,
				S,
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: d.subsection,
					children: [
						R,
						E,
						I,
						u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							xstyle: d.section,
							children: [T, u.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})
					]
				})
			]
		}), e[22] = D) : D = e[22];
		var x, $;
		e[23] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), $ = s._(
			/*BTDS*/
			""
		), e[23] = x, e[24] = $) : (x = e[23], $ = e[24]);
		var P;
		e[25] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[25] = P) : P = e[25];
		var N;
		e[26] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx(r("WDSTextualLink.react"), {
			href: "https://www.hud.gov/",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[26] = N) : N = e[26];
		var M;
		e[27] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(r("WDSTextualLink.react"), {
			href: "https://www.eeoc.gov/",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[27] = M) : M = e[27];
		var w;
		e[28] === Symbol.for("react.memo_cache_sentinel") ? (w = u.jsx(r("WDSTextualLink.react"), {
			href: "https://www.consumerfinance.gov/",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[28] = w) : w = e[28];
		var A;
		e[29] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(r("WDSTextualLink.react"), {
			href: "https://www.aclu.org/",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[29] = A) : A = e[29];
		var F;
		e[30] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(r("WDSTextualLink.react"), {
			href: "https://civilrights.org/",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[30] = F) : F = e[30];
		var O;
		e[31] === Symbol.for("react.memo_cache_sentinel") ? (O = u.jsx(r("WDSTextualLink.react"), {
			href: "https://www.justice.gov/",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[31] = O) : O = e[31];
		var B;
		e[32] === Symbol.for("react.memo_cache_sentinel") ? (B = u.jsxs(m, {
			subtitle: x,
			title: $,
			children: [P, u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: d.linkList,
				children: [
					N,
					M,
					w,
					A,
					F,
					O,
					u.jsx(r("WDSTextualLink.react"), {
						href: "https://nationalfairhousing.org/",
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})]
		}), e[32] = B) : B = e[32];
		var W;
		e[33] === Symbol.for("react.memo_cache_sentinel") ? (W = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), e[33] = W) : W = e[33];
		var q;
		e[34] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(r("WDSIconIcCheck.react"), {
			height: 20,
			iconXstyle: d.checkmarkIcon,
			width: 20
		}), e[34] = q) : q = e[34];
		var U;
		e[35] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.bulletItem,
			children: [q, u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[35] = U) : U = e[35];
		var V;
		e[36] === Symbol.for("react.memo_cache_sentinel") ? (V = u.jsx(r("WDSIconIcCheck.react"), {
			height: 20,
			iconXstyle: d.checkmarkIcon,
			width: 20
		}), e[36] = V) : V = e[36];
		var H;
		if (e[37] === Symbol.for("react.memo_cache_sentinel")) {
			var G;
			H = u.jsxs((G = o("WAWebFlex.react")).FlexColumn, {
				align: "stretch",
				xstyle: d.content,
				children: [
					t,
					n,
					a,
					l,
					p,
					D,
					B,
					u.jsxs(G.FlexColumn, {
						align: "stretch",
						xstyle: d.section,
						children: [W, u.jsxs(G.FlexColumn, {
							align: "stretch",
							xstyle: d.bulletList,
							children: [U, u.jsxs(G.FlexRow, {
								xstyle: d.bulletItem,
								children: [V, u.jsx(r("WDSText.react"), {
									colorName: "contentDeemphasized",
									type: "Body2",
									children: s._(
										/*BTDS*/
										""
									)
								})]
							})]
						})]
					})
				]
			}), e[37] = H;
		} else H = e[37];
		return H;
	}
	l.default = p;
}), 226);
