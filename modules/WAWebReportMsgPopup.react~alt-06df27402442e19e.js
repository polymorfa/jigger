__d("WAWebReportMsgPopup.react", [
	"fbt",
	"WAWebBlockBusinessPopup.react",
	"WAWebBlocklistUtils",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebComplianceReportPopupLoadable",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupHistoryUtils",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebName.react",
	"WAWebPrivateMessageComplianceUtils",
	"WAWebReportPopupBase.react",
	"WAWebSendSpamChatAction",
	"WAWebUseBusinessProfile.react",
	"react",
	"useWAWebContactFormattedUsernameOrPhoneByChat",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.msg, a = e.spamFlow, i = o("WAWebFrontendMsgGetters").getChat(n), l = (t = o("WAWebUseBusinessProfile.react").useBusinessProfile(i.contact.id, ["isBizBot3p"])) != null ? t : {}, c = l.isBizBot3p, m = c === void 0 ? !1 : c, p = d(n), _ = o("useWAWebContactValues").useContactValues(p.id, [o("WAWebFrontendContactGetters").getIsContactBlocked]), f = _[0], g = r("useWAWebContactFormattedUsernameOrPhoneByChat")(i, p), h = g.formattedUsernameOrPhone, y = g.isPhoneNumberForceMasked, C = async function() {
			await o("WAWebSendSpamChatAction").sendMessageReport(n, a).then(function(e) {
				o("WAWebModalManager").ModalManager.close();
				var t = o("WAWebPrivateMessageComplianceUtils").getPrivateMessageReportComplianceConfig({
					reportId: e,
					msg: n
				});
				t != null && o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebComplianceReportPopupLoadable").ComplianceReportPopupLoadable, {
					learnMoreUrl: t.learnMoreUrl,
					bannerText: t.bannerText,
					actionText: t.actionText,
					showViewReport: t.showViewReport
				}));
			});
		}, b = async function() {
			if (m || i.contact.isBusiness) {
				var e;
				await o("WAWebSendSpamChatAction").sendMessageReport(n, a).then(function(t) {
					e = t;
				}), o("WAWebModalManager").ModalManager.close();
				var t = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(a);
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBlockBusinessPopup.react"), {
					chat: i,
					blockEntryPoint: t,
					reportId: e,
					withReport: !1
				}));
				return;
			}
			o("WAWebSendSpamChatAction").sendMessageReportBlock(n, a);
		}, v = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			children: r("WAWebFbtCommon")("Learn more")
		}), S = y === !0 ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: h,
			direction: "auto",
			inlineblock: !0
		}) : u.jsx(o("WAWebName.react").Name, { contact: p }), R = function() {
			return m ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", v)]
			) : i.contact.isBusiness ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", v)]
			) : o("WAWebChatGetters").getIsGroup(i) && o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(n) ? s._(
				/*BTDS*/
				"",
				[s._param("name of the group history bundle sender", S), s._param("link to learn more", v)]
			) : o("WAWebChatGetters").getIsGroup(i) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i) && o("WAWebBlocklistUtils").isRBIForGroupsEnabled() ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", v)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", v)]
			);
		};
		return u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
			hasAdditionalAction: !f,
			reportSubText: R(),
			additionalActionLabelText: o("WAWebReportPopupBase.react").getBlockLabelText(m, S),
			additionalActionSubText: o("WAWebReportPopupBase.react").getBlockSubText({
				isBizBot3p: m,
				isBusiness: i.contact.isBusiness,
				isGroup: o("WAWebChatGetters").getIsGroup(i),
				isCommunityAnnouncementGroup: o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i)
			}),
			onSendReport: C,
			onSendReportAndAdditionalAction: b
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e);
		if (o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(e) && t != null) {
			var n = o("WAWebMsgCollection").MsgCollection.get(t);
			if (n) return o("WAWebFrontendMsgGetters").getSenderObj(n);
		}
		return o("WAWebFrontendMsgGetters").getSenderObj(e);
	}
	l.default = c;
}), 226);
