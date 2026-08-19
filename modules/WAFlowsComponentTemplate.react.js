__d("WAFlowsComponentTemplate.react", [
	"invariant",
	"WAFlowsComponentLibrary",
	"WAFlowsComponentWrapper.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsStateParser",
	"WAFlowsStateProvider.react",
	"react",
	"useDeepEqualMemo"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["type", "visible"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useState, f = new Set([
		"Form",
		"If",
		"Switch"
	]);
	function g(t) {
		var n, a = t.component, i = t.hasTextPredecessor, l = t.screenID, u = _(), d = u[0], g = u[1], h = _(), y = h[0], C = h[1], b = p(function() {
			return d != null ? d : {};
		}, [d]), v = b.Component, S = b.SCHEMA, R = b.TYPE, L = o("WAFlowsStateProvider.react").useWAFlowsMeta(), E = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), k = (n = E.flowInitData[0]) == null ? void 0 : n.environment.flow_json, I = p(function() {
			return k != null && k !== "" ? Math.floor(Math.random() * 1e3) : 0;
		}, [k]), T = o("WAFlowsStateParser").usePropertyValues(l, a, L), D = T.type, x = T.visible, $ = x === void 0 ? !0 : x, P = babelHelpers.objectWithoutPropertiesLoose(T, e), N = function(t) {
			t || s(0, 86043);
		};
		m(function() {
			C(null);
			var e = L.getVersion();
			e != null && (d || o("WAFlowsComponentLibrary").getComponentDefinitionLazyLoad(D, e).then(function(e) {
				g(e), N(e == null ? void 0 : e.Component);
			}).catch(function(e) {
				C(function() {
					throw e;
				});
			}));
		}, [
			L,
			D,
			d
		]);
		var M = f.has(D) ? {} : { visible: $ }, w = r("useDeepEqualMemo")(babelHelpers.extends({}, M, P, { version: L.getVersion() })), A = p(function() {
			return v == null || S == null || R == null ? v : o("WAFlowsComponentWrapper.react").withSchemaValidation(v, R, S, i, I);
		}, [
			v,
			S,
			R,
			i,
			I
		]);
		return A ? c.jsx(A, babelHelpers.extends({}, w)) : null;
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
