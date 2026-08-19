__d("WAWebQuickRepliesDrawerItem.react", [
	"fbt",
	"WAWebBizQuickRepliesModal.react",
	"WAWebBoolFunc",
	"WAWebChatCell.react",
	"WAWebConfirmPopup.react",
	"WAWebDeleteQuickReplyAction",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebDropdownItem.react",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebModalManager",
	"WAWebPencilRefreshedIcon.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState;
	function p(e) {
		var t, n = e.quickReply, a = m(!1), i = a[0], l = a[1], c = m(null), p = c[0], _ = c[1], f = d(null), g = d(null), h = r("WAWebL10N").isRTL() ? "left" : "right", y = (t = {}, t[h] = function() {
			var e;
			(e = g.current) == null || e.focusOnContextMenuButton();
		}, t), C = function(t) {
			var e;
			(e = g.current) == null || e.mouseOver(), l(!0);
		}, b = function(t) {
			var e;
			(e = g.current) == null || e.mouseLeave(), l(!1);
		}, v = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizQuickRepliesModal.react"), {
				quickReply: n,
				tsNavigationData: { surface: "smb-quick-reply-edit" }
			}));
		}, S = async function() {
			try {
				await o("WAWebDeleteQuickReplyAction").deleteQuickReplyAction(n.id), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			} finally {
				o("WAWebModalManager").ModalManager.close();
			}
		}, R = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				onOK: S,
				onCancel: o("WAWebModalManager").closeModalManager,
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, L = function(t) {
			if (p) {
				_(null);
				return;
			}
			var e = [];
			e.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-edit-quick_reply",
				action: v,
				icon: u.jsx(o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon, {}),
				children: s._(
					/*BTDS*/
					""
				)
			}, "mi-edit-quick_reply")), e.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-delete-quick-reply",
				action: R,
				icon: u.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}),
				theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
				children: s._(
					/*BTDS*/
					""
				)
			}, "mi-delete-quick-reply")), _({
				menu: e,
				event: t.event,
				anchor: t.anchor
			});
		}, E = function() {
			_(null), r("WAWebFocusTracer").focus(f.current);
		}, k = p && u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "QuickReplyContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: E,
			children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: p })
		});
		return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: f,
			handlers: y,
			tabIndex: 0,
			onFocus: C,
			onBlur: b,
			children: [u.jsx(r("WAWebChatCell.react"), {
				ref: g,
				active: i || !!p,
				contextEnabled: o("WAWebBoolFunc").returnTrue,
				contextMenuControlled: !0,
				onContext: L,
				theme: "quick-replies-drawer-item",
				primary: n.shortcut,
				secondary: n.message,
				testid: "quick-replies-drawer-item"
			}), k]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
