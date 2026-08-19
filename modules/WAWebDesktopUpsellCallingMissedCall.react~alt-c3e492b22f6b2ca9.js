__d("WAWebDesktopUpsellCallingMissedCall.react", [
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
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isGroupCall, n = t === void 0 ? !1 : t, a = e.isMissedCall, i = a === void 0 ? !0 : a, l = e.userDesktopOs, s = o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL_2, c = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), p = c[0], _ = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
		return o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression({
			isCtaVisible: !0,
			source: s,
			isBeta: _,
			isBetaUser: p
		}), r("useWAWebOnUnmount")(function() {
			new (o("WAWebWebcNativeUpsellCtaWamEvent")).WebcNativeUpsellCtaWamEvent({
				webcNativeUpsellCtaEventType: o("WAWebWamEnumWebcNativeUpsellCtaEventType").WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
				webcNativeUpsellCtaSource: s,
				webcNativeUpsellCtaReleaseChannel: _ ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
				webcNativeUpsellCtaIsBetaUser: p
			}).commit();
		}), u.jsx(r("WAWebDesktopUpsellCallingPopover.react"), {
			title: d(l, _, n),
			body: m({
				isGroupCall: n,
				isMissedCall: i,
				macBetaUpsell: _,
				userDesktopOs: l
			}),
			onClick: function() {
				o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
					ctaSource: s,
					isBetaUpsell: _,
					isBetaUser: p
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
	function m(e) {
		var t = e.isGroupCall, n = e.isMissedCall, r = e.macBetaUpsell, a = e.userDesktopOs;
		return a === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS ? n ? t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : r ? n ? t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : n ? t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	l.default = c;
}), 226);
