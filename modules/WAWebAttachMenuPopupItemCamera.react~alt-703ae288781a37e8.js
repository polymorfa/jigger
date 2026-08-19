__d("WAWebAttachMenuPopupItemCamera.react", [
	"fbt",
	"WAWebAttachmentMenuLogger",
	"WDSIconIcPhotoCameraFilled.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { refreshedIcon: {
		color: "xvzgjlx",
		$$css: !0
	} };
	function d(e) {
		var t = e.chat, n = e.onCaptureClick, a = function() {
			n(), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA);
		};
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-camera",
			onPress: a,
			Icon: r("WDSIconIcPhotoCameraFilled.react"),
			iconXstyle: c.refreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
