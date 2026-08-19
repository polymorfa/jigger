__d("WAWebVoipCallControls.story", [
	"WAWebBoolFunc",
	"WAWebFlex.react",
	"WAWebShowroomStory.react",
	"WAWebVoipCallControls.react",
	"WDSThemes",
	"react",
	"stylex",
	"useWAWebCheckbox"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useLayoutEffect, m = c.useState, p = { controlsContainer: {
		backgroundColor: "x1c7u0tx",
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		paddingTop: "xyamay9",
		paddingInlineEnd: "xv54qhq",
		paddingBottom: "x1l90r2v",
		paddingInlineStart: "xf7dkkf",
		minWidth: "x13o0s5z",
		$$css: !0
	} };
	function _(e) {
		return {
			addEventListener: function() {},
			dispatchEvent: o("WAWebBoolFunc").returnTrue,
			onchange: null,
			removeEventListener: function() {},
			state: e
		};
	}
	function f(e) {
		e === void 0 && (e = "granted"), d(function() {
			var t = "permissions", n = navigator[t];
			if (!(n == null || typeof n.query != "function")) {
				var r = n.query.bind(n);
				return n.query = async function(t) {
					return t.name === "microphone" || t.name === "camera" ? _(e) : r(t);
				}, function() {
					n.query = r;
				};
			}
		}, [e]);
	}
	var g = {
		storyName: "WAWebVoipCallControls",
		section: o("WAWebShowroomStory.react").StorySectionType.OTHER,
		component: r("WAWebVoipCallControls.react"),
		description: "VoIP call control buttons for mute, end call, video toggle, accept/reject calls. Use this to test the mini-player call controls UI.",
		examples: [
			{
				example: y,
				title: "Incoming Audio Call Controls (accept, reject, mute)"
			},
			{
				example: C,
				title: "Incoming Video Call Controls (accept, reject, mute)"
			},
			{
				example: b,
				title: "Active Audio Call Controls (mute audio, end call)"
			},
			{
				example: v,
				title: "Active Video Call Controls (mute, video toggle, end call)"
			}
		]
	};
	function h(t) {
		var n = t.hasCameraAvailable, a = n === void 0 ? !0 : n, i = t.isCallActive, l = t.isCallRinging, s = t.isSelfScreenSharing, c = s === void 0 ? !1 : s, d = t.isVideoCall, _ = t.testid;
		f();
		var g = o("useWAWebCheckbox").useCheckBox("Audio Muted", !1), h = g[0], y = g[1], C = g[2], b = o("useWAWebCheckbox").useCheckBox("Video Muted", !1), v = b[0], S = b[1], R = b[2], L = m("None"), E = L[0], k = L[1];
		function I() {
			k("Accept call clicked");
		}
		function T() {
			k("Reject call clicked");
		}
		function D() {
			k("End call clicked");
		}
		function x() {
			C(!h), k("Mute toggled " + (h ? "on" : "off"));
		}
		function $() {
			R(!v), k("Video toggled " + (v ? "on" : "off"));
		}
		function P() {
			k("Send message clicked");
		}
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 16,
			testid: _,
			children: [
				u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.controlsContainer, o("WDSThemes").WDSDarkTheme), { children: u.jsx(r("WAWebVoipCallControls.react"), {
					chat: null,
					hasCameraAvailable: a,
					isAnyPeerScreenSharing: !1,
					isCallActive: i,
					isCallRinging: l,
					isMuted: h,
					isSelfScreenSharing: c,
					isVideoCall: d,
					isVideoMuted: v,
					onAccept: I,
					onEnd: D,
					onMuteToggle: x,
					onReject: T,
					onSendMessage: P,
					onVideoMuteToggle: $,
					showSendMessage: !0
				}) })) }),
				y,
				d && S,
				u.jsxs("div", {
					className: "xhslqc4 x1pg5gke x1xmf6yo",
					"data-testid": "last-action",
					children: ["Last action: ", E]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		return u.jsx(h, {
			testid: "voip-incoming-call-controls-container",
			isCallActive: !1,
			isCallRinging: !0,
			isVideoCall: !1
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return u.jsx(h, {
			testid: "voip-incoming-video-call-controls-container",
			isCallActive: !1,
			isCallRinging: !0,
			isVideoCall: !0
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return u.jsx(h, {
			testid: "voip-active-audio-call-controls-container",
			hasCameraAvailable: !1,
			isCallActive: !0,
			isCallRinging: !1,
			isVideoCall: !1
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		return u.jsx(h, {
			testid: "voip-active-video-call-controls-container",
			hasCameraAvailable: !0,
			isCallActive: !0,
			isCallRinging: !1,
			isVideoCall: !0
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = g;
}), 98);
