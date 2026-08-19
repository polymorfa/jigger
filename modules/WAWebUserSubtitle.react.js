__d("WAWebUserSubtitle.react", [
	"fbt",
	"WAWebAuthAgentConsumerJourneyLogger",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBotBaseGating",
	"WAWebBotFrontendUtils",
	"WAWebBotProfileGetters",
	"WAWebCTWAGatingUtils",
	"WAWebChatAssignmentLogEvents",
	"WAWebChatSubtitleText",
	"WAWebChatSubtitleText.react",
	"WAWebContactGetters",
	"WAWebEmojiText.react",
	"WAWebFrontendContactGetters",
	"WAWebHasAcceptedBizBotTos",
	"WAWebMiscGatingUtils",
	"WAWebPresenceEnum",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebPsaVerifiedIcon.react",
	"WAWebSupportChatStrings",
	"WAWebTextStatusGatingUtils",
	"WAWebTextStatusUtils",
	"WAWebTypingIndicatorGatingUtils",
	"WAWebUseBusinessProfile.react",
	"WAWebWid",
	"WDSIconWdsIcAiFilled.react",
	"WDSMargins.stylex",
	"react",
	"stylex",
	"useWAWebAiThreadTitle",
	"useWAWebContactValues",
	"useWAWebModelValues",
	"useWAWebOptionalBotProfileValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = { icon: {
		display: "x1rg5ohu",
		flexGrow: "x1c4vz4f",
		flexShrink: "x2lah0s",
		flexBasis: "xdl72j9",
		color: "xhslqc4",
		$$css: !0
	} };
	function p(t) {
		var n = t.userSubtitle, a = n.assignmentSubtitle, i = n.chatId, l = n.chatstate, u = n.contact, p = n.location, _ = n.presence, f = n.showBusinessCheckmark, g = f === void 0 ? !1 : f, h = n.showVerifiedName, y = h === void 0 ? !1 : h, C = n.threadId, b = s._(
			/*BTDS*/
			""
		), v = s._(
			/*BTDS*/
			""
		), S = s._(
			/*BTDS*/
			""
		), R = s._(
			/*BTDS*/
			""
		), L = s._(
			/*BTDS*/
			""
		), E = s._(
			/*BTDS*/
			""
		), k = o("useWAWebContactValues").useContactValues(u.id, [
			o("WAWebContactGetters").getName,
			o("WAWebContactGetters").getVerifiedName,
			o("WAWebContactGetters").getId,
			o("WAWebFrontendContactGetters").getTextStatusString,
			o("WAWebFrontendContactGetters").getTextStatusEmoji,
			o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
			o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
			o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration
		]), I = k[0], T = k[1], D = k[2], x = k[3], $ = k[4], P = k[5], N = k[6], M = k[7], w = o("WAWebTextStatusUtils").shouldDisplayTextStatus(x, $, P, N, M), A = o("useWAWebModelValues").useModelValues(_, [
			"chatstate",
			"withholdDisplayStage",
			"forceDisplay",
			"hasData"
		]);
		o("useWAWebModelValues").useModelValues(l, [
			"type",
			"deny",
			"t"
		]);
		var F = o("WAWebUseBusinessProfile.react").useBusinessProfile(i, [
			"isBizBot1p",
			"isBizBot3p",
			"isAuthorizedAgent",
			"parentCompanyName",
			"obaPhoneNumber"
		]), O = o("WAWebBotBaseGating").isBizBot1pEnabled() && (F == null ? void 0 : F.isBizBot1p) === !0, B = o("WAWebBotBaseGating").isBizBot3pEnabled() && (F == null ? void 0 : F.isBizBot3p) === !0, W = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos(), q = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(i, [o("WAWebBotProfileGetters").getIsDefault]), U = q[0], V = r("useWAWebAiThreadTitle")(i, C);
		d(function() {
			a != null && A.withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment && o("WAWebChatAssignmentLogEvents").logChatStatusTickerShown(i);
		}, [
			i,
			A.withholdDisplayStage,
			a
		]), d(function() {
			if ((F == null ? void 0 : F.isAuthorizedAgent) === !0 && !r("WAWebWid").isPSA(D) && !r("WAWebWid").isCAPISupportAccount(D) && !r("WAWebWid").isAiHub(D) && !D.isBot() && !B && !O) {
				var e, t;
				o("WAWebAuthAgentConsumerJourneyLogger").logChatHeaderSubtitleImpression(i.user, (e = F.parentCompanyName) != null ? e : "", (t = F.obaPhoneNumber) != null ? t : null);
			}
		}, [
			i,
			D,
			F == null ? void 0 : F.isAuthorizedAgent,
			F == null ? void 0 : F.parentCompanyName,
			F == null ? void 0 : F.obaPhoneNumber,
			B,
			O
		]);
		var H, G, z, j, K = !1, Q = W && o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiIndiaEnabled();
		if (r("WAWebWid").isAiHub(D)) H = o("WAWebBizAiAgentStatusUtils").getAiHubSubtitle();
		else if (r("WAWebWid").isPSA(D)) H = S;
		else if (r("WAWebWid").isCAPISupportAccount(D)) H = o("WAWebSupportChatStrings").SupportChatSubtitle();
		else if (D.isBot() || B) H = L, U && (H = V != null ? V : o("WAWebBotFrontendUtils").metaAiLlamaVersionTitleFbs());
		else if (O) H = Q ? E : v;
		else if ((F == null ? void 0 : F.isAuthorizedAgent) === !0) {
			var X;
			K = !0;
			var Y = (X = F == null ? void 0 : F.parentCompanyName) != null ? X : null;
			Y != null && Y !== "" ? H = Y : H = v;
		} else A.withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.E2EE ? (H = o("WAWebChatSubtitleText").e2eChatSubtitleText(), j = !0) : A.withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.Self ? H = R : p === "list" || p === "info" ? H = A.getUserSubtitleText() : A.withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.Info ? H = b : A.withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.Business ? H = v : a != null && A.withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment ? H = a : A.withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen ? H = A.getUserSubtitleText() : A.chatstate.type === "unavailable" && w && o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() && !(p === "title" && o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) ? (H = x, z = $) : H = A.getUserSubtitleText(o("WAWebTypingIndicatorGatingUtils").isTypingIndicatorMessageBubbleEnabled(i)) || (A.forceDisplay ? "" : b);
		return (H != null && H !== "" || z != null) && (G = c.jsx(r("WAWebChatSubtitleText.react"), {
			text: H,
			textStatusEmoji: z,
			location: p,
			showLockIcon: j
		})), D.isBot() || O ? c.jsxs("div", {
			className: "x78zum5 x1q0g3np xeuugli x6ikm8r x10wlt62",
			children: [G, Q && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.icon, o("WDSMargins.stylex").wdsMargins.marginTop4, o("WDSMargins.stylex").wdsMargins.marginStart2), { children: c.jsx(r("WDSIconWdsIcAiFilled.react"), {
				width: 12,
				height: 12
			}) }))]
		}) : p === "title" && K && H !== b ? c.jsxs("div", {
			className: "x78zum5 x1q0g3np xeuugli x6ikm8r x10wlt62",
			children: [G, c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.icon, o("WDSMargins.stylex").wdsMargins.marginTop2, o("WDSMargins.stylex").wdsMargins.marginStart2), { children: o("WAWebMiscGatingUtils").isBlueEnabled() ? c.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
				width: 16,
				height: 16
			}) : c.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {
				width: 16,
				height: 16
			}) }))]
		}) : p === "title" && H !== b && (g || y) && !D.isCAPISupportAccount() ? c.jsxs("div", {
			className: "x78zum5 x1q0g3np xeuugli x6ikm8r x10wlt62",
			children: [
				c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: T,
					className: "x1c4vz4f xisnujt x1nxh6w3 x1fc57z9 xhslqc4",
					direction: "auto",
					titlify: !0
				}),
				g && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.icon, o("WDSMargins.stylex").wdsMargins.marginTop2, o("WDSMargins.stylex").wdsMargins.marginStart2), { children: o("WAWebMiscGatingUtils").isBlueEnabled() ? c.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
					width: 16,
					height: 16
				}) : c.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {
					width: 16,
					height: 16
				}) })),
				G && c.jsx("span", {
					className: "x117nqv4 x1fc57z9 x7phf20 x1p8j9ns",
					children: "·"
				}),
				G
			]
		}) : G || null;
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
