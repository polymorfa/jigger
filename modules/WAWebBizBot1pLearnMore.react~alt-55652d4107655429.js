__d("WAWebBizBot1pLearnMore.react", [
	"fbt",
	"WAWebBizBotLearnMoreContent.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = r("useWAWebFocusOnMount")(), t = function() {
			o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBizBot1pLearnMoreUrl());
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			cancelText: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			onOK: t,
			ref: e,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16],
				children: u.jsx(r("WAWebBizBotLearnMoreContent.react"), {})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
