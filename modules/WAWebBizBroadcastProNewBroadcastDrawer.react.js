__d("WAWebBizBroadcastProNewBroadcastDrawer.react", [
	"CometRelay",
	"WAWebBizBroadcastPreviewSection.react",
	"WAWebBizBroadcastProBudgetSection.react",
	"WAWebBizBroadcastProNewBroadcastAudienceSection.react",
	"WAWebBizBroadcastProNewBroadcastDrawer_query.graphql",
	"WAWebBizBroadcastProNewBroadcastMessageSection.react",
	"WAWebBizBroadcastProNewBroadcastSendActions.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizTwoColumnLayout.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useState, p = {
		body: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		footer: {
			marginInlineStart: "xvc5jky",
			marginInlineEnd: "x11t971q",
			marginLeft: null,
			marginRight: null,
			maxWidth: "x4t6xuk",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			backgroundColor: "x16w0wmm",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			width: "xh8yej3",
			$$css: !0
		}
	}, _ = e !== void 0 ? e : e = n("WAWebBizBroadcastProNewBroadcastDrawer_query.graphql");
	function f(e) {
		var t, n, a, i, l, s, c, d, f, g = o("react-compiler-runtime").c(46), h = e.entryPoint, y = e.onBack, C = e.onOpenEditAudience, b = e.onOpenUpsertAudience, v = e.queryRef, S = e.ref, R = e.selectedAudiences, L = e.setSelectedAudiences, E = e.sourceBroadcastMessageData, k = o("CometRelay").useFragment(_, v), I = k == null || (t = k.viewer) == null || (t = t.backing_waba) == null ? void 0 : t.id, T = (n = k == null || (a = k.xfb_whatsapp_bb_pro) == null ? void 0 : a.ad_account) != null ? n : null, D = (i = k == null || (l = k.xfb_whatsapp_bb_pro) == null || (l = l.ad_account) == null ? void 0 : l.currency) != null ? i : "USD", x = (k == null || (s = k.xfb_whatsapp_bb_pro) == null || (s = s.ad_account) == null || (s = s.billing_info) == null || (s = s.required_action) == null || (s = s.action) == null ? void 0 : s.wizard_name) != null, $ = (k == null || (c = k.viewer) == null || (c = c.backing_waba) == null || (c = c.wa_bb_pro_custom_audiences) == null ? void 0 : c.is_empty) !== !0, P = m((d = E == null ? void 0 : E.message) != null ? d : ""), N = P[0], M = P[1], w = m(E == null ? void 0 : E.attachmentData), A = w[0], F = w[1], O = m(E == null ? void 0 : E.ctaButtonData), B = O[0], W = O[1], q = m(null), U = q[0], V = q[1], H = m(null), G = H[0], z = H[1], j;
		g[0] === Symbol.for("react.memo_cache_sentinel") ? (j = function(t) {
			var e = parseFloat(t);
			V(isNaN(e) ? null : e);
		}, g[0] = j) : j = g[0];
		var K = j, Q;
		g[1] === Symbol.for("react.memo_cache_sentinel") ? (Q = function(t) {
			var e = parseFloat(t);
			z(isNaN(e) ? null : e);
		}, g[1] = Q) : Q = g[1];
		var X = Q, Y = (f = E == null ? void 0 : E.isDuplicateBroadcast) != null ? f : !1, J;
		g[2] !== h || g[3] !== $ || g[4] !== C || g[5] !== b || g[6] !== R || g[7] !== L || g[8] !== Y ? (J = u.jsx(r("WAWebBizBroadcastProNewBroadcastAudienceSection.react"), {
			entryPoint: h,
			isDuplicate: Y,
			hasCustomAudiences: $,
			selectedAudiences: R,
			setSelectedAudiences: L,
			onOpenUpsertAudience: b,
			onOpenEditAudience: C
		}), g[2] = h, g[3] = $, g[4] = C, g[5] = b, g[6] = R, g[7] = L, g[8] = Y, g[9] = J) : J = g[9];
		var Z;
		g[10] !== A || g[11] !== B || g[12] !== h || g[13] !== N ? (Z = u.jsx(r("WAWebBizBroadcastProNewBroadcastMessageSection.react"), {
			attachmentData: A,
			buttonData: B,
			entryPoint: h,
			message: N,
			onAttachmentDataChange: F,
			onButtonDataChange: W,
			onMessageChange: M
		}), g[10] = A, g[11] = B, g[12] = h, g[13] = N, g[14] = Z) : Z = g[14];
		var ee;
		g[15] !== T || g[16] !== I ? (ee = u.jsx(r("WAWebBizBroadcastProBudgetSection.react"), {
			adAccountRef: T,
			onCampaignBudgetChange: X,
			onMaxBidChange: K,
			wabaId: I
		}), g[15] = T, g[16] = I, g[17] = ee) : ee = g[17];
		var te;
		g[18] !== J || g[19] !== Z || g[20] !== ee ? (te = u.jsxs(u.Fragment, { children: [
			J,
			Z,
			ee
		] }), g[18] = J, g[19] = Z, g[20] = ee, g[21] = te) : te = g[21];
		var ne = te, re;
		g[22] !== A || g[23] !== B || g[24] !== N ? (re = u.jsx(r("WAWebBizBroadcastPreviewSection.react"), {
			attachmentData: A,
			buttonData: B,
			message: N
		}), g[22] = A, g[23] = B, g[24] = N, g[25] = re) : re = g[25];
		var oe = re, ae;
		g[26] === Symbol.for("react.memo_cache_sentinel") ? (ae = o("WAWebBizBroadcastsCreationStrings").getNewBroadcastDrawerTitle(), g[26] = ae) : ae = g[26];
		var ie;
		g[27] !== y ? (ie = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: ae,
			onBack: y,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), g[27] = y, g[28] = ie) : ie = g[28];
		var le;
		g[29] !== ne || g[30] !== oe ? (le = u.jsx(r("WAWebDrawerBody.react"), {
			isRefresh: !0,
			xstyle: p.body,
			children: u.jsx(r("WAWebBizTwoColumnLayout.react"), {
				primaryContent: ne,
				secondaryContent: oe
			})
		}), g[29] = ne, g[30] = oe, g[31] = le) : le = g[31];
		var se;
		g[32] !== A || g[33] !== B || g[34] !== D || g[35] !== x || g[36] !== G || g[37] !== U || g[38] !== N || g[39] !== R ? (se = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			columnGap: 16,
			xstyle: p.footer,
			testid: "biz-broadcasts-pro-new-broadcast-drawer-footer-inner",
			children: u.jsx(r("WAWebBizBroadcastProNewBroadcastSendActions.react"), {
				attachmentData: A,
				buttonData: B,
				currency: D,
				hasRequiredAction: x,
				lifetimeBudget: G,
				maxBid: U,
				message: N,
				selectedAudiences: R
			})
		}), g[32] = A, g[33] = B, g[34] = D, g[35] = x, g[36] = G, g[37] = U, g[38] = N, g[39] = R, g[40] = se) : se = g[40];
		var ue;
		return g[41] !== S || g[42] !== ie || g[43] !== le || g[44] !== se ? (ue = u.jsxs(r("WAWebDrawer.react"), {
			ref: S,
			children: [
				ie,
				le,
				se
			]
		}), g[41] = S, g[42] = ie, g[43] = le, g[44] = se, g[45] = ue) : ue = g[45], ue;
	}
	l.default = f;
}), 98);
