__d("WAFlowsLabel.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsInstanceIdContext.react",
	"WDSNativeLabel.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s = ["ref"], u = ["ref"], c = ["ref"], d = ["ref"], m = ["ref"], p, _ = p || (p = o("react"));
	function f(t) {
		var n = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, e), a = o("WAFlowsEnvContext.react").useWAFlowsEnv(), i = a.env, l = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), s = l.flowInstanceId;
		return _.jsx(o("WDSNativeLabel.react").WDSLabel, babelHelpers.extends({}, r, {
			isRTL: i.isRTL,
			platform: i.platform,
			idOverrideFn: s,
			ref: n
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, s);
		return _.jsx(f, babelHelpers.extends({}, n, { ref: t }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, u), r = o("WAFlowsEnvContext.react").useWAFlowsEnv(), a = r.env, i = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), l = i.flowInstanceId;
		return _.jsx(o("WDSNativeLabel.react").WDSLabelSmall, babelHelpers.extends({}, n, {
			isRTL: a.isRTL,
			platform: a.platform,
			idOverrideFn: l,
			ref: t
		}));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, c);
		return _.jsx(h, babelHelpers.extends({}, n, { ref: t }));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, d), r = o("WAFlowsEnvContext.react").useWAFlowsEnv(), a = r.env, i = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), l = i.flowInstanceId;
		return _.jsx(o("WDSNativeLabel.react").WDSLabelCaption, babelHelpers.extends({}, n, {
			isRTL: a.isRTL,
			platform: a.platform,
			idOverrideFn: l,
			ref: t
		}));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, m);
		return _.jsx(C, babelHelpers.extends({}, n, { ref: t }));
	}
	b.displayName = b.name + " [from " + i.id + "]", l.WAFlowsLabel = g, l.WAFlowsLabelSmall = y, l.WAFlowsLabelCaption = b;
}), 98);
