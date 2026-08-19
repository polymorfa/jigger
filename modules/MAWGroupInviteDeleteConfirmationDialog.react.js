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
	"react-compiler-runtime",
	"useMAWDeleteSecureThreadFromThreadList",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react"));
	function p(t) {
		var a = o("react-compiler-runtime").c(17), i = t.closeParentDialogCallback, l = t.inviter, d = t.onClose, p = t.thread, _ = (u || (u = r("useReStore")))(), f = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), g = f !== "Inbox", h = r("useMAWDeleteSecureThreadFromThreadList")(p, !g), y;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), a[0] = y) : y = a[0];
		var C;
		a[1] !== i || a[2] !== _ || a[3] !== h || a[4] !== l || a[5] !== d || a[6] !== p ? (C = {
			label: y,
			onPress: function() {
				return r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(_.tables, p.threadKey, "MAWGroupInviteDeleteConfirmationDialog", function(t, r) {
					return o("MessageRequestsLog").logActionConfirmed(p, 8, (c || (c = o("I64"))).to_string(l.inviterId), o("WAJids").groupIdFromJid(o("WAJids").unsafeCoerceToGroupJid(r))), (e || (e = n("Promise"))).resolve();
				})), h(), i(), d();
			},
			type: "primary"
		}, a[1] = i, a[2] = _, a[3] = h, a[4] = l, a[5] = d, a[6] = p, a[7] = C) : C = a[7];
		var b;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), a[8] = b) : b = a[8];
		var v;
		a[9] !== d ? (v = {
			label: b,
			onPress: function() {
				return d();
			}
		}, a[9] = d, a[10] = v) : v = a[10];
		var S;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), a[11] = S) : S = a[11];
		var R;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (R = m.jsx(r("MWDialogText.react"), { children: s._(
			/*BTDS*/
			""
		) }), a[12] = R) : R = a[12];
		var L;
		return a[13] !== d || a[14] !== C || a[15] !== v ? (L = m.jsx(r("MWXCardedDialog_DEPRECATED.react"), {
			hasTextOnlyContent: !0,
			onClose: d,
			primaryCallToAction: C,
			secondaryCallToAction: v,
			size: "small",
			title: S,
			withCloseButton: !0,
			children: R
		}), a[13] = d, a[14] = C, a[15] = v, a[16] = L) : L = a[16], L;
	}
	l.default = p;
}), 226);
