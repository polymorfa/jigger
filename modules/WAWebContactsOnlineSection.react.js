__d("WAWebContactsOnlineSection.react", [
	"fbt",
	"WATimeUtils",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebChatlistUtils",
	"WAWebCmd",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactGetters",
	"WAWebContactsOnlineContactCard.react",
	"WAWebNoop",
	"WAWebPresenceCollection",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = { labelContainer: {
		marginBottom: "xcytdqz",
		paddingInlineStart: "xb0esv5",
		$$css: !0
	} };
	function _() {
		var e = o("react-compiler-runtime").c(7), t = h, n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = t(), e[0] = n) : n = e[0];
		var a = m(n), i = a[0], l = a[1], c;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (c = function() {
			l(t());
		}, e[1] = c) : c = e[1];
		var d = c;
		o("useWAWebListener").useListener(o("WAWebPresenceCollection").PresenceCollection, "change:isOnline", d), o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "change:name", d), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:t", d);
		var _ = f, g;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x1280gxy x78zum5 xdt5ytf x1xrf6ya xscbp6u xyri2b x1c1uobl" }, e[2] = g) : g = e[2];
		var y, C;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			xstyle: p.labelContainer,
			children: s._(
				/*BTDS*/
				""
			)
		}), C = { className: "x1aj3ljl x78zum5 xw2csxc xdx6fka xh8yej3" }, e[3] = y, e[4] = C) : (y = e[3], C = e[4]);
		var b;
		return e[5] !== i ? (b = u.jsxs("div", babelHelpers.extends({}, g, { children: [y, u.jsx("div", babelHelpers.extends({}, C, { children: i.length === 0 ? u.jsx("div", {
			className: "x6s0dn4 x78zum5 xl56j7k xh8yej3",
			children: u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : u.jsxs(u.Fragment, { children: [i.slice(0, 20).map(function(e) {
			return u.jsx(r("WAWebContactsOnlineContactCard.react"), {
				contact: e,
				onContactClick: _
			}, e.id.toString());
		}), u.jsx("div", { className: "x2lah0s xk9xza8" })] }) }))] })), e[5] = i, e[6] = b) : b = e[6], b;
	}
	function f(e) {
		o("WAWebChatlistUtils").openOrCreateLatestChat(e).then(g).catch(r("WAWebNoop"));
	}
	function g(e) {
		e != null && o("WAWebCmd").Cmd.openChatBottom({
			chat: e,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactsTab
		});
	}
	function h() {
		o("WAWebContactCollection").ContactCollection.ensureSorted();
		var e = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
			showMe: !1,
			filterFn: C
		});
		return e.filter(y);
	}
	function y(e) {
		var t = o("WAWebChatCollection").ChatCollection.get(e.id);
		return t == null || t.t == null ? !1 : o("WATimeUtils").happenedWithin(o("WATimeUtils").castToUnixTime(t.t), o("WATimeUtils").DAY_SECONDS);
	}
	function C(e) {
		return !o("WAWebContactGetters").getIsBot(e) && !o("WAWebContactGetters").getIsPSA(e) && !o("WAWebContactGetters").getIsNewsletter(e);
	}
	l.default = _;
}), 226);
