__d("WAWebSwCallPushNotification", [
	"WALogger",
	"WAWebApiContact",
	"WAWebInitializeWorkerBackendSw",
	"WAWebNotificationWorkerBackend",
	"WAWebSWBusActions",
	"WAWebUserPrefsGeneral",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p = new Set(), _ = "call:";
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n, r, a, i = t.call_id;
			if (i != null && p.has(i)) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[PushNotif] skip call notif - main thread handling ", ""])), i);
				return;
			}
			var l = yield o("WAWebUserPrefsGeneral").getOfflineNotificationContent(), m = t.video_call === "1", f = (n = (r = t.from_username) != null ? r : t.from_device_jid) != null ? n : "Unknown", g = i != null ? "" + _ + i : void 0, h = t.nt === "voip_call_offer_group", y = "Incoming " + (h ? "group " : "") + (m ? "video" : "voice") + " call from {name}", C;
			if (h) {
				var v, S;
				C = m ? (v = l == null ? void 0 : l.callNotificationGroupVideoTitle) != null ? v : y : (S = l == null ? void 0 : l.callNotificationGroupAudioTitle) != null ? S : y;
			} else {
				var R, L;
				C = m ? (R = l == null ? void 0 : l.callNotification1on1VideoTitle) != null ? R : y : (L = l == null ? void 0 : l.callNotification1on1AudioTitle) != null ? L : y;
			}
			var E = C.replace("{name}", f), k = (a = l == null ? void 0 : l.callNotificationBody) != null ? a : "Open WhatsApp Web to answer this call.";
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"[PushNotif] Showing call notification for ",
				" from ",
				""
			])), t.nt, f);
			try {
				yield o("WAWebNotificationWorkerBackend").showCallNotification(E, k, g);
			} catch (e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[PushNotif] Failed to show call notification: ", ""])), e);
				return;
			}
			if (i != null && !p.has(i)) {
				var I = yield b(t);
				if (I != null && I !== f && !p.has(i)) {
					var T = C.replace("{name}", I);
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[PushNotif] Updating call notification with resolved name ", ""])), I);
					try {
						yield o("WAWebNotificationWorkerBackend").showCallNotification(T, k, g);
					} catch (e) {
						o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[PushNotif] update call notif with resolved name failed: ", ""])), e);
					}
				}
			}
		}), g.apply(this, arguments);
	}
	function h(e) {
		return e === r("WAWebSWBusActions").HANDLE_CALL_NOTIFICATION || e === r("WAWebSWBusActions").CLEAR_CALL_NOTIFICATION;
	}
	function y(e, t) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = S(t);
			if (n != null) if (e === r("WAWebSWBusActions").HANDLE_CALL_NOTIFICATION) {
				p.add(n);
				var a = "" + _ + n;
				yield o("WAWebNotificationWorkerBackend").closeCallNotification(a);
			} else e === r("WAWebSWBusActions").CLEAR_CALL_NOTIFICATION && p.delete(n);
		}), C.apply(this, arguments);
	}
	function b(e) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.from_device_jid;
			if (t == null) return null;
			try {
				var n = yield o("WAWebInitializeWorkerBackendSw").initializeDb();
				if (!n) return null;
				var r = o("WAWebWidFactory").createWid(t), a = yield o("WAWebApiContact").getContactRecord(r);
				return (a == null ? void 0 : a.name) || (a == null ? void 0 : a.verifiedName) || (a == null ? void 0 : a.pushname) || null;
			} catch (e) {
				return o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[PushNotif] Failed to resolve caller name: ", ""])), e), null;
			}
		}), v.apply(this, arguments);
	}
	function S(e) {
		if (e != null && typeof e == "object") {
			var t = e.callId;
			if (typeof t == "string") return t;
		}
		return null;
	}
	l.handleCallPushPayload = f, l.isCallAction = h, l.handleCallAction = y;
}), 98);
