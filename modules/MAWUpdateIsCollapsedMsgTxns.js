__d("MAWUpdateIsCollapsedMsgTxns", [
	"MAWBridgeMsg",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MWXMAV2IsDataclassLiveLocationXMA"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r) {
		var a = t.collapsibleId;
		return a == null ? o("MAWDexieTable").dexieResolve(t) : e.messages.where([
			"threadJid",
			"collapsibleId",
			"sortOrderMs"
		]).between([
			r,
			a,
			Number.MIN_SAFE_INTEGER
		], [
			r,
			a,
			Number.MAX_SAFE_INTEGER
		], !1, !1).reverse().first().then(function(r) {
			if (r != null) if (t.serverTs != null && t.serverTs > r.serverTs) {
				var a = babelHelpers.extends({}, r, { isCollapsed: !0 });
				return e.messages.put(a).then(function() {
					return o("MAWIndexedDb").afterTransaction({
						tag: "MsgUpdated",
						value: o("MAWBridgeMsg").createBridgeMsg(a)
					});
				}).then(function() {
					return o("MAWDexieTable").dexieResolve(babelHelpers.extends({}, t, { isCollapsed: !1 }));
				});
			} else return o("MAWDexieTable").dexieResolve(babelHelpers.extends({}, t, { isCollapsed: !0 }));
			else return o("MAWDexieTable").dexieResolve(babelHelpers.extends({}, t, { isCollapsed: o("MWXMAV2IsDataclassLiveLocationXMA").isExpiredLiveLocationStarted(n, t.serverTs) }));
		});
	}
	l.maybeUpdatePreviousCollapsibleMsgs = e;
}), 98);
