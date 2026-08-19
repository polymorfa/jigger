__d("WAWebAttachMediaViewOnceNux.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebLockIcon.react",
	"WAWebText.react",
	"WAWebWdsPictoViewOnceIcon.react",
	"WDSIconWdsIcViewOnce.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		sectionIcon: {
			width: "xvy4d1p",
			$$css: !0
		},
		sectionTitle: {
			width: "xxsgkw5",
			lineHeight: "x1o2sk6j",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.onOkClick, a = s._(
			/*BTDS*/
			""
		), i = {
			width: 24,
			height: 24,
			iconXstyle: c.icon
		}, l = [{
			icon: u.jsx(r("WDSIconWdsIcViewOnce.react"), babelHelpers.extends({}, i)),
			description: s._(
				/*BTDS*/
				""
			)
		}, {
			icon: u.jsx(o("WAWebLockIcon.react").LockIcon, babelHelpers.extends({}, i)),
			description: s._(
				/*BTDS*/
				""
			)
		}];
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "view-once-nux"
			},
			onOK: n,
			cancelText: r("WAWebFbtCommon")("Learn more"),
			onCancel: m,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: (t = o("WDSMargins.stylex")).wdsMargins.marginVerAuto,
				children: [
					u.jsx(o("WAWebWdsPictoViewOnceIcon.react").WdsPictoViewOnceIcon, {
						width: 132 * 1.5,
						height: 91 * 1.5,
						xstyle: t.wdsMargins.marginVer16
					}),
					u.jsx(r("WAWebBox.react"), {
						alignSelf: "center",
						xstyle: [
							t.wdsMargins.marginHor8,
							t.wdsMargins.marginTop16,
							t.wdsMargins.marginBottom8
						],
						children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
							weight: "bold",
							children: a
						})
					}),
					l.map(function(e, t) {
						var n = e.description, r = e.icon;
						return u.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, o("WDSMargins.stylex").wdsMargins.marginVer16],
							children: [u.jsx(o("WAWebFlex.react").FlexItem, {
								xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, c.sectionIcon],
								children: r
							}), u.jsx(o("WAWebFlex.react").FlexItem, {
								xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, c.sectionTitle],
								children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: n })
							})]
						}, t);
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getViewOnceFaqUrl());
	}
	l.default = d;
}), 226);
