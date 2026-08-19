__d("WAWebNewslettersNavBarItem.react", [
	"fbt",
	"WATimeUtils",
	"WAWebAppRootInteractionContext.react",
	"WAWebAppTracker",
	"WAWebChatGetters",
	"WAWebDrawerManager",
	"WAWebInteractionTracePolicy",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebNewsletterCollection",
	"WAWebNewsletterTabIcon.react",
	"WAWebNewsletterTabPulseState",
	"WAWebOpenLastActiveNewsletterAction",
	"WAWebOpenNewsletterTab",
	"WAWebSideNavButtonsActivityModel",
	"WAWebUserPrefsNewsletter",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSIconWdsIcChannels.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebAppTracker",
	"useWAWebEventTargetValue",
	"useWAWebIsNewsletterUiEnabled",
	"useWAWebNewsletterStatusUnread"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e, t) {
		return e.length === 0 ? !1 : e.some(function(e) {
			var n, r = (n = e.t) != null ? n : 0;
			return o("WAWebChatGetters").getHasUnread(e) && r > t;
		});
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(13), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = r("useWAWebIsNewsletterUiEnabled")();
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.ChannelsTab, n === o("WAWebNavBarTypes").NavBarItems.Newsletters);
		var l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS
		}, t[0] = l) : l = t[0];
		var c = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(l), d = c.startInteraction, _;
		t[1] !== n || t[2] !== d || t[3] !== a ? (_ = async function() {
			if (n !== o("WAWebNavBarTypes").NavBarItems.Newsletters) {
				d();
				var e = await o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
				e && (a(o("WAWebNavBarTypes").NavBarItems.Newsletters), o("WAWebOpenNewsletterTab").openNewsletterTab(), o("WAWebUserPrefsNewsletter").setNewsletterTabLastSeenTimestamp(o("WATimeUtils").unixTime()), r("WAWebNewsletterCollection").trigger("newsletter_tab_close"), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.NEWSLETTERS), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Newsletters), r("WAWebNewsletterTabPulseState").cancelPulse(), o("WAWebOpenLastActiveNewsletterAction").openLastActiveNewsletter());
			}
		}, t[1] = n, t[2] = d, t[3] = a, t[4] = _) : _ = t[4];
		var f = _, g = n === o("WAWebNavBarTypes").NavBarItems.Newsletters, h = g ? o("WAWebNewsletterTabIcon.react").NewsletterTabIcon : r("WDSIconWdsIcChannels.react"), y = r("useWAWebEventTargetValue")(r("WAWebNewsletterCollection"), "add change remove newsletter_tab_close", p), C = r("useWAWebEventTargetValue")(r("WAWebNewsletterTabPulseState"), "pulseChange", m), b = o("useWAWebNewsletterStatusUnread").useWAWebNewsletterStatusUnread(), v = y || b, S;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[5] = S) : S = t[5];
		var R = S, L;
		return t[6] !== f || t[7] !== v || t[8] !== g || t[9] !== C || t[10] !== h || t[11] !== i ? (L = i && u.jsx(r("WDSMenuBarItem.react"), {
			icon: h,
			activityIndicator: v ? {
				size: "small",
				border: !0,
				pulse: C
			} : void 0,
			title: R,
			testid: "navbar-item-newsletters",
			isActive: g,
			onClick: f,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = f, t[7] = v, t[8] = g, t[9] = C, t[10] = h, t[11] = i, t[12] = L) : L = t[12], L;
	}
	function m() {
		return r("WAWebNewsletterTabPulseState").getIsPulsing();
	}
	function p() {
		return c(r("WAWebNewsletterCollection"), o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp());
	}
	l.NewslettersNavBarItem = d;
}), 226);
