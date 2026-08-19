__d("WAWebMediaCapture", [
	"WAGetDisplayMedia",
	"WAGetUserMedia",
	"WALogger",
	"WARetryPromise",
	"WAWebABProps",
	"WAWebGetUserMediaErrors",
	"WAWebGuidePopup.react",
	"WAWebMediaCaptureStreamType",
	"WAWebMediaPermissionsUtils",
	"WAWebModalManager",
	"cr:19603",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = {
		GetUserMediaError: o("WAWebGetUserMediaErrors").GetUserMediaError,
		NotSupportedError: o("WAWebGetUserMediaErrors").NotSupportedError,
		NotAllowedError: o("WAWebGetUserMediaErrors").NotAllowedError,
		ConstraintNotSatisfiedError: o("WAWebGetUserMediaErrors").ConstraintNotSatisfiedError,
		OverconstrainedError: o("WAWebGetUserMediaErrors").OverconstrainedError,
		NotFoundError: o("WAWebGetUserMediaErrors").NotFoundError,
		NotReadableError: o("WAWebGetUserMediaErrors").NotReadableError,
		SourceUnavailableError: o("WAWebGetUserMediaErrors").SourceUnavailableError
	}, p = Object.freeze((e = {}, e[o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE] = 1e3, e[o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA] = 3e3, e[o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE] = 3e3, e));
	function _(e) {
		var t, n = e.featureSurface, a = e.mediaConstraints, i = e.targetWindow, l = e.timeoutCallback, c = e.timeoutLimit, d = e.type, _, h = !1, b = null, v = !1, S = null, R = c != null ? c : p[d];
		function L() {
			b != null && self.clearTimeout(b), R < Number.POSITIVE_INFINITY && (b = self.setTimeout(function() {
				l ? l() : (C(d, n, S), v = !0);
			}, R));
		}
		var E = a != null ? a : g(d), k = i == null || (t = i.navigator) == null ? void 0 : t.mediaDevices, I = d === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA || d === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE || d === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE ? i != null && k != null ? function(e) {
			return k.getUserMedia(e);
		} : o("WAGetUserMedia").getUserMedia : d === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP ? i != null && k != null ? function(e) {
			return k.getDisplayMedia(e);
		} : o("WAGetDisplayMedia").getDisplayMedia : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + d);
		})(), T = (async function(e) {
			S = await y(d), L();
			var t = (e = i == null ? void 0 : i.navigator) != null ? e : navigator, n = !1;
			if (d === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE) {
				var a = await o("WAWebMediaPermissionsUtils").checkMediaPermissionState("microphone", t), l = a.denied;
				n = l;
			} else if (d === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA) {
				var c = await o("WAWebMediaPermissionsUtils").checkMediaPermissionState("camera", t), m = c.denied;
				n = m;
			} else d === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE && (n = await o("WAWebMediaPermissionsUtils").isAnyMediaPermissionDenied(["microphone", "camera"], t));
			if (n) throw o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["MediaCapture: permission already denied, fast-failing"]))), new (o("WAWebGetUserMediaErrors")).NotAllowedError();
			return r("WARetryPromise")(function(e) {
				var t = e.failCount, n = e.retry;
				return new Promise(function(e, r) {
					if (L(), !I) o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["MediaCapture:start() no ability to capture media"]))), r(new (o("WAWebGetUserMediaErrors")).GetUserMediaError());
					else {
						var a = E[t];
						I(a).then(function(e) {
							if (h) {
								f(e);
								return;
							}
							return _ = e, e;
						}).then(e).catch(function(e) {
							if (e.name === "NotReadableError" && E[t + 1]) {
								n();
								return;
							}
							r(e);
						});
					}
				});
			});
		})().catch(function(e) {
			var t = e instanceof Error ? e == null ? void 0 : e.name : e, n = m[t] || o("WAWebGetUserMediaErrors").GetUserMediaError;
			throw new n();
		}).finally(function() {
			v && o("WAWebModalManager").ModalManager.close(), b && self.clearTimeout(b);
		});
		return {
			asyncStream: T,
			disposeStream: function() {
				h = !0, _ && f(_);
			}
		};
	}
	function f(e) {
		if (typeof e.stop == "function") e.stop();
		else for (var t = e.getTracks(), n = 0; n < t.length; n++) t[n].stop();
	}
	function g(e) {
		var t = [];
		e: {
			if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA) {
				t.push.apply(t, h(!1));
				break e;
			}
			if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE) {
				t.push.apply(t, h(!0));
				break e;
			}
			if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE) {
				t.push({ audio: !0 });
				break e;
			}
			if (e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP) {
				var r = h(!1);
				t.push.apply(t, r.map(function(e) {
					return babelHelpers.extends({}, e, {
						preferCurrentTab: !1,
						selfBrowserSurface: "exclude",
						systemAudio: "exclude",
						surfaceSwitching: "include",
						monitorTypeSurfaces: "include"
					});
				}));
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		}
		return n("cr:19603") != null ? n("cr:19603").addSelectedDeviceConstraints(e, t) : t;
	}
	function h(e) {
		var t = o("WAWebABProps").getABPropConfigValue("web_image_max_edge"), n = 1280, r = 720;
		return [
			{
				video: {
					width: t,
					height: t
				},
				audio: e
			},
			{
				video: {
					width: Math.min(n, t),
					height: Math.min(r, t)
				},
				audio: e
			},
			{
				video: !0,
				audio: e
			}
		];
	}
	async function y(e) {
		if (e !== o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE) return null;
		var t = await Promise.all([o("WAWebMediaPermissionsUtils").checkMediaPermissionState("microphone"), o("WAWebMediaPermissionsUtils").checkMediaPermissionState("camera")]), n = t[0].granted, r = t[1].granted;
		return {
			micGranted: n,
			camGranted: r
		};
	}
	function C(e, t, n) {
		var r = n != null ? (function(e) {
			if (e === "camera") return o("WAWebGuidePopup.react").Messaging.CAMERA;
			if (e === "mic") return o("WAWebGuidePopup.react").Messaging.MIC;
			if (e === "camera_and_mic") return o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC;
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})(o("WAWebMediaPermissionsUtils").getDeviceSpecificPermissionMessaging(n.micGranted, n.camGranted)) : o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC, a = e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA ? o("WAWebGuidePopup.react").Messaging.CAMERA : e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE ? o("WAWebGuidePopup.react").Messaging.MIC : e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE ? r : e === o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
		a != null && o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebGuidePopup.react").GuidePopup, {
			messaging: a,
			type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_ALLOW,
			featureSurface: t
		}));
	}
	var b;
	function v() {
		return b === void 0 && (b = "srcObject" in document.createElement("video")), b;
	}
	l.start = _, l.stop = f, l.isSrcObjectInVideoElement = v;
}), 98);
