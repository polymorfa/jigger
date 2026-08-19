__d("WAWebCommunityLeaveErrorModals.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebText_DONOTUSE.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onOK;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.onOK;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: t,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.onOK;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.CommunityLeaveTryAgainLaterError = c, l.CommunityLeaveRetryError = d, l.CommunityLeaveStandardError = m;
}), 226);
