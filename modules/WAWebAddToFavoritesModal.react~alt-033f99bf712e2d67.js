__d("WAWebAddToFavoritesModal.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAddToFavoritesAction",
	"WAWebContactGetters",
	"WAWebFavoriteCollection",
	"WAWebFrontendContactGetters",
	"WAWebListsGatingUtils",
	"WAWebNoop",
	"WAWebSelectModal.react",
	"WAWebSelectModalFooter.react",
	"WAWebWamEnumFavoritesUpdateEntryPoint",
	"WDSBanner.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.onClose;
		function a(e) {
			var t = e.selectedItems, a = t;
			o("WAWebAddToFavoritesAction").addToFavoritesAction(a.map(function(e) {
				return e.id;
			}), { entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.FILTER_EMPTY_STATE_ACTION }).catch(r("WAWebNoop")), n();
		}
		function i(e) {
			return !e.isFavorite && e.canToggleFavorite();
		}
		function l(e) {
			return !e.isFavorite && d(e);
		}
		var c = (t = o("WAWebABProps").getABPropConfigValue("favorites_limit")) != null ? t : 100, m = o("WAWebFavoriteCollection").FavoriteCollection.length, p = Math.max(0, c - m), _ = s._(
			/*BTDS*/
			"",
			[s._param("favorites_limit", c)]
		), f = u.jsx("div", {
			className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
			children: u.jsx(r("WDSBanner.react"), {
				type: "default",
				body: s._(
					/*BTDS*/
					""
				)
			})
		});
		return u.jsx(o("WAWebSelectModal.react").SelectModal, {
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			title: s._(
				/*BTDS*/
				""
			),
			ephemeralIcon: "chat-list",
			onConfirm: a,
			maxItems: p,
			maxItemsExceedErrorMsg: _,
			chatFilter: i,
			contactFilter: l,
			shouldShowSelectedChatList: !0,
			shouldShowSelectionSummary: !1,
			singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			customHeader: f,
			hideCustomHeaderWhenSelected: !0,
			tsNavigationData: {
				surface: "unknown",
				viewName: "add-to-favorites"
			}
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		return o("WAWebListsGatingUtils").isListsEnabled() || e.isFavorite ? !0 : o("WAWebFrontendContactGetters").getIsMyContact(e) && !e.id.isBot() && !o("WAWebContactGetters").getIsMe(e);
	}
	l.default = c;
}), 226);
