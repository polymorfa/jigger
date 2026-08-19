__d("WAWebForwardMessageModal.react", [
	"fbt",
	"Keys",
	"WAFilteredCatch",
	"WALogger",
	"WAWebABProps",
	"WAWebAttachMediaCollection",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBotBaseGating",
	"WAWebBotForwardCapability",
	"WAWebBotGating",
	"WAWebBotUtils",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebChatModel",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebContactGetters",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebFileUtils",
	"WAWebForwardCreateBroadcastButton.react",
	"WAWebForwardDocCaptionGating",
	"WAWebForwardErrorChatAction",
	"WAWebForwardMediaWithCaptionPopupNux.react",
	"WAWebForwardMessagesToChat",
	"WAWebForwardWithCaptionPreview.react",
	"WAWebFrequentlyForwardedWarning.react",
	"WAWebFrontendMsgGetters",
	"WAWebGetNewsletterContextForForwardedMsg",
	"WAWebHatchFrontendGating",
	"WAWebLogStatusPost",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaOpaqueData",
	"WAWebMediaPrep",
	"WAWebMessageAssociationGatingUtils",
	"WAWebMessageAssociationUIUtils",
	"WAWebMessageYourselfMetricUtils",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgModelUtils",
	"WAWebMsgType",
	"WAWebNewsletterForwardConfirmationModal.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterSendMsgAction",
	"WAWebNux",
	"WAWebPrepareMediaForStatusForwarding",
	"WAWebSelectModal.react",
	"WAWebSendStatusMsgAction",
	"WAWebSendTextMsgChatAction",
	"WAWebServerPropConstants",
	"WAWebShareContentUserJourneyLogger",
	"WAWebStatusPosterActionsLogger",
	"WAWebStatusPostingMediaView.react",
	"WAWebTabOrder",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebVideoUtils",
	"WAWebViewMode.flow",
	"WAWebWamEnumMediaPickerOriginType",
	"WAWebWamEnumMediaType",
	"WAWebWamEnumStatusPostOrigin",
	"WAWebWamEnumWebcRmrReasonCode",
	"WDSIconIcGroupAdd.react",
	"WDSMenuBarItem.react",
	"isStringNullOrEmpty",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useMemo, h = _.useRef, y = _.useState, C = 1;
	function b(e) {
		var t = e.getAnnouncementSummary, n = e.msgs, a = e.onBack, i = e.onClose, l = e.onEditStatusAudience, u = e.onForward, c = e.onNewGroupClick, d = [];
		o("WAWebMessageAssociationGatingUtils").isMessageAssociationInfraEnabled() ? n == null || n.forEach(function(e) {
			var t = o("WAWebFrontendMsgGetters").getAsAlbum(e);
			if (t) {
				var n = o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id, o("WAWebViewMode.flow").ViewModeSurface.CHAT);
				d.push.apply(d, n);
			} else d.push(e);
		}) : d.push.apply(d, n), d.forEach(async function(e) {
			o("WAWebMsgGetters").getIsNewsletterMsg(e) && o("WAWebMsgGetters").getIsMedia(e) && !o("WAWebVideoUtils").isMsgStreamable(e) && o("WAWebNewsletterGatingUtils").isNewsletterQuickForwardingEnabled() && await e.downloadMedia({
				downloadEvenIfExpensive: !0,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
				isUserInitiated: !0
			});
		});
		var m = d[0], _ = o("WAWebFrontendMsgGetters").getMaybeChat(m), b = d.some(o("WAWebMsgGetters").getIsFrequentlyForwarded), S = d.some(function(e) {
			return e.isForwarded;
		}), $ = d.filter(function(e) {
			return !o("WAWebMsgGetters").getIsFrequentlyForwarded(e) && o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(e) === o("WAWebMsgGetters").FREQUENTLY_FORWARDED_SENTINEL;
		}), N = $.length ? p.jsx(r("WAWebFrequentlyForwardedWarning.react"), {
			frequentlyForwardedCount: $.length,
			totalCount: d.length
		}) : void 0, M = b ? C : o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL, w = d.every(function(e) {
			return !(o("WAWebMsgGetters").getIsMedia(e) || o("WAWebFileUtils").isDocument(e) && o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled());
		}), A = o("WAWebMsgModelUtils").getMediaMsgWithCaptionForForwarding(d), F = y(A.length > 0), O = F[0], B = F[1], W = r("useWAWebNux")(o("WAWebNux").NUX.FORWARD_MEDIA_WITH_CAPTION), q = W[0], U = W[1], V = y(!1), H = V[0], G = V[1], z = function() {
			B(!1);
		}, j = y(null), K = j[0], Q = j[1], X = y(!1), Y = X[0], J = X[1], Z = y(!1), ee = Z[0], te = Z[1], ne = h(null), re = h(0), oe = function(t) {
			Q(t);
		}, ae = f(function(e) {
			var t = e.selectedItems, n = t.length === 1 && t[0] instanceof o("WAWebChatModel").Chat && t[0].id.isStatus();
			J(n), n && t[0] instanceof o("WAWebChatModel").Chat ? ne.current = t[0] : ne.current = null, te(t.length === 1 && t[0] instanceof o("WAWebChatModel").Chat && o("WAWebBotUtils").isMetaAiBot(t[0].id));
		}, []), ie = Y && d.length === 1 && d[0].type === o("WAWebMsgType").MSG_TYPE.IMAGE && o("WAWebABProps").getABPropConfigValue("wa_web_edit_before_forwarding_to_status") === !0;
		function le() {
			var e = ne.current;
			e != null && (new (o("WAWebStatusPosterActionsLogger")).StatusPosterActionsLogger().logForwardPreviewEdit(), D(e, d[0], O, K, i, function(e) {
				e && (u == null || u(d));
			}));
		}
		function se(e) {
			var t = e.isSearchResult, n = t === void 0 ? !1 : t, a = e.selectedItems, i = a, l = i.find(function(e) {
				return o("WAWebChatGetters").getIsNewsletter(e);
			});
			return l != null ? o("WAWebModalManager").ModalManager.open(p.jsx(r("WAWebNewsletterForwardConfirmationModal.react"), {
				forwardToChat: l,
				handleConfirm: function() {
					return ue(i, n);
				}
			})) : ue(i, n);
		}
		async function ue(e, t) {
			t === void 0 && (t = !1);
			var n = e.filter(function(e) {
				return !e.id.isStatus();
			});
			if (O && q && !n.some(k)) {
				G(!0);
				return;
			}
			var a = n[0], l = n.length === 1 && a != null && o("WAWebBotUtils").isMetaAiBot(a.id), s = function() {
				var e;
				o("WAWebShareContentUserJourneyLogger").ShareContentUserJourneyLogger.contentShared(((e = K == null ? void 0 : K.length) != null ? e : 0) > 0);
			};
			if (l) o("WAWebForwardMessagesToChat").forwardMessagesToChats({
				msgs: d,
				chats: n,
				includeCaption: O,
				appendedText: K
			}).then(s).catch(o("WAFilteredCatch").filteredCatch(r("WAWebForwardErrorChatAction"), function(e) {
				return E(e.reasons);
			}));
			else if (n.length > 0) {
				var c = o("WAWebForwardMessagesToChat").forwardMessagesToChats({
					msgs: d,
					chats: n,
					includeCaption: O
				}).then(s).catch(o("WAFilteredCatch").filteredCatch(r("WAWebForwardErrorChatAction"), function(e) {
					return E(e.reasons);
				})).finally(function() {
					return L(K, n);
				});
				a != null && o("WAWebChatGetters").getIsNewsletter(a) && await c;
			}
			var m = e.find(function(e) {
				return e.id.isStatus();
			});
			if (m != null && T({
				appendedText: K,
				includeCaption: O,
				msgsAndAssociatedMsgs: d,
				retryCountRef: re,
				statusChat: m
			}), i(), u == null || u(d), a != null) return !l && _ != null && o("WAWebBotUtils").isMetaAiBot(_.id) && o("WAWebBotGating").isAiChatThreadsEnabled() && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), o("WAWebCmd").Cmd.openChatFromUnread({
				chat: a,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Forward
			}).then(function(e) {
				e && o("WAWebContactGetters").getIsMe(a.contact) && o("WAWebMessageYourselfMetricUtils").UiMessageYourselfSearchAction.logMessageYourselfOpenedEvent(a, t);
			});
		}
		var ce = g(function() {
			return d.some(function(e) {
				var t;
				return (t = e.interactiveAnnotations) == null ? void 0 : t.some(function(e) {
					var t;
					return ((t = e.embeddedContent) == null ? void 0 : t.embeddedMusic) != null;
				});
			});
		}, [d]), de = !d.some(function(e) {
			return !x(e);
		}), me = { hasMusicAnnotations: ce }, pe = c != null && o("WAWebABProps").getABPropConfigValue("wa_web_forward_to_small_groups") ? p.jsx(r("WDSMenuBarItem.react"), {
			testid: "btn-new-group-forward",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			onClick: c,
			title: s._(
				/*BTDS*/
				""
			),
			icon: r("WDSIconIcGroupAdd.react")
		}) : null, _e = d.length === 1 && P(m) && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported() && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastContextualEntrypointsEnabled() ? p.jsx(r("WAWebForwardCreateBroadcastButton.react"), {
			msg: m,
			onClose: i,
			variant: "menu-bar-item"
		}) : null, fe = o("WAWebBotForwardCapability").getForwardToMetaAiEligibility(d), ge = o("WAWebBotForwardCapability").canForwardSelectionToHatch(d), he = o("WAWebBotBaseGating").isBotEnabled(), ye = {
			onBack: a,
			onEditStatusAudience: l,
			hasFrequentlyForwarded: b,
			hasForwarded: S,
			headerRightActionElement: p.jsxs(p.Fragment, { children: [_e, pe] }),
			onConfirm: se,
			maxItems: M,
			isDisabled: function(t) {
				return o("WAWebBotUtils").isMetaAiBot(t.id) ? fe.state === "disabled" : o("WAWebBotUtils").isHatchBot(t.id) ? !ge : d.some(function(e) {
					return !o("WAWebMsgActionCapability").canForwardMsgToChat(e, t);
				});
			},
			customItemSecondaryText: function(t, n) {
				return I(t, n, fe);
			},
			excludeBroadcast: !0,
			title: R.title(d.length, m),
			includeNewsletters: _ != null && o("WAWebNewsletterGatingUtils").isForwardToNewsletterEnabled(),
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			customHeader: N,
			ephemeralIcon: "chat-list",
			hasDirtyAppendMsgComposeBox: K != null && K !== "",
			includeMetaAi: he,
			includeHatch: he && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled(),
			includeMyStatus: de && o("WAWebABProps").getABPropConfigValue("status_allow_forwarding_to_status_on_web"),
			isNonMediaForward: w,
			chatFilter: function(t) {
				return o("WAWebMsgActionCapability").allowedChatOrContactForForwarding(t, d, me);
			},
			contactFilter: function(t) {
				return o("WAWebMsgActionCapability").allowedChatOrContactForForwarding(t, d, me);
			},
			onSelectionChanged: ae,
			previewComponent: p.jsx(v, {
				includeCaption: O,
				handleAppendMessage: oe,
				handleRemoveCaption: z,
				isOnlyMetaAiSelected: ee,
				msgs: d,
				mediaMsgsWithCaption: A,
				onEditClick: le,
				showEditIcon: ie
			})
		};
		return p.jsxs(p.Fragment, { children: [p.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MessageForwardModal",
			escapable: !0,
			requestDismiss: function(t, n) {
				var e = a != null ? a : i;
				t === o("WAWebUim").DismissReason.UIM_INTERACTION && n instanceof KeyboardEvent && n.keyCode === r("Keys").ESC && (e == null || e());
			},
			children: p.jsx(o("WAWebSelectModal.react").SelectModal, babelHelpers.extends({}, ye, {
				tsNavigationData: _ != null && o("WAWebChatGetters").getIsNewsletter(_) ? {
					surface: "channel-forward",
					extras: { channelWid: _.id }
				} : { surface: "forward-selection-modal" },
				getAnnouncementSummary: t
			}))
		}), H && p.jsx(r("WAWebForwardMediaWithCaptionPopupNux.react"), { onOk: function() {
			U(), G(!1);
		} })] });
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.handleAppendMessage, n = e.handleRemoveCaption, a = e.includeCaption, i = e.isOnlyMetaAiSelected, l = e.mediaMsgsWithCaption, s = e.msgs, u = e.onEditClick, c = e.showEditIcon, d = s.length === 1 && (o("WAWebMsgGetters").getIsMedia(s[0]) ? r("isStringNullOrEmpty")(s[0].caption) : o("WAWebFileUtils").isDocument(s[0]) && o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() && (r("isStringNullOrEmpty")(s[0].caption) || s[0].caption === s[0].filename)), m = o("WAWebBotForwardCapability").canForwardMsgToMetaAi(s), _ = i ? S() : void 0;
		if (s.length === 0) return null;
		var f = s[0], g = o("WAWebFrontendMsgGetters").getMaybeChat(f);
		return g != null && o("WAWebChatGetters").getIsNewsletter(g) ? null : l.length > 0 ? p.jsx("div", {
			className: "x11uqc5h xv32h1t xh8yej3 x1od0jb8 x9f619 xpx74rz",
			children: p.jsx(r("WAWebForwardWithCaptionPreview.react"), {
				msgs: l,
				displayCaptionText: a,
				onRemoveCaptionSelect: n,
				onAppendMessage: t,
				allMsgs: s,
				onEditClick: u,
				showEditIcon: c
			})
		}) : d ? p.jsx("div", {
			className: "x11uqc5h xv32h1t xh8yej3 x1od0jb8 x9f619 xpx74rz",
			children: p.jsx(r("WAWebForwardWithCaptionPreview.react"), {
				msgs: s,
				displayCaptionText: a,
				onRemoveCaptionSelect: n,
				onAppendMessage: t,
				captionPlaceholderText: _,
				onEditClick: u,
				showEditIcon: c
			})
		}) : m ? p.jsx("div", {
			className: "x11uqc5h xjp8j0k xh8yej3 x1od0jb8 x9f619 xpx74rz",
			children: p.jsx(r("WAWebForwardWithCaptionPreview.react"), {
				msgs: s,
				displayCaptionText: a,
				onRemoveCaptionSelect: n,
				onAppendMessage: t,
				captionPlaceholderText: _
			})
		}) : null;
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S() {
		return s._(
			/*BTDS*/
			""
		);
	}
	var R = { title: function(t, n) {
		return o("WAWebMsgGetters").getIsNewsletterMsg(n) ? s._(
			/*BTDS*/
			"",
			[s._plural(t)]
		) : s._(
			/*BTDS*/
			"",
			[s._plural(t)]
		);
	} };
	function L(t, n) {
		if (!(t == null || t === "")) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendAppendedText inside WAWebForwardMessageModal"])));
			var r = n.filter(function(e) {
				return e.canSend;
			}).map(function(e) {
				return o("WAWebChatGetters").getIsNewsletter(e) ? o("WAWebNewsletterSendMsgAction").sendNewsletterTextMsg(e, t, {}) : o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t);
			});
			return Promise.all(r).catch(function(e) {});
		}
	}
	function E(e) {
		var t = e.map(function(e) {
			var t = e.chat, n = e.reason;
			return p.jsxs("p", { children: [
				t.formattedTitle,
				" : ",
				n
			] }, t.id.toString());
		});
		o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "forward-message"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			children: t
		}), void 0);
	}
	function k(e) {
		return e instanceof o("WAWebChatModel").Chat && o("WAWebChatGetters").getIsNewsletter(e);
	}
	function I(e, t, n) {
		if (t) {
			if (o("WAWebBotUtils").isMetaAiBot(e.id) && n.state === "disabled") return n.reason;
			if (k(e)) return s._(
				/*BTDS*/
				""
			);
		}
	}
	async function T(e) {
		var t = e.appendedText, n = e.includeCaption, r = e.msgsAndAssociatedMsgs, a = e.retryCountRef, i = e.statusChat, l = r.length, s = a.current;
		a.current += 1, Promise.all([].concat(r.map(async function(e) {
			var r = await o("WAWebPrepareMediaForStatusForwarding").prepareMediaForStatusForwarding(e), a = n ? e.caption : null;
			return a == null && t != null && l === 1 && (a = t), $({
				statusChat: i,
				msgType: e.type,
				body: e.body,
				caption: a,
				mediaData: r,
				retryCount: s,
				statusContainsMusic: o("WAWebMsgGetters").isStatusWithMusic(e),
				forwardedNewsletterMessageInfo: o("WAWebGetNewsletterContextForForwardedMsg").getNewsletterContextForForwardedMsg(e)
			});
		}), [l > 1 ? $({
			statusChat: i,
			msgType: o("WAWebMsgType").MSG_TYPE.CHAT,
			body: t,
			retryCount: s,
			statusContainsMusic: !1
		}) : null]));
	}
	async function D(e, t, n, a, i, l) {
		var s, d, m;
		try {
			var _;
			(_ = t.mediaData) != null && _.mediaBlob || await t.downloadMedia({
				downloadEvenIfExpensive: !0,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
				isUserInitiated: !0
			});
		} catch (e) {
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["openStatusEditorForForward: failed to download media ", ""])), e).sendLogs("status-forward-edit-download-failed", { sampling: .01 });
			return;
		}
		var f = null, g = (s = t.mediaData) == null ? void 0 : s.mediaBlob;
		if (g instanceof r("WAWebMediaOpaqueData") ? f = g.forceToBlob() : ((d = t.mediaData) == null ? void 0 : d.filehash) != null && (f = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(t.mediaData.filehash)), f == null) {
			o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["openStatusEditorForForward: could not get blob for message"]))).sendLogs("status-forward-edit-no-blob", { sampling: .01 });
			return;
		}
		i();
		var h = n ? t.caption : null;
		h == null && a != null && (h = a);
		var y = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: e.getParticipantCount() });
		e.setAttachMediaContents(y);
		var C = new File([f], "forwarded-media", { type: f.type || ((m = t.mediaData) == null ? void 0 : m.mimetype) || "image/jpeg" }), b = { file: C }, v = function() {
			var t = e.attachMediaContents;
			t != null && t.processAttachmentsForChat([b], o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.FORWARD, e);
		};
		o("WAWebModalManager").ModalManager.openMedia(p.jsx(r("WAWebStatusPostingMediaView.react"), {
			chat: e,
			initCaption: h != null ? { text: h } : null,
			mediaCollection: y,
			onComplete: l,
			onRender: v,
			statusPostOrigin: o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES
		}), { transition: "status-modal" });
	}
	function x(e) {
		return o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) && (!o("WAWebMsgGetters").getIsNewsletterStatus(e) || !o("WAWebNewsletterGatingUtils").isNewsletterStatusForwardEnabled()) ? !1 : e.type === o("WAWebMsgType").MSG_TYPE.CHAT || e.type === o("WAWebMsgType").MSG_TYPE.PTT || o("WAWebMsgGetters").getIsMedia(e);
	}
	async function $(e) {
		var t, n, r = e.body, a = e.caption, i = e.forwardedNewsletterMessageInfo, l = e.mediaData, s = e.msgType, u = e.retryCount, c = e.statusChat, m = e.statusContainsMusic;
		if (!(!r && !l)) {
			var p = {
				statusPostOrigin: o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES,
				mediaType: s === o("WAWebMsgType").MSG_TYPE.CHAT ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT : o("WAWebLogStatusPost").getStatusMediaType(s),
				hasCaption: !!a,
				hasFilters: !1,
				retryCount: u,
				statusContainsMusic: m
			}, _;
			try {
				l != null ? _ = await new (o("WAWebMediaPrep")).MediaPrep(s, Promise.resolve(l)).sendToChat({
					chat: c,
					options: {
						caption: a,
						addEvenWhilePreparing: !0,
						forwardedNewsletterMessageInfo: i
					}
				}) : s === o("WAWebMsgType").MSG_TYPE.CHAT && r != null && (_ = await o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
					text: r,
					forwardedNewsletterMessageInfo: i
				}));
			} catch (e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to forward message as status ", ""])), e).sendLogs("status-forward-failed", { sampling: .01 });
			}
			o("WAWebLogStatusPost").logStatusPost(babelHelpers.extends({
				statusPostResult: o("WAWebLogStatusPost").getStatusPostResult((t = _) == null ? void 0 : t.messageSendResult),
				msg: (n = _) == null ? void 0 : n.msg
			}, p));
		}
	}
	function P(e) {
		return e.type === o("WAWebMsgType").MSG_TYPE.CHAT || e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT || e.type === o("WAWebMsgType").MSG_TYPE.IMAGE || e.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
	}
	l.default = b;
}), 226);
