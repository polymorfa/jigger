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
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(47), a = t.displayAuthor, i = t.msg, l;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			o("WAWebFrontendMsgGetters").getSenderObj,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getNewsletterFollowerInviteInfo,
			o("WAWebMsgGetters").getType
		], n[0] = l) : l = n[0];
		var u = o("useWAWebMsgValues").useMsgValues(i.id, l), d = u[0], m = u[1], p = u[2];
		if (p == null) return null;
		var _;
		n[1] !== p.newsletterId ? (_ = function() {
			if (o("WAWebNewsletterGatingUtils").isChannelInviteContactsToFollowReceiverLoggingEnabled()) {
				var e, t = r("WAWebNewsletterMetadataCollection").get(p.newsletterId), n = (e = o("WAWebNewsletterLoggingUtils").getChannelUserTypeFromMembershipType(t)) != null ? e : o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.GUEST, a = new (o("WAWebChannelOpenFromInviteWamEvent")).ChannelOpenFromInviteWamEvent({
					cid: p.newsletterId.user,
					channelEntryPoint: o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.INVITE_CONTACTS_TO_FOLLOW_MESSAGE,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
					channelUserType: n
				});
				a.commit();
			}
			o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
				identifier: p.newsletterId.toString(),
				identifierType: o("WAWebNewsletterApiParse").NewsletterIdentifierType.Id,
				type: "view",
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD
			});
		}, n[1] = p.newsletterId, n[2] = _) : _ = n[2];
		var f = _, g = p.inviteMessage, h = p.newsletterId, y = p.newsletterName, C;
		n[3] !== h ? (C = c.jsx(r("WAWebProfileImage.react"), {
			size: 49,
			wid: h
		}), n[3] = h, n[4] = C) : C = n[4];
		var b = C, v;
		n[5] !== g || n[6] !== i ? (v = g ? c.jsx("div", { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: i.unsafe(),
			spacer: !0,
			trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe())
		}) }) : null, n[5] = g, n[6] = i, n[7] = v) : v = n[7];
		var S = v, R;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), n[8] = R) : R = n[8];
		var L;
		n[9] !== f ? (L = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
			label: R,
			onClick: f,
			testid: "invite-newsletter-follower"
		}] }), n[9] = f, n[10] = L) : L = n[10];
		var E = L, k;
		n[11] !== S ? (k = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.meta, !S && o("WAWebGroupsV4InviteMsg.stylex").styles.metaNoCaption), n[11] = S, n[12] = k) : k = n[12];
		var I;
		n[13] !== i ? (I = c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }), n[13] = i, n[14] = I) : I = n[14];
		var T;
		n[15] !== k || n[16] !== I ? (T = c.jsx("div", babelHelpers.extends({}, k, { children: I })), n[15] = k, n[16] = I, n[17] = T) : T = n[17];
		var D = T, x;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), n[18] = x) : x = n[18];
		var $ = x, P;
		n[19] !== g || n[20] !== i ? (P = g ? $ : c.jsx(r("WAWebSpacerText.react"), {
			msg: i.unsafe(),
			children: $
		}), n[19] = g, n[20] = i, n[21] = P) : P = n[21];
		var N = P, M;
		n[22] !== i ? (M = i.unsafe(), n[22] = i, n[23] = M) : M = n[23];
		var w;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (w = (e || (e = r("stylex")))(o("WAWebGroupsV4InviteMsg.stylex").styles.container), n[24] = w) : w = n[24];
		var A;
		n[25] !== S ? (A = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreview, !S && o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreviewNoMarginBottom), n[25] = S, n[26] = A) : A = n[26];
		var F;
		n[27] !== f || n[28] !== m || n[29] !== y || n[30] !== b || n[31] !== N ? (F = c.jsx(r("WAWebMediaLinkPreview.react"), {
			description: N,
			isInvite: !0,
			isSentByMe: m,
			onClick: f,
			thumbnail: b,
			title: y,
			isLoading: !1
		}), n[27] = f, n[28] = m, n[29] = y, n[30] = b, n[31] = N, n[32] = F) : F = n[32];
		var O;
		n[33] !== A || n[34] !== F ? (O = c.jsx("div", babelHelpers.extends({}, A, { children: F })), n[33] = A, n[34] = F, n[35] = O) : O = n[35];
		var B;
		n[36] !== S || n[37] !== D || n[38] !== d || n[39] !== M || n[40] !== O ? (B = c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
			contact: d,
			msg: M,
			className: w,
			children: [
				O,
				S,
				D
			]
		}), n[36] = S, n[37] = D, n[38] = d, n[39] = M, n[40] = O, n[41] = B) : B = n[41];
		var W;
		return n[42] !== E || n[43] !== a || n[44] !== i || n[45] !== B ? (W = c.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayAuthor: a,
			hideMeta: !0,
			testid: "newsletter-follow-invite",
			children: [B, E]
		}), n[42] = E, n[43] = a, n[44] = i, n[45] = B, n[46] = W) : W = n[46], W;
	}
	l.default = d;
}), 226);
