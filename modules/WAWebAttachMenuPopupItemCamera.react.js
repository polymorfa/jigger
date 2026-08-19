__d("WAWebAttachMenuPopupItemCamera.react", [
	"fbt",
	"WAWebAttachmentMenuLogger",
	"WDSIconIcPhotoCameraFilled.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { refreshedIcon: {
		color: "xvzgjlx",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.chat, a = e.onCaptureClick, i;
		t[0] !== n || t[1] !== a ? (i = function() {
			a(), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA);
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[3] = d) : d = t[3];
		var m;
		return t[4] !== l ? (m = u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-camera",
			onPress: l,
			Icon: r("WDSIconIcPhotoCameraFilled.react"),
			iconXstyle: c.refreshedIcon,
			title: d
		}), t[4] = l, t[5] = m) : m = t[5], m;
	}
	l.default = d;
}), 226);
