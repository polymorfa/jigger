__d("WDSIconWdsIcMetaAiConversationStarterVoiceAudioWave.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-meta-ai-conversation-starter-voice-audio-wave";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", {
				fill: "currentColor",
				d: "M4.57 8.98a1.48 1.48 0 1 1 2.96 0v6.04a1.48 1.48 0 0 1-2.96 0V8.98Zm12.38 0a1.48 1.48 0 0 1 2.95 0v6.04a1.48 1.48 0 1 1-2.95 0V8.98ZM10.74 5.5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
