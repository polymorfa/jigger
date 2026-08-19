__d("WAWebReportContactPopup.react", [
	"fbt",
	"WAWebBlockBusinessPopup.react",
	"WAWebBlocklistUtils",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebReportPopupBase.react",
	"WAWebSendSpamChatAction",
	"WAWebUseBusinessProfile.react",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.chat, a = e.spamFlow, i = (t = o("WAWebUseBusinessProfile.react").useBusinessProfile(n.contact.id, ["isBizBot3p"])) != null ? t : {}, l = i.isBizBot3p, c = l === void 0 ? !1 : l, d = o("useWAWebContactValues").useContactValues(n.contact.id, [o("WAWebFrontendContactGetters").getIsContactBlocked]), m = d[0], p = async function() {
			await o("WAWebSendSpamChatAction").sendReport({
				chat: n,
				spamFlow: a
			}), o("WAWebModalManager").ModalManager.close();
		}, _ = async function() {
			if (c || n.contact.isBusiness) {
				await o("WAWebSendSpamChatAction").sendReport({
					chat: n,
					spamFlow: a
				}), o("WAWebModalManager").ModalManager.close();
				var e = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(a);
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBlockBusinessPopup.react"), {
					chat: n,
					blockEntryPoint: e,
					withReport: !1
				}));
				return;
			}
			o("WAWebSendSpamChatAction").sendReportBlock({
				chat: n,
				spamFlow: a
			}), o("WAWebModalManager").ModalManager.close();
		}, f = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			children: r("WAWebFbtCommon")("Learn more")
		}), g = u.jsx(o("WAWebName.react").Name, { contact: n.contact }), h = function() {
			return c ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", f)]
			) : n.contact.isBusiness ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", f)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", f)]
			);
		};
		return u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
			hasAdditionalAction: !m,
			reportSubText: h(),
			additionalActionLabelText: o("WAWebReportPopupBase.react").getBlockLabelText(c, g),
			additionalActionSubText: o("WAWebReportPopupBase.react").getBlockSubText({
				isBizBot3p: c,
				isBusiness: n.contact.isBusiness,
				isGroup: o("WAWebChatGetters").getIsGroup(n),
				isCommunityAnnouncementGroup: o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n)
			}),
			onSendReport: p,
			onSendReportAndAdditionalAction: _
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
