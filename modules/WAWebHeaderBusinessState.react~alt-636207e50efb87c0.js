__d("WAWebHeaderBusinessState.react", [
	"WAWebBotGating",
	"WAWebBotGroupGatingUtils",
	"WAWebBusinessProfileCollection",
	"WAWebCTWAGatingUtils",
	"WAWebChatEphemerality",
	"WAWebCommonCTWAConsumerTransparency",
	"WAWebContactGetters",
	"WAWebEphemeralityFrontendUtils",
	"WAWebFrontendContactGetters",
	"WAWebHasAcceptedBizBotTos",
	"WAWebName.react",
	"WAWebUseBusinessProfile.react",
	"WAWebUserSubtitle.react",
	"WDSIconIcVisibilityOff.react",
	"WDSIconWdsIcLogoMetaAiColor.react",
	"WDSIconWdsIcMetaDataChevron.react",
	"WDSIconWdsIcMetaDataDoubleChevron.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t, n = e.contact, r = (t = o("useWAWebContactValues").useOptionalContactValues(n == null ? void 0 : n.id, [o("WAWebContactGetters").getShouldForceBusinessUpdate])) != null ? t : [!1], a = r[0];
		return u(function() {
			async function e() {
				n != null && await o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(n.id);
			}
			a && e();
		}, []), null;
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t, n, r = o("react-compiler-runtime").c(4), a = e.chat, i = (t = o("useWAWebContactValues").useOptionalContactValues((n = a.contact) == null ? void 0 : n.id, [o("WAWebContactGetters").getIsMe, o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary])) != null ? t : [!1, !1], l = i[0], u = i[1], c;
		return r[0] !== a || r[1] !== l || r[2] !== u ? (c = s.jsx(o("WAWebName.react").Name, {
			chat: a,
			ellipsify: !0,
			showBusinessCheckmark: u,
			testid: "conversation-info-header-chat-title",
			showMessageYourselfName: l,
			truncateName: !0,
			unknownUserLogContext: "chat_header"
		}), r[0] = a, r[1] = l, r[2] = u, r[3] = c) : c = r[3], c;
	}
	function m(e) {
		var t, n, a = o("react-compiler-runtime").c(10), i = e.assignmentSubtitle, l = e.chatId, u = e.chatstate, c = e.contact, d = e.location, m = e.presence, p = e.threadId, _ = (t = o("useWAWebContactValues").useOptionalContactValues(c.id, [o("WAWebContactGetters").getShowBusinessCheckmarkAsSecondary, o("WAWebFrontendContactGetters").getShowBiz3pBotVerifiedNameAsSecondary])) != null ? t : [!1, !1], f = _[0], g = _[1], h = (n = o("WAWebUseBusinessProfile.react").useBusinessProfile(o("WAWebBotGating").isBizBot3pAvailable() ? c.id : null, ["isBizBot3p"])) != null ? n : {}, y = h.isBizBot3p, C = g && y === !0, b;
		return a[0] !== i || a[1] !== l || a[2] !== u || a[3] !== c || a[4] !== d || a[5] !== m || a[6] !== f || a[7] !== C || a[8] !== p ? (b = s.jsx(r("WAWebUserSubtitle.react"), { userSubtitle: {
			assignmentSubtitle: i,
			chatId: l,
			chatstate: u,
			contact: c,
			location: d,
			presence: m,
			showBusinessCheckmark: f,
			showVerifiedName: C,
			threadId: p
		} }), a[0] = i, a[1] = l, a[2] = u, a[3] = c, a[4] = d, a[5] = m, a[6] = f, a[7] = C, a[8] = p, a[9] = b) : b = a[9], b;
	}
	function p(e, t) {
		var n, a, i = o("react-compiler-runtime").c(7), l = e.contact, s = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos(), u;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (u = ["businessProfile"], i[0] = u) : u = i[0];
		var c = o("useWAWebModelValues").useOptionalModelValues(l, u), d;
		i[1] === Symbol.for("react.memo_cache_sentinel") ? (d = ["isBizBot1p"], i[1] = d) : d = i[1];
		var m = o("useWAWebModelValues").useOptionalModelValues((n = c == null ? void 0 : c.businessProfile) != null ? n : null, d), p = (m == null ? void 0 : m.isBizBot1p) === !0;
		if (l != null) {
			if (p && s && o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled()) {
				var _;
				return i[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
					type: "discreet",
					Icon: r("WDSIconWdsIcMetaDataDoubleChevron.react")
				}, i[2] = _) : _ = i[2], _;
			}
			if (o("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(e)) {
				var f;
				return i[3] === Symbol.for("react.memo_cache_sentinel") ? (f = {
					type: "discreet",
					Icon: r("WDSIconWdsIcMetaDataChevron.react")
				}, i[3] = f) : f = i[3], f;
			}
			if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && ((a = e.groupMetadata) == null ? void 0 : a.isOpenBotGroup) === !0) {
				var g;
				return i[4] === Symbol.for("react.memo_cache_sentinel") ? (g = {
					type: "discreet",
					Icon: r("WDSIconWdsIcLogoMetaAiColor.react")
				}, i[4] = g) : g = i[4], g;
			}
			if (o("WAWebChatEphemerality").isEphemeralSettingOn(e) && !o("WAWebEphemeralityFrontendUtils").isEphemeralityDisabledInUIForChat(e)) {
				var h;
				return i[5] === Symbol.for("react.memo_cache_sentinel") ? (h = { type: "discreet" }, i[5] = h) : h = i[5], h;
			}
			if (t) {
				var y;
				return i[6] === Symbol.for("react.memo_cache_sentinel") ? (y = {
					type: "discreet",
					Icon: r("WDSIconIcVisibilityOff.react")
				}, i[6] = y) : y = i[6], y;
			}
		}
	}
	l.WAWebHeaderBusinessProfileSync = c, l.WAWebHeaderChatTitle = d, l.WAWebHeaderUserSubtitle = m, l.useWAWebConversationHeaderBadge = p;
}), 98);
