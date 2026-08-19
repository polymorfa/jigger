__d("MAWGroupInviteDeleteConfirmationDialog.react", [
	"fbt",
	"I64",
	"MAWMiActOnActThreadReady",
	"MWDialogText.react",
	"MWLSThreadDisplayContext",
	"MWXCardedDialog_DEPRECATED.react",
	"MessageRequestsLog",
	"Promise",
	"WAJids",
	"promiseDone",
	"react",
	"useMAWDeleteSecureThreadFromThreadList",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react"));
	function p(t) {
		var a = t.closeParentDialogCallback, i = t.inviter, l = t.onClose, d = t.thread, p = (u || (u = r("useReStore")))(), _ = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), f = _ !== "Inbox", g = r("useMAWDeleteSecureThreadFromThreadList")(d, !f);
		return m.jsx(r("MWXCardedDialog_DEPRECATED.react"), {
			hasTextOnlyContent: !0,
			onClose: l,
			primaryCallToAction: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(p.tables, d.threadKey, "MAWGroupInviteDeleteConfirmationDialog", function(t, r) {
						return o("MessageRequestsLog").logActionConfirmed(d, 8, (c || (c = o("I64"))).to_string(i.inviterId), o("WAJids").groupIdFromJid(o("WAJids").unsafeCoerceToGroupJid(r))), (e || (e = n("Promise"))).resolve();
					})), g(), a(), l();
				},
				type: "primary"
			},
			secondaryCallToAction: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return l();
				}
			},
			size: "small",
			title: s._(
				/*BTDS*/
				""
			),
			withCloseButton: !0,
			children: m.jsx(r("MWDialogText.react"), { children: s._(
				/*BTDS*/
				""
			) })
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
