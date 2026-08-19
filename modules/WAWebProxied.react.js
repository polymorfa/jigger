__d("WAWebProxied.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
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
		var r;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			cover: !0,
			title: t,
			okText: n,
			onOK: d,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[2] = r) : r = e[2], r;
	}
	function d() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getCannotConnectFaqUrl());
	}
	l.default = c;
}), 226);
