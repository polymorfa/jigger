__d("WAWebGroupsV4InviteMsg.react", [
	"fbt",
	"WAWebFrontendMsgGetters",
	"WAWebGroupsV4InviteModal.react",
	"WAWebGroupsV4InviteMsg.stylex",
	"WAWebMediaLinkPreview.react",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageCaption.react",
	"WAWebMessageMeta.react",
	"WAWebMessageTextBubble.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgModelPropUtils",
	"WAWebProfileImage.react",
	"WAWebSpacerText.react",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n, a = t.displayAuthor, i = t.msg, l = o("useWAWebMsgValues").useMsgValues(i.id, [
			(n = o("WAWebMsgGetters")).getId,
			n.getInviteCode,
			n.getInviteCodeExp,
			n.getInviteGrp,
			n.getInviteGrpName,
			n.getInviteGrpJpegThum,
			o("WAWebFrontendMsgGetters").getSenderObj,
			n.getComment,
			n.getIsSentByMe,
			n.getIsGroupMsg,
			n.getIsPSA,
			n.getIsGroupsV4InviteExpired,
			n.getType
		]), u = l[0], d = l[1], m = l[2], p = l[3], _ = l[4], f = l[5], g = l[6], h = l[7], y = l[8], C = l[9], b = l[10], v = l[11], S = l[12], R = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebGroupsV4InviteModal.react"), {
				msg: i,
				source: "invite_link"
			}));
		}, L = v, E = _, k = c.jsx(r("WAWebProfileImage.react"), {
			size: 49,
			thumb: f
		}), I = h ? c.jsx("div", { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: i.unsafe(),
			spacer: !0,
			trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe())
		}) }) : null, T = L ? null : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			items: [{
				label: y ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				onClick: R,
				testid: "invite-v4-open-invite"
			}],
			theme: h ? void 0 : o("WAWebMessageBubbleActions.react").BubbleActionsTheme.NO_DIVIDER
		}), D = !L || !I, x = D ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.meta, !I && o("WAWebGroupsV4InviteMsg.stylex").styles.metaNoCaption, L && !I && o("WAWebGroupsV4InviteMsg.stylex").styles.metaExpiredNoCaption), { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }) })) : null, $ = h ? s._(
			/*BTDS*/
			""
		) : c.jsx(r("WAWebSpacerText.react"), {
			msg: i.unsafe(),
			children: s._(
				/*BTDS*/
				""
			)
		}), P;
		if (L) {
			var N = I ? s._(
				/*BTDS*/
				""
			) : c.jsx(r("WAWebSpacerText.react"), {
				msg: i.unsafe(),
				children: s._(
					/*BTDS*/
					""
				)
			});
			P = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.status, !I && o("WAWebGroupsV4InviteMsg.stylex").styles.statusExpiredNoCaption), { children: N }));
		}
		return c.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayAuthor: a,
			hideMeta: D,
			children: [c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
				contact: g,
				msg: i.unsafe(),
				className: (e || (e = r("stylex")))(o("WAWebGroupsV4InviteMsg.stylex").styles.container),
				children: [
					c.jsx("div", babelHelpers.extends({}, e.props(o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreview, (L || !I) && o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreviewNoMarginBottom), { children: c.jsx(r("WAWebMediaLinkPreview.react"), {
						description: $,
						isInvite: !0,
						isSentByMe: y,
						onClick: L ? void 0 : R,
						thumbnail: k,
						title: E,
						theme: L ? "extended" : void 0,
						isLoading: !1
					}) })),
					P,
					I,
					x
				]
			}), T]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
