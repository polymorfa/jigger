__d("WAWebCometLiteE2EFooter.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSIconIcLock.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		e2eFooter: {
			flexShrink: "x2lah0s",
			width: "xh8yej3",
			columnGap: "x1s70e7g",
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		e2eIcon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d() {
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: c.e2eFooter,
			testid: "wa-web-lite-e2e-footer",
			children: [u.jsx(r("WDSIconIcLock.react"), {
				height: 16,
				width: 16,
				iconXstyle: c.e2eIcon
			}), u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
