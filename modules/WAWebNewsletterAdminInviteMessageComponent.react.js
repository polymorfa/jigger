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
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback;
	function m(t) {
		var n = o("react-compiler-runtime").c(60), a = t.displayAuthor, i = t.msg, l;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var u;
			l = [
				(u = o("WAWebMsgGetters")).getId,
				o("WAWebFrontendMsgGetters").getSenderObj,
				u.getIsSentByMe,
				u.getIsNewsletterAdminInviteExpired,
				u.getNewsletterAdminInviteInfo,
				u.getType,
				o("WAWebFrontendMsgGetters").getIsNewsletterInviteAccepted,
				u.getTo
			], n[0] = l;
		} else l = n[0];
		var d = o("useWAWebMsgValues").useMsgValues(i.id, l), m = d[1], p = d[2], _ = d[3], f = d[4], g = d[6], h = d[7], y = _ || g, C;
		n[1] !== h || n[2] !== p || n[3] !== (f == null ? void 0 : f.inviteExpiration) || n[4] !== (f == null ? void 0 : f.newsletterId) ? (C = function() {
			o("WAWebNewsletterViewInviteAction").viewNewsletterInviteAction({
				newsletterWid: f == null ? void 0 : f.newsletterId,
				expiration: f == null ? void 0 : f.inviteExpiration,
				invitee: h,
				isSentByMe: p
			});
		}, n[1] = h, n[2] = p, n[3] = f == null ? void 0 : f.inviteExpiration, n[4] = f == null ? void 0 : f.newsletterId, n[5] = C) : C = n[5];
		var b = C;
		if (f == null) return null;
		var v = f.inviteMessage, S = f.newsletterId, R = f.newsletterName, L;
		n[6] !== S ? (L = c.jsx(r("WAWebProfileImage.react"), {
			size: 49,
			wid: S
		}), n[6] = S, n[7] = L) : L = n[7];
		var E = L, k;
		n[8] !== v || n[9] !== i ? (k = v ? c.jsx("div", { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: i.unsafe(),
			spacer: !0,
			trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe())
		}) }) : null, n[8] = v, n[9] = i, n[10] = k) : k = n[10];
		var I = k, T;
		n[11] !== b || n[12] !== y ? (T = y ? null : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
			label: s._(
				/*BTDS*/
				""
			),
			onClick: b,
			testid: "invite-newsletter-admin"
		}] }), n[11] = b, n[12] = y, n[13] = T) : T = n[13];
		var D = T, x = !y || !I, $;
		n[14] !== I || n[15] !== x || n[16] !== y || n[17] !== i ? ($ = x ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.meta, !I && o("WAWebGroupsV4InviteMsg.stylex").styles.metaNoCaption, y && !I && o("WAWebGroupsV4InviteMsg.stylex").styles.metaExpiredNoCaption), { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }) })) : null, n[14] = I, n[15] = x, n[16] = y, n[17] = i, n[18] = $) : $ = n[18];
		var P = $, N;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), n[19] = N) : N = n[19];
		var M = N, w;
		n[20] !== v || n[21] !== i ? (w = v ? M : c.jsx(r("WAWebSpacerText.react"), {
			msg: i.unsafe(),
			children: M
		}), n[20] = v, n[21] = i, n[22] = w) : w = n[22];
		var A = w, F;
		if (y) {
			var O;
			n[23] !== I || n[24] !== i ? (O = I ? s._(
				/*BTDS*/
				""
			) : c.jsx(r("WAWebSpacerText.react"), {
				msg: i.unsafe(),
				children: s._(
					/*BTDS*/
					""
				)
			}), n[23] = I, n[24] = i, n[25] = O) : O = n[25];
			var B = O, W;
			n[26] !== I ? (W = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.status, !I && o("WAWebGroupsV4InviteMsg.stylex").styles.statusExpiredNoCaption), n[26] = I, n[27] = W) : W = n[27];
			var q;
			n[28] !== B || n[29] !== W ? (q = c.jsx("div", babelHelpers.extends({}, W, { children: B })), n[28] = B, n[29] = W, n[30] = q) : q = n[30], F = q;
		}
		var U;
		n[31] !== i ? (U = i.unsafe(), n[31] = i, n[32] = U) : U = n[32];
		var V;
		n[33] === Symbol.for("react.memo_cache_sentinel") ? (V = (e || (e = r("stylex")))(o("WAWebGroupsV4InviteMsg.stylex").styles.container), n[33] = V) : V = n[33];
		var H;
		n[34] !== I || n[35] !== y ? (H = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreview, (y || !I) && o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreviewNoMarginBottom), n[34] = I, n[35] = y, n[36] = H) : H = n[36];
		var G = y ? void 0 : b, z = y ? "extended" : void 0, j;
		n[37] !== p || n[38] !== R || n[39] !== E || n[40] !== A || n[41] !== G || n[42] !== z ? (j = c.jsx(r("WAWebMediaLinkPreview.react"), {
			description: A,
			isInvite: !0,
			isSentByMe: p,
			onClick: G,
			thumbnail: E,
			title: R,
			theme: z,
			isLoading: !1
		}), n[37] = p, n[38] = R, n[39] = E, n[40] = A, n[41] = G, n[42] = z, n[43] = j) : j = n[43];
		var K;
		n[44] !== H || n[45] !== j ? (K = c.jsx("div", babelHelpers.extends({}, H, { children: j })), n[44] = H, n[45] = j, n[46] = K) : K = n[46];
		var Q;
		n[47] !== I || n[48] !== P || n[49] !== m || n[50] !== F || n[51] !== K || n[52] !== U ? (Q = c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
			contact: m,
			msg: U,
			className: V,
			children: [
				K,
				F,
				I,
				P
			]
		}), n[47] = I, n[48] = P, n[49] = m, n[50] = F, n[51] = K, n[52] = U, n[53] = Q) : Q = n[53];
		var X;
		return n[54] !== D || n[55] !== a || n[56] !== x || n[57] !== i || n[58] !== Q ? (X = c.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayAuthor: a,
			hideMeta: x,
			testid: "newsletter-admin-invite",
			children: [Q, D]
		}), n[54] = D, n[55] = a, n[56] = x, n[57] = i, n[58] = Q, n[59] = X) : X = n[59], X;
	}
	l.default = m;
}), 226);
