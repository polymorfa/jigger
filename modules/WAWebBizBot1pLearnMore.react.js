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
	"react-compiler-runtime",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(5), t = r("useWAWebFocusOnMount")(), n = d, a, i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		), e[0] = a, e[1] = i) : (a = e[0], i = e[1]);
		var l;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16],
			children: u.jsx(r("WAWebBizBotLearnMoreContent.react"), {})
		}), e[2] = l) : l = e[2];
		var c;
		return e[3] !== t ? (c = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			cancelText: a,
			okText: i,
			onCancel: o("WAWebModalManager").closeModalManager,
			onOK: n,
			ref: t,
			children: l
		}), e[3] = t, e[4] = c) : c = e[4], c;
	}
	function d() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBizBot1pLearnMoreUrl());
	}
	l.default = c;
}), 226);
