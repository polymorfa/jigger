__d("WAWebLongLinkPop.react", [
	"fbt",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebWamEnumUrlStatusClicked",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = function() {
		o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.closeLongLinkModal(!0);
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(12), n = e.link, r = e.statusItemViewEventRef, a;
		t[0] !== n.href || t[1] !== r ? (a = function() {
			(r == null ? void 0 : r.current) != null && (r.current.urlStatusClicked = o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED.TWO_CLICKS), o("WAWebModalManager").ModalManager.close(), o("WAWebExternalLink.react").openExternalLink(n.href);
		}, t[0] = n.href, t[1] = r, t[2] = a) : a = t[2];
		var i = a, l, d, m, p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			surface: "unknown",
			viewName: "long-link"
		}, d = s._(
			/*BTDS*/
			""
		), m = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		), t[3] = l, t[4] = d, t[5] = m, t[6] = p) : (l = t[3], d = t[4], m = t[5], p = t[6]);
		var _;
		t[7] !== n.href ? (_ = u.jsx("div", { children: n.href }), t[7] = n.href, t[8] = _) : _ = t[8];
		var f;
		return t[9] !== i || t[10] !== _ ? (f = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: l,
			title: d,
			okText: m,
			cancelText: p,
			onOK: i,
			onCancel: c,
			type: o("WAWebModal.react").ModalTheme.LinkPopup,
			children: _
		}), t[9] = i, t[10] = _, t[11] = f) : f = t[11], f;
	}
	l.default = d;
}), 226);
