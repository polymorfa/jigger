__d("WAWebMembersRemovedAlert.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebLinkJoinedMembersUtils",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(14), n = e.chat, r = e.groupMetadata, a = e.messageTimestamp, i;
		t[0] !== n || t[1] !== r ? (i = function() {
			o("WAWebLinkJoinedMembersUtils").openGroupPermissionsDrawer(n, r);
		}, t[0] = n, t[1] = r, t[2] = i) : i = t[2];
		var l = i, c;
		t[3] !== a ? (c = a != null ? (function() {
			var e = o("WAWebLinkJoinedMembersUtils").calculateTimeRange(a), t = e.endTime, n = e.startTime;
			return o("WAWebLinkJoinedMembersUtils").formatJoinTimeRange(n, t);
		})() : null, t[3] = a, t[4] = c) : c = t[4];
		var d = c, m, p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = {
			surface: "unknown",
			viewName: "members-removed-alert"
		}, p = s._(
			/*BTDS*/
			""
		), t[5] = m, t[6] = p) : (m = t[5], p = t[6]);
		var _;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[7] = _) : _ = t[7];
		var f;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[8] = f) : f = t[8];
		var g;
		t[9] !== d ? (g = d != null ? s._(
			/*BTDS*/
			"",
			[s._param("timeRange", d)]
		) : s._(
			/*BTDS*/
			""
		), t[9] = d, t[10] = g) : g = t[10];
		var h;
		return t[11] !== l || t[12] !== g ? (h = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: m,
			title: p,
			onOK: l,
			okText: _,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: f,
			children: g
		}), t[11] = l, t[12] = g, t[13] = h) : h = t[13], h;
	}
	function d(e, t, n) {
		o("WAWebModalManager").ModalManager.open(u.jsx(c, {
			chat: e,
			groupMetadata: t,
			messageTimestamp: n
		}));
	}
	l.openMembersRemovedAlert = d;
}), 226);
