__d("WAWebBotLearnMore.react", [
	"fbt",
	"WAWebBotBaseGating",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebLockIcon.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWdsIcAiFilledIcon.react",
	"WAWebWdsPictoAiIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		headerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		sectionIcon: {
			width: "xvy4d1p",
			$$css: !0
		},
		sectionTitle: {
			width: "xdzyupr",
			lineHeight: "x1o2sk6j",
			$$css: !0
		}
	};
	function m() {
		return {
			icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
				width: 24,
				height: 24,
				iconXstyle: d.icon
			}),
			title: s._(
				/*BTDS*/
				""
			),
			subtitle: o("WAWebBotBaseGating").isBotEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		};
	}
	function p() {
		return {
			icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
				width: 24,
				height: 24,
				iconXstyle: d.icon
			}),
			title: s._(
				/*BTDS*/
				""
			),
			subtitle: s._(
				/*BTDS*/
				""
			)
		};
	}
	function _() {
		return {
			icon: c.jsx(o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon, {
				width: 24,
				height: 24,
				iconXstyle: d.icon
			}),
			title: s._(
				/*BTDS*/
				""
			),
			subtitle: s._(
				/*BTDS*/
				""
			)
		};
	}
	function f(t) {
		var n = t.fromInvoke, a = function() {
			o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBotLearnMoreUrl()), o("WAWebModalManager").ModalManager.close();
		}, i = r("useWAWebFocusOnMount")(), l = c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebWdsPictoAiIcon.react").WdsPictoAiIcon, { height: 88 }) }), u = s._(
			/*BTDS*/
			""
		), f = [n ? m() : p(), _()];
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: a,
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			type: o("WAWebModal.react").ModalTheme.Promote,
			ref: i,
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16],
				children: [
					l,
					c.jsx(r("WAWebBox.react"), {
						xstyle: [
							d.headerText,
							o("WDSMargins.stylex").wdsMargins.marginHor8,
							o("WDSMargins.stylex").wdsMargins.marginTop16,
							o("WDSMargins.stylex").wdsMargins.marginBottom8
						],
						children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
							weight: "bold",
							children: u
						})
					}),
					f.map(function(t, n) {
						var a = t.icon, i = t.subtitle, l = t.title;
						return c.jsxs(o("WAWebFlex.react").FlexRow, {
							className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16),
							children: [c.jsx(o("WAWebFlex.react").FlexItem, {
								xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionIcon],
								children: a
							}), c.jsxs(o("WAWebFlex.react").FlexItem, {
								xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionTitle],
								children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: l }), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: i })]
							})]
						}, n);
					})
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
