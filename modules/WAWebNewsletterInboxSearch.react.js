__d("WAWebNewsletterInboxSearch.react", [
	"WAWebChatEntryPoint",
	"WAWebChatListSearch.react",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebKeyboardHotKeys.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterInboxSearchLogging",
	"WAWebNewsletterWamoSubUtils",
	"WAWebOpenNewsletterChat",
	"WAWebWamEnumTsSurface",
	"WAWebWamEnumUpdateTabSearchEventType",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = function(t) {
		var e = {
			followedChannelsCount: 0,
			adminChannelsCount: 0,
			premiumChannelsFollowedCount: 0
		};
		return t.forEach(function(t) {
			var n, r, a, i;
			(n = (r = t.newsletterMetadata) == null ? void 0 : r.iAmSubscriber()) != null && n ? (e.followedChannelsCount++, o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(t.newsletterMetadata) && e.premiumChannelsFollowedCount++) : (a = (i = t.newsletterMetadata) == null ? void 0 : i.iAmAdminOrOwner()) != null && a && e.adminChannelsCount++;
		}), e;
	};
	function d(e) {
		var t = e.filteredText, n = e.handleSearchChange, a = e.handleSelectNewsletter, i = e.listData, l = e.loading, d = l === void 0 ? !1 : l, m = e.newsletters, p = e.ref, _ = e.searchQuery, f = u(!1), g = f[0], h = f[1], y = c(m), C = y.adminChannelsCount, b = y.followedChannelsCount, v = y.premiumChannelsFollowedCount, S = function() {
			t.trim() === "" && h(!1);
		}, R = function() {
			h(!1);
		}, L = function() {
			t.trim() === "" && o("WAWebNewsletterInboxSearchLogging").logNewsletterInboxSearchEvent({
				updateTabSearchEventType: o("WAWebWamEnumUpdateTabSearchEventType").UPDATE_TAB_SEARCH_EVENT_TYPE.SEARCH_TAP,
				channelsFollowedCount: b,
				channelsAdminCount: C,
				premiumChannelsFollowedCount: o("WAWebNewsletterGatingUtils").isWamoSubLoggingEnabled() ? v : void 0
			});
		}, E = function() {
			t.trim() === "" && (g || L(), h(!0));
		}, k = function(t) {
			var e = i.length === 0 ? null : i[0];
			e != null && e.type === "NEWSLETTER_CHAT_CELL" && (t.preventDefault(), o("WAWebOpenNewsletterChat").openNewsletterChat({
				newsletter: e.newsletter,
				onSelect: a(e),
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterChatlist,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME_SEARCH
			}));
		}, I = function(t) {
			_.updateQuery(t), n(t);
		};
		return s.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "list-section",
			children: s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				onBlur: S,
				children: s.jsx(o("WAWebChatListSearch.react").ListSearch, {
					ref: p,
					placeholder: r("WAWebFbtCommon")("Search"),
					onSearch: I,
					onEnter: k,
					onSearchInputFocus: E,
					onBackButton: R,
					type: o("WAWebChatListSearch.react").ListSearchType.NEWSLETTER_SEARCH,
					loading: d,
					showPlaceholderUntilType: !0
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
