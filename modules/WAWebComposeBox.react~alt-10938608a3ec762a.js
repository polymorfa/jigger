__d("WAWebComposeBox.react", [
	"fbt",
	"$InternalEnum",
	"PaymentLinkWamLogger",
	"WAAbortError",
	"WAFilteredCatch",
	"WALogger",
	"WAShiftTimer",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebApiPrepareCtwaContextSend",
	"WAWebAppContext.react",
	"WAWebAskMetaAiQuotedMediaSend",
	"WAWebAttachmentMenuLogger",
	"WAWebBizAiSmartComposerWrapperLoadable",
	"WAWebBizQueryCtwaContextBridge",
	"WAWebBlocklistCollection",
	"WAWebBotBaseGating",
	"WAWebBotCommandSuggestions.react",
	"WAWebBotGating",
	"WAWebBotProfileGetters",
	"WAWebBotSuggestions.react",
	"WAWebBotTypes",
	"WAWebBotUtils",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebChatGetters",
	"WAWebChatPreferenceCollection",
	"WAWebCmd",
	"WAWebCodeFormatMutator",
	"WAWebComposeBoxActions",
	"WAWebComposeBoxPopupPanels.react",
	"WAWebComposeBoxUtils",
	"WAWebComposeBoxWWAIWrapperLoadable",
	"WAWebComposeConstants",
	"WAWebConversationSpamUtils",
	"WAWebCopyPasteCopyableArea.react",
	"WAWebCryptoRandomMediaKey",
	"WAWebDrawerManager",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiPickerPlugin",
	"WAWebErrorBoundary.react",
	"WAWebFilePicker.react",
	"WAWebFileUtils",
	"WAWebFrontendChatGetters",
	"WAWebGenMinimalLinkPreviewChatAction",
	"WAWebHatchCommandPickerPlugin.react",
	"WAWebHatchGating",
	"WAWebIsScheduledMessagesAvailableForChat",
	"WAWebKeyboardHotKeys.react",
	"WAWebLexicalUtils",
	"WAWebLimitSharingUIUtils",
	"WAWebLinkPreviewChatAction",
	"WAWebLinkify",
	"WAWebMaybeGetAiThreadInfo",
	"WAWebMediaConstants",
	"WAWebMediaGetUploadOriginForChat",
	"WAWebMediaOpaqueData",
	"WAWebMediaUploadMmsThumbnail",
	"WAWebMentionPickerPlugin",
	"WAWebMessageComposer.react",
	"WAWebMimeTypes",
	"WAWebMiscErrors",
	"WAWebMmsMediaTypes",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterSendMsgAction",
	"WAWebNewsletterWamoSubMessageType",
	"WAWebNewsletterWamoSubMessageTypePopup.react",
	"WAWebNewsletterWamoSubUtils",
	"WAWebNoop",
	"WAWebPaymentLink",
	"WAWebPrepareMessageSendingAction",
	"WAWebPresenceChatAction",
	"WAWebProtobufsE2E.pb",
	"WAWebPttComposerRecordingSession",
	"WAWebPttMessageUserJourneyLogger",
	"WAWebQuestions.flow",
	"WAWebQuickReplyGatingUtils",
	"WAWebQuickReplyLogging",
	"WAWebQuickReplyPickerPlugin",
	"WAWebQuickReplySuggestions.react",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebReconnectUtil",
	"WAWebRecordingSessionStateEnum",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebSendScheduledMsgAction",
	"WAWebSendStickerAction",
	"WAWebSendTextMsgChatAction",
	"WAWebSpoilerGating",
	"WAWebStateUtils",
	"WAWebStopEvent",
	"WAWebSuggestionsPanelContainer.react",
	"WAWebTabOrder",
	"WAWebTextSizeUtils",
	"WAWebThemeContext",
	"WAWebThreadsViewAutoQuoteContext",
	"WAWebThreadsViewComposeQuotedMsgContext",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUseBusinessProfile.react",
	"WAWebUseHatchCommandsFetch",
	"WAWebUseShouldShowBotSuggestions",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsMeUser",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumMediaPickerOriginType",
	"WAWebWamEnumQuickReplyEntryPoint",
	"WAWebWamEnumWebcStickerMakerEventNameType",
	"WAWebWebcStickerMakerEventsWamEvent",
	"WDSMargins.stylex",
	"cr:5993",
	"getErrorSafe",
	"gkx",
	"justknobx",
	"react",
	"stylex",
	"useForceUpdate",
	"useLazyRef",
	"useWAWebChatValues",
	"useWAWebComposeBoxActionListeners",
	"useWAWebDebouncedCallback",
	"useWAWebIsKeyboardUser",
	"useWAWebIsSmartComposerEnabled",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebOnUnmount",
	"useWAWebOptionalBotProfileValues",
	"useWAWebSetModelValue",
	"useWAWebStableCallback",
	"useWAWebTextMessageUserJourneyLogger"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f = ["ref"], g, h, y = h || (h = o("react")), C = h, b = C.useCallback, v = C.useContext, S = C.useEffect, R = C.useImperativeHandle, L = C.useMemo, E = C.useRef, k = C.useState, I = /^https?:\/\/media\.giphy\.com\/media\/([a-zA-Z0-9]+)/, T = 1, D = 8, x = 15, $ = n("$InternalEnum").Mirrored(["ATTACHMENT_MENU", "OTHER"]);
	function P(e, t) {
		return e.length === t.length && e.every(function(e, n) {
			return e.url === t[n].url;
		});
	}
	var N = {
		blockCompose: {
			position: "x1n2onr6",
			zIndex: "xhtitgo",
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "xuk3077",
			maxWidth: "x193iq5w",
			minHeight: "x122xwht",
			backgroundColor: "xhjsbib",
			$$css: !0
		},
		blockComposeRefresh: {
			backgroundColor: "xjbqb8w",
			minHeight: "x1wiwyrm",
			maxWidth: "xquzyny",
			$$css: !0
		},
		footer: {
			position: "x1n2onr6",
			zIndex: "xhtitgo",
			boxSizing: "x9f619",
			flex: "x1okw0bk",
			order: "xo1ph6p",
			width: "xh8yej3",
			minHeight: "x122xwht",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		footerRefresh: {
			minHeight: "x1wiwyrm",
			$$css: !0
		},
		footerCollapsed: {
			minHeight: "x2lwn1j",
			$$css: !0
		},
		botSuggestions: {
			marginTop: "x4fdtkf",
			$$css: !0
		},
		footerDarkThreePanel: {
			borderInlineEndWidth: "x1lun4ml",
			borderInlineEndStyle: "x18b5jzi",
			borderInlineEndColor: "xbogo7e",
			$$css: !0
		},
		blockComposeCollapsed: {
			display: "x1s85apg",
			$$css: !0
		},
		richTextRefresh: {
			caretColor: "xjdcl3y",
			$$css: !0
		}
	};
	function M(t) {
		"use no forget";
		var a, i, l, h, C, M = t.ref, w = babelHelpers.objectWithoutPropertiesLoose(t, f), A = w.canShowSpamPanel, F = A === void 0 ? !1 : A, O = w.chat, B = w.onComposeHeightChange, W = w.onPageUpDown, q = w.onSend, U = w.questionType, V = w.threadId, H = o("WAWebABProps").getABPropConfigValue("wa_web_composer_height_increase_enabled") ? x : D, G = v(r("WAWebThreadsViewAutoQuoteContext")), z = r("useForceUpdate")(), j = o("useWAWebChatValues").useChatValues(w.chat.id, [
			o("WAWebChatGetters").getId,
			o("WAWebFrontendChatGetters").getTrusted,
			o("WAWebFrontendChatGetters").getComposeQuotedMsg,
			o("WAWebChatGetters").getIsPSA,
			o("WAWebChatGetters").getIsGroup,
			o("WAWebFrontendChatGetters").getPttRecordingSession,
			o("WAWebFrontendChatGetters").getShouldAppearInList,
			o("WAWebFrontendChatGetters").getPresence,
			o("WAWebFrontendChatGetters").getContact,
			o("WAWebFrontendChatGetters").getAttachMediaContents,
			o("WAWebFrontendChatGetters").getQuotedMsgAdminGroupJid,
			o("WAWebFrontendChatGetters").getQuotedMsgAdminGroupSubject,
			o("WAWebFrontendChatGetters").getQuotedMsgAdminParentGroupJid,
			o("WAWebFrontendChatGetters").getComposeQuotedMsgRemoteJid,
			o("WAWebChatGetters").getIsAutoMuted,
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebChatGetters").getIsBroadcast,
			o("WAWebFrontendChatGetters").getNewsletterMetadata,
			o("WAWebFrontendChatGetters").getIsCAG
		]), K = j[0], Q = j[1], X = j[2], Y = j[3], J = j[4], Z = j[5], ee = j[6], te = j[7], ne = j[8], re = j[9], oe = j[10], ae = j[11], ie = j[12], le = j[13], se = j[14], ue = j[15], ce = j[16], de = j[17], me = U === o("WAWebQuestions.flow").QuestionType.Question, pe = w.questionReplyQuotedMessage, _e = o("useWAWebSetModelValue").useSetModelValue(O, "composeQuotedMsg"), fe = v(r("WAWebThreadsViewComposeQuotedMsgContext")), ge = (a = fe == null ? void 0 : fe.quotedMsg) != null ? a : X, he = (i = fe == null ? void 0 : fe.setQuotedMsg) != null ? i : _e, ye = o("useWAWebSetModelValue").useSetModelValue(O, "quotedMsgAdminGroupJid"), Ce = o("useWAWebSetModelValue").useSetModelValue(O, "composeQuotedMsgRemoteJid"), be = o("useWAWebSetModelValue").useSetModelValue(O, "pttRecordingSession"), ve = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		]), Se = L(function() {
			return O.getComposeContents();
		}, [O]), Re = k(null), Le = Re[0], Ee = Re[1], ke = E(Se == null ? void 0 : Se.omittedURL), Ie = k(null), Te = Ie[0], De = Ie[1], xe = k(!1), $e = xe[0], Pe = xe[1], Ne = k(o("PaymentLinkWamLogger").LinkPreviewStatus.NOT_STARTED), Me = Ne[0], we = Ne[1], Ae = E(Se == null ? void 0 : Se.omittedURL), Fe = E((Se == null ? void 0 : Se.text) || ""), Oe = k([]), Be = Oe[0], We = Oe[1], qe = function() {
			var e = o("WAWebCodeFormatMutator").removeCodeBlocks(Fe.current), t = o("WAWebLinkify").findLinks(e, !0, o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow());
			return We(function(e) {
				return P(e, t) ? e : t;
			}), t[0];
		}, Ue = r("useWAWebIsKeyboardUser")(), Ve = Ue.isKeyboardUser, He = o("WAWebThemeContext").useIsDarkTheme(), Ge = o("WAWebAppContext.react").useAppContext(), ze = Ge.rightDrawerOpen, je = k(null), Ke = je[0], Qe = je[1], Xe = function() {
			return K.isBot() || Ke != null;
		}, Ye = o("WAWebUseBusinessProfile.react").useBusinessProfile(o("WAWebBotGating").isBizBot3pAvailable() || o("WAWebBotBaseGating").isBizBot1pEnabled() ? K : null, [
			"commands",
			"prompts",
			"isBizBot1p",
			"isBizBot3p"
		]), Je = Ke != null ? Ke : K, Ze = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(Je, [o("WAWebBotProfileGetters").getCommands]), et = Ze[0], tt = (Ye == null ? void 0 : Ye.commands) || o("WAWebBotBaseGating").isBotEnabled() && et || null, nt = E([]), rt = r("useLazyRef")(function() {
			return new AbortController();
		}), ot = k(!1), at = ot[0], it = ot[1], lt = o("WAWebUseShouldShowBotSuggestions").useShouldShowBotSuggestions(w.chat, Ye == null ? void 0 : Ye.prompts, w.threadId);
		o("WAWebUseHatchCommandsFetch").useHatchCommandsFetch(O.id);
		var st = r("useWAWebStableCallback")(function() {
			return O.getComposeContents();
		}), ut = E(!1), ct = r("useWAWebTextMessageUserJourneyLogger")(O.id, ((l = (h = st()) == null || (h = h.text) == null ? void 0 : h.length) != null ? l : 0) > 0), dt = ct.handleCloseForUJLogging, mt = ct.handleMsgSentForUJLogging, pt = ct.handleTextMsgChangeForUJLogging;
		S(function() {
			return function() {
				dt(ge != null), O.pttRecordingSession != null && o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.draftSaved(O.id, ge != null);
			};
		}, []);
		var _t = function() {
			nt.current = [], rt.current.abort(), rt.current = new AbortController(), at && it(!1);
		}, ft = function(t) {
			t === void 0 && (t = o("WAWebUim").DismissReason.UIM_INTERACTION), Pe(!0), gt(t);
		}, gt = function(t) {
			t === void 0 && (t = o("WAWebUim").DismissReason.UIM_INTERACTION), t !== o("WAWebUim").DismissReason.LIFECYCLE && (_t(), Te && (Ae.current = ke.current, De(null)));
		}, ht = function() {
			ke.current = null, Pe(!1), we(o("PaymentLinkWamLogger").LinkPreviewStatus.NOT_STARTED), gt();
		}, yt = function(n, a) {
			if (n.data.thumbnailDirectPath !== void 0) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["link preview: using an existing thumbnail mms"])));
				var t = o("WAWebComposeBoxUtils").getCachedPreview(n);
				return De(function(e) {
					return (e == null ? void 0 : e.url) !== n.url ? e : t;
				}), Promise.resolve();
			}
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["link preview: uploading new thumbnail mms"])));
			var i = n.data.thumbnailHQ;
			return i ? r("WAWebMediaOpaqueData").createFromBase64Jpeg(i).then(function(e) {
				return r("WAWebMediaUploadMmsThumbnail")({
					thumbnail: e,
					mediaType: ue ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK : o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
					mediaKeyInfo: r("WAWebCryptoRandomMediaKey")(),
					uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(O),
					forwardedFromWeb: !1,
					signal: a,
					timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
					isViewOnce: !1
				});
			}).then(function(e) {
				var t = e.mediaEntry;
				t && De(function(r) {
					if ((r == null ? void 0 : r.url) !== n.url) return r;
					var o = {
						mediaKey: t.mediaKey,
						mediaKeyTimestamp: t.mediaKeyTimestamp,
						thumbnailDirectPath: t.directPath,
						thumbnailSha256: e.filehash,
						thumbnailEncSha256: t.encFilehash
					}, a = babelHelpers.extends({}, n, { data: babelHelpers.extends({}, n.data, o) });
					return a;
				});
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(e) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Full preview upload has failed: "])));
			}) : Promise.resolve();
		}, Ct = k(!!Fe.current), bt = Ct[0], vt = Ct[1], St = k(Se == null ? void 0 : Se.ctwaContextLinkData), Rt = St[0], Lt = St[1], Et = E(null), kt = E(null), It = E(null), Tt = E(null), Dt = E(null), xt = E(null), $t = E(null), Pt = E(!1), Nt = E(!1), Mt = E(null), wt = E(null), At = r("useWAWebStableCallback")(function() {
			if (!bt || Rt) {
				ht();
				return;
			}
			var e = qe();
			if (!e) {
				ht();
				return;
			}
			var t = e.url;
			if (!(ke.current !== "" && ke.current === t)) {
				ke.current = t, Ae.current = null;
				var n = rt.current.signal, a = null;
				o("WAWebPaymentLink").shouldDetectInComposer() && (a = o("WAWebPaymentLink").getPSP(t));
				var i = a != null ? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE, l = o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, i, !0, { psp: a });
				De(l), we(o("PaymentLinkWamLogger").LinkPreviewStatus.STARTED);
				var s = o("WAWebLinkPreviewChatAction").getLinkPreview(e, O).then(function(t) {
					if (n.aborted) throw new (o("WAAbortError")).AbortError();
					if (t && ke.current === t.url && t.data && (t.data.title || t.data.description)) return De(t), yt(t, n).finally(function() {
						we(o("PaymentLinkWamLogger").LinkPreviewStatus.COMPLETED);
					});
					l != null && De(o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, i, !1, { psp: a }));
				});
				nt.current.push(s), s.catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").Unmount, r("WAWebNoop"))).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
			}
		}), Ft = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(At);
		}), Ot = E({
			text: "",
			parsableText: "",
			data: {}
		}), Bt = E(null), Wt = null, qt = k(), Ut = qt[0], Vt = qt[1], Ht = k(O.pttRecordingSession), Gt = Ht[0], zt = Ht[1], jt = k(O.pttRecordingSession != null), Kt = jt[0], Qt = jt[1], Xt = k(null), Yt = Xt[0], Jt = Xt[1], Zt = k(function() {
			var e = Fe.current;
			return e.trim().length === 0 ? 0 : e.trim().split(/\s+/).length;
		}), en = Zt[0], tn = Zt[1], nn = b(function() {
			return Fe.current;
		}, []), rn = b(function() {
			Jt(null);
		}, []), on = k(null), an = on[0], ln = on[1], sn = k(null), un = sn[0], cn = sn[1], dn = k(null), mn = dn[0], pn = dn[1], _n = r("useWAWebIsSmartComposerEnabled")(K), fn = r("useWAWebStableCallback")(function(e) {
			Ut == null || Ut.selectAll(), Ut == null || Ut.replaceSelection(e);
		}), gn = "", hn = k(Se == null ? void 0 : Se.ctwaContext), yn = hn[0], Cn = hn[1], bn = k(function() {
			return o("WAWebConversationSpamUtils").shouldShowSpamPanel(O);
		}), vn = bn[0], Sn = bn[1], Rn = function() {
			Sn(!1), o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(O);
		}, Ln = function() {
			Sn(!1);
		}, En = k({
			handleOnce: [],
			handleMultiple: []
		}), kn = En[0], In = En[1];
		o("useWAWebListener").useListener(o("WAWebBlocklistCollection").BlocklistCollection, [
			"add",
			"remove",
			"reset"
		], z);
		var Tn = function() {
			var e, t = Fe.current, n = O.getComposeContents();
			if (!(n == null && t.trim() === "") && (n == null || (e = n.text) == null ? void 0 : e.trim()) !== t.trim()) {
				var r = {
					text: t,
					timestamp: o("WATimeUtils").unixTime()
				}, a = Ae.current;
				a != null && (r.omittedURL = a), yn != null && (r.ctwaContext = yn), Rt != null && (r.ctwaContextLinkData = Rt), O.setComposeContents(r);
			}
		}, Dn = function(t) {
			Tn(), ht();
			var e = t.sourceUrl;
			e != null && e !== "" && o("WAWebBizQueryCtwaContextBridge").fetchCtwaContextData(t).then(function(e) {
				Cn(e), Tn();
			}).catch(function(e) {
				o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Unable to retrieve CTWA context data, error: ", ""])), e);
			});
		};
		S(function() {
			Ft.current.debounceAndCap(50, 50), Rt && (!yn || yn.sourceUrl !== Rt.sourceUrl) && (Cn(null), Dn(Rt)), o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.setHasDraft(O.pttRecordingSession != null);
		}, []), r("useWAWebOnUnmount")(function() {
			var e;
			Ft.current.cancel(), rt.current.abort(), (e = Mt.current) == null || e.cancel(), Tn();
		});
		var xn = E(V);
		S(function() {
			var e = xn.current;
			xn.current = V, e !== V && he(null);
		}, [he, V]);
		var $n = r("useWAWebDebouncedCallback")(Tn, 200), Pn = function() {
			var e = Fe.current.trim().length > 0;
			return e;
		}, Nn = function(t) {
			Ut == null || Ut.focus();
		}, Mn = function(t, n) {
			Ut == null || Ut.replaceSelection(t, n);
		}, wn = function(t, n) {
			if (t === " " && !Pn()) return o("WAWebCmd").Cmd.scrollMessages();
			Nn(!0), Mn(t, n);
		}, An = function(t) {
			if (K.isBot() && !o("WAWebBotUtils").isBotChannelFBID(K) && (!o("WAWebBotUtils").isMetaAiBot(K) || !(o("WAWebBotGating").isAnyMetaAiMediaInputEnabled() || o("WAWebBotGating").isMetaAiDocUploadEnabled()))) return o("WAWebToastManager").ToastManager.open(y.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), !1;
			var e = r("justknobx")._("4552"), n = t.filter(function(t) {
				var n = o("WAWebFileUtils").typeFromMimetype(t.type);
				return n === o("WAWebFileUtils").FILETYPE.DOCUMENT ? e : n === o("WAWebFileUtils").FILETYPE.IMAGE || n === o("WAWebFileUtils").FILETYPE.VIDEO || n === o("WAWebFileUtils").FILETYPE.AUDIO;
			});
			return n.length > 0 && ($n.flush(), o("WAWebCmd").Cmd.attachMediaDrawer({
				chat: O,
				threadId: V,
				attachments: n.map(function(e) {
					return { file: e };
				}),
				fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.PASTE,
				initCaption: st(),
				onComplete: tr
			})), !0;
		}, Fn = function(t) {
			An(t);
		}, On = function(t) {
			Nn(!0), Ut == null || Ut.paste(t);
		}, Bn = E($.OTHER), Wn = k(!1), qn = Wn[0], Un = Wn[1], Vn = function() {
			if (r("justknobx")._("169")) o("WAWebQuickReplyGatingUtils").isQuickReplyComposerEntryPointEnabled(O) && Un(!0), Ut == null || Ut.replaceSelection("/");
			else {
				var e;
				(e = Bt.current) == null || e.togglePanel();
			}
			Bn.current = $.ATTACHMENT_MENU;
		}, Hn = function() {
			Ut == null || Ut.reset();
		}, Gn = function() {
			Nn();
		}, zn = function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.setIsFocus(!0);
		}, jn = function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.setIsFocus(!1);
		}, Kn = E(null), Qn = E(null), Xn = function(t) {
			Lt(t), Cn(null), Dn(t);
		}, Yn = function(t) {
			In(function(e) {
				var n = e.handleMultiple, r = e.handleOnce;
				return {
					handleOnce: t.handleOnce ? r.concat(t.handleOnce) : r,
					handleMultiple: t.handleMultiple ? r.concat(t.handleMultiple) : n
				};
			});
		}, Jn = function() {
			Lt(null), Cn(null), Tn(), Ft.current.onOrBefore(1);
		}, Zn = function() {
			var e;
			(e = kt.current) == null || e.activate(), Nn(!1);
		}, er = function(t) {
			var e;
			t.stopPropagation(), W(t), (e = Mt.current) == null || e.debounce(0);
		}, tr = r("useWAWebStableCallback")(function(e, t) {
			t === void 0 && (t = {});
			var n = t, r = n.initCaptionUsed;
			e && r && Hn(), e && Jn();
		}), nr = r("useWAWebStableCallback")(function() {
			$n.flush();
		}), rr = function() {
			Jt(null), Gn();
		}, or = function(t, n, a, i) {
			var e = o("WAWebComposeBoxUtils").fetchGif({
				accessibilityLabel: i,
				attribution: a,
				filename: n,
				gifUrl: t
			});
			return $n.flush(), (me || pe) && o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.attachMediaDrawer({
				chat: O,
				threadId: V,
				attachments: [e],
				initCaption: st(),
				fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_GIF_INAPP,
				onComplete: function(t, n) {
					tr(t, n), t && rr();
				},
				isQuestion: me,
				questionReplyQuotedMessage: pe
			}), e.catch(r("WAWebNoop")), e;
		}, ar = function(t, n, r) {
			or(t, t, n, r);
		}, ir = function(t, n, r) {
			var e = ge != null ? ge : G, a = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(Rt, yn), i = {
				stickerSendOrigin: n,
				quotedMsg: e,
				ctwaContext: a,
				threadId: V
			};
			r === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub && (i.isWamoSub = !0), o("WAWebSendStickerAction").sendStickerToChat(O, t, i), he(null), Jn();
		}, lr = function(t, n, r) {
			if (t.isCreateButton) {
				var e;
				new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP }).commit(), (e = xt.current) == null || e.open();
				return;
			}
			if (ue && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(de) && r != null && r.target && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
				var a = function(r) {
					ir(t, n, r);
				};
				Ee({
					popupAnchorEl: r.target,
					handleSelect: a
				});
			} else ir(t, n);
		}, sr = function(t, n, r) {
			r === !0 ? ir(t, n, o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub) : ir(t, n);
		}, ur = function(t) {
			var e = Pn();
			Fe.current = t;
			var n = Pn(), r = t.trim().length === 0 ? 0 : t.trim().split(/\s+/).length;
			tn(r), n !== e && (window.setTimeout(function() {
				o("WAWebComposeBoxActions").ComposeBoxActions.setHasText(n);
			}, 0), vt(n)), n ? (te.subscribe(), o("WAWebPresenceChatAction").markComposing(O), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(O)) : (Wt = null, o("WAWebPresenceChatAction").markPaused(O));
			var a = qe();
			(!a && ke.current || a && a.url !== ke.current) && ht(), Pt.current ? Ft.current.onOrBefore(1) : Ft.current.debounce(o("WAWebABProps").getABPropConfigValue("web_link_preview_debounce_period_ms")), Pt.current = !1, $n(), !vn && t && !Q && Sn(!0);
			var i = Ot.current.data, l = i.mentionedJidList, s = l == null ? void 0 : l.find(function(e) {
				return e.isBot();
			});
			Qe(s), ut.current ? ut.current = !1 : pt(n, ge != null);
		}, cr = async function() {
			var e;
			O.pttRecordingSession != null ? e = O.pttRecordingSession : (e = o("WAWebPttComposerRecordingSession").createRecordingSession({ chat: o("WAWebStateUtils").unproxy(O) }), e.on("change:recordingState", function() {
				var t = e.recordingState;
				O.pttRecordingSession === e && (t === o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR || t === o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED) && be(null);
			})), zt(e), Qt(!1), o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.start(O.id, ge != null);
			var t;
			try {
				t = await e.start();
			} finally {
				var n = t ? e : null;
				be(n), zt(n), Qt(n != null);
			}
		}, dr = function(t) {
			Jt(t), t != null && o("WAWebUserPrefsGeneral").setLastComposeBoxExpressionPanel(t);
		}, mr = function(t) {
			var e = t.getFiles();
			return An(e);
		}, pr = function(t) {
			var e = I.exec(t);
			if (e) {
				var n = "https://media.giphy.com/media/" + e[1] + "/200w.mp4";
				return or(n, t, o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY).catch(function() {
					o("WAWebDrawerManager").DrawerManager.closeDrawerMid(), Nn(!0), Ut == null || Ut.replaceSelection(t), o("WAWebToastManager").ToastManager.open(y.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}), !0;
			}
			return Pt.current = !0, !1;
		}, _r = function() {
			return Tt.current ? Tt.current.offsetWidth - T : 0;
		}, fr = function(t) {
			var e, n, r = t.target;
			r instanceof HTMLElement && (e = Qn.current) != null && e.contains(r) || (r instanceof HTMLElement && r === (Ut == null || (n = Ut.editor) == null ? void 0 : n.getRootElement()) && Zn(), !J && bt && Sn(!0));
		}, gr = function(t) {
			var e;
			o("WAWebReconnectUtil").reconnect();
			var n = Ot.current.text.trim(), a = Ot.current.data;
			if (!(n.length === 0 && !Rt)) {
				if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(O, a.mentionedJidList)) {
					o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(O);
					return;
				}
				_t();
				var i = ge != null ? ge : G, l = Te == null ? void 0 : Te.data, s = o("WAWebPaymentLink").getPaymentLinkMessageMetadata(l, o("WAWebCodeFormatMutator").removeCodeBlocks(n)), u = a.mentionedJidList || [], c = a.groupMentions || [], d = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(Rt, yn), p = Nt.current;
				if (Jt(null), vt(!1), De(null), (e = Kn.current) == null || e.close(), Wt && (o("WAWebQuickReplyLogging").logQuickReplySendEvent(Wt === $.ATTACHMENT_MENU ? o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL : o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_KEYBOARD), Wt = null), p) {
					var _ = o("WAWebStateUtils").unproxy(O);
					_.urlText && (_.urlText = void 0);
				}
				var f = V != null ? {
					threadIds: [V],
					aiThreadInfo: o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(O, V)
				} : {}, g = babelHelpers.extends({
					linkPreview: l,
					quotedMsg: i,
					mentionedJidList: u,
					groupMentions: c,
					quotedMsgAdminGroupJid: oe,
					quotedMsgAdminGroupSubject: ae,
					quotedMsgAdminParentGroupJid: ie,
					ctwaContext: d,
					isQuestion: me,
					questionReplyQuotedMessage: pe
				}, f, { maybeNonJidMentioned: wt.current != null && wt.current > 0 });
				if (ue ? (t === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported() && (g.isWamoSub = !0), o("WAWebNewsletterSendMsgAction").sendNewsletterTextMsg(O, n, g)) : (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["sendTextAction inside WAWebComposeBox"]))), o("WAWebAskMetaAiQuotedMediaSend").sendAskMetaAiAwareTextMsg(O, n, babelHelpers.extends({}, g, {
					botMsgBodyType: o("WAWebBotGating").isBizBot3pAvailable() && Ye != null && Ye.commands && o("WAWebLexicalUtils").hasBotCommand(Ut == null ? void 0 : Ut.editor) ? o("WAWebBotTypes").BotMsgBodyType.COMMAND : null,
					paymentLinkMetadata: s
				})), Jn(), kn.handleOnce.forEach(function(e) {
					return e == null ? void 0 : e();
				}), kn.handleMultiple.forEach(function(e) {
					return e == null ? void 0 : e();
				}), In({
					handleMultiple: kn.handleMultiple,
					handleOnce: []
				})), o("PaymentLinkWamLogger").shouldLogSendEvent()) {
					var h = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), y = o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(h));
					o("PaymentLinkWamLogger").genLogSendEventIfPaymentLink(o("WAWebCodeFormatMutator").removeCodeBlocks(n), $e, Te, Me, y, O, s).catch(r("WAWebNoop"));
				}
				Nt.current = !1, wt.current = null, he(null), ye(null), Ce(null), O.setComposeContents({}), Hn(), Pn();
			}
		}, hr = function() {
			if (ue && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(de) && Et.current && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
				var e = function(t) {
					gr(t);
				};
				Ee({
					popupAnchorEl: Et.current,
					handleSelect: e
				});
			} else gr();
			q == null || q(), o("WAWebCmd").Cmd.chatMessageSent(O), ut.current = !0, mt(ge != null), ge != null && o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageSent(O.id);
		}, yr = r("useWAWebStableCallback")(function(e) {
			Ut == null || Ut.setTextContent(e);
		}), Cr = function(t) {
			if (Yt) {
				var e;
				(e = Dt.current) == null || e.restoreFocus(!0), o("WAWebStopEvent").stopEvent(t);
			}
		}, br = r("useWAWebDebouncedCallback")(function(e) {
			Pn() || o("WAWebComposeBoxUtils").editLastMessage(O, e);
		}, 200, { trailing: !0 }), vr = function() {
			zt(null), Qt(!1), Gn();
		}, Sr = function() {
			q == null || q(), o("WAWebCmd").Cmd.chatMessageSent(O);
		}, Rr = function(t) {
			if (t) {
				t.stopPropagation();
				var e = t.target.files == null ? [] : Array.from(t.target.files);
				e.length && (new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED }).commit(), o("WAWebCmd").Cmd.attachMediaDrawer({
					chat: O,
					threadId: V,
					attachments: e.map(function(e) {
						return {
							file: e,
							stickerMaker: !0
						};
					}),
					fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
					sendAsSticker: !0
				}));
			}
		}, Lr = function(t) {
			if (o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_sender_web")) {
				var e;
				wt.current = ((e = wt.current) != null ? e : 0) | t;
			}
		};
		r("useWAWebComposeBoxActionListeners")(O, {
			onFocus: Gn,
			onPaste: wn,
			onPasteFiles: Fn,
			onRoutedPaste: On,
			onSend: hr,
			onToggleQuickReplies: Vn,
			onCtwaContextLinkData: Xn,
			onSendingLogAttributes: Yn,
			onSetTextContent: yr,
			onSetNonJidMentions: Lr
		});
		var Er = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().composerFontSize, kr = o("WAWebStateUtils").unproxy(O).groupMetadata, Ir = function(t) {
			o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["handlePromptSelect inside WAWebComposeBox"])));
			var e;
			V != null && (e = o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(O, V)), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(O, t, {
				botMsgBodyType: o("WAWebBotGating").isBizBot3pAvailable() ? o("WAWebBotTypes").BotMsgBodyType.PROMPT : null,
				threadIds: V ? [V] : void 0,
				aiThreadInfo: e
			});
		}, Tr = o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
			chat: O,
			questionType: U
		}), Dr = o("WAWebComposeBoxUtils").getComposeBoxAriaLabelText(O), xr = y.jsxs(r("WAWebRichTextInput.react"), {
			ref: Vt,
			onFocus: zn,
			onBlur: jn,
			placeholder: Tr,
			ariaLabel: Dr,
			ariaActiveDescendents: gn,
			textXstyle: Er,
			xstyle: N.richTextRefresh,
			testid: "conversation-compose-box-input",
			editorName: "compose-box",
			initialText: (C = st()) == null ? void 0 : C.text,
			readOnly: Gt != null,
			maxLength: o("WAWebComposeConstants").MAX_TXT_MSG_SIZE,
			maxVisibleLines: H,
			minVisibleLines: 1,
			spellCheck: ve.spellcheck,
			enterIsNewLine: !ve.enterIsSend,
			multiline: !0,
			focusOnMount: !Ve,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_INPUT,
			onChange: function(t) {
				Ot.current = t, ur(t.parsableText);
			},
			onEnter: hr,
			onFiles: mr,
			onTextPaste: pr,
			onMaxPasteExceeded: o("WAWebComposeBoxUtils").handleMaxPasteExceeded,
			children: [
				y.jsx(r("WAWebRichTextInputPlugins.react"), {
					groupMetadata: kr,
					transformTextEmoji: ve.transformTextEmoji,
					textFormatEnabled: !0,
					spoilerEnabled: o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
					bulletPointsEnabled: !0,
					numberedListEnabled: !0,
					inlineCodeEnabled: !0,
					blockQuoteEnabled: !0,
					internLinksEnabled: !0,
					phoneNumbersEnabled: !1,
					linksEnabled: !0,
					textFormatShortcutsEnabled: !0,
					floatingToolbarEnabled: !0,
					highlightedBotCommands: tt
				}),
				y.jsx(r("WAWebEmojiPickerPlugin"), {}),
				y.jsx(r("WAWebMentionPickerPlugin"), {
					chat: o("WAWebStateUtils").unproxy(O),
					elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(O),
					source: "chat-composer"
				}),
				o("WAWebHatchGating").isHatchCommandsEnabled() && o("WAWebBotUtils").isHatchBot(O.id) && y.jsx(r("WAWebHatchCommandPickerPlugin.react"), { chatId: O.id }),
				o("WAWebQuickReplyGatingUtils").canSendQuickReplyInChat(O) && r("justknobx")._("169") && (Ut == null ? void 0 : Ut.editor) && y.jsx(r("WAWebQuickReplyPickerPlugin"), {
					composerAnchorRef: Et,
					editor: Ut.editor,
					onPickerClose: function() {
						return Un(!1);
					},
					openedFromMenu: qn
				})
			]
		}), $r, Pr = Ut == null ? void 0 : Ut.editor;
		Pr != null && ($r = y.jsxs(y.Fragment, { children: [
			!1,
			!1,
			o("WAWebQuickReplyGatingUtils").canSendQuickReplyInChat(O) && !r("justknobx")._("169") && y.jsx(r("WAWebQuickReplySuggestions.react"), {
				kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
				editor: Pr,
				ref: Bt,
				onSelect: function() {
					Bn.current === $.ATTACHMENT_MENU ? (o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(O, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.QUICK_REPLY), Wt = $.ATTACHMENT_MENU) : Wt = $.OTHER, Bn.current = $.OTHER;
				},
				onHide: function() {
					Bn.current === $.ATTACHMENT_MENU && o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(O, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.QUICK_REPLY), Bn.current = $.OTHER;
				}
			}),
			(o("WAWebBotBaseGating").isBizBot3pEnabled() && Ye || o("WAWebBotBaseGating").isBotEnabled() && et) && y.jsx(o("WAWebBotCommandSuggestions.react").BotCommandSuggestions, {
				kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
				editor: Pr,
				businessProfile: Ye && o("WAWebStateUtils").unproxy(Ye),
				metaBotId: Je
			}),
			!r("gkx")("26258") && n("cr:5993") ? y.jsx(n("cr:5993"), {
				kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
				editor: Pr
			}) : null
		] })), R(M, function() {
			return {
				flushSaveComposeContentDebounced: nr,
				getCurrentComposeContent: st,
				updateTextAfterMediaDrawerClose: tr
			};
		}, [
			nr,
			st,
			tr
		]), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "start_ptt_recording", function() {
			Kt || cr();
		});
		var Nr = null;
		lt && (Nr = y.jsx(r("WAWebBotSuggestions.react"), {
			id: K,
			onPromptSelect: Ir
		}));
		var Mr = {
			chat: O,
			pttComposerActive: Kt,
			isMessageToBot: Xe(),
			getCurrentComposeContent: st,
			richTextInputRef: Ut,
			updateTextAfterMediaDrawerClose: tr,
			inputHotkeyRef: $t,
			handleTab: Cr,
			handleMetaUpDebounced: br,
			handleInputFocus: fr,
			input: xr,
			expressionsPanelWrapperRef: Qn,
			expressionsPanelPickerRef: Kn,
			replaceInputSelection: Mn,
			handlePanelsSticker: lr,
			handlePanelsStickerFromStore: sr,
			handlePanelsGif: ar,
			hasTextState: bt,
			handleSendText: hr,
			recordingSession: Gt,
			startRecording: cr,
			threadId: V,
			wwaiButton: y.jsx("div", {
				ref: ln,
				className: "x78zum5 xpvyfi4"
			}),
			smartComposerModePill: _n ? y.jsx("div", {
				ref: cn,
				"data-testid": "biz_ai_smart_composer_mode_pill_slot",
				className: "x78zum5 xamitd3"
			}) : null,
			smartComposerCard: _n ? y.jsx("div", {
				ref: pn,
				"data-testid": "biz_ai_smart_composer_card_slot",
				className: "x78zum5 xdt5ytf"
			}) : null
		}, wr = o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMessagesAvailableForChat(O) ? function(e) {
			var t;
			o("WAWebReconnectUtil").reconnect();
			var n = Ot.current.text.trim(), a = Ot.current.data;
			if (n.length !== 0) {
				if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(O, a.mentionedJidList)) {
					o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(O);
					return;
				}
				_t();
				var i = ge != null ? ge : G, l = Te == null ? void 0 : Te.data, s = a.mentionedJidList || [], u = a.groupMentions || [], c = V != null ? {
					threadIds: [V],
					aiThreadInfo: o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(O, V)
				} : {};
				Jt(null), vt(!1), De(null), (t = Kn.current) == null || t.close(), o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat(O, n, e, babelHelpers.extends({
					linkPreview: l,
					quotedMsg: i,
					mentionedJidList: s,
					groupMentions: u,
					quotedMsgAdminGroupJid: oe,
					quotedMsgAdminGroupSubject: ae,
					quotedMsgAdminParentGroupJid: ie
				}, c, { maybeNonJidMentioned: wt.current != null && wt.current > 0 })).catch(function(e) {
					o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["sendScheduledTextMsgToChat failed"]))).catching(r("getErrorSafe")(e)).sendLogs("send-scheduled-msg");
				}), Nt.current = !1, wt.current = null, he(null), ye(null), Ce(null), O.setComposeContents({}), Hn(), Pn();
			}
		} : void 0, Ar = o("WAWebComposeBoxPopupPanels.react").useComposePopupPanels(Dt, {
			chat: O,
			linkPreviewData: Te == null ? void 0 : Te.data,
			links: Be,
			ctwaContextLinkData: Rt,
			ctwaContextData: yn,
			restoreFocus: Gn,
			selectedExpressionPanel: Yt,
			getComposeBlockWidth: _r,
			onComposeHeightChange: B,
			omitLinkPreview: ft,
			omitCtwa: Jn,
			onEmoji: Mn,
			onGif: ar,
			onExpressionPanelChange: dr,
			onSticker: lr,
			onExpressionPanelClose: rr,
			showSpamPanel: F && vn,
			onClickNotSpam: Rn,
			onClickDismissSpam: Ln,
			questionReplyQuotedMessage: w.questionReplyQuotedMessage,
			questionType: U
		}), Fr = Ar.PopupPanels, Or = Ar.hasTopPanels, Br = Ar.hideComposer, Wr = y.jsx(r("WAWebMessageComposer.react"), babelHelpers.extends({}, Mr, {
			ref: Et,
			hasTopPanel: Or,
			closePttComposer: vr,
			onPttSend: Sr,
			questionType: U,
			questionReplyQuotedMessage: w.questionReplyQuotedMessage,
			threadId: V,
			onScheduleSend: wr
		}));
		return y.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "compose-box",
			type: "fatal",
			children: y.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "ComposeBox",
				ref: kt,
				uimState: o("WAWebUim").UIMState.PASSIVE,
				requestFocus: Ve ? null : Gn,
				children: y.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
					component: "footer",
					tabIndex: null,
					handlers: {
						pagedown: er,
						pageup: er
					},
					xstyle: [
						N.footer,
						lt && N.botSuggestions,
						He && ze && N.footerDarkThreePanel,
						N.footerRefresh,
						Br && N.footerCollapsed
					],
					style: Br ? { "--height-pane-footer": "0px" } : void 0,
					ref: It,
					children: [
						!Br && Nr,
						y.jsx(r("WAWebCopyPasteCopyableArea.react"), {
							canCut: !0,
							className: (g || (g = r("stylex")))(N.blockCompose, [N.blockComposeRefresh, o("WDSMargins.stylex").wdsMargins.marginHorAuto], Br && N.blockComposeCollapsed, !1),
							ref: Tt,
							children: !Br && y.jsxs("div", {
								"data-testid": "compose-box",
								className: "x1n2onr6 x98rzlu xh8yej3 xeuugli x1gg8mnh",
								children: [
									y.jsx(r("WAWebVelocityTransitionGroup"), {
										transitionName: "messageComposer",
										children: Wr
									}),
									y.jsx(r("WAWebComposeBoxWWAIWrapperLoadable"), {
										chatId: K.toString(),
										isBot: K.isBot(),
										wordCount: en,
										getComposeText: nn,
										fabSlot: an,
										onAcceptSuggestion: fn,
										onWillOpenTray: rn
									}),
									_n && y.jsx(r("WAWebBizAiSmartComposerWrapperLoadable"), {
										cardSlot: mn,
										chatId: K,
										onInsert: fn,
										pillSlot: un
									})
								]
							})
						}),
						Fr,
						!Br && y.jsxs(y.Fragment, { children: [
							y.jsx(r("WAWebFilePicker.react"), {
								ref: xt,
								mimes: o("WAWebMimeTypes").IMAGE_MIMES,
								onChange: Rr,
								multiple: !1
							}),
							$r,
							Le != null && y.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
								handleSelect: Le.handleSelect,
								popupAnchorEl: Le.popupAnchorEl,
								onDismiss: function() {
									return Ee(null);
								}
							})
						] })
					]
				})
			})
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	var w = M;
	function A(e) {
		var t = e.chat, n = e.handleFocus, r = t.id.toString();
		return o("useWAWebListener").useListener(o("WAWebComposeBoxActions").ComposeBoxActions, "focus_" + r, n), o("useWAWebListener").useListener(o("WAWebComposeBoxActions").ComposeBoxActions, "focus", n), y.jsx(o("WAWebUimUie.react").UIE, { displayName: "PlaceholderComposeBox" });
	}
	A.displayName = A.name + " [from " + i.id + "]", l.ComposeBox = w, l.PlaceholderComposeBox = A;
}), 226);
