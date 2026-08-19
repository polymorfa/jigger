__d("WAWebDeviceCapabilitiesSyncBase", [
	"WALogger",
	"WATimeUtils",
	"WAWebBackendApi",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebMobilePlatforms",
	"WAWebProtobufSyncAction.pb",
	"WAWebProtobufsDeviceCapabilities.pb",
	"WAWebProtobufsServerSync.pb",
	"WAWebSyncdAction",
	"WAWebSyncdActionUtils",
	"WAWebSyncdConst",
	"WAWebSyncdCoreApi",
	"WAWebSyncdDb",
	"WAWebUserPrefsDeviceCapabilities",
	"WAWebWorkerSafeBackendApi",
	"decodeProtobuf",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = "0", c = 1;
	function d(e) {
		var t = e.indexOf(":"), n = e.indexOf("@");
		return t === -1 || n === -1 || t >= n ? null : e.substring(t + 1, n);
	}
	var m = (function(t) {
		function n() {
			for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
			return e = t.call.apply(t, [this].concat(r)) || this, e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow, babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
		}
		babelHelpers.inheritsLoose(n, t);
		var a = n.prototype;
		return a.getVersion = function() {
			return 7;
		}, a.getAction = function() {
			throw r("err")("DeviceCapabilitiesSyncBase.getAction must be overridden by a subclass");
		}, a.getJidIndex = function() {
			throw r("err")("DeviceCapabilitiesSyncBase.getJidIndex must be overridden by a subclass");
		}, a.getValueField = function() {
			return "deviceCapabilities";
		}, a.getCapabilitiesFromValue = function(t) {
			return this.getValueField() === "deviceCapabilitiesV2" ? t == null ? void 0 : t.deviceCapabilitiesV2 : t == null ? void 0 : t.deviceCapabilities;
		}, a.capabilitiesHaveChanged = async function(t) {
			var e = this, n = await o("WAWebSyncdDb").getSyncActionsRows(["index"], [t.index]), r = n.reduce(function(t, n) {
				if (n.actionState === o("WAWebSyncdConst").SyncActionState.Success) {
					var r = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, n.binarySyncData), a = r.value, i = e.getCapabilitiesFromValue(a);
					if (i) return i;
				}
			}, {}), a = this.getCapabilitiesFromValue(o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, t.binarySyncAction));
			return {
				hasChanged: JSON.stringify(r) !== JSON.stringify(a),
				currentCapabilities: r,
				newCapabilities: a
			};
		}, a.applyMutations = async function(n) {
			var t = this, r = 0, a = n.map(function(e) {
				if (e.operation === "set") {
					var n = t.getCapabilitiesFromValue(e.value);
					if (n != null) {
						var a = e.indexParts[c], i = a != null ? d(a) : null;
						if (i === u) {
							var l, s = o("WAWebUserPrefsDeviceCapabilities").mapProtobufToAllDeviceCapabilities(n);
							o("WAWebUserPrefsDeviceCapabilities").mergeDeviceCapabilitiesToStorage(s, "primary"), r++;
							var m = (l = s.aiThread) == null ? void 0 : l.supportLevel;
							if ((m === o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.INFRA || m === o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.FULL) && o("WAWebBackendApi").frontendFireAndForget("initializeMetaAiBotAiThreads", {}), o("WAWebMobilePlatforms").isSMB()) {
								var p = n.businessBroadcast, _ = !!(p != null && p.companionSupportEnabled) && !!(p != null && p.campaignSyncEnabled), f = o("WAWebBizBroadcastDeviceCapabilityCommon").getPrimarySupportsBusinessBroadcast();
								_ !== f && (o("WAWebBizBroadcastDeviceCapabilityCommon").saveBizBroadcastCapabilityToStorage(_), _ && o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("loadQuickPromotions", { trigger: "prefetch" })), o("WAWebBizBroadcastDeviceCapabilityCommon").saveBizBroadcastRecipientLimitToStorage(p == null ? void 0 : p.recipientLimit);
							}
						}
					}
				}
				return { actionState: o("WAWebSyncdConst").SyncActionState.Success };
			});
			return r > 0 && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[DeviceCapabilitiesSync] primary caps updated ", "x"])), r), a;
		}, a.getMutation = function(t, n) {
			return o("WAWebSyncdActionUtils").buildPendingMutation({
				collection: this.collectionName,
				indexArgs: [this.getJidIndex()],
				value: this.getValueField() === "deviceCapabilitiesV2" ? { deviceCapabilitiesV2: babelHelpers.extends({}, n) } : { deviceCapabilities: babelHelpers.extends({}, n) },
				version: this.getVersion(),
				operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
				timestamp: t,
				action: this.getAction()
			});
		}, a.sendMutation = async function(t) {
			var e = this.getMutation(o("WATimeUtils").unixTimeMs(), t), n = await this.capabilitiesHaveChanged(e);
			if (!n.hasChanged) {
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[DeviceCapabilitiesSync] skip sync, no change"])));
				return;
			}
			await o("WAWebSyncdCoreApi").lockForSync([], [e], function() {
				return Promise.resolve();
			});
		}, n;
	})(o("WAWebSyncdAction").AccountSyncdActionBase);
	l.default = m;
}), 98);
