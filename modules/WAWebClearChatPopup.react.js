__d("WAWebClearChatPopup.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebChatFlowTypes",
	"WAWebChatGetters",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebFrontendChatGetters",
	"WAWebModalManager",
	"WAWebSendClearChatAction",
	"WAWebText.react",
	"WAWebWamChatPSALogger",
	"react",
	"useWAWebChatValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState;
	function p(e) {
		var t = e.chat, n = o("useWAWebChatValues").useChatValues(t.id, [o("WAWebFrontendChatGetters").getKind, o("WAWebChatGetters").getIsPSA]), r = n[0], a = n[1], i = m(o("WAWebBoolFunc").returnFalse), l = i[0], c = i[1], p = function() {
			c(!l);
		}, _ = function() {
			if (t.pendingAction++, a) {
				var e = t.msgs.last();
				o("WAWebWamChatPSALogger").logChatPSARemove(e, 5, 14);
			}
			o("WAWebSendClearChatAction").sendClear(t, l).finally(function() {
				t.pendingAction--;
			}), o("WAWebModalManager").ModalManager.close();
		}, f = d(function() {
			if (r != null) switch (r) {
				case o("WAWebChatFlowTypes").ChatKindType.Group: return s._(
					/*BTDS*/
					""
				);
				case o("WAWebChatFlowTypes").ChatKindType.Chat: return s._(
					/*BTDS*/
					""
				);
				case o("WAWebChatFlowTypes").ChatKindType.Broadcast: return s._(
					/*BTDS*/
					""
				);
				case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
				case o("WAWebChatFlowTypes").ChatKindType.Community: return "";
			}
			return "";
		}, [r]), g = u.jsxs("div", {
			className: "x78zum5 x1f6kntn x16h55sf xhrpt6u",
			children: [u.jsx("div", {
				"data-testid": "menu-icon-clear-chat",
				className: "x1rg5ohu x1okw0bk x1uuroth xqz5vs7 x1sa5p1d",
				children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
					onChange: p,
					checked: l,
					id: "menu-icon-clear-chat"
				})
			}), u.jsx("label", {
				htmlFor: "menu-icon-clear-chat",
				className: "x98rzlu x1ypdohk xqz5vs7",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), h = u.jsxs("div", { children: [u.jsx(o("WAWebText.react").WAWebTextMuted, {
			as: "p",
			children: s._(
				/*BTDS*/
				""
			)
		}), g] });
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "clear-chat",
				viewName: "clear-chat"
			},
			title: f,
			onOK: _,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "solid-warning",
			onCancel: o("WAWebModalManager").closeModalManager,
			children: h
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
