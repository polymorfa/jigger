__d("WAWebDeviceCapabilitiesBootstrap", [
	"WALogger",
	"WAWebABProps",
	"WAWebBizBroadcastsDeviceCapability",
	"WAWebBotGating",
	"WAWebDeviceCapabilitiesSync",
	"WAWebDeviceCapabilitiesV2Sync",
	"WAWebPrimaryDeviceCapabilities",
	"WAWebProtobufsDeviceCapabilities.pb",
	"WAWebUserPrefsDeviceCapabilities",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = !1;
	async function c() {
		if (!u) {
			u = !0;
			var t = {
				chatLockSupportLevel: o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$ChatLockSupportLevel.FULL,
				aiThread: { supportLevel: o("WAWebBotGating").isAiThreadCapabilityEnabled() ? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.INFRA : o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.NONE }
			}, n = o("WAWebUserPrefsDeviceCapabilities").mergeDeviceCapabilitiesToStorage(t, "self");
			if (await o("WAWebBizBroadcastsDeviceCapability").bootstrapBizBroadcastPrimaryCapability(), await d(), await r("WAWebDeviceCapabilitiesSync").sendMutation(n), o("WAWebABProps").getABPropConfigValue("device_capabilities_v2_sync_enabled")) try {
				await r("WAWebDeviceCapabilitiesV2Sync").sendMutation(n);
			} catch (t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[bootstrapDeviceCapabilities] v2 dual-write failed; v1 record is unaffected"]))).catching(r("getErrorSafe")(t));
			}
		}
	}
	async function d() {
		var e = await o("WAWebPrimaryDeviceCapabilities").getPrimaryDeviceCapabilities();
		if (e == null) {
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[bootstrapPrimaryDeviceCapabilities] primary caps null"])));
			return;
		}
		var t = o("WAWebUserPrefsDeviceCapabilities").mapProtobufToAllDeviceCapabilities(e);
		o("WAWebUserPrefsDeviceCapabilities").mergeDeviceCapabilitiesToStorage(t, "primary");
	}
	l.bootstrapDeviceCapabilities = c;
}), 98);
