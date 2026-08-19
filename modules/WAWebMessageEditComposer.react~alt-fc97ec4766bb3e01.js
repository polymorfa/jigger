__d("WAWebMessageEditComposer.react", [
	"fbt",
	"WAWebChatPreferenceCollection",
	"WAWebComposeBoxUtils",
	"WAWebComposeConstants",
	"WAWebDropdown.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiPanel.react",
	"WAWebEmojiPickerPlugin",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMentionPickerPlugin",
	"WAWebMessageEditLinkPreviewPanel.react",
	"WAWebMessageEditUtils",
	"WAWebMsgGetters",
	"WAWebMsgMentionMap",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputConst",
	"WAWebRichTextInputPlugins.react",
	"WAWebSpoilerGating",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebWebIcCheckIcon.react",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcMood.react",
	"escapeRegex",
	"react",
	"stylex",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		composer: {
			position: "x1n2onr6",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		composerRefreshed: {
			alignItems: "xuk3077",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "x14e42zd",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x47fsot",
			borderBottomColor: "x1rrvw3c",
			borderInlineStartColor: "x18djku1",
			$$css: !0
		},
		inputContainer: {
			paddingTop: "x96k8nx",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "xdvlbce",
			paddingInlineStart: "x1g0dm76",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			backgroundColor: "xk7ee7b",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			marginInlineEnd: "xpwdb9g",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		inputContainerRefreshed: {
			marginInlineEnd: "x14z9mp",
			paddingTop: "x889kno",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "x1c1uobl",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		input: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		emojiButton: {
			marginInlineStart: "x13fj5qh",
			color: "xhslqc4",
			cursor: "x1ypdohk",
			alignSelf: "xqcrz7y",
			$$css: !0
		},
		emojiButtonRefreshed: {
			marginTop: "x1380le5",
			marginInlineEnd: "xqf2s3x",
			marginBottom: "xefnzgg",
			marginInlineStart: "x150mmf0",
			alignSelf: "xpvyfi4",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		}
	}, p = 8;
	function _(t) {
		var n = t.onEmoji, a = t.onFocusNext, i = t.onFocusPrev, l = t.xstyle, u = d(null), m = u[0], p = u[1], _ = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = c.jsx(r("WAWebEmojiPanel.react"), {
				onEmoji: n,
				onFocusNext: a,
				onFocusPrev: i
			});
			p({
				menu: e,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				type: o("WAWebDropdown.react").MenuType.EmojiPicker,
				anchor: t.target
			});
		}, f = function() {
			p(null);
		}, g = r("useWAWebStaticButtonA11y")(_), h = g[0], y = g[1], C = c.jsx("div", babelHelpers.extends({
			ref: h,
			className: (e || (e = r("stylex")))(l),
			title: s._(
				/*BTDS*/
				""
			)
		}, y, { children: c.jsx(r("WDSIconIcMood.react"), {}) })), b = null;
		return m && (b = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "EmojiPicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: f,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: m })
		})), c.jsxs(c.Fragment, { children: [C, b] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.disabled, n = e.onClick;
		return c.jsx(r("WDSButton.react"), {
			testid: "edit-message-confirm-button",
			onPress: n,
			Icon: o("WAWebWebIcCheckIcon.react").WebIcCheckIcon,
			disabled: t,
			variant: "filled",
			size: "medium",
			"aria-label": s._(
				/*BTDS*/
				""
			)
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n, a = e.disableConfirmButton, i = e.enableMentions, l = i === void 0 ? !0 : i, s = e.enableTextFormatting, u = s === void 0 ? !0 : s, g = e.initialLinkPreview, y = e.initialText, C = e.maxLength, b = e.msg, v = e.onConfirm, S = e.onInputChange, R = e.onLinkPreviewChange, L = e.placeholderOverride, E = o("useWAWebMsgValues").useMsgValues(b.id, [o("WAWebFrontendMsgGetters").getText, o("WAWebMsgGetters").getCaption]), k = E[0], I = E[1], T = o("WAWebFrontendMsgGetters").getChat(b.unsafe()), D = (t = (n = y != null ? y : k) != null ? n : I) != null ? t : "", x = d(D), $ = x[0], P = x[1], N = d(), M = N[0], w = N[1], A = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		]), F = function(t) {
			M && (M.focus(), M.replaceSelection(t));
		}, O = function() {
			M && M.focus();
		}, B = function(t) {
			P(t.text), S(t);
		}, W = null, q, U = o("WAWebMessageEditUtils").getMsgEditType(b.type);
		U === o("WAWebMessageEditUtils").MsgEditType.TextEdit && (q = c.jsx(r("WAWebMessageEditLinkPreviewPanel.react"), {
			chat: T,
			text: $,
			onChange: R,
			initialLinkPreview: g
		}));
		var V = o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
			chat: T,
			isEditingCaption: U === o("WAWebMessageEditUtils").MsgEditType.CaptionEdit
		}), H = L != null ? L : V, G = c.jsxs(r("WAWebRichTextInput.react"), {
			testid: "edit-message-composer",
			ref: w,
			initialText: y != null ? y : h(b),
			xstyle: m.input,
			onChange: B,
			onEnter: v,
			placeholder: H,
			title: H,
			maxLength: C != null ? C : o("WAWebComposeConstants").MAX_TXT_MSG_SIZE,
			maxVisibleLines: p,
			multiline: !0,
			focusOnMount: !0,
			spellCheck: A.spellcheck,
			enterIsNewLine: !A.enterIsSend,
			children: [
				c.jsx(r("WAWebRichTextInputPlugins.react"), {
					groupMetadata: T.groupMetadata,
					transformTextEmoji: A.transformTextEmoji,
					textFormatEnabled: u,
					spoilerEnabled: o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
					bulletPointsEnabled: u,
					numberedListEnabled: u,
					inlineCodeEnabled: u,
					blockQuoteEnabled: u,
					internLinksEnabled: u,
					phoneNumbersEnabled: u,
					linksEnabled: u,
					textFormatShortcutsEnabled: u,
					floatingToolbarEnabled: u
				}),
				c.jsx(r("WAWebEmojiPickerPlugin"), {}),
				l ? c.jsx(r("WAWebMentionPickerPlugin"), {
					chat: T,
					elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(T),
					source: "message_edit"
				}) : null
			]
		}), z = c.jsx(_, {
			xstyle: [
				m.emojiButton,
				m.emojiButtonRefreshed,
				o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
			],
			onEmoji: F,
			onFocusNext: O,
			onFocusPrev: O
		}), j = c.jsx(f, {
			onClick: v,
			disabled: a
		});
		return c.jsxs("div", {
			className: "x1n2onr6 x1c4vz4f x2lah0s",
			children: [
				q,
				W,
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					alignSelf: "stretch",
					justify: "center",
					columnGap: 8,
					margin: [
						0,
						20,
						20,
						20
					],
					padding: [
						2,
						0,
						8,
						0
					],
					xstyle: [m.composer, m.composerRefreshed],
					children: [
						c.jsx(o("WAWebFlex.react").FlexRow, {
							xstyle: [m.inputContainer, m.inputContainerRefreshed],
							children: G
						}),
						z,
						j
					]
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t, n, a = (t = (n = o("WAWebFrontendMsgGetters").getText(e)) != null ? n : o("WAWebMsgGetters").getCaption(e)) != null ? t : "", i = o("WAWebMsgMentionMap").calculateMsgMentionMap(e), l = o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(e);
		if (i) {
			var s = new RegExp(Object.keys(i).map(function(e) {
				return r("escapeRegex")(e);
			}).join("|"), "g");
			a = a.replace(s, function(e) {
				var t = i[e].id.toString();
				return "" + o("WAWebRichTextInputConst").ZWS + t + o("WAWebRichTextInputConst").ZWS;
			});
		}
		if (l) {
			var u = new RegExp(Object.keys(l).map(function(e) {
				return r("escapeRegex")(e);
			}).join("|"), "g");
			a = a.replace(u, function(e) {
				return "" + o("WAWebRichTextInputConst").ZWS + e.slice(1) + o("WAWebRichTextInputConst").ZWS;
			});
		}
		return a;
	}
	l.EmojiButton = _, l.MessageEditComposer = g;
}), 226);
