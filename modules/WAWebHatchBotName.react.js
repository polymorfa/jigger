__d("WAWebHatchBotName.react", [
	"WAWebBotUtils",
	"WAWebContactCollection",
	"WAWebName.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebName.react").Name, {
			contact: o("WAWebContactCollection").ContactCollection.gadd(o("WAWebBotUtils").HATCH_BOT_FBID_WID),
			skipCheckMark: !0
		}), e[0] = t) : t = e[0], t;
	}
	l.default = u;
}), 98);
