__d("WAWebMembersRemovedAlert.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebLinkJoinedMembersUtils",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.groupMetadata, r = e.messageTimestamp, a = function() {
			o("WAWebLinkJoinedMembersUtils").openGroupPermissionsDrawer(t, n);
		}, i = r != null ? (function() {
			var e = o("WAWebLinkJoinedMembersUtils").calculateTimeRange(r), t = e.endTime, n = e.startTime;
			return o("WAWebLinkJoinedMembersUtils").formatJoinTimeRange(n, t);
		})() : null;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "members-removed-alert"
			},
			title: s._(
				/*BTDS*/
				""
			),
			onOK: a,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: i != null ? s._(
				/*BTDS*/
				"",
				[s._param("timeRange", i)]
			) : s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e, t, n) {
		o("WAWebModalManager").ModalManager.open(u.jsx(c, {
			chat: e,
			groupMetadata: t,
			messageTimestamp: n
		}));
	}
	l.openMembersRemovedAlert = d;
}), 226);
