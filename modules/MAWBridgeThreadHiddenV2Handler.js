__d("MAWBridgeThreadHiddenV2Handler", [
	"LSFactory",
	"LSIntEnum",
	"LSOptimisticRemoveThreadStoredProcedure",
	"LSThreadRemoveType",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, n, "MAWBridgeThreadHiddenV2Handler", function(t, n) {
			var a = r("LSFactory")(t);
			return r("LSOptimisticRemoveThreadStoredProcedure")(a, {
				removeType: (e || (e = o("LSIntEnum"))).ofNumber(r("LSThreadRemoveType").DELETE_THREAD),
				threadKey: n
			});
		});
	}
	l.call = s;
}), 98);
