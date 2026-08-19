__d("WAGetCurrentUserDeviceList", [
	"WAAssertUnreachable",
	"WAGlobals",
	"WAJids",
	"WALogger",
	"WAPersistedJobManager",
	"WASignalKeys",
	"WASmaxDevicesFetchSelfRPC",
	"WATimeUtils",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		if (t.isCurrentDevice && n.isCurrentDevice) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Two devices were detected as isCurrentDevice in getCurrentUserDeviceList"]))), 0;
		if (t.isCurrentDevice) return -1;
		if (n.isCurrentDevice) return 1;
		if (t.lastSeen != null && n.lastSeen == null) return -1;
		if (t.lastSeen == null && n.lastSeen != null) return 1;
		if (t.lastSeen != null && n.lastSeen != null) {
			var r = t.lastSeen, a = n.lastSeen;
			return a.getTime() - r.getTime();
		}
		return 0;
	}
	async function u() {
		var e = await o("WASmaxDevicesFetchSelfRPC").sendFetchSelfRPC();
		switch (e.name) {
			case "FetchSelfResponseError": {
				var t = e.value.errorRetryableIQErrorOrNonRetryableIQErrorRetryableIQErrorMixinGroup;
				switch (t.name) {
					case "RetryableIQError": {
						var n = t.value.backoff;
						throw n != null ? new (o("WAPersistedJobManager")).RetryOnBackoff({
							algo: {
								delay: n,
								type: "constant"
							},
							jitter: 0
						}) : new (o("WAPersistedJobManager")).RetryOnBackoff({
							algo: {
								first: o("WATimeUtils").HOUR_MILLISECONDS / 60,
								type: "exponential"
							},
							jitter: .1
						});
					}
					default: {
						t.name;
						var a = t.value.code;
						throw r("err")("Failed with an error code " + a);
					}
				}
			}
			case "FetchSelfResponseSuccess": {
				var i = o("WAJids").extractDeviceId(o("WAGlobals").getMyDeviceJid());
				return e.value.selfDevice.map(function(e) {
					var t, n, r, a, l, s = e.creation, u = e.elementValue, c = e.id, d = e.ip, m = e.location, p = e.manufacturer, _ = e.model, f = e.platform, g = e.seen;
					return {
						creationTime: s == null ? null : o("WATimeUtils").toDate(o("WATimeUtils").castToUnixTime(s.elementValue)),
						id: o("WAJids").interpretAsDeviceId(c),
						identityKey: o("WASignalKeys").serializeIdentity(u),
						ipAddress: (t = d == null ? void 0 : d.elementValue) != null ? t : null,
						isCurrentDevice: c === i,
						lastSeen: g == null ? null : o("WATimeUtils").toDate(o("WATimeUtils").castToUnixTime(g.elementValue)),
						latitude: m == null ? null : parseFloat(m.latitude),
						location: (n = m == null ? void 0 : m.elementValue) != null ? n : null,
						longitude: m == null ? null : parseFloat(m.longitude),
						manufacturer: (r = p == null ? void 0 : p.elementValue) != null ? r : null,
						model: (a = _ == null ? void 0 : _.elementValue) != null ? a : null,
						platform: (l = f == null ? void 0 : f.elementValue) != null ? l : null
					};
				}).sort(s);
			}
			default: return r("WAAssertUnreachable")(e.name);
		}
	}
	l.getCurrentUserDeviceList = u;
}), 98);
