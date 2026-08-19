__d("WAWebStatusPrivacySettingSync", [
	"WALogger",
	"WAWebBackendEventBus",
	"WAWebCrosspostingBackendGatingUtils",
	"WAWebProtobufSyncAction.pb",
	"WAWebProtobufsServerSync.pb",
	"WAWebSyncdAction",
	"WAWebSyncdActionUtils",
	"WAWebSyncdConst",
	"WAWebSyncdIndexUtils",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsStatus",
	"WAWebUserPrefsStatusType",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = (function(t) {
		function n() {
			for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
			return e = t.call.apply(t, [this].concat(r)) || this, e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh, babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
		}
		babelHelpers.inheritsLoose(n, t);
		var a = n.prototype;
		return a.getVersion = function() {
			return 7;
		}, a.getAction = function() {
			return o("WAWebSyncdConst").Actions.StatusPrivacy;
		}, a.applyMutations = async function(n) {
			if (n.length !== 1) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[syncd] unexpected mutation count ", " for status privacy sync"])), n.length), n.map(function() {
				return { actionState: o("WAWebSyncdConst").SyncActionState.Malformed };
			});
			var t = n[n.length - 1];
			if (t.operation === "set") try {
				var a = t.value, i = a.statusPrivacy;
				if (!i) return [o("WAWebSyncdIndexUtils").malformedActionValue(this.collectionName)];
				var l = i.mode, u = i.shareToFb, c = i.shareToIg, d = i.userJid;
				if (l == null) return [o("WAWebSyncdIndexUtils").malformedActionValue(this.collectionName)];
				var m = [], p, _ = [], f = [];
				e: {
					if (l === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CONTACTS) {
						p = o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact, m = r("WAWebUserPrefsStatus").calculateStatusPrivacyUpdateEntries({ setting: p });
						break e;
					}
					if (l === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.ALLOW_LIST) {
						p = o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList, _ = d.map(o("WAWebWidFactory").createWid).filter(function(e) {
							return e.isUser();
						}), m = r("WAWebUserPrefsStatus").calculateStatusPrivacyUpdateEntries({
							setting: p,
							allowList: _
						});
						break e;
					}
					if (l === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.DENY_LIST) {
						p = o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList, f = d.map(o("WAWebWidFactory").createWid).filter(function(e) {
							return e.isUser();
						}), m = r("WAWebUserPrefsStatus").calculateStatusPrivacyUpdateEntries({
							setting: p,
							denyList: f
						});
						break e;
					}
					if (l === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CLOSE_FRIENDS || l === o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CUSTOM_LIST) break e;
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + l);
				}
				var g = [];
				if (o("WAWebCrosspostingBackendGatingUtils").crosspostSettingsSyncReceiverEnabled()) {
					var h = [];
					u != null && h.push(r("WAWebUserPrefsStatus").persistShareToFB(u)), c != null && h.push(r("WAWebUserPrefsStatus").persistShareToIG(c)), h.length > 0 && g.push(Promise.all(h).then(function() {
						o("WAWebBackendEventBus").BackendEventBus.triggerUpdateCrosspostAutoShareSettings({
							shareToFB: u,
							shareToIG: c
						});
					}));
				}
				return m.length > 0 && g.push(o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.bulkSetItemsToIndexedDB(m).then(function() {
					o("WAWebBackendEventBus").BackendEventBus.triggerUpdateStatusPrivacySettings({
						setting: p,
						allowList: _,
						denyList: f
					});
				})), await Promise.all(g), [{ actionState: o("WAWebSyncdConst").SyncActionState.Success }];
			} catch (e) {
				return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[syncd] status privacy IDB write failed ", ""])), e), n.map(function() {
					return { actionState: o("WAWebSyncdConst").SyncActionState.Failed };
				});
			}
			return [{ actionState: o("WAWebSyncdConst").SyncActionState.Unsupported }];
		}, a.getStatusPrivacySettingMutation = function(t) {
			var e = t.list, n = t.setting, r = t.shareToFB, a = t.shareToIG, i = t.timestamp, l;
			switch (n) {
				case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact:
					l = o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CONTACTS;
					break;
				case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList:
					l = o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.ALLOW_LIST;
					break;
				case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList:
					l = o("WAWebProtobufSyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.DENY_LIST;
					break;
			}
			return o("WAWebSyncdActionUtils").buildPendingMutation({
				collection: this.collectionName,
				indexArgs: [],
				operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
				version: this.getVersion(),
				timestamp: i,
				action: this.getAction(),
				value: { statusPrivacy: babelHelpers.extends({
					mode: l,
					userJid: e
				}, o("WAWebCrosspostingBackendGatingUtils").crosspostSettingsSyncSenderEnabled() ? {
					shareToFb: r,
					shareToIg: a
				} : {}, {
					customLists: [],
					modes: []
				}) }
			});
		}, n;
	})(o("WAWebSyncdAction").AccountSyncdActionBase), c = new u();
	l.default = c;
}), 98);
