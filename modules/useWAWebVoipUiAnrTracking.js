__d("useWAWebVoipUiAnrTracking", [
	"WAWebFullscreenDetection",
	"WAWebVoipActivityTracker",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useEffect;
	function u() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0], s(p, t);
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = [], e[1] = n) : n = e[1], s(d, n), o("WAWebFullscreenDetection").useOnFullscreenChange(c);
	}
	function c(e) {
		o("WAWebVoipActivityTracker").trackUiActivity(e ? o("WAWebVoipActivityTracker").VoipUiActivity.TAB_FULLSCREEN_ENTER : o("WAWebVoipActivityTracker").VoipUiActivity.TAB_FULLSCREEN_EXIT);
	}
	function d() {
		var e = m;
		return document.addEventListener("visibilitychange", e), function() {
			document.removeEventListener("visibilitychange", e);
		};
	}
	function m() {
		o("WAWebVoipActivityTracker").trackUiActivity(document.hidden ? o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_HIDDEN : o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_VISIBLE);
	}
	function p() {
		o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_MOUNTED);
		var e = null, t = window.requestAnimationFrame(function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_EFFECTS_RUNNING), e = window.requestAnimationFrame(_);
		});
		return function() {
			window.cancelAnimationFrame(t), e != null && window.cancelAnimationFrame(e);
		};
	}
	function _() {
		o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_READY);
	}
	l.default = u;
}), 98);
