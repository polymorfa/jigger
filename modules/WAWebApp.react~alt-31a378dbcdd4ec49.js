__d("WAWebApp.react", [
	"fbt",
	"invariant",
	"MetaConfig",
	"WAAbortError",
	"WAComms",
	"WALogger",
	"WAMemoizeOne",
	"WAPromiseTimeout",
	"WAShiftTimer",
	"WAWeb-moment",
	"WAWebABProps",
	"WAWebABPropsCache",
	"WAWebAlarm",
	"WAWebApi",
	"WAWebApiParse",
	"WAWebApp.stylex",
	"WAWebAppMutex",
	"WAWebAppRootInteractionContext.react",
	"WAWebAppScreen",
	"WAWebAppUI",
	"WAWebAssetLoader",
	"WAWebAssetLoaderSingleton",
	"WAWebBrokerGlobalAppState",
	"WAWebCacheStorageOpenFailedPopup.react",
	"WAWebCallsOnlyGating",
	"WAWebClassnames",
	"WAWebClock",
	"WAWebCmd",
	"WAWebConnModel",
	"WAWebCrashlog",
	"WAWebDeepLinkClickWamEvent",
	"WAWebDesktopSharerContext.react",
	"WAWebEmojiAssetLoaderCompletionTracker",
	"WAWebEnvironment",
	"WAWebErrorBoundary.react",
	"WAWebErrorBoundaryPopup.react",
	"WAWebEventsWaitForEvent",
	"WAWebEventsWaitForMain",
	"WAWebExternalLink.react",
	"WAWebFullScreenEntryPointContext",
	"WAWebGpcUoomAPI",
	"WAWebHardRefreshModal.react",
	"WAWebKeyboardContext",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebLaunchSocket",
	"WAWebListenerHoc_DEPRECATED",
	"WAWebLoggerImpl",
	"WAWebLogoutReasonConstants",
	"WAWebMediaWorkerProxy",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNoopGC",
	"WAWebPathfinder.react",
	"WAWebPathfinderLogger",
	"WAWebPopover.react",
	"WAWebPreLoginApiCmds",
	"WAWebPrivacyModeContext",
	"WAWebPwaEventListeners",
	"WAWebPwaManifest",
	"WAWebRobotoVariableFontLoadable",
	"WAWebSWBusInit",
	"WAWebSocketModel",
	"WAWebStorageCmd",
	"WAWebStorageQuotaExceededPopup.react",
	"WAWebStreamModel",
	"WAWebStylesEnv",
	"WAWebSystemTheme",
	"WAWebThemeContext",
	"WAWebUA",
	"WAWebURLUtils",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUnexpectedFatalErrorModal.react",
	"WAWebUpdater",
	"WAWebUpdaterUpdatePoll",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsHistorySync",
	"WAWebUserPrefsInfoStore",
	"WAWebUserPrefsKeys",
	"WAWebUserPrefsScreenLock",
	"WAWebUserPrefsStore",
	"WAWebVoipRevalidateOngoingCallsOnResume",
	"WAWebWAWCStorage",
	"WAWebWamAppLaunchReporter",
	"WAWebWamFingerprintReporter",
	"WAWebWamOfflineResumeReporter",
	"WAWebWamPageLoadReporter",
	"WAWebWindowSizeProvider.react",
	"WAWebWindowsHybridBridgeInitiator",
	"WDSContextualLayer.react",
	"WDSThemes",
	"cr:11133",
	"cr:17219",
	"cr:37105",
	"getErrorSafe",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"stylex"
], (function(t, n, r, o, a, i, l, s, u) {
	var e, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N = P || (P = o("react")), M = P, w = M.Component, A = M.createRef, F = r("requireDeferred")("WAWebEmojiAssetLoader").__setRef("WAWebApp.react"), O = r("requireDeferred")("WAWebEmojiAssetLoaderConfig").__setRef("WAWebApp.react"), B = r("requireDeferred")("WAWebMainWrapper").__setRef("WAWebApp.react"), W = (e = n("cr:17219")) != null ? e : {}, q = W.getWindowsBridge;
	n("WAWebSWBusInit");
	var U = n("cr:37105") != null ? n("cr:37105") : {}, V = U.EntryPointContainer, H = {}, G = window.gc;
	if (typeof G == "function") try {
		var z = !1, j = function() {
			z || G.call(window);
		};
		j.toString = function() {
			return "function gc() { [native code] }";
		}, window.gc = j, o("WAWebABPropsCache").waitForABPropConfigsReady().then(function() {
			o("WAWebABProps").getABPropConfigValue("web_anr_noop_gc_enabled") && (z = !0);
		}), o("WAWebABPropsCache").waitForABPropConfigsReady().then(function() {
			o("WAWebABProps").getABPropConfigValue("web_anr_disable_memory_logging") && o("WAWebNoopGC").enableGCNoop();
		});
	} catch (e) {}
	var K = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.MutexBlockStrategy) === 1, Q = [
		o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure,
		o("WAWebLogoutReasonConstants").LogoutReason.SyncdErrorDuringBootstrap,
		o("WAWebLogoutReasonConstants").LogoutReason.SyncdTimeout,
		o("WAWebLogoutReasonConstants").LogoutReason.HistorySyncTimeout,
		o("WAWebLogoutReasonConstants").LogoutReason.InvalidAdvStatus,
		o("WAWebLogoutReasonConstants").LogoutReason.AccountSyncError
	], X;
	function Y() {
		return X != null && X.hasPendingActions();
	}
	function J(e) {
		var t = e.cmdAndData, n = e.isExternal, r = e.sessionId, a = t.data, i = t.resultType;
		return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"main:execApiCmd:",
			", external=",
			""
		])), i, n), X != null || u(0, 56382), i === "ADVERTISE" || i === "MANAGE_ADS" || i === "OPEN_CATALOG" ? !1 : X.execApiCmd({
			cmdData: t,
			isExternal: n,
			sessionId: r
		});
	}
	function Z(e) {
		for (var t = e; t;) {
			var n, r = t instanceof HTMLElement && ((n = t.dataset) == null ? void 0 : n.nohandle);
			if (r) return !1;
			t = t.parentElement;
		}
		return !0;
	}
	function ee() {
		o("WAWebSocketModel").Socket.summary(), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Focus at time of upload:"])));
		try {
			o("WAWebUim").UIM.pprint(!0);
		} catch (e) {
			o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["UIM Print Failed!"])));
		}
		return {
			platform: o("WAWebConnModel").Conn.platform,
			ref: o("WAWebConnModel").Conn.ref
		};
	}
	var te = 2e4, ne = (function(e) {
		function t() {
			for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
			return t = e.call.apply(e, [this].concat(a)) || this, t.contextMenuRef = A(), t.animate = !0, t.$1 = !1, t.$2 = null, t.$3 = function() {
				if (!t.$1) {
					t.$1 = !0, t.$2 != null && (window.clearTimeout(t.$2), t.$2 = null);
					var e = document.getElementById("wa_web_initial_startup");
					e != null && e.parentNode && e.parentNode.removeChild(e);
				}
			}, t.state = {
				mode: o("WAWebStreamModel").Stream.mode,
				anotherSession: !1,
				takingOver: !1,
				apiCmd: void 0,
				locale: r("WAWebL10N").getLocale(),
				mainLoaded: !1,
				theme: o("WAWebThemeContext").getTheme(),
				systemThemeMode: o("WAWebUserPrefsGeneral").getSystemThemeMode(),
				isKeyboardUser: !1,
				initialLoadState: { initialLoadReady: !1 },
				startLogout: !1,
				stayInSync: !o("WAWebSocketModel").Socket.hasSynced,
				screenLocked: !1,
				temporaryBan: { banned: !1 }
			}, t.$11 = function(e) {
				t.state.isKeyboardUser !== e && t.setState({ isKeyboardUser: e });
			}, t.$17 = [], t.$19 = {
				up: function() {
					return t.$11(!0);
				},
				down: function() {
					return t.$11(!0);
				},
				left: function() {
					return t.$11(!0);
				},
				right: function() {
					return t.$11(!0);
				},
				home: function() {
					return t.$11(!0);
				},
				end: function() {
					return t.$11(!0);
				},
				"command+up": function() {
					return t.$11(!0);
				},
				"command+down": function() {
					return t.$11(!0);
				},
				pageUp: function() {
					return t.$11(!0);
				},
				pageDown: function() {
					return t.$11(!0);
				},
				tab: function() {
					return t.$11(!0);
				},
				"shift+tab": function() {
					return t.$11(!0);
				},
				"shift+?": function() {
					return t.$11(!0);
				}
			}, t.$5 = new (o("WAShiftTimer")).ShiftTimer(function(e) {
				e !== t.state.mode && t.setState({ mode: e });
			}), t.$6 = function() {
				var e, n = o("WAWebStreamModel").Stream.mode;
				if ((e = o("WAWebWamAppLaunchReporter").getAppLaunchReporter()) == null || e.initializeAppLaunchWamEvent(t.state.mode === o("WAWebStreamModel").StreamMode.SYNCING), t.state.mode === o("WAWebStreamModel").StreamMode.MAIN) {
					t.$5.forceRunNow(n);
					return;
				}
				t.$5.onOrBefore(0, n);
			}, t.$22 = function(e) {
				e.detail !== 0 && t.$11(!1), o("WAWebCmd").Cmd.windowMouseDown(e);
			}, t.$23 = function(e) {
				o("WAWebCmd").Cmd.windowClick(e);
			}, t.$10 = function(e) {
				var n = e.target;
				if (n && n.nodeName === "A") {
					var a = n.getAttribute("href");
					if (!r("isStringNullOrEmpty")(a) && Z(n)) {
						var i = o("WAWebApiParse").parseAPICmd(a);
						if (!(i.resultType === "INVALID" || i.resultType === "ADVERTISE" || i.resultType === "MANAGE_ADS" || i.resultType === "PAYMENT_LINK" || i.resultType === "OPEN_CATALOG" || i.resultType === "CALL_ACTIVE")) {
							i.resultType;
							var l = t.$21();
							t.$20() && J({
								cmdAndData: i,
								isExternal: !1,
								sessionId: l
							}) && (t.$24(i, l), e.preventDefault());
						}
					}
				}
			}, t.$24 = function(e, t) {
				if (e.resultType === o("WAWebApi").APICmd.GROUP_INVITE) new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent({
					deepLinkHasPhoneNumber: !1,
					deepLinkHasText: !0,
					deepLinkRequirePinEntry: !1
				}).commit();
				else if (e.resultType === o("WAWebApi").APICmd.MSG_SEND) {
					if (!r("isStringNullOrEmpty")(e.data.username)) return;
					var n = e.data.phone != null, a = e.data.text != null;
					new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent({
						deepLinkHasPhoneNumber: n,
						deepLinkHasText: a,
						deepLinkSessionId: t,
						deepLinkRequirePinEntry: !1
					}).commit();
				} else e.resultType === o("WAWebApi").APICmd.CATALOG ? new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent({
					deepLinkHasPhoneNumber: !0,
					deepLinkHasText: !1,
					deepLinkRequirePinEntry: !1
				}).commit() : e.resultType === o("WAWebApi").APICmd.PRODUCT && new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent({
					deepLinkHasPhoneNumber: !0,
					deepLinkHasText: !1,
					deepLinkRequirePinEntry: !1
				}).commit();
			}, t.$16 = function(e) {
				if (t.state.theme !== e) {
					var n = t.$4(e), a = function(t) {
						o("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(t, o("WAWebAssetLoader").LOAD_PRIORITY.THEME_ASSET_LOAD, !1).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(e) {
							o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
								"[WAWebApp] setTheme asset load failed id=",
								" theme=",
								""
							])), t.id, n).catching(r("getErrorSafe")(e)).sendLogs("asset-loader-theme-load-failed");
						});
					};
					for (var i of o("WAWebThemeContext").THEME_ASSETS[n]) a(i);
					o("WAWebThemeContext").setTheme(e), t.setState({ theme: e });
				}
			}, t.$4 = function(e) {
				return e === "light" ? o("WAWebConnModel").Conn.isSMB ? "smbLight" : "lightRefreshed" : e === "dark" ? o("WAWebConnModel").Conn.isSMB ? "smbDark" : "darkRefreshed" : e;
			}, t.$25 = function(e) {
				o("WAWebUserPrefsGeneral").setSystemThemeMode(e), t.setState({ systemThemeMode: e });
			}, t.$26 = function() {
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[reload] mdReloadPageOnTakeOver"]))), window.location.reload();
			}, t.$27 = function() {
				o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["DebouncedLoadingScreen: Ready for main screen"]))), t.setState({ stayInSync: !1 });
			}, t.$28 = r("WAMemoizeOne")(function(e) {
				var n = e.systemThemeMode, r = e.theme;
				return {
					theme: r,
					setTheme: t.$16,
					systemThemeMode: n,
					setSystemThemeMode: t.$25
				};
			}), babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
		}
		babelHelpers.inheritsLoose(t, e);
		var a = t.prototype;
		return a.componentDidMount = function() {
			var e = this;
			o("WAWebCrashlog").registerCrashlogUploadInformationalLoggingFunction(ee), o("WAWebPwaEventListeners").registerPwaDisplayModeListener(), o("WAWebPwaEventListeners").registerPwaInstallListener(), o("WAWebPwaManifest").updatePwaManifestOnMacOS(), o("WAWebMiscGatingUtils").checkDeviceIdTestAbProp(), r("WAWebAppMutex").setShouldLaunchSocket(!K), K && o("WAWebLaunchSocket").launchSocket(r("WAWebAppMutex").waitForCompletion());
			var t = this.state.theme;
			o("WAWebThemeContext").applyThemeToUI(t), ie().then(function(n) {
				o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(n);
				var r = e.$4(t);
				o("WAWebAssetLoaderSingleton").AssetLoader.loadInitialAssets(o("WAWebThemeContext").THEME_ASSETS[r]);
			}), ae().then(function() {
				if (e.state.anotherSession) {
					o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[md takeover] session detected, abort main load"])));
					return;
				}
				o("WAWebEventsWaitForMain").resolveMainLoaded(), e.setState({ mainLoaded: !0 });
			}).then(function() {
				return o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() ? null : Promise.all([
					F.load(),
					O.load(),
					ie()
				]);
			}).then(function(e) {
				if (e != null) {
					var t = e[0], n = e[1], r = e[2];
					o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(r), o("WAWebAssetLoaderSingleton").AssetLoader.initEmojiAsset(t.emojiAssetMapCreator(n())), o("WAWebEmojiAssetLoaderCompletionTracker").emojiCompletionTracker.resetPreloadState(), o("WAWebEmojiAssetLoaderCompletionTracker").emojiCompletionTracker.beginPreloadFallback();
				}
			});
			var a = this.props.listeners;
			if (a.add(o("WAWebCmd").Cmd, "initial_load_ready_from_bridge", function() {
				e.setState({ initialLoadState: {
					initialHistorySyncComplete: o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete(),
					initialLoadReady: !0
				} }), o("WAWebWamFingerprintReporter").logFingerprintToWam();
			}), a.add(o("WAWebStorageCmd").StorageCmd, "storage_not_enough_space", async function() {
				await o("WAWebModalManager").ModalManager.existsAsync() || o("WAWebModalManager").ModalManager.open(N.jsx(r("WAWebStorageQuotaExceededPopup.react"), {}), { blockClose: !0 });
			}), a.add(o("WAWebStorageCmd").StorageCmd, "cache_storage_open_failed", async function() {
				await o("WAWebModalManager").ModalManager.existsAsync() || o("WAWebModalManager").ModalManager.open(N.jsx(r("WAWebCacheStorageOpenFailedPopup.react"), {}), { blockClose: !0 });
			}), a.add(o("WAWebCmd").Cmd, "account_temporarily_banned_from_bridge", function(t) {
				var n;
				!((n = e.state.temporaryBan) != null && n.banned) && !(t != null && t.banned) && r("MetaConfig")._("351") || e.setState({ temporaryBan: t });
			}), o("WAWebVoipRevalidateOngoingCallsOnResume").initRevalidateOngoingCallsOnResume(), a.add(o("WAWebCmd").Cmd, "offline_delivery_end_from_bridge", function() {
				o("WAWebMediaWorkerProxy").prewarmMediaWasmWorker("mp4RepairMux"), o("WAWebGpcUoomAPI").checkAndTriggerUOOMMutation();
			}), a.add(o("WAWebCmd").Cmd, "service_unavailable_503_from_bridge", function() {
				e.setState({ serviceUnavailable: !0 });
			}), a.add(o("WAWebCmd").Cmd, "starting_logout_from_bridge", function() {
				e.setState({ startLogout: !0 });
			}), a.add(o("WAWebCmd").Cmd, "unexpected_logout_modal_from_bridge", async function(e) {
				if (!await o("WAWebModalManager").ModalManager.existsAsync()) {
					if (e == null || !Q.includes(e)) {
						o("WAWebSocketModel").Socket.logout(e);
						return;
					}
					o("WAWebModalManager").ModalManager.open(N.jsx(r("WAWebUnexpectedFatalErrorModal.react"), {
						reason: e,
						children: s._(
							/*BTDS*/
							""
						)
					}), { blockClose: !0 });
				}
			}), o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineStartT(), a.add(window, "beforeunload", function() {
				o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab != null && o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab() || r("WAWebAppMutex").unloadMutex();
			}), a.add(window, "unload", function() {
				o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab != null && o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab() || r("WAWebAppMutex").unloadMutex();
			}), a.add(window, "storage", function(t) {
				var n = r("WAWebAppMutex").storagePong(t);
				n && (o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[md takeover] tab taken over. stopping comms"]))), o("WAComms").getComms() && o("WAComms").closeSocketAndPreventRetry(), o("WAWebLoggerImpl").Logger.onTakeOver(), e.setState({
					takingOver: !1,
					anotherSession: !0
				}), e.$5.cancel());
			}), a.add(o("WAWebStreamModel").Stream, "change:mode", this.$6), (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 && a.add(o("WAWebSocketModel").Socket, "change:hasSynced", function() {
				o("WAWebSocketModel").Socket.hasSynced === !0 && e.state.apiCmd != null && e.$7(e.state.apiCmd);
			}), a.add(o("WAWebCmd").Cmd, "open_lock_screen_modal", function() {
				e.setState({ screenLocked: !0 });
			}), a.add(o("WAWebCmd").Cmd, "correct_passcode_lock_screen", async function() {
				e.setState({
					screenLocked: !1,
					stayInSync: !1
				});
			}), o("WAWebUserPrefsScreenLock").getScreenLockEnabled() && o("WAWebUserPrefsInfoStore").waNoiseInfo.cachedPasscodeDerivedKey == null && this.setState({ screenLocked: !0 }), r("WAWebURLUtils").canMuckHistory()) {
				var i = o("WAWebApiParse").parseAPICmd(window.location.href);
				if (i.resultType !== o("WAWebApi").APICmd.INVALID && o("WAWebPreLoginApiCmds").PRE_LOGIN_API_CMDS.includes(i.resultType)) {
					var l;
					o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["doing maybeExecApiCmd (pre-login)"])));
					var u = (l = i.data) == null ? void 0 : l.url;
					this.$7(i), window.history.replaceState({}, "", u != null ? u : "/");
				} else o("WAWebABPropsCache").waitForABPropConfigsReady().then(function() {
					if (i.resultType !== o("WAWebApi").APICmd.INVALID && i.resultType !== o("WAWebApi").APICmd.ADVERTISE && i.resultType !== o("WAWebApi").APICmd.MANAGE_ADS && i.resultType !== o("WAWebApi").APICmd.MESSAGE_YOURSELF && i.resultType !== o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING && i.resultType !== o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL && i.resultType !== o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE && i.resultType !== o("WAWebApi").APICmd.SET_ABOUT && i.resultType !== o("WAWebApi").APICmd.STATUS_POST && i.resultType !== o("WAWebApi").APICmd.PAYMENT_LINK && i.resultType !== o("WAWebApi").APICmd.OPEN_CATALOG && i.resultType !== o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA && i.resultType !== o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING && i.resultType !== o("WAWebApi").APICmd.NEW_CHAT && i.resultType !== o("WAWebApi").APICmd.NEW_CALL && i.resultType !== o("WAWebApi").APICmd.CHAT_OPEN && i.resultType !== o("WAWebApi").APICmd.CALL_ACTIVE && i.resultType !== o("WAWebApi").APICmd.APP_OPEN && i.resultType !== o("WAWebApi").APICmd.AVATAR_STICKERPACK) {
						var t, n = i.data.url;
						((t = i.data) == null ? void 0 : t.url) != null && delete i.data.url, o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["doing maybeExecApiCmd (post-abprop-init)"]))), e.$7(i), window.history.replaceState({}, "", n != null ? n : "/");
					}
				});
			}
			if (a.add(r("WAWebL10N"), "locale_change", function() {
				o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[app] componentDidMount:rerenderUI locale change"]))), o("WAWebClock").Clock.initIs24HourBasedOnLocale(), e.animate = !1, e.setState({ locale: r("WAWebL10N").getLocale() + "#" + r("WAWeb-moment").locale() });
			}), this.$8(), o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[app] componentDidMount:visibilityState: ", ""])), document.visibilityState), document.prerendering === !0 ? (o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[app]  prerendering: waiting for page to activate"]))), r("WAWebEventsWaitForEvent")(document, "prerenderingchange").catch(function() {
				o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[app] prerendering: prerenderingchange err"])));
			}).finally(function() {
				o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[app]  prerendering: page is active"]))), e.$9(0);
			})) : document.visibilityState !== "visible" ? o("WAPromiseTimeout").promiseTimeout(r("WAWebEventsWaitForEvent")(document, "visibilitychange"), 5e3).then(function() {
				return e.$9(0);
			}).catch(function() {
				return e.$9(0);
			}) : this.$9(0), this.props.listeners.add(window, "click", this.$10, { capture: !0 }), this.props.listeners.add(window, "blur", function() {
				e.$11(!1);
			}), o("WAWebUpdaterUpdatePoll").updatePoll.poll(o("WAWebUpdaterUpdatePoll").checkForUpdates), this.$12(), this.$13(), this.$14(), this.$15(), document.createElement = (function(e) {
				return function(t, n) {
					if (n === void 0 && (n = {}), t.toLowerCase() === "iframe") {
						o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[iframe] added sandbox attrs for security"])));
						var r = e(t, n);
						return r.sandbox = "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads", o("WAWebUA").UA.hasCredentiallessIframeSupport && (o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[iframe] added credentialless attr"]))), r.credentialless = !0), r;
					}
					return e(t, n);
				};
			})(document.createElement.bind(document)), this.props.listeners.add(r("WAWebSystemTheme"), "system_theme_change", function(t) {
				e.state.systemThemeMode && e.$16(t);
			}), a.add(o("WAWebStreamModel").Stream, "change:isHardRefresh", async function() {
				!r("WAWebEnvironment").isWindows && o("WAWebStreamModel").Stream.isHardRefresh && o("WAWebAppScreen").getScreen(e.state) === o("WAWebAppScreen").AppScreen.MAIN && !await o("WAWebModalManager").ModalManager.existsAsync() && o("WAWebModalManager").ModalManager.open(N.jsx(r("WAWebHardRefreshModal.react"), {}));
			}), (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0) this.$2 = window.setTimeout(this.$3, te);
			else {
				var c = document.getElementById("wa_web_initial_startup");
				c != null && c.parentNode && c.parentNode.removeChild(c);
			}
		}, a.$13 = function() {
			if (o("WAWebConnModel").Conn.isSMB) {
				var e;
				(e = document.body) == null || e.classList.add("smb-colors");
			}
		}, a.$18 = function() {
			return this.state.systemThemeMode === !0 ? o("WAWebConnModel").Conn.isSMB ? o("WDSThemes").WDSSMBSystemTheme : o("WDSThemes").WDSSystemTheme : this.state.theme === "dark" ? o("WAWebConnModel").Conn.isSMB ? o("WDSThemes").WDSSMBDarkTheme : o("WDSThemes").WDSDarkTheme : o("WAWebConnModel").Conn.isSMB ? o("WDSThemes").WDSSMBLightTheme : o("WDSThemes").WDSLightTheme;
		}, a.$14 = function() {
			var e = document.documentElement;
			if (e != null) {
				var t = this.$18(), n = ($ || ($ = r("stylex")))(t).split(" ").filter(Boolean);
				if (this.$17.length > 0) {
					var o;
					(o = e.classList).remove.apply(o, this.$17);
				}
				if (n.length > 0) {
					var a;
					(a = e.classList).add.apply(a, n);
				}
				this.$17 = n;
			}
		}, a.$15 = function() {
			o("WAWebRobotoVariableFontLoadable").applyRobotoFont();
		}, a.componentDidUpdate = function(t, a) {
			(n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 && !this.$1 && o("WAWebAppScreen").getScreen(this.state) === o("WAWebAppScreen").AppScreen.MAIN && this.$3(), a.anotherSession === !0 && this.state.anotherSession === !1 ? r("WAWebWAWCStorage").openDB().catch(function(e) {
				o("WALogger").WARN(I || (I = babelHelpers.taggedTemplateLiteralLoose(["Failed to open indexeddb: ", ""])), String(e));
			}) : a.anotherSession === !1 && this.state.anotherSession === !0 && r("WAWebWAWCStorage").idb().then(function(e) {
				r("WAWebBrokerGlobalAppState").takeOver = !0, e.close(), o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["[storage] closed due to take over"])));
			}).catch(r("WAWebNoop")), this.$7(this.state.apiCmd), this.state.mode !== o("WAWebStreamModel").StreamMode.MAIN && (this.animate = !0), this.$14(), this.$12();
		}, a.componentWillUnmount = function() {
			this.$5.cancel(), this.$2 != null && (window.clearTimeout(this.$2), this.$2 = null);
		}, a.$9 = async function(t, n) {
			var e = this;
			n === void 0 && (n = !1), n && o("WAWebUpdater").Updater.shouldForceUpdateOnTakeOver() && o("WAWebUpdater").Updater.restart();
			var a = n ? r("WAWebAppMutex").takeoverLocal(t) : r("WAWebAppMutex").init(t), i = await a.catch(function(t) {
				return e.setState({ takingOver: !0 }), e.$9(t, !0);
			}) === !0;
			o("WAWebLoggerImpl").Logger.isTakeOver = o("WAWebLoggerImpl").Logger.isTakeOver || i, this.setState(function(e) {
				return {
					takingOver: !1,
					anotherSession: e.anotherSession || i
				};
			});
		}, a.$7 = function(t) {
			if (t && !(t.resultType === "ADVERTISE" || t.resultType === "MANAGE_ADS" || t.resultType === "OPEN_CATALOG")) {
				if (t.resultType, this.$20()) {
					var e = this.$21();
					J({
						cmdAndData: t,
						isExternal: !0,
						sessionId: e
					}), this.state.apiCmd != null && this.setState({ apiCmd: null });
					return;
				}
				t !== this.state.apiCmd && this.setState({ apiCmd: t });
			}
		}, a.$20 = function() {
			return X != null && o("WAWebAppScreen").getScreen(this.state) === o("WAWebAppScreen").AppScreen.MAIN && ((n("cr:11133") == null ? void 0 : n("cr:11133")()) !== !0 || o("WAWebSocketModel").Socket.hasSynced === !0);
		}, a.$12 = function() {
			this.state.mode !== o("WAWebStreamModel").StreamMode.SYNCING && o("WAWebWamPageLoadReporter").logFirstRenderMountTimeOnce();
		}, a.$8 = function() {
			var e = this;
			r("WAWebAlarm").setLocalTimeout(function() {
				o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["[app] registerYesterdayTimer:rerenderUI relative timestamps"]))), o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
					"Local Clock: ",
					", Skew: ",
					""
				])), Date.now(), o("WAWebClock").Clock.getSkew()), o("WAWebCmd").Cmd.midnight(), e.$8();
			}, r("WAWeb-moment")().endOf("day").valueOf());
		}, a.$21 = function() {
			return Math.floor(2147483648 * Math.random()).toString();
		}, a.render = function() {
			var e, t = this.props.fullScreenEntryPoint, n = o("WAWebAppScreen").getScreen(this.state);
			if (n === o("WAWebAppScreen").AppScreen.MAIN && t != null && V != null) return N.jsx(V, {
				entryPointReference: t,
				props: H
			});
			var a = q == null || (e = q(r("WAWebWindowsHybridBridgeInitiator").WAWebApp)) == null ? void 0 : e.systemIntegrationsBridge;
			a != null && (a.updateCurrentWebAppScreen == null || a.updateCurrentWebAppScreen(n)), o("WAWebWamPageLoadReporter").maybeLogInitialScreenRenderStart(n);
			var i = this.state.isKeyboardUser, l = o("WAWebAppUI").getAppUI({
				Main: X,
				state: this.state,
				screen: n,
				contextMenuRef: this.contextMenuRef,
				animate: this.animate,
				handleReadyForMainScreen: this.$27,
				mdReloadPageOnTakeOver: this.$26
			}), s = l.appScreenUI, u = l.requiresBackendCheck, c = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
				"app-wrapper-web": !0,
				"safari-fix": o("WAWebStylesEnv").hasSafariFix,
				"os-mac": o("WAWebStylesEnv").isOSMac,
				"os-win": o("WAWebStylesEnv").isOSWin,
				"keyboard-user": i
			});
			u && X != null && X.notificationBackend.shutdownAsNeeded();
			var d = n === o("WAWebAppScreen").AppScreen.STARTUP || n === o("WAWebAppScreen").AppScreen.SYNCING, m = d ? "loading-screen" : this.state.locale;
			return N.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
				value: this.$28({
					theme: this.state.theme,
					systemThemeMode: this.state.systemThemeMode
				}),
				children: N.jsxs(o("WAWebAppRootInteractionContext.react").WAWebAppRootInteractionContextProvider, { children: [o("WAWebPathfinderLogger").isPathfinderLoggingEnabled() ? N.jsx(r("WAWebPathfinder.react"), {}) : null, N.jsx(r("WAWebKeyboardContext").Provider, {
					value: {
						isKeyboardUser: i,
						setIsKeyboardUser: this.$11
					},
					children: N.jsx(r("WAWebWindowSizeProvider.react"), { children: N.jsx(o("WAWebDesktopSharerContext.react").WAWebDesktopSharerProviderGate, { children: N.jsx(o("WAWebPrivacyModeContext").WAWebPrivacyModeProvider, { children: N.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
						name: "app-wrapper",
						type: "fatal",
						fallback: o("WAWebErrorBoundaryPopup.react").errorBoundaryPopupFallback,
						sendLogs: !0,
						children: N.jsx(o("WAWebUimUie.react").UIE, {
							displayName: "App",
							uimState: o("WAWebUim").UIMState.INACTIVE,
							children: N.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
								handlers: this.$19,
								className: c,
								xstyle: o("WAWebApp.stylex").styles.wrapper,
								tabIndex: null,
								onMouseDownCapture: this.$22,
								onClickCapture: this.$23,
								children: N.jsxs(N.Fragment, { children: [N.jsx(o("WAWebPopover.react").PopoverPortalBucket, {}), N.jsx(o("WDSContextualLayer.react").WDSContextualLayer, { children: s.map(function(e) {
									var t = e.errorBoundaryName, n = e.ui;
									return N.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
										name: t,
										fallback: s.length === 1 ? o("WAWebErrorBoundaryPopup.react").errorBoundaryPopupFallback : void 0,
										children: n
									}, t);
								}) })] })
							}, m)
						})
					}) }) }) })
				})] })
			});
		}, t;
	})(w), re = o("WAWebListenerHoc_DEPRECATED").ListenerHOC(ne);
	function oe() {
		var e = o("react-compiler-runtime").c(2), t = o("WAWebFullScreenEntryPointContext").useWAWebFullScreenEntryPoint(), n;
		return e[0] !== t ? (n = N.jsx(re, { fullScreenEntryPoint: t }), e[0] = t, e[1] = n) : n = e[1], n;
	}
	async function ae() {
		var e = await Promise.all([B.load(), ie()]), t = e[0], n = e[1];
		o("WAWebWamPageLoadReporter").mainScriptTimer.start(), X = t(n), o("WAWebWamPageLoadReporter").mainScriptTimer.end();
	}
	function ie() {
		return o("WAWebConnModel").Conn.platform ? Promise.resolve(o("WAWebConnModel").Conn.platform) : new Promise(function(e) {
			var t = function() {
				var n = o("WAWebConnModel").Conn.platform;
				n != null && (o("WAWebConnModel").Conn.off("change:platform", t), e(n));
			};
			o("WAWebConnModel").Conn.on("change:platform", t);
		});
	}
	l.hasPendingActions = Y, l.App = oe;
}), 226);
