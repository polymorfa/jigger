__d("WAWebPinChatAuraUpsellModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebWamEnumWpbujBenefitType",
	"WAWebWamEnumWpbujSurface",
	"react",
	"useWAWebWaPlusBenefitJourneyViewOnMount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = r("useWAWebWaPlusBenefitJourneyViewOnMount")({
			benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.PINNED_CHATS,
			surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.PINNED_CHAT
		}), t = function() {
			e.current.logSelect({
				success: !0,
				actionTarget: "view_on_phone"
			}), o("WAWebModalManager").ModalManager.closeAlert();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "pin-chat-aura-upsell"
			},
			title: s._(
				/*BTDS*/
				""
			),
			onOK: t,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
