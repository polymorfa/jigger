__d("WAWebBizAIDownloadDataPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(3), t, n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), n = s._(
			/*BTDS*/
			""
		), e[0] = t, e[1] = n) : (t = e[0], n = e[1]);
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "biz_ai_download_data_popup",
			title: t,
			okText: n,
			onOK: o("WAWebModalManager").closeModalManager,
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), e[2] = a) : a = e[2], a;
	}
	l.default = c;
}), 226);
