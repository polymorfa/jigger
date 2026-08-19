__d("WAFetchFbDevicesProtocolV2", [
	"Promise",
	"WAArrayChunk",
	"WAJids",
	"WALoadContactsApi",
	"WARPCAbortController",
	"WASignalKeys",
	"WASmaxDevicesFetchRPC",
	"WATagsLogger",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = 25, d = 1e4, m = o("WATagsLogger").TAGS(["wa-devices-protocol"]);
	function p(e, t) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			if (e.length === 0) return new Map();
			var r = yield f(e, t), a = o("WAArrayChunk").chunk(e.map(function(e) {
				var t = r.get(e), n = t != null ? { anyDhash: t } : null;
				return {
					userJid: e,
					dhashMixinArgs: n
				};
			}), c), i = new Map();
			return yield (u || (u = n("Promise"))).allSettled(a.map(function(e) {
				return h(i, e);
			})), i;
		}), _.apply(this, arguments);
	}
	function f(e, t) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			if (t) return new Map();
			var n = yield o("WALoadContactsApi").loadContacts(e), r = new Map();
			return n.forEach(function(e) {
				e && e.dhash != null && r.set(e.contactJid, e.dhash);
			}), r;
		}), g.apply(this, arguments);
	}
	function h(e, t) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			try {
				var a = new Set(n.map(function(e) {
					return e.userJid;
				})), i = yield o("WARPCAbortController").rpcAbortController(o("WASmaxDevicesFetchRPC").sendFetchRPC({ userArgs: n }), d);
				if (i.name === "FetchResponseError") throw r("err")("Failed to fetch user devices");
				i.value.usersUser.map(function(e) {
					var n = e.userResponseFetchFailureOrFetchSuccessMixinGroup;
					if (n.name !== "FetchUserResponseFailure") {
						var r = n.value, i = r.devices, l = r.jid;
						a.delete(l), t.set(l, {
							newState: C(l, i, o("WATimeUtils").unixTime()),
							stateIsUpToDate: !1
						});
					}
				}), a.forEach(function(e) {
					t.set(e, { stateIsUpToDate: !0 });
				});
			} catch (t) {
				if (t === o("WARPCAbortController").RPC_TIMEOUT) {
					m.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Timeout for fetchAndSaveDevices"])));
					return;
				}
				m.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])), t);
			}
		}), y.apply(this, arguments);
	}
	function C(e, t, n) {
		n === void 0 && (n = null);
		var r = [], a = null;
		if (t) {
			var i;
			r = t.device.map(function(e) {
				var t, n;
				return {
					id: o("WAJids").interpretAsDeviceId(e.id),
					identity: o("WASignalKeys").serializeIdentity(e.elementValue),
					platform: (t = e.deviceModelInfoMixin) == null || (t = t.platform) == null ? void 0 : t.elementValue,
					model: (n = e.deviceModelInfoMixin) == null || (n = n.model) == null ? void 0 : n.elementValue
				};
			}), a = (i = t.dhashMixin) == null ? void 0 : i.dhash;
		}
		return {
			jid: e,
			devices: r,
			lastSyncTs: o("WATimeUtils").unixTime(),
			dhash: a,
			notificationTs: n
		};
	}
	l.fetchFbDevicesProtocol = p;
}), 98);
