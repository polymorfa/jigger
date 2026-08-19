__d("WAWebPinChatAuraUpsellModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebWamEnumWpbujBenefitType",
	"WAWebWamEnumWpbujSurface",
	"react",
	"react-compiler-runtime",
	"useWAWebWaPlusBenefitJourneyViewOnMount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(8), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
			benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.PINNED_CHATS,
			surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.PINNED_CHAT
		}, e[0] = t) : t = e[0];
		var n = r("useWAWebWaPlusBenefitJourneyViewOnMount")(t), a;
		e[1] !== n ? (a = function() {
			n.current.logSelect({
				success: !0,
				actionTarget: "view_on_phone"
			}), o("WAWebModalManager").ModalManager.closeAlert();
		}, e[1] = n, e[2] = a) : a = e[2];
		var i = a, l, c;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			surface: "unknown",
			viewName: "pin-chat-aura-upsell"
		}, c = s._(
			/*BTDS*/
			""
		), e[3] = l, e[4] = c) : (l = e[3], c = e[4]);
		var d;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), e[5] = d) : d = e[5];
		var m;
		return e[6] !== i ? (m = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: l,
			title: c,
			onOK: i,
			children: d
		}), e[6] = i, e[7] = m) : m = e[7], m;
	}
	l.default = c;
}), 226);
