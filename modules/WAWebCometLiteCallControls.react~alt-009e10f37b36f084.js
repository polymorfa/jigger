__d("WAWebCometLiteCallControls.react", [
	"fbt",
	"WALogger",
	"WAWebCallCollection",
	"WAWebFlex.react",
	"WAWebVoipAcquireMediaStream",
	"WAWebVoipSignalingEnums",
	"WAWebVoipStackInterface",
	"WDSButton.react",
	"WDSIconIcCallEndFilled.react",
	"WDSIconIcMicFilled.react",
	"WDSIconIcMicOffFilled.react",
	"WDSIconIcVideocamFilled.react",
	"WDSIconIcVideocamOffFilled.react",
	"WDSText.react",
	"WDSThemes",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react"));
	async function p(e) {
		var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
		t != null && t.type === "web" && await t.setCallMute(!e);
	}
	async function _(e, t) {
		var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
		if (!(n == null || n.type !== "web")) {
			var r = !e || t;
			r && !await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(!0) || (e ? await n.setCallVideoMute(!t) : await n.requestVideoUpgrade());
		}
	}
	async function f() {
		var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
		if (!(e == null || e.type !== "web")) {
			var t = r("WAWebCallCollection").activeCall;
			t != null && (t.userEndedCall = !0), await e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, !0);
		}
	}
	var g = {
		controls: {
			columnGap: "xs2akgl",
			$$css: !0
		},
		control: {
			rowGap: "x129bwdz",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.hasCameraAvailable, a = t.isConnected, i = t.isMuted, l = t.isVideoCall, d = t.isVideoMuted;
		return m.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: g.controls,
			testid: "wa-web-lite-in-call-controls",
			children: [
				m.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: g.control,
					children: [m.jsx(r("WDSButton.react"), {
						size: "large",
						variant: "filled",
						type: "destructive",
						Icon: r("WDSIconIcCallEndFilled.react"),
						onPress: function() {
							f().catch(function(t) {
								o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebCometLiteCallControls: endCall failed ", ""])), t).sendLogs("comet-lite-end-call");
							});
						},
						testid: "wa-web-lite-in-call-end",
						xstyle: o("WDSThemes").WDSLightTheme,
						"aria-label": s._(
							/*BTDS*/
							""
						)
					}), m.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDefault",
						selectable: !1,
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				a && n && m.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: g.control,
					children: [m.jsx(r("WDSButton.react"), {
						size: "large",
						variant: "tonal",
						type: "media",
						Icon: r(d ? "WDSIconIcVideocamOffFilled.react" : "WDSIconIcVideocamFilled.react"),
						onPress: function() {
							_(l, d).catch(function(e) {
								o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWebCometLiteCallControls: toggleVideo failed ", ""])), e).sendLogs("comet-lite-toggle-video");
							});
						},
						testid: "wa-web-lite-in-call-camera",
						"aria-label": d ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					}), m.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDefault",
						selectable: !1,
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				a && m.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					xstyle: g.control,
					children: [m.jsx(r("WDSButton.react"), {
						size: "large",
						variant: "tonal",
						type: "media",
						Icon: r(i ? "WDSIconIcMicOffFilled.react" : "WDSIconIcMicFilled.react"),
						onPress: function() {
							p(i).catch(function(e) {
								o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WAWebCometLiteCallControls: toggleMute failed ", ""])), e).sendLogs("comet-lite-toggle-mute");
							});
						},
						testid: "wa-web-lite-in-call-mute",
						"aria-label": i ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					}), m.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDefault",
						selectable: !1,
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
