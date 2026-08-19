__d("WAWebConversationPanelBanner.react", [
	"$InternalEnum",
	"WAWebCagEventsAwarenessBanner.react",
	"WAWebChangeNumberNotificationBanner.react",
	"WAWebChatGetters",
	"WAWebConversationPanelStyleUtils",
	"WAWebGroupDescriptionBanner.react",
	"WAWebMembershipApprovalRequestsBanner.react",
	"WAWebMetaAICTABanner.react",
	"WAWebNewsletterAILabelBanner.react",
	"WAWebNewsletterChannelAlertsBanner.react",
	"WAWebNewsletterNotificationSettingsBanner.react",
	"WAWebNewsletterPinnedMessagesBanner.react",
	"WAWebPinnedMessagesBanner.react",
	"WAWebReportToAdminNewReportBanner.react",
	"WAWebSimilarNewslettersUnitsLoadable.react",
	"WAWebSubgroupSuggestionsBanner.react",
	"WAWebVelocityTransitionGroup",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebCagEventsAwarenessBanner.react",
	"useWAWebConversationPanelGroupDescription",
	"useWAWebNewsletterNotificationSettingsBanner",
	"useWAWebSimilarNewslettersConversationBanner"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		topBorder: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		banner: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		absoluteBanner: {
			position: "x10l6tqk",
			top: "x1imwcls",
			insetInlineStart: "x1o0tod",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			borderInlineStartColor: "x1vb5itz",
			borderInlineStartStyle: "x1t7ytsu",
			borderInlineStartWidth: "xpilrb4",
			$$css: !0
		},
		material: {
			borderBottomWidth: "x1qhh985",
			$$css: !0
		}
	}, d = n("$InternalEnum")({
		CagEventsAwareness: 1,
		MembershipApprovalRequests: 2,
		ReportToAdminNewReport: 3,
		SubgroupSuggestions: 4,
		GroupDescription: 5,
		PinnedMessages: 6,
		NewsletterChannelAlerts: 7,
		NewsletterAILabelNux: 8,
		NewsletterPinnedMessages: 9,
		MetaAICTABanner: 10,
		NewsletterNotificationSettings: 11
	});
	function m(t) {
		var n = o("react-compiler-runtime").c(37), a = t.chat, i = t.groupMetadata, l = r("useWAWebConversationPanelGroupDescription")(a), s = l[0], m = l[1], f = o("WAWebMembershipApprovalRequestsBanner.react").useMembershipApprovalRequestsBanner(a), g = f[0], h = f[1], y = o("WAWebReportToAdminNewReportBanner.react").useReportToAdminNewReportBanner(a), C = y[0], b = y[1], v = o("WAWebPinnedMessagesBanner.react").useWAWebPinnedMessagesBanner(a), S = o("WAWebNewsletterPinnedMessagesBanner.react").useWAWebNewsletterPinnedMessagesBanner(a), R = o("WAWebNewsletterChannelAlertsBanner.react").useNewsletterChannelAlertsBanner(a), L = R[0], E = R[1], k = o("WAWebNewsletterAILabelBanner.react").useNewsletterAILabelBanner(a), I = k[0], T = k[1], D = o("WAWebSubgroupSuggestionsBanner.react").useSubgroupSuggestionsBanner(a), x = D[0], $ = D[1], P = D[2], N = r("useWAWebCagEventsAwarenessBanner.react")(a), M = N[0], w = N[1], A = o("WAWebMetaAICTABanner.react").useMetaAICTABanner(a), F = o("WAWebChangeNumberNotificationBanner.react").useChangeNumberNotificationBanner(a), O = o("useWAWebSimilarNewslettersConversationBanner").useSimilarNewslettersConversationBanner(a), B = o("useWAWebNewsletterNotificationSettingsBanner").useNewsletterNotificationSettingsBanner(a), W = B[0], q = B[1], U;
		n[0] !== w ? (U = u.jsx(r("WAWebCagEventsAwarenessBanner.react"), { onClose: w }), n[0] = w, n[1] = U) : U = n[1];
		var V;
		if (n[2] !== a || n[3] !== m || n[4] !== h || n[5] !== E || n[6] !== b || n[7] !== $ || n[8] !== T || n[9] !== q || n[10] !== i || n[11] !== M || n[12] !== s || n[13] !== g || n[14] !== A || n[15] !== I || n[16] !== L || n[17] !== W || n[18] !== S || n[19] !== v || n[20] !== C || n[21] !== x || n[22] !== P || n[23] !== U) {
			var H, G = [
				{
					condition: M,
					component: U,
					priority: d.CagEventsAwareness
				},
				{
					condition: g,
					component: u.jsx(o("WAWebMembershipApprovalRequestsBanner.react").MembershipApprovalRequestsBanner, {
						onClose: h,
						chat: a
					}),
					priority: d.MembershipApprovalRequests
				},
				{
					condition: C,
					component: u.jsx(o("WAWebReportToAdminNewReportBanner.react").ReportToAdminNewReportBanner, {
						onClose: b,
						chat: a
					}),
					priority: d.ReportToAdminNewReport
				},
				{
					condition: x,
					component: u.jsx(o("WAWebSubgroupSuggestionsBanner.react").SubgroupSuggestionsBanner, {
						onClose: $,
						chat: a,
						subgroupSuggestionsCount: P
					}),
					priority: d.SubgroupSuggestions
				},
				{
					condition: !!(s && i != null && i.displayedDesc),
					component: u.jsx(r("WAWebGroupDescriptionBanner.react"), {
						onClose: m,
						chat: a,
						groupMetadata: i
					}),
					priority: d.GroupDescription
				},
				{
					condition: v,
					component: u.jsx(o("WAWebPinnedMessagesBanner.react").PinnedMessagesBanner, { chat: a }),
					priority: d.PinnedMessages
				},
				{
					condition: o("WAWebChatGetters").getIsNewsletter(a) && S,
					component: u.jsx(o("WAWebNewsletterPinnedMessagesBanner.react").WAWebNewsletterPinnedMessagesBanner, { chat: a }),
					priority: d.NewsletterPinnedMessages
				},
				{
					condition: o("WAWebChatGetters").getIsNewsletter(a) && L,
					component: u.jsx(o("WAWebNewsletterChannelAlertsBanner.react").NewsletterChannelAlertsBanner, {
						newsletter: a,
						onClose: E
					}),
					priority: d.NewsletterChannelAlerts
				},
				{
					condition: I,
					component: u.jsx(o("WAWebNewsletterAILabelBanner.react").NewsletterAILabelBanner, { onClose: T }),
					priority: d.NewsletterAILabelNux
				},
				{
					condition: A,
					component: u.jsx(o("WAWebMetaAICTABanner.react").MetaAICTABanner, {}),
					priority: d.MetaAICTABanner
				},
				{
					condition: W,
					component: u.jsx(r("WAWebNewsletterNotificationSettingsBanner.react"), {
						chat: a,
						onClose: q
					}),
					priority: d.NewsletterNotificationSettings
				}
			];
			V = (H = G.filter(_).sort(p)[0]) == null ? void 0 : H.component, n[2] = a, n[3] = m, n[4] = h, n[5] = E, n[6] = b, n[7] = $, n[8] = T, n[9] = q, n[10] = i, n[11] = M, n[12] = s, n[13] = g, n[14] = A, n[15] = I, n[16] = L, n[17] = W, n[18] = S, n[19] = v, n[20] = C, n[21] = x, n[22] = P, n[23] = U, n[24] = V;
		} else V = n[24];
		var z = V, j;
		n[25] !== z || n[26] !== a || n[27] !== F ? (j = F ? u.jsx(o("WAWebChangeNumberNotificationBanner.react").ChangeNumberNotificationBanner, {
			chat: a,
			xstyle: z != null && c.topBorder
		}) : null, n[25] = z, n[26] = a, n[27] = F, n[28] = j) : j = n[28];
		var K = j, Q;
		n[29] !== a || n[30] !== O ? (Q = o("WAWebChatGetters").getIsNewsletter(a) && O ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.banner, r("WAWebConversationPanelStyleUtils").sharedLayer, c.topBorder, c.absoluteBanner, c.material), { children: u.jsx(o("WAWebSimilarNewslettersUnitsLoadable.react").SimilarNewslettersConversationBannerLoadable, { chat: a }) })) : null, n[29] = a, n[30] = O, n[31] = Q) : Q = n[31];
		var X = Q;
		if (z == null && K == null && X == null) return null;
		var Y;
		n[32] === Symbol.for("react.memo_cache_sentinel") ? (Y = [
			c.banner,
			r("WAWebConversationPanelStyleUtils").sharedLayer,
			c.topBorder,
			c.material
		], n[32] = Y) : Y = n[32];
		var J;
		return n[33] !== z || n[34] !== K || n[35] !== X ? (J = u.jsxs(r("WAWebVelocityTransitionGroup"), {
			transitionName: "butterbar",
			xstyle: Y,
			children: [
				z,
				K,
				X
			]
		}), n[33] = z, n[34] = K, n[35] = X, n[36] = J) : J = n[36], J;
	}
	function p(e, t) {
		return e.priority - t.priority;
	}
	function _(e) {
		return e.condition;
	}
	l.default = m;
}), 98);
