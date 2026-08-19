__d("WAWebProductGallery.react", [
	"fbt",
	"Promise",
	"WAWebMessageGallery.react",
	"react",
	"useWAWebUiIdle"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["chat", "productMsgs"], u, c, d = c || (c = o("react"));
	function m(t) {
		var o = t.chat, a = t.productMsgs, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = [
			"add",
			"remove",
			"reset",
			"products_loaded"
		], c = r("useWAWebUiIdle")(), m = function(t) {
			return c(function() {
				a.queryProducts(o, t);
			});
		};
		return d.jsx(r("WAWebMessageGallery.react"), babelHelpers.extends({
			msgsCollection: a,
			msgsCollectionUpdateEvents: l,
			queryCollection: m,
			getHasBefore: function() {
				return a.hasProductBefore;
			},
			getQueryBefore: function() {
				return a.hasProductBefore ? (u || (u = n("Promise"))).resolve() : null;
			},
			emptyText: s._(
				/*BTDS*/
				""
			),
			chat: o
		}, i));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
