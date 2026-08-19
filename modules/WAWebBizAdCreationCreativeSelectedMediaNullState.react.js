__d("WAWebBizAdCreationCreativeSelectedMediaNullState.react", [
	"fbt",
	"WAWebBizAdCreationAddMediaSourceFlow.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationMediaValidationUtils",
	"WAWebBizAdCreationStage1WAUploadUtils",
	"WAWebBizAdLogger",
	"WAWebFilePicker.react",
	"WDSButton.react",
	"WDSColorStyles.stylex",
	"WDSIconIcAddPhotoAlternate.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useRef, f = d.useState, g = { container: {
		alignItems: "x6s0dn4",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		display: "x78zum5",
		flexDirection: "x1q0g3np",
		rowGap: "x1qvou4u",
		columnGap: "x1s70e7g",
		justifyContent: "x1nhvcw1",
		paddingTop: "xl7twdi",
		paddingBottom: "xvg22vi",
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		$$css: !0
	} };
	function h(t) {
		var n = o("react-compiler-runtime").c(24), a = t.adAccountID, i = t.mediaCollection, l = t.onMediaUploadComplete, u = t.onMediaUploadFailure, d = t.onSelectedMediaSave, m = t.setMediaUploadFailed, h = _(null), y = f(!1), C = y[0], b = y[1], v = p(r("WAWebBizAdCreationLoggerContext")), S;
		n[0] !== i || n[1] !== l || n[2] !== u || n[3] !== d ? (S = function(t) {
			o("WAWebBizAdCreationStage1WAUploadUtils").handleMediaPick(t, i, l, u, d, b);
		}, n[0] = i, n[1] = l, n[2] = u, n[3] = d, n[4] = S) : S = n[4];
		var R = S, L;
		n[5] !== m ? (L = function() {
			var e;
			m(!1), (e = h.current) == null || e.open();
		}, n[5] = m, n[6] = L) : L = n[6];
		var E = L, k;
		n[7] !== a || n[8] !== v || n[9] !== E ? (k = function() {
			v != null && r("WAWebBizAdLogger").logCritical({
				adAccountID: a,
				event: "open_select_media_dialog",
				loggerContext: v
			}), o("WAWebBizAdCreationAddMediaSourceFlow.react").openWAWebBizAdCreationAddMediaSource(E);
		}, n[7] = a, n[8] = v, n[9] = E, n[10] = k) : k = n[10];
		var I = k, T;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (T = (e || (e = r("stylex"))).props(g.container, o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashInset), n[11] = T) : T = n[11];
		var D;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), n[12] = D) : D = n[12];
		var x;
		n[13] !== C || n[14] !== I ? (x = c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcAddPhotoAlternate.react"),
			label: D,
			loading: C,
			onPress: I,
			size: "small",
			testid: "biz_native_ads_add_media_button",
			type: "default"
		}), n[13] = C, n[14] = I, n[15] = x) : x = n[15];
		var $;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[16] = $) : $ = n[16];
		var P;
		n[17] !== x ? (P = c.jsxs("div", babelHelpers.extends({}, T, { children: [x, $] })), n[17] = x, n[18] = P) : P = n[18];
		var N;
		n[19] !== R ? (N = c.jsx(r("WAWebFilePicker.react"), {
			ref: h,
			mimes: o("WAWebBizAdCreationMediaValidationUtils").ALLOWED_MIME_TYPES,
			multiple: !0,
			onChange: R
		}), n[19] = R, n[20] = N) : N = n[20];
		var M;
		return n[21] !== P || n[22] !== N ? (M = c.jsxs(c.Fragment, { children: [P, N] }), n[21] = P, n[22] = N, n[23] = M) : M = n[23], M;
	}
	l.default = h;
}), 226);
