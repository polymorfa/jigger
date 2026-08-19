__d("WAWebStatusComposeBox.react", [
	"fbt",
	"Promise",
	"WAAbortError",
	"WAFilteredCatch",
	"WALogger",
	"WAWebChatPreferenceCollection",
	"WAWebComposeBoxExpressionPanels.react",
	"WAWebComposeBoxPanelsMenu.react",
	"WAWebContactBlockedErrorAction",
	"WAWebEmojiSuggestions.react",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebMsgGetters",
	"WAWebNewsletterSendReactionAction",
	"WAWebNoop",
	"WAWebResizeObserver.react",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebSendStatusReactionAction",
	"WAWebSendStickerAction",
	"WAWebSendTextMsgChatAction",
	"WAWebStatusActionButtonStyles",
	"WAWebStatusGatingUtils",
	"WAWebStatusLikeEmojis",
	"WAWebStatusLikeHeartIcon.react",
	"WAWebStatusPlayerQuickRepliesBar.react",
	"WAWebSuggestionsPanelContainer.react",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumStatusReplyMessageType",
	"WAWebWamEnumStatusReplyResult",
	"WAWebWdsIcSendFilledIcon.react",
	"WDSIconIcRepeat.react",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebIsTabKeyboardUser",
	"useWAWebModelValues",
	"useWAWebReactions",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m, p, _ = p || (p = o("react")), f = p, g = f.useEffect, h = f.useImperativeHandle, y = f.useRef, C = f.useState, b = {
		paddingBlock3: {
			paddingTop: "xyqdw3p",
			paddingBottom: "xg8j3zb",
			$$css: !0
		},
		marginBlock6: {
			marginTop: "x1k70j0n",
			marginBottom: "xzueoph",
			$$css: !0
		}
	}, v = {
		iconButtonColourFocused: {
			color: "xhslqc4",
			$$css: !0
		},
		iconButtonColourOutOfFocus: {
			color: "x17t9dm2",
			$$css: !0
		},
		iconButtonColourLiked: {
			color: "x8dwe99",
			$$css: !0
		},
		inlineSendButton: {
			position: "x10l6tqk",
			insetInlineEnd: "x11dcrhx",
			left: null,
			right: null,
			top: "xwa60dl",
			transform: "x1cb1t30",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		inlineSendButtonIcon: {
			width: "xvy4d1p",
			height: "xxk0z11",
			color: "x17t9dm2",
			$$css: !0
		},
		replyPlaceholderColourFocused: {
			color: "xhslqc4",
			$$css: !0
		},
		replyPlaceholderColourOutOfFocus: {
			color: "x17t9dm2",
			$$css: !0
		},
		inputContainer: {
			boxSizing: "x9f619",
			width: "xh8yej3",
			minHeight: "x1ba4aug",
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "xdx6fka",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		inputInFocus: {
			backgroundColor: "xk7ee7b",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			$$css: !0
		},
		inputOutOfFocus: {
			backgroundColor: "x1gaxu4n",
			$$css: !0
		},
		inputOutOfFocusWithText: {
			backgroundColor: "x1gaxu4n",
			color: "x17t9dm2",
			$$css: !0
		},
		inputText: {
			fontSize: "x1lkfr7t",
			$$css: !0
		}
	}, S = function(t, n, r) {
		return !!t || n || !!r;
	}, R = function() {
		var e = o("WAWebToast.react").genId();
		o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, {
			msg: s._(
				/*BTDS*/
				""
			),
			id: e
		}));
	};
	function L(t) {
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, c), p = l.onFocusChange, f = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		]), L = y(null), E = C(!1), k = E[0], I = E[1], T = C(void 0), D = T[0], x = T[1], $ = C(void 0), P = $[0], N = $[1], M = C(null), w = M[0], A = M[1], F = C(300), O = F[0], B = F[1], W = C(""), q = W[0], U = W[1], V = C(!1), H = V[0], G = V[1], z = r("WAWebNoop"), j = r("useWAWebReactions")([l.msg.id.toString()], z), K = j.reactionsModels, Q = (a = K[0]) == null ? void 0 : a.reactionByMe, X = Q != null && Q.reactionText !== "", Y = y(null), J = function(t) {
			t == null || t.stopPropagation(), t == null || t.preventDefault();
			var e = !X;
			if (e) {
				var n;
				(n = Y.current) == null || n.playLikeAnimation();
			} else {
				var r;
				(r = Y.current) == null || r.cancelAnimation();
			}
			var a = e ? o("WAWebStatusLikeEmojis").STATUS_LIKE_EMOJI : "", i = o("WAWebMsgGetters").getIsNewsletterMsg(l.msg) ? o("WAWebNewsletterSendReactionAction").sendNewsletterReaction(l.msg, a) : o("WAWebSendStatusReactionAction").sendStatusReaction(l.msg, a);
			i.catch(function(e) {});
		}, Z = function(t) {
			return t ? s._(
				/*BTDS*/
				""
			) : X ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, ee = function(t) {
			return t ? v.iconButtonColourFocused : X ? v.iconButtonColourLiked : v.iconButtonColourOutOfFocus;
		}, te = y(null), ne = C(null), re = ne[0], oe = ne[1], ae = y(null), ie = r("useWAWebUnmountSignal")(), le = r("useWAWebIsTabKeyboardUser")();
		g(function() {
			var e = r("nullthrows")(o("WAWebMsgGetters").getSender(l.msg));
			o("WAWebFindChatAction").findOrCreateLatestChat(e, "statusComposeBox").then(function(e) {
				var t = e.chat;
				ie.aborted || N(t);
			});
		}, []);
		var se = S(D, k, w);
		g(function() {
			se ? l.pause() : l.play();
		}, [se]);
		var ue = function() {
			return se;
		}, ce = function() {
			re == null || re.focus();
		}, de = function() {
			x(void 0), ce();
		}, me = function() {
			A(null), ce();
		}, pe = function() {
			x(void 0), A(null);
		}, _e = function() {
			if (P) return (m || (m = n("Promise"))).resolve(P);
			var e = r("nullthrows")(o("WAWebMsgGetters").getSender(l.msg));
			return o("WAWebFindChatAction").findOrCreateLatestChat(e, "statusComposeBox").then(function(e) {
				return e.chat;
			});
		}, fe = function() {
			R(), pe(), re == null || re.reset(), l.dismissReply(void 0, !0);
		}, ge = function(t, n) {
			var e = o("WAWebToast.react").genId(), a = n === o("WAWebWamEnumStatusReplyMessageType").STATUS_REPLY_MESSAGE_TYPE.QUICK_REPLY;
			t.then(function() {
				l.onSend(), l.onLogStatusReply(o("WAWebWamEnumStatusReplyResult").STATUS_REPLY_RESULT.OK, n, a);
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(r("WAWebContactBlockedErrorAction"), function() {
				P && (o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						"",
						[s._param("contact", o("WAWebFrontendContactGetters").getFormattedName(P.contact))]
					),
					id: e
				})), l.onLogStatusReply(o("WAWebWamEnumStatusReplyResult").STATUS_REPLY_RESULT.ERROR_UNKNOWN, n, a));
			})), a || fe();
		}, he = function(n) {
			var t, r;
			n == null || n.stopPropagation(), n == null || n.preventDefault();
			var a = (t = re == null || (r = re.editorContent()) == null ? void 0 : r.text) != null ? t : q;
			a.trim().length && _e().then(function(t) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleTextSend inside WAWebStatusComposeBox"])));
				var n = o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, a, { quotedMsg: l.msg });
				ge(n, o("WAWebWamEnumStatusReplyMessageType").STATUS_REPLY_MESSAGE_TYPE.TEXT);
			});
		}, ye = function(t) {
			I(t), p(t);
		}, Ce = function() {
			ye(!0);
		}, be = function() {
			document.activeElement, document.body;
		}, ve = function() {
			return k;
		}, Se = function() {
			ye(!1), pe(), G(!1);
		}, Re = function(t) {
			re == null || re.replaceSelection(t);
		}, Le = function(t, n) {
			t.isCreateButton || _e().then(function(e) {
				var r = o("WAWebSendStickerAction").sendStickerToChat(e, t, {
					stickerSendOrigin: n,
					quotedMsg: l.msg
				});
				ge(r, o("WAWebWamEnumStatusReplyMessageType").STATUS_REPLY_MESSAGE_TYPE.STICKER);
			});
		}, Ee = function() {
			var e;
			(e = ae.current) == null || e.restoreFocus();
		}, ke = function(t) {
			B(t.width);
		}, Ie = function(t) {
			te.current = t;
		}, Te = function(t) {
			t == null ? me() : (A(t), ye(!0));
		}, De = function(t, n) {
			t.stopPropagation(), G(!0), _e().then(function(e) {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["handleQuickReplySend inside WAWebStatusComposeBox"])));
				var t = o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, n, { quotedMsg: l.msg });
				ge(t, o("WAWebWamEnumStatusReplyMessageType").STATUS_REPLY_MESSAGE_TYPE.QUICK_REPLY);
			});
		};
		h(i, function() {
			return {
				isFocused: ve,
				isPaused: ue,
				restoreFocus: ce,
				blur: Se
			};
		});
		var xe = ve() || w != null, $e = o("WAWebStatusGatingUtils").isChannelStatusLikesSendEnabled(), Pe = (function() {
			if (xe) return he;
			if (o("WAWebStatusGatingUtils").isStatusLikesSendEnabled()) return J;
		})(), Ne = O != null && w != null ? _.jsx(r("WAWebResizeObserver.react"), {
			onResize: ke,
			children: _.jsx(r("WAWebComposeBoxExpressionPanels.react"), {
				displayCache: te.current,
				width: O,
				onDisplayCache: Ie,
				onEmoji: Re,
				onFocusRelease: r("WAWebNoop"),
				onGif: r("WAWebNoop"),
				onExpressionPanelChange: Te,
				onSticker: Le,
				requestDismiss: me,
				selectedExpressionPanel: w,
				theme: o("WAWebComposeBoxPanelsMenu.react").PanelsTheme.StatusReplyComposeBox
			})
		}) : null, Me = D ? _.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "EmojiPicker",
			escapable: !0,
			dismissOnWindowResize: !0,
			requestFocus: Ee,
			children: _.jsx("div", { children: _.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "EmojiPicker",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: de,
				requestFocus: Ee,
				children: _.jsx(r("WAWebUimUieMenu.react"), { contextMenu: D })
			}) })
		}) : null, we = q.length === 0 ? _.jsx(r("WAWebStatusPlayerQuickRepliesBar.react"), {
			onClick: De,
			onClickAnimateEnd: fe
		}) : null, Ae = (k || le) && w == null ? _.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "StatusQuickReply",
			escapable: !0,
			requestDismiss: function() {
				l.onLogStatusReply(o("WAWebWamEnumStatusReplyResult").STATUS_REPLY_RESULT.CANCELLED), l.dismissReply();
			},
			children: _.jsx("div", {
				className: "xupqr0c xyri2b x18d9i69 x11t971q xvc5jky x6my1t9 x1nrll8i xuuh30 x10l6tqk xxzp1fc",
				children: we
			})
		}) : null, Fe = _.jsx("div", {
			className: "xcmsji6",
			children: _.jsx(o("WAWebComposeBoxPanelsMenu.react").ComposeBoxExpressionPanelsMenu, {
				chat: P,
				selectedExpressionPanel: w,
				onChange: Te,
				theme: o("WAWebComposeBoxPanelsMenu.react").PanelsTheme.StatusReplyComposeBox,
				isMediaProtected: $e,
				openButtonStyle: $e ? o("WAWebStatusActionButtonStyles").statusActionButtonStyles.backgroundProtection : null,
				buttonStyle: [xe ? v.iconButtonColourFocused : v.iconButtonColourOutOfFocus],
				buttonProps: {
					closePanel: { "data-tab": o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION },
					openEmoji: { "data-tab": o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION },
					openSticker: { "data-tab": o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION }
				}
			})
		}), Oe = o("WAWebMsgGetters").getIsGroupStatus(l.msg) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Be = re == null ? void 0 : re.editor, We = !xe && q.trim().length > 0, qe = function() {
			return xe ? v.inputInFocus : We ? v.inputOutOfFocusWithText : v.inputOutOfFocus;
		}, Ue = _.jsxs(_.Fragment, { children: [_.jsx("div", {
			className: "x10l6tqk xo2ifbc xs7f9wi xi5uv41",
			children: Be && _.jsx(r("WAWebEmojiSuggestions.react"), {
				editor: Be,
				kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.Menu
			})
		}), _.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: (d || (d = r("stylex")))(v.inputContainer, b.paddingBlock3, qe()),
			onClick: ce,
			children: [_.jsx(r("WAWebRichTextInput.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
				xstyle: b.marginBlock6,
				textXstyle: v.inputText,
				placeholderTextXStyle: xe ? v.replyPlaceholderColourFocused : v.replyPlaceholderColourOutOfFocus,
				ref: oe,
				placeholder: Oe,
				multiline: !0,
				spellCheck: f.spellcheck,
				enterIsNewLine: !f.enterIsSend,
				onChange: function(t) {
					return U(t.text);
				},
				onFocus: Ce,
				onBlur: be,
				onEnter: he,
				children: _.jsx(r("WAWebRichTextInputPlugins.react"), {
					transformTextEmoji: f.transformTextEmoji,
					textFormatEnabled: !0,
					bulletPointsEnabled: !0,
					numberedListEnabled: !0,
					inlineCodeEnabled: !0,
					blockQuoteEnabled: !0,
					internLinksEnabled: !0,
					phoneNumbersEnabled: !0,
					linksEnabled: !0,
					textFormatShortcutsEnabled: !0
				})
			}), !xe && q.trim().length > 0 ? _.jsx(r("WAWebUnstyledButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
				xstyle: [v.inlineSendButton, v.iconButtonColourOutOfFocus],
				onClick: he,
				children: _.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, { xstyle: v.inlineSendButtonIcon })
			}) : null]
		})] }), Ve = H ? null : _.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x12ol6y4 x180vkcf x1khw62d x709u02 x12xzxwr x1n2onr6" },
			1: { className: "xhjsbib x1h2kqdt x12ol6y4 x180vkcf x1khw62d x709u02 x12xzxwr x1n2onr6" }
		}[!!xe << 0], { children: [_.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "status-panel",
			appear: !0,
			children: Ne
		}), _.jsxs("div", {
			className: "x12xzxwr x78zum5 x1q0g3np x889kno x2vl965 x1a8lsjc xe2zdcy",
			children: [
				Fe,
				_.jsx("div", {
					className: "x1n2onr6 x13vifvy xu96u03 x1rg5ohu x10kpxic",
					children: Ue
				}),
				l.onReshare != null && _.jsx(r("WAWebUnstyledButton.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					testid: "status-reshare-button",
					dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
					xstyle: [o("WAWebStatusActionButtonStyles").statusActionButtonStyles.iconButton, $e && o("WAWebStatusActionButtonStyles").statusActionButtonStyles.backgroundProtection],
					onClick: l.onReshare,
					children: _.jsx(r("WDSIconIcRepeat.react"), {
						xstyle: [o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26Svg, $e && o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26SvgCentered],
						colorName: "persistentAlwaysWhite"
					})
				}),
				_.jsx(r("WAWebUnstyledButton.react"), {
					"aria-label": Z(xe),
					testid: "status_like_toggle_button",
					dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
					xstyle: [
						o("WAWebStatusActionButtonStyles").statusActionButtonStyles.iconButton,
						$e && o("WAWebStatusActionButtonStyles").statusActionButtonStyles.backgroundProtection,
						ee(xe)
					],
					onClick: Pe,
					children: xe || !o("WAWebStatusGatingUtils").isStatusLikesSendEnabled() ? _.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, { xstyle: [o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26Svg, $e && o("WAWebStatusActionButtonStyles").statusActionButtonStyles.square26SvgCentered] }) : _.jsx(r("WAWebStatusLikeHeartIcon.react"), {
						ref: Y,
						isLiked: X
					})
				}),
				Me
			]
		})] }));
		return g(function() {
			var e = function() {
				var e, t = document.activeElement;
				!((e = L.current) != null && e.contains(t)) && k && (l.onLogStatusReply(o("WAWebWamEnumStatusReplyResult").STATUS_REPLY_RESULT.CANCELLED), l.dismissReply(!1));
			};
			return document.addEventListener("focusin", e), function() {
				document.removeEventListener("focusin", e);
			};
		}, [k]), _.jsxs("div", babelHelpers.extends({ ref: L }, {
			0: { className: "x10l6tqk x3m8u43 xn0vg7t xu96u03 x12xzxwr x19sv2k2 x1kozois x11t971q xvc5jky x1a8lsjc" },
			1: { className: "x10l6tqk x3m8u43 xn0vg7t xu96u03 x12xzxwr x1kozois x11t971q xvc5jky x1a8lsjc x19sv2k2" }
		}[(l.onReshare != null) << 0], { children: [Ve, _.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "status-quick-reply",
			appear: !0,
			children: Ae
		})] }));
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 226);
