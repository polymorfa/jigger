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
	"react-compiler-runtime",
	"useWAWebDesktopUpsellWamImpression",
	"useWAWebExternalBetaOptIn",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(22), n = e.isGroupCall, a = e.isMissedCall, i = e.userDesktopOs, l = n === void 0 ? !1 : n, s = a === void 0 ? !0 : a, c = o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL_2, p = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), _ = p[0], f = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(), g;
		t[0] !== _ || t[1] !== f ? (g = {
			isCtaVisible: !0,
			source: c,
			isBeta: f,
			isBetaUser: _
		}, t[0] = _, t[1] = f, t[2] = g) : g = t[2], o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(g);
		var h;
		t[3] !== _ || t[4] !== f ? (h = function() {
			new (o("WAWebWebcNativeUpsellCtaWamEvent")).WebcNativeUpsellCtaWamEvent({
				webcNativeUpsellCtaEventType: o("WAWebWamEnumWebcNativeUpsellCtaEventType").WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
				webcNativeUpsellCtaSource: c,
				webcNativeUpsellCtaReleaseChannel: f ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel").WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
				webcNativeUpsellCtaIsBetaUser: _
			}).commit();
		}, t[3] = _, t[4] = f, t[5] = h) : h = t[5], r("useWAWebOnUnmount")(h);
		var y;
		t[6] !== l || t[7] !== f || t[8] !== i ? (y = d(i, f, l), t[6] = l, t[7] = f, t[8] = i, t[9] = y) : y = t[9];
		var C;
		t[10] !== l || t[11] !== s || t[12] !== f || t[13] !== i ? (C = m({
			isGroupCall: l,
			isMissedCall: s,
			macBetaUpsell: f,
			userDesktopOs: i
		}), t[10] = l, t[11] = s, t[12] = f, t[13] = i, t[14] = C) : C = t[14];
		var b;
		t[15] !== _ || t[16] !== f ? (b = function() {
			o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
				ctaSource: c,
				isBetaUpsell: f,
				isBetaUser: _
			});
		}, t[15] = _, t[16] = f, t[17] = b) : b = t[17];
		var v;
		return t[18] !== y || t[19] !== C || t[20] !== b ? (v = u.jsx(r("WAWebDesktopUpsellCallingPopover.react"), {
			title: y,
			body: C,
			onClick: b
		}), t[18] = y, t[19] = C, t[20] = b, t[21] = v) : v = t[21], v;
	}
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
