__d("WAWebVoipPopoutKeyboardShortcutsHotkey.react", [
	"WAWebVoipCallShortcutsPopup.react",
	"WAWebVoipUiPopoutWindowContext",
	"react",
	"useWAWebListener",
	"useWAWebVoipModalManager"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = "input, textarea, [contenteditable]:not([contenteditable=\"false\"])";
	function d() {
		var e = u(r("WAWebVoipUiPopoutWindowContext")), t = e.documentEl, n = r("useWAWebVoipModalManager")(), a = n.openModal;
		return o("useWAWebListener").useListener(t, "keydown", function(e) {
			var n;
			if (m(e)) {
				var o = t == null || (n = t.defaultView) == null ? void 0 : n.Element, i = e.target;
				o != null && i instanceof o && i.closest(c) != null || (e.stopImmediatePropagation(), a(s.jsx(r("WAWebVoipCallShortcutsPopup.react"), {})));
			}
		}, { capture: !0 }), null;
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		return e.key === "?" && e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey;
	}
	l.default = d;
}), 98);
