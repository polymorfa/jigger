__d("useWAWebTrackCallLinkScreenTransitions", [
	"WAWebVoipActivityTracker",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef, d = {
		ended: !1,
		preview: !1,
		lobby: !1
	};
	function m(e, t, n) {
		var r = o("react-compiler-runtime").c(5), a = c(d), i, l;
		r[0] !== e || r[1] !== n || r[2] !== t ? (i = function() {
			var r = a.current;
			e && !r.ended ? o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CALL_ENDED_SCREEN_SHOWN) : t && !r.preview ? o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CALL_LINK_PREVIEW_SHOWN) : n && !r.lobby && o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CALL_LINK_LOBBY_SHOWN), a.current = {
				ended: e,
				preview: t,
				lobby: n
			};
		}, l = [
			e,
			t,
			n
		], r[0] = e, r[1] = n, r[2] = t, r[3] = i, r[4] = l) : (i = r[3], l = r[4]), u(i, l);
	}
	l.default = m;
}), 98);
