__d("WAWebCoexCallingConsumerFirstTimeModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { container: {
		textAlign: "x2b8uid",
		paddingTop: "x1p57kb1",
		paddingInlineEnd: "xvtqlqk",
		paddingBottom: "xvpt6g3",
		paddingInlineStart: "xdx6fka",
		rowGap: "x1qvou4u",
		columnGap: "x1s70e7g",
		$$css: !0
	} };
	function d(e) {
		var t = e.onConfirm, n = function() {
			t(), o("WAWebModalManager").ModalManager.close();
		}, a = function() {
			o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getFirstTimeConsumerCoexCallingLearnMoreUrl());
		}, i = s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "coex-calling-first-time-modal",
			title: s._(
				/*BTDS*/
				""
			),
			onOK: n,
			okText: i,
			onCancel: a,
			cancelText: l,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: c.container,
				children: [
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
