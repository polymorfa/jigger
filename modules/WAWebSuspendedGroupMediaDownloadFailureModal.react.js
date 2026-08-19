__d("WAWebSuspendedGroupMediaDownloadFailureModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
			surface: "unknown",
			viewName: "suspended-group-download-failure"
		}, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: t,
			onOK: o("WAWebModalManager").closeModalManager,
			title: s._(
				/*BTDS*/
				""
			),
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = n) : n = e[1], n;
	}
	l.default = c;
}), 226);
