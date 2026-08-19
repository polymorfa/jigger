__d("WAWebNewsletterAdminInviteMessageComponent.react", [
	"fbt",
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
	"WAWebNewsletterViewInviteAction",
	"WAWebProfileImage.react",
	"WAWebSpacerText.react",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback;
	function m(t) {
		var n, a = t.displayAuthor, i = t.msg, l = o("useWAWebMsgValues").useMsgValues(i.id, [
			(n = o("WAWebMsgGetters")).getId,
			o("WAWebFrontendMsgGetters").getSenderObj,
			n.getIsSentByMe,
			n.getIsNewsletterAdminInviteExpired,
			n.getNewsletterAdminInviteInfo,
			n.getType,
			o("WAWebFrontendMsgGetters").getIsNewsletterInviteAccepted,
			n.getTo
		]), u = l[0], m = l[1], p = l[2], _ = l[3], f = l[4], g = l[5], h = l[6], y = l[7], C = _ || h, b = d(function() {
			o("WAWebNewsletterViewInviteAction").viewNewsletterInviteAction({
				newsletterWid: f == null ? void 0 : f.newsletterId,
				expiration: f == null ? void 0 : f.inviteExpiration,
				invitee: y,
				isSentByMe: p
			});
		}, [
			f,
			y,
			p
		]);
		if (f == null) return null;
		var v = f.inviteMessage, S = f.newsletterId, R = f.newsletterName, L = c.jsx(r("WAWebProfileImage.react"), {
			size: 49,
			wid: S
		}), E = v ? c.jsx("div", { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: i.unsafe(),
			spacer: !0,
			trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe())
		}) }) : null, k = C ? null : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
			label: s._(
				/*BTDS*/
				""
			),
			onClick: b,
			testid: "invite-newsletter-admin"
		}] }), I = !C || !E, T = I ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.meta, !E && o("WAWebGroupsV4InviteMsg.stylex").styles.metaNoCaption, C && !E && o("WAWebGroupsV4InviteMsg.stylex").styles.metaExpiredNoCaption), { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }) })) : null, D = s._(
			/*BTDS*/
			""
		), x = v ? D : c.jsx(r("WAWebSpacerText.react"), {
			msg: i.unsafe(),
			children: D
		}), $;
		if (C) {
			var P = E ? s._(
				/*BTDS*/
				""
			) : c.jsx(r("WAWebSpacerText.react"), {
				msg: i.unsafe(),
				children: s._(
					/*BTDS*/
					""
				)
			});
			$ = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.status, !E && o("WAWebGroupsV4InviteMsg.stylex").styles.statusExpiredNoCaption), { children: P }));
		}
		return c.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayAuthor: a,
			hideMeta: I,
			testid: "newsletter-admin-invite",
			children: [c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
				contact: m,
				msg: i.unsafe(),
				className: (e || (e = r("stylex")))(o("WAWebGroupsV4InviteMsg.stylex").styles.container),
				children: [
					c.jsx("div", babelHelpers.extends({}, e.props(o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreview, (C || !E) && o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreviewNoMarginBottom), { children: c.jsx(r("WAWebMediaLinkPreview.react"), {
						description: x,
						isInvite: !0,
						isSentByMe: p,
						onClick: C ? void 0 : b,
						thumbnail: L,
						title: R,
						theme: C ? "extended" : void 0,
						isLoading: !1
					}) })),
					$,
					E,
					T
				]
			}), k]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
