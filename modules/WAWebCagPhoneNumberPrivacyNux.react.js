__d("WAWebCagPhoneNumberPrivacyNux.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebPhoneNumberPrivacyNux.react",
	"WAWebPhoneUtils",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		if (e == null) return null;
		var t = o("WAWebUsernameWorkerCompatibleGatingUtils").isUsernameCreationMode(), n = t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a = t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
			testid: "phone_number_shared_cag_admin",
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			onCancel: m,
			cancelText: s._(
				/*BTDS*/
				""
			),
			displayName: o("WAWebPhoneUtils").formatPhone(e.user),
			title: n,
			subTitle: a
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		var e = s._(
			/*BTDS*/
			""
		), t = o("WAWebUsernameWorkerCompatibleGatingUtils").isUsernameCreationMode() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
			testid: "phone_number_not_shared_cag_non_admin",
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			onCancel: m,
			cancelText: s._(
				/*BTDS*/
				""
			),
			displayName: o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
			title: e,
			subTitle: t
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getCagPhoneNumberHidingFaqUrl());
	}
	l.CagPhoneNumberSharedNux = c, l.CagPhoneNumberHiddenNux = d;
}), 226);
