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
		var e = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), ["hdMediaEnabled"]), t = o("useWAWebSettingSync").useSettingSync("mediaUploadQuality", function(t) {
			e.set("hdMediaEnabled", t === o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD);
		}), n = function(n) {
			var e = n === "hd" ? o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD : o("WAWebProtobufSyncAction.pb").SyncActionValue$SettingsSyncAction$MediaQualitySetting.STANDARD;
			t(e);
		}, a = e.hdMediaEnabled ? "hd" : "sd";
		return c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: [d.paddingInline30, o("WDSPaddings.stylex").wdsPaddings.paddingVer20],
			children: c.jsx("div", {
				role: "radiogroup",
				"aria-label": "Media upload quality",
				children: m.map(function(e) {
					var t = e.label, o = e.value;
					return c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
						text: t(),
						selected: a === o,
						testid: "media-quality-" + o,
						onClick: function() {
							return n(o);
						}
					}, o);
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
