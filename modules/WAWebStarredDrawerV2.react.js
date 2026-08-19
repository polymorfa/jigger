__d("WAWebStarredDrawerV2.react", [
	"fbt",
	"WAWebABProps",
	"WAWebDisplayType",
	"WAWebDrawerSection.react",
	"WAWebEmptyState.react",
	"WAWebFbtCommon",
	"WAWebHistorySyncComponents.react",
	"WAWebHistorySyncProgressGetters",
	"WAWebMessageComponentContext.react",
	"WAWebMsgDrawer.react",
	"WAWebSearchHighlightTermsContext.react",
	"WAWebSearchInput",
	"WAWebSimpleSearch",
	"WAWebStarredHeaderDropdown.react",
	"WDSIconIcMoreVert.react",
	"WDSMenuBarItem.react",
	"react",
	"useWAWebDebouncedSearch",
	"useWAWebHistorySyncProgressValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo;
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.headerType, u = a.onClose, d = a.onSaveContact, _ = a.starredMsgs, f = a.threadId, g = o("WAWebABProps").getABPropConfigValue("wa_web_feature_parity_small_wins"), h = r("useWAWebDebouncedSearch")(), y = h[0], C = h[1], b = r("WAWebFbtCommon")("Search"), v = g ? c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "list-section",
			children: c.jsx(o("WAWebSearchInput").DrawerSearchInput, {
				searchInputA11yLabel: b,
				placeholder: b,
				onSearch: C,
				focusOnMount: !1
			})
		}) : void 0, S = m(function(e) {
			return o("WAWebSimpleSearch").simpleSearch(y, [e.body, e.caption]);
		}, [y]), R = p(function() {
			return y.trim() !== "" ? y.trim().toLowerCase().split(/\s+/).filter(Boolean) : null;
		}, [y]), L = g && y.trim() !== "", E = o("useWAWebHistorySyncProgressValues").useHistorySyncProgressValues([o("WAWebHistorySyncProgressGetters").getInProgress]), k = E[0], I = s._(
			/*BTDS*/
			""
		), T = c.jsx(o("WAWebEmptyState.react").StarredMsgs, {}), D = c.jsx(o("WAWebEmptyState.react").Empty, { text: r("WAWebFbtCommon")("No results found") }), x = i != null ? c.jsx(o("WAWebHistorySyncComponents.react").HistorySyncChatStarredMsgsPlaceholderText, {}) : c.jsx(o("WAWebHistorySyncComponents.react").HistorySyncStarredMsgsPlaceholderText, {}), $ = _.length === 0 && !k && o("WAWebABProps").getABPropConfigValue("wds_web_text_layout"), P = $ ? void 0 : x, N = c.jsx(r("WDSMenuBarItem.react"), {
			testid: "starred-menu",
			icon: r("WDSIconIcMoreVert.react"),
			title: s._(
				/*BTDS*/
				""
			),
			menuAlign: "end",
			wdsMenuToRender: c.jsx(r("WAWebStarredHeaderDropdown.react"), {
				chat: i,
				msgs: _.toArray(),
				threadId: f
			})
		}), M = p(function() {
			return { onSaveContact: d };
		}, [d]);
		return c.jsx(o("WAWebMessageComponentContext.react").MessageComponentContext.Provider, {
			value: M,
			children: c.jsx(r("WAWebSearchHighlightTermsContext.react").Provider, {
				value: R,
				children: c.jsx(r("WAWebMsgDrawer.react"), {
					ref: n,
					msgCollection: _,
					onClose: u,
					chat: i,
					title: I,
					emptyListText: T,
					footerText: P,
					headerMenu: N,
					headerType: l,
					displayType: o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS,
					tsNavigationSurface: "starred-messages-drawer",
					searchSection: v,
					msgFilter: L ? S : void 0,
					emptySearchText: D
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
