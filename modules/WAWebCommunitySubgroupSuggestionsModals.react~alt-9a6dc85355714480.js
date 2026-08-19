__d("WAWebCommunitySubgroupSuggestionsModals.react", [
	"fbt",
	"Promise",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(e) {
		var t = e.onOK;
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			testid: "approve-suggestions-limit-popup",
			onOK: function() {
				o("WAWebModalManager").closeModalManager(), t();
			},
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(t, r) {
		return new (e || (e = (n("Promise"))))(function(e) {
			var n = t === 0 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("available", t, [0]), s._plural(r, "pending_suggestions")]
			);
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				okText: t !== 0 ? s._(
					/*BTDS*/
					""
				) : void 0,
				onOK: function() {
					e(!0), o("WAWebModalManager").closeModalManager();
				},
				onCancel: function() {
					e(!1), o("WAWebModalManager").closeModalManager();
				},
				children: n
			}));
		});
	}
	l.SubgroupSuggestionsApproveLimit = d, l.confirmCommunityFull = m;
}), 226);
