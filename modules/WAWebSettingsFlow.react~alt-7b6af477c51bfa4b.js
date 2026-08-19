__d("WAWebSettingsFlow.react", [
	"JSResourceForInteraction",
	"WAWebABProps",
	"WAWebAccountSettingsDrawer.react",
	"WAWebBizProfileGatingUtils",
	"WAWebBizToolsFlowLoadable",
	"WAWebBlockedDrawer.react",
	"WAWebBugnubLoadable",
	"WAWebCallsNotificationsDrawer.react",
	"WAWebChatsSettingsDrawer.react",
	"WAWebConfirmLogoutDialogV2.react",
	"WAWebConfirmLogoutModal.react",
	"WAWebConnModel",
	"WAWebConsumerPaymentsHomeDrawer.react",
	"WAWebConsumerPaymentsHomeLogger",
	"WAWebConsumerSeeAllTransactionsDrawer.react",
	"WAWebConsumerSharePixContactPicker.react",
	"WAWebContactCollection",
	"WAWebCrashlog",
	"WAWebCurrentUser",
	"WAWebDefaultEphemeralityDrawer.react",
	"WAWebDeveloperMenuConstants",
	"WAWebDirectMessagesNotificationsDrawer.react",
	"WAWebDownloadLogsPopup.react",
	"WAWebDrawerManager",
	"WAWebForceFlushWamBuffers",
	"WAWebGdprRequestAccountInfoSettingsDrawer.react",
	"WAWebGetBizProfileDrawerContent",
	"WAWebGlobalChatThemeDrawer.react",
	"WAWebGroupMessagesNotificationsDrawer.react",
	"WAWebHelpDrawer.react",
	"WAWebKeyboardShortcutsPopup.react",
	"WAWebLabelFlowLoadable",
	"WAWebLanguageDrawer.react",
	"WAWebLazyLoadedRetriable",
	"WAWebMediaAutoDownloadDrawer.react",
	"WAWebMediaUploadQualityDrawer.react",
	"WAWebModalManager",
	"WAWebNewsletterDSAReportsFlow.react",
	"WAWebNotificationsDrawer.react",
	"WAWebPrivacyModeBlurPresetDrawer.react",
	"WAWebPrivacyModeCustomizePanel.react",
	"WAWebPrivacySettingsDrawer.react",
	"WAWebPrivacySettingsLastSeenOnlineDrawer.react",
	"WAWebPrivacySettingsStatusPostDrawer.react",
	"WAWebPrivacyVisibilityEditDrawer.react",
	"WAWebProfilePicThumbCollection",
	"WAWebSMBDataSharingDrawer.react",
	"WAWebScreenLockDrawer.react",
	"WAWebSecurityDrawer.react",
	"WAWebSettingsConst",
	"WAWebSettingsDrawer.react",
	"WAWebSettingsModel",
	"WAWebStatusUpdatesNotificationsDrawer.react",
	"WAWebTextStatusCollection",
	"WAWebThemePopup.react",
	"WAWebUserPrefsMeUser",
	"WAWebWallpaperDrawer.react",
	"WAWebWamEnumBusinessToolsEntryPointType",
	"WAWebWamEnumDisappearingModeEntryPointType",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSmbDataSharingConsentSettingEntryPoint",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSDialogBridge",
	"cr:17209",
	"cr:1923",
	"cr:1977",
	"cr:2404",
	"cr:7753",
	"cr:8751",
	"gkx",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		switch (e) {
			case o("WAWebSettingsConst").SettingsSteps.Theme: return o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebThemePopup.react"), {})), !0;
			case o("WAWebSettingsConst").SettingsSteps.KeyboardShortcuts: return o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebKeyboardShortcutsPopup.react"), {})), !0;
			case o("WAWebSettingsConst").SettingsSteps.Logout: return o("WAWebForceFlushWamBuffers").forceFlushAllWamAndQplBuffers(), o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(s.jsx(r("WAWebConfirmLogoutDialogV2.react"), { checkUnsent: !0 })) : o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebConfirmLogoutModal.react"), { checkUnsent: !0 })), !0;
			case o("WAWebSettingsConst").SettingsSteps.Bugnub: return r("gkx")("9092") && r("WAWebBugnubLoadable")(), !0;
			case o("WAWebSettingsConst").SettingsSteps.DownloadLogs: return o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebDownloadLogsPopup.react"), {})), !0;
			case o("WAWebSettingsConst").SettingsSteps.DeveloperInfraSettings: return o("WAWebCurrentUser").isEmployee() && r("WAWebLazyLoadedRetriable")(async function() {
				var e = await r("JSResourceForInteraction")("WAWebMdDebugSetting.react").__setRef("WAWebSettingsFlow.react").load();
				return e;
			}, "MdDebugSetting")().then(function(e) {
				o("WAWebModalManager").ModalManager.open(s.jsx(e, {}));
			}), !0;
			default: return !1;
		}
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(155), a = e.initialStep, i = e.onEnd, l = a === void 0 ? o("WAWebSettingsConst").SettingsSteps.Settings : a, d = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), _;
		t[0] !== i ? (_ = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: i
		}, t[0] = i, t[1] = _) : _ = t[1];
		var f = o("useWAWebFlow").useFlow(l, _), g = f[0], h = f[1], y;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = o("WAWebBizProfileGatingUtils").businessProfileRefreshEnabled(), t[2] = y) : y = t[2];
		var C = y, b = u(null), v = b[0], S = b[1], R = r("useWAWebFocusOnMount")();
		if (!h.step) return null;
		if (c(h.step)) {
			h.end();
			return;
		}
		var L;
		t[3] !== h ? (L = function() {
			h.pop();
		}, t[3] = h, t[4] = L) : L = t[4];
		var E = L, k;
		t[5] !== h ? (k = function(t) {
			c(t) || (t === o("WAWebSettingsConst").SettingsSteps.Help && o("WAWebCrashlog").upload({
				reason: "help-page-opened",
				isHighPri: !0,
				logType: o("WAWebCrashlog").LogType.SUPPORT
			}), t === o("WAWebSettingsConst").SettingsSteps.PaymentsHome && o("WAWebConsumerPaymentsHomeLogger").logPaymentsRowClick(), h.push(t));
		}, t[5] = h, t[6] = k) : k = t[6];
		var I = k, T;
		e: switch (h.step) {
			case o("WAWebSettingsConst").SettingsSteps.Settings: {
				var D;
				t[7] !== h ? (D = function() {
					C ? o("WAWebDrawerManager").DrawerManager.openDrawerMid(r("WAWebGetBizProfileDrawerContent")(o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS, p)) : h.push(o("WAWebSettingsConst").SettingsSteps.Profile);
				}, t[7] = h, t[8] = D) : D = t[8], T = s.jsx(r("WAWebSettingsDrawer.react"), {
					profileId: d,
					onProfile: D,
					onClose: E,
					onSettingClick: I
				});
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Wallpaper: {
				var x;
				t[9] !== E ? (x = s.jsx(r("WAWebWallpaperDrawer.react"), {
					chat: null,
					onClose: E
				}), t[9] = E, t[10] = x) : x = t[10], T = x;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.ChatTheme: {
				var $;
				t[11] !== E ? ($ = s.jsx(r("WAWebGlobalChatThemeDrawer.react"), { onClose: E }), t[11] = E, t[12] = $) : $ = t[12], T = $;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings: {
				var P;
				t[13] !== E ? (P = s.jsx(r("WAWebGdprRequestAccountInfoSettingsDrawer.react"), {
					settings: r("WAWebSettingsModel"),
					onClose: E
				}), t[13] = E, t[14] = P) : P = t[14], T = P;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.NewsletterReports: {
				var N;
				t[15] !== E ? (N = s.jsx(r("WAWebNewsletterDSAReportsFlow.react"), { onClose: E }), t[15] = E, t[16] = N) : N = t[16], T = N;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Blocked: {
				var M;
				t[17] !== E ? (M = s.jsx(r("WAWebBlockedDrawer.react"), { onClose: E }), t[17] = E, t[18] = M) : M = t[18], T = M;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Profile: {
				var w = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(d), A = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(d), F = o("WAWebContactCollection").ContactCollection.assertGet(d), O;
				t[19] !== F || t[20] !== E || t[21] !== A || t[22] !== w ? (O = s.jsx(n("cr:1923"), {
					status: w,
					profilePicThumb: A,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS,
					contact: F,
					conn: o("WAWebConnModel").Conn,
					onClose: E,
					isInitialStep: !1
				}), t[19] = F, t[20] = E, t[21] = A, t[22] = w, t[23] = O) : O = t[23], T = O;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Notifications: {
				var B, W, q, U, V, H;
				t[24] !== h ? (W = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.ShowNotificationBanner);
				}, q = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.TaskbarNotificationSettings);
				}, U = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.Calls);
				}, V = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.DirectMessages);
				}, H = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.GroupMessages);
				}, B = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.StatusUpdates);
				}, t[24] = h, t[25] = B, t[26] = W, t[27] = q, t[28] = U, t[29] = V, t[30] = H) : (B = t[25], W = t[26], q = t[27], U = t[28], V = t[29], H = t[30]);
				var G;
				t[31] !== E || t[32] !== B || t[33] !== W || t[34] !== q || t[35] !== U || t[36] !== V || t[37] !== H ? (G = s.jsx(r("WAWebNotificationsDrawer.react"), {
					onClose: E,
					onShowNotificationBannerClick: W,
					onTaskbarNotificationSettingsClick: q,
					onOpenCalls: U,
					onOpenDirectMessages: V,
					onOpenGroupMessages: H,
					onOpenStatusUpdates: B
				}), t[31] = E, t[32] = B, t[33] = W, t[34] = q, t[35] = U, t[36] = V, t[37] = H, t[38] = G) : G = t[38], T = G;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.DirectMessages: {
				var z;
				t[39] !== E ? (z = s.jsx(r("WAWebDirectMessagesNotificationsDrawer.react"), { onClose: E }), t[39] = E, t[40] = z) : z = t[40], T = z;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.GroupMessages: {
				var j;
				t[41] !== E ? (j = s.jsx(r("WAWebGroupMessagesNotificationsDrawer.react"), { onClose: E }), t[41] = E, t[42] = j) : j = t[42], T = j;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.StatusUpdates: {
				var K;
				t[43] !== E ? (K = s.jsx(r("WAWebStatusUpdatesNotificationsDrawer.react"), { onClose: E }), t[43] = E, t[44] = K) : K = t[44], T = K;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Calls: {
				var Q;
				t[45] !== E ? (Q = s.jsx(r("WAWebCallsNotificationsDrawer.react"), { onClose: E }), t[45] = E, t[46] = Q) : Q = t[46], T = Q;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Language: {
				var X;
				t[47] !== E ? (X = s.jsx(r("WAWebLanguageDrawer.react"), { onClose: E }), t[47] = E, t[48] = X) : X = t[48], T = X;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Lists: {
				var Y;
				t[49] === Symbol.for("react.memo_cache_sentinel") ? (Y = s.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
					isInitialStep: !1,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
				}), t[49] = Y) : Y = t[49], T = Y;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload: {
				var J;
				t[50] !== E ? (J = s.jsx(r("WAWebMediaAutoDownloadDrawer.react"), { onClose: E }), t[50] = E, t[51] = J) : J = t[51], T = J;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.MediaUploadQuality: {
				var Z;
				t[52] !== E ? (Z = s.jsx(r("WAWebMediaUploadQualityDrawer.react"), { onClose: E }), t[52] = E, t[53] = Z) : Z = t[53], T = Z;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Security: {
				var ee;
				t[54] !== E ? (ee = s.jsx(r("WAWebSecurityDrawer.react"), { onClose: E }), t[54] = E, t[55] = ee) : ee = t[55], T = ee;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditLastSeen: {
				var te;
				t[56] !== E ? (te = s.jsx(r("WAWebPrivacySettingsLastSeenOnlineDrawer.react"), { onClose: E }), t[56] = E, t[57] = te) : te = t[57], T = te;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditProfilePicture: {
				var ne;
				t[58] !== E ? (ne = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
					onClose: E,
					category: "profilePicture"
				}), t[58] = E, t[59] = ne) : ne = t[59], T = ne;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditAbout: {
				var re;
				t[60] !== E ? (re = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
					onClose: E,
					category: "about"
				}), t[60] = E, t[61] = re) : re = t[61], T = re;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditStatus: {
				var oe;
				t[62] !== E ? (oe = s.jsx(r("WAWebPrivacySettingsStatusPostDrawer.react"), { onClose: E }), t[62] = E, t[63] = oe) : oe = t[63], T = oe;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditGroupAdd: {
				var ae;
				t[64] !== E ? (ae = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
					onClose: E,
					category: "groupAdd"
				}), t[64] = E, t[65] = ae) : ae = t[65], T = ae;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacySettings: {
				var ie;
				t[66] !== h ? (ie = function(t) {
					t: switch (t) {
						case "lastSeen": {
							h.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditLastSeen);
							break t;
						}
						case "about": {
							h.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditAbout);
							break t;
						}
						case "groupAdd": {
							h.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditGroupAdd);
							break t;
						}
						case "profilePicture": h.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditProfilePicture);
					}
				}, t[66] = h, t[67] = ie) : ie = t[67];
				var le = ie, se;
				t[68] !== h ? (se = function() {
					h.push(o("WAWebSettingsConst").SettingsSteps.Blocked);
				}, t[68] = h, t[69] = se) : se = t[69];
				var ue = se, ce;
				t[70] !== h ? (ce = function() {
					h.push(o("WAWebSettingsConst").SettingsSteps.DefaultEphemerality);
				}, t[70] = h, t[71] = ce) : ce = t[71];
				var de = ce, me;
				t[72] !== h ? (me = function() {
					h.push(o("WAWebSettingsConst").SettingsSteps.ScreenLock);
				}, t[72] = h, t[73] = me) : me = t[73];
				var pe = me, _e;
				t[74] !== h ? (_e = function() {
					h.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditStatus);
				}, t[74] = h, t[75] = _e) : _e = t[75];
				var fe = _e, ge;
				t[76] !== h ? (ge = function() {
					h.push(o("WAWebSettingsConst").SettingsSteps.PrivacyScreenCustomize);
				}, t[76] = h, t[77] = ge) : ge = t[77];
				var he = ge, ye;
				t[78] !== E || t[79] !== ue || t[80] !== de || t[81] !== he || t[82] !== le || t[83] !== pe || t[84] !== fe ? (ye = s.jsx(o("WAWebPrivacySettingsDrawer.react").PrivacySettingsDrawer, {
					onClose: E,
					onOpenVisibilityEditDrawer: le,
					onOpenBlockedContacts: ue,
					onOpenEphemeralityDrawer: de,
					onOpenPrivacyScreenCustomize: he,
					onOpenScreenLockDrawer: pe,
					onOpenStatusPrivacySettingDrawer: fe
				}), t[78] = E, t[79] = ue, t[80] = de, t[81] = he, t[82] = le, t[83] = pe, t[84] = fe, t[85] = ye) : ye = t[85], T = ye;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacyScreenCustomize: {
				var Ce;
				t[86] !== h ? (Ce = function(t) {
					S(t), h.push(o("WAWebSettingsConst").SettingsSteps.PrivacyScreenBlurPreset);
				}, t[86] = h, t[87] = Ce) : Ce = t[87];
				var be;
				t[88] !== E || t[89] !== Ce ? (be = s.jsx(r("WAWebPrivacyModeCustomizePanel.react"), {
					onBack: E,
					onOpenBlurPreset: Ce
				}), t[88] = E, t[89] = Ce, t[90] = be) : be = t[90], T = be;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacyScreenBlurPreset: {
				if (v != null) {
					var ve;
					t[91] !== v || t[92] !== E ? (ve = s.jsx(r("WAWebPrivacyModeBlurPresetDrawer.react"), {
						category: v,
						onBack: E
					}), t[91] = v, t[92] = E, t[93] = ve) : ve = t[93], T = ve;
				}
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.DefaultEphemerality: {
				var Se;
				t[94] !== E ? (Se = s.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
					onClose: E,
					entryPoint: o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.ACCOUNT_SETTINGS
				}), t[94] = E, t[95] = Se) : Se = t[95], T = Se;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Help: {
				var Re;
				t[96] !== h ? (Re = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.NewsletterReports);
				}, t[96] = h, t[97] = Re) : Re = t[97];
				var Le;
				t[98] !== E || t[99] !== Re ? (Le = s.jsx(r("WAWebHelpDrawer.react"), {
					onClose: E,
					onNewsletterReports: Re
				}), t[98] = E, t[99] = Re, t[100] = Le) : Le = t[100], T = Le;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Developer: {
				if (n("cr:8751")) {
					var Ee;
					t[101] !== E ? (Ee = s.jsx(n("cr:8751"), { onBack: E }), t[101] = E, t[102] = Ee) : Ee = t[102], T = Ee;
				}
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.DeveloperABProps: {
				if (n("cr:8751")) {
					var ke;
					t[103] !== E ? (ke = s.jsx(n("cr:8751"), {
						onBack: E,
						initialStep: o("WAWebDeveloperMenuConstants").DeveloperMenu.ABProps
					}), t[103] = E, t[104] = ke) : ke = t[104], T = ke;
				}
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.DeveloperGroupABProps: {
				if (n("cr:8751")) {
					var Ie;
					t[105] !== E ? (Ie = s.jsx(n("cr:8751"), {
						onBack: E,
						initialStep: o("WAWebDeveloperMenuConstants").DeveloperMenu.GroupABProps
					}), t[105] = E, t[106] = Ie) : Ie = t[106], T = Ie;
				}
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.BusinessTools: {
				var Te;
				t[107] === Symbol.for("react.memo_cache_sentinel") ? (Te = s.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, { entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_SETTINGS }), t[107] = Te) : Te = t[107], T = Te;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PaymentsHome: {
				var De, xe;
				t[108] !== h ? (De = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.PaymentsTransactions);
				}, xe = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.PaymentsSharePix);
				}, t[108] = h, t[109] = De, t[110] = xe) : (De = t[109], xe = t[110]);
				var $e;
				t[111] !== E || t[112] !== De || t[113] !== xe ? ($e = s.jsx(r("WAWebConsumerPaymentsHomeDrawer.react"), {
					onClose: E,
					onSeeAllTransactions: De,
					onSharePix: xe
				}), t[111] = E, t[112] = De, t[113] = xe, t[114] = $e) : $e = t[114], T = $e;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PaymentsTransactions: {
				var Pe;
				t[115] !== E ? (Pe = s.jsx(r("WAWebConsumerSeeAllTransactionsDrawer.react"), { onBack: E }), t[115] = E, t[116] = Pe) : Pe = t[116], T = Pe;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.PaymentsSharePix: {
				var Ne;
				t[117] !== E ? (Ne = s.jsx(r("WAWebConsumerSharePixContactPicker.react"), { onBack: E }), t[117] = E, t[118] = Ne) : Ne = t[118], T = Ne;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.DataSharing: {
				var Me;
				t[119] !== E ? (Me = s.jsx(r("WAWebSMBDataSharingDrawer.react"), {
					onClose: E,
					entrypoint: o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint").SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT.ENTRY_POINT_SETTINGS_SCREEN
				}), t[119] = E, t[120] = Me) : Me = t[120], T = Me;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.ScreenLock: {
				var we;
				t[121] !== E ? (we = s.jsx(r("WAWebScreenLockDrawer.react"), { onBack: E }), t[121] = E, t[122] = we) : we = t[122], T = we;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Account: {
				var Ae, Fe;
				t[123] !== h ? (Ae = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.Security);
				}, Fe = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings);
				}, t[123] = h, t[124] = Ae, t[125] = Fe) : (Ae = t[124], Fe = t[125]);
				var Oe;
				t[126] !== E || t[127] !== Ae || t[128] !== Fe ? (Oe = s.jsx(r("WAWebAccountSettingsDrawer.react"), {
					onClickSecurity: Ae,
					onClickRequestAccountInfo: Fe,
					onClose: E
				}), t[126] = E, t[127] = Ae, t[128] = Fe, t[129] = Oe) : Oe = t[129], T = Oe;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.Chats: {
				var Be;
				t[130] !== h ? (Be = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.ChatTheme);
				}, t[130] = h, t[131] = Be) : Be = t[131];
				var We, qe, Ue;
				t[132] !== h ? (We = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.Wallpaper);
				}, qe = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload);
				}, Ue = function() {
					return h.push(o("WAWebSettingsConst").SettingsSteps.MediaUploadQuality);
				}, t[132] = h, t[133] = We, t[134] = qe, t[135] = Ue) : (We = t[133], qe = t[134], Ue = t[135]);
				var Ve;
				t[136] !== E || t[137] !== Be || t[138] !== We || t[139] !== qe || t[140] !== Ue ? (Ve = s.jsx(r("WAWebChatsSettingsDrawer.react"), {
					onClickChatTheme: Be,
					onClickTheme: m,
					onClickWallpaper: We,
					onClickMediaAutoDownload: qe,
					onClickMediaUploadQuality: Ue,
					onClose: E
				}), t[136] = E, t[137] = Be, t[138] = We, t[139] = qe, t[140] = Ue, t[141] = Ve) : Ve = t[141], T = Ve;
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.ShowNotificationBanner: {
				if (n("cr:7753")) {
					var He;
					t[142] !== E ? (He = s.jsx(n("cr:7753"), { onClose: E }), t[142] = E, t[143] = He) : He = t[143], T = He;
				}
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.TaskbarNotificationSettings: {
				if (n("cr:2404")) {
					var Ge;
					t[144] !== E ? (Ge = s.jsx(n("cr:2404"), { onClose: E }), t[144] = E, t[145] = Ge) : Ge = t[145], T = Ge;
				}
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings: {
				if (n("cr:1977")) {
					var ze;
					t[146] !== E ? (ze = s.jsx(n("cr:1977"), { onClose: E }), t[146] = E, t[147] = ze) : ze = t[147], T = ze;
				}
				break e;
			}
			case o("WAWebSettingsConst").SettingsSteps.WinDevicesSettings: if (n("cr:17209")) {
				var je;
				t[148] !== E ? (je = s.jsx(n("cr:17209"), { onClose: E }), t[148] = E, t[149] = je) : je = t[149], T = je;
			}
			default:
		}
		var Ke;
		return t[150] !== g || t[151] !== T || t[152] !== h || t[153] !== R ? (Ke = s.jsx(g, {
			ref: R,
			flow: h,
			children: T
		}), t[150] = g, t[151] = T, t[152] = h, t[153] = R, t[154] = Ke) : Ke = t[154], Ke;
	}
	function m() {
		return c(o("WAWebSettingsConst").SettingsSteps.Theme);
	}
	function p() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
	}
	l.SettingsFlow = d;
}), 98);
