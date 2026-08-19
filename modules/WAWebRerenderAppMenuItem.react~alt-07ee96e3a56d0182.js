__d("WAWebRerenderAppMenuItem.react", [
	"WAWebCmd",
	"WAWebMenuItems.react",
	"WAWebRefreshIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		return s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "devtool-rerender-app",
			detailLeft: s.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}),
			primary: "Rerender App",
			onSelect: c
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c() {
		o("WAWebCmd").Cmd.rerenderApp();
	}
	l.default = u;
}), 98);
