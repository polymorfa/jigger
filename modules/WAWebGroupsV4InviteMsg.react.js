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
	"react-compiler-runtime",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(58), a = t.displayAuthor, i = t.msg, l;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var u;
			l = [
				(u = o("WAWebMsgGetters")).getId,
				u.getInviteCode,
				u.getInviteCodeExp,
				u.getInviteGrp,
				u.getInviteGrpName,
				u.getInviteGrpJpegThum,
				o("WAWebFrontendMsgGetters").getSenderObj,
				u.getComment,
				u.getIsSentByMe,
				u.getIsGroupMsg,
				u.getIsPSA,
				u.getIsGroupsV4InviteExpired,
				u.getType
			], n[0] = l;
		} else l = n[0];
		var d = o("useWAWebMsgValues").useMsgValues(i.id, l), m = d[4], p = d[5], _ = d[6], f = d[7], g = d[8], h = d[11], y;
		n[1] !== i ? (y = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebGroupsV4InviteModal.react"), {
				msg: i,
				source: "invite_link"
			}));
		}, n[1] = i, n[2] = y) : y = n[2];
		var C = y, b = h, v = m, S;
		n[3] !== p ? (S = c.jsx(r("WAWebProfileImage.react"), {
			size: 49,
			thumb: p
		}), n[3] = p, n[4] = S) : S = n[4];
		var R = S, L;
		n[5] !== f || n[6] !== i ? (L = f ? c.jsx("div", { children: c.jsx(r("WAWebMessageCaption.react"), {
			msg: i.unsafe(),
			spacer: !0,
			trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe())
		}) }) : null, n[5] = f, n[6] = i, n[7] = L) : L = n[7];
		var E = L, k;
		n[8] !== f || n[9] !== C || n[10] !== b || n[11] !== g ? (k = b ? null : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			items: [{
				label: g ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				onClick: C,
				testid: "invite-v4-open-invite"
			}],
			theme: f ? void 0 : o("WAWebMessageBubbleActions.react").BubbleActionsTheme.NO_DIVIDER
		}), n[8] = f, n[9] = C, n[10] = b, n[11] = g, n[12] = k) : k = n[12];
		var I = k, T = !b || !E, D;
		n[13] !== E || n[14] !== T || n[15] !== b || n[16] !== i ? (D = T ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.meta, !E && o("WAWebGroupsV4InviteMsg.stylex").styles.metaNoCaption, b && !E && o("WAWebGroupsV4InviteMsg.stylex").styles.metaExpiredNoCaption), { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }) })) : null, n[13] = E, n[14] = T, n[15] = b, n[16] = i, n[17] = D) : D = n[17];
		var x = D, $;
		n[18] !== f || n[19] !== i ? ($ = f ? s._(
			/*BTDS*/
			""
		) : c.jsx(r("WAWebSpacerText.react"), {
			msg: i.unsafe(),
			children: s._(
				/*BTDS*/
				""
			)
		}), n[18] = f, n[19] = i, n[20] = $) : $ = n[20];
		var P = $, N;
		if (b) {
			var M;
			n[21] !== E || n[22] !== i ? (M = E ? s._(
				/*BTDS*/
				""
			) : c.jsx(r("WAWebSpacerText.react"), {
				msg: i.unsafe(),
				children: s._(
					/*BTDS*/
					""
				)
			}), n[21] = E, n[22] = i, n[23] = M) : M = n[23];
			var w = M, A;
			n[24] !== E ? (A = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.status, !E && o("WAWebGroupsV4InviteMsg.stylex").styles.statusExpiredNoCaption), n[24] = E, n[25] = A) : A = n[25];
			var F;
			n[26] !== w || n[27] !== A ? (F = c.jsx("div", babelHelpers.extends({}, A, { children: w })), n[26] = w, n[27] = A, n[28] = F) : F = n[28], N = F;
		}
		var O;
		n[29] !== i ? (O = i.unsafe(), n[29] = i, n[30] = O) : O = n[30];
		var B;
		n[31] === Symbol.for("react.memo_cache_sentinel") ? (B = (e || (e = r("stylex")))(o("WAWebGroupsV4InviteMsg.stylex").styles.container), n[31] = B) : B = n[31];
		var W;
		n[32] !== E || n[33] !== b ? (W = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreview, (b || !E) && o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreviewNoMarginBottom), n[32] = E, n[33] = b, n[34] = W) : W = n[34];
		var q = b ? void 0 : C, U = b ? "extended" : void 0, V;
		n[35] !== R || n[36] !== v || n[37] !== g || n[38] !== P || n[39] !== q || n[40] !== U ? (V = c.jsx(r("WAWebMediaLinkPreview.react"), {
			description: P,
			isInvite: !0,
			isSentByMe: g,
			onClick: q,
			thumbnail: R,
			title: v,
			theme: U,
			isLoading: !1
		}), n[35] = R, n[36] = v, n[37] = g, n[38] = P, n[39] = q, n[40] = U, n[41] = V) : V = n[41];
		var H;
		n[42] !== W || n[43] !== V ? (H = c.jsx("div", babelHelpers.extends({}, W, { children: V })), n[42] = W, n[43] = V, n[44] = H) : H = n[44];
		var G;
		n[45] !== E || n[46] !== x || n[47] !== _ || n[48] !== N || n[49] !== H || n[50] !== O ? (G = c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
			contact: _,
			msg: O,
			className: B,
			children: [
				H,
				N,
				E,
				x
			]
		}), n[45] = E, n[46] = x, n[47] = _, n[48] = N, n[49] = H, n[50] = O, n[51] = G) : G = n[51];
		var z;
		return n[52] !== I || n[53] !== a || n[54] !== T || n[55] !== i || n[56] !== G ? (z = c.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayAuthor: a,
			hideMeta: T,
			children: [G, I]
		}), n[52] = I, n[53] = a, n[54] = T, n[55] = i, n[56] = G, n[57] = z) : z = n[57], z;
	}
	l.default = d;
}), 226);
