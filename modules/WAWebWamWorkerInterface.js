__d("WAWebWamWorkerInterface", [
	"Promise",
	"WALogger",
	"WAWebWamStorage",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = "commit", a = e.$className, i = JSON.stringify(e.all);
				yield r("WAWebWamStorage").storeWorkerWamData({
					action: t,
					name: a,
					payload: i
				});
			} catch (e) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["wam sw commit failed, ", ""])), e);
			}
			return (u || (u = n("Promise"))).resolve();
		}), d.apply(this, arguments);
	}
	function m(t, n) {
		try {
			var a = "set", i = t.name, l = JSON.stringify({ value: n });
			r("WAWebWamStorage").storeWorkerWamData({
				action: a,
				name: i,
				payload: l
			});
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["wam set failed, ", ""])), t);
		}
	}
	l.commit = c, l.set = m;
}), 98);
