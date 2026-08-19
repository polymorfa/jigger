__d("WAWebMexPlaygroundModal", [
	"WALogger",
	"WAWebKeyboardHotKeys.react",
	"WAWebMexRelayEnvironment",
	"asyncToGeneratorRuntime",
	"graphiql",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var r = t.onClose, a = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				try {
					var n = yield o("WAWebMexRelayEnvironment").sendMexIq(t);
					return n.result != null ? JSON.parse(n.result) : { iqError: n };
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[MEX] GraphiQL fetcher Error"]))).tags("GQL", "MEX");
				}
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})();
		return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: { escape: r },
			children: u.jsx("div", {
				className: "xtsfpqs xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d",
				children: u.jsx(o("graphiql").GraphiQL, { fetcher: a })
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
