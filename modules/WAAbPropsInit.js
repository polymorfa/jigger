__d("WAAbPropsInit", [
	"Promise",
	"WAAbProps",
	"WAAbPropsCache",
	"WAAbPropsConverters",
	"WAAbPropsToUI",
	"WAAbPropsTypes",
	"WABridge",
	"WAGetAbPropsApi",
	"WALogger",
	"WASetAbPropsApi",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d() {
		if (!c) throw r("err")("Trying to get hash before AbProps gets initialized");
		return (u || (u = n("Promise"))).resolve(c.getHash());
	}
	function m() {
		if (!c) throw r("err")("Trying to get refresh secs before AbProps gets initialized");
		return (u || (u = n("Promise"))).resolve(c.getRefreshSecs());
	}
	var p = {
		getAbProps: function() {
			if (!c) throw r("err")("Trying to read ABProps before they gets initialized");
			return (u || (u = n("Promise"))).resolve(c.readAll());
		},
		getHash: d,
		getRefreshSecs: m,
		setAbProps: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, n = o("WAAbPropsConverters").convertAbPropsDataToParsed(e);
				(t = c) == null || t.rewrite(n), yield o("WASetAbPropsApi").setAbProps(o("WAAbPropsConverters").convertAbPropsParsedToDbEntity(n)), _(n);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})()
	};
	function _(e) {
		if (e.propValues) {
			var t = o("WAAbPropsToUI").prepareAbPropsForUI(e.propValues);
			o("WABridge").getBridge().fireAndForget("event", "abPropsUpdated", { abProps: t });
		}
	}
	function f() {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Starting ABProps store"])));
			var t = yield o("WAGetAbPropsApi").getAbProps(), n = {};
			t && (n = o("WAAbPropsConverters").convertDbAbPropsToParsed(t)), c = new (o("WAAbPropsCache")).AbPropsCache(n), o("WAAbProps").startAbProps(p, o("WAAbPropsTypes").ABPropConfigs), _(n), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["ABProps inited"])));
		}), g.apply(this, arguments);
	}
	function h(e, t) {
		if (c == null) throw r("err")("Trying to override ABProp before they get initialized");
		var n = c;
		n.overrideAbProp(e, t), _(o("WAAbPropsConverters").convertAbPropsDataToParsed(n.readAll()));
	}
	function y(e) {
		return o("WAAbPropsTypes").ABPropConfigs[e][2];
	}
	function C() {
		if (!c) throw r("err")("Trying to read ABProps before they get initialized");
		return c.readAll();
	}
	function b(e) {
		if (!c) throw r("err")("Trying to read ABProp " + e + " before AbProps gets initialized");
		var t = c.getAbProp(e);
		return t != null ? t : y(e);
	}
	l.getHash = d, l.getRefreshSecs = m, l.initAbProps = f, l.overrideAbProp = h, l.getAbDefault = y, l.getAbProps = C, l.getAbProp = b;
}), 98);
