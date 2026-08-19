__d("WAWebStopSyncContactToAddressbookPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onCancel, n = e.onOK, a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: r("WAWebFbtCommon")("Continue"),
			onOK: n,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onCancel: t,
			title: a,
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: i })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
