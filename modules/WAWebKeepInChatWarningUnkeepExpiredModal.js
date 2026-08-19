__d("WAWebKeepInChatWarningUnkeepExpiredModal", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebEphemeralKeepInChatWamUtils",
	"WAWebModalManager",
	"WAWebProtobufsE2E.pb",
	"WAWebWamEnumKicErrorCodeType",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = e.expiredMessage, n = e.onCancel, r = e.onConfirm, a = function() {
			r(), o("WAWebModalManager").ModalManager.closeSupportOrModal();
		}, i = function() {
			n(), o("WAWebModalManager").ModalManager.closeSupportOrModal();
		}, l = u.jsx("div", {
			className: "x1603h9y x1u7k74 x14ug900",
			children: s._(
				/*BTDS*/
				""
			)
		});
		return c(function() {
			var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(t, o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL);
			e.set({ kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.MESSAGE_EXPIRED }), e.commit();
		}, []), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "kic-unkeep-expired"
			},
			title: l,
			onOK: a,
			onCancel: i,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "secondary",
			children: u.jsx("div", {
				className: "x1jchvi3 x1xet1wb x14ug900",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
