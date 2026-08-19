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
		var t, n, r = e.chat, a = (t = o("useWAWebContactValues").useOptionalContactValues((n = r.contact) == null ? void 0 : n.id, [o("WAWebContactGetters").getIsMe, o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary])) != null ? t : [!1, !1], i = a[0], l = a[1];
		return s.jsx(o("WAWebName.react").Name, {
			chat: r,
			ellipsify: !0,
			showBusinessCheckmark: l,
			testid: "conversation-info-header-chat-title",
			showMessageYourselfName: i,
			truncateName: !0,
			unknownUserLogContext: "chat_header"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t, n, a = e.assignmentSubtitle, i = e.chatId, l = e.chatstate, u = e.contact, c = e.location, d = e.presence, m = e.threadId, p = (t = o("useWAWebContactValues").useOptionalContactValues(u.id, [o("WAWebContactGetters").getShowBusinessCheckmarkAsSecondary, o("WAWebFrontendContactGetters").getShowBiz3pBotVerifiedNameAsSecondary])) != null ? t : [!1, !1], _ = p[0], f = p[1], g = (n = o("WAWebUseBusinessProfile.react").useBusinessProfile(o("WAWebBotGating").isBizBot3pAvailable() ? u.id : null, ["isBizBot3p"])) != null ? n : {}, h = g.isBizBot3p, y = f && h === !0;
		return s.jsx(r("WAWebUserSubtitle.react"), { userSubtitle: {
			assignmentSubtitle: a,
			chatId: i,
			chatstate: l,
			contact: u,
			location: c,
			presence: d,
			showBusinessCheckmark: _,
			showVerifiedName: y,
			threadId: m
		} });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e, t) {
		var n, a, i = e.contact, l = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos(), s = o("useWAWebModelValues").useOptionalModelValues(i, ["businessProfile"]), u = o("useWAWebModelValues").useOptionalModelValues((n = s == null ? void 0 : s.businessProfile) != null ? n : null, ["isBizBot1p"]), c = (u == null ? void 0 : u.isBizBot1p) === !0;
		if (i != null) {
			if (c && l && o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled()) return {
				type: "discreet",
				Icon: r("WDSIconWdsIcMetaDataDoubleChevron.react")
			};
			if (o("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(e)) return {
				type: "discreet",
				Icon: r("WDSIconWdsIcMetaDataChevron.react")
			};
			if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && ((a = e.groupMetadata) == null ? void 0 : a.isOpenBotGroup) === !0) return {
				type: "discreet",
				Icon: r("WDSIconWdsIcLogoMetaAiColor.react")
			};
			if (o("WAWebChatEphemerality").isEphemeralSettingOn(e) && !o("WAWebEphemeralityFrontendUtils").isEphemeralityDisabledInUIForChat(e)) return { type: "discreet" };
			if (t) return {
				type: "discreet",
				Icon: r("WDSIconIcVisibilityOff.react")
			};
		}
	}
	l.WAWebHeaderBusinessProfileSync = c, l.WAWebHeaderChatTitle = d, l.WAWebHeaderUserSubtitle = m, l.useWAWebConversationHeaderBadge = p;
}), 98);
