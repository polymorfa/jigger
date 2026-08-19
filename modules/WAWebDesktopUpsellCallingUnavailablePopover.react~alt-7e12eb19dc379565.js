__d("WAWebDesktopUpsellCallingUnavailablePopover.react", [
	"fbt",
	"WAWebDesktopUpsellCallingPopover.react",
	"WAWebDesktopUpsellStoreOpener",
	"WAWebDesktopUpsellUtils",
	"WAWebWamEnumWebcNativeUpsellCtaEventType",
	"WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
	"WAWebWamEnumWebcNativeUpsellCtaSourceType",
	"WAWebWebcNativeUpsellCtaWamEvent",
	"react",
	"useWAWebDesktopUpsellWamImpression",
	"useWAWebExternalBetaOptIn",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isGroupCall, n = t === void 0 ? !1 : t, a = e.userDesktopOs, i = o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CALL_BTN_MODAL_2, l = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), s = l[0], c = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
		return o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression({
			isCtaVisible: !0,
			source: i,
			isBeta: c,
			isBetaUser: s
		}), r("useWAWebOnUnmount")(function() {
			new (o("WAWebWebcNativeUpsellCtaWamEvent")).WebcNativeUpsellCtaWamEvent({
				webcNativeUpsellCtaEventType: o("WAWebWamEnumWebcNativeUpsellCtaEventType").WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
				webcNativeUpsellCtaSource: i,
				webcNativeUpsellCtaReleaseChannel: c ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
				webcNativeUpsellCtaIsBetaUser: s
			}).commit();
		}), u.jsx(r("WAWebDesktopUpsellCallingPopover.react"), {
			title: d(a, c, n),
			body: m(a, c, n),
			onClick: function() {
				o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
					ctaSource: i,
					isBetaUpsell: c,
					isBetaUser: s
				});
			}
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e, t, n) {
		return e === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS ? n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function m(e, t, n) {
		return e === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS ? n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	l.default = c;
}), 226);
