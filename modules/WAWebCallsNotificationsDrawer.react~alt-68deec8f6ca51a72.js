__d("WAWebCallsNotificationsDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAuraGating",
	"WAWebAuraRingtoneGlobalSelectorLoadable",
	"WAWebAuraRingtonePrefs",
	"WAWebCmd",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebGuidePopup.react",
	"WAWebModalManager",
	"WAWebMuteCollection",
	"WAWebNotificationConstants",
	"WAWebPushNotificationsGatingUtils",
	"WAWebSettingsCheckList.react",
	"WAWebSettingsSyncBridge",
	"react",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = e.onClose, n = e.ref, a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			""
		), c = m(function() {
			return o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications();
		}), p = c[0], _ = c[1], f = d(function() {
			var e, t = !p;
			if (t && !r("WAWebEnvironment").isWindows && ((e = window.Notification) == null ? void 0 : e.permission) !== o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
				var n, a = o("WAWebABProps").getABPropConfigValue("web_notifications_banner_new_logic_enabled");
				if (o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner((n = window.Notification) == null ? void 0 : n.permission, a)) {
					var i;
					o("WAWebModalManager").ModalManager.open(u.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
						messaging: i.Messaging.NOTIFICATIONS,
						onConfirm: i.guideConfirm,
						onCancel: i.notificationGuideLearnMore,
						type: i.GuidePopupType.GUIDE_ALLOW,
						enableNewBannerLogic: a,
						featureSurface: i.FeatureSurface.NOTIFICATION
					}));
				}
				window.Notification.requestPermission(function(e) {
					var t;
					o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner((t = window.Notification) == null ? void 0 : t.permission, a) || o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.onNotificationPermissionChange(), e === o("WAWebNotificationConstants").PERMISSION_ALLOWED && (o("WAWebMuteCollection").MuteCollection.setGlobalCallNotifications(!0), _(!0), o("WAWebSettingsSyncBridge").sendSettingChange("isCallsNotificationEnabled", !0));
				});
			} else o("WAWebMuteCollection").MuteCollection.setGlobalCallNotifications(t), _(t), o("WAWebSettingsSyncBridge").sendSettingChange("isCallsNotificationEnabled", t);
		}, [p]), g = m(function() {
			return o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone();
		}), h = g[0], y = g[1];
		r("WAWebAuraGating").isRingtonesBenefitActive() && !o("WAWebAuraRingtonePrefs").hasExplicitRingtoneSelection() && o("WAWebAuraRingtonePrefs").saveSelectedRingtoneId(o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone() ? o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID : o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID);
		var C = o("useWAWebSettingSync").useSettingSync("shouldPlaySoundForCallNotification", function(e) {
			o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(e), y(e);
		}), b = d(function() {
			var e = !h;
			C(e), o("WAWebAuraRingtonePrefs").saveSelectedRingtoneId(e ? o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID : o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID);
		}, [h, C]), v = d(function(e) {
			C(e !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID);
		}, [C]);
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "calls-notifications-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "calls-notifications"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-calls-notifications",
				title: a,
				onBack: t,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				theme: "padding-no-vertical",
				animation: !1,
				children: [u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
					testid: "option-show-calls-notification",
					id: "show-calls-notification",
					checked: p,
					checkboxRightAligned: !0,
					onChange: f,
					ariaLabel: i,
					children: i
				}), r("WAWebAuraGating").isRingtonesBenefitActive() ? u.jsx(o("WAWebAuraRingtoneGlobalSelectorLoadable").WAWebAuraRingtoneGlobalSelectorLoadable, { onChange: v }) : u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
					testid: "option-play-call-ringtone",
					id: "play-call-ringtone",
					checked: h,
					checkboxRightAligned: !0,
					onChange: b,
					ariaLabel: l,
					children: l
				})]
			}) })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
