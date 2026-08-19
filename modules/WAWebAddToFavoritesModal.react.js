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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(12), n = e.onClose, a;
		t[0] !== n ? (a = function(t) {
			var e = t.selectedItems, a = e;
			o("WAWebAddToFavoritesAction").addToFavoritesAction(a.map(d), { entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.FILTER_EMPTY_STATE_ACTION }).catch(r("WAWebNoop")), n();
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = function(t) {
			return !t.isFavorite && t.canToggleFavorite();
		}, t[2] = l) : l = t[2];
		var c = l, p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = function(t) {
			return !t.isFavorite && m(t);
		}, t[3] = p) : p = t[3];
		var _ = p, f;
		if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
			var g;
			f = (g = o("WAWebABProps").getABPropConfigValue("favorites_limit")) != null ? g : 100, t[4] = f;
		} else f = t[4];
		var h = f, y = o("WAWebFavoriteCollection").FavoriteCollection.length, C = Math.max(0, h - y), b;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			"",
			[s._param("favorites_limit", h)]
		), t[5] = b) : b = t[5];
		var v = b, S;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x1380le5 x14mko6t xefnzgg x1uvdrpn" }, t[6] = S) : S = t[6];
		var R;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx("div", babelHelpers.extends({}, S, { children: u.jsx(r("WDSBanner.react"), {
			type: "default",
			body: s._(
				/*BTDS*/
				""
			)
		}) })), t[7] = R) : R = t[7];
		var L = R, E;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), t[8] = E) : E = t[8];
		var k;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (k = {
			surface: "unknown",
			viewName: "add-to-favorites"
		}, t[9] = k) : k = t[9];
		var I;
		return t[10] !== i ? (I = u.jsx(o("WAWebSelectModal.react").SelectModal, {
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			title: E,
			ephemeralIcon: "chat-list",
			onConfirm: i,
			maxItems: C,
			maxItemsExceedErrorMsg: v,
			chatFilter: c,
			contactFilter: _,
			shouldShowSelectedChatList: !0,
			shouldShowSelectionSummary: !1,
			singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			customHeader: L,
			hideCustomHeaderWhenSelected: !0,
			tsNavigationData: k
		}), t[10] = i, t[11] = I) : I = t[11], I;
	}
	function d(e) {
		return e.id;
	}
	function m(e) {
		return o("WAWebListsGatingUtils").isListsEnabled() || e.isFavorite ? !0 : o("WAWebFrontendContactGetters").getIsMyContact(e) && !e.id.isBot() && !o("WAWebContactGetters").getIsMe(e);
	}
	l.default = c;
}), 226);
