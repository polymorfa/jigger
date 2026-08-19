__d("MAWUpdateLSThreadFromGroupInfoApi", [
	"MAWBridge",
	"MAWBridgeTypesCreators",
	"MAWInMemoryGroupInfoStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(e);
		if (t != null) {
			var n = [{
				tag: "GroupInfoUpdated",
				value: o("MAWBridgeTypesCreators").createBridgeUpdatedGroupInfo(t)
			}];
			o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: n });
		}
	}
	l.updateLSThreadFromGroupInfo = e;
}), 98);
