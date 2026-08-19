__d("MWDialogText.react", [
	"MWDialogContentTypeValues",
	"MWXText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["children", "type"], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(16), a, i, l;
		n[0] !== t ? (a = t.children, l = t.type, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l) : (a = n[1], i = n[2], l = n[3]);
		var s = l === void 0 ? "body" : l;
		switch (s) {
			case "bodyLink": {
				var c;
				return n[4] !== a || n[5] !== i ? (c = u.jsx(r("MWXText.react"), babelHelpers.extends({ type: o("MWDialogContentTypeValues").textBodyLinkType }, i, { children: a })), n[4] = a, n[5] = i, n[6] = c) : c = n[6], c;
			}
			case "headlineEmphasized": {
				var d;
				return n[7] !== a || n[8] !== i ? (d = u.jsx(r("MWXText.react"), babelHelpers.extends({ type: o("MWDialogContentTypeValues").textHeadlineType }, i, { children: a })), n[7] = a, n[8] = i, n[9] = d) : d = n[9], d;
			}
			case "meta": {
				var m;
				return n[10] !== a || n[11] !== i ? (m = u.jsx(r("MWXText.react"), babelHelpers.extends({ type: o("MWDialogContentTypeValues").textMetaType }, i, { children: a })), n[10] = a, n[11] = i, n[12] = m) : m = n[12], m;
			}
		}
		var p;
		return n[13] !== a || n[14] !== i ? (p = u.jsx(r("MWXText.react"), babelHelpers.extends({ type: o("MWDialogContentTypeValues").textBodyType }, i, { children: a })), n[13] = a, n[14] = i, n[15] = p) : p = n[15], p;
	}
	l.default = c;
}), 98);
