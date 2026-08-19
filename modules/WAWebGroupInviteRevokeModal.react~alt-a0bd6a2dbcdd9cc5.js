__d("WAWebGroupInviteRevokeModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebGroupType",
	"WAWebModalManager",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingBottom5: {
		paddingBottom: "xs9asl8",
		$$css: !0
	} }, m = { confirmationText: {
		display: "x1lliihq",
		fontSize: "x6prxxf",
		lineHeight: "x1fc57z9",
		color: "x14ug900",
		$$css: !0
	} };
	function p(t) {
		var n, a = t.chat, i = t.onConfirm, l = function() {
			i(), o("WAWebModalManager").ModalManager.close();
		};
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "group-invite-revoke"
			},
			title: s._(
				/*BTDS*/
				""
			),
			onOK: l,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.confirmationText, o("WDSPaddings.stylex").wdsPaddings.paddingTop4, d.paddingBottom5, o("WDSPaddings.stylex").wdsPaddings.paddingHor0), { children: ((n = a.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.COMMUNITY ? s._(
				/*BTDS*/
				"",
				[s._param("community", a.contact.name)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("group", a.contact.name)]
			) }))
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
