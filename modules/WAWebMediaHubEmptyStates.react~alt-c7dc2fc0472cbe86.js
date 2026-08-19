__d("WAWebMediaHubEmptyStates.react", [
	"fbt",
	"WAWebABProps",
	"WAWebFlex.react",
	"WAWebMediaHubContextProvider",
	"WAWebMediaHubLogger",
	"WAWebMediaHubSearchUtils",
	"WAWebText.react",
	"WAWebThemeContext",
	"WAWebWamEnumActionCode",
	"WAWebWdsIllEmptyCactusIcon.react",
	"WAWebWdsIllLinkWebIcon.react",
	"WAWebWdsPictoDocIcon.react",
	"WDSIllustrationWdsIllPhotosClip.react",
	"WDSIllustrationWdsIllShareDocument.react",
	"WDSText.react",
	"WDSTextLayout.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.use, m = c.useEffect, p = {
		container: {
			width: "xdzyupr",
			$$css: !0
		},
		containerWide: {
			width: "x1kmanbg",
			$$css: !0
		},
		empty: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.description, n = e.icon, a = e.shouldHaveWideText, i = a === void 0 ? !1 : a, l = e.title, s = n != null ? n : u.jsx(o("WAWebWdsPictoDocIcon.react").WdsPictoDocIcon, {});
		return o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			grow: 1,
			children: u.jsx(r("WDSTextLayout.react"), {
				illustration: s,
				headline: l,
				body: t,
				testid: "media-hub-no-results"
			})
		}) : u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			grow: 1,
			children: [
				s,
				u.jsx(o("WAWebText.react").WAWebTextTitle, {
					weight: "semibold",
					paddingTop: 16,
					textAlign: "center",
					children: l
				}),
				u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
					textAlign: "center",
					xstyle: [p.container, i && p.containerWide],
					children: t
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.icon;
		return u.jsx(_, {
			icon: t != null ? t : u.jsx(r("WDSIllustrationWdsIllPhotosClip.react"), {}),
			title: y(),
			description: v("media")
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.icon;
		return u.jsx(_, {
			icon: t != null ? t : u.jsx(r("WDSIllustrationWdsIllShareDocument.react"), {}),
			title: y(),
			description: v("docs")
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.icon;
		return u.jsx(_, {
			icon: t != null ? t : u.jsx(o("WAWebWdsIllLinkWebIcon.react").WdsIllLinkWebIcon, {}),
			title: y(),
			description: v("links")
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		return s._(
			/*BTDS*/
			""
		);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = { darkStroke: {
		stroke: "x4281ju",
		$$css: !0
	} };
	function b() {
		var e = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), t = e.tab, n = d(o("WAWebThemeContext").ThemeContext), r = n.theme, a = y(), i = v(t), l = u.jsx(o("WAWebWdsIllEmptyCactusIcon.react").WdsIllEmptyCactusIcon, { innerStyles: { backline: r === "dark" ? C.darkStroke : void 0 } });
		return u.jsx(_, {
			icon: l,
			title: a,
			description: i
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		switch (e) {
			case "media": return s._(
				/*BTDS*/
				""
			);
			case "docs": return s._(
				/*BTDS*/
				""
			);
			case "links": return s._(
				/*BTDS*/
				""
			);
		}
	}
	var S = { text: {
		width: "xm6i5cn",
		marginInlineStart: "xvc5jky",
		marginInlineEnd: "x11t971q",
		$$css: !0
	} };
	function R(e) {
		switch (e) {
			case "media": return s._(
				/*BTDS*/
				""
			);
			case "docs": return s._(
				/*BTDS*/
				""
			);
			case "links": return s._(
				/*BTDS*/
				""
			);
			default: return null;
		}
	}
	function L(e) {
		switch (e) {
			case "media": return s._(
				/*BTDS*/
				""
			);
			case "docs": return s._(
				/*BTDS*/
				""
			);
			case "links": return s._(
				/*BTDS*/
				""
			);
			default: return null;
		}
	}
	function E() {
		var e = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), t = e.tab;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			marginTop: 16,
			marginBottom: 32,
			gap: 2,
			xstyle: S.text,
			children: [u.jsx(r("WDSText.react"), {
				type: "Body1Emphasized",
				colorName: "contentDeemphasized",
				children: R(t)
			}), u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: L(t)
			})]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.collection, n = e.filteredMsgs, r = e.noMsgsComponent, a = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), i = a.searchQuery, l = a.searchStatusCaption, s = a.searchStatusSender, c = t.length === 0 && t.hasMoreMsgs !== !0, d = o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(i), _ = n.length === 0 && l === !1 && s === !1 && d, f = c ? r : null;
		m(function() {
			!c && !_ || o("WAWebMediaHubLogger").logMediaHubAction({
				action: o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL,
				customFields: { searchResultsReturned: !1 }
			});
		}, [c, _]);
		var g = _ ? u.jsx(b, {}) : null;
		return !c && !_ ? null : u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			grow: 1,
			xstyle: p.empty,
			children: f != null ? f : g
		});
	}
	k.displayName = k.name + " [from " + i.id + "]", l.WAWebMediaHubNoMedia = f, l.WAWebMediaHubNoDocs = g, l.WAWebMediaHubNoLinks = h, l.WAWebMediaHubOnlyRecent = E, l.WAWebMediaHubEmptyMessage = k;
}), 226);
