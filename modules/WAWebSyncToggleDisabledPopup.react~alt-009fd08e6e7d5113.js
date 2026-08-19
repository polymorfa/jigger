__d("WAWebSyncToggleDisabledPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebText.react",
	"react",
	"vulture"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onOK;
		r("vulture")("qS87KIAcwljjBJPgcwUNk6n165o=");
		var n = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: t,
			title: n,
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: a })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
