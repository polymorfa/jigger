__d("useWAWebLexicalTypeAheadKeyboardNavigation", [
	"Lexical",
	"LexicalComposerContext",
	"LexicalUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e, t, n, r) {
		var a = o("react-compiler-runtime").c(9), i = r.onCancel, l = r.onSelect, s = o("LexicalComposerContext").useLexicalComposerContext(), d = s[0], m = c(t), p = m[0], _ = m[1], f = p >= 0 && p < e.length ? p : t, g;
		a[0] !== f || a[1] !== n || a[2] !== d || a[3] !== e || a[4] !== i || a[5] !== l ? (g = function() {
			var t;
			return o("LexicalUtils").mergeRegister(d.registerCommand((t = o("Lexical")).KEY_ENTER_COMMAND, function(t) {
				return e.length === 0 ? !1 : (t != null && (t.preventDefault(), t.stopImmediatePropagation()), l(e[f]), !0);
			}, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_TAB_COMMAND, function(t) {
				return e.length === 0 ? !1 : (t != null && (t.preventDefault(), t.stopImmediatePropagation()), l(e[f]), !0);
			}, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ESCAPE_COMMAND, function(t) {
				return e.length === 0 ? !1 : (t.preventDefault(), t.stopImmediatePropagation(), i(), !0);
			}, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ARROW_LEFT_COMMAND, function(t) {
				return n !== "row" || e.length === 0 ? !1 : (t.preventDefault(), t.stopImmediatePropagation(), _(f === 0 ? e.length - 1 : f - 1), !0);
			}, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ARROW_RIGHT_COMMAND, function(t) {
				return n !== "row" || e.length === 0 ? !1 : (t.preventDefault(), t.stopImmediatePropagation(), _((f + 1) % e.length), !0);
			}, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ARROW_UP_COMMAND, function(t) {
				if (n !== "column" || e.length === 0) return !1;
				for (var r = f === 0 ? e.length - 1 : f - 1, o = e[r]; ((a = o) == null ? void 0 : a.skipKeyboardNav) === !0;) {
					var a;
					r--, r < 0 && (r = e.length - 1), o = e[r];
				}
				return t.preventDefault(), t.stopImmediatePropagation(), _(r), !0;
			}, t.COMMAND_PRIORITY_HIGH), d.registerCommand(t.KEY_ARROW_DOWN_COMMAND, function(t) {
				if (n !== "column" || e.length === 0) return !1;
				t.preventDefault(), t.stopImmediatePropagation();
				for (var r = (f + 1) % e.length, o = e[r]; ((a = o) == null ? void 0 : a.skipKeyboardNav) === !0;) {
					var a;
					r++, o = e[r];
				}
				return _(r), !0;
			}, t.COMMAND_PRIORITY_HIGH));
		}, a[0] = f, a[1] = n, a[2] = d, a[3] = e, a[4] = i, a[5] = l, a[6] = g) : g = a[6], u(g, void 0);
		var h;
		return a[7] !== f ? (h = {
			activeIndex: f,
			setActiveIndex: _
		}, a[7] = f, a[8] = h) : h = a[8], h;
	}
	l.useLexicalTypeAheadKeyboardNavigation = d;
}), 98);
