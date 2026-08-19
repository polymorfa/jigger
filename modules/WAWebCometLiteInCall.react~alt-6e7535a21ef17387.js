__d("WAWebCometLiteInCall.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebCometLiteCallControls.react",
	"WAWebCometLiteSelfPreview.react",
	"WAWebFlex.react",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipUiVideoCallPeerVideo.react",
	"WAWebVoipVideoStateUtils",
	"WAWebWaLogoIcon.react",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebVoipCameraAvailability"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useRef, d = {
		root: {
			boxSizing: "x9f619",
			position: "x1n2onr6",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		peerLayer: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x5yr21d",
			zIndex: "x1ja2u2z",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		logo: {
			color: "x1r8hjv8",
			$$css: !0
		},
		logoOverlay: {
			position: "x10l6tqk",
			top: "x17tcrdl",
			insetInlineStart: "x1kwadzz",
			left: null,
			right: null,
			$$css: !0
		},
		controlsOverlay: {
			position: "x10l6tqk",
			bottom: "xo76822",
			insetInlineStart: "x1o0tod",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			$$css: !0
		}
	};
	function m(e) {
		var t, n, a, i = e.selfWid, l = e.wid, m = (a = r("useWAWebEventTargetValue"))(r("WAWebCallCollection"), (t = o("WAWebVoipEventConstants")).getChangeEvent(t.VoipCallCollectionEvents.ACTIVE_CALL), function() {
			return r("WAWebCallCollection").activeCall;
		}), p = a(m, t.getChangeEvent(t.VoipCallModelEvents.IS_VIDEO), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isVideo) != null ? e : !1;
		}, [m]), _ = a(m, t.getChangeEvent(t.VoipCallModelEvents.SELF_MIC_MUTED), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.selfMicMuted) != null ? e : !1;
		}, [m]), f = a(m, t.getChangeEvent(t.VoipCallModelEvents.SELF_VIDEO_STATE), function() {
			var e = r("WAWebCallCollection").activeCall;
			return e != null ? !o("WAWebVoipVideoStateUtils").isVideoEnabled(e.selfVideoState) : !0;
		}, [m]), g = a(m, t.getChangeEvent(t.VoipCallModelEvents.PEER_MIC_MUTED), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.peerMicMuted) != null ? e : !1;
		}, [m]), h = a(m, t.getChangeEvent(t.VoipCallModelEvents.VIDEO_STATE), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowPeerVideo()) != null ? e : !1;
		}, [m]), y = a(m, t.getChangeEvent(t.VoipCallModelEvents.STATE), function() {
			var e;
			return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
		}, [m]), C = r("useWAWebVoipCameraAvailability")(), b = c(null);
		return u.jsxs((n = o("WAWebFlex.react")).FlexColumn, {
			xstyle: d.root,
			testid: "wa-web-lite-in-call",
			children: [
				u.jsx(n.FlexColumn, {
					xstyle: d.peerLayer,
					children: u.jsx(o("WAWebVoipUiVideoCallPeerVideo.react").WAWebVoipUiVideoCallPeerVideo, {
						ref: b,
						peerJid: l.toJid(),
						peerMicMuted: g,
						peerVideoMuted: !h,
						callState: y,
						userId: l
					})
				}),
				u.jsx(n.FlexRow, {
					xstyle: d.logoOverlay,
					children: u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
						height: 36,
						width: 36,
						iconXstyle: d.logo,
						"aria-label": s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(r("WAWebCometLiteSelfPreview.react"), {
					selfWid: i,
					isVideoMuted: f
				}),
				u.jsx(n.FlexRow, {
					justify: "center",
					xstyle: d.controlsOverlay,
					children: u.jsx(r("WAWebCometLiteCallControls.react"), {
						hasCameraAvailable: C,
						isConnected: o("WAWebVoipCallStateUtils").isCallConnected(y),
						isMuted: _,
						isVideoCall: p,
						isVideoMuted: f
					})
				}),
				u.jsxs("div", {
					className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x10l6tqk xo76822 x185fuhz",
					"aria-hidden": !0,
					children: [
						u.jsx("div", { className: "x1xc55vz xdk7pt xt8t1vi x1xc408v x129tdwq x15urzxu x1p8t8ri" }),
						u.jsx("div", { className: "x1xc55vz xdk7pt xt8t1vi x1xc408v x129tdwq x15urzxu x1ers9ju" }),
						u.jsx("div", { className: "x1xc55vz xdk7pt xt8t1vi x1xc408v x129tdwq x15urzxu x1ers9ju" })
					]
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
