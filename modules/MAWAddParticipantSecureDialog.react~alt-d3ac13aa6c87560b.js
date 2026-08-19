__d("MAWAddParticipantSecureDialog.react", [
	"LSThreadBitOffset",
	"MWAddParticipantDialogContent.react",
	"ReQL",
	"ReQLSuspense",
	"react",
	"useMAWAddSecureGroupParticipants",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = t.onClose, a = t.threadKey, l = r("useMAWAddSecureGroupParticipants")(a), s = (e || (e = r("useReStore")))(), d = c(function() {
			return o("ReQLSuspense").first(o("ReQL").fromTableAscending(s.tables.threads, [
				"threadKey",
				"threadType",
				"memberCount",
				"needsAdminApprovalForNewParticipant"
			].concat(o("LSThreadBitOffset").threadCapabilityFields)).getKeyRange(a), i.id + ":42");
		}), m = d[0];
		return m == null ? null : u.jsx(r("MWAddParticipantDialogContent.react"), {
			onAddParticipants: l,
			onClose: n,
			thread: m
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
