__d("WAWebVoipPopoutKeyboardShortcutsHotkey.react", [
	"WAWebVoipCallShortcutsPopup.react",
	"WAWebVoipUiPopoutWindowContext",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebVoipModalManager"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = "input, textarea, [contenteditable]:not([contenteditable=\"false\"])";
	function d() {
		var e, t = o("react-compiler-runtime").c(4), n = u(r("WAWebVoipUiPopoutWindowContext")), a = n.documentEl, i = r("useWAWebVoipModalManager")(), l = i.openModal, d;
		if (t[0] !== (a == null || (e = a.defaultView) == null ? void 0 : e.Element) || t[1] !== l) {
			var p;
			d = function(t) {
				var e;
				if (m(t)) {
					var n = a == null || (e = a.defaultView) == null ? void 0 : e.Element, o = t.target;
					n != null && o instanceof n && o.closest(c) != null || (t.stopImmediatePropagation(), l(s.jsx(r("WAWebVoipCallShortcutsPopup.react"), {})));
				}
			}, t[0] = a == null || (p = a.defaultView) == null ? void 0 : p.Element, t[1] = l, t[2] = d;
		} else d = t[2];
		var _;
		return t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = { capture: !0 }, t[3] = _) : _ = t[3], o("useWAWebListener").useListener(a, "keydown", d, _), null;
	}
	function m(e) {
		return e.key === "?" && e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey;
	}
	l.default = d;
}), 98);
