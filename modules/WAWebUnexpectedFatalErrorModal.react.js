__d("WAWebUnexpectedFatalErrorModal.react", [
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebSocketModel",
	"WAWebStopEvent",
	"gkx",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.bugReportDescription, n = e.children, a = e.reason;
		return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOverlayClick: o("WAWebStopEvent").preventDefault,
			onOK: function() {
				o("WAWebSocketModel").Socket.logout(a);
			},
			okText: r("WAWebFbtCommon")("OK"),
			okButtonType: r("gkx")("9092") ? "secondary" : "primary",
			buttonsDirection: "horizontal",
			extraButtonProps: r("gkx")("9092") ? {
				text: "Report a bug (internal)",
				onClick: function() {
					o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", {
						prefilledDescription: t,
						prefilledTitle: a == null ? "Unintended Logout" : "Unintended Logout: " + a
					});
				},
				type: "primary"
			} : null,
			children: n
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
