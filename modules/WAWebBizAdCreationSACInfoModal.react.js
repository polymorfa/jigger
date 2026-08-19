__d("WAWebBizAdCreationSACInfoModal.react", [
	"fbt",
	"WAWebBizInfoModalShell.react",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = "https://www.facebook.com/business/help/298000447747885";
	function d() {
		var e = function() {
			o("WAWebExternalLink.react").openExternalLink(c);
		};
		return u.jsx(r("WAWebBizInfoModalShell.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			children: u.jsxs(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					u.jsx(r("WDSTextualLink.react"), {
						onClick: e,
						children: r("WAWebFbtCommon")("Learn more")
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
