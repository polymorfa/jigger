__d("WAWebNewsletterIntegrityDeleteStatus.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterRevokeStatusAction",
	"WAWebStatusCollection",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(9), r = e.msg, a = e.onDeleteSuccess, i = m(!1), l = i[0], c = i[1], d;
		t[0] !== r || t[1] !== a ? (d = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				c(!0);
				var e = o("WAWebStatusCollection").StatusCollection.get(r.id.remote);
				if (e == null) {
					o("WAWebModalManager").ModalManager.close(), o("WAWebNewsletterIntegrityUtils").showStatusDeleteFailureToast();
					return;
				}
				var t = yield o("WAWebNewsletterRevokeStatusAction").revokeNewsletterStatusAction(e, r);
				o("WAWebModalManager").ModalManager.close(), t ? (o("WAWebNewsletterIntegrityUtils").showStatusDeleteSuccessToast(), a == null || a()) : o("WAWebNewsletterIntegrityUtils").showStatusDeleteFailureToast();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[0] = r, t[1] = a, t[2] = d) : d = t[2];
		var p = d, _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[3] = _) : _ = t[3];
		var f = _, g;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[4] = g) : g = t[4];
		var h = g, y;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), t[5] = y) : y = t[5];
		var C;
		return t[6] !== p || t[7] !== l ? (C = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: f,
			okText: y,
			okButtonType: "negative-destructive",
			okDisabled: l,
			okSpinner: l,
			cancelDisabled: l,
			onOK: p,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: h
		}), t[6] = p, t[7] = l, t[8] = C) : C = t[8], C;
	}
	l.default = p;
}), 226);
