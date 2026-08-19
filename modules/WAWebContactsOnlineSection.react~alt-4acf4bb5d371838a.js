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
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = { labelContainer: {
		marginBottom: "xcytdqz",
		paddingInlineStart: "xb0esv5",
		$$css: !0
	} };
	function _() {
		var e = d(function() {
			o("WAWebContactCollection").ContactCollection.ensureSorted();
			var e = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
				showMe: !1,
				filterFn: function(t) {
					return !o("WAWebContactGetters").getIsBot(t) && !o("WAWebContactGetters").getIsPSA(t) && !o("WAWebContactGetters").getIsNewsletter(t);
				}
			});
			return e.filter(function(e) {
				var t = o("WAWebChatCollection").ChatCollection.get(e.id);
				return t == null || t.t == null ? !1 : o("WATimeUtils").happenedWithin(o("WATimeUtils").castToUnixTime(t.t), o("WATimeUtils").DAY_SECONDS);
			});
		}, []), t = m(e()), n = t[0], a = t[1], i = function() {
			a(e());
		};
		o("useWAWebListener").useListener(o("WAWebPresenceCollection").PresenceCollection, "change:isOnline", i), o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "change:name", i), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:t", i);
		var l = d(function(e) {
			o("WAWebChatlistUtils").openOrCreateLatestChat(e).then(function(e) {
				e != null && o("WAWebCmd").Cmd.openChatBottom({
					chat: e,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactsTab
				});
			}).catch(r("WAWebNoop"));
		}, []);
		return u.jsxs("div", {
			className: "x1280gxy x78zum5 xdt5ytf x1xrf6ya xscbp6u xyri2b x1c1uobl",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				xstyle: p.labelContainer,
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx("div", {
				className: "x1aj3ljl x78zum5 xw2csxc xdx6fka xh8yej3",
				children: n.length === 0 ? u.jsx("div", {
					className: "x6s0dn4 x78zum5 xl56j7k xh8yej3",
					children: u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}) : u.jsxs(u.Fragment, { children: [n.slice(0, 20).map(function(e) {
					return u.jsx(r("WAWebContactsOnlineContactCard.react"), {
						contact: e,
						onContactClick: l
					}, e.id.toString());
				}), u.jsx("div", { className: "x2lah0s xk9xza8" })] })
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
