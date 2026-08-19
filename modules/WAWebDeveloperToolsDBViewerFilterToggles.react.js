__d("WAWebDeveloperToolsDBViewerFilterToggles.react", [
	"$InternalEnum",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebFlexBox.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = n("$InternalEnum").Mirrored([
		"ALL",
		"NONE",
		"SOME"
	]);
	function c(e) {
		var t = o("react-compiler-runtime").c(13), n = e.selectedState, a = e.toggleFunc, i;
		t[0] !== a ? (i = function() {
			return a(!0);
		}, t[0] = a, t[1] = i) : i = t[1];
		var l = n === u.ALL, c;
		t[2] !== i || t[3] !== l ? (c = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			onClick: i,
			isActive: l,
			fullWidth: !0,
			children: "All"
		}), t[2] = i, t[3] = l, t[4] = c) : c = t[4];
		var d;
		t[5] !== a ? (d = function() {
			return a(!1);
		}, t[5] = a, t[6] = d) : d = t[6];
		var m = n === u.NONE, p;
		t[7] !== d || t[8] !== m ? (p = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			onClick: d,
			isActive: m,
			fullWidth: !0,
			children: "None"
		}), t[7] = d, t[8] = m, t[9] = p) : p = t[9];
		var _;
		return t[10] !== c || t[11] !== p ? (_ = s.jsxs(o("WAWebFlexBox.react").FlexRow, {
			gap: 12,
			grow: 1,
			children: [c, p]
		}), t[10] = c, t[11] = p, t[12] = _) : _ = t[12], _;
	}
	l.FilterState = u, l.DeveloperToolsDBViewerFilterToggles = c;
}), 98);
