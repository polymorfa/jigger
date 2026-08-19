__d("WAWebClearSelectedChatsPopup.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebCheckBox.react",
	"WAWebClearSelectedChatsAction",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { section: {
		fontSize: "x1f6kntn",
		marginTop: "x1nmyh1g",
		$$css: !0
	} };
	function m(e) {
		var t = e.chats, n = e.onComplete, a = t.length, i = c(o("WAWebBoolFunc").returnFalse), l = i[0], m = i[1], p = function() {
			m(!l);
		}, _ = async function() {
			await o("WAWebClearSelectedChatsAction").clearSelectedChats(t, { keepStarred: l }), o("WAWebModalManager").ModalManager.close(), n == null || n();
		}, f = s._(
			/*BTDS*/
			"",
			[s._plural(a, "number")]
		), g = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: d.section,
			children: [u.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: p,
				checked: l,
				testid: "keep-starred-checkbox",
				id: "keep-starred-checkbox-id"
			}), u.jsx("label", {
				htmlFor: "keep-starred-checkbox-id",
				className: "x150mmf0 x1ypdohk",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), h = u.jsxs("div", { children: [
			u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}),
			g
		] });
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "clear-selected-chats"
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
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
