__d("WAWebConsumerAddPixKeyModalHeader.react", [
	"WAWebConsumerPixStrings",
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(5), n = e.isUpdate, a = n === void 0 ? !1 : n, i;
		t[0] !== a ? (i = a ? null : s.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			xstyle: [u.text, u.title],
			children: o("WAWebConsumerPixStrings").getConsumerAddPixKeyTitle()
		}), t[0] = a, t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			xstyle: [u.text, u.subtitle],
			children: o("WAWebConsumerPixStrings").getConsumerAddPixKeySubtitle()
		}), t[2] = l) : l = t[2];
		var c;
		return t[3] !== i ? (c = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: u.container,
			testid: "consumer-add-pix-key-modal-header",
			children: [i, l]
		}), t[3] = i, t[4] = c) : c = t[4], c;
	}
	l.default = c;
}), 98);
