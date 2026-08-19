__d("WAWebAddEditPixKeyModalFooter.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebUserPrefsPaymentTos",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { row: {
		paddingTop: "xyamay9",
		height: "xsdox4t",
		textAlign: "x2b8uid",
		$$css: !0
	} }, d = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
		href: "https://faq.whatsapp.com/1201270817206354",
		testid: "learn-more-link",
		children: s._(
			/*BTDS*/
			""
		)
	}), m = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
		href: "https://fburl.com/5ugqajuy",
		testid: "meta-tos-link",
		children: s._(
			/*BTDS*/
			""
		)
	}), p = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
		href: "https://fburl.com/mo0hnzrw",
		testid: "wa-payments-tos-link",
		children: s._(
			/*BTDS*/
			""
		)
	});
	function _() {
		var e, t, n = (e = (t = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null ? void 0 : t.accepted) != null ? e : !1, a = s._(
			/*BTDS*/
			"",
			[
				s._param("wa-payments-tos-link", p),
				s._param("meta-tos-link", m),
				s._param("learn-more-link", d)
			]
		), i = s._(
			/*BTDS*/
			"",
			[s._param("learn-more-link", d)]
		);
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: c.row,
			justify: "center",
			children: u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: n ? i : a
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
