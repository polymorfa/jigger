__d("WAWebForwardMessageModal.react", [
	"fbt",
	"Keys",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useCallback, h = f.useMemo, y = f.useRef, C = f.useState, b = 1;
	function v(e) {
		var t = e.getAnnouncementSummary, a = e.msgs, i = e.onBack, l = e.onClose, u = e.onEditStatusAudience, c = e.onForward, d = e.onNewGroupClick, m = [];
		o("WAWebMessageAssociationGatingUtils").isMessageAssociationInfraEnabled() ? a == null || a.forEach(function(e) {
			var t = o("WAWebFrontendMsgGetters").getAsAlbum(e);
			if (t) {
				var n = o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id, o("WAWebViewMode.flow").ViewModeSurface.CHAT);
				m.push.apply(m, n);
			} else m.push(e);
		}) : m.push.apply(m, a), m.forEach((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WAWebMsgGetters").getIsNewsletterMsg(e) && o("WAWebMsgGetters").getIsMedia(e) && !o("WAWebVideoUtils").isMsgStreamable(e) && o("WAWebNewsletterGatingUtils").isNewsletterQuickForwardingEnabled() && (yield e.downloadMedia({
					downloadEvenIfExpensive: !0,
					rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
					isUserInitiated: !0
				}));
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})());
		var p = m[0], f = o("WAWebFrontendMsgGetters").getMaybeChat(p), v = m.some(o("WAWebMsgGetters").getIsFrequentlyForwarded), R = m.some(function(e) {
			return e.isForwarded;
		}), x = m.filter(function(e) {
			return !o("WAWebMsgGetters").getIsFrequentlyForwarded(e) && o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(e) === o("WAWebMsgGetters").FREQUENTLY_FORWARDED_SENTINEL;
		}), P = x.length ? _.jsx(r("WAWebFrequentlyForwardedWarning.react"), {
			frequentlyForwardedCount: x.length,
			totalCount: m.length
		}) : void 0, M = v ? b : o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL, w = m.every(function(e) {
			return !(o("WAWebMsgGetters").getIsMedia(e) || o("WAWebFileUtils").isDocument(e) && o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled());
		}), F = o("WAWebMsgModelUtils").getMediaMsgWithCaptionForForwarding(m), O = C(F.length > 0), B = O[0], W = O[1], q = r("useWAWebNux")(o("WAWebNux").NUX.FORWARD_MEDIA_WITH_CAPTION), U = q[0], V = q[1], H = C(!1), G = H[0], z = H[1], j = function() {
			W(!1);
		}, K = C(null), Q = K[0], X = K[1], Y = C(!1), J = Y[0], Z = Y[1], ee = C(!1), te = ee[0], ne = ee[1], re = y(null), oe = y(0), ae = function(t) {
			X(t);
		}, ie = g(function(e) {
			var t = e.selectedItems, n = t.length === 1 && t[0] instanceof o("WAWebChatModel").Chat && t[0].id.isStatus();
			Z(n), n && t[0] instanceof o("WAWebChatModel").Chat ? re.current = t[0] : re.current = null, ne(t.length === 1 && t[0] instanceof o("WAWebChatModel").Chat && o("WAWebBotUtils").isMetaAiBot(t[0].id));
		}, []), le = J && m.length === 1 && m[0].type === o("WAWebMsgType").MSG_TYPE.IMAGE && o("WAWebABProps").getABPropConfigValue("wa_web_edit_before_forwarding_to_status") === !0;
		function se() {
			var e = re.current;
			e != null && (new (o("WAWebStatusPosterActionsLogger")).StatusPosterActionsLogger().logForwardPreviewEdit(), $(e, m[0], B, Q, l, function(e) {
				e && (c == null || c(m));
			}));
		}
		function ue(e) {
			var t = e.isSearchResult, n = t === void 0 ? !1 : t, a = e.selectedItems, i = a, l = i.find(function(e) {
				return o("WAWebChatGetters").getIsNewsletter(e);
			});
			return l != null ? o("WAWebModalManager").ModalManager.open(_.jsx(r("WAWebNewsletterForwardConfirmationModal.react"), {
				forwardToChat: l,
				handleConfirm: function() {
					return ce(i, n);
				}
			})) : ce(i, n);
		}
		function ce(e, t) {
			return de.apply(this, arguments);
		}
		function de() {
			return de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				t === void 0 && (t = !1);
				var n = e.filter(function(e) {
					return !e.id.isStatus();
				});
				if (B && U && !n.some(I)) {
					z(!0);
					return;
				}
				var a = n[0], i = n.length === 1 && a != null && o("WAWebBotUtils").isMetaAiBot(a.id), s = function() {
					var e;
					o("WAWebShareContentUserJourneyLogger").ShareContentUserJourneyLogger.contentShared(((e = Q == null ? void 0 : Q.length) != null ? e : 0) > 0);
				};
				if (i) o("WAWebForwardMessagesToChat").forwardMessagesToChats({
					msgs: m,
					chats: n,
					includeCaption: B,
					appendedText: Q
				}).then(s).catch(o("WAFilteredCatch").filteredCatch(r("WAWebForwardErrorChatAction"), function(e) {
					return k(e.reasons);
				}));
				else if (n.length > 0) {
					var u = o("WAWebForwardMessagesToChat").forwardMessagesToChats({
						msgs: m,
						chats: n,
						includeCaption: B
					}).then(s).catch(o("WAFilteredCatch").filteredCatch(r("WAWebForwardErrorChatAction"), function(e) {
						return k(e.reasons);
					})).finally(function() {
						return E(Q, n);
					});
					a != null && o("WAWebChatGetters").getIsNewsletter(a) && (yield u);
				}
				var d = e.find(function(e) {
					return e.id.isStatus();
				});
				if (d != null && D({
					appendedText: Q,
					includeCaption: B,
					msgsAndAssociatedMsgs: m,
					retryCountRef: oe,
					statusChat: d
				}), l(), c == null || c(m), a != null) return !i && f != null && o("WAWebBotUtils").isMetaAiBot(f.id) && o("WAWebBotGating").isAiChatThreadsEnabled() && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), o("WAWebCmd").Cmd.openChatFromUnread({
					chat: a,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Forward
				}).then(function(e) {
					e && o("WAWebContactGetters").getIsMe(a.contact) && o("WAWebMessageYourselfMetricUtils").UiMessageYourselfSearchAction.logMessageYourselfOpenedEvent(a, t);
				});
			}), de.apply(this, arguments);
		}
		var me = h(function() {
			return m.some(function(e) {
				var t;
				return (t = e.interactiveAnnotations) == null ? void 0 : t.some(function(e) {
					var t;
					return ((t = e.embeddedContent) == null ? void 0 : t.embeddedMusic) != null;
				});
			});
		}, [m]), pe = !m.some(function(e) {
			return !N(e);
		}), _e = { hasMusicAnnotations: me }, fe = d != null && o("WAWebABProps").getABPropConfigValue("wa_web_forward_to_small_groups") ? _.jsx(r("WDSMenuBarItem.react"), {
			testid: "btn-new-group-forward",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			onClick: d,
			title: s._(
				/*BTDS*/
				""
			),
			icon: r("WDSIconIcGroupAdd.react")
		}) : null, ge = m.length === 1 && A(p) && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported() && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastContextualEntrypointsEnabled() ? _.jsx(r("WAWebForwardCreateBroadcastButton.react"), {
			msg: p,
			onClose: l,
			variant: "menu-bar-item"
		}) : null, he = o("WAWebBotForwardCapability").getForwardToMetaAiEligibility(m), ye = o("WAWebBotForwardCapability").canForwardSelectionToHatch(m), Ce = o("WAWebBotBaseGating").isBotEnabled(), be = {
			onBack: i,
			onEditStatusAudience: u,
			hasFrequentlyForwarded: v,
			hasForwarded: R,
			headerRightActionElement: _.jsxs(_.Fragment, { children: [ge, fe] }),
			onConfirm: ue,
			maxItems: M,
			isDisabled: function(t) {
				return o("WAWebBotUtils").isMetaAiBot(t.id) ? he.state === "disabled" : o("WAWebBotUtils").isHatchBot(t.id) ? !ye : m.some(function(e) {
					return !o("WAWebMsgActionCapability").canForwardMsgToChat(e, t);
				});
			},
			customItemSecondaryText: function(t, n) {
				return T(t, n, he);
			},
			excludeBroadcast: !0,
			title: L.title(m.length, p),
			includeNewsletters: f != null && o("WAWebNewsletterGatingUtils").isForwardToNewsletterEnabled(),
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			customHeader: P,
			ephemeralIcon: "chat-list",
			hasDirtyAppendMsgComposeBox: Q != null && Q !== "",
			includeMetaAi: Ce,
			includeHatch: Ce && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled(),
			includeMyStatus: pe && o("WAWebABProps").getABPropConfigValue("status_allow_forwarding_to_status_on_web"),
			isNonMediaForward: w,
			chatFilter: function(t) {
				return o("WAWebMsgActionCapability").allowedChatOrContactForForwarding(t, m, _e);
			},
			contactFilter: function(t) {
				return o("WAWebMsgActionCapability").allowedChatOrContactForForwarding(t, m, _e);
			},
			onSelectionChanged: ie,
			previewComponent: _.jsx(S, {
				includeCaption: B,
				handleAppendMessage: ae,
				handleRemoveCaption: j,
				isOnlyMetaAiSelected: te,
				msgs: m,
				mediaMsgsWithCaption: F,
				onEditClick: se,
				showEditIcon: le
			})
		};
		return _.jsxs(_.Fragment, { children: [_.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MessageForwardModal",
			escapable: !0,
			requestDismiss: function(t, n) {
				var e = i != null ? i : l;
				t === o("WAWebUim").DismissReason.UIM_INTERACTION && n instanceof KeyboardEvent && n.keyCode === r("Keys").ESC && (e == null || e());
			},
			children: _.jsx(o("WAWebSelectModal.react").SelectModal, babelHelpers.extends({}, be, {
				tsNavigationData: f != null && o("WAWebChatGetters").getIsNewsletter(f) ? {
					surface: "channel-forward",
					extras: { channelWid: f.id }
				} : { surface: "forward-selection-modal" },
				getAnnouncementSummary: t
			}))
		}), G && _.jsx(r("WAWebForwardMediaWithCaptionPopupNux.react"), { onOk: function() {
			V(), z(!1);
		} })] });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.handleAppendMessage, n = e.handleRemoveCaption, a = e.includeCaption, i = e.isOnlyMetaAiSelected, l = e.mediaMsgsWithCaption, s = e.msgs, u = e.onEditClick, c = e.showEditIcon, d = s.length === 1 && (o("WAWebMsgGetters").getIsMedia(s[0]) ? r("isStringNullOrEmpty")(s[0].caption) : o("WAWebFileUtils").isDocument(s[0]) && o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() && (r("isStringNullOrEmpty")(s[0].caption) || s[0].caption === s[0].filename)), m = o("WAWebBotForwardCapability").canForwardMsgToMetaAi(s), p = i ? R() : void 0;
		if (s.length === 0) return null;
		var f = s[0], g = o("WAWebFrontendMsgGetters").getMaybeChat(f);
		return g != null && o("WAWebChatGetters").getIsNewsletter(g) ? null : l.length > 0 ? _.jsx("div", {
			className: "x11uqc5h xv32h1t xh8yej3 x1od0jb8 x9f619 xpx74rz",
			children: _.jsx(r("WAWebForwardWithCaptionPreview.react"), {
				msgs: l,
				displayCaptionText: a,
				onRemoveCaptionSelect: n,
				onAppendMessage: t,
				allMsgs: s,
				onEditClick: u,
				showEditIcon: c
			})
		}) : d ? _.jsx("div", {
			className: "x11uqc5h xv32h1t xh8yej3 x1od0jb8 x9f619 xpx74rz",
			children: _.jsx(r("WAWebForwardWithCaptionPreview.react"), {
				msgs: s,
				displayCaptionText: a,
				onRemoveCaptionSelect: n,
				onAppendMessage: t,
				captionPlaceholderText: p,
				onEditClick: u,
				showEditIcon: c
			})
		}) : m ? _.jsx("div", {
			className: "x11uqc5h xjp8j0k xh8yej3 x1od0jb8 x9f619 xpx74rz",
			children: _.jsx(r("WAWebForwardWithCaptionPreview.react"), {
				msgs: s,
				displayCaptionText: a,
				onRemoveCaptionSelect: n,
				onAppendMessage: t,
				captionPlaceholderText: p
			})
		}) : null;
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R() {
		return s._(
			/*BTDS*/
			""
		);
	}
	var L = { title: function(t, n) {
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
	function E(t, r) {
		if (!(t == null || t === "")) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendAppendedText inside WAWebForwardMessageModal"])));
			var a = r.filter(function(e) {
				return e.canSend;
			}).map(function(e) {
				return o("WAWebChatGetters").getIsNewsletter(e) ? o("WAWebNewsletterSendMsgAction").sendNewsletterTextMsg(e, t, {}) : o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t);
			});
			return (m || (m = n("Promise"))).all(a).catch(function(e) {});
		}
	}
	function k(e) {
		var t = e.map(function(e) {
			var t = e.chat, n = e.reason;
			return _.jsxs("p", { children: [
				t.formattedTitle,
				" : ",
				n
			] }, t.id.toString());
		});
		o("WAWebModalManager").ModalManager.open(_.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "forward-message"
			},
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			children: t
		}), void 0);
	}
	function I(e) {
		return e instanceof o("WAWebChatModel").Chat && o("WAWebChatGetters").getIsNewsletter(e);
	}
	function T(e, t, n) {
		if (t) {
			if (o("WAWebBotUtils").isMetaAiBot(e.id) && n.state === "disabled") return n.reason;
			if (I(e)) return s._(
				/*BTDS*/
				""
			);
		}
	}
	function D(e) {
		return x.apply(this, arguments);
	}
	function x() {
		return x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.appendedText, r = e.includeCaption, a = e.msgsAndAssociatedMsgs, i = e.retryCountRef, l = e.statusChat, s = a.length, u = i.current;
			i.current += 1, (m || (m = n("Promise"))).all([].concat(a.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = yield o("WAWebPrepareMediaForStatusForwarding").prepareMediaForStatusForwarding(e), a = r ? e.caption : null;
					return a == null && t != null && s === 1 && (a = t), M({
						statusChat: l,
						msgType: e.type,
						body: e.body,
						caption: a,
						mediaData: n,
						retryCount: u,
						statusContainsMusic: o("WAWebMsgGetters").isStatusWithMusic(e),
						forwardedNewsletterMessageInfo: o("WAWebGetNewsletterContextForForwardedMsg").getNewsletterContextForForwardedMsg(e)
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()), [s > 1 ? M({
				statusChat: l,
				msgType: o("WAWebMsgType").MSG_TYPE.CHAT,
				body: t,
				retryCount: u,
				statusContainsMusic: !1
			}) : null]));
		}), x.apply(this, arguments);
	}
	function $(e, t, n, r, o, a) {
		return P.apply(this, arguments);
	}
	function P() {
		return P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a, i, l) {
			var s, d, m;
			try {
				var p;
				(p = t.mediaData) != null && p.mediaBlob || (yield t.downloadMedia({
					downloadEvenIfExpensive: !0,
					rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
					isUserInitiated: !0
				}));
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
			o("WAWebModalManager").ModalManager.openMedia(_.jsx(r("WAWebStatusPostingMediaView.react"), {
				chat: e,
				initCaption: h != null ? { text: h } : null,
				mediaCollection: y,
				onComplete: l,
				onRender: v,
				statusPostOrigin: o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES
			}), { transition: "status-modal" });
		}), P.apply(this, arguments);
	}
	function N(e) {
		return o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) && (!o("WAWebMsgGetters").getIsNewsletterStatus(e) || !o("WAWebNewsletterGatingUtils").isNewsletterStatusForwardEnabled()) ? !1 : e.type === o("WAWebMsgType").MSG_TYPE.CHAT || e.type === o("WAWebMsgType").MSG_TYPE.PTT || o("WAWebMsgGetters").getIsMedia(e);
	}
	function M(e) {
		return w.apply(this, arguments);
	}
	function w() {
		return w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, r, a = e.body, i = e.caption, l = e.forwardedNewsletterMessageInfo, s = e.mediaData, u = e.msgType, c = e.retryCount, p = e.statusChat, _ = e.statusContainsMusic;
			if (!(!a && !s)) {
				var f = {
					statusPostOrigin: o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES,
					mediaType: u === o("WAWebMsgType").MSG_TYPE.CHAT ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT : o("WAWebLogStatusPost").getStatusMediaType(u),
					hasCaption: !!i,
					hasFilters: !1,
					retryCount: c,
					statusContainsMusic: _
				}, g;
				try {
					s != null ? g = yield new (o("WAWebMediaPrep")).MediaPrep(u, (m || (m = n("Promise"))).resolve(s)).sendToChat({
						chat: p,
						options: {
							caption: i,
							addEvenWhilePreparing: !0,
							forwardedNewsletterMessageInfo: l
						}
					}) : u === o("WAWebMsgType").MSG_TYPE.CHAT && a != null && (g = yield o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
						text: a,
						forwardedNewsletterMessageInfo: l
					}));
				} catch (e) {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to forward message as status ", ""])), e).sendLogs("status-forward-failed", { sampling: .01 });
				}
				o("WAWebLogStatusPost").logStatusPost(babelHelpers.extends({
					statusPostResult: o("WAWebLogStatusPost").getStatusPostResult((t = g) == null ? void 0 : t.messageSendResult),
					msg: (r = g) == null ? void 0 : r.msg
				}, f));
			}
		}), w.apply(this, arguments);
	}
	function A(e) {
		return e.type === o("WAWebMsgType").MSG_TYPE.CHAT || e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT || e.type === o("WAWebMsgType").MSG_TYPE.IMAGE || e.type === o("WAWebMsgType").MSG_TYPE.VIDEO;
	}
	l.default = v;
}), 226);
