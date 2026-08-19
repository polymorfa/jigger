__d("useWAWebDeveloperToolsDBViewerColumnSelector", [
	"WAWebDeveloperToolsArrayUtils",
	"WAWebDeveloperToolsDBViewerFilterToggles.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo;
	function u(e, t) {
		var n = o("react-compiler-runtime").c(13), r;
		n[0] !== e ? (r = e.filter(d), n[0] = e, n[1] = r) : r = n[1];
		var a = r.length, i;
		n[2] !== e || n[3] !== t ? (i = function(r) {
			var n = e.map(function(e) {
				return e.name === r ? babelHelpers.extends({}, e, { selected: !e.selected }) : e;
			});
			t(n);
		}, n[2] = e, n[3] = t, n[4] = i) : i = n[4];
		var l = i, s;
		n[5] !== e || n[6] !== t ? (s = function(r) {
			var n = e.map(function(e) {
				return babelHelpers.extends({}, e, { selected: r });
			});
			t(n);
		}, n[5] = e, n[6] = t, n[7] = s) : s = n[7];
		var u = s, m;
		e: {
			var p = e.filter(c);
			if (o("WAWebDeveloperToolsArrayUtils").isEmptyArray(p)) {
				m = o("WAWebDeveloperToolsDBViewerFilterToggles.react").FilterState.NONE;
				break e;
			} else if (p.length === e.length) {
				m = o("WAWebDeveloperToolsDBViewerFilterToggles.react").FilterState.ALL;
				break e;
			}
			m = o("WAWebDeveloperToolsDBViewerFilterToggles.react").FilterState.SOME;
		}
		var _ = m, f;
		return n[8] !== _ || n[9] !== l || n[10] !== a || n[11] !== u ? (f = {
			handleColumnClick: l,
			toggleAllColumns: u,
			checkSelectionState: _,
			numberOfSelectedColumns: a
		}, n[8] = _, n[9] = l, n[10] = a, n[11] = u, n[12] = f) : f = n[12], f;
	}
	function c(e) {
		return e.selected;
	}
	function d(e) {
		return e.selected;
	}
	l.default = u;
}), 98);
