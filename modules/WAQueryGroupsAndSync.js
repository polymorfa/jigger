__d("WAQueryGroupsAndSync", [
	"FBLogger",
	"Promise",
	"WACreateGroup",
	"WAGetDevices",
	"WAGlobals",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			if (n === void 0 && (n = !1), t != null) {
				if (t.type === "all") {
					r("FBLogger")("wmi").MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["queryGroupsAndSync: unsupported input type: all"])));
					return;
				}
				var o = t.groups;
				if (o == null || o.length === 0) {
					r("FBLogger")("wmi").MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["queryGroupsAndSync: empty groups list"])));
					return;
				}
				yield m({
					groupJids: o,
					ignoreDhash: n
				});
			}
		}), d.apply(this, arguments);
	}
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.groupJids, n = e.ignoreDhash, r = n === void 0 ? !1 : n, a = yield _({ groupJids: t });
			if (a.length !== 0) {
				yield o("WACreateGroup").createGroups(a.map(function(e) {
					return {
						groupStatus: "queried",
						groupToCreate: e,
						serverTs: o("WATimeUtils").unixTime(),
						extras: void 0,
						folder: void 0,
						key: void 0
					};
				}));
				var i = g(a);
				i.size !== 0 && (yield o("WAGetDevices").getDevices({
					users: i,
					reason: "query-groups",
					ignoreDhash: r
				}));
			}
		}), p.apply(this, arguments);
	}
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.groupJids, r = yield (u || (u = n("Promise"))).all(t.map(function(e) {
				return o("WAGlobals").getDependencies().queryGroup({ groupJid: e });
			})), a = [];
			for (var i of r) i.success && a.push(i.value);
			return a;
		}), f.apply(this, arguments);
	}
	function g(e) {
		var t = new Set();
		for (var n of e) for (var r of n.participants) r.success ? t.add(r.value.user) : t.add(r.error.user);
		return t;
	}
	l.queryGroupsLegacyWAAPI = c, l.queryGroupsAndSync = m;
}), 98);
