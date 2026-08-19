__d("logMessengerWebFalcoEvent", [
	"I64",
	"LSMessagingThreadTypeUtil",
	"MessengerWebEventsFalcoEvent"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["hasMissingMessage"], s;
	function u(t, n, a, i) {
		var l = t.threadKey, u = t.threadType;
		if (a != null) {
			var c = o("LSMessagingThreadTypeUtil").isArmadilloSecure(u), d = o("LSMessagingThreadTypeUtil").isGroup(u), m = (s || (s = o("I64"))).to_string(l), p = i != null ? i : {}, _ = p.hasMissingMessage, f = babelHelpers.objectWithoutPropertiesLoose(p, e), g = i != null ? i : {}, h = g.MAW_vs_EB_numOfMissingInReference, y = g.MAW_vs_EB_numOfMissingInTarget, C = g.UI_vs_EB_numOfMissingInReference, b = g.UI_vs_EB_numOfMissingInTarget, v = g.UI_vs_MAW_numOfMissingInReference, S = g.UI_vs_MAW_numOfMissingInTarget, R = g.pageSize;
			r("MessengerWebEventsFalcoEvent").log(function() {
				return {
					client_timestamp: Date.now().toString(),
					entry_point: a,
					event_name: n,
					extra_data: f,
					has_message_missing: _,
					is_secured: c,
					missing_messages_maw_vs_eb_missing_in_reference_count: h,
					missing_messages_maw_vs_eb_missing_in_target_count: y,
					missing_messages_page_size: R,
					missing_messages_ui_vs_eb_missing_in_reference_count: C,
					missing_messages_ui_vs_eb_missing_in_target_count: b,
					missing_messages_ui_vs_maw_missing_in_reference_count: v,
					missing_messages_ui_vs_maw_missing_in_target_count: S,
					other_user_fbid: d || c ? void 0 : m,
					thread_fbid: m
				};
			});
		}
	}
	l.default = u;
}), 98);
