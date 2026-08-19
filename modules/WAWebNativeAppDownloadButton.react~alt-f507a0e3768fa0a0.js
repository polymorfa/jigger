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
	"react-compiler-runtime",
	"useWAWebDesktopUpsellQplImpression",
	"useWAWebDesktopUpsellWamImpression"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(20), n = e.apiCmd, a = e.inline, i = e.sourceType, l = a === void 0 ? !1 : a, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = o("WAWebDesktopUpsellQRCodeBannerExperiment").getWAWebDesktopUpsellQRCodeBannerExperiment(), t[0] = c) : c = t[0];
		var d = c, m = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformAwareOsVersionCheck(), p;
		t[1] !== n || t[2] !== i ? (p = async function() {
			await o("useWAWebDesktopUpsellQplImpression").logDesktopUpsellQplEvent("click", i, n), o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
				ctaSource: i,
				qrScreenExperimentGroup: d,
				isBetaUser: !1
			});
		}, t[1] = n, t[2] = i, t[3] = p) : p = t[3];
		var _ = p, f;
		if (t[4] !== m || t[5] !== i ? (f = {
			source: i,
			isCtaVisible: m,
			qrScreenExperimentGroup: d,
			isBeta: !1,
			isBetaUser: !1
		}, t[4] = m, t[5] = i, t[6] = f) : f = t[6], o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(f), !m) return null;
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[7] = g) : g = t[7];
		var h = g;
		if (i === o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER && l) {
			var y;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
				/*BTDS*/
				""
			), t[8] = y) : y = t[8], h = y;
		}
		if (l) {
			var C;
			t[9] === Symbol.for("react.memo_cache_sentinel") ? (C = "xujl8zx x1vs5fdg xewurvo x3pynha xowvryd xk50ysn xcul1l7", t[9] = C) : C = t[9];
			var b;
			t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				width: 16,
				height: 16
			}), t[10] = b) : b = t[10];
			var v;
			t[11] !== h ? (v = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 4,
				children: [h, b]
			}), t[11] = h, t[12] = v) : v = t[12];
			var S;
			return t[13] !== _ || t[14] !== v ? (S = u.jsx(o("WAWebClickable.react").Clickable, {
				as: "span",
				dataTestId: "download-native-client-button-inline",
				className: C,
				onClick: _,
				children: v
			}), t[13] = _, t[14] = v, t[15] = S) : S = t[15], S;
		}
		var R;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(r("WDSIconIcDownload.react"), {
			width: 16,
			height: 16
		}), t[16] = R) : R = t[16];
		var L;
		return t[17] !== h || t[18] !== _ ? (L = u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			icon: R,
			onClick: _,
			text: h,
			testId: "download-native-client-button"
		}), t[17] = h, t[18] = _, t[19] = L) : L = t[19], L;
	}
	l.default = c;
}), 226);
