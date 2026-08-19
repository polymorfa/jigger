__d("useWAWebVoipModalManager", [
	"WAWebModalManager",
	"WAWebVoipPopoutModalManager",
	"WAWebVoipUiPopoutWindowContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useContext;
	function d() {
		var e = o("react-compiler-runtime").c(17), t = c(r("WAWebVoipUiPopoutWindowContext")), n = t.isDocPip || t.isContextInPopoutWindow, a;
		e[0] !== n || e[1] !== t.documentEl ? (a = function(r, a) {
			n && t.documentEl != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.open(r, a) : o("WAWebModalManager").ModalManager.open(r, a);
		}, e[0] = n, e[1] = t.documentEl, e[2] = a) : a = e[2];
		var i = a, l;
		e[3] !== n || e[4] !== t.documentEl ? (l = function() {
			n && t.documentEl != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close() : o("WAWebModalManager").ModalManager.close();
		}, e[3] = n, e[4] = t.documentEl, e[5] = l) : l = e[5];
		var s = l, u;
		e[6] !== n || e[7] !== t.documentEl ? (u = function(r, a) {
			n && t.documentEl != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.openSupportModal(r, a) : o("WAWebModalManager").ModalManager.openSupportModal(r, a);
		}, e[6] = n, e[7] = t.documentEl, e[8] = u) : u = e[8];
		var d = u, m;
		e[9] !== n || e[10] !== t.documentEl ? (m = function() {
			n && t.documentEl != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.closeSupportOrModal() : o("WAWebModalManager").ModalManager.closeSupportOrModal();
		}, e[9] = n, e[10] = t.documentEl, e[11] = m) : m = e[11];
		var p = m, _;
		return e[12] !== s || e[13] !== p || e[14] !== i || e[15] !== d ? (_ = {
			openModal: i,
			closeModal: s,
			openSupportModal: d,
			closeSupportOrModal: p
		}, e[12] = s, e[13] = p, e[14] = i, e[15] = d, e[16] = _) : _ = e[16], _;
	}
	l.default = d;
}), 98);
