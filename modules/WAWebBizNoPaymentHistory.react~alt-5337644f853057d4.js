__d("WAWebBizNoPaymentHistory.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebWdsSmbPictoReceiptAndroidIcon.react",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingTop9: {
		paddingTop: "x96k8nx",
		$$css: !0
	} };
	function d() {
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: c.paddingTop9,
			children: [u.jsx(o("WAWebWdsSmbPictoReceiptAndroidIcon.react").WdsSmbPictoReceiptAndroidIcon, {
				height: 88,
				width: 88
			}), u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.padding16,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
