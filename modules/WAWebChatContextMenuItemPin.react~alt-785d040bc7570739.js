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
	"asyncToGeneratorRuntime",
	"react",
	"requireDeferred"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("requireDeferred")("WAWebPinChatAuraUpsellModal.react").__setRef("WAWebChatContextMenuItemPin.react");
	function d(e) {
		var t = e.cellRef, a = e.chat;
		function i(e) {
			return l.apply(this, arguments);
		}
		function l() {
			return l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var n = !!(e && r("WAWebAuraGating").isPinnedChatsEnabled() && !r("WAWebAuraGating").isPinnedChatsBenefitActive()), i = o("WAWebChatPinBridge").getPinLimit(a.id), l = o("WAWebChatGetters").getIsNewsletter(a) ? r("WAWebNewsletterCollection") : o("WAWebChatCollection").ChatCollection;
				if (!e || (yield o("WAWebChatPinBridge").getNumConversationsPinned(a.id)) < i) o("WAWebCmd").Cmd.pinChat(o("WAWebStateUtils").unproxy(a), e);
				else if (l.countWhere(function(e) {
					var t;
					return o("WAWebFrontendChatGetters").getShouldAppearInList(e) && ((t = e.pin) != null ? t : 0) > 0;
				}) >= i) if (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(), n) {
					var d = yield c.load();
					o("WAWebModalManager").ModalManager.openAlert(u.jsx(d, {}));
				} else o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: function() {
						o("WAWebModalManager").ModalManager.close(), t == null || t.focusOnContextMenuButton();
					},
					okText: r("WAWebFbtCommon")("OK"),
					children: p.getPinLimitExceededText(a.id, i)
				}));
				else o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					title: p.getUnPinAllModalTitle(a.id, i),
					onOK: function() {
						o("WAWebChatPinBridge").unpinAllConversations(a.id), o("WAWebModalManager").ModalManager.close();
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
					children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: p.getUnPinAllModalContent(a.id) })
				}));
			}), l.apply(this, arguments);
		}
		if (m(a)) return u.jsx(r("WAWebPinMenuItem.react"), {
			onPinOrUnpin: i,
			chat: a
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
