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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(17), n = e.description, a = e.icon, i = e.shouldHaveWideText, l = e.title, s = i === void 0 ? !1 : i, c;
		t[0] !== a ? (c = a != null ? a : u.jsx(o("WAWebWdsPictoDocIcon.react").WdsPictoDocIcon, {}), t[0] = a, t[1] = c) : c = t[1];
		var d = c;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
			var m;
			return t[2] !== n || t[3] !== d || t[4] !== l ? (m = u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				grow: 1,
				children: u.jsx(r("WDSTextLayout.react"), {
					illustration: d,
					headline: l,
					body: n,
					testid: "media-hub-no-results"
				})
			}), t[2] = n, t[3] = d, t[4] = l, t[5] = m) : m = t[5], m;
		}
		var _;
		t[6] !== l ? (_ = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			weight: "semibold",
			paddingTop: 16,
			textAlign: "center",
			children: l
		}), t[6] = l, t[7] = _) : _ = t[7];
		var f = s && p.containerWide, g;
		t[8] !== f ? (g = [p.container, f], t[8] = f, t[9] = g) : g = t[9];
		var h;
		t[10] !== n || t[11] !== g ? (h = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			textAlign: "center",
			xstyle: g,
			children: n
		}), t[10] = n, t[11] = g, t[12] = h) : h = t[12];
		var y;
		return t[13] !== d || t[14] !== _ || t[15] !== h ? (y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			grow: 1,
			children: [
				d,
				_,
				h
			]
		}), t[13] = d, t[14] = _, t[15] = h, t[16] = y) : y = t[16], y;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(6), n = e.icon, a;
		t[0] !== n ? (a = n != null ? n : u.jsx(r("WDSIllustrationWdsIllPhotosClip.react"), {}), t[0] = n, t[1] = a) : a = t[1];
		var i, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = y(), l = v("media"), t[2] = i, t[3] = l) : (i = t[2], l = t[3]);
		var s;
		return t[4] !== a ? (s = u.jsx(_, {
			icon: a,
			title: i,
			description: l
		}), t[4] = a, t[5] = s) : s = t[5], s;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(6), n = e.icon, a;
		t[0] !== n ? (a = n != null ? n : u.jsx(r("WDSIllustrationWdsIllShareDocument.react"), {}), t[0] = n, t[1] = a) : a = t[1];
		var i, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = y(), l = v("docs"), t[2] = i, t[3] = l) : (i = t[2], l = t[3]);
		var s;
		return t[4] !== a ? (s = u.jsx(_, {
			icon: a,
			title: i,
			description: l
		}), t[4] = a, t[5] = s) : s = t[5], s;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(6), n = e.icon, r;
		t[0] !== n ? (r = n != null ? n : u.jsx(o("WAWebWdsIllLinkWebIcon.react").WdsIllLinkWebIcon, {}), t[0] = n, t[1] = r) : r = t[1];
		var a, i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (a = y(), i = v("links"), t[2] = a, t[3] = i) : (a = t[2], i = t[3]);
		var l;
		return t[4] !== r ? (l = u.jsx(_, {
			icon: r,
			title: a,
			description: i
		}), t[4] = r, t[5] = l) : l = t[5], l;
	}
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
		var e = o("react-compiler-runtime").c(8), t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), n = t.tab, r = d(o("WAWebThemeContext").ThemeContext), a = r.theme, i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = y(), e[0] = i) : i = e[0];
		var l = i, s;
		e[1] !== n ? (s = v(n), e[1] = n, e[2] = s) : s = e[2];
		var c = s, m = a === "dark" ? C.darkStroke : void 0, p;
		e[3] !== m ? (p = u.jsx(o("WAWebWdsIllEmptyCactusIcon.react").WdsIllEmptyCactusIcon, { innerStyles: { backline: m } }), e[3] = m, e[4] = p) : p = e[4];
		var f = p, g;
		return e[5] !== c || e[6] !== f ? (g = u.jsx(_, {
			icon: f,
			title: l,
			description: c
		}), e[5] = c, e[6] = f, e[7] = g) : g = e[7], g;
	}
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
		var e = o("react-compiler-runtime").c(11), t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), n = t.tab, a;
		e[0] !== n ? (a = R(n), e[0] = n, e[1] = a) : a = e[1];
		var i;
		e[2] !== a ? (i = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDeemphasized",
			children: a
		}), e[2] = a, e[3] = i) : i = e[3];
		var l;
		e[4] !== n ? (l = L(n), e[4] = n, e[5] = l) : l = e[5];
		var s;
		e[6] !== l ? (s = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: l
		}), e[6] = l, e[7] = s) : s = e[7];
		var c;
		return e[8] !== i || e[9] !== s ? (c = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			marginTop: 16,
			marginBottom: 32,
			gap: 2,
			xstyle: S.text,
			children: [i, s]
		}), e[8] = i, e[9] = s, e[10] = c) : c = e[10], c;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(10), n = e.collection, r = e.filteredMsgs, a = e.noMsgsComponent, i = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), l = i.searchQuery, s = i.searchStatusCaption, c = i.searchStatusSender, d = n.length === 0 && n.hasMoreMsgs !== !0, _;
		t[0] !== l ? (_ = o("WAWebMediaHubSearchUtils").mediaHubShouldSearch(l), t[0] = l, t[1] = _) : _ = t[1];
		var f = _, g = r.length === 0 && s === !1 && c === !1 && f, h = d ? a : null, y, C;
		t[2] !== g || t[3] !== d ? (y = function() {
			!d && !g || o("WAWebMediaHubLogger").logMediaHubAction({
				action: o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL,
				customFields: { searchResultsReturned: !1 }
			});
		}, C = [d, g], t[2] = g, t[3] = d, t[4] = y, t[5] = C) : (y = t[4], C = t[5]), m(y, C);
		var v;
		t[6] !== g ? (v = g ? u.jsx(b, {}) : null, t[6] = g, t[7] = v) : v = t[7];
		var S = v;
		if (!d && !g) return null;
		var R = h != null ? h : S, L;
		return t[8] !== R ? (L = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			grow: 1,
			xstyle: p.empty,
			children: R
		}), t[8] = R, t[9] = L) : L = t[9], L;
	}
	l.WAWebMediaHubNoMedia = f, l.WAWebMediaHubNoDocs = g, l.WAWebMediaHubNoLinks = h, l.WAWebMediaHubOnlyRecent = E, l.WAWebMediaHubEmptyMessage = k;
}), 226);
