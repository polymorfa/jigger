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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(19), a = t.onDismiss, i = t.onOk, l;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			surface: "unknown",
			viewName: "biz-order-expansion"
		}, n[0] = l) : l = n[0];
		var u;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
			/*BTDS*/
			""
		), n[1] = u) : u = n[1];
		var p;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			alignSelf: "center",
			className: (e || (e = r("stylex")))([o("WDSPaddings.stylex").wdsPaddings.paddingTop28]),
			children: c.jsx(o("WAWebWdsPictoBusinessIcon.react").WdsPictoBusinessIcon, {
				height: 88,
				xstyle: m.illustration
			})
		}), n[2] = p) : p = n[2];
		var _;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
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
		}) }), n[3] = _) : _ = n[3];
		var f, g;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (f = [o("WDSMargins.stylex").wdsMargins.marginBottom16, d.paddingInline18], g = c.jsx(r("WDSIconWdsIcChat.react"), {
			height: 22,
			width: 22,
			xstyle: m.iconColor
		}), n[4] = f, n[5] = g) : (f = n[4], g = n[5]);
		var h;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "16",
			weight: "medium",
			color: "dark",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom4, m.listItem],
			children: s._(
				/*BTDS*/
				""
			)
		}), n[6] = h) : h = n[6];
		var y;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: f,
			children: [g, c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
				children: [h, c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
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
		}), n[7] = y) : y = n[7];
		var C, b;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (b = [o("WDSMargins.stylex").wdsMargins.marginBottom16, d.paddingInline18], C = c.jsx(o("WAWebIcShieldLockIcon.react").IcShieldLockIcon, {
			height: 22,
			width: 22,
			xstyle: m.iconColor
		}), n[8] = C, n[9] = b) : (C = n[8], b = n[9]);
		var v;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "16",
			weight: "medium",
			color: "dark",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom4, m.listItem],
			children: s._(
				/*BTDS*/
				""
			)
		}), n[10] = v) : v = n[10];
		var S;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (S = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: b,
			children: [C, c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
				children: [v, c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
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
		}), n[11] = S) : S = n[11];
		var R, L;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (R = [o("WDSMargins.stylex").wdsMargins.marginBottom16, d.paddingInline18], L = c.jsx(o("WAWebReceiptIcon.react").ReceiptIcon, {
			height: 22,
			width: 22,
			xstyle: m.iconColor
		}), n[12] = R, n[13] = L) : (R = n[12], L = n[13]);
		var E;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
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
		}), n[14] = E) : E = n[14];
		var k;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (k = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.paddingInline30,
			children: [
				p,
				_,
				y,
				S,
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: R,
					children: [L, c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
						xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
						children: [E, c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
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
		}), n[15] = k) : k = n[15];
		var I;
		return n[16] !== a || n[17] !== i ? (I = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: l,
			onOK: i,
			okText: u,
			onOverlayClick: a,
			children: k
		}), n[16] = a, n[17] = i, n[18] = I) : I = n[18], I;
	}
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
