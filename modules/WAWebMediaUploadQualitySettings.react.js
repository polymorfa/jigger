__d("WAWebMediaUploadQualitySettings.react", [
	"fbt",
	"WAWebChatPreferenceCollection",
	"WAWebDrawerSection.react",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebProtobufSyncAction.pb",
	"WAWebText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebModelValues",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingInline30: {
		paddingInlineStart: "x162tt16",
		paddingInlineEnd: "x5zjp28",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, m = [{
		value: "sd",
		label: function() {
			return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginBottom8), { children: [s._(
				/*BTDS*/
				""
			), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
				/*BTDS*/
				""
			) })] }));
		}
	}, {
		value: "hd",
		label: function() {
			return c.jsxs(c.Fragment, { children: [s._(
				/*BTDS*/
				""
			), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
				/*BTDS*/
				""
			) })] });
		}
	}];
	function p() {
		var e = o("react-compiler-runtime").c(12), t, n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = r("WAWebChatPreferenceCollection").getDefault(), n = ["hdMediaEnabled"], e[0] = t, e[1] = n) : (t = e[0], n = e[1]);
		var a = o("useWAWebModelValues").useModelValues(t, n), i;
		e[2] !== a ? (i = function(t) {
			a.set("hdMediaEnabled", t === o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD);
		}, e[2] = a, e[3] = i) : i = e[3];
		var l = o("useWAWebSettingSync").useSettingSync("mediaUploadQuality", i), s;
		e[4] !== l ? (s = function(t) {
			var e = t === "hd" ? o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD : o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$MediaQualitySetting.STANDARD;
			l(e);
		}, e[4] = l, e[5] = s) : s = e[5];
		var u = s, p = a.hdMediaEnabled ? "hd" : "sd", _;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = [d.paddingInline30, o("WDSPaddings.stylex").wdsPaddings.paddingVer20], e[6] = _) : _ = e[6];
		var f;
		e[7] !== p || e[8] !== u ? (f = m.map(function(e) {
			var t = e.label, n = e.value;
			return c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
				text: t(),
				selected: p === n,
				testid: "media-quality-" + n,
				onClick: function() {
					return u(n);
				}
			}, n);
		}), e[7] = p, e[8] = u, e[9] = f) : f = e[9];
		var g;
		return e[10] !== f ? (g = c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: _,
			children: c.jsx("div", {
				role: "radiogroup",
				"aria-label": "Media upload quality",
				children: f
			})
		}), e[10] = f, e[11] = g) : g = e[11], g;
	}
	l.default = p;
}), 226);
