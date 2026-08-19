__d("MAWMarkThreadAsReadMenuItem.react", [
	"fbt",
	"LSMessagingThreadTypeUtil",
	"MWPBumpEntityKey",
	"MWXIconMenuItemEnvelopeBadged",
	"MWXIconMenuItemEnvelopeOpen",
	"MWXMenuItem.react",
	"cr:2580",
	"cr:2873",
	"cr:2996",
	"react",
	"useEmptyFunction",
	"useMWLSMarkThreadAsRead",
	"useMWLSMarkThreadAsUnread"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = (e = n("cr:2873")) != null ? e : r("useEmptyFunction"), p = (u = n("cr:2996")) != null ? u : r("useEmptyFunction");
	function _(e) {
		var t = e.entryPoint, a = e.isUnread, i = e.thread, l = i.threadKey, u = i.threadType, c = r("useMWLSMarkThreadAsRead")(t), _ = r("useMWLSMarkThreadAsUnread")(), f = p(i, t), g = m(), h = o("LSMessagingThreadTypeUtil").isArmadilloSecure(u);
		return d.jsx(r("MWXMenuItem.react"), {
			icon: r(a ? "MWXIconMenuItemEnvelopeOpen" : "MWXIconMenuItemEnvelopeBadged"),
			onClick: function() {
				o("MWPBumpEntityKey").bumpEntityKeyWithAppId("mw.sidebar", "group_thread_overflow_mark_as." + (a ? "read" : "unread")), a ? f != null && h ? f() : c() : (g != null && h ? g() : _(), n("cr:2580") && t != null && n("cr:2580")({
					threadKey: l,
					threadType: u
				}, "mark_thread_unread", t));
			},
			primaryText: a ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			testid: void 0
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
