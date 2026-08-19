__d("WAWebButterbar.react", [
	"WALogger",
	"WAWebAlertBatteryIcon.react",
	"WAWebAlertComputerIcon.react",
	"WAWebAlertNoticeIcon.react",
	"WAWebAlertNotificationIcon.react",
	"WAWebAlertPhoneIcon.react",
	"WAWebAlertUpdateIcon.react",
	"WAWebAlertUpdatePrimaryIcon.react",
	"WAWebBanner.react",
	"WAWebCheckboxRoundCheckedIcon.react",
	"WAWebCollectionsFolderIcon.react",
	"WAWebInfoFilledGreenCircleIcon.react",
	"WAWebOfflineMessageLoadIcon.react",
	"WAWebReceiptIcon.react",
	"WAWebStorefrontFilledIcon.react",
	"WAWebThemeContext",
	"WAWebWarningIcon.react",
	"WAWebWarningOutlineIcon.react",
	"WDSIconIcAlertWarning.react",
	"WDSIconIcCampaignMegaphone.react",
	"WDSIconIcCampaignMegaphoneFilled.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(2), n;
		return t[0] !== e ? (n = u.jsx(r("WDSIconIcCampaignMegaphoneFilled.react"), babelHelpers.extends({
			height: 24,
			width: 24
		}, e, { testid: "business-advertise" })), t[0] = e, t[1] = n) : n = t[1], n;
	}
	var _ = {
		computer: o("WAWebAlertComputerIcon.react").AlertComputerIcon,
		phone: o("WAWebAlertPhoneIcon.react").AlertPhoneIcon,
		notification: o("WAWebAlertNotificationIcon.react").AlertNotificationIcon,
		announcement: r("WDSIconIcAlertWarning.react"),
		updateNotification: o("WAWebAlertUpdateIcon.react").AlertUpdateIcon,
		updateWarning: o("WAWebAlertUpdateIcon.react").AlertUpdateIcon,
		battery: o("WAWebAlertBatteryIcon.react").AlertBatteryIcon,
		update: o("WAWebAlertUpdateIcon.react").AlertUpdateIcon,
		notice: o("WAWebAlertNoticeIcon.react").AlertNoticeIcon,
		fatal: r("WDSIconIcAlertWarning.react"),
		generalAlert: r("WDSIconIcAlertWarning.react"),
		nuxGreen: o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon,
		nuxBlue: o("WAWebCollectionsFolderIcon.react").CollectionsFolderIcon,
		updatePrimaryDevice: o("WAWebAlertUpdatePrimaryIcon.react").AlertUpdatePrimaryIcon,
		featureAlert: o("WAWebInfoFilledGreenCircleIcon.react").InfoFilledGreenCircleIcon,
		resumeProgress: o("WAWebOfflineMessageLoadIcon.react").OfflineMessageLoadIcon,
		invalidPoll: o("WAWebWarningIcon.react").WarningIcon,
		adActionInfo: r("WDSIconIcCampaignMegaphone.react"),
		adActionWarning: o("WAWebWarningIcon.react").WarningIcon,
		orderExpansion: o("WAWebReceiptIcon.react").ReceiptIcon,
		quickPromotion: p,
		brigadingWarning: o("WAWebWarningIcon.react").WarningIcon,
		brigadingNotification: o("WAWebCheckboxRoundCheckedIcon.react").CheckboxRoundCheckedIcon,
		reachoutTimelockedWarning: o("WAWebWarningOutlineIcon.react").WarningOutlineIcon
	};
	function f(e) {
		switch (e) {
			case "phone":
			case "invalidPoll":
			case "fatal":
			case "generalAlert":
			case "brigadingWarning":
			case "reachoutTimelockedWarning": return "warning";
			default: return "default";
		}
	}
	function g(e) {
		return _[e];
	}
	function h(t) {
		var n, r = o("WAWebThemeContext").useIsDarkTheme(), a = m(null), i = a[0], l = a[1], s = t.action, c = t.customIcons, p = t.testid, _ = t.textTestid;
		return d(function() {
			if (c == null) {
				l(null);
				return;
			}
			var t = r ? c.iconDark : c.iconLight;
			if (t == null) {
				l(null);
				return;
			}
			var n = c.description, a;
			try {
				var i = new Blob([t]);
				a = window.URL.createObjectURL(i), l({
					src: a,
					altText: n
				});
			} catch (t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["ButterBar: Could not create a blob URL"])));
			}
			return function() {
				a != null && window.URL.revokeObjectURL(a);
			};
		}, [
			r,
			l,
			c
		]), u.jsx(o("WAWebBanner.react").WAWebBanner, {
			type: f(t.type),
			title: t.title,
			text: (n = t.subtitleText) != null ? n : t.text,
			actionText: t.actionText,
			icon: i ? {
				type: "custom",
				customIcon: i
			} : { icon: g(t.type) },
			onClick: s,
			onDismiss: t.onDismiss,
			textTestid: _,
			testid: p
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);
