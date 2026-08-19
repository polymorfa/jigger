__d("WAWebChatIcons.react", [
	"fbt",
	"WALogger",
	"WAWebBizAiAgentGating",
	"WAWebBizAiAgentStatusUtils",
	"WAWebChatGetters",
	"WAWebChatUnreadCount.react",
	"WAWebFeatureFlagName",
	"WAWebFrontendChatGetters",
	"WAWebMuteGetters",
	"WAWebSettingsGetters",
	"WAWebVelocityTransitionGroup",
	"WAWebWid",
	"WDSIconIcAlternateEmail.react",
	"WDSIconIcNotificationsOff.react",
	"WDSIconIcPushPin.react",
	"WDSIconWdsIcAi.react",
	"WDSMargins.stylex",
	"react",
	"stylex",
	"useWAWebChatPreviewState",
	"useWAWebChatValues",
	"useWAWebGetFeatureFlag",
	"useWAWebMuteValues",
	"useWAWebPrevious",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = {
		icon: {
			display: "x1rg5ohu",
			marginInlineEnd: "xf6vk7d x1j53mea",
			color: "xhslqc4",
			verticalAlign: "x16dsc37",
			$$css: !0
		},
		iconContainer: {
			display: "x1rg5ohu",
			verticalAlign: "x16dsc37",
			$$css: !0
		},
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		iconMentions: {
			display: "x1rg5ohu",
			width: "xw4jnvo",
			height: "x1qx5ct2",
			color: "x1r8hjv8",
			$$css: !0
		},
		archived: {
			display: "x1rg5ohu",
			height: "xlup9mm",
			paddingTop: "x4p5aij",
			paddingInlineEnd: "x1gabggj",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "xaso8d8",
			fontSize: "x1ncwhqj",
			lineHeight: "x1d3mw78",
			color: "x17t9dm2",
			backgroundColor: "xs7vtfe",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1pyc6se",
			borderInlineEndColor: "x1mlb2bo",
			borderBottomColor: "x16pkwpw",
			borderInlineStartColor: "xqe4bef",
			borderStartStartRadius: "xrlxcrs",
			borderStartEndRadius: "x7g1fbw",
			borderEndEndRadius: "xxl59ln",
			borderEndStartRadius: "xmw6rta",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.noMargin, n = e.noMarginRight, r = e.ref;
		return d.createElement("div", babelHelpers.extends({ ref: r }, {
			0: { className: "x1rg5ohu xhslqc4 x1fsd2vl x170jfvy xdj266r xat24cr x13fj5qh x1xegmmw x11njtxf x9d0jvq x13t61ll x1kchd1x x1u0fnx4 xbxn0j6" },
			2: { className: "x1rg5ohu xhslqc4 x1fsd2vl x170jfvy xdj266r xat24cr x13fj5qh x11njtxf x9d0jvq x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 x14z9mp" },
			1: { className: "x1rg5ohu xhslqc4 x1fsd2vl x170jfvy x11njtxf x9d0jvq x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xdj266r x14z9mp xat24cr x1lziwak" },
			3: { className: "x1rg5ohu xhslqc4 x1fsd2vl x170jfvy x11njtxf x9d0jvq x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xdj266r x14z9mp xat24cr x1lziwak" }
		}[(n === !0) << 1 | (t === !0) << 0], {
			key: "icon-unread",
			"data-testid": "icon-unread-indicator",
			"aria-hidden": "true"
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n, a = t.chat, i = t.fakePin, l = t.hideArchivedIcon, c = t.hideMuteIcon, _ = t.hidePin, f = t.smallUnread, g = t.unreadCount, h = t.unreadMentionIcon, y = o("useWAWebChatValues").useChatValues(t.chat.id, [
			(n = o("WAWebChatGetters")).getId,
			n.getArchive,
			n.getPin,
			o("WAWebFrontendChatGetters").getUnopenedByAssignedAgent,
			o("WAWebFrontendChatGetters").getIsAssignedToMe,
			n.getIsNewsletter
		]), C = y[0], b = y[1], v = y[2], S = y[3], R = y[4], L = y[5], E = a.isFavorite, k = o("useWAWebChatPreviewState").useChatPreviewState(a), I = k[0], T = k[1], D = o("useWAWebMuteValues").useMuteValues(t.mute.id, [o("WAWebMuteGetters").getIsMuted]), x = D[0], $ = o("useWAWebSettingsValues").useSettingsValues([o("WAWebSettingsGetters").getShowArchiveV2]), P = $[0], N = r("useWAWebPrevious")(C), M = r("WAWebWid").equals(N, C), w = function() {
			return b && P ? !c : L ? !1 : x;
		}, A = w() ? d.jsx("div", {
			className: "x1rg5ohu xf6vk7d x1j53mea x16dsc37 xhslqc4",
			"data-testid": "mute-notifications-refreshed",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: d.jsx(r("WDSIconIcNotificationsOff.react"), {
				width: 20,
				height: 20
			})
		}, "icon-muted") : null, F = d.jsx(r("WDSIconIcPushPin.react"), {
			width: 20,
			height: 20
		}), O = _ !== !0 && v != null && v > 0 || i === !0 ? d.jsx("div", {
			className: "x1rg5ohu xf6vk7d x1j53mea x16dsc37 xhslqc4",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: F
		}, "icon-pinned") : null, B = E ? d.jsx("span", { "aria-label": s._(
			/*BTDS*/
			""
		) }, "icon-favorite") : null, W = o("WAWebBizAiAgentStatusUtils").useIsChatAiEnabled(t.chat.id), q = W && !o("WAWebBizAiAgentGating").isAiRespondingChipEnabled();
		q && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[Maiba] WAWebChatIcons: shouldShowAiIndicator=",
			" for chat=",
			""
		])), q, a.id.toLogString());
		var U = f === !0 ? d.jsx(p, {}) : d.jsx("div", {
			className: "x1rg5ohu xf6vk7d x1j53mea xhslqc4 x16dsc37 xt4ypqs x2b8uid",
			"aria-hidden": "true",
			children: d.jsx(o("WAWebChatUnreadCount.react").UnreadCount, { count: g })
		}, "icon-unread"), V = q ? null : U, H = !T && g !== 0 ? V : null, G = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled, z = G && R && S && !H && !q ? d.jsx("div", {
			className: "x1rg5ohu xf6vk7d x1j53mea xhslqc4 x16dsc37",
			children: d.jsx(o("WAWebChatUnreadCount.react").UnreadCount, { count: 0 })
		}, "icon-unread") : null, j = null;
		!T && h && !q && (j = d.jsx("div", {
			className: "x1rg5ohu x16dsc37 xcknrev",
			"data-testid": "icon-mentions",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: d.jsx(r("WDSIconIcAlternateEmail.react"), {
				width: 20,
				height: 20,
				iconXstyle: m.iconMentions
			})
		}, "icon-mentions"));
		var K = b && !l ? d.createElement("span", babelHelpers.extends({}, (u || (u = r("stylex"))).props(m.icon, m.archived, o("WDSMargins.stylex").wdsMargins.marginEnd8), { key: "icon-archived" }), s._(
			/*BTDS*/
			""
		)) : null, Q = d.createElement("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(m.iconContainer, o("WDSMargins.stylex").wdsMargins.margin2), {
			key: "icon-ai-agent",
			"data-testid": "icon-ai-agent",
			"aria-label": s._(
				/*BTDS*/
				""
			)
		}), d.jsx(r("WDSIconWdsIcAi.react"), {
			width: 18,
			height: 18,
			iconXstyle: m.iconColor,
			testid: "ai-signal-outline"
		})), X = q ? Q : null;
		return d.jsxs(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop",
			enter: M,
			exit: M,
			children: [
				A,
				K,
				O,
				B,
				X,
				j,
				H,
				z
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.UnreadIndicator = p, l.Icons = _;
}), 226);
