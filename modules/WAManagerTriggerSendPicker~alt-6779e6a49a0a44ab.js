__d("WAManagerTriggerSendPicker", [
	"GeoSelector.react",
	"GeoSelectorItem.react",
	"MAIBAChatNavigationContext",
	"MAIBAMessageContext",
	"react",
	"useJSON",
	"useMAIBASendMessageFromInsideChat"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e, t) {
		return e.replace(/\{label\}/g, t.label).replace(/\{value\}/g, t.value).replace(/\{field_title\}/g, t.field_title).replace(/\{field_id\}/g, t.field_id);
	}
	function d(e) {
		var t, n, a, i = e.attributesJson, l = r("useJSON")(i), d = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(), m = d.externalConversationId, p = o("MAIBAMessageContext").useMAIBAMessageContext(), _ = p.rowIndexFromBottom, f = r("useMAIBASendMessageFromInsideChat")(), g = u(!1), h = g[0], y = g[1], C = u(null), b = C[0], v = C[1], S = r("useJSON")((t = l.choices_json) != null ? t : "[]"), R = (n = l.field_id) != null ? n : "", L = (a = l.field_title) != null ? a : "", E = l.postback_template != null && l.postback_template !== "" ? l.postback_template : "Use {label} for {field_title}";
		if (S == null || !Array.isArray(S) || S.length === 0 || R === "" || m == null) return null;
		var k = h || _ !== 0, I = function(t) {
			if (!k) {
				v(t);
				var e = S.find(function(e) {
					return e.value === t;
				});
				if (e != null) {
					var n = c(E, {
						field_id: R,
						field_title: L,
						label: e.label,
						value: e.value
					});
					y(!0), f({
						externalConversationId: m,
						isSentFromOutOfChat: !1,
						message: n,
						originComponent: "WAManagerTriggerSendPicker"
					});
				}
			}
		}, T = l.placeholder != null && l.placeholder !== "" ? l.placeholder : "Select " + L;
		return s.jsx(r("GeoSelector.react"), {
			isDisabled: k,
			label: L,
			onChange: I,
			placeholder: T,
			value: b,
			children: S.map(function(e) {
				return s.jsx(r("GeoSelectorItem.react"), {
					label: e.label,
					value: e.value
				}, e.value);
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
