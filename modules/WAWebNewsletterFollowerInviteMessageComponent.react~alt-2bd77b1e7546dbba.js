__d("WAWebNewsletterFollowerInviteMessageComponent.react", [
	"fbt",
	"WAWebChannelOpenFromInviteWamEvent",
	"WAWebChatEntryPoint",
	"WAWebFrontendMsgGetters",
	"WAWebGroupsV4InviteMsg.stylex",
	"WAWebMediaLinkPreview.react",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageCaption.react",
	"WAWebMessageMeta.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebMsgModelPropUtils",
	"WAWebNewsletterApiParse",
	"WAWebNewsletterExecApiCmd",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterLoggingUtils",
	"WAWebNewsletterMetadataCollection",
	"WAWebProfileImage.react",
	"WAWebSpacerText.react",
	"WAWebWamEnumChannelEntryPoint",
	"WAWebWamEnumChannelUserType",
	"WAWebWamEnumTsSurface",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = t.displayAuthor, a = t.msg, i = o("useWAWebMsgValues").useMsgValues(a.id, [
			o("WAWebFrontendMsgGetters").getSenderObj,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getNewsletterFollowerInviteInfo,
			o("WAWebMsgGetters").getType
		]), l = i[0], u = i[1], d = i[2];
		if (d == null) return null;
		var m = function() {
			if (o("WAWebNewsletterGatingUtils").isChannelInviteContactsToFollowReceiverLoggingEnabled()) {
				var e, t = r("WAWebNewsletterMetadataCollection").get(d.newsletterId), n = (e = o("WAWebNewsletterLoggingUtils").getChannelUserTypeFromMembershipType(t)) != null ? e : o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.GUEST, a = new (o("WAWebChannelOpenFromInviteWamEvent")).ChannelOpenFromInviteWamEvent({
					cid: d.newsletterId.user,
					channelEntryPoint: o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.INVITE_CONTACTS_TO_FOLLOW_MESSAGE,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
					channelUserType: n
				});
				a.commit();
			}
			o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
				identifier: d.newsletterId.toString(),
				identifierType: o("WAWebNewsletterApiParse").NewsletterIdentifierType.Id,
				type: "view",
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD
			});
		}, p = d.inviteMessage, _ = d.newsletterId, f = d.newsletterName, g = c.jsx(r("WAWebProfileImage.react"), {
			size: 49,
			wid: _
		}), h = p ? c.jsx("div", { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: a.unsafe(),
			spacer: !0,
			trusted: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe())
		}) }) : null, y = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
			label: s._(
				/*BTDS*/
				""
			),
			onClick: m,
			testid: "invite-newsletter-follower"
		}] }), C = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.meta, !h && o("WAWebGroupsV4InviteMsg.stylex").styles.metaNoCaption), { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: a }) })), b = s._(
			/*BTDS*/
			""
		), v = p ? b : c.jsx(r("WAWebSpacerText.react"), {
			msg: a.unsafe(),
			children: b
		});
		return c.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: a,
			displayAuthor: n,
			hideMeta: !0,
			testid: "newsletter-follow-invite",
			children: [c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
				contact: l,
				msg: a.unsafe(),
				className: e(o("WAWebGroupsV4InviteMsg.stylex").styles.container),
				children: [
					c.jsx("div", babelHelpers.extends({}, e.props(o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreview, !h && o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreviewNoMarginBottom), { children: c.jsx(r("WAWebMediaLinkPreview.react"), {
						description: v,
						isInvite: !0,
						isSentByMe: u,
						onClick: m,
						thumbnail: g,
						title: f,
						isLoading: !1
					}) })),
					h,
					C
				]
			}), y]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
