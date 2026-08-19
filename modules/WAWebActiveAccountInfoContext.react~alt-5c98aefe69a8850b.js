__d("WAWebActiveAccountInfoContext.react", [
	"FBLogger",
	"WALogger",
	"WAWebLinkedAccountsJob",
	"WAWebMobilePlatforms",
	"err",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useSyncExternalStore, p, _ = new Set();
	function f(e) {
		return _.add(e), function() {
			_.delete(e);
		};
	}
	function g() {
		_.forEach(function(e) {
			return e();
		});
	}
	function h(e) {
		p = e, g();
	}
	function y() {
		return p;
	}
	function C(t) {
		var n = t.children;
		return d(function() {
			if (o("WAWebMobilePlatforms").isSMB()) {
				var t = new AbortController();
				return o("WAWebLinkedAccountsJob").queryActiveLinkedAccountInfo(t.signal).then(function(e) {
					t.signal.aborted || h(e);
				}).catch(function(n) {
					if (!t.signal.aborted) {
						o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebActiveAccountInfoContext: linked accounts fetch failed"])));
						var a = n instanceof Error ? n : r("err")(String(n));
						r("FBLogger")("wa_ctwa_web").catching(a).mustfix("ActiveAccountInfoProvider: linked accounts fetch failed — entry points may be hidden");
					}
				}), function() {
					return t.abort();
				};
			}
		}, []), n;
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return m(f, y);
	}
	l.setActiveAccountInfo = h, l.getActiveAccountInfo = y, l.ActiveAccountInfoProvider = C, l.useActiveAccountInfo = b;
}), 98);
