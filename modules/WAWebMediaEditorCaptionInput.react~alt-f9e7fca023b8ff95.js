__d("WAWebMediaEditorCaptionInput.react", [
	"fbt",
	"WAUnicodeUtils",
	"WAWebAttachMediaViewOnceInChat.react",
	"WAWebChatPreferenceCollection",
	"WAWebClickable.react",
	"WAWebDropdown.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiPanel.react",
	"WAWebEmojiPickerPlugin",
	"WAWebFlex.react",
	"WAWebGroupType",
	"WAWebIcMoodIcon.react",
	"WAWebL10N",
	"WAWebMediaCaptionConstants",
	"WAWebMentionPickerPlugin",
	"WAWebMentionSuggestions.react",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebSendButtonWithCount.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcClose.react",
	"react",
	"useWAWebIsKeyboardUser",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		buttonContainer: {
			minHeight: "x1rj1pf4",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		inputButton: {
			marginInlineStart: "x13fj5qh",
			color: "xhslqc4",
			$$css: !0
		},
		secondaryButtonContainer: {
			marginInlineStart: "x13fj5qh",
			$$css: !0
		},
		viewOnceHidden: {
			visibility: "xlshs6z",
			$$css: !0
		},
		richTextInput: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "x1t1x2f9",
			minWidth: "xeuugli",
			marginTop: "x1k70j0n",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xzueoph",
			marginInlineStart: "x1lziwak",
			minHeight: "xisnujt",
			color: "x14ug900",
			wordWrap: "x1vvkbs",
			whiteSpace: "x126k92a",
			userSelect: "x1hx0egp",
			$$css: !0
		},
		richTextInputText: {
			fontSize: "x1lkfr7t",
			$$css: !0
		},
		placeholderTruncate: {
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	};
	function f(e) {
		var t, n, a, i, l = e.chat, c = e.expandedTextFormatsEnabled, f = e.initialText, h = e.onEnter, y = e.onSendButtonClick, C = e.sendButtonEnabled, b = e.setCaptionInputRef, v = e.setSendButtonRef, S = (t = e.maxCaptionLength) != null ? t : o("WAWebMediaCaptionConstants").MAX_CAPTION_LENGTH, R = p(f), L = R[0], E = R[1], k = m(null), I = m(null), T = p(null), D = T[0], x = T[1], $ = r("useWAWebIsKeyboardUser")(), P = $.isKeyboardUser, N = function() {
			var e;
			(e = k.current) == null || e.focus();
		}, M = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		]);
		d(function() {
			N();
		}, []);
		var w = function(t) {
			k.current = t, b(t);
		}, A = function(t) {
			var e;
			(e = k.current) == null || e.reset(), N();
		}, F = function() {
			x(null), P && N();
		}, O = function(t) {
			var e = k.current;
			e && (e.focus(), e.replaceSelection(t)), P && F();
		}, B = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = u.jsx(r("WAWebEmojiPanel.react"), {
				onEmoji: O,
				onFocusNext: N,
				onFocusPrev: N
			});
			x({
				menu: e,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				type: o("WAWebDropdown.react").MenuType.EmojiPicker,
				anchor: t.target
			}), N();
		}, W = function(n) {
			E(n.parsableText), e.onChange(n.parsableText);
		}, q = function(t) {
			var e;
			(e = k.current) != null && e.isFocused() ? h(t) : h();
		}, U = o("WAUnicodeUtils").numCodepoints(L || ""), V = S - U < 50, H = L != null && L !== "" ? u.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: _.inputButton,
			onClick: A,
			title: s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSIconIcClose.react"), {})
		}) : null, G = V && u.jsx("div", {
			className: "x13fj5qh x1f6kntn xhslqc4",
			children: r("WAWebL10N").n(S - U)
		}), z = null;
		D && (z = u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "EmojiPicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			ref: I,
			requestDismiss: F,
			children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: D })
		}));
		var j = e.theme !== "document" && !l.id.isStatus() ? u.jsx(r("WAWebAttachMediaViewOnceInChat.react"), {
			chat: l,
			containerXstyle: [_.secondaryButtonContainer, e.viewOnceDisabled && _.viewOnceHidden],
			disabled: e.viewOnceDisabled,
			isOn: !!e.viewOnce,
			mediaType: e.msgType,
			onChange: e.onToggleViewOnce
		}) : null, K = e.chat.groupMetadata;
		((n = e.chat.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !o("WAWebMentionSuggestions.react").shouldEnableGroupMentions(K) && (K = null);
		var Q = (a = e.placeholderText) != null ? a : s._(
			/*BTDS*/
			""
		), X = u.jsxs(r("WAWebRichTextInput.react"), {
			ref: w,
			testid: "media-caption-input-container",
			initialText: f,
			placeholder: Q,
			ariaLabel: Q,
			placeholderTextXStyle: _.placeholderTruncate,
			onChange: W,
			onEnter: q,
			onFiles: e.onFiles,
			maxLength: S,
			maxVisibleLines: 5,
			multiline: e.multiline !== !1,
			spellCheck: M.spellcheck,
			enterIsNewLine: !M.enterIsSend,
			focusOnMount: !0,
			xstyle: _.richTextInput,
			textXstyle: _.richTextInputText,
			children: [
				u.jsx(r("WAWebRichTextInputPlugins.react"), {
					groupMetadata: K,
					transformTextEmoji: M.transformTextEmoji,
					textFormatEnabled: !0,
					bulletPointsEnabled: c !== !1,
					numberedListEnabled: c !== !1,
					inlineCodeEnabled: c !== !1,
					blockQuoteEnabled: c !== !1,
					internLinksEnabled: e.internLinksEnabled !== !1,
					phoneNumbersEnabled: e.phoneNumbersEnabled !== !1,
					linksEnabled: !0,
					floatingToolbarEnabled: !0,
					textFormatShortcutsEnabled: !0
				}),
				u.jsx(r("WAWebEmojiPickerPlugin"), {}),
				u.jsx(r("WAWebMentionPickerPlugin"), {
					chat: e.chat,
					elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(l),
					source: "media-editor-caption"
				})
			]
		});
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			className: (i = e.containerClassName) != null ? i : "xh8yej3 xic84rp xdj266r x15d6yb6 xat24cr x798i94",
			align: "center",
			justify: "center",
			children: [
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "start",
					className: "x9f619 xh8yej3 x1ba4aug x1tiyuxx xvtqlqk x1nbhmlj xdx6fka x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a",
					children: [
						e.modeSelectorElement != null ? u.jsx("div", {
							className: "x1xegmmw x2lah0s xamitd3",
							children: e.modeSelectorElement
						}) : null,
						X,
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: _.buttonContainer,
							align: "center",
							children: [
								G,
								H,
								u.jsx(g, { onClick: B })
							]
						})
					]
				}),
				j,
				z,
				C === !0 ? u.jsx("div", {
					className: "x10l6tqk xdg88n9",
					children: u.jsx(r("WAWebSendButtonWithCount.react"), {
						ref: v,
						ariaLabel: s._(
							/*BTDS*/
							""
						),
						large: !0,
						count: null,
						onClick: y,
						disabled: !1
					})
				}) : null
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.onClick;
		return u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: t,
			xstyle: _.inputButton,
			title: s._(
				/*BTDS*/
				""
			),
			children: u.jsx(o("WAWebIcMoodIcon.react").IcMoodIcon, {})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
