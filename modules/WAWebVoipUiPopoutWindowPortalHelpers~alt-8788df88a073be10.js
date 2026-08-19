__d("WAWebVoipUiPopoutWindowPortalHelpers", [
	"JSResourceForInteraction",
	"WALogger",
	"WAWebCallCollection",
	"WAWebLazyLoadedRetriable",
	"WAWebUA",
	"WAWebVoipPopoutWindowState",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = 3e3, g = 500, h = 250, y = 1e4, C = new Map(), b = new WeakMap();
	function v(e, t, n) {
		n === void 0 && (n = !1), t != null ? (C.set(e, t), b.set(t, { isFromPopout: n })) : C.delete(e);
	}
	function S() {
		C.clear();
	}
	function R(e) {
		var t, n;
		return e == null ? !1 : (t = (n = b.get(e)) == null ? void 0 : n.isFromPopout) != null ? t : !1;
	}
	function L() {
		var e = [];
		for (var t of C) {
			var n = t[0], r = t[1];
			R(r) && e.push({
				type: n,
				stream: r
			});
		}
		return e;
	}
	async function E(t, n, a) {
		if (!o("WAWebUA").UA.isSafari || !n || !a) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[voip][popout] skip prime: safari=",
				" vid=",
				" aud=",
				""
			])), String(o("WAWebUA").UA.isSafari), String(n), String(a));
			return;
		}
		try {
			var i, l = (i = t.navigator) == null ? void 0 : i.mediaDevices;
			if (l == null) return;
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[voip][popout] priming Safari cam+mic perm"])));
			var d = await l.getUserMedia({
				audio: !0,
				video: !0
			});
			d.getTracks().forEach(function(e) {
				e.stop();
			}), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip][popout] Safari perm granted, tracks released"])));
		} catch (e) {
			o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[voip][popout] Safari perm prime failed, falling back"]))).catching(r("getErrorSafe")(e));
		}
	}
	var k = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WAWebVoipVideoCameraCapture").__setRef("WAWebVoipUiPopoutWindowPortalHelpers").load();
		return e.WAWebVoipVideoCameraCapture;
	}, "WAWebVoipVideoCameraCapture");
	async function I(e, t) {
		var n, o, a;
		if (((n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id) === t) {
			var i = await k();
			if (((o = r("WAWebCallCollection").activeCall) == null ? void 0 : o.id) === t) {
				var l = i.currentDeviceId, s = i.captureParams, u = i.getLastCapturedStream();
				l == null || l === "" || s == null || u == null || (await i.startCameraCapture({
					camera_id_requested: l,
					height: s.height,
					isAVUpgrade: !1,
					max_fps: s.maxFps,
					targetWindow: e,
					width: s.width
				}), (a = r("WAWebCallCollection").activeCall) == null || a.id);
			}
		}
	}
	async function T(e) {
		var t = null;
		try {
			var n, a;
			if (e == null || ((n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id) !== e) return !1;
			var i = await k();
			if (((a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.id) !== e) return !1;
			var l = i.captureParams, s = i.getLastCapturedStream();
			if (l == null || s == null) return o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: popout reuse: no stream/params, skipping camera repump"]))), !1;
			var u = s.getVideoTracks().some(function(e) {
				return e.readyState === "live";
			});
			return u ? (t = s.clone(), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: popout reuse: repumping camera from cloned stream"]))), await i.startWithStream(t, l.width, l.height, l.maxFps, !0), !0) : (o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: popout reuse: no live video track, skipping camera repump"]))), !1);
		} catch (e) {
			var c;
			return (c = t) == null || c.getTracks().forEach(function(e) {
				e.stop();
			}), o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: popout reuse: camera repump failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-popout-reuse-camera-repump-failed"), !1;
		}
	}
	function D(e) {
		o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("popoutWindowVisibilityChanged", {
			visibilityState: e,
			isCallActiveInPopoutWindow: o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow(),
			hasPopoutWindow: o("WAWebVoipPopoutWindowState").getPopoutWindow() != null
		});
	}
	l.POPOUT_WINDOW_CALL_END_CLOSE_DELAY_MS = f, l.SAFARI_POPOUT_CLOSE_POLL_INTERVAL_MS = g, l.STREAM_REACQUISITION_POLL_INTERVAL_MS = h, l.STREAM_REACQUISITION_TIMEOUT_MS = y, l.setMediaStream = v, l.clearActiveStreams = S, l.getStreamsFromPopout = L, l.primeSafariMediaPermissions = E, l.reacquireCameraInTargetWindow = I, l.reacquireCameraReusingStreamForPopout = T, l.emitPopoutWindowVisibilityChanged = D;
}), 98);
