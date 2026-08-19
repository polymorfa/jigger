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
	"react-compiler-runtime",
	"useEmptyFunction",
	"useMWLSMarkThreadAsRead",
	"useMWLSMarkThreadAsUnread"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = (e = n("cr:2873")) != null ? e : r("useEmptyFunction"), p = (u = n("cr:2996")) != null ? u : r("useEmptyFunction");
	function _(e) {
		var t = o("react-compiler-runtime").c(18), a = e.entryPoint, i = e.isUnread, l = e.thread, u = l.threadKey, c = l.threadType, _ = r("useMWLSMarkThreadAsRead")(a), f = r("useMWLSMarkThreadAsUnread")(), g = p(l, a), h = m(), y;
		t[0] !== c ? (y = o("LSMessagingThreadTypeUtil").isArmadilloSecure(c), t[0] = c, t[1] = y) : y = t[1];
		var C = y, b = r(i ? "MWXIconMenuItemEnvelopeOpen" : "MWXIconMenuItemEnvelopeBadged"), v;
		t[2] !== a || t[3] !== C || t[4] !== i || t[5] !== _ || t[6] !== f || t[7] !== g || t[8] !== h || t[9] !== u || t[10] !== c ? (v = function() {
			o("MWPBumpEntityKey").bumpEntityKeyWithAppId("mw.sidebar", "group_thread_overflow_mark_as." + (i ? "read" : "unread")), i ? g != null && C ? g() : _() : (h != null && C ? h() : f(), n("cr:2580") && a != null && n("cr:2580")({
				threadKey: u,
				threadType: c
			}, "mark_thread_unread", a));
		}, t[2] = a, t[3] = C, t[4] = i, t[5] = _, t[6] = f, t[7] = g, t[8] = h, t[9] = u, t[10] = c, t[11] = v) : v = t[11];
		var S;
		t[12] !== i ? (S = i ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[12] = i, t[13] = S) : S = t[13];
		var R;
		return t[14] !== b || t[15] !== v || t[16] !== S ? (R = d.jsx(r("MWXMenuItem.react"), {
			icon: b,
			onClick: v,
			primaryText: S,
			testid: void 0
		}), t[14] = b, t[15] = v, t[16] = S, t[17] = R) : R = t[17], R;
	}
	l.default = _;
}), 226);
