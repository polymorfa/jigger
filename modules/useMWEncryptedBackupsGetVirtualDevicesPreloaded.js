__d("useMWEncryptedBackupsGetVirtualDevicesPreloaded", [
	"CometRelay",
	"react",
	"react-compiler-runtime",
	"useMWEncryptedBackupsGetVirtualDevicesPreloaded_xfbEncryptedBackup.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (s || (s = o("react"))).useCallback;
	function c(t) {
		var r = o("react-compiler-runtime").c(4), a = t.encryptedBackup, i = o("CometRelay").useFragment(e !== void 0 ? e : e = n("useMWEncryptedBackupsGetVirtualDevicesPreloaded_xfbEncryptedBackup.graphql"), a), l;
		r[0] !== (i == null ? void 0 : i.virtual_devices) ? (l = function() {
			var e = 0, t = null;
			return i == null || i.virtual_devices.forEach(function(n) {
				e: switch (n.device_type) {
					case "HSM": {
						t = n.client_generated_id;
						break e;
					}
					case "OFFLINE": {
						e = e + 1;
						break e;
					}
					default:
				}
			}), {
				offlineDevicesCount: e,
				vestaClientID: t
			};
		}, r[0] = i == null ? void 0 : i.virtual_devices, r[1] = l) : l = r[1], i == null || i.virtual_devices;
		var s = l, u;
		return r[2] !== s ? (u = { getVirtualDevices: s }, r[2] = s, r[3] = u) : u = r[3], u;
	}
	l.default = c;
}), 98);
