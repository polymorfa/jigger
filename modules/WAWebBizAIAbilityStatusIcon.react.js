__d("WAWebBizAIAbilityStatusIcon.react", [
	"WDSIconIcCheckCircleFilled.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		partiallyReady: {
			color: "xhslqc4",
			$$css: !0
		},
		ready: {
			color: "x1r8hjv8",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(2), n = e.status;
		if (n === "READY") {
			var a;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(r("WDSIconIcCheckCircleFilled.react"), { iconXstyle: u.ready }), t[0] = a) : a = t[0], a;
		}
		if (n === "PARTIALLY_READY") {
			var i;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(r("WDSIconIcCheckCircleFilled.react"), { iconXstyle: u.partiallyReady }), t[1] = i) : i = t[1], i;
		}
		return null;
	}
	l.default = c;
}), 98);
