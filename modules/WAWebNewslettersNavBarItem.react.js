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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(13), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l = r("useWAWebIsNewsletterUiEnabled")();
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.ChannelsTab, a === o("WAWebNavBarTypes").NavBarItems.Newsletters);
		var c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS
		}, t[0] = c) : c = t[0];
		var d = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(c), _ = d.startInteraction, f;
		t[1] !== a || t[2] !== _ || t[3] !== i ? (f = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (a !== o("WAWebNavBarTypes").NavBarItems.Newsletters) {
					_();
					var e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
					e && (i(o("WAWebNavBarTypes").NavBarItems.Newsletters), o("WAWebOpenNewsletterTab").openNewsletterTab(), o("WAWebUserPrefsNewsletter").setNewsletterTabLastSeenTimestamp(o("WATimeUtils").unixTime()), r("WAWebNewsletterCollection").trigger("newsletter_tab_close"), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.NEWSLETTERS), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Newsletters), r("WAWebNewsletterTabPulseState").cancelPulse(), o("WAWebOpenLastActiveNewsletterAction").openLastActiveNewsletter());
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[1] = a, t[2] = _, t[3] = i, t[4] = f) : f = t[4];
		var g = f, h = a === o("WAWebNavBarTypes").NavBarItems.Newsletters, y = h ? o("WAWebNewsletterTabIcon.react").NewsletterTabIcon : r("WDSIconWdsIcChannels.react"), C = r("useWAWebEventTargetValue")(r("WAWebNewsletterCollection"), "add change remove newsletter_tab_close", p), b = r("useWAWebEventTargetValue")(r("WAWebNewsletterTabPulseState"), "pulseChange", m), v = o("useWAWebNewsletterStatusUnread").useWAWebNewsletterStatusUnread(), S = C || v, R;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[5] = R) : R = t[5];
		var L = R, E;
		return t[6] !== g || t[7] !== S || t[8] !== h || t[9] !== b || t[10] !== y || t[11] !== l ? (E = l && u.jsx(r("WDSMenuBarItem.react"), {
			icon: y,
			activityIndicator: S ? {
				size: "small",
				border: !0,
				pulse: b
			} : void 0,
			title: L,
			testid: "navbar-item-newsletters",
			isActive: h,
			onClick: g,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = g, t[7] = S, t[8] = h, t[9] = b, t[10] = y, t[11] = l, t[12] = E) : E = t[12], E;
	}
	function m() {
		return r("WAWebNewsletterTabPulseState").getIsPulsing();
	}
	function p() {
		return c(r("WAWebNewsletterCollection"), o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp());
	}
	l.NewslettersNavBarItem = d;
}), 226);
