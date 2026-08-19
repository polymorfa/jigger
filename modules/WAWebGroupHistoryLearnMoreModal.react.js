__d("WAWebGroupHistoryLearnMoreModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNewsletterModalsUtils.react",
	"WAWebText.react",
	"WDSIconIcLock.react",
	"WDSIconIcPersonShield.react",
	"WDSIconIcToggleOff.react",
	"WDSIllustrationWdsPictoMessageHistoryAndroid.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { bulletColor: {
		color: "x1v5yvga",
		$$css: !0
	} }, d = [
		{
			Icon: r("WDSIconIcPersonShield.react"),
			iconXstyle: c.bulletColor,
			text: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			subtext: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			Icon: r("WDSIconIcToggleOff.react"),
			iconXstyle: c.bulletColor,
			text: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			subtext: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			Icon: r("WDSIconIcLock.react"),
			iconXstyle: c.bulletColor,
			text: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			subtext: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}
	];
	function m() {
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: r("WAWebFbtCommon")("OK"),
			onOK: o("WAWebModalManager").closeModalManager,
			testid: "group-history-learn-more-modal",
			children: [
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					padding: 16,
					children: u.jsx(r("WDSIllustrationWdsPictoMessageHistoryAndroid.react"), {})
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					padding: 24,
					children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
						weight: "medium",
						color: "primary",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: d })
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
