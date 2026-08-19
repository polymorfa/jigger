__d("WAWebWamWorkerInterface", ["WALogger", "WAWebWamStorage"], (function(t, n, r, o, a, i, l) {
	var e, s;
	async function u(t) {
		try {
			var n = "commit", a = t.$className, i = JSON.stringify(t.all);
			await r("WAWebWamStorage").storeWorkerWamData({
				action: n,
				name: a,
				payload: i
			});
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["wam sw commit failed, ", ""])), t);
		}
		return Promise.resolve();
	}
	function c(e, t) {
		try {
			var n = "set", a = e.name, i = JSON.stringify({ value: t });
			r("WAWebWamStorage").storeWorkerWamData({
				action: n,
				name: a,
				payload: i
			});
		} catch (e) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["wam set failed, ", ""])), e);
		}
	}
	l.commit = u, l.set = c;
}), 98);
