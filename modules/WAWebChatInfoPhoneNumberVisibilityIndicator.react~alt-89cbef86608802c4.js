__d("WAWebChatInfoPhoneNumberVisibilityIndicator.react", [
	"fbt",
	"WAWebCagPhoneNumberPrivacyNux.react",
	"WAWebChatInfoDrawerRow.react",
	"WAWebModalManager",
	"WAWebPnhCagDailyUtils",
	"WAWebSharePhoneNumberModal.react",
	"WAWebText.react",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebWamEnumPnhEntryPointType",
	"WDSIconIcDialpad.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.handleClick, n = e.phoneNumberIsShared, a = e.showUsernameAwareSharedText, i = a === void 0 ? !1 : a, l = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			children: s._(
				/*BTDS*/
				""
			)
		}), c = i ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), d = s._(
			/*BTDS*/
			""
		), m = "phone_number_visibility_indicator", p = n ? c : d, _ = {
			icon: u.jsx(r("WDSIconIcDialpad.react"), {}),
			title: l,
			testid: m,
			secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: p }),
			onClick: t
		};
		return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, babelHelpers.extends({}, _));
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.chat, n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		if (n == null) return null;
		var r = t.contact.shareOwnPn === !0, a = function() {
			if (r && n) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharePhoneNumberModal.react").PostSharePhoneNumberModal, {
					entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY,
					mePnUser: n
				}));
				return;
			}
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharePhoneNumberModal.react").SharePhoneNumberModal, { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY }));
		};
		return u.jsx(c, {
			phoneNumberIsShared: r,
			handleClick: a
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t, n = e.chat, r = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		if (r == null) return null;
		var a = !!((t = n.groupMetadata) != null && t.participants.iAmAdmin()), i = function() {
			var e, t = (e = n.groupMetadata) == null ? void 0 : e.parentGroup;
			t && o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(t, o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType.PNH_INDICATOR_CLICKS_INFO_SCREEN), o("WAWebModalManager").ModalManager.open(a ? u.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberSharedNux, {}) : u.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberHiddenNux, {}));
		};
		return u.jsx(c, {
			phoneNumberIsShared: a,
			handleClick: i,
			showUsernameAwareSharedText: o("WAWebUsernameWorkerCompatibleGatingUtils").isUsernameCreationMode()
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.PhoneNumberVisibilityIndicator1On1 = d, l.PhoneNumberVisibilityIndicatorCag = m;
}), 226);
