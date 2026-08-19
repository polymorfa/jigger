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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(16), n = e.entryPoint, a, i;
		t[0] !== n ? (a = function() {
			n && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
				action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR,
				chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
				chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
				entryPoint: n
			});
		}, i = [n], t[0] = n, t[1] = a, t[2] = i) : (a = t[1], i = t[2]), c(a, i);
		var l = o("WAWebChatCollection").ChatCollection.getActive();
		if ((l == null ? void 0 : l.contact.isContactBlocked) === !0) {
			var p;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebUnblockLidUserModal" }), t[3] = p) : p = t[3], p;
		}
		var f;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[4] = f) : f = t[4];
		var g = f, h;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			"",
			[s._param("learnMoreLink", _)]
		), t[5] = h) : h = t[5];
		var y = h, C;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[6] = C) : C = t[6];
		var b = C, v;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[7] = v) : v = t[7];
		var S = v, R;
		t[8] !== n ? (R = function() {
			d(n);
		}, t[8] = n, t[9] = R) : R = t[9];
		var L;
		t[10] !== n ? (L = function() {
			m(n);
		}, t[10] = n, t[11] = L) : L = t[11];
		var E;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(), t[12] = E) : E = t[12];
		var k;
		return t[13] !== R || t[14] !== L ? (k = u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
			onOK: R,
			okText: b,
			onCancel: L,
			title: g,
			subTitle: y,
			cancelText: S,
			displayName: E,
			okButtonType: "secondary",
			testid: "phone-number-not-shared-modal"
		}), t[13] = R, t[14] = L, t[15] = k) : k = t[15], k;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(15), n = e.entryPoint, a = o("WAWebChatCollection").ChatCollection.getActive();
		a && a.contact.isContactBlocked && o("WAWebModalManager").ModalManager.open(u.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebUnblockLidUserModal" }));
		var i, l;
		t[0] !== n ? (i = function() {
			n && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
				action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR,
				chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
				chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
				entryPoint: n
			});
		}, l = [n], t[0] = n, t[1] = i, t[2] = l) : (i = t[1], l = t[2]), c(i, l);
		var p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[3] = p) : p = t[3];
		var f = p, g;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			"",
			[s._param("learnMoreLink", _)]
		), t[4] = g) : g = t[4];
		var h = g, y;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), t[5] = y) : y = t[5];
		var C = y, b;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[6] = b) : b = t[6];
		var v = b, S;
		t[7] !== n ? (S = function() {
			d(n);
		}, t[7] = n, t[8] = S) : S = t[8];
		var R;
		t[9] !== n ? (R = function() {
			m(n);
		}, t[9] = n, t[10] = R) : R = t[10];
		var L;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (L = o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(), t[11] = L) : L = t[11];
		var E;
		return t[12] !== S || t[13] !== R ? (E = u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
			onOK: S,
			okText: C,
			onCancel: R,
			title: f,
			subTitle: h,
			cancelText: v,
			displayName: L,
			okButtonType: "secondary",
			testid: "phone-number-not-shared-restricted-modal"
		}), t[12] = S, t[13] = R, t[14] = E) : E = t[14], E;
	}
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
