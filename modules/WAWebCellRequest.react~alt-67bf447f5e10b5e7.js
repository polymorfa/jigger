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
		var n = t.hoverEnabled, a = n === void 0 ? !1 : n, i = t.image, l = t.onApprove, u = t.onClick, d = t.onError, f = t.onReject, h = t.primary, y = t.secondary, C = t.secondaryTestId, b = t.signals, v = t.state, S = o("WAWebThemeContext").useIsDarkTheme(), R = b != null ? b : {}, L = R.customSignals, E = R.description, k = r("useHoverState")(), I = k.isHovered, T = k.onMouseEnter, D = k.onMouseLeave, x = a ? I : !1, $ = p(!1), P = $[0], N = $[1], M = m(function(e) {
			e && N(e.isExpanded);
		}, []), w = [];
		if (v) switch (v) {
			case o("WAWebCellRequestState").State.Pending:
				w = [c.jsx(o("WAWebRound.react").Round, {
					label: s._(
						/*BTDS*/
						""
					),
					onClick: f,
					theme: o("WAWebRound.react").RoundTheme.Reject,
					children: c.jsx(o("WAWebXIcon.react").XIcon, {
						height: 24,
						width: 24
					})
				}, "reject")], l && w.push(c.jsx(o("WAWebRound.react").Round, {
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
				break;
			case o("WAWebCellRequestState").State.Loading:
				w = [c.jsx(o("WAWebSpinner.react").Spinner, {
					size: 32,
					stroke: 3
				}, "loading")];
				break;
			case o("WAWebCellRequestState").State.Approved: {
				var A = [g.tag];
				w = [c.jsx(o("WAWebTag.react").Tag, {
					xstyle: A,
					children: s._(
						/*BTDS*/
						""
					)
				}, "approved")];
				break;
			}
			case o("WAWebCellRequestState").State.Rejected:
				w = [c.jsx(o("WAWebTag.react").Tag, {
					xstyle: [
						g.tag,
						g.rejected,
						x && g.rejectedHover
					],
					children: s._(
						/*BTDS*/
						""
					)
				}, "rejected")];
				break;
			case o("WAWebCellRequestState").State.Canceled:
				w = [c.jsx(o("WAWebTag.react").Tag, {
					xstyle: [
						g.tag,
						g.rejected,
						x && g.rejectedHover
					],
					children: s._(
						/*BTDS*/
						""
					)
				}, "canceled")];
				break;
			case o("WAWebCellRequestState").State.Error:
				w = [c.jsx(r("WDSButton.react"), {
					Icon: o("WAWebAlertErrorIcon.react").AlertErrorIcon,
					size: "small",
					onPress: d,
					variant: "borderless",
					"aria-label": r("fbs")._(
						/*BTDS*/
						""
					)
				}, "error")];
				break;
		}
		return c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [c.jsx(r("WAWebUnstyledButton.react"), {
			onClick: u,
			onMouseEnter: T,
			onMouseLeave: D,
			testid: "row",
			xstyle: [
				g.row,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
				x && g.rowHover,
				!u && g.notClickable
			],
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				children: [
					c.jsx(r("WAWebFlexItem.react"), {
						xstyle: g.image,
						children: i
					}),
					c.jsx(r("WAWebFlexItem.react"), {
						grow: 1,
						justify: "start",
						xstyle: [g.info, o("WDSPaddings.stylex").wdsPaddings.paddingHor12],
						children: c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [h, c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
							color: "secondary",
							size: "14",
							testid: C,
							xstyle: g.text,
							children: y
						})] })
					}),
					c.jsx(r("WAWebFlexItem.react"), {
						xstyle: g.actions,
						children: c.jsx(o("WAWebFlex.react").FlexRow, {
							justify: "end",
							xstyle: [v === o("WAWebCellRequestState").State.Error && _.paddingInlineEnd10, v === o("WAWebCellRequestState").State.Loading && o("WDSPaddings.stylex").wdsPaddings.paddingEnd4],
							children: w.map(function(e, t) {
								return c.jsx(r("WAWebFlexItem.react"), {
									xstyle: t < w.length - 1 && o("WDSPaddings.stylex").wdsPaddings.paddingEnd8,
									children: e
								}, (v != null ? v : "") + "-" + t);
							})
						})
					})
				]
			})
		}), E || L != null && L.length ? c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: g.row,
			children: c.jsx(r("WAWebFlexItem.react"), {
				grow: 1,
				xstyle: [g.signalItem, o("WDSPaddings.stylex").wdsPaddings.paddingStart12],
				children: c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.padding12, o("WDSMargins.stylex").wdsMargins.marginBottom16, o("WDSMargins.stylex").wdsMargins.marginTop4, o("WDSMargins.stylex").wdsMargins.marginHor24, g.signalContainer), { children: [E ? c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "13",
					xstyle: [g.descriptionTitle, o("WDSMargins.stylex").wdsMargins.marginBottom4],
					children: E.title
				}), c.jsx("section", babelHelpers.extends({}, {
					0: {},
					1: { className: "x1hyak1l x1rife3k x10pp7p3 x7v9bd0" }
				}[!!P << 0], { children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
					ref: M,
					text: E.content,
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
							text: E.content,
							textLimit: e,
							xstyle: g.descriptionContent
						});
					}
				}) }))] }) : null, L == null ? void 0 : L.map(function(e, t) {
					var n = e.Icon, r = e.text;
					return c.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "start",
						xstyle: E && o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
						children: [c.jsx(n, {
							iconXstyle: S ? g.secondaryColor : g.grayColor,
							height: 20,
							width: 20,
							xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd4
						}), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: r })]
					}, t);
				})] }))
			})
		}) : null] });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
