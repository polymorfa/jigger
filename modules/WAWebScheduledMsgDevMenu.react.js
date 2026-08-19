__d("WAWebScheduledMsgDevMenu.react", [
	"WAWebDevIcon.react",
	"WAWebScheduledMsgRevealKeyStore",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = [
		"PENDING",
		"FAILED",
		"REVEALED",
		"UNSCHEDULED"
	];
	function c(e, t) {
		return [s.jsx(r("WDSMenuItem.react"), {
			title: "Developer",
			Icon: o("WAWebDevIcon.react").DevIcon,
			hasSubmenu: !0,
			submenuContent: s.jsx(r("WDSMenu.react"), { children: s.jsx(r("WDSMenuItem.react"), {
				title: "Set status",
				hasSubmenu: !0,
				submenuContent: s.jsx(r("WDSMenu.react"), { children: u.map(function(n) {
					return s.jsx(r("WDSMenuItem.react"), {
						title: n,
						isToggleable: !0,
						toggled: n === t,
						onPress: function() {
							o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(e, n);
						},
						testid: "mi-scheduled-dev-status-" + n
					}, "status-" + n);
				}) }),
				testid: "mi-scheduled-dev-set-status"
			}, "set-status") }),
			testid: "mi-scheduled-developer"
		}, "scheduled-developer-submenu")];
	}
	l.getScheduledMsgDevMenuItems = c;
}), 98);
