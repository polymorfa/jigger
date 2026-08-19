__d("WAWebBizBroadcastMessageInputSection.react", [
	"fbt",
	"WAWebBizBroadcastGenAIEntryPoint.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebDropdown.react",
	"WAWebEmojiPanel.react",
	"WAWebFlex.react",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSButton.react",
	"WDSIconIcMood.react",
	"react",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = { messageInputContainer: {
		alignItems: "x6s0dn4",
		backgroundColor: "x1280gxy",
		borderTopColor: "xx42vgk x1iho30r",
		borderInlineEndColor: "xbogo7e xwdt1gy",
		borderBottomColor: "x120ee7l x1vtqnfi",
		borderInlineStartColor: "x1vb5itz xhu2vye",
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopWidth: "x178xt8z",
		borderInlineEndWidth: "x1lun4ml",
		borderBottomWidth: "xso031l",
		borderInlineStartWidth: "xpilrb4",
		rowGap: "x1qvou4u",
		columnGap: "x1s70e7g",
		outlineColor: "x1uczgqu x850hsn",
		outlineStyle: "xaatb59",
		outlineWidth: "x1k57tk5 xoxpeok",
		paddingTop: "x1tiyuxx",
		paddingBottom: "x1nbhmlj",
		paddingInlineStart: "x12w63v0",
		paddingInlineEnd: "x1nzty39",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function f(e) {
		var t = e.message, n = e.onGenAIPress, a = e.onMessageChange, i = e.richTextInputRef, l = m(null), c = m(null), f = p(null), g = f[0], h = f[1], y = p(!1), C = y[0], b = y[1], v = r("useWAWebIsKeyboardUser")(), S = v.isKeyboardUser, R = d(function() {
			b(!0);
		}, []), L = d(function(e) {
			c.current != null && e.relatedTarget instanceof Node && c.current.contains(e.relatedTarget) || b(!1);
		}, []), E = d(function() {
			h(null), (c.current == null || !c.current.contains(document.activeElement)) && b(!1);
		}, []), k = d(function(e) {
			var n = i.current;
			n != null ? (n.replaceSelection(e), n.focus()) : a(t + e), S && E();
		}, [
			i,
			S,
			a,
			t,
			E
		]), I = d(function(e) {
			e.preventDefault(), e.stopPropagation();
			var t = u.jsx(r("WAWebEmojiPanel.react"), {
				onEmoji: k,
				onFocusNext: E,
				onFocusPrev: E
			});
			h({
				anchor: e.target,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				menu: t,
				type: o("WAWebDropdown.react").MenuType.EmojiPicker
			});
		}, [k, E]), T = d(function(e) {
			var t = e.text.trim();
			a(t);
		}, [a]);
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			ref: c,
			xstyle: _.messageInputContainer,
			children: [
				u.jsx("div", {
					className: "x6s0dn4 x78zum5 x1iyjqo2 x129bwdz x1trrmfo xu0aao5",
					children: u.jsx(r("WAWebRichTextInput.react"), {
						ref: i,
						initialText: t,
						placeholder: o("WAWebBizBroadcastsCreationStrings").getMessageTextFieldLabel(),
						multiline: !0,
						testid: "biz-broadcasts-message-input",
						onChange: T,
						onFocus: R,
						onBlur: L,
						children: u.jsx(r("WAWebRichTextInputPlugins.react"), {
							textFormatEnabled: !0,
							textFormatShortcutsEnabled: !0,
							floatingToolbarEnabled: !0,
							bulletPointsEnabled: !0,
							numberedListEnabled: !0,
							inlineCodeEnabled: !0,
							blockQuoteEnabled: !0
						})
					})
				}),
				u.jsx("div", {
					className: "x2lah0s",
					children: n != null && u.jsx(r("WAWebBizBroadcastGenAIEntryPoint.react"), {
						isComposerFocused: C,
						onPress: n
					})
				}),
				(C || g != null) && u.jsx("div", {
					className: "x2lah0s",
					children: u.jsx(r("WDSButton.react"), {
						variant: "borderless",
						size: "small",
						Icon: r("WDSIconIcMood.react"),
						onPress: I,
						"aria-label": s._(
							/*BTDS*/
							""
						),
						testid: "biz-broadcast-creation-message-emoji-button"
					})
				}),
				g != null && u.jsx(o("WAWebUimUie.react").UIE, {
					displayName: "EmojiPicker",
					escapable: !0,
					popable: !0,
					dismissOnWindowResize: !0,
					ref: l,
					requestDismiss: E,
					children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: g })
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
