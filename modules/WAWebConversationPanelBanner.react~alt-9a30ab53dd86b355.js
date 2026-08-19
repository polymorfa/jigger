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
		var n, a = t.chat, i = t.groupMetadata, l = r("useWAWebConversationPanelGroupDescription")(a), s = l[0], m = l[1], p = o("WAWebMembershipApprovalRequestsBanner.react").useMembershipApprovalRequestsBanner(a), _ = p[0], f = p[1], g = o("WAWebReportToAdminNewReportBanner.react").useReportToAdminNewReportBanner(a), h = g[0], y = g[1], C = o("WAWebPinnedMessagesBanner.react").useWAWebPinnedMessagesBanner(a), b = o("WAWebNewsletterPinnedMessagesBanner.react").useWAWebNewsletterPinnedMessagesBanner(a), v = o("WAWebNewsletterChannelAlertsBanner.react").useNewsletterChannelAlertsBanner(a), S = v[0], R = v[1], L = o("WAWebNewsletterAILabelBanner.react").useNewsletterAILabelBanner(a), E = L[0], k = L[1], I = o("WAWebSubgroupSuggestionsBanner.react").useSubgroupSuggestionsBanner(a), T = I[0], D = I[1], x = I[2], $ = r("useWAWebCagEventsAwarenessBanner.react")(a), P = $[0], N = $[1], M = o("WAWebMetaAICTABanner.react").useMetaAICTABanner(a), w = o("WAWebChangeNumberNotificationBanner.react").useChangeNumberNotificationBanner(a), A = o("useWAWebSimilarNewslettersConversationBanner").useSimilarNewslettersConversationBanner(a), F = o("useWAWebNewsletterNotificationSettingsBanner").useNewsletterNotificationSettingsBanner(a), O = F[0], B = F[1], W = [
			{
				condition: P,
				component: u.jsx(r("WAWebCagEventsAwarenessBanner.react"), { onClose: N }),
				priority: d.CagEventsAwareness
			},
			{
				condition: _,
				component: u.jsx(o("WAWebMembershipApprovalRequestsBanner.react").MembershipApprovalRequestsBanner, {
					onClose: f,
					chat: a
				}),
				priority: d.MembershipApprovalRequests
			},
			{
				condition: h,
				component: u.jsx(o("WAWebReportToAdminNewReportBanner.react").ReportToAdminNewReportBanner, {
					onClose: y,
					chat: a
				}),
				priority: d.ReportToAdminNewReport
			},
			{
				condition: T,
				component: u.jsx(o("WAWebSubgroupSuggestionsBanner.react").SubgroupSuggestionsBanner, {
					onClose: D,
					chat: a,
					subgroupSuggestionsCount: x
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
				condition: C,
				component: u.jsx(o("WAWebPinnedMessagesBanner.react").PinnedMessagesBanner, { chat: a }),
				priority: d.PinnedMessages
			},
			{
				condition: o("WAWebChatGetters").getIsNewsletter(a) && b,
				component: u.jsx(o("WAWebNewsletterPinnedMessagesBanner.react").WAWebNewsletterPinnedMessagesBanner, { chat: a }),
				priority: d.NewsletterPinnedMessages
			},
			{
				condition: o("WAWebChatGetters").getIsNewsletter(a) && S,
				component: u.jsx(o("WAWebNewsletterChannelAlertsBanner.react").NewsletterChannelAlertsBanner, {
					newsletter: a,
					onClose: R
				}),
				priority: d.NewsletterChannelAlerts
			},
			{
				condition: E,
				component: u.jsx(o("WAWebNewsletterAILabelBanner.react").NewsletterAILabelBanner, { onClose: k }),
				priority: d.NewsletterAILabelNux
			},
			{
				condition: M,
				component: u.jsx(o("WAWebMetaAICTABanner.react").MetaAICTABanner, {}),
				priority: d.MetaAICTABanner
			},
			{
				condition: O,
				component: u.jsx(r("WAWebNewsletterNotificationSettingsBanner.react"), {
					chat: a,
					onClose: B
				}),
				priority: d.NewsletterNotificationSettings
			}
		], q = (n = W.filter(function(e) {
			return e.condition;
		}).sort(function(e, t) {
			return e.priority - t.priority;
		})[0]) == null ? void 0 : n.component, U = w ? u.jsx(o("WAWebChangeNumberNotificationBanner.react").ChangeNumberNotificationBanner, {
			chat: a,
			xstyle: q != null && c.topBorder
		}) : null, V = o("WAWebChatGetters").getIsNewsletter(a) && A ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.banner, r("WAWebConversationPanelStyleUtils").sharedLayer, c.topBorder, c.absoluteBanner, c.material), { children: u.jsx(o("WAWebSimilarNewslettersUnitsLoadable.react").SimilarNewslettersConversationBannerLoadable, { chat: a }) })) : null;
		return q == null && U == null && V == null ? null : u.jsxs(r("WAWebVelocityTransitionGroup"), {
			transitionName: "butterbar",
			xstyle: [
				c.banner,
				r("WAWebConversationPanelStyleUtils").sharedLayer,
				c.topBorder,
				c.material
			],
			children: [
				q,
				U,
				V
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
