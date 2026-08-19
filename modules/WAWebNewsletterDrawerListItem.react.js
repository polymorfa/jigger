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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(28), n;
		if (t[0] !== e) {
			n = Symbol.for("react.early_return_sentinel");
			e: {
				var a = e.bottomDirectoryIndex, i = e.data, l = e.firstCellInList, c = e.index, m = e.onNewsletterDirectorySearch, p = e.onSelect, _ = e.searchQuery, f = e.selectionRef, g = e.subscribedNewslettersCount, h;
				t[2] !== i || t[3] !== p ? (h = function() {
					p(i), r("WAWebEnforcementActionLogging").resetSession();
				}, t[2] = i, t[3] = p, t[4] = h) : h = t[4];
				var y = h, C = g > 0 ? g + 2 : 1;
				switch (i.type) {
					case d.NEWSLETTER_CHAT_CELL: {
						var b;
						t[5] !== i.chatEntryPoint || t[6] !== i.newsletter || t[7] !== l || t[8] !== y || t[9] !== _ || t[10] !== f ? (b = u.jsx(r("WAWebDrawerSection.react"), {
							animation: !1,
							children: u.jsx(r("WAWebNewsletterChatCell.react"), {
								searchQuery: _,
								newsletter: i.newsletter,
								active: f,
								onSelect: y,
								chatEntryPoint: i.chatEntryPoint,
								firstCellInList: l
							})
						}), t[5] = i.chatEntryPoint, t[6] = i.newsletter, t[7] = l, t[8] = y, t[9] = _, t[10] = f, t[11] = b) : b = t[11], n = b;
						break e;
					}
					case d.NEWSLETTER_DIRECTORY_CELL: {
						var v = c - C, S = c === a, R;
						t[12] !== i.directoryFunnelLogger || t[13] !== i.newsletter || t[14] !== y || t[15] !== _.query || t[16] !== f || t[17] !== v || t[18] !== S ? (R = u.jsx(r("WAWebDrawerSection.react"), {
							animation: !1,
							children: u.jsx(r("WAWebNewsletterDirectoryCell.react"), {
								active: f,
								newsletter: i.newsletter,
								onSelect: y,
								chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTabSearch,
								index: v,
								highlightText: _.query,
								directoryFunnelLogger: i.directoryFunnelLogger,
								bottomItem: S,
								discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME_SEARCH
							})
						}), t[12] = i.directoryFunnelLogger, t[13] = i.newsletter, t[14] = y, t[15] = _.query, t[16] = f, t[17] = v, t[18] = S, t[19] = R) : R = t[19], n = R;
						break e;
					}
					case d.NEWSLETTER_CELL_HEADER: {
						var L;
						t[20] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "xwa7hi x6ikm8r x10wlt62" }, t[20] = L) : L = t[20];
						var E;
						t[21] !== i.title || t[22] !== i.xstyle ? (E = u.jsx("div", babelHelpers.extends({}, L, { children: u.jsx(r("WAWebSectionHeader.react"), {
							header: i.title,
							xstyle: i.xstyle
						}) })), t[21] = i.title, t[22] = i.xstyle, t[23] = E) : E = t[23];
						var k = E, I;
						t[24] !== i.hasTopBorder || t[25] !== k ? (I = i.hasTopBorder ? u.jsxs(u.Fragment, { children: [u.jsx("div", { className: "xx42vgk x13fuv20 x178xt8z xjm9jq1 x2kejxg xaw7rza" }), k] }) : k, t[24] = i.hasTopBorder, t[25] = k, t[26] = I) : I = t[26], n = I;
						break e;
					}
					case d.SEARCH_FOOTER: {
						n = u.jsx(o("WAWebNewsletterFooterWithActionLink.react").NewsletterFooterWithActionLink, {
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
						break e;
					}
					case d.NEWSLETTER_DIRECTORY_NO_RESULTS: {
						var T;
						t[27] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx(o("WAWebEmptyState.react").NoSearchResults, { center: !0 }), t[27] = T) : T = t[27], n = T;
						break e;
					}
					default:
				}
			}
			t[0] = e, t[1] = n;
		} else n = t[1];
		if (n !== Symbol.for("react.early_return_sentinel")) return n;
	}
	l.TabCellDataType = d, l.NewsletterDrawerListItem = m;
}), 226);
