__d("WAWebBizAdCreationSelectMediaButton.react", [
	"fbt",
	"WAWebBizAdCreationAddMediaSourceFlow.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationMediaValidationUtils",
	"WAWebBizAdCreationStage1WAUploadUtils",
	"WAWebBizAdLogger",
	"WAWebFilePicker.react",
	"WAWebPlusIcon.react",
	"WDSButton.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useMemo, _ = c.useRef, f = c.useState;
	function g(e) {
		var t = o("react-compiler-runtime").c(24), n = e.adAccountID, a = e.mediaCollection, i = e.onMediaUploadComplete, l = e.onMediaUploadFailure, c = e.onSelectedMediaSave, d = e.setMediaUploadFailed, p = _(null), g = f(!1), h = g[0], y = g[1], C = m(r("WAWebBizAdCreationLoggerContext")), b;
		t[0] !== a ? (b = o("WAWebBizAdCreationMediaValidationUtils").getAllowedMimeTypesForCollection(a), t[0] = a, t[1] = b) : b = t[1];
		var v = b, S;
		t[2] !== d ? (S = function() {
			var e;
			d(!1), (e = p.current) == null || e.open();
		}, t[2] = d, t[3] = S) : S = t[3];
		var R = S, L;
		t[4] !== n || t[5] !== C || t[6] !== R ? (L = function() {
			C != null && r("WAWebBizAdLogger").logCritical({
				adAccountID: n,
				event: "new_carousel_add_media_click",
				loggerContext: C
			}), o("WAWebBizAdCreationAddMediaSourceFlow.react").openWAWebBizAdCreationAddMediaSource(R);
		}, t[4] = n, t[5] = C, t[6] = R, t[7] = L) : L = t[7];
		var E = L, k;
		t[8] !== a || t[9] !== i || t[10] !== l || t[11] !== c ? (k = function(t) {
			o("WAWebBizAdCreationStage1WAUploadUtils").handleMediaPick(t, a, i, l, c, y);
		}, t[8] = a, t[9] = i, t[10] = l, t[11] = c, t[12] = k) : k = t[12];
		var I = k, T;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x6s0dn4 x9f619 x78zum5 x2lah0s x7kvr32 xl56j7k x1lzt3e6" }, t[13] = T) : T = t[13];
		var D;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[14] = D) : D = t[14];
		var x;
		t[15] !== h || t[16] !== E ? (x = u.jsx("div", babelHelpers.extends({}, T, { children: u.jsx(r("WDSButton.react"), {
			Icon: o("WAWebPlusIcon.react").PlusIcon,
			"aria-label": D,
			loading: h,
			onPress: E,
			size: "large",
			testid: "biz_native_ads_add_more_media_button",
			type: "default",
			variant: "tonal"
		}, "media-more") })), t[15] = h, t[16] = E, t[17] = x) : x = t[17];
		var $;
		t[18] !== v || t[19] !== I ? ($ = u.jsx(r("WAWebFilePicker.react"), {
			ref: p,
			mimes: v,
			multiple: !0,
			onChange: I
		}), t[18] = v, t[19] = I, t[20] = $) : $ = t[20];
		var P;
		return t[21] !== x || t[22] !== $ ? (P = u.jsxs(u.Fragment, { children: [x, $] }), t[21] = x, t[22] = $, t[23] = P) : P = t[23], P;
	}
	l.default = g;
}), 226);
