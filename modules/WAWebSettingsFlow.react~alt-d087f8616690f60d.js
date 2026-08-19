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
	"asyncToGeneratorRuntime",
	"cr:17209",
	"cr:1923",
	"cr:1977",
	"cr:2404",
	"cr:7753",
	"cr:8751",
	"gkx",
	"react",
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
			case o("WAWebSettingsConst").SettingsSteps.DeveloperInfraSettings: return o("WAWebCurrentUser").isEmployee() && r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield r("JSResourceForInteraction")("WAWebMdDebugSetting.react").__setRef("WAWebSettingsFlow.react").load();
				return e;
			}), "MdDebugSetting")().then(function(e) {
				o("WAWebModalManager").ModalManager.open(s.jsx(e, {}));
			}), !0;
			default: return !1;
		}
	}
	function d(e) {
		var t = e.initialStep, a = t === void 0 ? o("WAWebSettingsConst").SettingsSteps.Settings : t, i = e.onEnd, l = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), d = o("useWAWebFlow").useFlow(a, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: i
		}), m = d[0], p = d[1], _ = o("WAWebBizProfileGatingUtils").businessProfileRefreshEnabled(), f = u(null), g = f[0], h = f[1], y = r("useWAWebFocusOnMount")();
		if (!p.step) return null;
		if (c(p.step)) {
			p.end();
			return;
		}
		var C = function() {
			p.pop();
		}, b = function(t) {
			c(t) || (t === o("WAWebSettingsConst").SettingsSteps.Help && o("WAWebCrashlog").upload({
				reason: "help-page-opened",
				isHighPri: !0,
				logType: o("WAWebCrashlog").LogType.SUPPORT
			}), t === o("WAWebSettingsConst").SettingsSteps.PaymentsHome && o("WAWebConsumerPaymentsHomeLogger").logPaymentsRowClick(), p.push(t));
		}, v;
		switch (p.step) {
			case o("WAWebSettingsConst").SettingsSteps.Settings:
				v = s.jsx(r("WAWebSettingsDrawer.react"), {
					profileId: l,
					onProfile: function() {
						_ ? o("WAWebDrawerManager").DrawerManager.openDrawerMid(r("WAWebGetBizProfileDrawerContent")(o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS, function() {
							return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
						})) : p.push(o("WAWebSettingsConst").SettingsSteps.Profile);
					},
					onClose: C,
					onSettingClick: b
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.Wallpaper:
				v = s.jsx(r("WAWebWallpaperDrawer.react"), {
					chat: null,
					onClose: C
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.ChatTheme:
				v = s.jsx(r("WAWebGlobalChatThemeDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings:
				v = s.jsx(r("WAWebGdprRequestAccountInfoSettingsDrawer.react"), {
					settings: r("WAWebSettingsModel"),
					onClose: C
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.NewsletterReports:
				v = s.jsx(r("WAWebNewsletterDSAReportsFlow.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.Blocked:
				v = s.jsx(r("WAWebBlockedDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.Profile: {
				var S = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(l), R = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(l), L = o("WAWebContactCollection").ContactCollection.assertGet(l);
				v = s.jsx(n("cr:1923"), {
					status: S,
					profilePicThumb: R,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS,
					contact: L,
					conn: o("WAWebConnModel").Conn,
					onClose: C,
					isInitialStep: !1
				});
				break;
			}
			case o("WAWebSettingsConst").SettingsSteps.Notifications:
				v = s.jsx(r("WAWebNotificationsDrawer.react"), {
					onClose: C,
					onShowNotificationBannerClick: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.ShowNotificationBanner);
					},
					onTaskbarNotificationSettingsClick: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.TaskbarNotificationSettings);
					},
					onOpenCalls: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.Calls);
					},
					onOpenDirectMessages: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.DirectMessages);
					},
					onOpenGroupMessages: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.GroupMessages);
					},
					onOpenStatusUpdates: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.StatusUpdates);
					}
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.DirectMessages:
				v = s.jsx(r("WAWebDirectMessagesNotificationsDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.GroupMessages:
				v = s.jsx(r("WAWebGroupMessagesNotificationsDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.StatusUpdates:
				v = s.jsx(r("WAWebStatusUpdatesNotificationsDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.Calls:
				v = s.jsx(r("WAWebCallsNotificationsDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.Language:
				v = s.jsx(r("WAWebLanguageDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.Lists:
				v = s.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
					isInitialStep: !1,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload:
				v = s.jsx(r("WAWebMediaAutoDownloadDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.MediaUploadQuality:
				v = s.jsx(r("WAWebMediaUploadQualityDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.Security:
				v = s.jsx(r("WAWebSecurityDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditLastSeen:
				v = s.jsx(r("WAWebPrivacySettingsLastSeenOnlineDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditProfilePicture:
				v = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
					onClose: C,
					category: "profilePicture"
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditAbout:
				v = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
					onClose: C,
					category: "about"
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditStatus:
				v = s.jsx(r("WAWebPrivacySettingsStatusPostDrawer.react"), { onClose: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditGroupAdd:
				v = s.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
					onClose: C,
					category: "groupAdd"
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.PrivacySettings: {
				var E = function(t) {
					switch (t) {
						case "lastSeen":
							p.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditLastSeen);
							break;
						case "about":
							p.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditAbout);
							break;
						case "groupAdd":
							p.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditGroupAdd);
							break;
						case "profilePicture":
							p.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditProfilePicture);
							break;
					}
				}, k = function() {
					p.push(o("WAWebSettingsConst").SettingsSteps.Blocked);
				}, I = function() {
					p.push(o("WAWebSettingsConst").SettingsSteps.DefaultEphemerality);
				}, T = function() {
					p.push(o("WAWebSettingsConst").SettingsSteps.ScreenLock);
				}, D = function() {
					p.push(o("WAWebSettingsConst").SettingsSteps.PrivacyVisibilityEditStatus);
				}, x = function() {
					p.push(o("WAWebSettingsConst").SettingsSteps.PrivacyScreenCustomize);
				};
				v = s.jsx(o("WAWebPrivacySettingsDrawer.react").PrivacySettingsDrawer, {
					onClose: C,
					onOpenVisibilityEditDrawer: E,
					onOpenBlockedContacts: k,
					onOpenEphemeralityDrawer: I,
					onOpenPrivacyScreenCustomize: x,
					onOpenScreenLockDrawer: T,
					onOpenStatusPrivacySettingDrawer: D
				});
				break;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacyScreenCustomize:
				v = s.jsx(r("WAWebPrivacyModeCustomizePanel.react"), {
					onBack: C,
					onOpenBlurPreset: function(t) {
						h(t), p.push(o("WAWebSettingsConst").SettingsSteps.PrivacyScreenBlurPreset);
					}
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.PrivacyScreenBlurPreset:
				g != null && (v = s.jsx(r("WAWebPrivacyModeBlurPresetDrawer.react"), {
					category: g,
					onBack: C
				}));
				break;
			case o("WAWebSettingsConst").SettingsSteps.DefaultEphemerality:
				v = s.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
					onClose: C,
					entryPoint: o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.ACCOUNT_SETTINGS
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.Help:
				v = s.jsx(r("WAWebHelpDrawer.react"), {
					onClose: C,
					onNewsletterReports: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.NewsletterReports);
					}
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.Developer: {
				n("cr:8751") && (v = s.jsx(n("cr:8751"), { onBack: C }));
				break;
			}
			case o("WAWebSettingsConst").SettingsSteps.DeveloperABProps: {
				n("cr:8751") && (v = s.jsx(n("cr:8751"), {
					onBack: C,
					initialStep: o("WAWebDeveloperMenuConstants").DeveloperMenu.ABProps
				}));
				break;
			}
			case o("WAWebSettingsConst").SettingsSteps.DeveloperGroupABProps: {
				n("cr:8751") && (v = s.jsx(n("cr:8751"), {
					onBack: C,
					initialStep: o("WAWebDeveloperMenuConstants").DeveloperMenu.GroupABProps
				}));
				break;
			}
			case o("WAWebSettingsConst").SettingsSteps.BusinessTools:
				v = s.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, { entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_SETTINGS });
				break;
			case o("WAWebSettingsConst").SettingsSteps.PaymentsHome:
				v = s.jsx(r("WAWebConsumerPaymentsHomeDrawer.react"), {
					onClose: C,
					onSeeAllTransactions: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.PaymentsTransactions);
					},
					onSharePix: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.PaymentsSharePix);
					}
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.PaymentsTransactions:
				v = s.jsx(r("WAWebConsumerSeeAllTransactionsDrawer.react"), { onBack: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.PaymentsSharePix:
				v = s.jsx(r("WAWebConsumerSharePixContactPicker.react"), { onBack: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.DataSharing:
				v = s.jsx(r("WAWebSMBDataSharingDrawer.react"), {
					onClose: C,
					entrypoint: o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint").SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT.ENTRY_POINT_SETTINGS_SCREEN
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.ScreenLock:
				v = s.jsx(r("WAWebScreenLockDrawer.react"), { onBack: C });
				break;
			case o("WAWebSettingsConst").SettingsSteps.Account:
				v = s.jsx(r("WAWebAccountSettingsDrawer.react"), {
					onClickSecurity: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.Security);
					},
					onClickRequestAccountInfo: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings);
					},
					onClose: C
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.Chats:
				v = s.jsx(r("WAWebChatsSettingsDrawer.react"), {
					onClickChatTheme: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.ChatTheme);
					},
					onClickTheme: function() {
						return c(o("WAWebSettingsConst").SettingsSteps.Theme);
					},
					onClickWallpaper: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.Wallpaper);
					},
					onClickMediaAutoDownload: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload);
					},
					onClickMediaUploadQuality: function() {
						return p.push(o("WAWebSettingsConst").SettingsSteps.MediaUploadQuality);
					},
					onClose: C
				});
				break;
			case o("WAWebSettingsConst").SettingsSteps.ShowNotificationBanner:
				n("cr:7753") && (v = s.jsx(n("cr:7753"), { onClose: C }));
				break;
			case o("WAWebSettingsConst").SettingsSteps.TaskbarNotificationSettings:
				n("cr:2404") && (v = s.jsx(n("cr:2404"), { onClose: C }));
				break;
			case o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings:
				n("cr:1977") && (v = s.jsx(n("cr:1977"), { onClose: C }));
				break;
			case o("WAWebSettingsConst").SettingsSteps.WinDevicesSettings: n("cr:17209") && (v = s.jsx(n("cr:17209"), { onClose: C }));
			default:
		}
		return s.jsx(m, {
			ref: y,
			flow: p,
			children: v
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SettingsFlow = d;
}), 98);
