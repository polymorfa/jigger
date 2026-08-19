__d("WAWebTPEditPdfInWhatsappContext.react", [
	"WAWebMediaEditorEnumsColors",
	"WAWebTPAnnotationThickness",
	"react"
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
		var t = e.children, n = e.filehash, r = _(!1), a = r[0], i = r[1], l = _(!1), u = l[0], c = l[1], m = _(null), g = m[0], y = m[1], C = _(f), b = C[0], v = C[1], S = _(o("WAWebTPAnnotationThickness").DEFAULT_ANNOTATION_THICKNESS), R = S[0], L = S[1], E = _({
			hasUndo: !1,
			hasRedo: !1
		}), k = E[0], I = E[1], T = _(!0), D = T[0], x = T[1], $ = d(function(e) {
			i(e), e ? c(!1) : y(null);
		}, []), P = d(function(e) {
			c(e);
		}, []), N = d(function(e) {
			y(e);
		}, []), M = d(function(e) {
			v(e);
		}, []), w = d(function(e) {
			L(e);
		}, []), A = d(function(e) {
			I(e);
		}, []), F = d(function(e) {
			x(e);
		}, []), O = p(function() {
			return {
				filehash: n,
				isEditing: a,
				setIsEditing: $,
				isSending: u,
				setIsSending: P,
				activeAnnotationMode: g,
				setActiveAnnotationMode: N,
				selectedColor: b,
				setSelectedColor: M,
				selectedThickness: R,
				setSelectedThickness: w,
				undoRedoState: k,
				setUndoRedoState: A,
				isCommentingAllowed: D,
				setIsCommentingAllowed: F
			};
		}, [
			n,
			a,
			$,
			u,
			P,
			g,
			N,
			b,
			M,
			R,
			w,
			k,
			A,
			D,
			F
		]);
		return s.jsx(h, {
			value: O,
			children: t
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return m(h);
	}
	l.WAWebTPEditPdfInWhatsappProvider = y, l.useWAWebTPEditPdfInWhatsappContext = C;
}), 98);
