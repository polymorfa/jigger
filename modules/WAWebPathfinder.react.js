__d("WAWebPathfinder.react", [
	"WAWebModalManager",
	"WAWebPathfinderApp",
	"WAWebPathfinderKeyboard",
	"WAWebPathfinderNavigation",
	"WAWebPathfinderUserTouch",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useEffect;
	function u() {
		var e = o("react-compiler-runtime").c(11), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { capture: !0 }, e[0] = t) : t = e[0], o("useWAWebListener").useListener(window, "click", o("WAWebPathfinderUserTouch").handleClick, t);
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = { capture: !0 }, e[1] = n) : n = e[1], o("useWAWebListener").useListener(window, "dblclick", o("WAWebPathfinderUserTouch").handleDoubleClick, n);
		var r;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (r = { capture: !0 }, e[2] = r) : r = e[2], o("useWAWebListener").useListener(window, "wheel", o("WAWebPathfinderUserTouch").handleWheel, r);
		var a;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (a = { capture: !0 }, e[3] = a) : a = e[3], o("useWAWebListener").useListener(window, "scroll", o("WAWebPathfinderUserTouch").handleScroll, a);
		var i;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (i = { capture: !0 }, e[4] = i) : i = e[4], o("useWAWebListener").useListener(window, "pointerdown", o("WAWebPathfinderUserTouch").handlePointerDown, i);
		var l;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (l = { capture: !0 }, e[5] = l) : l = e[5], o("useWAWebListener").useListener(window, "pointerup", o("WAWebPathfinderUserTouch").handlePointerUp, l);
		var u;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (u = { capture: !0 }, e[6] = u) : u = e[6], o("useWAWebListener").useListener(window, "pointercancel", o("WAWebPathfinderUserTouch").handlePointerCancel, u);
		var d;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (d = { capture: !0 }, e[7] = d) : d = e[7], o("useWAWebListener").useListener(window, "focusin", o("WAWebPathfinderKeyboard").handleFocusIn, d);
		var m;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (m = { capture: !0 }, e[8] = m) : m = e[8], o("useWAWebListener").useListener(window, "focusout", o("WAWebPathfinderKeyboard").handleFocusOut, m);
		var p;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (p = { capture: !0 }, e[9] = p) : p = e[9], o("useWAWebListener").useListener(window, "input", o("WAWebPathfinderKeyboard").handleInput, p), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "open_modal", o("WAWebPathfinderApp").handleAlertShown), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "open_alert", o("WAWebPathfinderApp").handleAlertShown), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", o("WAWebPathfinderApp").handleAlertClosed), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_alert", o("WAWebPathfinderApp").handleAlertClosed);
		var _;
		return e[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], e[10] = _) : _ = e[10], s(c, _), null;
	}
	function c() {
		return o("WAWebPathfinderNavigation").initNavigationListener();
	}
	l.default = u;
}), 98);
