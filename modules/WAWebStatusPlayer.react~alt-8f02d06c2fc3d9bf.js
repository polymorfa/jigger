__d("WAWebStatusPlayer.react", [
	"fbt",
	"$InternalEnum",
	"WAFilteredCatch",
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebBackendErrors",
	"WAWebBizCoexStatusGatingUtils",
	"WAWebBlockContactAction",
	"WAWebBlockContants",
	"WAWebChatEntryPoint",
	"WAWebChatThreadLogging",
	"WAWebChevronIcon.react",
	"WAWebClock",
	"WAWebCmd",
	"WAWebCoexSystemMessageModalContent.react",
	"WAWebComplianceReportPopupLoadable",
	"WAWebConnModel",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebCrossposting.flow",
	"WAWebCrosspostingConfig",
	"WAWebCrosspostingIcons.react",
	"WAWebCrosspostingJob",
	"WAWebCrosspostingQplUtils",
	"WAWebDetailImage.react",
	"WAWebEligibilityCheckHelper",
	"WAWebErrorBoundary.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFileSaver",
	"WAWebFindChatAction",
	"WAWebFocusTracer",
	"WAWebFormatNotificationTemplateModalText",
	"WAWebForwardMessageFlowLoadable",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupMetadataCollection",
	"WAWebGroupStatusAuthorImage.react",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebLid1X1MigrationGating",
	"WAWebLidMigrationUtils",
	"WAWebLogStatusMute",
	"WAWebLogStatusReply",
	"WAWebMediaData",
	"WAWebMediaDataUtils",
	"WAWebMediaOpaqueData",
	"WAWebMediaTypes",
	"WAWebMessageAIContentLabel.react",
	"WAWebMessageAssociation.flow",
	"WAWebMessageAssociationUIUtils",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgInfoCollection",
	"WAWebMsgLinks",
	"WAWebMsgType",
	"WAWebMusicGatingUtils",
	"WAWebNewsletterAddAiContentLabelFlow",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterGetStatusUpdatesJob",
	"WAWebNewsletterLoggingUtils",
	"WAWebNewsletterMetadataCollection",
	"WAWebNewsletterRevokeStatusAction",
	"WAWebNewsletterStatusActionsBar.react",
	"WAWebNewsletterStatusProcessingUtils",
	"WAWebNoop",
	"WAWebNux",
	"WAWebObjectFit.react",
	"WAWebPaidPartnershipLabelModal.react",
	"WAWebPrivateMessageComplianceUtils",
	"WAWebProtobufsStatusAttributions.pb",
	"WAWebReactionsUtils",
	"WAWebReportNewsletterStatusPopup.react",
	"WAWebReportStatusPopup.react",
	"WAWebRevokeStatusAction",
	"WAWebSendSpamChatAction",
	"WAWebSendStatusMuteAction",
	"WAWebSettingsModel",
	"WAWebSpamConstants",
	"WAWebSpinner.react",
	"WAWebStatusActionButtonStyles",
	"WAWebStatusAudio.react",
	"WAWebStatusCaptionText.react",
	"WAWebStatusCloseFriendsDialog.react",
	"WAWebStatusComposeBox.react",
	"WAWebStatusDeletePopup.react",
	"WAWebStatusExternalShareUtils",
	"WAWebStatusGatingUtils",
	"WAWebStatusHostedDisclosure.react",
	"WAWebStatusImg.react",
	"WAWebStatusItemViewWamEvent",
	"WAWebStatusLikeEmojis",
	"WAWebStatusLoggingUtils",
	"WAWebStatusMentionsPopup.react",
	"WAWebStatusMuteContactPopup.react",
	"WAWebStatusPlayerAddStatusEntry.react",
	"WAWebStatusPlayerControlsMenu.react",
	"WAWebStatusPlayerName.react",
	"WAWebStatusProgressBar.react",
	"WAWebStatusReactionsCount.react",
	"WAWebStatusReshareAction",
	"WAWebStatusSeenCount.react",
	"WAWebStatusSetupController",
	"WAWebStatusSubtitle.react",
	"WAWebStatusText.react",
	"WAWebStatusUnknown.react",
	"WAWebStatusVideo.react",
	"WAWebStatusViewerListModal.react",
	"WAWebStopEvent",
	"WAWebTabOrder",
	"WAWebTextStatusImageRenderer",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WAWebVerificationDrawerLoadable",
	"WAWebWamEnumMediaType",
	"WAWebWamEnumMuteAction",
	"WAWebWamEnumMuteOrigin",
	"WAWebWamEnumPairedMediaType",
	"WAWebWamEnumStatusCategory",
	"WAWebWamEnumStatusContentType",
	"WAWebWamEnumStatusCreationEntryPoint",
	"WAWebWamEnumStatusItemViewResult",
	"WAWebWamEnumStatusReportInteraction",
	"WAWebWamEnumStatusRowEntryMethod",
	"WAWebWamEnumStatusRowSection",
	"WAWebWamEnumStatusViewEntryMethod",
	"WAWebWamEnumStatusViewExitMethod",
	"WAWebWamEnumUrlStatusClicked",
	"WAWebWamEnumUrlStatusType",
	"WAWebWamStatusReportingEventsLogger",
	"WAWebWidFactory",
	"WDSButton.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"cr:23046",
	"cr:3265",
	"getErrorSafe",
	"gkx",
	"react",
	"stylex",
	"useLazyRef",
	"useVideoPlayerXAPIOutsideVideoPlayerSurface",
	"useWAWebCanDownloadStatus",
	"useWAWebCanPlaybackAudio",
	"useWAWebCanReshareStatus",
	"useWAWebDebouncedCallback",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebNewsletterReactions",
	"useWAWebNux",
	"useWAWebOnUnmount",
	"useWAWebReactions",
	"useWAWebStableCallback",
	"useWAWebStatusContainsFutureproofEmbeddedContentBanner",
	"useWAWebStatusVisibilityLogger",
	"useWAWebTimeout",
	"useWAWebUnmountSignal",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u = ["ref"], c = ["ref"], d, m, p, _, f, g, h, y = h || (h = o("react")), C = h, b = C.useCallback, v = C.useEffect, S = C.useImperativeHandle, R = C.useLayoutEffect, L = C.useMemo, E = C.useRef, k = C.useState;
	function I(e) {
		o("WAWebCrosspostingQplUtils").crosspostingQplAnnotate({
			string: { entrypoint: "contextual_share_icon" },
			bool: {
				is_destination_fb: e === o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue.FACEBOOK,
				is_destination_ig: e === o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue.INSTAGRAM,
				is_auto_crosspost_setting_fb: r("WAWebSettingsModel").shareToFB,
				is_auto_crosspost_setting_ig: r("WAWebSettingsModel").shareToIG,
				is_crosspost_experience_v2_at_start: !1
			}
		});
	}
	var T = {
		msgInfoNameWrapper: {
			display: "x78zum5",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textAlign: "x1yc453h",
			$$css: !0
		},
		msgInfoNamePSA: {
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		timestamp: {
			marginBottom: "x12nagc",
			fontSize: "x1nxh6w3",
			color: "xziivwi",
			$$css: !0
		},
		crosspostingIcons: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			columnGap: "x17zd0t2",
			marginInlineStart: "xdzw4kq",
			marginBottom: "x12nagc",
			color: "x17t9dm2",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		closeFriendsPillButton: {
			height: "xxk0z11",
			width: "x14qfxbe",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			marginTop: "x1de0gy",
			marginInlineEnd: "x14mko6t",
			backgroundColor: "x1p8t8ri",
			paddingInlineStart: "x4tra6z",
			paddingInlineEnd: "xde1mab",
			$$css: !0
		},
		interactions: {
			position: "x10l6tqk",
			insetInlineEnd: "xtijo5x",
			bottom: "xfqi8uc",
			insetInlineStart: "x1o0tod",
			zIndex: "x12xzxwr",
			width: "x19sv2k2",
			maxWidth: "x1kozois",
			marginInlineEnd: "x11t971q",
			marginInlineStart: "xvc5jky",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		}
	}, D = 6e4;
	function x(e, t) {
		o("WAWebContactGetters").getIsMe(e) || o("WAWebFindChatAction").findOrCreateLatestChat(e.id, "statusPlayer").then(function(e) {
			var n = e.chat;
			o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
				activityType: t,
				ts: o("WATimeUtils").unixTime(),
				chatId: n.id
			}]);
		}).catch(function(e) {
			o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["status:player thread logging findOrCreateLatestChat failed"]))).catching(r("getErrorSafe")(e)).sendLogs("status-player-thread-logging-fail");
		});
	}
	function $(e) {
		var t, n = [
			(t = r("WAWebMediaData")).TYPE.VIDEO,
			t.TYPE.IMAGE,
			t.TYPE.AUDIO,
			t.TYPE.PTT
		];
		return e != null && n.includes(e.type);
	}
	function P(e) {
		var t = [
			r("WAWebMediaData").TYPE.VIDEO,
			r("WAWebMediaData").TYPE.AUDIO,
			r("WAWebMediaData").TYPE.PTT
		];
		return e != null && t.includes(e.type);
	}
	function N(e) {
		if (e == null) return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.TEXT;
		switch (e) {
			case o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO: return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.PHOTO;
			case o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO: return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.VIDEO;
			case o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF: return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.GIF;
			case o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO:
			case o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT: return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.VOICE;
			case o("WAWebWamEnumMediaType").MEDIA_TYPE.URL: return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.URL;
			default: return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.TEXT;
		}
	}
	function M(e) {
		var t = [r("WAWebMediaData").TYPE.AUDIO, r("WAWebMediaData").TYPE.PTT];
		return e != null && t.includes(e.type);
	}
	function w(e, t) {
		if (e) switch (e.type) {
			case r("WAWebMediaData").TYPE.VIDEO: return e.isGif ? o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF : o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
			case r("WAWebMediaData").TYPE.IMAGE: return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
			case r("WAWebMediaData").TYPE.AUDIO: return o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO;
			case r("WAWebMediaData").TYPE.PTT: return o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT;
			default: return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
		}
		else if (o("WAWebMsgLinks").getLinksFromMsg(t).length) return o("WAWebWamEnumMediaType").MEDIA_TYPE.URL;
		return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
	}
	function A(e, t) {
		var n = e.id.toString(), r = Math.floor(window.performance.now()), o = t.get(n);
		return o == null ? !1 : r - o <= D;
	}
	function F(e) {
		switch (e) {
			case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.FOWARDS_TAP: return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD.FORWARD_TAP;
			case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.BACKWARDS_TAP: return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD.BACK_TAP;
			case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.FOWARDS_SWIPE: return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD.FORWARD_SWIPE;
			case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.BACKWARDS_SWIPE: return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD.BACK_SWIPE;
			case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.DIRECT_ROW_TAP: return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD.DIRECT_POG_TAP;
			case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.PREVIOUS_ROW_TIMEOUT: return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD.AUTO_NAVIGATE_TIMER_END;
			default: return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD.DIRECT_POG_TAP;
		}
	}
	function O(e) {
		var t = e.current;
		return e.current++, t;
	}
	function B(e, t) {
		if (e) switch (e.type) {
			case r("WAWebMediaData").TYPE.IMAGE:
			case r("WAWebMediaData").TYPE.VIDEO: {
				var n = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(e);
				return n != null ? { backgroundImage: "url(" + n + ")" } : null;
			}
			case r("WAWebMediaData").TYPE.PTT:
			case r("WAWebMediaData").TYPE.AUDIO: return { backgroundColor: o("WAWebMsgGetters").getStatusCanvasColor(t) };
		}
		else if (t.type === o("WAWebMsgType").MSG_TYPE.CHAT) {
			var a = o("WAWebMsgGetters").getStatusCanvasColor(t);
			return { backgroundColor: a };
		}
	}
	function W(e) {
		var t = e.cvpApi, n = e.markRead, a = e.mediaData, i = e.msg, l = e.onMouseDown, s = e.onMouseUp, u = e.pause, c = e.play, d = e.playbackController, p = e.status, _ = e.statusItemViewEventRef;
		if (a) switch (a.type) {
			case r("WAWebMediaData").TYPE.IMAGE: return y.jsx(r("WAWebStatusImg.react"), {
				msg: i,
				status: p,
				mediaData: a,
				markRead: n,
				play: c,
				pause: u,
				onMouseDown: l,
				onMouseUp: s
			});
			case r("WAWebMediaData").TYPE.VIDEO: return y.jsx(r("WAWebStatusVideo.react"), {
				cvpApi: t,
				msg: i,
				status: p,
				mediaData: a,
				markRead: n,
				play: c,
				pause: u,
				playbackController: d,
				onMouseDown: l,
				onMouseUp: s
			});
			case r("WAWebMediaData").TYPE.PTT:
			case r("WAWebMediaData").TYPE.AUDIO: return y.jsx(r("WAWebStatusAudio.react"), {
				msg: i,
				mediaData: a,
				status: p,
				markRead: n,
				play: c,
				pause: u,
				playbackController: d,
				onMouseDown: l,
				onMouseUp: s
			});
			default: return o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Unexpected Status media type: ", ""])), a.type), y.jsx(r("WAWebStatusUnknown.react"), {
				onMouseDown: l,
				onMouseUp: s
			});
		}
		else return i.type === o("WAWebMsgType").MSG_TYPE.CHAT ? y.jsx(r("WAWebStatusText.react"), {
			msg: i,
			onMouseDown: l,
			onMouseUp: s,
			statusItemViewEventRef: _,
			dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_MIDDLE_SECTION
		}) : y.jsx(r("WAWebStatusUnknown.react"), {
			onMouseDown: l,
			onMouseUp: s
		});
	}
	W.displayName = W.name + " [from " + i.id + "]";
	var q = n("$InternalEnum").Mirrored([
		"PAUSE_BUTTON",
		"MOUSEDOWN",
		"WINDOW_BLUR",
		"OPEN_SEE_VIEWERS_MODAL",
		"LINK_MODAL_OPEN",
		"OVERFLOW_MENU_BUTTON",
		"STATUS_REPORT_MODAL_OPEN",
		"SPACEDOWN",
		"ADD_STATUS_MENU"
	]);
	function U(e) {
		return e === q.PAUSE_BUTTON || e === q.MOUSEDOWN || e === q.SPACEDOWN ? "user_initiated" : "product_initiated";
	}
	function V(t) {
		var a, i, l, u, c, d, m, h = t.ref, C = babelHelpers.objectWithoutPropertiesLoose(t, e), A = C.canPlaybackAudio, F = C.closeStatusViewer, O = C.containsMusic, V = C.isGroupStatus, z = C.markRead, X = C.mediaData, Y = C.msg, J = C.onNext, Z = C.rowIdx, ee = C.rowSection, te = C.sessionId, ne = C.status, re = C.statusItemLastImpressionTimestampMap, oe = C.statusItemViewEventRef, ae = C.statusItemViewMap, ie = C.statusViewExitMethodRef, le = C.viewerSessionId, se = r("useWAWebUnmountSignal")(), ue = o("useWAWebMsgValues").useMsgValues(Y.id, [o("WAWebMsgGetters").getIsSentByMe]), ce = ue[0], de = o("WAWebMsgGetters").getIsNewsletterStatus(Y) && ((a = (i = r("WAWebNewsletterMetadataCollection").get(Y.id.remote)) == null ? void 0 : i.iAmAdminOrOwner()) != null ? a : !1), me = r("useWAWebEventTargetValue")(Y, "change:viewCount", function() {
			return o("WAWebMsgGetters").getViewCount(Y);
		}), pe = r("useWAWebEventTargetValue")(Y, "change:crosspostingInfo", function() {
			return Y.crosspostingInfo;
		}), _e = ee;
		V && ce && (_e = o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS);
		var fe = (l = n("cr:23046") == null ? void 0 : n("cr:23046").isWindowsHybridEnabled()) != null ? l : !1, ge = r("useLazyRef")(function() {
			return o("WAWebStatusSetupController").setupStatusController(X, Y);
		}), he = k(function() {
			return o("WAWebStatusGatingUtils").isStatusCometVideoPlayerEnabled() ? o("WAWebStatusSetupController").setupCVPStatusController(X, Y) : null;
		}), ye = he[0], Ce = ye != null, be = o("useVideoPlayerXAPIOutsideVideoPlayerSurface").useVideoPlayerXAPIOutsideVideoPlayerSurface(), ve = be[0], Se = be[1].controller, Re = be[2];
		v(function() {
			Ce && Se && ye && ye.setController(Se);
		}, [
			Se,
			ye,
			Ce
		]);
		var Le = function() {
			return ye != null ? ye : ge.current;
		}, Ee = o("useWAWebStatusContainsFutureproofEmbeddedContentBanner").useWAWebStatusContainsFutureproofEmbeddedContentBanner(Y), ke = L(function() {
			return Ee != null;
		}, [Ee]), Ie = E(!0), Te = E(null), De = E(null), xe = E(null), $e = E(null), Pe = E(null), Ne = E(null), Me = E(null), we = k(!1), Ae = we[0], Fe = we[1], Oe = k(!1), Be = Oe[0], We = Oe[1], qe = k(!1), Ue = qe[0], Ve = qe[1], He = k(!1), Ge = He[0], ze = He[1], je = k(!1), Ke = je[0], Qe = je[1], Xe = k(!1), Ye = Xe[0], Je = Xe[1], Ze = k(null), et = Ze[0], tt = Ze[1], nt = k(!1), rt = nt[0], ot = nt[1], at = r("useWAWebCanDownloadStatus")(Y), it = b(function() {
			o("WAWebFileSaver").FileSaver.initDownload(Y.unsafe());
		}, [Y]), lt = k(!1), st = lt[0], ut = lt[1], ct = k(!1), dt = ct[0], mt = ct[1], pt = k({
			url: "",
			displayText: null
		}), _t = pt[0], ft = pt[1], gt = E(null), ht = E(r("WAWebNoop")), yt = b(function() {
			_t.url && (o("WAWebExternalLink.react").openExternalLink(_t.url), ht.current());
		}, [_t.url]), Ct = y.jsxs("button", {
			className: "x78zum5 xdt5ytf x6s0dn4 x1ypdohk x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl",
			onClick: yt,
			type: "button",
			children: [y.jsx("div", {
				className: "x1e4dklr xisnujt x12w63v0 x1nzty39 x1yrsyyn x10b6aqq xpip370 xyi3aci xwf5gio x1p453bz x1suzm8a x1agd393 x78zum5 x6s0dn4 xl56j7k",
				children: y.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentInverse",
					children: _t.displayText
				})
			}), y.jsx("div", { className: "xnalus7 xqtp20y x8u93l6 x1t7ytsu xv5lvn5 xburx9h x18b5jzi x1o3jo1z x1kr8tdy x13fuv20 x2ubtbe" })]
		}), bt = r("useWDSMenu")({
			targetRef: gt,
			menu: Ct,
			dismissable: !0,
			positionOnAnyClick: !0,
			position: "above",
			align: "middle",
			enableUIM: !1
		}), vt = bt.closeMenu, St = bt.menuPortal, Rt = bt.openMenu;
		v(function() {
			ht.current = vt;
		}, [vt]), v(function() {
			de && n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebNewsletterGetStatusUpdatesJob").fetchNewsletterStatusUpdates(o("WAJids").toNewsletterJid(Y.id.remote.toString()));
				e != null && (yield o("WAWebNewsletterStatusProcessingUtils").applyAndPersistInteractions(e.from, e.viewsByServerId, e.reactionsByServerId, e.serverTimestamp));
			})().catch(function(e) {
				o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status][updates] refresh interactions failed"])));
			});
		}, [de, Y.id]);
		var Lt = o("useWAWebTimeout").useTimeout(b(function() {
			ht.current();
		}, []), 3e3), Et = Lt[0], kt = b(function(e) {
			var t = o("WAWebStatusExternalShareUtils").getExternalShareInfo(Y);
			t != null && (ft({
				url: t.url,
				displayText: t.displayText
			}), Rt(e), Et());
		}, [
			Y,
			Et,
			Rt
		]), It = ne.contact, Tt = o("WAWebContactCollection").ContactCollection.get(Y.author), Dt = It;
		V && Tt != null && (Dt = Tt);
		var xt = function() {
			o("WAWebMsgInfoCollection").MsgInfoCollection.find(Y.id).then(function(e) {
				se.aborted || tt(e.read);
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").EphemeralDrop, r("WAWebNoop")));
		}, $t = function() {
			var e = Ne.current, t = $e.current;
			if (!(!e || !t)) {
				var n = e.getBoundingClientRect(), o = t.getBoundingClientRect();
				!r("WAWebL10N").isRTL() && n.right > o.left - 5 || r("WAWebL10N").isRTL() && n.left < o.right + 5 ? Fe(!0) : Fe(!1);
			}
		}, Pt = r("useWAWebDebouncedCallback")($t), Nt = function() {
			var e = Y.id.toString(), t = Math.floor(window.performance.now()), n = re.get(e);
			return n == null || t - n > D ? (re.set(e, t), !0) : !1;
		}, Mt = function() {
			oe.current.statusItemLoadTime || (oe.current.markStatusItemLoadTime(), oe.current.statusItemViewResult = o("WAWebWamEnumStatusItemViewResult").STATUS_ITEM_VIEW_RESULT.OK);
		}, wt = r("useWAWebStableCallback")(function(e) {
			if (!($(X) && X.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED)) {
				var t = Te.current;
				t != null && (oe.current.statusItemViewTime += Math.round(window.performance.now() - t), Te.current = void 0), Le().pause(U(e)), De.current = e;
			}
		}), At = r("useWAWebStableCallback")(function(e) {
			var t;
			if (e === void 0 && (e = "product_initiated"), $(X)) {
				if (X.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED) return;
				Mt();
			}
			(t = xe.current) != null && t.isPaused() || Ie.current && (Te.current = window.performance.now(), Le().resume(e));
		}), Ft = function(t) {
			var e, n = t != null ? t : {}, o = n.focusWrapper, a = o === void 0 ? !0 : o, i = n.replied;
			if (a === !0) {
				var l = Me.current;
				l && i !== !0 && r("WAWebFocusTracer").focus(l);
			}
			(e = xe.current) == null || e.blur(), ot(!1);
		};
		S(h, function() {
			return {
				handlePlayPauseToggle: function() {
					Ue ? At("user_initiated") : wt(q.SPACEDOWN);
				},
				getWrapperElement: function() {
					return Me.current;
				},
				recordStatusViewExitMethod: function(t) {
					ie.current = t;
				}
			};
		});
		var Ot = function() {
			o("WAWebModalManager").ModalManager.close(), At(), We(!1), o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(null, "media");
		}, Bt = function() {
			et && (o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(!1, "media"), window.setTimeout(function() {
				o("WAWebModalManager").ModalManager.open(y.jsx(r("WAWebStatusViewerListModal.react"), {
					onClose: Ot,
					viewers: et,
					msgId: Y.id
				}), { focusType: { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE } }), wt(q.OPEN_SEE_VIEWERS_MODAL), We(!0);
			}, 200));
		}, Wt = function() {
			Je(!Ye);
		}, qt = function() {
			Ie.current = !0, !Be && De.current === q.WINDOW_BLUR && At();
		}, Ut = function() {
			Ie.current = !1, Ue || wt(q.WINDOW_BLUR);
		}, Vt = function(t) {
			o("WAWebFindChatAction").findOrCreateLatestChat(t, "statusPlayer").then(function(e) {
				var t = e.chat;
				return o("WAWebCmd").Cmd.openChatBottom({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Status
				});
			}).then(function() {
				F(!0);
			});
		}, Ht = function() {
			Le().mute("user_initiated"), ze(!0);
		}, Gt = function() {
			A && (Le().unmute("user_initiated"), ze(!1));
		}, zt = r("useWAWebStableCallback")(function() {
			wt(q.MOUSEDOWN);
		}), jt = r("useWAWebStableCallback")(function() {
			At("user_initiated");
		}), Kt = function() {
			wt(q.PAUSE_BUTTON);
		}, Qt = function() {
			wt(q.OVERFLOW_MENU_BUTTON);
		}, Xt = function() {
			De.current === q.OVERFLOW_MENU_BUTTON && At();
		}, Yt = function() {
			o("WAWebWamStatusReportingEventsLogger").logStatusReportingEvent({ statusReportingInteraction: o("WAWebWamEnumStatusReportInteraction").STATUS_REPORT_INTERACTION.CLICK_CANCEL_REPORT }), Ot();
		}, Jt = function(t) {
			var e;
			o("WAWebWamStatusReportingEventsLogger").logStatusReportingEvent({ statusReportingInteraction: t === !0 ? o("WAWebWamEnumStatusReportInteraction").STATUS_REPORT_INTERACTION.CLICK_SUBMIT_REPORT_BLOCK : o("WAWebWamEnumStatusReportInteraction").STATUS_REPORT_INTERACTION.CLICK_SUBMIT_REPORT }), o("WAWebSendSpamChatAction").sendReport({
				spamFlow: o("WAWebSpamConstants").SpamFlow.StatusPostReport,
				msg: Y,
				msgType: o("WAWebMsgType").MSG_TYPE.STATUS,
				chat: V && (e = o("WAWebFrontendMsgGetters").getMaybeChat(Y)) != null ? e : void 0
			}).then(function(e) {
				t && o("WAWebBlockContactAction").blockContact(babelHelpers.extends({
					contact: Dt,
					blockEntryPoint: o("WAWebBlockContants").BlockEntryPoint.StatusPostReport
				}, Dt.isBusiness && { bizOptOutArgs: { entryPoint: o("WAWebBlockContants").BlockEntryPoint.StatusPostReport } })), o("WAWebModalManager").ModalManager.close(), We(!1), F();
				var n = o("WAWebPrivateMessageComplianceUtils").getPrivateMessageReportComplianceConfig({
					reportId: e,
					msg: Y
				});
				n != null && (o("WAWebModalManager").ModalManager.open(y.jsx(o("WAWebComplianceReportPopupLoadable").ComplianceReportPopupLoadable, {
					learnMoreUrl: n.learnMoreUrl,
					bannerText: n.bannerText,
					actionText: n.actionText,
					showViewReport: n.showViewReport
				})), We(!0));
			}).catch(function(e) {
				o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["status report dropped"]))).tags("wa-ice", "report");
			});
		}, Zt = function() {
			wt(), o("WAWebModalManager").ModalManager.open(y.jsx(r("WAWebPaidPartnershipLabelModal.react"), {
				msg: Y,
				onClose: function() {
					At(), We(!1);
				}
			})), We(!0);
		}, en = function() {
			wt(), o("WAWebNewsletterAddAiContentLabelFlow").runAddAiContentLabelFlow(Y, { onClose: function() {
				At(), We(!1);
			} }), We(!0);
		}, tn = function() {
			if (wt(q.STATUS_REPORT_MODAL_OPEN), o("WAWebMsgGetters").getIsNewsletterStatus(Y)) {
				var e = o("WAWebFrontendMsgGetters").getChat(Y);
				o("WAWebModalManager").ModalManager.open(y.jsx(r("WAWebReportNewsletterStatusPopup.react"), {
					chat: e,
					msg: Y,
					spamFlow: o("WAWebSpamConstants").SpamFlow.StatusPostReport,
					onCancel: Ot,
					onReportComplete: function() {
						We(!1), F();
					}
				})), We(!0);
				return;
			}
			o("WAWebWamStatusReportingEventsLogger").logStatusReportingEvent({ statusReportingInteraction: o("WAWebWamEnumStatusReportInteraction").STATUS_REPORT_INTERACTION.CLICK_REPORT }), o("WAWebModalManager").ModalManager.open(y.jsx(r("WAWebReportStatusPopup.react"), {
				contact: Dt,
				onCancel: Yt,
				onReport: Jt
			})), We(!0);
		}, nn = function() {
			wt(), o("WAWebModalManager").ModalManager.open(y.jsx(r("WAWebStatusDeletePopup.react"), {
				onCancel: Ot,
				onDelete: function() {
					o("WAWebMsgGetters").getIsNewsletterStatus(Y) ? o("WAWebNewsletterRevokeStatusAction").revokeNewsletterStatusAction(ne, Y) : o("WAWebRevokeStatusAction").sendStatusRevokeMsgAction(ne, Y), o("WAWebModalManager").ModalManager.close(), We(!1), F();
				}
			})), We(!0);
		}, rn = function(t, n) {
			var e = o("WAWebCrosspostingConfig").CROSSPOSTING_DESTINATION_CONFIG.find(function(e) {
				return e.gqlValue === t;
			});
			if (e != null) {
				if (n && t === o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue.INSTAGRAM && Y.caption != null && Y.caption !== "") {
					o("WAWebToastManager").ToastManager.open(y.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				var r = n ? e.getSuccessToastMsg() : e.getFailureToastMsg();
				o("WAWebToastManager").ToastManager.open(y.jsx(o("WAWebToast.react").Toast, { msg: r }));
			}
		}, on = function(t) {
			o("WAWebCrosspostingQplUtils").crosspostingQplStart(), o("WAWebCrosspostingQplUtils").crosspostingQplPoint("INIT_CROSSPOST"), I(t);
			var e = function(n) {
				return o("WAWebCrosspostingJob").crosspostStatus(Y.t, Y.id, [o("WAWebEligibilityCheckHelper").translateCrosspostingDestination(t)], n, Y.caption).then(function() {
					o("WAWebCrosspostingQplUtils").crosspostingQplPoint("FINISH_CROSSPOST"), o("WAWebCrosspostingQplUtils").crosspostingQplPoint("SEE_CROSSPOST_SUCCESS"), o("WAWebCrosspostingQplUtils").crosspostingQplEndSuccess(), rn(t, !0);
				}).catch(function(e) {
					o("WAWebCrosspostingQplUtils").crosspostingQplPoint("FINISH_CROSSPOST"), o("WAWebCrosspostingQplUtils").crosspostingQplPoint("SEE_CROSSPOST_ERROR"), o("WAWebCrosspostingQplUtils").crosspostingQplEndFail(), rn(t, !1);
				});
			};
			if (Y.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
				var n, a, i = parseFloat((n = (a = Y.mediaData) == null ? void 0 : a.duration) != null ? n : "0");
				if (i > 60) {
					o("WAWebCrosspostingQplUtils").crosspostingQplPoint("SEE_CROSSPOST_ERROR"), o("WAWebCrosspostingQplUtils").crosspostingQplEndFail(), rn(t, !1);
					return;
				}
			}
			if (o("WAWebTextStatusImageRenderer").isTextStatusMessage(Y)) {
				o("WAWebTextStatusImageRenderer").renderTextStatusToBlob(Y).then(e).catch(function(e) {
					o("WAWebCrosspostingQplUtils").crosspostingQplPoint("SEE_CROSSPOST_ERROR"), o("WAWebCrosspostingQplUtils").crosspostingQplEndFail(), rn(t, !1);
				});
				return;
			}
			var l = Y.mediaData.mediaBlob instanceof r("WAWebMediaOpaqueData") ? Y.mediaData.mediaBlob.getBlob() : Y.mediaData.mediaBlob;
			if (l == null) {
				o("WAWebCrosspostingQplUtils").crosspostingQplPoint("SEE_CROSSPOST_ERROR"), o("WAWebCrosspostingQplUtils").crosspostingQplEndFail(), rn(t, !1);
				return;
			}
			e(l);
		}, an = function(t) {
			o("WAWebLogStatusMute").logStatusMute({
				contact: It,
				isGroupStatus: V,
				muteAction: t ? o("WAWebWamEnumMuteAction").MUTE_ACTION.MUTE : o("WAWebWamEnumMuteAction").MUTE_ACTION.UNMUTE,
				muteOrigin: o("WAWebWamEnumMuteOrigin").MUTE_ORIGIN.STATUS_VIEWER,
				sessionId: te,
				viewerSessionId: le
			}), o("WAWebSendStatusMuteAction").setStatusMute(It.id, t).finally(function() {
				o("WAWebModalManager").ModalManager.close(), We(!1), F();
			});
		}, ln = function(t) {
			t ? (wt(), o("WAWebModalManager").ModalManager.open(y.jsx(r("WAWebStatusMuteContactPopup.react"), {
				contact: It,
				isNewsletter: o("WAWebMsgGetters").getIsNewsletterStatus(Y),
				onCancel: Ot,
				onMute: function() {
					an(t);
				}
			})), We(!0)) : an(t);
		}, sn = function() {
			oe.current.statusItemReplied++, x(It, "statusReplies");
		}, un = function(t) {
			ot(t);
		};
		R(function() {
			if (le != null && _e != null) {
				_e === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS && ce && xt();
				var e = Z, t = C.statusIsUnread, n = w(X, Y);
				n === o("WAWebWamEnumMediaType").MEDIA_TYPE.URL && (oe.current.urlStatusClicked == null && (oe.current.urlStatusClicked = o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED.NO_CLICK), oe.current.urlStatusType = o("WAWebWamEnumUrlStatusType").URL_STATUS_TYPE.NO_PREVIEW), X == null && Mt(), oe.current.statusViewerSessionId = le, o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled() && (oe.current.statusContainsMusic = O, O && (oe.current.musicBlocked = !A)), oe.current.statusItemViewCount += 1, oe.current.statusRowSection = _e, oe.current.statusRowIndex = e, oe.current.mediaType = n, oe.current.statusItemImpressionCount += Nt() ? 1 : 0, oe.current.statusItemUnread == null && (oe.current.statusItemUnread = t), o("WAWebConnModel").Conn.isSMB && (oe.current.isPosterBiz = It.isBusiness, oe.current.isPosterInAddressBook = o("WAWebFrontendContactGetters").getIsMyContact(It));
			}
			Le().addListeners({
				onPlay: function(t, n) {
					var e = Pe.current;
					e == null || e.handleStart(t, n), Ve(!1), De.current = null;
				},
				onPause: function() {
					var e = Pe.current;
					e == null || e.handlePause(), Ve(!0);
				},
				onEnd: function() {
					ie.current = o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD.STATUS_TIMEOUT;
					var e = Pe.current;
					e == null || e.handleEnded().then(function() {
						se.aborted || J(o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD.PREVIOUS_ROW_TIMEOUT);
					}).catch(function(e) {
						o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose(["status:player progress bar handleEnded failed"]))).catching(r("getErrorSafe")(e)).sendLogs("status-player-progress-bar-ended-fail");
					});
				},
				onLoad: function(t, n) {
					ze(A ? n : !0), Qe(A ? t : !1);
				},
				onDetectHasAudio: function(t, n) {
					ze(A ? n : !0), Qe(A ? t : !1);
				}
			}), X ? (At(), (X == null ? void 0 : X.mediaStage) === o("WAWebMediaTypes").MediaDataStage.RESOLVED && z(ne, Y)) : (Y.type, o("WAWebMsgType").MSG_TYPE.CHAT, At(), z(ne, Y));
			var a = Me.current;
			a == null || a.focus(), $t();
		}, []), r("useWAWebOnUnmount")(function() {
			if (ye != null && ye.cleanup(), ge.current.removeListeners(), le != null && _e != null) {
				var e = Te.current;
				e != null && (oe.current.statusItemViewTime += Math.round(window.performance.now() - e), oe.current.statusItemViewTime >= 3e3 && o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled() && (oe.current.statusItem3sViewCount += 1), Te.current = void 0);
				var t = Le(), n = Number.isNaN(t.duration) ? 0 : Math.round(t.duration);
				oe.current.statusItemLength = n, ae.set(Y.id.toString(), oe.current);
			}
			x(It, "statusViews"), o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup") && (Me.current = null, $e.current = null, Ne.current = null, gt.current = null);
		});
		var cn = r("useWAWebStableCallback")(z);
		o("useWAWebListener").useListener(window, "focus", qt), o("useWAWebListener").useListener(window, "blur", Ut), o("useWAWebListener").useListener(window, "resize", Pt), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_long_link_modal", function() {
			Ue || wt(q.LINK_MODAL_OPEN);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_long_link_modal", function(e) {
			e === !0 && De.current === q.LINK_MODAL_OPEN && At();
		});
		var dn = B(X, Y), mn = y.jsx("button", {
			ref: gt,
			className: "xh8yej3 x5yr21d x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl x1ypdohk",
			onClick: kt,
			type: "button",
			children: y.jsx(W, {
				cvpApi: Ce ? be : null,
				mediaData: X,
				msg: Y,
				status: ne,
				markRead: cn,
				play: At,
				pause: wt,
				onMouseDown: zt,
				onMouseUp: jt,
				playbackController: Le(),
				statusItemViewEventRef: oe
			})
		}), pn = y.jsx("div", babelHelpers.extends({ ref: $e }, {
			0: {},
			1: { className: "x1q9ymp4" }
		}[!!fe << 0], { children: y.jsx(r("WAWebStatusProgressBar.react"), {
			ref: Pe,
			current: C.msgIdx,
			total: C.totalMsgs,
			onClick: C.onClickProgressBar
		}) })), _n = function(t) {
			t !== o("WAWebUim").DismissReason.LIFECYCLE && C.closeStatusViewer();
		}, fn = ce && o("WAWebStatusGatingUtils").isStatusPlayerAvatarStatusCreationEntrypointEnabled() || de && o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(), gn = ce || fn || o("WAWebContactGetters").getIsPSA(It), hn = de ? o("WAWebWamEnumStatusCreationEntryPoint").STATUS_CREATION_ENTRY_POINT.CHANNEL_STATUS_VIEWER_TOP_BAR : o("WAWebWamEnumStatusCreationEntryPoint").STATUS_CREATION_ENTRY_POINT.SELF_POG_ON_STATUS_VIEWER, yn = de ? o("WAWebWidFactory").asNewsletterWidOrThrow(Y.id.remote) : void 0, Cn = b(function() {
			wt(q.ADD_STATUS_MENU);
		}, [wt]), bn = b(function() {
			De.current === q.ADD_STATUS_MENU && At();
		}, [At]), vn = o("WAWebMsgGetters").getIsNewsletterStatus(Y) && o("WAWebMsgActionCapability").canForwardMsg(Y) && o("WAWebNewsletterGatingUtils").isNewsletterStatusForwardEnabled(), Sn = r("useWAWebStableCallback")(function() {
			F(), o("WAWebModalManager").ModalManager.open(y.jsx(o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable, {
				msgs: [Y],
				onClose: o("WAWebModalManager").closeModalManager
			}), { transition: "modal-flow" });
		}), Rn = y.jsx(r("WAWebStatusPlayerName.react"), {
			isGroupStatus: V,
			msg: Y,
			statusContact: It
		}), Ln = r("useWAWebNux")(o("WAWebNux").NUX.STATUS_PRIVATE_MENTIONS), En = Ln[0], kn = Ln[1], In = o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled() && !!o("WAWebMsgGetters").getStatusMentioned(Y), Tn = In && En, Dn = function() {
			o("WAWebModalManager").ModalManager.close(), We(!1), At();
		}, xn = function() {
			wt(), o("WAWebModalManager").ModalManager.open(y.jsx(r("WAWebStatusMentionsPopup.react"), {
				onOk: function() {
					kn(), Dn();
				},
				onOverlayClick: Dn,
				isSentByMe: ce
			})), We(!0);
		}, $n = function(t) {
			o("WAWebStopEvent").stopPropagation(t), xn();
		};
		v(function() {
			Tn && xn();
		}, []), Tn && Be && wt();
		var Pn = Y.statusAudienceMetadata, Nn = Pn != null && o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() ? {
			emoji: (u = Pn.listEmoji) != null ? u : "⭐",
			listName: (c = Pn.listName) != null ? c : s._(
				/*BTDS*/
				""
			)
		} : null, Mn = function() {
			Nn != null && (wt(), We(!0), o("WAWebStatusCloseFriendsDialog.react").showCloseFriendsDialog({
				contactId: It == null ? void 0 : It.id,
				contactName: o("WAWebFrontendContactGetters").getFormattedName(It),
				emoji: Nn.emoji,
				isOwnStatus: ce,
				listName: Nn.listName,
				onDismiss: function() {
					At(), We(!1);
				}
			}));
		}, wn = y.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h" },
			4: { className: "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1q0g3np x65f84u x1yc453h xt0e3qv" },
			2: { className: "x10l6tqk x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h x2vplmn xtijo5x x1o0tod x11t971q xvc5jky" },
			6: { className: "x10l6tqk x12xzxwr x78zum5 x1q0g3np x65f84u x1yc453h xt0e3qv x2vplmn xtijo5x x1o0tod x11t971q xvc5jky" },
			1: { className: "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h x1q9ymp4" },
			5: { className: "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1q0g3np x65f84u x1yc453h xt0e3qv x1q9ymp4" },
			3: { className: "x10l6tqk x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h x2vplmn xtijo5x x1o0tod x11t971q xvc5jky x1q9ymp4" },
			7: { className: "x10l6tqk x12xzxwr x78zum5 x1q0g3np x65f84u x1yc453h xt0e3qv x2vplmn xtijo5x x1o0tod x11t971q xvc5jky x1q9ymp4" }
		}[!!gn << 2 | !!Ae << 1 | !!fe << 0], {
			onClick: gn ? null : function() {
				return Vt(It.id);
			},
			children: [
				y.jsx("div", {
					className: "xr1yuqi xbmvrgn x4ii5y1 xwklpps x1rg5ohu",
					children: fn ? y.jsx(r("WAWebStatusPlayerAddStatusEntry.react"), {
						contactId: It.id,
						entryPoint: hn,
						isNewsletterStatus: de,
						newsletterWid: yn,
						onMenuClosed: bn,
						onMenuOpened: Cn
					}) : y.jsx(G, {
						msg: Y,
						statusContact: It,
						authorContact: Tt
					})
				}),
				y.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x78zum5 xdt5ytf xl56j7k xw5ewwj" },
					1: { className: "x78zum5 xdt5ytf xl56j7k x14lruf5 x6ikm8r x10wlt62" }
				}[(Nn != null) << 0], { children: [y.jsx(r("WAWebUnstyledButton.react"), {
					testid: "status-player-contact-name",
					dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
					"aria-label": s._(
						/*BTDS*/
						"",
						[s._param("contact-name", o("WAWebFrontendContactGetters").getFormattedName(It))]
					),
					onClick: function() {
						return Vt(It.id);
					},
					xstyle: [T.msgInfoNameWrapper, o("WAWebContactGetters").getIsPSA(It) && T.msgInfoNamePSA],
					children: Rn
				}), y.jsxs("div", {
					className: "x3nfvp2 x1q0g3np x6s0dn4 xozqiw3 x6ikm8r x10wlt62",
					children: [y.jsx(r("WAWebStatusSubtitle.react"), {
						statusMediaController: Le(),
						status: ne,
						playing: !Ue,
						msg: Y,
						xstyle: T.timestamp,
						onDialogOpen: function() {
							wt(), We(!0);
						},
						onDialogDismiss: function() {
							At(), We(!1);
						},
						onMentionsClick: In ? $n : null,
						onClickProfile: Vt
					}), pe != null ? y.jsx(r("WAWebCrosspostingIcons.react"), {
						crosspostingInfo: pe,
						testidPrefix: "status-player",
						xstyle: T.crosspostingIcons
					}) : null]
				})] })),
				y.jsxs("div", {
					className: "x78zum5 x15zctf7 x1ikap7u xnnr8r xt0e3qv",
					onClick: o("WAWebStopEvent").stopPropagation,
					children: [y.jsx(r("WAWebStatusPlayerControlsMenu.react"), {
						isPaused: Ue,
						hasAudio: P(X) && Ke,
						isMuted: Ge,
						onPlay: At,
						onPauseButtonClick: Kt,
						onOverflowMenuShown: Qt,
						onOverflowMenuDismissed: Xt,
						onMute: Ht,
						onUnmute: Gt,
						onReport: tn,
						onDelete: nn,
						onCrosspost: on,
						onDownload: at ? it : null,
						onForward: vn ? Sn : null,
						onMuteOrUnmute: ln,
						onAddAiContentLabel: en,
						onAddPaidPartnershipLabel: Zt,
						contact: It,
						msg: Y,
						crosspostingInfo: pe
					}), Nn != null && y.jsx(r("WDSButton.react"), {
						label: Nn.emoji,
						variant: "tonal",
						type: "default",
						size: "small",
						onPress: Mn,
						xstyle: T.closeFriendsPillButton,
						children: y.jsx("div", {
							className: "x10l6tqk xtijo5x xwa60dl xefto5c",
							children: y.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
								height: 14,
								width: 16
							})
						})
					})]
				})
			]
		})), An = y.jsxs("div", {
			ref: Ne,
			className: "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h x47corl xg01cxk",
			children: [y.jsx("div", {
				className: "xr1yuqi xbmvrgn x4ii5y1 xwklpps x1rg5ohu",
				children: y.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: It.id,
					theme: "status",
					size: 40
				})
			}), y.jsxs("div", {
				className: "x78zum5 xdt5ytf xl56j7k xw5ewwj",
				children: [Rn, y.jsx("div", {
					className: "x12nagc x1nxh6w3 xziivwi",
					children: o("WAWebClock").Clock.relativeDateAndTimeStr(Y.t)
				})]
			})]
		}), Fn = X ? y.jsx(j, { mediaData: X }) : null, On = L(function() {
			return Q(It, Y);
		}, [Y, It]), Bn = r("useWAWebCanReshareStatus")(Y, It), Wn = o("WAWebMsgGetters").getIsNewsletterStatus(Y) && o("WAWebReactionsUtils").canReactToMessage(Y) && o("WAWebStatusGatingUtils").isChannelStatusLikesSendEnabled(), qn = b(function() {
			o("WAWebStatusReshareAction").openStatusReshareComposer(Y);
		}, [Y]), Un = N(w(X, Y)), Vn = function(t, n, r) {
			o("WAWebLogStatusReply").logStatusReply({
				isGroupStatus: V,
				isQuickReply: r,
				mediaHeight: X == null ? void 0 : X.fullHeight,
				mediaWidth: X == null ? void 0 : X.fullWidth,
				msg: Y,
				replyType: n,
				result: t,
				sessionId: te,
				statusContact: It,
				statusContentType: Un,
				viewerSessionId: le
			});
		}, Hn = On ? y.jsx(r("WAWebStatusComposeBox.react"), {
			msg: C.msg,
			dismissReply: function(t, n) {
				Ft({ replied: n });
			},
			onSend: sn,
			onFocusChange: un,
			pause: wt,
			play: At,
			ref: function(t) {
				xe.current = t;
			},
			onLogStatusReply: Vn,
			onReshare: Bn ? qn : void 0
		}) : null, Gn = o("WAWebMsgGetters").getIsNewsletterStatus(Y) && (Wn || Bn) ? y.jsx(r("WAWebNewsletterStatusActionsBar.react"), {
			msg: Y,
			canLike: Wn,
			canReshare: Bn
		}) : null, zn = r("WAWebNoop"), jn = r("useWAWebReactions")([Y.id.toString()], zn), Kn = r("useWAWebNewsletterReactions")(de ? [Y.id] : []), Qn = o("WAWebStatusLikeEmojis").countLikes((d = Kn[0]) == null ? void 0 : d.reactionCountMap), Xn = o("WAWebStatusLikeEmojis").countStatusLikes(jn.reactionArrayEmojis), Yn = null;
		de ? Yn = y.jsxs("div", babelHelpers.extends({ "data-testid": "status_channel_interactions_row" }, (g || (g = r("stylex"))).props([T.interactions, Gn != null && (Wn ? o("WAWebStatusActionButtonStyles").statusActionButtonStyles.counterRowAlignedWithScrimmedButton : o("WAWebStatusActionButtonStyles").statusActionButtonStyles.counterRowAlignedWithBareIcon)]), { children: [y.jsx(r("WAWebStatusSeenCount.react"), { seenCount: me != null ? me : 0 }), y.jsx(r("WAWebStatusReactionsCount.react"), { likesCount: Qn })] })) : ce && et != null && !rt && (Yn = y.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk xtijo5x xfqi8uc x1o0tod x12xzxwr x19sv2k2 x1kozois x11t971q xvc5jky x78zum5 x1q0g3np x6s0dn4 xl56j7k" },
			1: { className: "x10l6tqk xtijo5x x1o0tod x12xzxwr x19sv2k2 x1kozois x11t971q xvc5jky x78zum5 x1q0g3np x6s0dn4 xl56j7k x11unvnq" }
		}[!!On << 0], { children: [y.jsx(r("WAWebStatusSeenCount.react"), {
			seenCount: et.length,
			onClick: Bt,
			hasLikes: jn.numberOfSenderReactions > 0
		}), o("WAWebStatusGatingUtils").isStatusLikesSendEnabled() && y.jsx(r("WAWebStatusReactionsCount.react"), { likesCount: Xn })] })));
		var Jn = Y.type !== o("WAWebMsgType").MSG_TYPE.CHAT && !M(X) ? y.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk xupqr0c xh8yej3 xnxb3zj x47corl x14qp83e" },
			1: { className: "x10l6tqk xupqr0c xh8yej3 x47corl x14qp83e x41k7rp" }
		}[!!Ae << 0])) : null, Zn = o("WAWebBizCoexStatusGatingUtils").smbHostedstatusReplyPrivacyDisclaimerEnabled() && o("WAWebContactGetters").getIsHosted(It) === !0, er = Zn ? y.jsx(r("WAWebStatusHostedDisclosure.react"), {
			handleClick: function() {
				ut(!0), Le().pause();
			},
			withFutureproofing: ke
		}) : null, tr = Y.type !== o("WAWebMsgType").MSG_TYPE.CHAT && typeof Y.caption == "string" ? y.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x1ey2m1c xh8yej3 x5yr21d" },
			4: { className: "x10l6tqk xh8yej3 x5yr21d xdpez57" },
			2: { className: "x10l6tqk xh8yej3 x5yr21d x4tydyf" },
			6: { className: "x10l6tqk xh8yej3 x5yr21d x4tydyf" },
			1: { className: "x10l6tqk xh8yej3 x5yr21d x1m2atwk" },
			5: { className: "x10l6tqk xh8yej3 x5yr21d x1m2atwk" },
			3: { className: "x10l6tqk xh8yej3 x5yr21d x1m2atwk" },
			7: { className: "x10l6tqk xh8yej3 x5yr21d x1m2atwk" }
		}[!!(Zn && !ke) << 2 | !!(!Zn && ke) << 1 | !!(Zn && ke) << 0], { children: y.jsx(r("WAWebObjectFit.react"), {
			type: "contain",
			size: {
				width: X.fullWidth,
				height: X.fullHeight
			},
			children: y.jsx(r("WAWebStatusCaptionText.react"), {
				msg: Y,
				isExpandedCaptionText: Ye,
				onExpandCaptionText: Wt,
				withHostedDisclosurePadding: Zn || ke
			})
		}) })) : null, nr = Yn != null && tr == null && Y.type !== o("WAWebMsgType").MSG_TYPE.CHAT && !M(X) ? y.jsx("div", { className: "x10l6tqk xupqr0c xh8yej3 xnxb3zj x1ey2m1c x1o0tod x47corl xru3sqf" }) : null, rr = On && Y.type !== o("WAWebMsgType").MSG_TYPE.CHAT && !o("WAWebStatusGatingUtils").isChannelStatusLikesSendEnabled() ? y.jsx("div", { className: "x10l6tqk xupqr0c xh8yej3 x1wkxgih x1ey2m1c x1o0tod x47corl xru3sqf" }) : null, or = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && It.id.isUser() ? o("WAWebLidMigrationUtils").toUserLid(It.id) : void 0, ar = function() {
			mt(!1), Le().resume();
		}, ir = o("WAWebBizCoexStatusGatingUtils").smbHostedstatusReplyPrivacyDisclaimerEnabled() && o("WAWebContactGetters").getIsHosted(It) === !0 && dt ? y.jsx("div", {
			className: "xixxii4 xwa60dl xbudbmw x39lw6i xvue9z x11lhmoz x1vjfegm",
			children: y.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "status-player",
				children: y.jsx(H, {
					msgAuthor: C.msg.author,
					lid: or,
					handleVerificationDrawerClose: ar
				})
			})
		}) : null, lr = o("WAWebBizCoexStatusGatingUtils").smbHostedstatusReplyPrivacyDisclaimerEnabled() && o("WAWebContactGetters").getIsHosted(It) === !0 && st ? y.jsx(r("WAWebCoexSystemMessageModalContent.react"), {
			text: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalText(),
			textLast: o("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextLastParagraph(),
			faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
			wid: C.msg.id.remote,
			lid: or,
			onClose: function() {
				ut(!1), Le().resume();
			},
			onVerificationClick: function() {
				ut(!1), mt(!0), Le().pause();
			}
		}) : null, sr = rt;
		return y.jsx("div", {
			"data-testid": "status-player-uie",
			children: y.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "StatusPlayer",
				escapable: !0,
				requestDismiss: _n,
				requestFocus: Ft,
				children: y.jsxs("div", {
					className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1280gxy",
					tabIndex: -1,
					ref: Me,
					children: [
						An,
						wn,
						sr ? y.jsx(K, {}) : null,
						Jn,
						pn,
						y.jsx("div", {
							className: {
								0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xiy17q3 x1xsqp64 x18d0r48",
								1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xiy17q3 x1xsqp64 x18d0r48 x1bs05mj xbyyjgo"
							}[(X != null && !M(X)) << 0],
							style: dn
						}),
						!r("gkx")("26258") && !fe && n("cr:3265") ? y.jsx(n("cr:3265"), {
							msg: Y,
							statusContact: It,
							isSentByMe: ce,
							isNewsletterAdminStatus: de,
							isPaused: Ue,
							onPlay: At,
							onPause: Kt,
							viewCount: me,
							seenByCount: (m = et == null ? void 0 : et.length) != null ? m : null,
							myReactionCount: jn.numberOfSenderReactions
						}) : null,
						mn,
						St,
						o("WAWebBizCoexStatusGatingUtils").smbHostedstatusReplyPrivacyDisclaimerEnabled() && er,
						Ee,
						tr,
						Fn,
						rr,
						Hn,
						Gn,
						o("WAWebBizCoexStatusGatingUtils").smbHostedstatusReplyPrivacyDisclaimerEnabled() && lr,
						o("WAWebBizCoexStatusGatingUtils").smbHostedstatusReplyPrivacyDisclaimerEnabled() && ir,
						nr,
						Yn
					]
				}, Y.id.toString())
			})
		});
	}
	V.displayName = V.name + " [from " + i.id + "]";
	function H(e) {
		var t = e.handleVerificationDrawerClose, n = e.lid, a = e.msgAuthor, i = o("WAWebContactCollection").ContactCollection.assertGet(a);
		return y.jsx(r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
			lid: n,
			contact: i,
			isFirstLevel: !0,
			onClose: t
		});
	}
	H.displayName = H.name + " [from " + i.id + "]";
	function G(e) {
		var t = e.authorContact, n = e.msg, a = e.statusContact;
		return o("WAWebMsgGetters").getIsGroupStatus(n) ? t != null ? y.jsx(r("WAWebGroupStatusAuthorImage.react"), {
			primaryContactId: a.id,
			secondaryContactId: t.id
		}) : y.jsx("div", {
			className: "x100vrsf x1vqgdyp",
			children: y.jsx(o("WAWebDetailImage.react").DefaultIcon, {
				id: a.id,
				theme: o("WAWebDetailImage.react").DefaultIconThemeType.GroupStatus
			})
		}) : y.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: a.id,
			theme: "status",
			size: 40
		});
	}
	G.displayName = G.name + " [from " + i.id + "]";
	function z(e) {
		return $(e) && e.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED;
	}
	function j(e) {
		var t = e.mediaData, n = o("useWAWebModelValues").useModelValues(t, ["mediaStage", "type"]), a = z(n), i = a ? y.jsx("div", {
			className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1pju0fl x10wjd1d xr1yuqi x11t971q x4ii5y1 xvc5jky x47corl",
			children: y.jsx("button", {
				className: "icon-media-disabled",
				children: y.jsx(o("WAWebSpinner.react").Spinner, {
					size: 50,
					stroke: 4,
					color: "white"
				})
			})
		}) : null;
		return y.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "status-media-loading",
			appear: !0,
			children: i
		});
	}
	j.displayName = j.name + " [from " + i.id + "]";
	function K() {
		return y.jsx("div", { className: "xh8yej3 x5yr21d x42x0ya x10l6tqk x13vifvy x1o0tod x197sbye x12xzxwr" });
	}
	K.displayName = K.name + " [from " + i.id + "]";
	function Q(e, t) {
		var n = !1;
		if (e.id.isGroup()) {
			var a = r("WAWebGroupMetadataCollection").get(e.id);
			a != null && (n = a.announce && !a.participants.iAmAdmin());
		}
		return (o("WAWebMsgGetters").getIsGroupStatus(t) || !o("WAWebMsgGetters").getIsSentByMe(t)) && !o("WAWebContactGetters").getIsPSA(e) && !n && !o("WAWebMsgGetters").getIsNewsletterStatus(t);
	}
	function X(e) {
		return e.id.toString();
	}
	function Y(e) {
		return e.canBeReshared === !0;
	}
	function J(e) {
		var t, n;
		return (t = (n = e.statusAttributions) == null ? void 0 : n.some(function(e) {
			return e.type === o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type.RESHARE;
		})) != null ? t : !1;
	}
	function Z(e) {
		if (e.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
			if (e.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.HD_VIDEO_DUAL_UPLOAD) return o("WAWebWamEnumPairedMediaType").PAIRED_MEDIA_TYPE.HD_VIDEO;
			var t = o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id).some(function(e) {
				return e.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.HD_VIDEO_DUAL_UPLOAD;
			});
			if (t) return o("WAWebWamEnumPairedMediaType").PAIRED_MEDIA_TYPE.SD_VIDEO;
		}
	}
	function ee(e) {
		var t, n, a, i, l, s = e.ref, c = babelHelpers.objectWithoutPropertiesLoose(e, u), d = w(c.mediaData, c.msg), m = z(c.mediaData), p = o("WAWebClock").Clock.getServerTime(), _ = parseFloat((t = c.mediaData) == null ? void 0 : t.duration), f = o("WAWebMsgGetters").getIsNewsletterStatus(c.msg), g = f ? r("WAWebNewsletterMetadataCollection").get(c.msg.id.remote) : null, h = o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
		f ? h = o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS : c.isGroupStatus && (h = o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS);
		var C = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(c.msg.safe()), b = r("useWAWebStatusVisibilityLogger")({
			itemId: X(c.msg.id),
			encryptedStatusIdPromise: o("WAWebStatusLoggingUtils").statusIdForLogging(c.msg),
			userRidPromise: o("WAWebStatusLoggingUtils").statusPosterHashIdForLogging(c.msg, p),
			statusPosterIdPromise: o("WAWebStatusLoggingUtils").statusPosterIdForLogging(c.msg, p),
			statusGroupIdPromise: o("WAWebStatusLoggingUtils").statusGroupIdForLogging(c.msg, p),
			statusContentType: N(d),
			mediaType: d,
			isSelfView: o("WAWebMsgGetters").getIsSentByMe(c.msg),
			isSubImpression: A(c.msg, c.statusItemLastImpressionTimestampMap),
			isCloseSharingPost: o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() && c.msg.statusAudienceMetadata != null,
			isFirstView: c.statusIsUnread,
			isLastStatus: c.msgIdx + 1 >= c.totalMsgs,
			statusContainsMusic: c.containsMusic,
			musicBlocked: !c.canPlaybackAudio,
			statusViewEntrypoint: (n = c.rowSection) != null ? n : o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.RECENT_STORIES,
			updatesTabSessionId: c.sessionId,
			statusViewerSessionId: c.viewerSessionId,
			statusPogIndex: c.statusPogIndex,
			statusPostIndex: c.msgIdx,
			statusCategory: h,
			cid: o("WAWebStatusLoggingUtils").channelStatusCid(c.msg.id.remote),
			channelStatusId: f && (a = c.msg.serverId) != null ? a : void 0,
			channelUserType: f ? o("WAWebNewsletterLoggingUtils").getChannelUserTypeFromMembershipType(g) : void 0,
			statusPostPlaybackDuration: Number.isFinite(_) ? _ : void 0,
			psaCampaignId: c.msg.campaignId,
			psaLinkAvailable: ((i = c.msg.actionLink) == null ? void 0 : i.url) != null,
			statusLoadTime: m ? function() {
				return c.statusItemViewEventRef.current.statusItemLoadTime;
			} : function() {
				return 0;
			},
			urlStatusType: function() {
				return c.statusItemViewEventRef.current.urlStatusType;
			},
			isPosterBiz: c.status.contact.isBusiness,
			statusContainsQuestion: !1,
			isSuccessfulView: function() {
				return c.statusItemViewEventRef.current.statusItemViewTime > 0;
			},
			statusItemViewResult: function() {
				return c.statusItemViewEventRef.current.statusItemViewResult;
			},
			entryMethod: (l = c.statusViewEntryMethod) != null ? l : F(c.statusRowEntryMethod),
			statusViewExitMethod: function() {
				return c.statusViewExitMethodRef.current;
			},
			viewSequenceIndex: function() {
				return O(c.viewSequenceIndexRef);
			},
			isResharable: Y(c.msg),
			isReshare: J(c.msg),
			pairedMediaType: Z(c.msg),
			aiProvenanceLabelShown: f ? C : void 0,
			aiProvenanceLabelEnabled: f ? o("WAWebNewsletterGatingUtils").isChannelSGIUiLabelEnabled() : void 0
		}), v = b[0], S = b[1];
		return y.jsx("div", {
			ref: v,
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1280gxy",
			children: y.jsx(V, babelHelpers.extends({ ref: s }, c))
		});
	}
	ee.displayName = ee.name + " [from " + i.id + "]";
	function te(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, c), a = o("useWAWebMsgValues").useMsgValues(n.msg.id, [o("WAWebMsgGetters").getIsGroupStatus, o("WAWebMsgGetters").isStatusWithMusic]), i = a[0], l = a[1], s = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(n.msg), u = E(null), d = r("useLazyRef")(function() {
			var e;
			return (e = n.statusItemViewMap.get(n.msg.id.toString())) != null ? e : new (o("WAWebStatusItemViewWamEvent")).StatusItemViewWamEvent({
				statusItemViewResult: o("WAWebWamEnumStatusItemViewResult").STATUS_ITEM_VIEW_RESULT.ERROR_UNKNOWN,
				statusItemReplied: 0,
				statusItemViewTime: 0,
				statusItemViewCount: 0,
				statusItemImpressionCount: 0,
				statusItem3sViewCount: 0,
				statusCategory: i ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS
			});
		}), m = babelHelpers.extends({}, n, {
			statusItemViewEventRef: d,
			isGroupStatus: i,
			containsMusic: l,
			canPlaybackAudio: s,
			statusViewExitMethodRef: u
		});
		return y.jsx(ee, babelHelpers.extends({ ref: t }, m));
	}
	te.displayName = te.name + " [from " + i.id + "]", l.default = te;
}), 226);
