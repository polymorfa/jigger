__d("WAWebPrivacyNarrativeE2EMessage.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebDailyAggregatedStats",
	"WAWebE2EInfoModalV2.react",
	"WAWebLockOutlineIcon.react",
	"WAWebModalManager",
	"WAWebPrinaUtils",
	"WAWebPrivacyHighlightDailyUtils",
	"WAWebTabOrder",
	"WAWebWamEnumPrivacyHighlightSurfaceEnum",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = {
		container: {
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			marginTop: "xcxhlts",
			marginInlineEnd: "x1ys307a",
			marginBottom: "x1fqp7bg",
			marginInlineStart: "xyqm7xq",
			paddingTop: "x889kno",
			$$css: !0
		},
		chatListContainer: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			color: "x14ug900",
			$$css: !0
		},
		chatListIcon: {
			fill: "x1h227xn",
			$$css: !0
		},
		statusListContainer: {
			color: "x88nbbm",
			$$css: !0
		},
		statusListIcon: {
			fill: "xn91bti",
			$$css: !0
		},
		secondaryColors: {
			color: "xhslqc4",
			fill: "xvt3oi1",
			$$css: !0
		},
		icon: {
			marginTop: "xvijh9v",
			marginInlineEnd: "x1p8j9ns",
			display: "x1rg5ohu",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.tabOrder, n = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
				highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST,
				url: o("WAWebPrinaUtils").securityUrl()
			}));
		}, a = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(r("WAWebClickableLink.react"), {
				testid: "chatlist-e2e-message-link",
				onClick: n,
				tabIndex: 0,
				"data-tab": t != null ? t : o("WAWebTabOrder").TAB_ORDER.E2E_MESSAGE_BTN,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
		return c.jsx(g, {
			testid: "chatlist-e2e-message",
			iconXstyle: m.chatListIcon,
			text: a,
			xstyle: m.chatListContainer,
			highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		var e = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalStatus, {
				highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
				url: o("WAWebPrinaUtils").securityUrl()
			}));
		}, t = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(r("WAWebClickableLink.react"), {
				tabIndex: 0,
				testid: "status-e2e-message-link",
				onClick: e,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
		return c.jsx(g, {
			testid: "status-e2e-message",
			iconXstyle: [m.statusListIcon, m.secondaryColors],
			text: t,
			xstyle: [m.statusListContainer, m.secondaryColors],
			highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		var e = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
				highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLS_LIST,
				url: o("WAWebPrinaUtils").securityUrl()
			}));
		}, t = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(r("WAWebClickableLink.react"), {
				tabIndex: 0,
				testid: "calls-e2e-message-link",
				onClick: e,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
		return c.jsx(g, {
			testid: "calls-e2e-message",
			iconXstyle: [m.chatListIcon, m.secondaryColors],
			text: t,
			xstyle: [m.chatListContainer, m.secondaryColors],
			highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLS_LIST
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.highlightSurface, a = t.iconXstyle, i = t.testid, l = t.text, s = t.xstyle;
		d(function() {
			o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(n, o("WAWebDailyAggregatedStats").PrinaDailyActionType.NARRATIVE_APPEAR);
		}, []);
		var u = {
			xstyle: [m.icon, a],
			height: 12,
			width: 13
		}, p = o("WAWebLockOutlineIcon.react").LockOutlineIcon;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.container, s), {
			"data-testid": i,
			children: c.jsx("div", {
				className: "x2b8uid xl56j7k x78zum5",
				children: c.jsxs("div", {
					className: "x1pg5gke x1fcty0u xvq8zen x1mzt3pk xeaf4i8",
					children: [c.jsx(p, babelHelpers.extends({}, u)), l]
				})
			})
		}));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.E2eMessageChatList = p, l.E2eMessageStatusList = _, l.E2eMessageCallsList = f, l.E2eMessage = g;
}), 226);
