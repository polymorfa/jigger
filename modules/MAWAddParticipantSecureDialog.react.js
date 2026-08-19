__d("MAWAddParticipantSecureDialog.react", [
	"LSThreadBitOffset",
	"MWAddParticipantDialogContent.react",
	"ReQL",
	"ReQLSuspense",
	"react",
	"react-compiler-runtime",
	"useMAWAddSecureGroupParticipants",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = o("react-compiler-runtime").c(7), a = t.onClose, l = t.threadKey, s = r("useMAWAddSecureGroupParticipants")(l), d = (e || (e = r("useReStore")))(), m;
		n[0] !== d.tables.threads || n[1] !== l ? (m = function() {
			return o("ReQLSuspense").first(o("ReQL").fromTableAscending(d.tables.threads, [
				"threadKey",
				"threadType",
				"memberCount",
				"needsAdminApprovalForNewParticipant"
			].concat(o("LSThreadBitOffset").threadCapabilityFields)).getKeyRange(l), i.id + ":42");
		}, n[0] = d.tables.threads, n[1] = l, n[2] = m) : m = n[2];
		var p = c(m), _ = p[0], f;
		return n[3] !== s || n[4] !== a || n[5] !== _ ? (f = _ == null ? null : u.jsx(r("MWAddParticipantDialogContent.react"), {
			onAddParticipants: s,
			onClose: a,
			thread: _
		}), n[3] = s, n[4] = a, n[5] = _, n[6] = f) : f = n[6], f;
	}
	l.default = d;
}), 98);
