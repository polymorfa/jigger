__d("WAWebAutoDownloadSettings.react", [
	"fbt",
	"WAWebDrawerButton.react",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebRefreshIcon.react",
	"WAWebSettingsCheckList.react",
	"WAWebText.react",
	"WAWebUserPrefsGeneral",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebSettingSync",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		paddingInline30: {
			paddingInlineStart: "x162tt16",
			paddingInlineEnd: "x5zjp28",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingInlineStart5: {
			paddingInlineStart: "xaso8d8",
			$$css: !0
		}
	}, d = { disclaimer: {
		borderTopColor: "xx42vgk",
		borderTopStyle: "x13fuv20",
		borderTopWidth: "x178xt8z",
		$$css: !0
	} };
	function m() {
		var e, t, n, a = o("react-compiler-runtime").c(41), i = (n = o("useWAWebSettingSync")).useSettingSync("isPhotosAutodownloadEnabled", g), l = n.useSettingSync("isAudiosAutodownloadEnabled", f), m = n.useSettingSync("isVideosAutodownloadEnabled", _), h = n.useSettingSync("isDocumentsAutodownloadEnabled", p), y = (e = r("useWAWebToggle"))((t = o("WAWebUserPrefsGeneral")).getAutoDownloadPhotos, i), C = y[0], b = y[1], v = e(t.getAutoDownloadAudio, l), S = v[0], R = v[1], L = e(t.getAutoDownloadVideos, m), E = L[0], k = L[1], I = e(t.getAutoDownloadDocuments, h), T = I[0], D = I[1], x = r("WAWebEnvironment").isWindows ? !(C && S && E && T) : !(C && S && !E && !T), $;
		a[0] !== S || a[1] !== x || a[2] !== T || a[3] !== C || a[4] !== R || a[5] !== D || a[6] !== b || a[7] !== k || a[8] !== E ? ($ = function() {
			x && (!C && b(), !S && R(), r("WAWebEnvironment").isWindows ? (!E && k(), !T && D()) : (E && k(), T && D()));
		}, a[0] = S, a[1] = x, a[2] = T, a[3] = C, a[4] = R, a[5] = D, a[6] = b, a[7] = k, a[8] = E, a[9] = $) : $ = a[9];
		var P = $, N;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (N = [c.paddingInline30, o("WDSPaddings.stylex").wdsPaddings.paddingVer20], a[10] = N) : N = a[10];
		var M;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), a[11] = M) : M = a[11];
		var w;
		a[12] !== C || a[13] !== b ? (w = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-photos",
			id: "photos",
			checked: C,
			onChange: b,
			children: M
		}), a[12] = C, a[13] = b, a[14] = w) : w = a[14];
		var A;
		a[15] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), a[15] = A) : A = a[15];
		var F;
		a[16] !== S || a[17] !== R ? (F = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-audio",
			id: "audio",
			checked: S,
			onChange: R,
			children: A
		}), a[16] = S, a[17] = R, a[18] = F) : F = a[18];
		var O;
		a[19] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
			/*BTDS*/
			""
		), a[19] = O) : O = a[19];
		var B;
		a[20] !== k || a[21] !== E ? (B = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-videos",
			id: "videos",
			checked: E,
			onChange: k,
			children: O
		}), a[20] = k, a[21] = E, a[22] = B) : B = a[22];
		var W;
		a[23] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
			/*BTDS*/
			""
		), a[23] = W) : W = a[23];
		var q;
		a[24] !== T || a[25] !== D ? (q = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-documents",
			id: "documents",
			checked: T,
			onChange: D,
			children: W
		}), a[24] = T, a[25] = D, a[26] = q) : q = a[26];
		var U;
		a[27] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, d.disclaimer],
			children: s._(
				/*BTDS*/
				""
			)
		}), a[27] = U) : U = a[27];
		var V;
		a[28] !== w || a[29] !== F || a[30] !== B || a[31] !== q ? (V = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: N,
			children: [
				w,
				F,
				B,
				q,
				U
			]
		}), a[28] = w, a[29] = F, a[30] = B, a[31] = q, a[32] = V) : V = a[32];
		var H;
		a[33] === Symbol.for("react.memo_cache_sentinel") ? (H = u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}), a[33] = H) : H = a[33];
		var G = !x, z;
		a[34] === Symbol.for("react.memo_cache_sentinel") ? (z = s._(
			/*BTDS*/
			""
		), a[34] = z) : z = a[34];
		var j;
		a[35] !== P || a[36] !== G ? (j = u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: c.paddingInlineStart5,
			children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				onClick: P,
				icon: H,
				disabled: G,
				children: z
			})
		}), a[35] = P, a[36] = G, a[37] = j) : j = a[37];
		var K;
		return a[38] !== V || a[39] !== j ? (K = u.jsxs(u.Fragment, { children: [V, j] }), a[38] = V, a[39] = j, a[40] = K) : K = a[40], K;
	}
	function p(e) {
		return o("WAWebUserPrefsGeneral").setAutoDownloadDocuments(e);
	}
	function _(e) {
		return o("WAWebUserPrefsGeneral").setAutoDownloadVideos(e);
	}
	function f(e) {
		return o("WAWebUserPrefsGeneral").setAutoDownloadAudio(e);
	}
	function g(e) {
		return o("WAWebUserPrefsGeneral").setAutoDownloadPhotos(e);
	}
	l.default = m;
}), 226);
