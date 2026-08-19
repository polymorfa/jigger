__d("WAWebComposeBoxPopupPanels.react", [
	"WAWebABProps",
	"WAWebAnimationGroupItem.react",
	"WAWebBizCtwaContextImagePreview.react",
	"WAWebCallLinkPreviewThumbnail.react",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebComposeBoxExpressionPanels.react",
	"WAWebComposeBoxPanelsMenu.react",
	"WAWebComposeBoxPopupPanel.react",
	"WAWebConversationSpam.react",
	"WAWebDisplayType",
	"WAWebFrontendChatGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGetCallLinkPreviewTitle",
	"WAWebMediaLinkPreview.react",
	"WAWebMediaLinkPreviewContainer.react",
	"WAWebMsgType",
	"WAWebMultiStepFormButton",
	"WAWebMultiStepFormPanel.react",
	"WAWebNoop",
	"WAWebPREGatingUtils",
	"WAWebParseCallLinkType",
	"WAWebPaymentLinkPreviewWithAmountFeature",
	"WAWebQuestionReplyQuotedMessage.react",
	"WAWebQuestions.flow",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebQuotedMsg.react",
	"WAWebQuotedMsgAdminGroupName.react",
	"WAWebResizeObserver.react",
	"WAWebThreadsViewComposeQuotedMsgContext",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebVelocityTransitionGroup",
	"WDSMargins.stylex",
	"cr:5981",
	"gkx",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebChatInternalStatusHookWrapper",
	"useWAWebChatValues",
	"useWAWebListener",
	"useWAWebMeasure",
	"useWAWebSetModelValue"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useEffect, p = c.useImperativeHandle, _ = c.useRef, f = c.useState, g = { marginTop6: {
		marginTop: "x1k70j0n",
		$$css: !0
	} }, h = {
		overlay: {
			position: "x10l6tqk",
			bottom: "x1ey2m1c",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			boxSizing: "x9f619",
			width: "xh8yej3",
			$$css: !0
		},
		overlayRefresh: {
			width: "x8pckko",
			$$css: !0
		},
		topPanelContainer: {
			borderStartStartRadius: "x12l2aii",
			borderStartEndRadius: "x1mbk4o",
			maxWidth: "xazf962",
			display: "x1lliihq",
			$$css: !0
		},
		inputBoxShadow: {
			boxShadow: "xkfubxc",
			$$css: !0
		},
		overlayWithForm: {
			bottom: "xcsbdjy",
			$$css: !0
		}
	};
	function y(e) {
		var t = o("react-compiler-runtime").c(4), n = e.chat, a = e.onClickDismissSpam, i = e.onClickNotSpam, l;
		return t[0] !== n || t[1] !== a || t[2] !== i ? (l = u.jsx(r("WAWebConversationSpam.react"), {
			chat: n,
			onClickNotSpam: i,
			onClickDismissSpam: a
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l) : l = t[3], l;
	}
	function C(e) {
		var t = e.getComposeBlockWidth, n = e.onEmoji, a = e.onExpressionPanelChange, i = e.onExpressionPanelClose, l = e.onGif, s = e.onSticker, c = e.ref, d = e.restoreFocus, m = e.selectedExpressionPanel, f = _(null), g = _(), h = function(t) {
			g.current = t;
		};
		p(c, function() {
			return { restoreFocus: function(t) {
				var e;
				(e = f.current) == null || e.restoreFocus(t);
			} };
		});
		var y = r("useWAWebMeasure")(), C = y[0], b = y[1], v = b.width > 0 ? b.width : t(), S = function() {
			d();
		};
		return u.jsx(r("WAWebAnimationGroupItem.react"), {
			ref: C,
			children: u.jsx(r("WAWebComposeBoxExpressionPanels.react"), {
				displayCache: g.current,
				width: v,
				onDisplayCache: h,
				onEmoji: n,
				onFocusRelease: S,
				onGif: l,
				onExpressionPanelChange: a,
				onSticker: s,
				requestDismiss: i,
				ref: f,
				selectedExpressionPanel: m,
				theme: o("WAWebComposeBoxPanelsMenu.react").PanelsTheme.ChatComposeBox
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		"use no forget";
		var t, n = e.chat, a = e.isTopmostPanel, i = e.questionType, l = e.rawQuotedMsg, s = e.ref, c = e.restoreFocus, m = o("useWAWebSetModelValue").useSetModelValue(n, "composeQuotedMsg"), p = d(r("WAWebThreadsViewComposeQuotedMsgContext")), _ = (t = p == null ? void 0 : p.setQuotedMsg) != null ? t : m, f = function(t) {
			t === void 0 && (t = o("WAWebUim").DismissReason.UIM_INTERACTION), t !== o("WAWebUim").DismissReason.LIFECYCLE && (_(null), o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageDeleted(n.id));
		};
		return u.jsx(o("WAWebUimUie.react").UIE, {
			ref: s,
			displayName: "ComposeBoxQuotedMsg",
			escapable: !0,
			requestFocus: c,
			requestDismiss: f,
			children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
				onOmit: f,
				questionType: i,
				isTopmostPanel: a,
				children: u.jsx(r("WAWebQuotedMsg.react"), {
					msg: l.safe(),
					displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
					composeQuotedMsgRemoteJid: n.composeQuotedMsgRemoteJid,
					theme: "composeBox",
					chat: o("WAWebFrontendMsgGetters").getChat(l),
					onClick: function() {
						o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageTappedInComposer(n.id);
					},
					shouldHideQuotedMsgAuthor: l.shouldHideQuotedMsgAuthor
				}, l.id.toString())
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = o("react-compiler-runtime").c(8), n = e.isTopmostPanel, a = e.questionReplyQuotedMessage, i = e.ref, l;
		t[0] !== a ? (l = u.jsx(r("WAWebQuestionReplyQuotedMessage.react"), { questionReplyQuotedMessage: a }), t[0] = a, t[1] = l) : l = t[1];
		var s;
		t[2] !== n || t[3] !== l ? (s = u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
			onOmit: r("WAWebNoop"),
			isTopmostPanel: n,
			questionType: o("WAWebQuestions.flow").QuestionType.Reply,
			showCloseButton: !1,
			children: l
		}), t[2] = n, t[3] = l, t[4] = s) : s = t[4];
		var c;
		return t[5] !== i || t[6] !== s ? (c = u.jsx(o("WAWebUimUie.react").UIE, {
			ref: i,
			displayName: "QuestionReplyQuotedMsg",
			escapable: !1,
			children: s
		}), t[5] = i, t[6] = s, t[7] = c) : c = t[7], c;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(18), n = e.chat, a = e.questionType, i = e.quotedGroupJid, l = e.ref, s = e.restoreFocus, c = o("useWAWebSetModelValue").useSetModelValue(n, "quotedMsgAdminGroupJid"), d;
		t[0] !== c ? (d = function(t) {
			var e = t === void 0 ? o("WAWebUim").DismissReason.UIM_INTERACTION : t;
			e !== o("WAWebUim").DismissReason.LIFECYCLE && c(null);
		}, t[0] = c, t[1] = d) : d = t[1];
		var m = d, p = n.quotedMsgAdminGroupSubject != null ? n.quotedMsgAdminParentGroupJid : void 0, _ = n.quotedMsgAdminGroupSubject, f;
		t[2] !== i ? (f = i.toString(), t[2] = i, t[3] = f) : f = t[3];
		var g;
		t[4] !== n.quotedMsgAdminGroupSubject || t[5] !== i || t[6] !== p || t[7] !== f ? (g = u.jsx(o("WAWebQuotedMsgAdminGroupName.react").QuotedMsgAdminGroupName, {
			isComposePreview: !0,
			quotedGroupJid: i,
			quotedParentGroupJid: p,
			quotedGroupSubject: _
		}, f), t[4] = n.quotedMsgAdminGroupSubject, t[5] = i, t[6] = p, t[7] = f, t[8] = g) : g = t[8];
		var h;
		t[9] !== m || t[10] !== a || t[11] !== g ? (h = u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
			questionType: a,
			onOmit: m,
			isTopmostPanel: !0,
			children: g
		}), t[9] = m, t[10] = a, t[11] = g, t[12] = h) : h = t[12];
		var y;
		return t[13] !== m || t[14] !== l || t[15] !== s || t[16] !== h ? (y = u.jsx(o("WAWebUimUie.react").UIE, {
			ref: l,
			displayName: "QuotedMsgAdminGroupName",
			escapable: !0,
			requestFocus: s,
			requestDismiss: m,
			children: h
		}), t[13] = m, t[14] = l, t[15] = s, t[16] = h, t[17] = y) : y = t[17], y;
	}
	function R(e) {
		var t = e.isTopmostPanel, n = e.linkPreviewData, a = e.links, i = e.omitLinkPreview, l = e.questionType, s = e.ref, c = n.description, d = n.inviteGrpType, m = n.isLoading, p = n.matchedText, _ = n.thumbnail, f = n.thumbnailHeight, g = n.thumbnailHQ, h = n.thumbnailWidth, y = n.title, C = o("WAWebMediaLinkPreviewContainer.react").getHostnameForUrl(p), b = o("WAWebPaymentLinkPreviewWithAmountFeature").isPaymentLinkPreviewWithAmountEnabled(n, a), v = r("WAWebParseCallLinkType")(p), S = v != null ? u.jsx(r("WAWebCallLinkPreviewThumbnail.react"), { callType: v }) : null;
		return u.jsx(o("WAWebUimUie.react").UIE, {
			ref: s,
			displayName: "ComposeBoxLinkPreview",
			escapable: !0,
			requestDismiss: i,
			children: u.jsx("div", {
				"data-testid": "compose-box-link-preview",
				className: "x6ikm8r",
				children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
					onOmit: i,
					bodyBackground: !1,
					isTopmostPanel: t,
					questionType: l,
					showCloseButton: !b,
					children: u.jsx(r("WAWebMediaLinkPreview.react"), {
						title: v != null ? String(r("WAWebGetCallLinkPreviewTitle")(v)) : y,
						compose: !0,
						thumbnail: S,
						thumbnailJpegHQ: S != null ? null : g,
						matchedText: C != null ? C : p,
						description: v != null ? p : c,
						thumbnailJpeg: S != null ? null : _,
						inviteGrpType: d,
						isLoading: m,
						thumbnailJpegWidth: h,
						thumbnailJpegHeight: f,
						linkPreviewData: n,
						links: a
					})
				})
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = o("react-compiler-runtime").c(12), n = e.ctwaContextData, a = e.ctwaContextLinkData, i = e.isTopmostPanel, l = e.omitCtwa, s = e.questionType, c = e.ref, d;
		t[0] !== n || t[1] !== a.sourceUrl ? (d = u.jsx(r("WAWebBizCtwaContextImagePreview.react"), {
			context: n,
			sourceUrl: a.sourceUrl,
			compose: !0
		}), t[0] = n, t[1] = a.sourceUrl, t[2] = d) : d = t[2];
		var m;
		t[3] !== i || t[4] !== l || t[5] !== s || t[6] !== d ? (m = u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
			onOmit: l,
			questionType: s,
			isTopmostPanel: i,
			children: d
		}), t[3] = i, t[4] = l, t[5] = s, t[6] = d, t[7] = m) : m = t[7];
		var p;
		return t[8] !== l || t[9] !== c || t[10] !== m ? (p = u.jsx(o("WAWebUimUie.react").UIE, {
			ref: c,
			displayName: "ComposeBoxCtwaContextPreview",
			escapable: !0,
			requestDismiss: l,
			children: m
		}), t[8] = l, t[9] = c, t[10] = m, t[11] = p) : p = t[11], p;
	}
	function E(t, a) {
		var i, l, s, c = a.chat, p = a.ctwaContextData, E = a.ctwaContextLinkData, k = a.getComposeBlockWidth, I = a.linkPreviewData, T = a.links, D = a.omitCtwa, x = a.omitLinkPreview, $ = a.onClickDismissSpam, P = a.onClickNotSpam, N = a.onComposeHeightChange, M = a.onEmoji, w = a.onExpressionPanelChange, A = a.onExpressionPanelClose, F = a.onGif, O = a.onSticker, B = a.questionReplyQuotedMessage, W = a.questionType, q = a.restoreFocus, U = a.selectedExpressionPanel, V = a.showSpamPanel, H = _(null), G = function() {
			var e;
			if (o("WAWebABProps").getABPropConfigValue("im_nfm_multi_step_form_killswitch")) return null;
			var t = c.msgs.last();
			if (t == null || t.id.fromMe) return null;
			var n = t.safe();
			if (n.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return null;
			var r = (e = n.interactivePayload) == null ? void 0 : e.messageParamsJson;
			if (r == null) return null;
			var a = o("WAWebMultiStepFormButton").parseMultiStepFormButton(r);
			return a == null ? null : {
				formInfo: a,
				msg: n
			};
		}, z = f(G), j = z[0], K = z[1];
		o("useWAWebListener").useListener(c.msgs, "add", function(e) {
			var t;
			if (j == null && !o("WAWebABProps").getABPropConfigValue("im_nfm_multi_step_form_killswitch") && !e.id.fromMe) {
				var n = (t = e.interactivePayload) == null ? void 0 : t.messageParamsJson;
				if (n != null) {
					var r = o("WAWebMultiStepFormButton").parseMultiStepFormButton(n);
					r != null && K({
						formInfo: r,
						msg: e
					});
				}
			}
		}), o("useWAWebListener").useListener(c.msgs, "remove_msgs", function(e) {
			if (j != null) {
				var t = j.msg.id;
				e.some(function(e) {
					return e == null ? void 0 : e.id.equals(t);
				}) && K(null);
			}
		}), o("useWAWebListener").useListener(c.msgs, "reset", function() {
			j != null && K(null);
		});
		var Q = [], X = [], Y = o("useWAWebChatValues").useChatValues(c.id, [
			o("WAWebChatGetters").getIsPSA,
			(s = o("WAWebFrontendChatGetters")).getShouldAppearInList,
			s.getComposeQuotedMsg,
			s.getComposeQuotedMsgRemoteJid,
			s.getQuotedMsgAdminGroupJid,
			s.getQuotedMsgAdminGroupSubject,
			s.getQuotedMsgAdminParentGroupJid,
			s.getMsgs,
			s.getContact
		]), J = Y[0], Z = Y[1], ee = Y[2], te = Y[3], ne = Y[4], re = Y[5], oe = Y[6], ae = Y[7], ie = Y[8], le = d(r("WAWebThreadsViewComposeQuotedMsgContext")), se = (i = le == null ? void 0 : le.quotedMsg) != null ? i : ee, ue = null;
		V && !J && Z && ae && ae.length > 0 && (ue = u.jsx(y, {
			chat: c,
			onClickNotSpam: P,
			onClickDismissSpam: $
		})), U && k() != null ? X.push(u.jsx(C, {
			getComposeBlockWidth: k,
			onEmoji: M,
			onExpressionPanelChange: w,
			onExpressionPanelClose: A,
			onGif: F,
			onSticker: O,
			restoreFocus: q,
			ref: t,
			selectedExpressionPanel: U
		})) : X.push(null);
		var ce = (l = r("useWAWebChatInternalStatusHookWrapper")(c.id)) != null ? l : {}, de = ce.hasActiveStatus;
		r("gkx")("26258") === !1 && o("WAWebChatGetters").getIsGroup(c) === !1 && n("cr:5981") != null && de === !0 ? Q.push(u.jsx(n("cr:5981").InternalStatusWarningComposeBox, {
			id: c.contact.id,
			renderImmediately: !0
		})) : Q.push(null), B ? Q.push(u.jsx(v, {
			questionReplyQuotedMessage: B,
			isTopmostPanel: !Q.some(Boolean)
		})) : se ? Q.push(u.jsx(b, {
			chat: c,
			rawQuotedMsg: se,
			isTopmostPanel: !Q.some(Boolean),
			restoreFocus: q,
			questionType: W
		})) : ne ? Q.push(u.jsx(S, {
			chat: c,
			restoreFocus: q,
			quotedGroupJid: ne,
			questionType: W
		})) : Q.push(null), I ? Q.push(u.jsx(R, {
			linkPreviewData: I,
			links: T,
			isTopmostPanel: !Q.some(Boolean),
			omitLinkPreview: x,
			questionType: W
		})) : Q.push(null), E ? Q.push(u.jsx(L, {
			ctwaContextLinkData: E,
			isTopmostPanel: !Q.some(Boolean),
			omitCtwa: D,
			ctwaContextData: p,
			questionType: W
		})) : Q.push(null);
		var me = Q.some(Boolean) || j != null, pe = [h.overlay];
		pe.push(h.overlayRefresh, o("WDSMargins.stylex").wdsMargins.marginHor12), me && pe.push(g.marginTop6), j != null && pe.push(h.overlayWithForm);
		var _e = _(null), fe = function() {
			var e, t = H == null || (e = H.current) == null ? void 0 : e.clientHeight;
			_e.current === t && o("WAWebPREGatingUtils").isPREResizeEnabled() || (N({ overlay: t }, !0), _e.current = t);
		};
		m(function() {
			if (o("WAWebABProps").getABPropConfigValue("wa_web_reduce_forced_layout_chat_open")) {
				var e = window.requestAnimationFrame(function() {
					fe();
				});
				return function() {
					return window.cancelAnimationFrame(e);
				};
			}
			fe();
		}, []);
		var ge = u.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3",
			children: u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(pe), { children: [X, u.jsx(r("WAWebResizeObserver.react"), {
				onResize: fe,
				debounceMs: 10,
				children: u.jsxs("div", {
					ref: H,
					children: [
						ue,
						j != null && u.jsx(r("WAWebMultiStepFormPanel.react"), {
							formInfo: j.formInfo,
							msg: j.msg,
							onDismiss: function() {
								K(null), o("WAWebCmd").Cmd.trigger("scroll_chat_to_bottom");
							}
						}),
						u.jsx(r("WAWebVelocityTransitionGroup"), {
							displayName: "ComposeBoxPanels",
							transitionName: "compose-panel-down",
							xstyle: [
								h.topPanelContainer,
								W == null && h.inputBoxShadow,
								o("WDSMargins.stylex").wdsMargins.marginHorAuto
							],
							children: Q
						})
					]
				})
			})] }))
		});
		return {
			PopupPanels: ge,
			hasTopPanels: me,
			hideComposer: j != null
		};
	}
	l.useComposePopupPanels = E;
}), 98);
