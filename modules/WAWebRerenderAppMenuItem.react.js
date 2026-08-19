__d("WAWebRerenderAppMenuItem.react", [
	"WAWebCmd",
	"WAWebMenuItems.react",
	"WAWebRefreshIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "devtool-rerender-app",
			detailLeft: s.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}),
			primary: "Rerender App",
			onSelect: c
		}), e[0] = t) : t = e[0], t;
	}
	function c() {
		o("WAWebCmd").Cmd.rerenderApp();
	}
	l.default = u;
}), 98);
