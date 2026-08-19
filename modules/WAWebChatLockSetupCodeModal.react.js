__d("WAWebChatLockSetupCodeModal.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebIconPopup.react",
	"WAWebTextUtils.react",
	"WAWebWdsPictoChatlockIcon.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		return u.jsx(r("WAWebIconPopup.react"), {
			icon: o("WAWebWdsPictoChatlockIcon.react").WdsPictoChatlockIcon,
			iconSize: "large",
			useFilledIcon: !1,
			title: s._(
				/*BTDS*/
				""
			),
			primaryActionText: r("WAWebFbtCommon")("OK"),
			description: u.jsx(o("WAWebTextUtils.react").TextAlign, {
				align: "center",
				children: s._(
					/*BTDS*/
					"",
					[
						s._implicitParam("=m1", u.jsx(o("WAWebTextUtils.react").Bold, { children: s._(
							/*BTDS*/
							""
						) })),
						s._implicitParam("=m3", u.jsx(o("WAWebTextUtils.react").Bold, { children: s._(
							/*BTDS*/
							""
						) })),
						s._implicitParam("=m5", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebFaqUrl").getChatLockSecretCodeFaqUrl(),
							children: s._(
								/*BTDS*/
								""
							)
						}))
					]
				)
			}),
			stretchButtons: !0
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
