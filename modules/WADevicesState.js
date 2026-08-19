__d("WADevicesState", [
	"Promise",
	"WAFetchAndSaveDevices",
	"WAFetchFbDevicesProtocolV2",
	"WAResolvable",
	"WAResultOrError",
	"WATagsLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = 3e4, p = 1e3 * 60 * 60, _ = o("WATagsLogger").TAGS(["WADevicesState"]), f = (function() {
		function t() {
			this.$1 = new Map();
		}
		var r = t.prototype;
		return r.$2 = function(t) {
			var e = this;
			setTimeout(function() {
				t.forEach(function(t) {
					var n = t[0], r = t[1];
					r.resolveWasCalled() || (r.resolve(o("WAResultOrError").makeError()), e.$1.get(n) === r && e.$1.delete(n));
				});
			}, m), setTimeout(function() {
				t.forEach(function(t) {
					var n = t[0], r = t[1];
					e.$1.get(n) === r && e.$1.delete(n);
				});
			}, p);
		}, r.waitForUserDevices = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
				var i = this;
				a === void 0 && (a = !1);
				var l = [], m = [];
				a === !0 && t.forEach(function(e) {
					i.$1.delete(e);
				}), t.forEach(function(e) {
					var t = i.$1.get(e);
					if (t == null) {
						var n = new (o("WAResolvable")).Resolvable();
						l.push([e, n]), i.$1.set(e, n);
					} else m.push([e, t.promise]);
				}), this.$2(l), _.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"getDevices called for users ",
					", reason: ",
					""
				])), Array.from(t), r);
				var p = yield o("WAFetchFbDevicesProtocolV2").fetchFbDevicesProtocol(l.map(function(e) {
					var t = e[0];
					return t;
				}), a).catch(function(e) {
					return _.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["fetchFBDevicesProtocol failed: ", ""])), e), new Map();
				}), f = !0;
				_.DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["getDevices -> update devices signal"]))), yield o("WAFetchAndSaveDevices").updateUsersDevicesSignalAndDB(Array.from(p.values()).map(function(e) {
					return e.newState;
				}).filter(Boolean)).catch(function(e) {
					f = !1, _.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["updateDevicesSignalAndDB failed: ", ""])), e);
				}), l.forEach(function(e) {
					var t = e[0], n = e[1];
					if (!f) {
						n.resolve(o("WAResultOrError").makeError()), i.$1.delete(t);
						return;
					}
					p.has(t) ? n.resolve(o("WAResultOrError").makeResult()) : (n.resolve(o("WAResultOrError").makeError()), i.$1.delete(t));
				}), yield (d || (d = n("Promise"))).allSettled(m.map(function(e) {
					var t = e[0], n = e[1];
					return n;
				}));
			});
			function r(e, n, r) {
				return t.apply(this, arguments);
			}
			return r;
		})(), r.reset = function(t) {
			var e = this;
			t.forEach(function(t) {
				return e.$1.delete(t);
			});
		}, t;
	})(), g = new f();
	function h() {
		return g;
	}
	l.DeviceStateClassV2 = f, l.getDevicesState = h;
}), 98);
