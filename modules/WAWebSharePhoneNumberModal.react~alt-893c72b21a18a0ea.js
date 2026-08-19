__d("WAWebSharePhoneNumberModal.react", [
	"fbt",
	"VultureJSDeadComponent.react",
	"WAWebChatCollection",
	"WAWebClickableLink.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebLogRequestPhoneNumber",
	"WAWebModalManager",
	"WAWebPhoneNumberPrivacyNux.react",
	"WAWebPhoneUtils",
	"WAWebSendSharePhoneNumberChatAction",
	"WAWebStateUtils",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumPnhActionType",
	"WAWebWamEnumPnhChatTypeType",
	"WAWebWamEnumPnhMessageChatParty",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = function(t) {
		var e = o("WAWebChatCollection").ChatCollection.getActive();
		e && (t != null && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
			action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_NUMBER,
			chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
			chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
			entryPoint: t
		}), o("WAWebSendSharePhoneNumberChatAction").sendSharePhoneNumber(o("WAWebStateUtils").unproxy(e))), o("WAWebModalManager").ModalManager.close();
	}, m = function(t) {
		var e = o("WAWebChatCollection").ChatCollection.getActive();
		e && (t != null && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
			action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.DISMISS,
			chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
			chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
			entryPoint: t
		}), o("WAWebModalManager").ModalManager.close());
	}, p = function() {
		var e = o("WAWebFaqUrl").getPhoneNumberHidingFaqUrl();
		o("WAWebExternalLink.react").openExternalLink(e);
	}, _ = u.jsx(r("WAWebClickableLink.react"), {
		onClick: p,
		children: s._(
			/*BTDS*/
			""
		)
	});
	function f(e) {
		var t = e.entryPoint;
		c(function() {
			t && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
				action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR,
				chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
				chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
				entryPoint: t
			});
		}, [t]);
		var n = o("WAWebChatCollection").ChatCollection.getActive();
		if ((n == null ? void 0 : n.contact.isContactBlocked) === !0) return u.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebUnblockLidUserModal" });
		var a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			"",
			[s._param("learnMoreLink", _)]
		), l = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
			onOK: function() {
				d(t);
			},
			okText: l,
			onCancel: function() {
				m(t);
			},
			title: a,
			subTitle: i,
			cancelText: p,
			displayName: o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
			okButtonType: "secondary",
			testid: "phone-number-not-shared-modal"
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.entryPoint, n = o("WAWebChatCollection").ChatCollection.getActive();
		n && n.contact.isContactBlocked && o("WAWebModalManager").ModalManager.open(u.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebUnblockLidUserModal" })), c(function() {
			t && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
				action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR,
				chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
				chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
				entryPoint: t
			});
		}, [t]);
		var a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			"",
			[s._param("learnMoreLink", _)]
		), l = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
			onOK: function() {
				d(t);
			},
			okText: l,
			onCancel: function() {
				m(t);
			},
			title: a,
			subTitle: i,
			cancelText: p,
			displayName: o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
			okButtonType: "secondary",
			testid: "phone-number-not-shared-restricted-modal"
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.entryPoint, n = e.mePnUser, a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		), l = r("WAWebFbtCommon")("OK"), c = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
			onOK: m,
			okText: l,
			onCancel: function() {
				p(), m();
			},
			title: a,
			subTitle: i,
			cancelText: c,
			displayName: o("WAWebPhoneUtils").formatPhone(n.user),
			testid: "phone-number-shared-modal"
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.SharePhoneNumberModal = f, l.SharePhoneNumberRestrictedActionModal = g, l.PostSharePhoneNumberModal = h;
}), 226);
