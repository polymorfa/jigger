__d("MAWDeviceRegistrationUtilWorker", [
	"FBLogger",
	"MAWAppVersion",
	"MAWConstants",
	"MAWCurrentUser",
	"URI",
	"WABase64",
	"WADbDeviceRegistration",
	"WAPreRegistrationCrypto",
	"WATimeUtils",
	"WAWorkerGlobalScope",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t) {
		for (var n = new Uint8Array(t), r = e, o = t - 1 | 0; o >= 0; --o) n[o] = r & 255, r = r >>> 8;
		return n;
	}
	function u(e, t, n, r, a, i, l, u) {
		var c, d = (c = o("WABase64")).encodeB64(s(a, 4)), m = c.encodeB64(s(i, 1)), p = c.encodeB64(l), _ = c.encodeB64(s(u.id, 3)), f = c.encodeB64(u.keyPair.publicKey), g = c.encodeB64(u.signature), h = o("MAWAppVersion").getVersionNumber(), y = "appVersion:" + h, C = new Map().set("fbid", e).set("fb_cat", t).set("app_id", n).set("device_id", r).set("e_regid", d).set("e_keytype", m).set("e_ident", p).set("e_skey_id", _).set("e_skey_val", f).set("e_skey_sig", g).set("debug_info", y);
		return C;
	}
	function c(e) {
		var t = [];
		return e.forEach(function(e, n, r) {
			t.push(encodeURIComponent(n) + ("=" + encodeURIComponent(e.toString())));
		}), t.join("&");
	}
	function d(e, t, n) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield o("WAWorkerGlobalScope").workerGlobalScope.fetch(t, {
				body: e,
				headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
				method: "POST",
				priority: "high",
				signal: n
			});
			return r.json();
		}), m.apply(this, arguments);
	}
	function p() {
		var e = Number(o("MAWCurrentUser").getAppID()), t = o("WADbDeviceRegistration").REG_FB_DOMAIN;
		switch (e) {
			case 0x453bf7349370c:
			case 936619743392459:
			case 487152425211411:
			case 0x3ae327b82f808:
				t = o("WADbDeviceRegistration").REG_IGD_DOMAIN;
				break;
			case 772021112871879:
				t = o("WADbDeviceRegistration").REG_MSGR_DOMAIN;
				break;
			default: t = o("WADbDeviceRegistration").REG_FB_DOMAIN;
		}
		return t;
	}
	function _() {
		var t = new (e || (e = (r("URI"))))(p() + o("WADbDeviceRegistration").REGISTRATION_ENDPOINT);
		return t.toString();
	}
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = _(), n;
			try {
				n = yield d(e, t);
			} catch (e) {
				var a = r("getErrorSafe")(e);
				throw r("FBLogger")("messenger_web").mustfixThrow("Post request failed: " + (a == null ? void 0 : a.message) + " url:" + t);
			}
			if (n == null) throw r("FBLogger")("messenger_web").mustfixThrow(o("WADbDeviceRegistration").NULL_RESPONSE_FROM_SERVER);
			if (n.status !== 200) {
				var i, l;
				return r("FBLogger")("messenger_web").warn("WA Server returned status code %s %s while attempting device registration", n.status, (i = n.message) != null ? i : ""), {
					message: (l = n.message) != null ? l : "Empty message",
					status: n.status,
					success: !1
				};
			}
			if (typeof n.wa_device_id != "number") throw r("FBLogger")("messenger_web").mustfixThrow("Device ID from WA Server was not a number");
			if (typeof n.product != "string") throw r("FBLogger")("messenger_web").mustfixThrow("Product info from WA Server was not a string");
			return {
				edge_routing_info: n.edge_routing_info,
				product: n.product,
				status: 200,
				success: !0,
				type: n.type,
				wa_device_id: n.wa_device_id
			};
		}), g.apply(this, arguments);
	}
	function h(e, t, n, r, o, a, i, l) {
		var s = u(e, t, n, r, o, a, i, l), d = c(s);
		return f(d);
	}
	function y() {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAPreRegistrationCrypto").makeRegistrationData();
			return {
				deviceUUID: r("uuidv4")(),
				lastSignedPrekeyId: e.signedPreKey.keyId,
				registrationUnixTime: o("WATimeUtils").unixTime(),
				registrationVersion: o("MAWConstants").CURRENT_REGISTRATION_VERSION,
				signalRegInfo: e
			};
		}), C.apply(this, arguments);
	}
	l.getRegistrationEndpoint = _, l.register = h, l.createNewRegistrationMeta = y;
}), 98);
