__d("WAFlowsComponentsCommon", ["$InternalEnum"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		enabled: { type: "boolean" },
		isLoading: { type: "boolean" },
		isOverlayVisible: { type: "boolean" },
		screenID: { type: "string" },
		isNavBarContextMenuVisible: { type: "boolean" },
		version: { type: "number" },
		isFlowInDraft: { type: "boolean" }
	};
	function s(e) {
		return e != null && +e >= 600 && +e < 700;
	}
	var u = n("$InternalEnum")({ LARGE: "large" });
	l.WAFlowsComponentsCommonSchemaProperties = e, l.getExecuteOnSelectActionScreenChange = s, l.WhatsAppFlowsTextEntryLabelVariant = u;
}), 98);
