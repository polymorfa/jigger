__d("WAWebNewsletterDrawerListItem.react", [
	"fbt",
	"WAWebChatEntryPoint",
	"WAWebDrawerSection.react",
	"WAWebEmptyState.react",
	"WAWebEnforcementActionLogging",
	"WAWebNewsletterChatCell.react",
	"WAWebNewsletterDirectoryCell.react",
	"WAWebNewsletterFooterWithActionLink.react",
	"WAWebSectionHeader.react",
	"WAWebText.react",
	"WAWebWamEnumChannelDirectoryEntryPoint",
	"WAWebWamEnumTsSurface",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		NEWSLETTER_CHAT_CELL: "NEWSLETTER_CHAT_CELL",
		NEWSLETTER_DIRECTORY_CELL: "NEWSLETTER_DIRECTORY_CELL",
		NEWSLETTER_DIRECTORY_NO_RESULTS: "NEWSLETTER_DIRECTORY_NO_RESULTS",
		NEWSLETTER_CELL_HEADER: "NEWSLETTER_CELL_HEADER",
		SEARCH_FOOTER: "SEARCH_FOOTER"
	};
	function m(e) {
		var t = e.bottomDirectoryIndex, n = e.data, a = e.firstCellInList, i = e.index, l = e.loading, m = e.onNewsletterDirectorySearch, p = e.onSelect, _ = e.searchQuery, f = e.selectionRef, g = e.subscribedNewslettersCount, h = c(function() {
			p(n), r("WAWebEnforcementActionLogging").resetSession();
		}, [p, n]), y = g > 0 ? g + 2 : 1;
		switch (n.type) {
			case d.NEWSLETTER_CHAT_CELL: return u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: u.jsx(r("WAWebNewsletterChatCell.react"), {
					searchQuery: _,
					newsletter: n.newsletter,
					active: f,
					onSelect: h,
					chatEntryPoint: n.chatEntryPoint,
					firstCellInList: a
				})
			});
			case d.NEWSLETTER_DIRECTORY_CELL: return u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				children: u.jsx(r("WAWebNewsletterDirectoryCell.react"), {
					active: f,
					newsletter: n.newsletter,
					onSelect: h,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTabSearch,
					index: i - y,
					highlightText: _.query,
					directoryFunnelLogger: n.directoryFunnelLogger,
					bottomItem: i === t,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME_SEARCH
				})
			});
			case d.NEWSLETTER_CELL_HEADER: {
				var C = u.jsx("div", {
					className: "xwa7hi x6ikm8r x10wlt62",
					children: u.jsx(r("WAWebSectionHeader.react"), {
						header: n.title,
						xstyle: n.xstyle
					})
				});
				return n.hasTopBorder ? u.jsxs(u.Fragment, { children: [u.jsx("div", { className: "xx42vgk x13fuv20 x178xt8z xjm9jq1 x2kejxg xaw7rza" }), C] }) : C;
			}
			case d.SEARCH_FOOTER: return u.jsx(o("WAWebNewsletterFooterWithActionLink.react").NewsletterFooterWithActionLink, {
				showBorder: !0,
				text: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(o("WAWebText.react").WAWebClickableText, {
						color: "teal",
						xstyle: o("WAWebNewsletterFooterWithActionLink.react").footerTextStyles.semiBold,
						onClick: function() {
							return m(o("WAWebWamEnumChannelDirectoryEntryPoint").CHANNEL_DIRECTORY_ENTRY_POINT.UPDATES_TAB_SEARCH);
						},
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			});
			case d.NEWSLETTER_DIRECTORY_NO_RESULTS: return u.jsx(o("WAWebEmptyState.react").NoSearchResults, { center: !0 });
			default: n.type;
		}
	}
	m.displayName = m.name + " [from " + i.id + "]", l.TabCellDataType = d, l.NewsletterDrawerListItem = m;
}), 226);
