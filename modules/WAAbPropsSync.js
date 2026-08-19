__d("WAAbPropsSync", [
	"WAAbProps",
	"WAAbPropsHelpers",
	"WAGetAbPropsProtocol",
	"WALogger",
	"WAPromiseManagement",
	"WAResultOrError",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("WAPromiseManagement").cacheWhilePending(function() {
		return "abProps";
	}, m);
	function m(e) {
		var t = e.sendHash, n = t === void 0 ? !0 : t;
		return n == null || n === !1 ? p(null) : o("WAAbProps").getHash().then(function(e) {
			return p(e);
		});
	}
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield o("WAGetAbPropsProtocol").getAbPropsProtocol({ propsHash: t });
			if (!n.success) o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["fetchAbProps failed"])));
			else {
				var r = n.value, a = r.abKey, i = r.hash, l = r.props, u = r.refresh, c = o("WAAbPropsHelpers").parseAbProps(o("WAAbProps").getConfig(), l), d = yield f(a, i, u, c);
				d.success === !1 && (d.error, o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["syncAbProps: detected no hash"]))));
			}
			var m = yield o("WAAbProps").getRefreshSecs();
			return { seconds: m };
		}), _.apply(this, arguments);
	}
	function f(e, t, n, r) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a = yield o("WAAbProps").getAbProps(), i = {
				abKey: e != null ? e : a.abKey,
				hash: t != null ? t : a.hash,
				refresh: o("WAAbPropsHelpers").maybeUpdateRefresh(n),
				lastSyncTime: o("WATimeUtils").unixTime(),
				propValues: a.propValues,
				propExpoKeys: a.propExpoKeys,
				internalExpoKeys: a.internalExpoKeys,
				expoKeyStr: a.expoKeyStr
			};
			if (t == null) return yield o("WAAbProps").setAbProps(i), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAAbProps.update: detected no hash"]))), o("WAResultOrError").makeError("noHash");
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WAAbProps.update: updating ab configs"])));
			var l = r.expoKeys, s = r.values, d = o("WAAbPropsHelpers").maybeUpdatePropValues(s, a.propValues, o("WAAbProps").getConfig()), m = o("WAAbPropsHelpers").maybeUpdateExpoKeys(l, a.propExpoKeys, o("WAAbProps").getConfig()), p = m.expoKeysToDelete, _ = m.propExpoKeys, f, g, h = o("WAAbPropsHelpers").maybeUpdateInternalExpoKeys(p, a.internalExpoKeys);
			return h != null && (f = h.internalExpoKeys, g = h.expoKeyStr), yield o("WAAbProps").setAbProps(babelHelpers.extends({}, i, {
				propValues: d,
				propExpoKeys: _,
				internalExpoKeys: f,
				expoKeyStr: g
			})), o("WAResultOrError").makeResult();
		}), g.apply(this, arguments);
	}
	l.syncAbProps = d;
}), 98);
