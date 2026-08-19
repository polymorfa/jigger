__d("WAWebTPEditPdfInWhatsappContext.react", [
	"WAWebMediaEditorEnumsColors",
	"WAWebTPAnnotationThickness",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useCallback, m = u.useContext, p = u.useMemo, _ = u.useState, f = o("WAWebMediaEditorEnumsColors").getColorValue(o("WAWebMediaEditorEnumsColors").ColorType.BLUE), g = {
		isEditing: !1,
		setIsEditing: function() {},
		isSending: !1,
		setIsSending: function() {},
		activeAnnotationMode: null,
		setActiveAnnotationMode: function() {},
		selectedColor: f,
		setSelectedColor: function() {},
		selectedThickness: o("WAWebTPAnnotationThickness").DEFAULT_ANNOTATION_THICKNESS,
		setSelectedThickness: function() {},
		undoRedoState: {
			hasUndo: !1,
			hasRedo: !1
		},
		setUndoRedoState: function() {},
		isCommentingAllowed: !0,
		setIsCommentingAllowed: function() {}
	}, h = c(g);
	function y(e) {
		var t = o("react-compiler-runtime").c(20), n = e.children, r = e.filehash, a = _(!1), i = a[0], l = a[1], u = _(!1), c = u[0], d = u[1], m = _(null), p = m[0], g = m[1], y = _(f), C = y[0], b = y[1], v = _(o("WAWebTPAnnotationThickness").DEFAULT_ANNOTATION_THICKNESS), S = v[0], R = v[1], L;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (L = {
			hasUndo: !1,
			hasRedo: !1
		}, t[0] = L) : L = t[0];
		var E = _(L), k = E[0], I = E[1], T = _(!0), D = T[0], x = T[1], $;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? ($ = function(t) {
			l(t), t ? d(!1) : g(null);
		}, t[1] = $) : $ = t[1];
		var P = $, N;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (N = function(t) {
			d(t);
		}, t[2] = N) : N = t[2];
		var M = N, w;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (w = function(t) {
			g(t);
		}, t[3] = w) : w = t[3];
		var A = w, F;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (F = function(t) {
			b(t);
		}, t[4] = F) : F = t[4];
		var O = F, B;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (B = function(t) {
			R(t);
		}, t[5] = B) : B = t[5];
		var W = B, q;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (q = function(t) {
			I(t);
		}, t[6] = q) : q = t[6];
		var U = q, V;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (V = function(t) {
			x(t);
		}, t[7] = V) : V = t[7];
		var H = V, G;
		t[8] !== p || t[9] !== r || t[10] !== D || t[11] !== i || t[12] !== c || t[13] !== C || t[14] !== S || t[15] !== k ? (G = {
			filehash: r,
			isEditing: i,
			setIsEditing: P,
			isSending: c,
			setIsSending: M,
			activeAnnotationMode: p,
			setActiveAnnotationMode: A,
			selectedColor: C,
			setSelectedColor: O,
			selectedThickness: S,
			setSelectedThickness: W,
			undoRedoState: k,
			setUndoRedoState: U,
			isCommentingAllowed: D,
			setIsCommentingAllowed: H
		}, t[8] = p, t[9] = r, t[10] = D, t[11] = i, t[12] = c, t[13] = C, t[14] = S, t[15] = k, t[16] = G) : G = t[16];
		var z = G, j;
		return t[17] !== n || t[18] !== z ? (j = s.jsx(h, {
			value: z,
			children: n
		}), t[17] = n, t[18] = z, t[19] = j) : j = t[19], j;
	}
	function C() {
		return m(h);
	}
	l.WAWebTPEditPdfInWhatsappProvider = y, l.useWAWebTPEditPdfInWhatsappContext = C;
}), 98);
