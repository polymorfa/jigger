__d("WAWebConsumerAddPixKeyModalHeader.react", [
	"WAWebConsumerPixStrings",
	"WAWebFlex.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		container: {
			marginBottom: "x14mdic9",
			$$css: !0
		},
		text: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		subtitle: {
			alignSelf: "xkh2ocl",
			$$css: !0
		},
		title: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.isUpdate, n = t === void 0 ? !1 : t;
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: u.container,
			testid: "consumer-add-pix-key-modal-header",
			children: [n ? null : s.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				xstyle: [u.text, u.title],
				children: o("WAWebConsumerPixStrings").getConsumerAddPixKeyTitle()
			}), s.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				xstyle: [u.text, u.subtitle],
				children: o("WAWebConsumerPixStrings").getConsumerAddPixKeySubtitle()
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
