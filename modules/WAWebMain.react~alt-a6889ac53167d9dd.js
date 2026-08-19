__d("WAWebMain.react", [
	"fbt",
	"VultureJSDeadComponent.react",
	"WAAbortError",
	"WAGetUserMedia",
	"WALogger",
	"WAPromiseDelays",
	"WAPromiseLoop",
	"WAShiftTimer",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebActionListener",
	"WAWebActiveAccountInfoContext.react",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAdaptiveLayoutRoot.react",
	"WAWebAnimatedEmojiAssetLoader",
	"WAWebAnimatedEmojiGatingUtils",
	"WAWebAppContext.react",
	"WAWebAssetLoader",
	"WAWebAssetLoaderSingleton",
	"WAWebCanonicalMetrics",
	"WAWebChatCollection",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeLogger",
	"WAWebChatThemeValue",
	"WAWebChatlistPanelWrapper.react",
	"WAWebClassnames",
	"WAWebCmd",
	"WAWebCollectionConstants",
	"WAWebCometRouterGating",
	"WAWebCometRouterMetaManager.react",
	"WAWebComposeBoxHasUnsavedChangesInEditModal",
	"WAWebConfirmPopup.react",
	"WAWebConnModel",
	"WAWebConversationWrapper.react",
	"WAWebDeviceCapabilitiesBootstrap",
	"WAWebDrawerCoordination",
	"WAWebDrawerManager",
	"WAWebDrawerManager.react",
	"WAWebDrawerManagerContext",
	"WAWebDrawerManagerGlobalContext",
	"WAWebEligibilityLogging",
	"WAWebEmojiAssetLoader",
	"WAWebEmojiSetup",
	"WAWebErrorBoundary.react",
	"WAWebEventsWaitForBbEvent",
	"WAWebHasBlockingCallState",
	"WAWebInternDogfoodingModal.react",
	"WAWebKeyboardEventConstants",
	"WAWebKeyboardManager",
	"WAWebKeyboardShortcutsPopup.react",
	"WAWebKeyboardTopLevelHotKeys.react",
	"WAWebLocalStorage",
	"WAWebLoggerImpl",
	"WAWebModalManager",
	"WAWebMouseManager",
	"WAWebMsgCollection",
	"WAWebNativeAdsExperimentInfoContext.react",
	"WAWebNavBarCometRouting",
	"WAWebNavBarTypes",
	"WAWebNavigationBar.react",
	"WAWebNoop",
	"WAWebNoticeModel",
	"WAWebNotificationManager.react",
	"WAWebNux",
	"WAWebODS",
	"WAWebOpenLastActiveChatAction",
	"WAWebOpenNotificationsSetting",
	"WAWebPageLoadLogging",
	"WAWebPipManager.react",
	"WAWebPwaDocumentMetadataUtils",
	"WAWebRobotoVariableFontLoadable",
	"WAWebSafariLimited",
	"WAWebSettingsSyncListener.react",
	"WAWebSocketModel",
	"WAWebStreamModel",
	"WAWebStrictMode.react",
	"WAWebThemeContext",
	"WAWebTosModal.react",
	"WAWebUA",
	"WAWebURLUtils",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUserPrefsBase",
	"WAWebUserPrefsKeys",
	"WAWebUserPrefsNuxPreferences",
	"WAWebWamAppLaunchReporter",
	"WAWebWamTimeSpentLogger",
	"WAWebWhatsNewGatingUtils",
	"WAWebWhatsNewModal.react",
	"WAWebWhatsNewNux",
	"WAWebWindowsHybridBridgeInitiator",
	"WDSProfilePhotoRenderingMode",
	"WDSToastContainerID",
	"cr:11133",
	"cr:12406",
	"cr:13156",
	"cr:13438",
	"cr:1347",
	"cr:17163",
	"cr:17194",
	"cr:17219",
	"cr:21198",
	"cr:21265",
	"cr:21419",
	"cr:22855",
	"cr:23046",
	"cr:593",
	"cr:683",
	"getErrorSafe",
	"hero-tracing",
	"isNonZeroNumber",
	"justknobx",
	"react",
	"stylex",
	"useCurrentRoute",
	"useLazyRef",
	"useWAWebABPropConfigValue",
	"useWAWebActiveChat",
	"useWAWebAdjustableChatListWidth",
	"useWAWebExternalBetaOptIn",
	"useWAWebListener",
	"useWAWebNotificationsOptInModalTriggers",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g, h, y, C = y || (y = o("react")), b = y, v = b.useCallback, S = b.useEffect, R = b.useRef, L = b.useState, E = (e = n("cr:13156")) == null ? void 0 : e.WAWebWindowsScalingControl, k = (u = n("cr:13438")) == null ? void 0 : u.WAWebWindowsHybridUserPrefsMigrationControl, I = n("cr:17219") == null ? void 0 : n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebMain), T = I == null ? void 0 : I.touchpadFix;
	T == null || T.init();
	var D = "chatListWallpaperLastLogged", x = 30;
	function $(e) {
		if ((n("cr:11133") == null ? void 0 : n("cr:11133")()) !== !0 || o("WAWebCmd").Cmd.isMainStreamReadyMd) {
			e();
			return;
		}
		r("WAWebEventsWaitForBbEvent")(o("WAWebCmd").Cmd, "main_stream_mode_ready_from_bridge").then(e).catch(function(e) {
			o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[startup] runWhenCommsReady wait failed"]))).catching(r("getErrorSafe")(e)).sendLogs("startup-run-when-comms-ready-failed");
		});
	}
	function P() {
		o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() || o("WAWebModalManager").ModalManager.existsMedia(function(e) {
			e && o("WAWebModalManager").ModalManager.closeMedia(), window.history.pushState({}, "", window.location.href);
		});
	}
	function N() {
		var e = o("WAWebComposeBoxHasUnsavedChangesInEditModal").hasUnsavedChangesInEditModal(), t = o("WAWebChatCollection").ChatCollection.some(function(e) {
			return e.isComposingWithUnsavedChanges();
		}), n = o("WAWebMsgCollection").MsgCollection.hasUnsentMessages(), a = o("WAWebMsgCollection").MsgCollection.some(function(e) {
			return e.pendingDeleteForMe;
		}), i = r("WAWebHasBlockingCallState")(), l = e || t || n || a || i;
		return l && o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"[hasPendingActions] edit=",
			" comp=",
			" unsent=",
			" pendDel=",
			" call=",
			""
		])), e, t, n, a, i), l;
	}
	var M = 6e4;
	function w(e, t, n) {
		var a = e ? M : 0;
		t.current = new AbortController();
		var i = t.current.signal;
		o("WAPromiseLoop").promiseLoop(async function(e) {
			try {
				if (await o("WAPromiseDelays").delayMs(a), i.aborted) throw new (o("WAAbortError")).AbortError();
				if (o("WAWebStreamModel").Stream.markUnavailable(30 * 1e3), await new Promise(function(e) {
					n.current = e;
				}), i.aborted) throw new (o("WAAbortError")).AbortError();
				document.hasFocus() && o("WAWebStreamModel").Stream.markAvailable(), a = M;
			} catch (n) {
				var t = r("getErrorSafe")(n);
				if (t.name === o("WAAbortError").ABORT_ERROR) e();
				else throw n;
			}
		}).finally(function() {
			t.current = null;
		});
	}
	var A = "xrbhvgu-B", F = "x1h4ohyg-B", O = {
		app: {
			position: "x1n2onr6",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			display: "x78zum5",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			backgroundColor: "x1h3rtpe",
			backgroundRepeat: "x1w3jsh0",
			backgroundPosition: "xf8xn22",
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			borderEndStartRadius: "x11o6v7j",
			transformOrigin: "x1g0ag68",
			animationName: "xcgwb2z",
			animationDuration: "x4afe7t",
			animationTimingFunction: "xu90me3",
			$$css: !0
		},
		appNoAnimation: {
			animationName: "x10886xy",
			$$css: !0
		},
		pane: {
			boxSizing: "x9f619",
			position: "x1n2onr6",
			zIndex: "xupqr0c",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			transform: "x17dzmu4",
			"@media (display-mode: standalone)_borderTopWidth": "x1i1dayz",
			"@media (display-mode: standalone)_borderTopStyle": "x2ipvbc",
			"@media (display-mode: standalone)_borderTopColor": "xjdofhw",
			$$css: !0
		},
		paneWindowsHybrid: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		navbarBorder: {
			borderInlineStartWidth: "xpilrb4",
			borderInlineStartStyle: "x1t7ytsu",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		paneOne: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			zIndex: "x12xzxwr",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			"@media (display-mode: standalone)_borderStartStartRadius": "x570efc",
			$$css: !0
		},
		paneOneWindowsHybrid: {
			borderStartStartRadius: "xyi3aci",
			$$css: !0
		},
		paneOneDrawer: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			zIndex: "x1oy9qf3",
			$$css: !0
		},
		paneOneDrawerWithNavBar: {
			marginInlineStart: "xevlxbw",
			$$css: !0
		},
		paneBorderLeft: {
			borderInlineStartWidth: "xpilrb4",
			borderInlineStartStyle: "x1t7ytsu",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		sidePaneMaxWidth: {
			flex: "x18dvir5",
			width: "xxljpkc",
			maxWidth: "xwfak60",
			$$css: !0
		},
		rightDrawerIn: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			zIndex: "x1oy9qf3",
			maxWidth: "xwfak60",
			animationDuration: "x5hsz1j",
			animationName: "x17dq4o0",
			animationFillMode: "x10e4vud",
			$$css: !0
		},
		sidePaneWidthWindowsHybrid: {
			flex: "x1dgx9ea",
			width: "xnnhin0",
			maxWidth: "x1dt7z5j",
			minWidth: "x1ugzxio",
			$$css: !0
		},
		sidePane3WidthWindowsHybrid: {
			flex: "x18dvir5",
			maxWidth: "xbgkxdc",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "x1v8p93f",
			$$css: !0
		},
		sidePane3WidthWindowsHybridLegacy: {
			"@media screen and (max-width: 1300px)_position": "x1xz51pm",
			"@media screen and (max-width: 1300px)_insetInlineEnd": "xupwc73",
			"@media screen and (max-width: 1300px)_width": "xlyzgzq",
			"@media screen and (max-width: 1300px)_maxWidth": "x1roq002",
			"@media screen and (max-width: 1300px)_height": "x1ma46kl",
			$$css: !0
		},
		sidePane3WidthWindowsHybridAdaptive: {
			"@media screen and (max-width: 1209px)_position": "xkg48ke",
			"@media screen and (max-width: 1209px)_insetInlineEnd": "xmcdse7",
			"@media screen and (max-width: 1209px)_height": "xqyb6ud",
			"@media screen and (max-width: 699px)_width": "x43vsqo",
			"@media screen and (max-width: 699px)_maxWidth": "x1cahy7i",
			$$css: !0
		},
		appMinWidth: {
			minWidth: "x1ljrdzs",
			minHeight: "x1u03g8m",
			$$css: !0
		},
		appSafariFix: {
			borderStartStartRadius: "xexe6ym",
			borderStartEndRadius: "xqayhte",
			borderEndEndRadius: "x4y79ep",
			borderEndStartRadius: "x2lnoga",
			$$css: !0
		},
		paneThreeStandaloneTwoPanes: {
			borderTopWidth: "x1fkvrks",
			$$css: !0
		},
		paneThreeNarrowBorder: {
			borderInlineStartWidth: "x2ydcri",
			borderInlineStartStyle: "x1873f8k",
			$$css: !0
		},
		paneThreeAnimatingBorder: {
			borderInlineStartColor: "x1ppzqlz",
			$$css: !0
		},
		paneOneResponsiveWidth: {
			flexGrow: "xck4lzl",
			flexShrink: "x1gluznb",
			flexBasis: "xahwd2o x10fiusa",
			maxWidth: "x1a0bplq xc995h1",
			$$css: !0
		},
		paneThreeResponsiveWidth: {
			position: "x1xz51pm",
			insetInlineEnd: "xupwc73",
			height: "x1ma46kl",
			width: "xx9c7w5 xssin3l",
			maxWidth: "x13ug1e2 x1qwjhxz",
			$$css: !0
		}
	};
	function B(e) {
		var t = e.animate, a = o("useWAWebABPropConfigValue").useABPropConfigValue("wds_web_toast"), i = (n("cr:23046") == null ? void 0 : n("cr:23046").isWindowsHybridEnabled()) === !0;
		o("WAWebSettingsSyncListener.react").useSettingsSyncListener(), S(function() {
			if (n("cr:17163") != null && n("cr:17163").shouldShowBrokenHybrid2559Modal()) {
				n("cr:17163") == null || n("cr:17163").showBrokenHybrid2559Modal();
				return;
			}
			if (n("cr:17194") != null && n("cr:17163") != null && n("cr:17163").shouldShowHybridRateTheAppPrompt()) {
				o("WAWebModalManager").ModalManager.open(C.jsx(n("cr:17194"), {}));
				return;
			}
			var e = o("WAWebWhatsNewGatingUtils").getWhatsNewAutoModalCooldownDays();
			if (o("WAWebWhatsNewGatingUtils").isWhatsNewAutoModalEnabled() && o("WAWebWhatsNewNux").shouldShowWhatsNewNux(e)) {
				var t = new AbortController();
				return o("WAWebWhatsNewGatingUtils").resolveWhatsNewBizAgentEligible().then(function(n) {
					t.signal.aborted || o("WAWebModalManager").ModalManager.open(C.jsx(r("WAWebWhatsNewModal.react"), {
						cooldownDays: e,
						bizAgentEligible: n
					}));
				}), function() {
					return t.abort();
				};
			}
		}, []);
		var l = R(null), u = R(null), c = R(null), d = R(null), y = R(null), b = R(null), T = R(!1), N = R(null);
		r("useWAWebNotificationsOptInModalTriggers")();
		var M = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(function() {
				if (document.activeElement === document.body) {
					var e = o("WAWebUim").UIM.Manager.getTop();
					e == null || e.requestFocus();
				}
			});
		}), A = L(!1), F = A[0], B = A[1], U = L(!1), V = U[0], H = U[1], G = L(!1), z = G[0], j = G[1], K = L(!1), Q = K[0], X = K[1], Y = function() {
			M.current.debounce(10);
		}, J = r("useWAWebActiveChat")(), Z = J != null, ee = o("useWAWebAdjustableChatListWidth").useAdjustableChatListWidth(F, J), te = ee.leftDrawerStyle, ne = ee.mode, re = ee.resizeHandle, oe = ee.rightDrawerStyle, ae = r("useCurrentRoute")(), ie = L(function() {
			var e = ae == null ? void 0 : ae.url;
			return e != null ? o("WAWebNavBarCometRouting").getNavBarItemForRouteUrl(e) : o("WAWebNavBarTypes").NavBarItems.Chats;
		}), le = ie[0], se = ie[1], ue = v(function(e) {
			e !== le && o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), se(e);
		}, [le]), ce = v(function(e, t) {
			if (o("WAWebDrawerCoordination").closeConflictingDrawer(e, t), e === "fullscreen" && (t === "opened" ? j(!0) : (t === "closed" || t === "replaced") && j(!1)), e === "left" || e === "fullscreen") if (t === "opened") {
				var n;
				e === "left" && X(!0), (n = c.current) == null || n.onLeftDrawerOpen();
			} else if (t === "closed") {
				var r;
				e === "left" && X(!1), (r = c.current) == null || r.onLeftDrawerClose(), ue(o("WAWebNavBarTypes").NavBarItems.Chats), le !== o("WAWebNavBarTypes").NavBarItems.Chats && o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked();
			} else t === "replaced" && e === "left" && X(!0);
			else e === "right" && (t === "opened" ? (T.current = !1, o("WAWebCmd").Cmd.onPanesWillChange(3), B(!0), H(!0), o("WAWebCmd").Cmd.onPanesDidChange(3)) : (t === "closed" || t === "replaced") && (T.current = !0, H(!0), B(!1)));
		}, [le, ue]), de = function() {
			H(!1), F && T.current && B(!1);
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "set_active_nav_bar", ue), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", v(function(e) {
			le === o("WAWebNavBarTypes").NavBarItems.MetaAI && (e == null ? void 0 : e.threadId) == null && (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(), ue(o("WAWebNavBarTypes").NavBarItems.Chats));
		}, [le, ue]));
		var me = L(0), pe = me[0], _e = me[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "rerender_app", function() {});
		var fe = function(t) {
			var e, n, r, a, i = !1, l = (e = (n = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")) == null ? void 0 : n.existsDrawer()) != null ? e : !1, s = c.current;
			i = i || l && !!(s != null && s.containsDOMNode(t));
			var u = (r = (a = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("mid")) == null ? void 0 : a.existsDrawer()) != null ? r : !1, d = y.current;
			return i = i || u && !!(d != null && d.containsDOMNode(t)), i;
		}, ge = function() {
			switch (o("WAWebConnModel").Conn.tos) {
				case 1:
				case 2:
					o("WAWebModalManager").ModalManager.open(C.jsx(r("WAWebTosModal.react"), {}), { blockClose: !0 });
					break;
				case 3:
					o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["TOS (terms of service) stage number 3, logging out"]))), o("WAWebSocketModel").Socket.logout();
					break;
				default: break;
			}
		}, he = function() {
			o("isNonZeroNumber").isNonZeroNumber(r("WAWebNoticeModel").noticeId) && r("WAWebNoticeModel").blocking === !0 && o("WAWebModalManager").ModalManager.open(C.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebUserNoticeModal" }), { blockClose: !0 });
		}, ye = function(t) {
			for (var e = t.target, n = function(t) {
				return t instanceof HTMLElement && t.getAttribute("contentEditable") || t instanceof HTMLInputElement;
			}, a = 0; a < 5; a++) {
				if (n(e)) return;
				e = e.parentNode;
			}
			r("WAWebKeyboardShortcutsPopup.react") && o("WAWebModalManager").ModalManager.open(C.jsx(r("WAWebKeyboardShortcutsPopup.react"), {})), t.preventDefault();
		}, Ce = function() {
			var e;
			(e = b.current) == null || e.abort();
		};
		o("WAWebLoggerImpl").Logger.setSkipLoggingForProdLowEndDevice(), o("WAWebLoggerImpl").Logger.maybeUpdateLogCapacityFromABProp(), o("WAWebABProps").getABPropConfigValue("web_optimized_avatars") && o("WDSProfilePhotoRenderingMode").setWDSProfilePhotoRenderingMode("maybe-BaseImage"), S(function() {
			if (o("WAWebConnModel").Conn.isSMB) {
				var e;
				(e = document.body) == null || e.classList.add("smb-colors");
			}
			if (!o("WAWebAssetLoaderSingleton").AssetLoader.isAssetLoaded("bg-chat-beige")) {
				var t = o("WAWebThemeContext").THEME_ASSETS.lightRefreshed.find(function(e) {
					var t = e.id;
					return t === "bg-chat-beige";
				});
				if (t == null) return;
				o("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(t, o("WAWebAssetLoader").LOAD_PRIORITY.THEME_ASSET_LOAD, !1).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(e) {
					o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMain] UI refresh wallpaper asset load failed id=", ""])), t.id).catching(r("getErrorSafe")(e)).sendLogs("asset-loader-wallpaper-load-failed");
				});
			}
			o("WAWebThemeContext").resetPwaTitlebarColor();
		}, []), o("WAWebRobotoVariableFontLoadable").useApplyRobotoFont(), S(function() {
			var e;
			o("WAWebStreamModel").Stream.uiActive = !0, document.hasFocus() && document.visibilityState !== "hidden" && ((n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 ? $(function() {
				document.hasFocus() && document.visibilityState !== "hidden" && o("WAWebStreamModel").Stream.markAvailable();
			}) : o("WAWebStreamModel").Stream.markAvailable());
			var t = o("WAWebConnModel").Conn.platform;
			r("WAWebEmojiSetup")(o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t)), o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(t), r("WAWebKeyboardManager").menuBatchRenderWith(function() {
				r("WAWebKeyboardManager").trigger(r("WAWebKeyboardEventConstants").Event + ":" + r("WAWebKeyboardEventConstants").Events.LOGGED_IN);
			}), w(!0, b, N), o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled() && ((n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 ? $(function() {
				o("WAWebAnimatedEmojiAssetLoader").initAnimatedEmojiAssets(t).catch(function(e) {
					o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[startup] initAnimatedEmojiAssets failed"]))).catching(r("getErrorSafe")(e)).sendLogs("startup-init-animated-emoji-assets-failed");
				});
			}) : o("WAWebAnimatedEmojiAssetLoader").initAnimatedEmojiAssets(t)), ge(), he(), o("WAWebUA").UA.isSafari && !o("WAGetUserMedia").getUserMedia && o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.SAFARI_LIMITED_SUPPORT) && (self.setTimeout(function() {
				o("WAWebModalManager").ModalManager.open(C.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: o("WAWebModalManager").closeModalManager,
					okText: s._(
						/*BTDS*/
						""
					),
					children: C.jsx(o("WAWebSafariLimited").SafariLimitedText, {})
				}));
			}, 250), o("WAWebUserPrefsNuxPreferences").setNUX(o("WAWebNux").NUX.SAFARI_LIMITED_SUPPORT, { views: 1 })), o("WAWebOpenNotificationsSetting").handleOpenNotificationsSettingDeeplink(), I == null || (e = I.appActivationBridge) == null || e.initialize();
		}, []), S(function() {
			var e, t;
			(e = o("WAWebWamAppLaunchReporter").getAppLaunchReporter()) == null || e.commitAppLaunchWamEvent(), I == null || (t = I.getDebugFeatures()) == null || t.startHangsMonitor(), o("WAWebPageLoadLogging").endPageLoadQpl(!1), n("cr:21198") == null || n("cr:21198").initPerformanceObserver({
				longtask: { enabled: r("justknobx")._("4665") },
				longAnimationFrame: { enabled: !1 }
			}), o("WAWebCanonicalMetrics").logCanonicalPageLoadMetrics(), o("WAWebChatThemeGatingUtils").isChatThemeLoggingEnabled() && r("WAWebEventsWaitForBbEvent")(o("WAWebChatCollection").ChatCollection, o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED).then(function() {
				try {
					var e = Date.now(), t = Number(r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(D));
					if (!Number.isFinite(t) || e - t >= x * o("WATimeUtils").DAY_MILLISECONDS) {
						var n = o("WAWebChatCollection").ChatCollection.some(function(e) {
							var t;
							return o("WAWebChatThemeValue").isWallpaperOverride(e.wallpaperValue) || ((t = e.chatThemeValue) == null ? void 0 : t.chatThemeId) != null;
						});
						o("WAWebChatThemeLogger").logChatListWallpaperEvent({
							anyWallpaperApplied: n,
							chatThemesEnabled: o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
						}), r("WAWebLocalStorage") == null || r("WAWebLocalStorage").setItem(D, e.toString());
					}
				} catch (e) {
					o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose(["ChatListWallpaper logging failed"])));
				}
			}).catch(r("WAWebNoop"));
		}, []), r("useWAWebOnUnmount")(function() {
			M.current.cancel(), r("WAWebKeyboardManager").menuBatchRenderWith(function() {
				r("WAWebKeyboardManager").trigger(r("WAWebKeyboardEventConstants").Event + ":" + r("WAWebKeyboardEventConstants").Events.LOGGED_OUT);
			}), r("WAWebURLUtils").canMuckHistory() && !o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() && window.history.back(), o("WAWebStreamModel").Stream.uiActive = !1, Ce();
		});
		var be = r("WAWebURLUtils").canMuckHistory();
		o("useWAWebListener").useListener(be ? window : null, "popstate", P), S(function() {
			be && P();
		}, []), S(function() {
			var e = getComputedStyle(document.documentElement);
			e.getPropertyValue("--WDS-accent") || r("WAWebODS").incr("web.app.cssLoadError");
		}, []), o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:tos", ge), o("useWAWebListener").useListener(r("WAWebNoticeModel"), ["change:blocking", "change:noticeId"], he), o("useWAWebListener").useListener(document, "wheel", o("WAWebMouseManager").mouseWheelListener);
		var ve = function() {
			N.current == null || N.current(), N.current = null;
		};
		o("useWAWebListener").useListener(document, [
			"mousemove",
			"scroll",
			"keydown"
		], ve), o("useWAWebListener").useListener(window, ["focus", "resize"], ve), S(function() {
			(n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 ? $(function() {
				o("WAWebDeviceCapabilitiesBootstrap").bootstrapDeviceCapabilities().catch(function(e) {
					o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[startup] bootstrapDeviceCapabilities failed"]))).catching(r("getErrorSafe")(e)).sendLogs("startup-bootstrap-device-capabilities-failed");
				});
			}) : o("WAWebDeviceCapabilitiesBootstrap").bootstrapDeviceCapabilities();
		}, []), S(function() {
			o("WAWebEligibilityLogging").eligibilityLogger.init();
		}, []);
		var Se = o("WAWebAdaptiveLayoutGatingUtils").getIsAdaptiveLayoutEnabled();
		S(function() {
			i && o("WAWebUserPrefsBase").userPreferencesStoreBase.set(o("WAWebUserPrefsKeys").UserPrefs.WindowsIsAdaptiveLayoutEnabled, Se);
		}, [Se, i]);
		var Re = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
			three: F,
			two: !F,
			"app-animating": V
		}, (h || (h = r("stylex")))([
			O.app,
			!t && O.appNoAnimation,
			!Se && O.appMinWidth,
			o("WAWebUA").UA.isSafari && !o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa() && !Se && O.appSafariFix
		])), Le, Ee;
		n("cr:593") != null && i && (Ee = C.jsx(n("cr:593"), {})), o("useWAWebExternalBetaOptIn").useExternalBetaValidator();
		var ke = C.jsxs("div", {
			className: "x10l6tqk x13vifvy x1o0tod x78zum5 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl",
			children: [C.jsx("div", {
				className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(h([
					O.paneOneDrawerWithNavBar,
					O.pane,
					O.paneOne,
					O.sidePaneMaxWidth,
					O.paneOneDrawer,
					!i && O.paneOneResponsiveWidth,
					i && [
						O.paneWindowsHybrid,
						O.paneOneWindowsHybrid,
						O.sidePaneWidthWindowsHybrid
					],
					O.navbarBorder
				])),
				style: te,
				"data-testid": "drawer-left",
				children: C.jsx(o("hero-tracing").HeroPagelet, {
					name: "Left Drawer Manager",
					observeTextMutation: !0,
					children: W
				})
			}), C.jsx("div", babelHelpers.extends({}, {
				0: { className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr" },
				4: { className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr x178xt8z x13fuv20 xx42vgk" },
				2: { className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr xevlxbw" },
				6: { className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr x178xt8z x13fuv20 xx42vgk xevlxbw" },
				1: { className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr xyi3aci" },
				5: { className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr x178xt8z x13fuv20 xx42vgk xyi3aci" },
				3: { className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr xevlxbw xyi3aci" },
				7: { className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr x178xt8z x13fuv20 xx42vgk xevlxbw xyi3aci" }
			}[!!i << 2 | !!(Se && ne === "narrow") << 1 | !!(Se && ne === "narrow" && J) << 0], {
				"data-testid": "drawer-middle",
				children: C.jsx(o("hero-tracing").HeroPagelet, {
					name: "Mid Drawer Manager",
					observeTextMutation: !0,
					children: q
				})
			}))]
		}), Ie = C.jsx("div", {
			className: "x10l6tqk x13vifvy x78zum5 x5yr21d x6ikm8r x10wlt62 x47corl x8qhkwt xdmgpyl x1oy9qf3",
			"data-testid": "drawer-fullscreen",
			children: C.jsx(o("WAWebDrawerManager.react").DrawerManagerComponent, { direction: o("WAWebDrawerManager.react").Dir.FULLSCREEN })
		}), Te = v(function(e) {
			o("WAWebCmd").Cmd.closeActiveChat(), ue(e);
		}, [ue]), De = C.jsx(r("WAWebStrictMode.react"), { children: C.jsx(o("WAWebNavigationBar.react").NavigationBar, {
			headerRef: u,
			activeNavBarItem: le,
			updateActiveNavBarItem: Te
		}) }), xe = C.jsx(r("WAWebChatlistPanelWrapper.react"), {
			leftDrawerStyle: te,
			resizeHandle: re,
			chatlistHeaderRef: u,
			handleActiveNavBarItemUpdate: ue,
			chatlistPanelRef: c,
			leftPaneClassName: o("WAWebClassnames").classnamesConvertMeToStylexPlease({
				0: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc xwfak60 x18pi947",
				8: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1",
				4: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio",
				12: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio",
				2: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc xwfak60 x18pi947 xyi3aci",
				10: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1 xyi3aci",
				6: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xyi3aci",
				14: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xyi3aci",
				1: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc xwfak60 x18pi947 xlshs6z",
				9: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1 xlshs6z",
				5: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xlshs6z",
				13: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xlshs6z",
				3: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc xwfak60 x18pi947 xyi3aci xlshs6z",
				11: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1 xyi3aci xlshs6z",
				7: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xyi3aci xlshs6z",
				15: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xyi3aci xlshs6z"
			}[!i << 3 | !!i << 2 | !!(i && Se && ne === "narrow" && J) << 1 | !!z << 0])
		}), $e = C.jsx(r("WAWebStrictMode.react"), { children: C.jsx(r("WAWebConversationWrapper.react"), {
			animate: t,
			conversationRef: y,
			paneTwoProps: {
				0: { className: "x9f619 x1n2onr6 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2" },
				1: { className: "x9f619 x1n2onr6 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xyi3aci" }
			}[!!(i && Se && ne === "narrow") << 0]
		}) }), Pe = C.jsx("div", {
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(h([
				O.pane,
				O.paneBorderLeft,
				O.paneThreeNarrowBorder,
				!F && O.paneThreeStandaloneTwoPanes,
				F && V && O.paneThreeAnimatingBorder,
				F && O.rightDrawerIn,
				F && !i && O.paneThreeResponsiveWidth,
				F && i && [O.sidePane3WidthWindowsHybrid, Se ? O.sidePane3WidthWindowsHybridAdaptive : O.sidePane3WidthWindowsHybridLegacy],
				i && Se && ne === "narrow" && O.paneOneWindowsHybrid
			])),
			style: oe,
			ref: d,
			"data-testid": "drawer-right",
			children: C.jsx(o("WAWebDrawerManager.react").DrawerManagerComponent, {
				direction: o("WAWebDrawerManager.react").Dir.RIGHT,
				onDrawerAnimationComplete: de,
				animationDisabled: !0
			})
		}), Ne = E ? C.jsx(E, {}) : null, Me = k ? C.jsx(k, {}) : null, we = n("cr:21265") ? C.jsx(n("cr:21265"), {}) : null, Ae = n("cr:21419") ? C.jsx(n("cr:21419"), {}) : null, Fe = n("cr:22855") ? C.jsx(n("cr:22855"), {}) : null, Oe = n("cr:683") ? C.jsx(n("cr:683"), {}) : null, Be = n("cr:12406") ? C.jsx(n("cr:12406"), {}) : null, We = a ? C.jsx("div", {
			id: "" + r("WDSToastContainerID"),
			className: "xixxii4 x191j7n5 xzwoauc xz4gtu xevlxbw xc9l9hb x47corl"
		}) : null;
		return C.jsx(o("WAWebActiveAccountInfoContext.react").ActiveAccountInfoProvider, { children: C.jsx(o("WAWebNativeAdsExperimentInfoContext.react").NativeAdsExperimentInfoProvider, { children: C.jsx(o("WAWebDrawerManagerContext").DrawerManagerContextProvider, {
			onDrawerStateChange: ce,
			children: C.jsx(o("WAWebAppContext.react").AppContextProvider, {
				rightDrawerOpen: F,
				activeNavBarItem: le,
				children: C.jsxs("div", {
					"data-testid": "wa-web-main-screen",
					className: "x78zum5 xdt5ytf x5yr21d",
					children: [Ee, C.jsx(o("WAWebUimUie.react").UIE, {
						uimState: o("WAWebUim").UIMState.INACTIVE,
						displayName: "Main",
						children: C.jsxs(r("WAWebKeyboardTopLevelHotKeys.react"), {
							className: Re,
							onBlur: Y,
							ref: l,
							onShowKeyboardShortcuts: ye,
							skipNode: fe,
							children: [
								C.jsx(r("WAWebNotificationManager.react"), {}),
								o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() && C.jsx(r("WAWebCometRouterMetaManager.react"), {}),
								Ne,
								Me,
								C.jsx(r("WAWebActionListener"), {
									activeNavBarItem: le,
									updateActiveNavBarItem: Te
								}),
								C.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
									name: "time-spent-logger",
									sendLogs: !0,
									children: C.jsx(r("WAWebWamTimeSpentLogger"), {})
								}),
								C.jsx(r("WAWebInternDogfoodingModal.react"), {}),
								Le,
								De,
								Ie,
								ke,
								Se ? C.jsxs(C.Fragment, { children: [C.jsxs(r("WAWebAdaptiveLayoutRoot.react"), {
									mode: ne,
									conversationOpen: Z,
									leftDrawerOpen: Q,
									rightDrawerOpen: F,
									children: [
										xe,
										$e,
										Pe
									]
								}), C.jsx(o("WAWebPipManager.react").PiPManager, {})] }) : C.jsxs(C.Fragment, { children: [
									xe,
									$e,
									C.jsx(o("WAWebPipManager.react").PiPManager, {}),
									Pe
								] }),
								we,
								Ae,
								Fe,
								Oe,
								Be,
								We
							]
						})
					})]
				})
			}, pe)
		}) }) });
	}
	B.displayName = B.name + " [from " + i.id + "]";
	function W(e, t) {
		return C.jsxs(C.Fragment, { children: [C.jsx("div", {
			ref: e,
			children: C.jsx(o("WAWebDrawerManager.react").DrawerManagerComponent, { direction: o("WAWebDrawerManager.react").Dir.LEFT })
		}), C.jsx(t, {})] });
	}
	W.displayName = W.name + " [from " + i.id + "]";
	function q(e, t) {
		return C.jsxs(C.Fragment, { children: [C.jsx("div", {
			ref: e,
			children: C.jsx(o("WAWebDrawerManager.react").DrawerManagerComponent, { direction: o("WAWebDrawerManager.react").Dir.MID })
		}), C.jsx(t, {})] });
	}
	q.displayName = q.name + " [from " + i.id + "]", l.hasPendingActions = N, l.MainComponent = B;
}), 226);
