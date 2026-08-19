__d("useLabyrinthLogging", [
	"EncryptedBackupsSupportedPlatformUtils",
	"MWEBODSCategory",
	"MWEBODSEntityKey.enum",
	"MWEncryptedBackupsDeviceRegistrationId",
	"ODS",
	"QPLEvent",
	"QPLUserFlow",
	"QuickPerformanceLogger",
	"WebSession",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (c || (c = o("react"))).useCallback;
	function m() {
		var t = o("react-compiler-runtime").c(7), n = o("EncryptedBackupsSupportedPlatformUtils").useMWEncryptedBackupsGetCurrentSupportedPlatform(), a;
		t[0] !== n ? (a = function(a) {
			var t = a.additionalAnnotations, i = a.event, l = a.instanceKey, u = a.odsEntityName, c = a.source, d = l === void 0 ? 0 : l;
			if (!(e || (e = r("QuickPerformanceLogger"))).isMarkerOn(i, d)) {
				u && (s || (s = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), u, r("MWEBODSEntityKey.enum").START);
				var m = o("MWEncryptedBackupsDeviceRegistrationId").getDeviceRegistrationId(), p = {
					deviceRegistrationId: m,
					platform: n,
					sessionTabId: o("WebSession").getId(),
					source: c != null ? c : void 0
				};
				r("QPLUserFlow").start(i, {
					annotations: { string: babelHelpers.extends({}, t, p) },
					instanceKey: d
				});
			}
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] !== n ? (l = function(t) {
			var e = t.additionalAnnotations, a = t.event, i = t.marker, l = t.odsEntityName;
			if (!r("QPLUserFlow").getActiveFlowIDs().includes((u || (u = o("QPLEvent"))).getMarkerId(a))) {
				l && (s || (s = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), l, r("MWEBODSEntityKey.enum").START);
				var c = {
					platform: n,
					sessionTabId: o("WebSession").getId()
				};
				r("QPLUserFlow").start(a, { annotations: { string: babelHelpers.extends({}, e, c) } });
			}
			r("QPLUserFlow").addPoint(a, i);
		}, t[2] = n, t[3] = l) : l = t[3];
		var c = l, d;
		return t[4] !== c || t[5] !== i ? (d = {
			addMarkerAndStartFlowIfNotActive: c,
			startFlow: i
		}, t[4] = c, t[5] = i, t[6] = d) : d = t[6], d;
	}
	l.useLabyrinthLoggingFlow = m;
}), 98);
