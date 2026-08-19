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
	"react-compiler-runtime",
	"requireDeferred"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("requireDeferred")("WAWebPinChatAuraUpsellModal.react").__setRef("WAWebChatContextMenuItemPin.react");
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.cellRef, a = e.chat, i;
		t[0] !== n || t[1] !== a ? (i = async function(t) {
			var e = !!(t && r("WAWebAuraGating").isPinnedChatsEnabled() && !r("WAWebAuraGating").isPinnedChatsBenefitActive()), i = o("WAWebChatPinBridge").getPinLimit(a.id), l = o("WAWebChatGetters").getIsNewsletter(a) ? r("WAWebNewsletterCollection") : o("WAWebChatCollection").ChatCollection;
			if (!t || await o("WAWebChatPinBridge").getNumConversationsPinned(a.id) < i) o("WAWebCmd").Cmd.pinChat(o("WAWebStateUtils").unproxy(a), t);
			else if (l.countWhere(m) >= i) if (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(), e) {
				var d = await c.load();
				o("WAWebModalManager").ModalManager.openAlert(u.jsx(d, {}));
			} else o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: function() {
					o("WAWebModalManager").ModalManager.close(), n == null || n.focusOnContextMenuButton();
				},
				okText: r("WAWebFbtCommon")("OK"),
				children: _.getPinLimitExceededText(a.id, i)
			}));
			else o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: _.getUnPinAllModalTitle(a.id, i),
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
				children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: _.getUnPinAllModalContent(a.id) })
			}));
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i;
		if (p(a)) {
			var d;
			return t[3] !== a || t[4] !== l ? (d = u.jsx(r("WAWebPinMenuItem.react"), {
				onPinOrUnpin: l,
				chat: a
			}, "pin"), t[3] = a, t[4] = l, t[5] = d) : d = t[5], d;
		}
	}
	function m(e) {
		var t;
		return o("WAWebFrontendChatGetters").getShouldAppearInList(e) && ((t = e.pin) != null ? t : 0) > 0;
	}
	function p(e) {
		var t;
		if (e.archive) return !1;
		var n = ((t = o("WAWebStateUtils").unproxy(e).promises) == null || (t = t.setArchive) == null ? void 0 : t.archive) === !0;
		return !n;
	}
	var _ = {
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
