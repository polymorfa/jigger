__d("WAWebAcpDeprecationDrawerContent.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebLimitSharingUIUtils",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		description: {
			paddingTop: "x1y1aw1k",
			$$css: !0
		},
		defaultLineHeight: {
			lineHeight: "x1o2sk6j",
			$$css: !0
		},
		spaceBefore: {
			"::before_content": "xjuopq5",
			"::before_whiteSpace": "xulcptl",
			$$css: !0
		}
	};
	function d() {
		return u.jsxs(o("WAWebText.react").WAWebTextMuted, {
			testid: "limit-sharing-drawer-description",
			xstyle: [c.description, c.defaultLineHeight],
			children: [s._(
				/*BTDS*/
				""
			), u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebLimitSharingUIUtils").getSystemMessageLearnMoreURL(),
				xstyle: c.spaceBefore,
				children: r("WAWebFbtCommon")("Learn more")
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
