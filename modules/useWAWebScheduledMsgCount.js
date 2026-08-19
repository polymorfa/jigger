__d("useWAWebScheduledMsgCount", [
	"WAJids",
	"WALogger",
	"WAWebCmd",
	"WAWebScheduledMsgStore",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(5), n = p(0), r = n[0], a = n[1], i = m(null), l;
		t[0] !== e ? (l = function() {
			if (i.current == null || i.current(), e != null) {
				var t = !1;
				i.current = function() {
					t = !0;
				};
				var n = o("WAJids").unsafeCoerceToChatJid(e.toJid());
				o("WAWebScheduledMsgStore").getScheduledMessageCount(n).then(function(e) {
					t || a(e);
				}).catch(f);
			}
		}, t[0] = e, t[1] = l) : l = t[1];
		var s = l, u, c;
		return t[2] !== s ? (u = function() {
			return s(), (function() {
				i.current == null || i.current();
			});
		}, c = [s], t[2] = s, t[3] = u, t[4] = c) : (u = t[3], c = t[4]), d(u, c), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_changed_from_bridge", s), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_revealed_from_bridge", s), r;
	}
	function f(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to load scheduled message count"]))).catching(r("getErrorSafe")(t)).sendLogs("scheduled-msg-count-fail");
	}
	l.default = _;
}), 98);
