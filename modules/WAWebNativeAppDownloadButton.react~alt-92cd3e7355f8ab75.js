__d("WAWebNativeAppDownloadButton.react", [
	"fbt",
	"WAWebChevronIcon.react",
	"WAWebClickable.react",
	"WAWebDesktopUpsellPlatformAwareHooks",
	"WAWebDesktopUpsellQRCodeBannerExperiment",
	"WAWebDesktopUpsellStoreOpener",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebWamEnumWebcNativeUpsellCtaSourceType",
	"WDSIconIcDownload.react",
	"react",
	"useWAWebDesktopUpsellQplImpression",
	"useWAWebDesktopUpsellWamImpression"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.apiCmd, n = e.inline, a = n === void 0 ? !1 : n, i = e.sourceType, l = o("WAWebDesktopUpsellQRCodeBannerExperiment").getWAWebDesktopUpsellQRCodeBannerExperiment(), c = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformAwareOsVersionCheck(), d = async function() {
			await o("useWAWebDesktopUpsellQplImpression").logDesktopUpsellQplEvent("click", i, t), o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
				ctaSource: i,
				qrScreenExperimentGroup: l,
				isBetaUser: !1
			});
		};
		if (o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression({
			source: i,
			isCtaVisible: c,
			qrScreenExperimentGroup: l,
			isBeta: !1,
			isBetaUser: !1
		}), !c) return null;
		var m = s._(
			/*BTDS*/
			""
		);
		return i === o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER && a && (m = s._(
			/*BTDS*/
			""
		)), a ? u.jsx(o("WAWebClickable.react").Clickable, {
			as: "span",
			dataTestId: "download-native-client-button-inline",
			className: "xujl8zx x1vs5fdg xewurvo x3pynha xowvryd xk50ysn xcul1l7",
			onClick: d,
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 4,
				children: [m, u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
					width: 16,
					height: 16
				})]
			})
		}) : u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			icon: u.jsx(r("WDSIconIcDownload.react"), {
				width: 16,
				height: 16
			}),
			onClick: d,
			text: m,
			testId: "download-native-client-button"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
