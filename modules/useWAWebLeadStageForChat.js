__d("useWAWebLeadStageForChat", [
	"WAWebGetLeadStageByChatJidJob",
	"WAWebLeadStage",
	"WAWebLeadSublistChangeNotifier",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e, t) {
		var a = o("react-compiler-runtime").c(13), i = c(0), l = i[0], s = i[1], d, p;
		a[0] !== t ? (d = function() {
			if (t) return o("WAWebLeadSublistChangeNotifier").subscribeToLeadSublistChanges(function() {
				return s(m);
			});
		}, p = [t], a[0] = t, a[1] = d, a[2] = p) : (d = a[1], p = a[2]), u(d, p);
		var _;
		a[3] !== e ? (_ = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return o("WAWebGetLeadStageByChatJidJob").getLeadStageByChatJidJob({ chatJid: e });
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), a[3] = e, a[4] = _) : _ = a[4];
		var f;
		a[5] !== e || a[6] !== l ? (f = [e, l], a[5] = e, a[6] = l, a[7] = f) : f = a[7];
		var g = r("useWAWebAsync")(_, f, t), h = g.error, y = g.loading, C = g.value;
		if (!t || y || h != null) {
			var b;
			return a[8] === Symbol.for("react.memo_cache_sentinel") ? (b = {
				stage: null,
				isResolved: !1
			}, a[8] = b) : b = a[8], b;
		}
		var v;
		a[9] !== C ? (v = C != null ? o("WAWebLeadStage").getLeadStageFromNumber(C) : null, a[9] = C, a[10] = v) : v = a[10];
		var S;
		return a[11] !== v ? (S = {
			stage: v,
			isResolved: !0
		}, a[11] = v, a[12] = S) : S = a[12], S;
	}
	function m(e) {
		return e + 1;
	}
	l.default = d;
}), 98);
