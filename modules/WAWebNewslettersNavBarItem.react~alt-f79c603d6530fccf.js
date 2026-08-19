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
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = r("useWAWebIsNewsletterUiEnabled")();
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.ChannelsTab, t === o("WAWebNavBarTypes").NavBarItems.Newsletters);
		var l = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS
		}), d = l.startInteraction, m = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (t !== o("WAWebNavBarTypes").NavBarItems.Newsletters) {
					d();
					var e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
					e && (a(o("WAWebNavBarTypes").NavBarItems.Newsletters), o("WAWebOpenNewsletterTab").openNewsletterTab(), o("WAWebUserPrefsNewsletter").setNewsletterTabLastSeenTimestamp(o("WATimeUtils").unixTime()), r("WAWebNewsletterCollection").trigger("newsletter_tab_close"), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.NEWSLETTERS), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Newsletters), r("WAWebNewsletterTabPulseState").cancelPulse(), o("WAWebOpenLastActiveNewsletterAction").openLastActiveNewsletter());
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), p = t === o("WAWebNavBarTypes").NavBarItems.Newsletters, _ = p ? o("WAWebNewsletterTabIcon.react").NewsletterTabIcon : r("WDSIconWdsIcChannels.react"), f = r("useWAWebEventTargetValue")(r("WAWebNewsletterCollection"), "add change remove newsletter_tab_close", function() {
			return c(r("WAWebNewsletterCollection"), o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp());
		}), g = r("useWAWebEventTargetValue")(r("WAWebNewsletterTabPulseState"), "pulseChange", function() {
			return r("WAWebNewsletterTabPulseState").getIsPulsing();
		}), h = o("useWAWebNewsletterStatusUnread").useWAWebNewsletterStatusUnread(), y = f || h, C = s._(
			/*BTDS*/
			""
		);
		return i && u.jsx(r("WDSMenuBarItem.react"), {
			icon: _,
			activityIndicator: y ? {
				size: "small",
				border: !0,
				pulse: g
			} : void 0,
			title: C,
			testid: "navbar-item-newsletters",
			isActive: p,
			onClick: m,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NewslettersNavBarItem = d;
}), 226);
