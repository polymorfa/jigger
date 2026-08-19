__d("WAWebSmsRegistrationSubtitle.react", [
	"fbt",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebHybridRegGating",
	"WAWebLinkDeviceCommonInstructions.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		subtitle: {
			lineHeight: "x1qfxs89",
			letterSpacing: "xfq947u",
			textAlign: "x2b8uid",
			$$css: !0
		},
		subtitleStart: {
			textAlign: "x1yc453h",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.children;
		return o("WAWebHybridRegGating").isHybridRegEnabled() ? u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: t
		}) : t;
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.ctaText, n = e.includeNewLine, a = n === void 0 ? !1 : n, i = e.includesSmsText, l = i === void 0 ? !0 : i, m = e.textAlign, p = m === void 0 ? "center" : m, _ = t != null || p === "start" || !l;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 2,
			xstyle: [c.subtitle, p === "start" && c.subtitleStart],
			children: [l && u.jsx(o("WAWebFlex.react").FlexRow, {
				alignSelf: "center",
				align: "center",
				wrap: "wrap",
				justify: "center",
				children: u.jsx(d, { children: s._(
					/*BTDS*/
					""
				) })
			}), u.jsx(o("WAWebFlex.react").FlexRow, {
				alignSelf: "center",
				align: "center",
				wrap: "wrap",
				justify: p,
				children: u.jsx(d, { children: _ ? s._(
					/*BTDS*/
					"",
					[
						s._param("privacy_policy_link", u.jsxs("span", {
							className: "xuxw1ft",
							children: [
								u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
									isBold: o("WAWebHybridRegGating").isHybridRegEnabled(),
									text: s._(
										/*BTDS*/
										""
									),
									url: "https://www.whatsapp.com/legal/privacy-policy",
									showArrow: !1,
									showUnderline: o("WAWebHybridRegGating").isHybridRegEnabled() ? !1 : void 0
								}),
								".",
								a ? u.jsx("br", {}) : " "
							]
						})),
						s._param("CTA text to accept conditions", t != null ? t : r("WAWebFbtCommon")("Continue")),
						s._param("terms_of_service_link", u.jsxs("span", {
							className: "xuxw1ft",
							children: [u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
								isBold: o("WAWebHybridRegGating").isHybridRegEnabled(),
								text: s._(
									/*BTDS*/
									""
								),
								url: "https://www.whatsapp.com/legal/terms-of-service",
								showArrow: !1,
								showUnderline: o("WAWebHybridRegGating").isHybridRegEnabled() ? !1 : void 0
							}), "."]
						}))
					]
				) : s._(
					/*BTDS*/
					"",
					[s._param("privacy_policy_link", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
						isBold: o("WAWebHybridRegGating").isHybridRegEnabled(),
						text: s._(
							/*BTDS*/
							""
						),
						url: "https://www.whatsapp.com/legal/privacy-policy",
						showArrow: !1,
						showUnderline: o("WAWebHybridRegGating").isHybridRegEnabled() ? !1 : void 0
					})), s._param("terms_of_service_link", u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
						isBold: o("WAWebHybridRegGating").isHybridRegEnabled(),
						text: s._(
							/*BTDS*/
							""
						),
						url: "https://www.whatsapp.com/legal/terms-of-service",
						showArrow: !1,
						showUnderline: o("WAWebHybridRegGating").isHybridRegEnabled() ? !1 : void 0
					}))]
				) })
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.SmsRegistrationSubtitleText = d, l.SmsRegistrationSubtitle = m;
}), 226);
