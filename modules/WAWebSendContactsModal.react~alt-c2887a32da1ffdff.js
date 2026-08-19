__d("WAWebSendContactsModal.react", [
	"fbt",
	"WAWebABProps",
	"WAWebModalManager",
	"WAWebSelectModal.react",
	"WAWebSendContactsAction",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.contacts, n = e.maxItems, a = e.onContactsSent, i = function(n) {
			for (var e of n) r("WAWebSendContactsAction")({
				chat: e,
				contacts: t
			}), e.composeQuotedMsg = null;
			a(n[0]), o("WAWebModalManager").ModalManager.close();
		}, l = function(t) {
			var e = t.selectedItems, n = e;
			n.length === 0 && o("WAWebModalManager").ModalManager.close(), i(n);
		}, c = n == null ? o("WAWebABProps").getABPropConfigValue("group_size_limit") : n;
		return u.jsx(o("WAWebSelectModal.react").SelectModal, {
			onConfirm: l,
			maxItems: c,
			title: s._(
				/*BTDS*/
				""
			),
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			onCancel: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "send-contacts",
				viewName: "send-contacts"
			}
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
