__d("WAWebPttAudioPlayer.react", [
	"fbt",
	"WAAbortError",
	"WAWebABProps",
	"WAWebAccessibility.react",
	"WAWebAppTracker",
	"WAWebClock",
	"WAWebDisplayType",
	"WAWebDocStateControls.react",
	"WAWebEventsWaitForEvent",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10nFilesize",
	"WAWebMsgGetters",
	"WAWebNewsletterGatingUtils",
	"WAWebNoop",
	"WAWebPttGetDurationFromMediaOrProtobuf",
	"WAWebPttGetSafeDuration",
	"WAWebPttMessageSeekBar",
	"WAWebPttMessageWaveform.react",
	"WAWebPttMsgAudioStore",
	"WAWebPttPrefs",
	"WAWebUA",
	"WDSButton.react",
	"WDSIconIcPauseFilled.react",
	"WDSIconIcPlayArrowFilled.react",
	"promiseDone",
	"react",
	"useWAWebAnimationFrames",
	"useWAWebListener",
	"useWAWebMeasure",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebOnUnmount",
	"useWAWebSendViewCount"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useRef, f = d.useState, g = {
		button: {
			position: "x1n2onr6",
			display: "x1lliihq",
			width: "x1691je0",
			height: "x90ne7k",
			color: "xhslqc4",
			$$css: !0
		},
		playControl: {
			color: "x14ug900",
			$$css: !0
		}
	};
	function h(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.displayType, u = i.enableKbSeekSpeedChange, d = u === void 0 ? !1 : u, h = i.mediaData, y = i.msg, S = i.outgoingMsg, R = i.played, L = o("useWAWebMsgValues").useMsgValues(y.id, [
			o("WAWebMsgGetters").getId,
			o("WAWebFrontendMsgGetters").getAsPttLike,
			o("WAWebFrontendMsgGetters").getAsPtt
		]), E = L[0], k = L[1], I = L[2], T = o("useWAWebModelValues").useModelValues((n = i.pttPrefs) != null ? n : o("WAWebPttPrefs").PttPrefs, ["playbackRate"]), D = T.playbackRate, x = o("useWAWebSendViewCount").usePlaybackSendViewCount(i.msg.id, { mediaData: h }), $ = _(D), P = _(0), N = _(null), M = f(function() {
			return o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(y);
		}), w = M[0], A = M[1], F = f(y), O = F[0], B = F[1];
		O !== y && (B(y), A(function(e) {
			var t = o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(y);
			return e.dispose(), t;
		}));
		var W = w.audio, q = w.pttPlaybackLogger, U = f(function() {
			return o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromMediaOrProtobuf(W, h);
		}), V = U[0], H = U[1], G = f(!W.paused), z = G[0], j = G[1], K = f(null), Q = K[0], X = K[1], Y = f(V > 0 ? W.currentTime / V : 0), J = Y[0], Z = Y[1], ee = function(t, n) {
			Z(n > 0 ? t / n : 0);
		}, te = _(!1), ne = function() {
			return J * V;
		}, re = function() {
			if (!te.current) {
				var e = W.currentTime;
				x(e);
				var t = ne();
				e !== t && ee(e, V);
			}
		}, oe = r("useWAWebMeasure")(), ae = oe[0], ie = oe[1], le = ie.width || 200, se = o("WAWebABProps").getABPropConfigValue("web_ptt_render_throttling") ? Math.floor(V * 1e3 / (le * D)) : 0;
		r("useWAWebAnimationFrames")(re, {
			active: z,
			delay: se
		}), r("useWAWebOnUnmount")(function() {
			o("WAWebPttPrefs").PttPrefs.outOfChatPlayerMessage || (q.commit(!0), W.pause()), W.paused && o("WAWebPttPrefs").PttPrefs.clearOutOfChatMessage(y), w.dispose();
		});
		var ue = async function() {
			if (!te.current) {
				te.current = !0;
				var e = k == null ? 1 : D;
				W.playbackRate = e, W.defaultPlaybackRate = e;
				var t = o("WAWebPttGetSafeDuration").getSafeDuration(W);
				if (t == null) {
					var n = r("WAWebEventsWaitForEvent")(W, "durationchange");
					W.load(), await n, t = o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromMediaOrProtobuf(W, h);
				}
				W.currentTime = J * t, W.play().catch(o("WAAbortError").catchAbort(r("WAWebNoop"))), te.current = !1;
			}
		}, ce = function() {
			N.current && (P.current = N.current.getBoundingClientRect().top), z ? W.pause() : r("promiseDone")(ue());
		}, de = function() {
			j(!W.paused), o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PlayPTT);
		}, me = function() {
			return V != null ? V : o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromProto(h);
		}, pe = function() {
			var e = o("WAWebPttGetSafeDuration").getSafeDuration(W), t = me();
			e != null && e !== t && H(e);
		}, _e = function(t) {
			X(t);
		}, fe = function(t) {
			var e = W.duration, n = t === e && !z ? 0 : t;
			ee(n, V), W.currentTime = n, X(null);
		};
		m(function() {
			var e = $.current;
			D !== e && (W.playbackRate = D, W.defaultPlaybackRate = D, $.current = D);
		}, [W, D]);
		var ge = function() {
			o("WAWebPttPrefs").PttPrefs.clearOutOfChatMessage(), j(!W.paused), o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PlayPTT);
		}, he = function() {
			W.currentTime = 0, W.load(), re(), o("WAWebPttPrefs").PttPrefs.clearOutOfChatMessage(), j(!W.paused), o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PlayPTT);
		};
		o("useWAWebListener").useListener(W, "playing", de), o("useWAWebListener").useListener(W, "pause", ge), o("useWAWebListener").useListener(W, "ended", he), o("useWAWebListener").useListener(W, "timeupdate", re), o("useWAWebListener").useListener(W, "durationchange", pe);
		var ye = function(t) {
			t.preventDefault(), ce();
		};
		p(a, function() {
			return { handleKeyActivation: ye };
		});
		var Ce = r(z ? "WDSIconIcPauseFilled.react" : "WDSIconIcPlayArrowFilled.react"), be = z ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), ve = c.jsx(r("WDSButton.react"), {
			Icon: Ce,
			xstyle: [g.button, g.playControl],
			onPress: ce,
			"aria-label": be,
			variant: "borderless",
			size: "large",
			testid: "audio-play"
		}), Se = function(t) {
			return !(d !== !0 || o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC && t.metaKey !== !0 || o("WAWebUA").UA.os !== o("WAWebUA").OS_TYPE.MAC && t.ctrlKey !== !0);
		}, Re = function(t) {
			var e = t.direction, n = t.e;
			Se(n) && (e === "left" ? o("WAWebPttPrefs").PttPrefs.decreasePlaybackRateFor(E) : o("WAWebPttPrefs").PttPrefs.increasePlaybackRateFor(E));
		}, Le = {
			"ctrl+left": function(t) {
				return Re({
					e: t,
					direction: "left"
				});
			},
			"ctrl+right": function(t) {
				return Re({
					e: t,
					direction: "right"
				});
			},
			"meta+left": function(t) {
				return Re({
					e: t,
					direction: "left"
				});
			},
			"meta+right": function(t) {
				return Re({
					e: t,
					direction: "right"
				});
			}
		}, Ee = c.jsx("div", {
			ref: N,
			className: "x10l6tqk x13vifvy xu96u03"
		});
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: d ? Le : {},
			tabIndex: -1,
			children: c.jsxs(b, {
				bodyRef: ae,
				button: ve,
				played: R,
				outgoingMsg: S,
				displayType: l,
				msg: I,
				children: [
					Ee,
					c.jsx(C, {
						duration: z ? ne() : o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromProto(h),
						seekingTime: Q
					}),
					c.jsx(v, {
						msg: y,
						currentTime: ne(),
						duration: V,
						onSeek: _e,
						onSeekEnd: fe,
						outgoing: S,
						played: R != null ? R : !1,
						waveform: h.waveform
					})
				]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	var y = h;
	function C(e) {
		var t = e.duration, n = e.seekingTime, r = n != null ? n : t;
		return r == null ? null : c.jsx("div", {
			className: "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk x1bvqhpb",
			"aria-hidden": !0,
			children: o("WAWebClock").Clock.durationStr(r)
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t, n, a, i = e.spinner === !0 && e.button == null ? c.jsx("button", {
			className: "x1n2onr6 x1lliihq x1691je0 x90ne7k xhslqc4",
			onClick: e.action,
			"data-testid": "audio-player-frame-spinner",
			"aria-label": e.ariaLabel,
			children: c.jsx("div", {
				className: "x10l6tqk x13vifvy xu96u03",
				children: c.jsx(o("WAWebDocStateControls.react").Pending, {
					outgoingMsg: e.outgoingMsg,
					canCancel: e.canCancel
				})
			})
		}) : null, l = e.icon != null && e.button == null && e.spinner !== !0 ? c.jsx("button", {
			className: "x1n2onr6 x1lliihq x1691je0 x90ne7k xhslqc4",
			onClick: e.action,
			"aria-label": e.ariaLabel,
			children: e.icon
		}) : null, u = e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY, d = e.fileSize, m = d != null && d !== 0 ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk x1bvqhpb" },
			1: { className: "x10l6tqk x1fesggd xu96u03 x1ncwhqj x152skdk x1bvqhpb x1cxzzos" }
		}[!!u << 0], { children: o("WAWebL10nFilesize").getL10nFilesize(d) })) : null;
		return c.jsxs("div", {
			className: "x78zum5 x6s0dn4 xzt5al7 x1nbhmlj",
			children: [c.jsxs("div", {
				className: "x1n2onr6 x1lliihq x1okw0bk x1691je0 x90ne7k x1y332i5 x14mko6t",
				children: [
					e.button,
					i,
					l
				]
			}), c.jsxs("div", {
				ref: e.bodyRef,
				className: "x1n2onr6 x98rzlu",
				children: [
					c.jsx(o("WAWebAccessibility.react").InvisibleLabel, { children: s._(
						/*BTDS*/
						""
					) }),
					(t = e.children) != null ? t : c.jsx(v, {
						msg: e.msg,
						currentTime: 0,
						duration: 100,
						onSeek: r("WAWebNoop"),
						onSeekEnd: r("WAWebNoop"),
						outgoing: e.outgoingMsg,
						played: (n = e.played) != null ? n : !1,
						waveform: (a = e.msg) == null ? void 0 : a.mediaData.waveform,
						disabled: !0
					}),
					m
				]
			})]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.currentTime, n = e.disabled, a = e.duration, i = e.msg, l = e.onSeek, s = e.onSeekEnd, u = e.outgoing, d = e.played, m = e.waveform, p = o("useWAWebMsgValues").useOptionalMsgValues(i == null ? void 0 : i.id, [o("WAWebFrontendMsgGetters").getAsPttLike, o("WAWebMsgGetters").getId]), _ = !!(p != null && p[0]), f = _ || o("WAWebNewsletterGatingUtils").isAudioFileWaveformDisplayInNewslettersEnabled();
		return f && m != null ? c.jsx(r("WAWebPttMessageWaveform.react"), {
			currentTime: t,
			duration: a,
			onSeek: l,
			onSeekEnd: s,
			outgoing: u,
			played: d,
			waveform: m,
			disabled: n,
			skipThumb: n
		}) : c.jsx(r("WAWebPttMessageSeekBar"), {
			currentTime: t,
			duration: a,
			onSeek: l,
			onCommit: s,
			outgoing: u,
			played: d,
			disabled: n
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.WrappedAudioPlayer = y, l.AudioPlayerFrame = b;
}), 226);
