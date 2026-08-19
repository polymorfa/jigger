__d("WAWebMutedChatsBar.react", [
	"WAWebKeyboardHotKeys.react",
	"react",
	"sumBy",
	"useWAWebListener",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = e.mutedChats, n = e.mutedChatsCollapsed, a = e.onClick, i = r("useWAWebPrevious")(t), l = m(function() {
			return _(t);
		}), u = l[0], p = l[1], f = c(function() {
			p(_(t));
		}, [t]);
		o("useWAWebListener").useListeners(t.map(function(e) {
			return {
				source: e,
				eventOrEvents: "change:unreadCount",
				callback: f
			};
		})), d(function() {
			(i == null ? void 0 : i.length) !== t.length && f();
		}, [
			f,
			t,
			i
		]);
		var g = function(t) {
			t.preventDefault(), t.stopPropagation(), a();
		}, h = t.length, y = { enter: g };
		return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: y,
			children: s.jsx("div", {
				className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k x1gnnpzl x1q3ajuy x1gx403c x1277o0a",
				onClick: a,
				children: s.jsxs("div", {
					className: "x78zum5 x1q0g3np x1qughib x1nxh6w3 xhslqc4 x12ln5q2",
					children: [s.jsx("span", { children: n ? "Show " + h + " Muted Chats" : "Hide " + h + " Muted Chats" }), u > 0 ? s.jsx("span", {
						className: "x10l6tqk x1atx4j1 x1kjyjoh x1tsellj x1xaadd7 x682dto x19cawur xpqt37d x7e1eld x1pg5gke xk50ysn xtqhoxe xhslqc4 x2b8uid x1h3rtpe x1m50h0k x1i47u5t x1g9atge xlh56gj",
						children: Math.min(u, 99)
					}) : null]
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		return r("sumBy")(e, function(e) {
			return e.unreadCount;
		});
	}
	l.default = p;
}), 98);
