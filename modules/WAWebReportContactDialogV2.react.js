__d("WAWebReportContactDialogV2.react", [
	"fbt",
	"WAWebBlockBusinessDialogV2.react",
	"WAWebBlocklistUtils",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebSendSpamChatAction",
	"WAWebUseBusinessProfile.react",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"WDSMargins.stylex",
	"WDSText.react",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.chat, a = e.spamFlow, i = (t = o("WAWebUseBusinessProfile.react").useBusinessProfile(n.contact.id, ["isBizBot3p"])) != null ? t : {}, l = i.isBizBot3p, c = l === void 0 ? !1 : l, p = o("useWAWebContactValues").useContactValues(n.contact.id, [o("WAWebFrontendContactGetters").getIsContactBlocked]), _ = p[0], f = !_, g = function() {
			o("WDSDialogBridge").closeWDSDialog();
		}, h = function() {
			o("WAWebSendSpamChatAction").sendReport({
				chat: n,
				spamFlow: a
			}), o("WDSDialogBridge").closeWDSDialog();
		}, y = function() {
			if (c || n.contact.isBusiness) {
				o("WAWebSendSpamChatAction").sendReport({
					chat: n,
					spamFlow: a
				}), o("WDSDialogBridge").closeWDSDialog();
				var e = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(a);
				o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebBlockBusinessDialogV2.react"), {
					chat: n,
					blockEntryPoint: e,
					withReport: !1
				}));
				return;
			}
			o("WAWebSendSpamChatAction").sendReportBlock({
				chat: n,
				spamFlow: a
			}), o("WDSDialogBridge").closeWDSDialog();
		}, C = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			children: r("WAWebFbtCommon")("Learn more")
		}), b = s._(
			/*BTDS*/
			""
		), v = d(c, n.contact.isBusiness)(C), S = m(c, n.contact.isBusiness), R = f ? u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: y,
				testid: "popup-controls-ok",
				type: "destructive",
				variant: "outline"
			},
			secondaryButtonProps: {
				label: r("WAWebFbtCommon")("Report"),
				onPress: h,
				testid: "popup-controls-extra",
				type: "default",
				variant: "outline"
			},
			tertiaryButtonProps: {
				label: r("WAWebFbtCommon")("Cancel"),
				onPress: g,
				testid: "popup-controls-cancel",
				variant: "borderless"
			}
		}) : u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: r("WAWebFbtCommon")("Report"),
				onPress: h,
				testid: "popup-controls-ok",
				type: "destructive",
				variant: "outline"
			},
			secondaryButtonProps: {
				label: r("WAWebFbtCommon")("Cancel"),
				onPress: g,
				testid: "popup-controls-cancel",
				variant: "borderless"
			}
		});
		return u.jsx(r("WDSDialog.react"), {
			closeButton: !1,
			footer: R,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: g,
			open: !0,
			size: "sm",
			testid: "report-contact-popup",
			title: b,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: v
			}), f ? u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop12,
				children: S
			}) : null] })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e, t) {
		return e ? function(e) {
			return s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", e)]
			);
		} : t ? function(e) {
			return s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", e)]
			);
		} : function(e) {
			return s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", e)]
			);
		};
	}
	function m(e, t) {
		return e ? s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = c;
}), 226);
