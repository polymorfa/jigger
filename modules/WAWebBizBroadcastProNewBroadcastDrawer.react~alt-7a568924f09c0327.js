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
	"react"
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
		var t, n, a, i, l, s, c, f, g, h = e.entryPoint, y = e.onBack, C = e.onOpenEditAudience, b = e.onOpenUpsertAudience, v = e.queryRef, S = e.ref, R = e.selectedAudiences, L = e.setSelectedAudiences, E = e.sourceBroadcastMessageData, k = o("CometRelay").useFragment(_, v), I = k == null || (t = k.viewer) == null || (t = t.backing_waba) == null ? void 0 : t.id, T = (n = k == null || (a = k.xfb_whatsapp_bb_pro) == null ? void 0 : a.ad_account) != null ? n : null, D = (i = k == null || (l = k.xfb_whatsapp_bb_pro) == null || (l = l.ad_account) == null ? void 0 : l.currency) != null ? i : "USD", x = (k == null || (s = k.xfb_whatsapp_bb_pro) == null || (s = s.ad_account) == null || (s = s.billing_info) == null || (s = s.required_action) == null || (s = s.action) == null ? void 0 : s.wizard_name) != null, $ = (k == null || (c = k.viewer) == null || (c = c.backing_waba) == null || (c = c.wa_bb_pro_custom_audiences) == null ? void 0 : c.is_empty) !== !0, P = m((f = E == null ? void 0 : E.message) != null ? f : ""), N = P[0], M = P[1], w = m(E == null ? void 0 : E.attachmentData), A = w[0], F = w[1], O = m(E == null ? void 0 : E.ctaButtonData), B = O[0], W = O[1], q = m(null), U = q[0], V = q[1], H = m(null), G = H[0], z = H[1], j = d(function(e) {
			var t = parseFloat(e);
			V(isNaN(t) ? null : t);
		}, []), K = d(function(e) {
			var t = parseFloat(e);
			z(isNaN(t) ? null : t);
		}, []), Q = u.jsxs(u.Fragment, { children: [
			u.jsx(r("WAWebBizBroadcastProNewBroadcastAudienceSection.react"), {
				entryPoint: h,
				isDuplicate: (g = E == null ? void 0 : E.isDuplicateBroadcast) != null ? g : !1,
				hasCustomAudiences: $,
				selectedAudiences: R,
				setSelectedAudiences: L,
				onOpenUpsertAudience: b,
				onOpenEditAudience: C
			}),
			u.jsx(r("WAWebBizBroadcastProNewBroadcastMessageSection.react"), {
				attachmentData: A,
				buttonData: B,
				entryPoint: h,
				message: N,
				onAttachmentDataChange: F,
				onButtonDataChange: W,
				onMessageChange: M
			}),
			u.jsx(r("WAWebBizBroadcastProBudgetSection.react"), {
				adAccountRef: T,
				onCampaignBudgetChange: K,
				onMaxBidChange: j,
				wabaId: I
			})
		] }), X = u.jsx(r("WAWebBizBroadcastPreviewSection.react"), {
			attachmentData: A,
			buttonData: B,
			message: N
		});
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: S,
			children: [
				u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: o("WAWebBizBroadcastsCreationStrings").getNewBroadcastDrawerTitle(),
					onBack: y,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					focusBackOrCancel: !0
				}),
				u.jsx(r("WAWebDrawerBody.react"), {
					isRefresh: !0,
					xstyle: p.body,
					children: u.jsx(r("WAWebBizTwoColumnLayout.react"), {
						primaryContent: Q,
						secondaryContent: X
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
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
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
