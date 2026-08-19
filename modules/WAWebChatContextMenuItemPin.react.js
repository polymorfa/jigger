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
	"react-compiler-runtime",
	"requireDeferred"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("requireDeferred")("WAWebPinChatAuraUpsellModal.react").__setRef("WAWebChatContextMenuItemPin.react");
	function d(e) {
		var t = o("react-compiler-runtime").c(6), a = e.cellRef, i = e.chat, l;
		t[0] !== a || t[1] !== i ? (l = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = !!(e && r("WAWebAuraGating").isPinnedChatsEnabled() && !r("WAWebAuraGating").isPinnedChatsBenefitActive()), n = o("WAWebChatPinBridge").getPinLimit(i.id), l = o("WAWebChatGetters").getIsNewsletter(i) ? r("WAWebNewsletterCollection") : o("WAWebChatCollection").ChatCollection;
				if (!e || (yield o("WAWebChatPinBridge").getNumConversationsPinned(i.id)) < n) o("WAWebCmd").Cmd.pinChat(o("WAWebStateUtils").unproxy(i), e);
				else if (l.countWhere(m) >= n) if (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(), t) {
					var d = yield c.load();
					o("WAWebModalManager").ModalManager.openAlert(u.jsx(d, {}));
				} else o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: function() {
						o("WAWebModalManager").ModalManager.close(), a == null || a.focusOnContextMenuButton();
					},
					okText: r("WAWebFbtCommon")("OK"),
					children: _.getPinLimitExceededText(i.id, n)
				}));
				else o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					title: _.getUnPinAllModalTitle(i.id, n),
					onOK: function() {
						o("WAWebChatPinBridge").unpinAllConversations(i.id), o("WAWebModalManager").ModalManager.close();
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
					children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: _.getUnPinAllModalContent(i.id) })
				}));
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t[0] = a, t[1] = i, t[2] = l) : l = t[2];
		var d = l;
		if (p(i)) {
			var f;
			return t[3] !== i || t[4] !== d ? (f = u.jsx(r("WAWebPinMenuItem.react"), {
				onPinOrUnpin: d,
				chat: i
			}, "pin"), t[3] = i, t[4] = d, t[5] = f) : f = t[5], f;
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
