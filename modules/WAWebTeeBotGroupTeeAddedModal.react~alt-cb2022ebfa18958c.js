__d("WAWebTeeBotGroupTeeAddedModal.react", [
	"fbt",
	"WAWebBotGroupGatingUtils",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebLockIcon.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WDSIconIcPersonShield.react",
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
		var t = function() {
			o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getTeeGroupLearnMoreUrl()), o("WAWebModalManager").ModalManager.close();
		}, n = r("useWAWebFocusOnMount")(), a = s._(
			/*BTDS*/
			""
		);
		return o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() ? c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: t,
			type: o("WAWebModal.react").ModalTheme.Promote,
			ref: n,
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16],
				children: [
					c.jsx(r("WAWebBox.react"), {
						xstyle: [
							d.headerText,
							o("WDSMargins.stylex").wdsMargins.marginHor8,
							o("WDSMargins.stylex").wdsMargins.marginTop16,
							o("WDSMargins.stylex").wdsMargins.marginBottom8
						],
						children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
							weight: "bold",
							children: a
						})
					}),
					c.jsxs(o("WAWebFlex.react").FlexRow, {
						className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16),
						children: [c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionIcon],
							children: c.jsx(o("WAWebLockIcon.react").LockIcon, {
								width: 24,
								height: 24,
								iconXstyle: d.icon
							})
						}), c.jsxs(o("WAWebFlex.react").FlexItem, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionTitle],
							children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
								/*BTDS*/
								""
							) }), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
								/*BTDS*/
								""
							) })]
						})]
					}),
					c.jsxs(o("WAWebFlex.react").FlexRow, {
						className: e(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16),
						children: [c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionIcon],
							children: c.jsx(r("WDSIconIcPersonShield.react"), {
								width: 24,
								height: 24,
								iconXstyle: d.icon
							})
						}), c.jsxs(o("WAWebFlex.react").FlexItem, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionTitle],
							children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
								/*BTDS*/
								""
							) }), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
								/*BTDS*/
								""
							) })]
						})]
					})
				]
			})
		}) : null;
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
