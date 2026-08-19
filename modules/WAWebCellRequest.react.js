__d("WAWebCellRequest.react", [
	"fbt",
	"WAWebAlertErrorIcon.react",
	"WAWebCellRequestState",
	"WAWebEmojiText.react",
	"WAWebExpandableText.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFormatConfiguration",
	"WAWebRound.react",
	"WAWebSpinner.react",
	"WAWebTag.react",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebThemeContext",
	"WAWebUnstyledButton.react",
	"WAWebXIcon.react",
	"WDSButton.react",
	"WDSIconIcCheck.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"fbs",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useHoverState"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState, _ = { paddingInlineEnd10: {
		paddingInlineEnd: "x2vl965",
		$$css: !0
	} }, f = "x18f3kag-B", g = {
		row: {
			width: "xh8yej3",
			minHeight: "xuwdbiy",
			backgroundColor: "x1280gxy",
			textAlign: "x1yc453h",
			$$css: !0
		},
		rowHover: {
			":hover_backgroundColor": "x17gydlx",
			$$css: !0
		},
		image: {
			minWidth: "xayfy2v",
			$$css: !0
		},
		info: {
			lineHeight: "x1fc57z9",
			$$css: !0
		},
		actions: {
			minWidth: "x450l9j",
			$$css: !0
		},
		text: {
			maxWidth: "x193iq5w",
			whiteSpace: "xuxw1ft",
			textOverflow: "xlyipyv",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		tag: {
			fontSize: "x1f6kntn",
			lineHeight: "x16h55sf",
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "x12w63v0",
			height: "xmix8c7",
			$$css: !0
		},
		rejected: {
			backgroundColor: "xhj6x0y",
			color: "x117hm8",
			borderTopColor: "x15fblf8",
			borderInlineEndColor: "x1eimsvo",
			borderBottomColor: "xmtv5dy",
			borderInlineStartColor: "xfdsq3p",
			$$css: !0
		},
		rejectedHover: {
			backgroundColor: "x19mg4ev",
			color: "xejeqp1",
			borderTopColor: "x24bj3i",
			borderInlineEndColor: "x105f6xi",
			borderBottomColor: "x1lwhfw6",
			borderInlineStartColor: "x7bkp5h",
			$$css: !0
		},
		notClickable: {
			cursor: "xt0e3qv",
			$$css: !0
		},
		signalItem: {
			marginInlineStart: "x1el38ya",
			$$css: !0
		},
		signalContainer: {
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			backgroundColor: "x4wrhlh",
			fontSize: "x1f6kntn",
			$$css: !0
		},
		descriptionTitle: {
			color: "x1v5yvga",
			$$css: !0
		},
		descriptionContent: {
			lineHeight: "x16h55sf",
			$$css: !0
		},
		grayColor: {
			color: "xhslqc4",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function h(t) {
		var n = o("react-compiler-runtime").c(101), a = t.hoverEnabled, i = t.image, l = t.onApprove, u = t.onClick, d = t.onError, m = t.onReject, f = t.primary, h = t.secondary, y = t.secondaryTestId, C = t.signals, b = t.state, v = a === void 0 ? !1 : a, S = o("WAWebThemeContext").useIsDarkTheme(), R;
		n[0] !== C ? (R = C != null ? C : {}, n[0] = C, n[1] = R) : R = n[1];
		var L = R, E = L.customSignals, k = L.description, I = r("useHoverState")(), T = I.isHovered, D = I.onMouseEnter, x = I.onMouseLeave, $ = v ? T : !1, P = p(!1), N = P[0], M = P[1], w;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (w = function(t) {
			t && M(t.isExpanded);
		}, n[2] = w) : w = n[2];
		var A = w, F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee;
		if (n[3] !== $ || n[4] !== i || n[5] !== l || n[6] !== u || n[7] !== d || n[8] !== D || n[9] !== x || n[10] !== m || n[11] !== f || n[12] !== h || n[13] !== y || n[14] !== b) {
			var te = [];
			if (b) e: switch (b) {
				case o("WAWebCellRequestState").State.Pending: {
					var ne;
					n[33] === Symbol.for("react.memo_cache_sentinel") ? (ne = s._(
						/*BTDS*/
						""
					), n[33] = ne) : ne = n[33];
					var re;
					n[34] === Symbol.for("react.memo_cache_sentinel") ? (re = c.jsx(o("WAWebXIcon.react").XIcon, {
						height: 24,
						width: 24
					}), n[34] = re) : re = n[34];
					var oe;
					n[35] !== m ? (oe = c.jsx(o("WAWebRound.react").Round, {
						label: ne,
						onClick: m,
						theme: o("WAWebRound.react").RoundTheme.Reject,
						children: re
					}, "reject"), n[35] = m, n[36] = oe) : oe = n[36], te = [oe], l && te.push(c.jsx(o("WAWebRound.react").Round, {
						label: s._(
							/*BTDS*/
							""
						),
						onClick: l,
						theme: o("WAWebRound.react").RoundTheme.Approve,
						children: c.jsx(r("WDSIconIcCheck.react"), {
							height: 24,
							width: 24,
							testid: "checkmark"
						})
					}, "approve"));
					break e;
				}
				case o("WAWebCellRequestState").State.Loading: {
					var ae;
					n[37] === Symbol.for("react.memo_cache_sentinel") ? (ae = c.jsx(o("WAWebSpinner.react").Spinner, {
						size: 32,
						stroke: 3
					}, "loading"), n[37] = ae) : ae = n[37], te = [ae];
					break e;
				}
				case o("WAWebCellRequestState").State.Approved: {
					var ie;
					n[38] === Symbol.for("react.memo_cache_sentinel") ? (ie = [g.tag], n[38] = ie) : ie = n[38];
					var le = ie, se;
					n[39] === Symbol.for("react.memo_cache_sentinel") ? (se = c.jsx(o("WAWebTag.react").Tag, {
						xstyle: le,
						children: s._(
							/*BTDS*/
							""
						)
					}, "approved"), n[39] = se) : se = n[39], te = [se];
					break e;
				}
				case o("WAWebCellRequestState").State.Rejected: {
					var ue = $ && g.rejectedHover, ce;
					n[40] !== ue ? (ce = [
						g.tag,
						g.rejected,
						ue
					], n[40] = ue, n[41] = ce) : ce = n[41];
					var de;
					n[42] === Symbol.for("react.memo_cache_sentinel") ? (de = s._(
						/*BTDS*/
						""
					), n[42] = de) : de = n[42];
					var me;
					n[43] !== ce ? (me = c.jsx(o("WAWebTag.react").Tag, {
						xstyle: ce,
						children: de
					}, "rejected"), n[43] = ce, n[44] = me) : me = n[44], te = [me];
					break e;
				}
				case o("WAWebCellRequestState").State.Canceled: {
					var pe = $ && g.rejectedHover, _e;
					n[45] !== pe ? (_e = [
						g.tag,
						g.rejected,
						pe
					], n[45] = pe, n[46] = _e) : _e = n[46];
					var fe;
					n[47] === Symbol.for("react.memo_cache_sentinel") ? (fe = s._(
						/*BTDS*/
						""
					), n[47] = fe) : fe = n[47];
					var ge;
					n[48] !== _e ? (ge = c.jsx(o("WAWebTag.react").Tag, {
						xstyle: _e,
						children: fe
					}, "canceled"), n[48] = _e, n[49] = ge) : ge = n[49], te = [ge];
					break e;
				}
				case o("WAWebCellRequestState").State.Error: {
					var he;
					n[50] === Symbol.for("react.memo_cache_sentinel") ? (he = r("fbs")._(
						/*BTDS*/
						""
					), n[50] = he) : he = n[50];
					var ye;
					n[51] !== d ? (ye = c.jsx(r("WDSButton.react"), {
						Icon: o("WAWebAlertErrorIcon.react").AlertErrorIcon,
						size: "small",
						onPress: d,
						variant: "borderless",
						"aria-label": he
					}, "error"), n[51] = d, n[52] = ye) : ye = n[52], te = [ye];
				}
			}
			q = o("WAWebFlex.react").FlexColumn, W = r("WAWebUnstyledButton.react"), V = u, H = D, G = x, z = "row";
			var Ce = $ && g.rowHover, be = !u && g.notClickable;
			n[53] !== Ce || n[54] !== be ? (j = [
				g.row,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
				Ce,
				be
			], n[53] = Ce, n[54] = be, n[55] = j) : j = n[55], B = o("WAWebFlex.react").FlexRow, J = "center", Z = "all", n[56] !== i ? (ee = c.jsx(r("WAWebFlexItem.react"), {
				xstyle: g.image,
				children: i
			}), n[56] = i, n[57] = ee) : ee = n[57];
			var ve;
			n[58] === Symbol.for("react.memo_cache_sentinel") ? (ve = [g.info, o("WDSPaddings.stylex").wdsPaddings.paddingHor12], n[58] = ve) : ve = n[58];
			var Se;
			n[59] !== h || n[60] !== y ? (Se = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				color: "secondary",
				size: "14",
				testid: y,
				xstyle: g.text,
				children: h
			}), n[59] = h, n[60] = y, n[61] = Se) : Se = n[61], n[62] !== f || n[63] !== Se ? (U = c.jsx(r("WAWebFlexItem.react"), {
				grow: 1,
				justify: "start",
				xstyle: ve,
				children: c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [f, Se] })
			}), n[62] = f, n[63] = Se, n[64] = U) : U = n[64], O = r("WAWebFlexItem.react"), Y = g.actions, F = o("WAWebFlex.react").FlexRow, K = "end";
			var Re = b === o("WAWebCellRequestState").State.Error && _.paddingInlineEnd10, Le = b === o("WAWebCellRequestState").State.Loading && o("WDSPaddings.stylex").wdsPaddings.paddingEnd4;
			n[65] !== Re || n[66] !== Le ? (Q = [Re, Le], n[65] = Re, n[66] = Le, n[67] = Q) : Q = n[67], X = te.map(function(e, t) {
				return c.jsx(r("WAWebFlexItem.react"), {
					xstyle: t < te.length - 1 && o("WDSPaddings.stylex").wdsPaddings.paddingEnd8,
					children: e
				}, (b != null ? b : "") + "-" + t);
			}), n[3] = $, n[4] = i, n[5] = l, n[6] = u, n[7] = d, n[8] = D, n[9] = x, n[10] = m, n[11] = f, n[12] = h, n[13] = y, n[14] = b, n[15] = F, n[16] = O, n[17] = B, n[18] = W, n[19] = q, n[20] = U, n[21] = V, n[22] = H, n[23] = G, n[24] = z, n[25] = j, n[26] = K, n[27] = Q, n[28] = X, n[29] = Y, n[30] = J, n[31] = Z, n[32] = ee;
		} else F = n[15], O = n[16], B = n[17], W = n[18], q = n[19], U = n[20], V = n[21], H = n[22], G = n[23], z = n[24], j = n[25], K = n[26], Q = n[27], X = n[28], Y = n[29], J = n[30], Z = n[31], ee = n[32];
		var Ee;
		n[68] !== F || n[69] !== K || n[70] !== Q || n[71] !== X ? (Ee = c.jsx(F, {
			justify: K,
			xstyle: Q,
			children: X
		}), n[68] = F, n[69] = K, n[70] = Q, n[71] = X, n[72] = Ee) : Ee = n[72];
		var ke;
		n[73] !== O || n[74] !== Ee || n[75] !== Y ? (ke = c.jsx(O, {
			xstyle: Y,
			children: Ee
		}), n[73] = O, n[74] = Ee, n[75] = Y, n[76] = ke) : ke = n[76];
		var Ie;
		n[77] !== B || n[78] !== U || n[79] !== ke || n[80] !== J || n[81] !== Z || n[82] !== ee ? (Ie = c.jsxs(B, {
			align: J,
			justify: Z,
			children: [
				ee,
				U,
				ke
			]
		}), n[77] = B, n[78] = U, n[79] = ke, n[80] = J, n[81] = Z, n[82] = ee, n[83] = Ie) : Ie = n[83];
		var Te;
		n[84] !== W || n[85] !== V || n[86] !== H || n[87] !== G || n[88] !== z || n[89] !== j || n[90] !== Ie ? (Te = c.jsx(W, {
			onClick: V,
			onMouseEnter: H,
			onMouseLeave: G,
			testid: z,
			xstyle: j,
			children: Ie
		}), n[84] = W, n[85] = V, n[86] = H, n[87] = G, n[88] = z, n[89] = j, n[90] = Ie, n[91] = Te) : Te = n[91];
		var De;
		n[92] !== E || n[93] !== k || n[94] !== S || n[95] !== N ? (De = k || E != null && E.length ? c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: g.row,
			children: c.jsx(r("WAWebFlexItem.react"), {
				grow: 1,
				xstyle: [g.signalItem, o("WDSPaddings.stylex").wdsPaddings.paddingStart12],
				children: c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.padding12, o("WDSMargins.stylex").wdsMargins.marginBottom16, o("WDSMargins.stylex").wdsMargins.marginTop4, o("WDSMargins.stylex").wdsMargins.marginHor24, g.signalContainer), { children: [k ? c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "13",
					xstyle: [g.descriptionTitle, o("WDSMargins.stylex").wdsMargins.marginBottom4],
					children: k.title
				}), c.jsx("section", babelHelpers.extends({}, {
					0: {},
					1: { className: "x1hyak1l x1rife3k x10pp7p3 x7v9bd0" }
				}[!!N << 0], { children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
					ref: A,
					text: k.content,
					textLimit: 100,
					children: function(t) {
						var e = t.textLimit;
						return c.jsx(o("WAWebEmojiText.react").EmojiText, {
							formatters: o("WAWebFormatConfiguration").UntrustedGroupDesc({
								bulletPointsEnabled: !0,
								expandedFormattingEnabled: !1
							}),
							inferLinesDirection: !0,
							multiline: !0,
							text: k.content,
							textLimit: e,
							xstyle: g.descriptionContent
						});
					}
				}) }))] }) : null, E == null ? void 0 : E.map(function(e, t) {
					var n = e.Icon, r = e.text;
					return c.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "start",
						xstyle: k && o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
						children: [c.jsx(n, {
							iconXstyle: S ? g.secondaryColor : g.grayColor,
							height: 20,
							width: 20,
							xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd4
						}), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: r })]
					}, t);
				})] }))
			})
		}) : null, n[92] = E, n[93] = k, n[94] = S, n[95] = N, n[96] = De) : De = n[96];
		var xe;
		return n[97] !== q || n[98] !== Te || n[99] !== De ? (xe = c.jsxs(q, { children: [Te, De] }), n[97] = q, n[98] = Te, n[99] = De, n[100] = xe) : xe = n[100], xe;
	}
	l.default = h;
}), 226);
