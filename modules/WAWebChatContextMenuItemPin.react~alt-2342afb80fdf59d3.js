__d("WAWebChatContextMenuItemPin.react", [
	"fbt",
	"WAWebAuraGating",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebChatPinBridge",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFrontendChatGetters",
	"WAWebModalManager",
	"WAWebNewsletterCollection",
	"WAWebPinMenuItem.react",
	"WAWebPinnedChatsWamUtils",
	"WAWebStateUtils",
	"WAWebText.react",
	"react",
	"requireDeferred"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("requireDeferred")("WAWebPinChatAuraUpsellModal.react").__setRef("WAWebChatContextMenuItemPin.react");
	function d(e) {
		var t = e.cellRef, n = e.chat;
		async function a(e) {
			var a = !!(e && r("WAWebAuraGating").isPinnedChatsEnabled() && !r("WAWebAuraGating").isPinnedChatsBenefitActive()), i = o("WAWebChatPinBridge").getPinLimit(n.id), l = o("WAWebChatGetters").getIsNewsletter(n) ? r("WAWebNewsletterCollection") : o("WAWebChatCollection").ChatCollection;
			if (!e || await o("WAWebChatPinBridge").getNumConversationsPinned(n.id) < i) o("WAWebCmd").Cmd.pinChat(o("WAWebStateUtils").unproxy(n), e);
			else if (l.countWhere(function(e) {
				var t;
				return o("WAWebFrontendChatGetters").getShouldAppearInList(e) && ((t = e.pin) != null ? t : 0) > 0;
			}) >= i) if (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(), a) {
				var d = await c.load();
				o("WAWebModalManager").ModalManager.openAlert(u.jsx(d, {}));
			} else o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: function() {
					o("WAWebModalManager").ModalManager.close(), t == null || t.focusOnContextMenuButton();
				},
				okText: r("WAWebFbtCommon")("OK"),
				children: p.getPinLimitExceededText(n.id, i)
			}));
			else o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: p.getUnPinAllModalTitle(n.id, i),
				onOK: function() {
					o("WAWebChatPinBridge").unpinAllConversations(n.id), o("WAWebModalManager").ModalManager.close();
				},
				okText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeModalManager,
				cancelText: s._(
					/*BTDS*/
					""
				),
				children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: p.getUnPinAllModalContent(n.id) })
			}));
		}
		if (m(n)) return u.jsx(r("WAWebPinMenuItem.react"), {
			onPinOrUnpin: a,
			chat: n
		}, "pin");
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t;
		if (e.archive) return !1;
		var n = ((t = o("WAWebStateUtils").unproxy(e).promises) == null || (t = t.setArchive) == null ? void 0 : t.archive) === !0;
		return !n;
	}
	var p = {
		getPinLimitExceededText: function(t, n) {
			return t.isNewsletter() ? s._(
				/*BTDS*/
				"",
				[s._plural(n, "number")]
			) : s._(
				/*BTDS*/
				"",
				[s._plural(n, "number")]
			);
		},
		getUnPinAllModalTitle: function(t, n) {
			return t.isNewsletter() ? s._(
				/*BTDS*/
				"",
				[s._plural(n, "number")]
			) : s._(
				/*BTDS*/
				"",
				[s._plural(n, "number")]
			);
		},
		getUnPinAllModalContent: function(t) {
			return t.isNewsletter() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	};
	l.default = d;
}), 226);
