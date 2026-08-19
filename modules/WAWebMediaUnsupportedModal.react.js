__d("WAWebMediaUnsupportedModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtAppName",
	"WAWebFileSaver",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.msg, r;
		t[0] !== n ? (r = function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebFileSaver").FileSaver.initDownload(n);
		}, t[0] = n, t[1] = r) : r = t[1];
		var a = r, i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			surface: "unknown",
			viewName: "media-unsupported"
		}, t[2] = i) : i = t[2];
		var l, c, d, m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), c = s._(
			/*BTDS*/
			""
		), d = s._(
			/*BTDS*/
			""
		), m = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(o("WAWebFbtAppName").WAWebAppShortName, { children: s._(
				/*BTDS*/
				""
			) }))]
		), t[3] = l, t[4] = c, t[5] = d, t[6] = m) : (l = t[3], c = t[4], d = t[5], m = t[6]);
		var p;
		return t[7] !== a ? (p = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: i,
			onCancel: o("WAWebModalManager").closeModalManager,
			onOK: a,
			okText: l,
			cancelText: c,
			title: d,
			children: m
		}), t[7] = a, t[8] = p) : p = t[8], p;
	}
	l.default = c;
}), 226);
