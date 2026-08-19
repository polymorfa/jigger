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
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = r("useWAWebIsNewsletterUiEnabled")();
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.ChannelsTab, t === o("WAWebNavBarTypes").NavBarItems.Newsletters);
		var i = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS
		}), l = i.startInteraction, d = async function() {
			if (t !== o("WAWebNavBarTypes").NavBarItems.Newsletters) {
				l();
				var e = await o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
				e && (n(o("WAWebNavBarTypes").NavBarItems.Newsletters), o("WAWebOpenNewsletterTab").openNewsletterTab(), o("WAWebUserPrefsNewsletter").setNewsletterTabLastSeenTimestamp(o("WATimeUtils").unixTime()), r("WAWebNewsletterCollection").trigger("newsletter_tab_close"), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.NEWSLETTERS), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Newsletters), r("WAWebNewsletterTabPulseState").cancelPulse(), o("WAWebOpenLastActiveNewsletterAction").openLastActiveNewsletter());
			}
		}, m = t === o("WAWebNavBarTypes").NavBarItems.Newsletters, p = m ? o("WAWebNewsletterTabIcon.react").NewsletterTabIcon : r("WDSIconWdsIcChannels.react"), _ = r("useWAWebEventTargetValue")(r("WAWebNewsletterCollection"), "add change remove newsletter_tab_close", function() {
			return c(r("WAWebNewsletterCollection"), o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp());
		}), f = r("useWAWebEventTargetValue")(r("WAWebNewsletterTabPulseState"), "pulseChange", function() {
			return r("WAWebNewsletterTabPulseState").getIsPulsing();
		}), g = o("useWAWebNewsletterStatusUnread").useWAWebNewsletterStatusUnread(), h = _ || g, y = s._(
			/*BTDS*/
			""
		);
		return a && u.jsx(r("WDSMenuBarItem.react"), {
			icon: p,
			activityIndicator: h ? {
				size: "small",
				border: !0,
				pulse: f
			} : void 0,
			title: y,
			testid: "navbar-item-newsletters",
			isActive: m,
			onClick: d,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NewslettersNavBarItem = d;
}), 226);
