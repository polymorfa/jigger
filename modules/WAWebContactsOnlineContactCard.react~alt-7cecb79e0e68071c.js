__d("WAWebContactsOnlineContactCard.react", [
	"fbt",
	"WAWebClock",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebPresenceCollection",
	"WDSText.react",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = { name: {
		textAlign: "x2b8uid",
		textOverflow: "xlyipyv",
		whiteSpace: "xuxw1ft",
		width: "xh8yej3",
		$$css: !0
	} };
	function _(e) {
		var t = e.contact, n = e.onContactClick, a = o("WAWebPresenceCollection").PresenceCollection.get(t.id), i = m(a != null && a.isOnline === !0), l = i[0], c = i[1], _ = m(0), f = _[1];
		o("useWAWebListener").useListener(a, "change:isOnline", function() {
			c(a != null && a.isOnline === !0);
		}), o("useWAWebListener").useListener(a, "change:chatstate", function() {
			f(function(e) {
				return e + 1;
			});
		});
		var g = d(function() {
			n(t.id);
		}, [t.id, n]), h = function() {
			var e = o("WAWebContactGetters").getNotifyName(t);
			if (e == null) return "";
			var n = e.split(" ");
			return n[0];
		}, y = function() {
			if (l) return s._(
				/*BTDS*/
				""
			);
			if (a != null && a.chatstate != null) {
				var e = a.chatstate.t;
				if (e != null && !a.chatstate.deny) return o("WAWebClock").Clock.lastSeenStr(e);
			}
			return s._(
				/*BTDS*/
				""
			);
		}, C = d(function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), g());
		}, [g]);
		return u.jsxs("div", {
			className: "x6s0dn4 x1ypdohk x78zum5 xdt5ytf x2lah0s x1fu8urw",
			onClick: g,
			onKeyPress: C,
			role: "button",
			tabIndex: 0,
			children: [
				u.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: t.id,
					size: 56,
					loadPicture: !0
				}),
				u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					xstyle: p.name,
					children: h()
				}),
				u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: l ? "contentActionEmphasized" : "contentDeemphasized",
					children: y()
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
