__d("WAWebBizOrderExpansionModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebIcShieldLockIcon.react",
	"WAWebModalManager",
	"WAWebOrderGatingUtils",
	"WAWebReceiptIcon.react",
	"WAWebText_DONOTUSE.react",
	"WAWebWdsPictoBusinessIcon.react",
	"WDSIconWdsIcChat.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		paddingInline18: {
			paddingInlineStart: "xwn43p0",
			paddingInlineEnd: "x1x5flf6",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingInline30: {
			paddingInlineStart: "x162tt16",
			paddingInlineEnd: "x5zjp28",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, m = {
		iconColor: {
			color: "xx2jlie",
			$$css: !0
		},
		illustration: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		listItem: {
			lineHeight: "x132q4wb",
			$$css: !0
		},
		modalTitle: {
			lineHeight: "xo0entv",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.onDismiss, a = t.onOk;
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-order-expansion"
			},
			onOK: a,
			okText: s._(
				/*BTDS*/
				""
			),
			onOverlayClick: n,
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.paddingInline30,
				children: [
					c.jsx(o("WAWebFlex.react").FlexRow, {
						justify: "center",
						align: "center",
						alignSelf: "center",
						className: (e || (e = r("stylex")))([o("WDSPaddings.stylex").wdsPaddings.paddingTop28]),
						children: c.jsx(o("WAWebWdsPictoBusinessIcon.react").WdsPictoBusinessIcon, {
							height: 88,
							xstyle: m.illustration
						})
					}),
					c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
						weight: "medium",
						size: "24",
						color: "dark",
						xstyle: [o("WDSMargins.stylex").wdsMargins.marginVer24, m.modalTitle],
						children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					}) }),
					c.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, d.paddingInline18],
						children: [c.jsx(r("WDSIconWdsIcChat.react"), {
							height: 22,
							width: 22,
							xstyle: m.iconColor
						}), c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
							xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
							children: [c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
								size: "16",
								weight: "medium",
								color: "dark",
								xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom4, m.listItem],
								children: s._(
									/*BTDS*/
									""
								)
							}), c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
								size: "16",
								weight: "normal",
								color: "secondary",
								xstyle: m.listItem,
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})]
					}),
					c.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, d.paddingInline18],
						children: [c.jsx(o("WAWebIcShieldLockIcon.react").IcShieldLockIcon, {
							height: 22,
							width: 22,
							xstyle: m.iconColor
						}), c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
							xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
							children: [c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
								size: "16",
								weight: "medium",
								color: "dark",
								xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom4, m.listItem],
								children: s._(
									/*BTDS*/
									""
								)
							}), c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
								size: "16",
								weight: "normal",
								color: "secondary",
								xstyle: m.listItem,
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})]
					}),
					c.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, d.paddingInline18],
						children: [c.jsx(o("WAWebReceiptIcon.react").ReceiptIcon, {
							height: 22,
							width: 22,
							xstyle: m.iconColor
						}), c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
							xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
							children: [c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
								size: "16",
								weight: "medium",
								color: "dark",
								xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom4, m.listItem],
								children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
									/*BTDS*/
									""
								) : s._(
									/*BTDS*/
									""
								)
							}), c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
								size: "16",
								weight: "normal",
								color: "secondary",
								xstyle: m.listItem,
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})]
					})
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = function() {
			e(), o("WAWebModalManager").ModalManager.close();
		}, n = function() {
			e(), o("WAWebModalManager").ModalManager.close();
		};
		o("WAWebModalManager").ModalManager.open(c.jsx(p, {
			onDismiss: t,
			onOk: n
		}));
	}
	l.BizOrderExpansionModal = p, l.openOrderExpansionModal = _;
}), 226);
