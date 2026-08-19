__d("WAWebComposeBox.react", [
	"fbt",
	"$InternalEnum",
	"PaymentLinkWamLogger",
	"Promise",
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
	"asyncToGeneratorRuntime",
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
	var e, u, c, d, m, p, _, f = ["ref"], g, h, y, C = y || (y = o("react")), b = y, v = b.useCallback, S = b.useContext, R = b.useEffect, L = b.useImperativeHandle, E = b.useMemo, k = b.useRef, I = b.useState, T = /^https?:\/\/media\.giphy\.com\/media\/([a-zA-Z0-9]+)/, D = 1, x = 8, $ = 15, P = n("$InternalEnum").Mirrored(["ATTACHMENT_MENU", "OTHER"]);
	function N(e, t) {
		return e.length === t.length && e.every(function(e, n) {
			return e.url === t[n].url;
		});
	}
	var M = {
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
	function w(t) {
		"use no forget";
		var a, i, l, y, b, w = t.ref, A = babelHelpers.objectWithoutPropertiesLoose(t, f), F = A.canShowSpamPanel, O = F === void 0 ? !1 : F, B = A.chat, W = A.onComposeHeightChange, q = A.onPageUpDown, U = A.onSend, V = A.questionType, H = A.threadId, G = o("WAWebABProps").getABPropConfigValue("wa_web_composer_height_increase_enabled") ? $ : x, z = S(r("WAWebThreadsViewAutoQuoteContext")), j = r("useForceUpdate")(), K = o("useWAWebChatValues").useChatValues(A.chat.id, [
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
		]), Q = K[0], X = K[1], Y = K[2], J = K[3], Z = K[4], ee = K[5], te = K[6], ne = K[7], re = K[8], oe = K[9], ae = K[10], ie = K[11], le = K[12], se = K[13], ue = K[14], ce = K[15], de = K[16], me = K[17], pe = V === o("WAWebQuestions.flow").QuestionType.Question, _e = A.questionReplyQuotedMessage, fe = o("useWAWebSetModelValue").useSetModelValue(B, "composeQuotedMsg"), ge = S(r("WAWebThreadsViewComposeQuotedMsgContext")), he = (a = ge == null ? void 0 : ge.quotedMsg) != null ? a : Y, ye = (i = ge == null ? void 0 : ge.setQuotedMsg) != null ? i : fe, Ce = o("useWAWebSetModelValue").useSetModelValue(B, "quotedMsgAdminGroupJid"), be = o("useWAWebSetModelValue").useSetModelValue(B, "composeQuotedMsgRemoteJid"), ve = o("useWAWebSetModelValue").useSetModelValue(B, "pttRecordingSession"), Se = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		]), Re = E(function() {
			return B.getComposeContents();
		}, [B]), Le = I(null), Ee = Le[0], ke = Le[1], Ie = k(Re == null ? void 0 : Re.omittedURL), Te = I(null), De = Te[0], xe = Te[1], $e = I(!1), Pe = $e[0], Ne = $e[1], Me = I(o("PaymentLinkWamLogger").LinkPreviewStatus.NOT_STARTED), we = Me[0], Ae = Me[1], Fe = k(Re == null ? void 0 : Re.omittedURL), Oe = k((Re == null ? void 0 : Re.text) || ""), Be = I([]), We = Be[0], qe = Be[1], Ue = function() {
			var e = o("WAWebCodeFormatMutator").removeCodeBlocks(Oe.current), t = o("WAWebLinkify").findLinks(e, !0, o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow());
			return qe(function(e) {
				return N(e, t) ? e : t;
			}), t[0];
		}, Ve = r("useWAWebIsKeyboardUser")(), He = Ve.isKeyboardUser, Ge = o("WAWebThemeContext").useIsDarkTheme(), ze = o("WAWebAppContext.react").useAppContext(), je = ze.rightDrawerOpen, Ke = I(null), Qe = Ke[0], Xe = Ke[1], Ye = function() {
			return Q.isBot() || Qe != null;
		}, Je = o("WAWebUseBusinessProfile.react").useBusinessProfile(o("WAWebBotGating").isBizBot3pAvailable() || o("WAWebBotBaseGating").isBizBot1pEnabled() ? Q : null, [
			"commands",
			"prompts",
			"isBizBot1p",
			"isBizBot3p"
		]), Ze = Qe != null ? Qe : Q, et = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(Ze, [o("WAWebBotProfileGetters").getCommands]), tt = et[0], nt = (Je == null ? void 0 : Je.commands) || o("WAWebBotBaseGating").isBotEnabled() && tt || null, rt = k([]), ot = r("useLazyRef")(function() {
			return new AbortController();
		}), at = I(!1), it = at[0], lt = at[1], st = o("WAWebUseShouldShowBotSuggestions").useShouldShowBotSuggestions(A.chat, Je == null ? void 0 : Je.prompts, A.threadId);
		o("WAWebUseHatchCommandsFetch").useHatchCommandsFetch(B.id);
		var ut = r("useWAWebStableCallback")(function() {
			return B.getComposeContents();
		}), ct = k(!1), dt = r("useWAWebTextMessageUserJourneyLogger")(B.id, ((l = (y = ut()) == null || (y = y.text) == null ? void 0 : y.length) != null ? l : 0) > 0), mt = dt.handleCloseForUJLogging, pt = dt.handleMsgSentForUJLogging, _t = dt.handleTextMsgChangeForUJLogging;
		R(function() {
			return function() {
				mt(he != null), B.pttRecordingSession != null && o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.draftSaved(B.id, he != null);
			};
		}, []);
		var ft = function() {
			rt.current = [], ot.current.abort(), ot.current = new AbortController(), it && lt(!1);
		}, gt = function(t) {
			t === void 0 && (t = o("WAWebUim").DismissReason.UIM_INTERACTION), Ne(!0), ht(t);
		}, ht = function(t) {
			t === void 0 && (t = o("WAWebUim").DismissReason.UIM_INTERACTION), t !== o("WAWebUim").DismissReason.LIFECYCLE && (ft(), De && (Fe.current = Ie.current, xe(null)));
		}, yt = function() {
			Ie.current = null, Ne(!1), Ae(o("PaymentLinkWamLogger").LinkPreviewStatus.NOT_STARTED), ht();
		}, Ct = function(a, i) {
			if (a.data.thumbnailDirectPath !== void 0) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["link preview: using an existing thumbnail mms"])));
				var t = o("WAWebComposeBoxUtils").getCachedPreview(a);
				return xe(function(e) {
					return (e == null ? void 0 : e.url) !== a.url ? e : t;
				}), (h || (h = n("Promise"))).resolve();
			}
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["link preview: uploading new thumbnail mms"])));
			var l = a.data.thumbnailHQ;
			return l ? r("WAWebMediaOpaqueData").createFromBase64Jpeg(l).then(function(e) {
				return r("WAWebMediaUploadMmsThumbnail")({
					thumbnail: e,
					mediaType: ce ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK : o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
					mediaKeyInfo: r("WAWebCryptoRandomMediaKey")(),
					uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(B),
					forwardedFromWeb: !1,
					signal: i,
					timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
					isViewOnce: !1
				});
			}).then(function(e) {
				var t = e.mediaEntry;
				t && xe(function(n) {
					if ((n == null ? void 0 : n.url) !== a.url) return n;
					var r = {
						mediaKey: t.mediaKey,
						mediaKeyTimestamp: t.mediaKeyTimestamp,
						thumbnailDirectPath: t.directPath,
						thumbnailSha256: e.filehash,
						thumbnailEncSha256: t.encFilehash
					}, o = babelHelpers.extends({}, a, { data: babelHelpers.extends({}, a.data, r) });
					return o;
				});
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(e) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Full preview upload has failed: "])));
			}) : (h || (h = n("Promise"))).resolve();
		}, bt = I(!!Oe.current), vt = bt[0], St = bt[1], Rt = I(Re == null ? void 0 : Re.ctwaContextLinkData), Lt = Rt[0], Et = Rt[1], kt = k(null), It = k(null), Tt = k(null), Dt = k(null), xt = k(null), $t = k(null), Pt = k(null), Nt = k(!1), Mt = k(!1), wt = k(null), At = k(null), Ft = r("useWAWebStableCallback")(function() {
			if (!vt || Lt) {
				yt();
				return;
			}
			var e = Ue();
			if (!e) {
				yt();
				return;
			}
			var t = e.url;
			if (!(Ie.current !== "" && Ie.current === t)) {
				Ie.current = t, Fe.current = null;
				var n = ot.current.signal, a = null;
				o("WAWebPaymentLink").shouldDetectInComposer() && (a = o("WAWebPaymentLink").getPSP(t));
				var i = a != null ? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE, l = o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, i, !0, { psp: a });
				xe(l), Ae(o("PaymentLinkWamLogger").LinkPreviewStatus.STARTED);
				var s = o("WAWebLinkPreviewChatAction").getLinkPreview(e, B).then(function(t) {
					if (n.aborted) throw new (o("WAAbortError")).AbortError();
					if (t && Ie.current === t.url && t.data && (t.data.title || t.data.description)) return xe(t), Ct(t, n).finally(function() {
						Ae(o("PaymentLinkWamLogger").LinkPreviewStatus.COMPLETED);
					});
					l != null && xe(o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, i, !1, { psp: a }));
				});
				rt.current.push(s), s.catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").Unmount, r("WAWebNoop"))).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
			}
		}), Ot = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(Ft);
		}), Bt = k({
			text: "",
			parsableText: "",
			data: {}
		}), Wt = k(null), qt = null, Ut = I(), Vt = Ut[0], Ht = Ut[1], Gt = I(B.pttRecordingSession), zt = Gt[0], jt = Gt[1], Kt = I(B.pttRecordingSession != null), Qt = Kt[0], Xt = Kt[1], Yt = I(null), Jt = Yt[0], Zt = Yt[1], en = I(function() {
			var e = Oe.current;
			return e.trim().length === 0 ? 0 : e.trim().split(/\s+/).length;
		}), tn = en[0], nn = en[1], rn = v(function() {
			return Oe.current;
		}, []), on = v(function() {
			Zt(null);
		}, []), an = I(null), ln = an[0], sn = an[1], un = I(null), cn = un[0], dn = un[1], mn = I(null), pn = mn[0], _n = mn[1], fn = r("useWAWebIsSmartComposerEnabled")(Q), gn = r("useWAWebStableCallback")(function(e) {
			Vt == null || Vt.selectAll(), Vt == null || Vt.replaceSelection(e);
		}), hn = "", yn = I(Re == null ? void 0 : Re.ctwaContext), Cn = yn[0], bn = yn[1], vn = I(function() {
			return o("WAWebConversationSpamUtils").shouldShowSpamPanel(B);
		}), Sn = vn[0], Rn = vn[1], Ln = function() {
			Rn(!1), o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(B);
		}, En = function() {
			Rn(!1);
		}, kn = I({
			handleOnce: [],
			handleMultiple: []
		}), In = kn[0], Tn = kn[1];
		o("useWAWebListener").useListener(o("WAWebBlocklistCollection").BlocklistCollection, [
			"add",
			"remove",
			"reset"
		], j);
		var Dn = function() {
			var e, t = Oe.current, n = B.getComposeContents();
			if (!(n == null && t.trim() === "") && (n == null || (e = n.text) == null ? void 0 : e.trim()) !== t.trim()) {
				var r = {
					text: t,
					timestamp: o("WATimeUtils").unixTime()
				}, a = Fe.current;
				a != null && (r.omittedURL = a), Cn != null && (r.ctwaContext = Cn), Lt != null && (r.ctwaContextLinkData = Lt), B.setComposeContents(r);
			}
		}, xn = function(t) {
			Dn(), yt();
			var e = t.sourceUrl;
			e != null && e !== "" && o("WAWebBizQueryCtwaContextBridge").fetchCtwaContextData(t).then(function(e) {
				bn(e), Dn();
			}).catch(function(e) {
				o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Unable to retrieve CTWA context data, error: ", ""])), e);
			});
		};
		R(function() {
			Ot.current.debounceAndCap(50, 50), Lt && (!Cn || Cn.sourceUrl !== Lt.sourceUrl) && (bn(null), xn(Lt)), o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.setHasDraft(B.pttRecordingSession != null);
		}, []), r("useWAWebOnUnmount")(function() {
			var e;
			Ot.current.cancel(), ot.current.abort(), (e = wt.current) == null || e.cancel(), Dn();
		});
		var $n = k(H);
		R(function() {
			var e = $n.current;
			$n.current = H, e !== H && ye(null);
		}, [ye, H]);
		var Pn = r("useWAWebDebouncedCallback")(Dn, 200), Nn = function() {
			var e = Oe.current.trim().length > 0;
			return e;
		}, Mn = function(t) {
			Vt == null || Vt.focus();
		}, wn = function(t, n) {
			Vt == null || Vt.replaceSelection(t, n);
		}, An = function(t, n) {
			if (t === " " && !Nn()) return o("WAWebCmd").Cmd.scrollMessages();
			Mn(!0), wn(t, n);
		}, Fn = function(t) {
			if (Q.isBot() && !o("WAWebBotUtils").isBotChannelFBID(Q) && (!o("WAWebBotUtils").isMetaAiBot(Q) || !(o("WAWebBotGating").isAnyMetaAiMediaInputEnabled() || o("WAWebBotGating").isMetaAiDocUploadEnabled()))) return o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), !1;
			var e = r("justknobx")._("4552"), n = t.filter(function(t) {
				var n = o("WAWebFileUtils").typeFromMimetype(t.type);
				return n === o("WAWebFileUtils").FILETYPE.DOCUMENT ? e : n === o("WAWebFileUtils").FILETYPE.IMAGE || n === o("WAWebFileUtils").FILETYPE.VIDEO || n === o("WAWebFileUtils").FILETYPE.AUDIO;
			});
			return n.length > 0 && (Pn.flush(), o("WAWebCmd").Cmd.attachMediaDrawer({
				chat: B,
				threadId: H,
				attachments: n.map(function(e) {
					return { file: e };
				}),
				fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.PASTE,
				initCaption: ut(),
				onComplete: nr
			})), !0;
		}, On = function(t) {
			Fn(t);
		}, Bn = function(t) {
			Mn(!0), Vt == null || Vt.paste(t);
		}, Wn = k(P.OTHER), qn = I(!1), Un = qn[0], Vn = qn[1], Hn = function() {
			if (r("justknobx")._("169")) o("WAWebQuickReplyGatingUtils").isQuickReplyComposerEntryPointEnabled(B) && Vn(!0), Vt == null || Vt.replaceSelection("/");
			else {
				var e;
				(e = Wt.current) == null || e.togglePanel();
			}
			Wn.current = P.ATTACHMENT_MENU;
		}, Gn = function() {
			Vt == null || Vt.reset();
		}, zn = function() {
			Mn();
		}, jn = function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.setIsFocus(!0);
		}, Kn = function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.setIsFocus(!1);
		}, Qn = k(null), Xn = k(null), Yn = function(t) {
			Et(t), bn(null), xn(t);
		}, Jn = function(t) {
			Tn(function(e) {
				var n = e.handleMultiple, r = e.handleOnce;
				return {
					handleOnce: t.handleOnce ? r.concat(t.handleOnce) : r,
					handleMultiple: t.handleMultiple ? r.concat(t.handleMultiple) : n
				};
			});
		}, Zn = function() {
			Et(null), bn(null), Dn(), Ot.current.onOrBefore(1);
		}, er = function() {
			var e;
			(e = It.current) == null || e.activate(), Mn(!1);
		}, tr = function(t) {
			var e;
			t.stopPropagation(), q(t), (e = wt.current) == null || e.debounce(0);
		}, nr = r("useWAWebStableCallback")(function(e, t) {
			t === void 0 && (t = {});
			var n = t, r = n.initCaptionUsed;
			e && r && Gn(), e && Zn();
		}), rr = r("useWAWebStableCallback")(function() {
			Pn.flush();
		}), or = function() {
			Zt(null), zn();
		}, ar = function(t, n, a, i) {
			var e = o("WAWebComposeBoxUtils").fetchGif({
				accessibilityLabel: i,
				attribution: a,
				filename: n,
				gifUrl: t
			});
			return Pn.flush(), (pe || _e) && o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.attachMediaDrawer({
				chat: B,
				threadId: H,
				attachments: [e],
				initCaption: ut(),
				fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_GIF_INAPP,
				onComplete: function(t, n) {
					nr(t, n), t && or();
				},
				isQuestion: pe,
				questionReplyQuotedMessage: _e
			}), e.catch(r("WAWebNoop")), e;
		}, ir = function(t, n, r) {
			ar(t, t, n, r);
		}, lr = function(t, n, r) {
			var e = he != null ? he : z, a = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(Lt, Cn), i = {
				stickerSendOrigin: n,
				quotedMsg: e,
				ctwaContext: a,
				threadId: H
			};
			r === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub && (i.isWamoSub = !0), o("WAWebSendStickerAction").sendStickerToChat(B, t, i), ye(null), Zn();
		}, sr = function(t, n, r) {
			if (t.isCreateButton) {
				var e;
				new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP }).commit(), (e = $t.current) == null || e.open();
				return;
			}
			if (ce && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(me) && r != null && r.target && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
				var a = function(r) {
					lr(t, n, r);
				};
				ke({
					popupAnchorEl: r.target,
					handleSelect: a
				});
			} else lr(t, n);
		}, ur = function(t, n, r) {
			r === !0 ? lr(t, n, o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub) : lr(t, n);
		}, cr = function(t) {
			var e = Nn();
			Oe.current = t;
			var n = Nn(), r = t.trim().length === 0 ? 0 : t.trim().split(/\s+/).length;
			nn(r), n !== e && (window.setTimeout(function() {
				o("WAWebComposeBoxActions").ComposeBoxActions.setHasText(n);
			}, 0), St(n)), n ? (ne.subscribe(), o("WAWebPresenceChatAction").markComposing(B), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(B)) : (qt = null, o("WAWebPresenceChatAction").markPaused(B));
			var a = Ue();
			(!a && Ie.current || a && a.url !== Ie.current) && yt(), Nt.current ? Ot.current.onOrBefore(1) : Ot.current.debounce(o("WAWebABProps").getABPropConfigValue("web_link_preview_debounce_period_ms")), Nt.current = !1, Pn(), !Sn && t && !X && Rn(!0);
			var i = Bt.current.data, l = i.mentionedJidList, s = l == null ? void 0 : l.find(function(e) {
				return e.isBot();
			});
			Xe(s), ct.current ? ct.current = !1 : _t(n, he != null);
		}, dr = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				B.pttRecordingSession != null ? e = B.pttRecordingSession : (e = o("WAWebPttComposerRecordingSession").createRecordingSession({ chat: o("WAWebStateUtils").unproxy(B) }), e.on("change:recordingState", function() {
					var t = e.recordingState;
					B.pttRecordingSession === e && (t === o("WAWebRecordingSessionStateEnum").RecordingSessionState.ERROR || t === o("WAWebRecordingSessionStateEnum").RecordingSessionState.STOPPED) && ve(null);
				})), jt(e), Xt(!1), o("WAWebPttMessageUserJourneyLogger").PttMessageUserJourneyLogger.start(B.id, he != null);
				var t;
				try {
					t = yield e.start();
				} finally {
					var n = t ? e : null;
					ve(n), jt(n), Xt(n != null);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), mr = function(t) {
			Zt(t), t != null && o("WAWebUserPrefsGeneral").setLastComposeBoxExpressionPanel(t);
		}, pr = function(t) {
			var e = t.getFiles();
			return Fn(e);
		}, _r = function(t) {
			var e = T.exec(t);
			if (e) {
				var n = "https://media.giphy.com/media/" + e[1] + "/200w.mp4";
				return ar(n, t, o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY).catch(function() {
					o("WAWebDrawerManager").DrawerManager.closeDrawerMid(), Mn(!0), Vt == null || Vt.replaceSelection(t), o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}), !0;
			}
			return Nt.current = !0, !1;
		}, fr = function() {
			return Dt.current ? Dt.current.offsetWidth - D : 0;
		}, gr = function(t) {
			var e, n, r = t.target;
			r instanceof HTMLElement && (e = Xn.current) != null && e.contains(r) || (r instanceof HTMLElement && r === (Vt == null || (n = Vt.editor) == null ? void 0 : n.getRootElement()) && er(), !Z && vt && Rn(!0));
		}, hr = function(t) {
			var e;
			o("WAWebReconnectUtil").reconnect();
			var n = Bt.current.text.trim(), a = Bt.current.data;
			if (!(n.length === 0 && !Lt)) {
				if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(B, a.mentionedJidList)) {
					o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(B);
					return;
				}
				ft();
				var i = he != null ? he : z, l = De == null ? void 0 : De.data, s = o("WAWebPaymentLink").getPaymentLinkMessageMetadata(l, o("WAWebCodeFormatMutator").removeCodeBlocks(n)), u = a.mentionedJidList || [], c = a.groupMentions || [], d = o("WAWebApiPrepareCtwaContextSend").prepareCtwaContextSend(Lt, Cn), p = Mt.current;
				if (Zt(null), St(!1), xe(null), (e = Qn.current) == null || e.close(), qt && (o("WAWebQuickReplyLogging").logQuickReplySendEvent(qt === P.ATTACHMENT_MENU ? o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL : o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_KEYBOARD), qt = null), p) {
					var _ = o("WAWebStateUtils").unproxy(B);
					_.urlText && (_.urlText = void 0);
				}
				var f = H != null ? {
					threadIds: [H],
					aiThreadInfo: o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(B, H)
				} : {}, g = babelHelpers.extends({
					linkPreview: l,
					quotedMsg: i,
					mentionedJidList: u,
					groupMentions: c,
					quotedMsgAdminGroupJid: ae,
					quotedMsgAdminGroupSubject: ie,
					quotedMsgAdminParentGroupJid: le,
					ctwaContext: d,
					isQuestion: pe,
					questionReplyQuotedMessage: _e
				}, f, { maybeNonJidMentioned: At.current != null && At.current > 0 });
				if (ce ? (t === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported() && (g.isWamoSub = !0), o("WAWebNewsletterSendMsgAction").sendNewsletterTextMsg(B, n, g)) : (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["sendTextAction inside WAWebComposeBox"]))), o("WAWebAskMetaAiQuotedMediaSend").sendAskMetaAiAwareTextMsg(B, n, babelHelpers.extends({}, g, {
					botMsgBodyType: o("WAWebBotGating").isBizBot3pAvailable() && Je != null && Je.commands && o("WAWebLexicalUtils").hasBotCommand(Vt == null ? void 0 : Vt.editor) ? o("WAWebBotTypes").BotMsgBodyType.COMMAND : null,
					paymentLinkMetadata: s
				})), Zn(), In.handleOnce.forEach(function(e) {
					return e == null ? void 0 : e();
				}), In.handleMultiple.forEach(function(e) {
					return e == null ? void 0 : e();
				}), Tn({
					handleMultiple: In.handleMultiple,
					handleOnce: []
				})), o("PaymentLinkWamLogger").shouldLogSendEvent()) {
					var h = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), y = o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(h));
					o("PaymentLinkWamLogger").genLogSendEventIfPaymentLink(o("WAWebCodeFormatMutator").removeCodeBlocks(n), Pe, De, we, y, B, s).catch(r("WAWebNoop"));
				}
				Mt.current = !1, At.current = null, ye(null), Ce(null), be(null), B.setComposeContents({}), Gn(), Nn();
			}
		}, yr = function() {
			if (ce && o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(me) && kt.current && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
				var e = function(t) {
					hr(t);
				};
				ke({
					popupAnchorEl: kt.current,
					handleSelect: e
				});
			} else hr();
			U == null || U(), o("WAWebCmd").Cmd.chatMessageSent(B), ct.current = !0, pt(he != null), he != null && o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageSent(B.id);
		}, Cr = r("useWAWebStableCallback")(function(e) {
			Vt == null || Vt.setTextContent(e);
		}), br = function(t) {
			if (Jt) {
				var e;
				(e = xt.current) == null || e.restoreFocus(!0), o("WAWebStopEvent").stopEvent(t);
			}
		}, vr = r("useWAWebDebouncedCallback")(function(e) {
			Nn() || o("WAWebComposeBoxUtils").editLastMessage(B, e);
		}, 200, { trailing: !0 }), Sr = function() {
			jt(null), Xt(!1), zn();
		}, Rr = function() {
			U == null || U(), o("WAWebCmd").Cmd.chatMessageSent(B);
		}, Lr = function(t) {
			if (t) {
				t.stopPropagation();
				var e = t.target.files == null ? [] : Array.from(t.target.files);
				e.length && (new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED }).commit(), o("WAWebCmd").Cmd.attachMediaDrawer({
					chat: B,
					threadId: H,
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
		}, Er = function(t) {
			if (o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_sender_web")) {
				var e;
				At.current = ((e = At.current) != null ? e : 0) | t;
			}
		};
		r("useWAWebComposeBoxActionListeners")(B, {
			onFocus: zn,
			onPaste: An,
			onPasteFiles: On,
			onRoutedPaste: Bn,
			onSend: yr,
			onToggleQuickReplies: Hn,
			onCtwaContextLinkData: Yn,
			onSendingLogAttributes: Jn,
			onSetTextContent: Cr,
			onSetNonJidMentions: Er
		});
		var kr = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().composerFontSize, Ir = o("WAWebStateUtils").unproxy(B).groupMetadata, Tr = function(t) {
			o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["handlePromptSelect inside WAWebComposeBox"])));
			var e;
			H != null && (e = o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(B, H)), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(B, t, {
				botMsgBodyType: o("WAWebBotGating").isBizBot3pAvailable() ? o("WAWebBotTypes").BotMsgBodyType.PROMPT : null,
				threadIds: H ? [H] : void 0,
				aiThreadInfo: e
			});
		}, Dr = o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
			chat: B,
			questionType: V
		}), xr = o("WAWebComposeBoxUtils").getComposeBoxAriaLabelText(B), $r = C.jsxs(r("WAWebRichTextInput.react"), {
			ref: Ht,
			onFocus: jn,
			onBlur: Kn,
			placeholder: Dr,
			ariaLabel: xr,
			ariaActiveDescendents: hn,
			textXstyle: kr,
			xstyle: M.richTextRefresh,
			testid: "conversation-compose-box-input",
			editorName: "compose-box",
			initialText: (b = ut()) == null ? void 0 : b.text,
			readOnly: zt != null,
			maxLength: o("WAWebComposeConstants").MAX_TXT_MSG_SIZE,
			maxVisibleLines: G,
			minVisibleLines: 1,
			spellCheck: Se.spellcheck,
			enterIsNewLine: !Se.enterIsSend,
			multiline: !0,
			focusOnMount: !He,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_INPUT,
			onChange: function(t) {
				Bt.current = t, cr(t.parsableText);
			},
			onEnter: yr,
			onFiles: pr,
			onTextPaste: _r,
			onMaxPasteExceeded: o("WAWebComposeBoxUtils").handleMaxPasteExceeded,
			children: [
				C.jsx(r("WAWebRichTextInputPlugins.react"), {
					groupMetadata: Ir,
					transformTextEmoji: Se.transformTextEmoji,
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
					highlightedBotCommands: nt
				}),
				C.jsx(r("WAWebEmojiPickerPlugin"), {}),
				C.jsx(r("WAWebMentionPickerPlugin"), {
					chat: o("WAWebStateUtils").unproxy(B),
					elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(B),
					source: "chat-composer"
				}),
				o("WAWebHatchGating").isHatchCommandsEnabled() && o("WAWebBotUtils").isHatchBot(B.id) && C.jsx(r("WAWebHatchCommandPickerPlugin.react"), { chatId: B.id }),
				o("WAWebQuickReplyGatingUtils").canSendQuickReplyInChat(B) && r("justknobx")._("169") && (Vt == null ? void 0 : Vt.editor) && C.jsx(r("WAWebQuickReplyPickerPlugin"), {
					composerAnchorRef: kt,
					editor: Vt.editor,
					onPickerClose: function() {
						return Vn(!1);
					},
					openedFromMenu: Un
				})
			]
		}), Pr, Nr = Vt == null ? void 0 : Vt.editor;
		Nr != null && (Pr = C.jsxs(C.Fragment, { children: [
			!1,
			!1,
			o("WAWebQuickReplyGatingUtils").canSendQuickReplyInChat(B) && !r("justknobx")._("169") && C.jsx(r("WAWebQuickReplySuggestions.react"), {
				kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
				editor: Nr,
				ref: Wt,
				onSelect: function() {
					Wn.current === P.ATTACHMENT_MENU ? (o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(B, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.QUICK_REPLY), qt = P.ATTACHMENT_MENU) : qt = P.OTHER, Wn.current = P.OTHER;
				},
				onHide: function() {
					Wn.current === P.ATTACHMENT_MENU && o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(B, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.QUICK_REPLY), Wn.current = P.OTHER;
				}
			}),
			(o("WAWebBotBaseGating").isBizBot3pEnabled() && Je || o("WAWebBotBaseGating").isBotEnabled() && tt) && C.jsx(o("WAWebBotCommandSuggestions.react").BotCommandSuggestions, {
				kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
				editor: Nr,
				businessProfile: Je && o("WAWebStateUtils").unproxy(Je),
				metaBotId: Ze
			}),
			!r("gkx")("26258") && n("cr:5993") ? C.jsx(n("cr:5993"), {
				kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
				editor: Nr
			}) : null
		] })), L(w, function() {
			return {
				flushSaveComposeContentDebounced: rr,
				getCurrentComposeContent: ut,
				updateTextAfterMediaDrawerClose: nr
			};
		}, [
			rr,
			ut,
			nr
		]), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "start_ptt_recording", function() {
			Qt || dr();
		});
		var Mr = null;
		st && (Mr = C.jsx(r("WAWebBotSuggestions.react"), {
			id: Q,
			onPromptSelect: Tr
		}));
		var wr = {
			chat: B,
			pttComposerActive: Qt,
			isMessageToBot: Ye(),
			getCurrentComposeContent: ut,
			richTextInputRef: Vt,
			updateTextAfterMediaDrawerClose: nr,
			inputHotkeyRef: Pt,
			handleTab: br,
			handleMetaUpDebounced: vr,
			handleInputFocus: gr,
			input: $r,
			expressionsPanelWrapperRef: Xn,
			expressionsPanelPickerRef: Qn,
			replaceInputSelection: wn,
			handlePanelsSticker: sr,
			handlePanelsStickerFromStore: ur,
			handlePanelsGif: ir,
			hasTextState: vt,
			handleSendText: yr,
			recordingSession: zt,
			startRecording: dr,
			threadId: H,
			wwaiButton: C.jsx("div", {
				ref: sn,
				className: "x78zum5 xpvyfi4"
			}),
			smartComposerModePill: fn ? C.jsx("div", {
				ref: dn,
				"data-testid": "biz_ai_smart_composer_mode_pill_slot",
				className: "x78zum5 xamitd3"
			}) : null,
			smartComposerCard: fn ? C.jsx("div", {
				ref: _n,
				"data-testid": "biz_ai_smart_composer_card_slot",
				className: "x78zum5 xdt5ytf"
			}) : null
		}, Ar = o("WAWebIsScheduledMessagesAvailableForChat").isScheduledMessagesAvailableForChat(B) ? function(e) {
			var t;
			o("WAWebReconnectUtil").reconnect();
			var n = Bt.current.text.trim(), a = Bt.current.data;
			if (n.length !== 0) {
				if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(B, a.mentionedJidList)) {
					o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(B);
					return;
				}
				ft();
				var i = he != null ? he : z, l = De == null ? void 0 : De.data, s = a.mentionedJidList || [], u = a.groupMentions || [], c = H != null ? {
					threadIds: [H],
					aiThreadInfo: o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(B, H)
				} : {};
				Zt(null), St(!1), xe(null), (t = Qn.current) == null || t.close(), o("WAWebSendScheduledMsgAction").sendScheduledTextMsgToChat(B, n, e, babelHelpers.extends({
					linkPreview: l,
					quotedMsg: i,
					mentionedJidList: s,
					groupMentions: u,
					quotedMsgAdminGroupJid: ae,
					quotedMsgAdminGroupSubject: ie,
					quotedMsgAdminParentGroupJid: le
				}, c, { maybeNonJidMentioned: At.current != null && At.current > 0 })).catch(function(e) {
					o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["sendScheduledTextMsgToChat failed"]))).catching(r("getErrorSafe")(e)).sendLogs("send-scheduled-msg");
				}), Mt.current = !1, At.current = null, ye(null), Ce(null), be(null), B.setComposeContents({}), Gn(), Nn();
			}
		} : void 0, Fr = o("WAWebComposeBoxPopupPanels.react").useComposePopupPanels(xt, {
			chat: B,
			linkPreviewData: De == null ? void 0 : De.data,
			links: We,
			ctwaContextLinkData: Lt,
			ctwaContextData: Cn,
			restoreFocus: zn,
			selectedExpressionPanel: Jt,
			getComposeBlockWidth: fr,
			onComposeHeightChange: W,
			omitLinkPreview: gt,
			omitCtwa: Zn,
			onEmoji: wn,
			onGif: ir,
			onExpressionPanelChange: mr,
			onSticker: sr,
			onExpressionPanelClose: or,
			showSpamPanel: O && Sn,
			onClickNotSpam: Ln,
			onClickDismissSpam: En,
			questionReplyQuotedMessage: A.questionReplyQuotedMessage,
			questionType: V
		}), Or = Fr.PopupPanels, Br = Fr.hasTopPanels, Wr = Fr.hideComposer, qr = C.jsx(r("WAWebMessageComposer.react"), babelHelpers.extends({}, wr, {
			ref: kt,
			hasTopPanel: Br,
			closePttComposer: Sr,
			onPttSend: Rr,
			questionType: V,
			questionReplyQuotedMessage: A.questionReplyQuotedMessage,
			threadId: H,
			onScheduleSend: Ar
		}));
		return C.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "compose-box",
			type: "fatal",
			children: C.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "ComposeBox",
				ref: It,
				uimState: o("WAWebUim").UIMState.PASSIVE,
				requestFocus: He ? null : zn,
				children: C.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
					component: "footer",
					tabIndex: null,
					handlers: {
						pagedown: tr,
						pageup: tr
					},
					xstyle: [
						M.footer,
						st && M.botSuggestions,
						Ge && je && M.footerDarkThreePanel,
						M.footerRefresh,
						Wr && M.footerCollapsed
					],
					style: Wr ? { "--height-pane-footer": "0px" } : void 0,
					ref: Tt,
					children: [
						!Wr && Mr,
						C.jsx(r("WAWebCopyPasteCopyableArea.react"), {
							canCut: !0,
							className: (g || (g = r("stylex")))(M.blockCompose, [M.blockComposeRefresh, o("WDSMargins.stylex").wdsMargins.marginHorAuto], Wr && M.blockComposeCollapsed, !1),
							ref: Dt,
							children: !Wr && C.jsxs("div", {
								"data-testid": "compose-box",
								className: "x1n2onr6 x98rzlu xh8yej3 xeuugli x1gg8mnh",
								children: [
									C.jsx(r("WAWebVelocityTransitionGroup"), {
										transitionName: "messageComposer",
										children: qr
									}),
									C.jsx(r("WAWebComposeBoxWWAIWrapperLoadable"), {
										chatId: Q.toString(),
										isBot: Q.isBot(),
										wordCount: tn,
										getComposeText: rn,
										fabSlot: ln,
										onAcceptSuggestion: gn,
										onWillOpenTray: on
									}),
									fn && C.jsx(r("WAWebBizAiSmartComposerWrapperLoadable"), {
										cardSlot: pn,
										chatId: Q,
										onInsert: gn,
										pillSlot: cn
									})
								]
							})
						}),
						Or,
						!Wr && C.jsxs(C.Fragment, { children: [
							C.jsx(r("WAWebFilePicker.react"), {
								ref: $t,
								mimes: o("WAWebMimeTypes").IMAGE_MIMES,
								onChange: Lr,
								multiple: !1
							}),
							Pr,
							Ee != null && C.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
								handleSelect: Ee.handleSelect,
								popupAnchorEl: Ee.popupAnchorEl,
								onDismiss: function() {
									return ke(null);
								}
							})
						] })
					]
				})
			})
		});
	}
	w.displayName = w.name + " [from " + i.id + "]";
	var A = w;
	function F(e) {
		var t = e.chat, n = e.handleFocus, r = t.id.toString();
		return o("useWAWebListener").useListener(o("WAWebComposeBoxActions").ComposeBoxActions, "focus_" + r, n), o("useWAWebListener").useListener(o("WAWebComposeBoxActions").ComposeBoxActions, "focus", n), C.jsx(o("WAWebUimUie.react").UIE, { displayName: "PlaceholderComposeBox" });
	}
	F.displayName = F.name + " [from " + i.id + "]", l.ComposeBox = A, l.PlaceholderComposeBox = F;
}), 226);
