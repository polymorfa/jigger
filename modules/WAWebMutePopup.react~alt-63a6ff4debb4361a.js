__d("WAWebMutePopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebEmojiText.react",
	"WAWebModalManager",
	"WAWebMuteExpirations",
	"WAWebRadio.react",
	"WAWebText.react",
	"WAWebUserPrefsGeneral",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t = e.children, n = e.onMute, r = o("useWAWebModelValues").useModelValues(e.mute, [
			"id",
			"expiration",
			"callExpiration"
		]), a = m(null), i = a[0], l = a[1], c = function(t) {
			l(t);
		}, p = function() {
			return i != null && i !== 0 ? i : o("WAWebUserPrefsGeneral").getLastChatMuteDuration() || o("WAWebMuteExpirations").getDefaultMuteDuration();
		}, _ = function() {
			o("WAWebModalManager").ModalManager.close();
			var t = p();
			o("WAWebUserPrefsGeneral").setLastChatMuteDuration(t), n(o("WAWebMuteExpirations").calculateMuteExpiration(t), t, e.entryPoint == null ? 0 : e.entryPoint);
		};
		d(function() {
			r.expiration != null && r.expiration !== 0 && r.callExpiration != null && r.callExpiration !== 0 && o("WAWebModalManager").closeModalManager();
		}, [r.callExpiration, r.expiration]);
		var f = e.onCancel || o("WAWebModalManager").closeModalManager, g = p(), h = u.jsx(o("WAWebRadio.react").RadioGroup, {
			name: "ractionMuteDuration",
			theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
			checkedValue: g,
			options: o("WAWebMuteExpirations").ALL_MUTE_DURATIONS.map(function(e) {
				var t = e.duration, n = e.getLabel, r = e.radioId;
				return {
					value: t,
					label: n(),
					testid: r,
					onChange: function() {
						return c(t);
					}
				};
			})
		});
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "mute-chat"
			},
			title: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e.title }),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: _,
			onCancel: f,
			testid: "mute-popup",
			children: [t != null && u.jsx(o("WAWebText.react").WAWebTextMuted, {
				paddingBottom: 12,
				children: t
			}), h]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
