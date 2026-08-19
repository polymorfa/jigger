__d("WAWebResetChatlistWidthCommandPalettePlugin", [
	"WALogger",
	"WAWebCommandPaletteController",
	"WAWebLexicalWAWebMenu.react",
	"WAWebLocalStorage",
	"WAWebMenuItems.react",
	"WAWebRefreshIcon.react",
	"react",
	"react-compiler-runtime",
	"useWAWebAdjustableChatListWidth"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c() {
		var t = o("react-compiler-runtime").c(5), n = o("WAWebCommandPaletteController").useCommandPalette(), a;
		t[0] !== n ? (a = function() {
			r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(o("useWAWebAdjustableChatListWidth").CHATLIST_CUSTOM_WIDTH_LS_KEY), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[reload] resetChatlistWidth"]))), n.closeModal(), location.reload();
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}), t[2] = l) : l = t[2];
		var s;
		return t[3] !== i ? (s = u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
			forceSelection: !0,
			children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: "reset-chatlist-width-confirm",
				primary: "Reset chat list width",
				secondary: "Clear the persisted chat list width and reload the page",
				detailLeft: l,
				onSelect: i
			})
		}), t[3] = i, t[4] = s) : s = t[4], s;
	}
	var d = {
		plugin: {
			id: "ResetChatlistWidthCommandPalettePlugin",
			placeholder: "Reset chat list width",
			shortName: u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {
				width: 16,
				height: 16
			}),
			Component: c
		},
		trigger: "/resetChatlistWidth",
		doc: {
			isDevOnly: !0,
			name: "Reset Chat List Width",
			description: "Clear the persisted chat list custom width and reload the page"
		}
	};
	l.ResetChatlistWidthCommandPalettePlugin = d;
}), 98);
