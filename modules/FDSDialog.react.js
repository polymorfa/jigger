__d("FDSDialog.react", [
	"BaseDialogLabelIDProvider",
	"CometDialogAnimationContext",
	"FDSDialogContainer.react",
	"FDSDialogPage.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"anchorXStyle",
		"aria-label",
		"disableClosingWithMask",
		"onClose",
		"ref",
		"rootRef",
		"size",
		"testid"
	], s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useEffect;
	function p(t) {
		var n, a = o("react-compiler-runtime").c(26), i, l, s, c, p, _, f, g, h;
		a[0] !== t ? (i = t.anchorXStyle, l = t["aria-label"], s = t.disableClosingWithMask, c = t.onClose, _ = t.ref, f = t.rootRef, g = t.size, h = t.testid, p = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l, a[3] = s, a[4] = c, a[5] = p, a[6] = _, a[7] = f, a[8] = g, a[9] = h) : (i = a[1], l = a[2], s = a[3], c = a[4], p = a[5], _ = a[6], f = a[7], g = a[8], h = a[9]);
		var y = d(r("CometDialogAnimationContext")), C = y.dialogAnimationConfig, b;
		if (a[10] !== (C == null || (n = C.animateMount) == null ? void 0 : n.current)) {
			var v;
			b = function() {
				var e;
				C == null || (e = C.animateMount) == null || (e = e.current) == null || e.start();
			}, a[10] = C == null || (v = C.animateMount) == null ? void 0 : v.current, a[11] = b;
		} else b = a[11];
		var S;
		a[12] !== C ? (S = [C], a[12] = C, a[13] = S) : S = a[13], m(b, S);
		var R;
		a[14] !== p ? (R = u.jsx(r("FDSDialogPage.react"), babelHelpers.extends({}, p)), a[14] = p, a[15] = R) : R = a[15];
		var L;
		return a[16] !== i || a[17] !== l || a[18] !== s || a[19] !== c || a[20] !== _ || a[21] !== f || a[22] !== g || a[23] !== R || a[24] !== h ? (L = u.jsx(o("BaseDialogLabelIDProvider").BaseDialogLabelIDProvider, { children: u.jsx(r("FDSDialogContainer.react"), {
			anchorXStyle: i,
			"aria-label": l,
			disableClosingWithMask: s,
			onClose: c,
			ref: _,
			rootRef: f,
			size: g,
			testid: void 0,
			children: R
		}) }), a[16] = i, a[17] = l, a[18] = s, a[19] = c, a[20] = _, a[21] = f, a[22] = g, a[23] = R, a[24] = h, a[25] = L) : L = a[25], L;
	}
	l.default = p;
}), 98);
