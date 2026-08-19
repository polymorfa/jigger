__d("WAWebMetaVerifiedActiveSubscriberModal.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebConnModel",
	"WAWebDetailImage.react",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebImg.react",
	"WAWebMetaVerifiedUserActionLogger",
	"WAWebModalManager",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebText.react",
	"WAWebThemeContext",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumMetaVerifiedUserActionAction",
	"WAWebWamEnumMetaVerifiedUserActionReferral",
	"WAWebWamEnumMetaVerifiedUserActionSurface",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"bx",
	"react",
	"useWAWebLogEventOnce"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { headerText: {
		textAlign: "x2b8uid",
		$$css: !0
	} }, d = 59.49, m = 12;
	function p() {
		var e, t = o("WAWebThemeContext").useIsDarkTheme(), n = u.jsxs(u.Fragment, { children: [
			s._(
				/*BTDS*/
				""
			),
			u.jsx("br", {}),
			u.jsx("br", {}),
			s._(
				/*BTDS*/
				""
			)
		] }), a = (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) != null ? e : o("WAWebUserPrefsMeUser").getMaybeMePnUser(), i = a != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: a,
			size: 88,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High
		}) : null, l = u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: o("WAWebConnModel").Conn.pushname,
			ellipsify: !0,
			titlify: !0
		}) }), p = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginStart2,
			children: u.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
				height: 20,
				width: 20
			})
		}), _ = [l, p], f = s._(
			/*BTDS*/
			""
		), g = {
			draggable: !1,
			style: {
				width: d,
				height: m
			}
		}, h = t ? r("bx")("31849") : r("bx")("31850");
		return o("useWAWebLogEventOnce").useLogEventOnce(function() {
			o("WAWebMetaVerifiedUserActionLogger").logMetaVerifiedModalEvents(o("WAWebWamEnumMetaVerifiedUserActionAction").META_VERIFIED_USER_ACTION_ACTION.VIEW, o("WAWebWamEnumMetaVerifiedUserActionSurface").META_VERIFIED_USER_ACTION_SURFACE.WEB_ACTIVE_SUBSCRIBER_DIALOG, o("WAWebWamEnumMetaVerifiedUserActionReferral").META_VERIFIED_USER_ACTION_REFERRAL.BUSINESS_TOOLS);
		}), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("Close"),
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16],
				children: [
					u.jsx(r("WAWebBox.react"), {
						xstyle: [
							c.headerText,
							o("WDSMargins.stylex").wdsMargins.marginHor8,
							o("WDSMargins.stylex").wdsMargins.marginTop16,
							o("WDSMargins.stylex").wdsMargins.marginBottom8
						],
						children: i
					}),
					u.jsx(r("WAWebBox.react"), { children: u.jsx(o("WAWebFlex.react").FlexRow, { children: _ }) }),
					u.jsx(r("WAWebBox.react"), {
						xstyle: [
							c.headerText,
							o("WDSMargins.stylex").wdsMargins.marginHor8,
							o("WDSMargins.stylex").wdsMargins.marginTop16,
							o("WDSMargins.stylex").wdsMargins.marginBottom8
						],
						children: u.jsx(o("WAWebText.react").WAWebTextLarge, { children: f })
					}),
					u.jsxs(r("WAWebBox.react"), {
						xstyle: [o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer8],
						children: [u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom8,
							children: u.jsx(r("WAWebImg.react"), babelHelpers.extends({ src: r("bx").getURL(h) }, g))
						}) }), n]
					})
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
