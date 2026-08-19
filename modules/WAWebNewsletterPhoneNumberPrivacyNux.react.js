__d("WAWebNewsletterPhoneNumberPrivacyNux.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebNewsletterFaqUrl",
	"WAWebNewsletterPrivacyRow.react",
	"WAWebPhoneNumberPrivacyNux.react",
	"WAWebUserPrefsMeUser",
	"WDSIconIcAccountCircle.react",
	"WDSIconIcDialpad.react",
	"WDSIconIcVisibilityOff.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { tealColor: {
		color: "x1v5yvga",
		$$css: !0
	} };
	function d() {
		var e = s._(
			/*BTDS*/
			""
		), t = u.jsxs(u.Fragment, { children: [
			u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
				icon: u.jsx(r("WDSIconIcVisibilityOff.react"), {
					iconXstyle: c.tealColor,
					height: 20
				}),
				text: s._(
					/*BTDS*/
					""
				),
				title: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
				icon: u.jsx(r("WDSIconIcDialpad.react"), {
					iconXstyle: c.tealColor,
					height: 20,
					width: 20
				}),
				text: s._(
					/*BTDS*/
					""
				),
				title: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
				icon: u.jsx(r("WDSIconIcAccountCircle.react"), {
					iconXstyle: c.tealColor,
					height: 20
				}),
				text: s._(
					/*BTDS*/
					""
				),
				title: s._(
					/*BTDS*/
					""
				)
			})
		] });
		return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
			cancelText: r("WAWebFbtCommon")("Learn more"),
			customContent: t,
			displayName: o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
			okText: r("WAWebFbtCommon")("OK"),
			onCancel: m,
			onOK: o("WAWebModalManager").closeModalManager,
			testid: "phone_number_not_shared_newsletter",
			title: e
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebNewsletterFaqUrl").getNewsletterPrivacyFaqUrl());
	}
	l.default = d;
}), 226);
