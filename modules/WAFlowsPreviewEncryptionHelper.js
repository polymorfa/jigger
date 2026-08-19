__d("WAFlowsPreviewEncryptionHelper", [
	"codedError",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	function e(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			try {
				var n = y(window.crypto.getRandomValues(new Uint8Array(16))), o = yield window.crypto.subtle.generateKey({
					length: 128,
					name: "AES-GCM"
				}, !0, ["encrypt"]), a = y(yield c(o, n, t)), i = yield window.crypto.subtle.exportKey("raw", o), l = yield d(e, i);
				return {
					encryptedAesKey: l,
					encryptedData: a,
					exportedAesKey: i,
					iv: n
				};
			} catch (e) {
				var u = r("getErrorSafe")(e), m = s._(4016015, function(e) {
					return e._(
						/*BTDS*/
						""
					);
				}, function(e, t) {
					return e._(
						/*BTDS*/
						""
					);
				}, {});
				throw m.message = u.message, m.name = u.name, m.description = u.toString(), m;
			}
		}), u.apply(this, arguments);
	}
	function c(e, t, n) {
		var r = new TextEncoder(), o = r.encode(n).buffer;
		return window.crypto.subtle.encrypt({
			iv: new Uint8Array(h(t)),
			name: "AES-GCM",
			tagLength: 128
		}, e, o);
	}
	function d(e, t) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = window.atob(e).replace(/(\r\n|\n|\r)/gm, ""), r = "-----BEGIN PUBLIC KEY-----", o = "-----END PUBLIC KEY-----", a = n.substring(r.length, n.length - o.length), i = window.atob(a), l = g(i), s = yield window.crypto.subtle.importKey("spki", l, {
				hash: "SHA-256",
				name: "RSA-OAEP"
			}, !0, ["encrypt"]), u = yield window.crypto.subtle.encrypt({ name: "RSA-OAEP" }, s, t);
			return y(u);
		}), m.apply(this, arguments);
	}
	function p(e, t, n, r, o) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, o, a) {
			try {
				var i = yield window.crypto.subtle.importKey("raw", e, { name: "AES-GCM" }, !1, ["decrypt"]), l = (function() {
					switch (o) {
						case "100": return new Uint8Array(h(n));
						default: return new Uint8Array(f(h(n)));
					}
				})(), u = yield window.crypto.subtle.decrypt({
					iv: l,
					name: "AES-GCM",
					tagLength: 128
				}, i, h(t)), c = new TextDecoder(), d = c.decode(u);
				return d;
			} catch (e) {
				var m = r("getErrorSafe")(e), p = s._(4016016, function(e) {
					return e._(
						/*BTDS*/
						""
					);
				}, function(e, t) {
					return e._(
						/*BTDS*/
						""
					);
				}, {});
				throw p.message = m.message, p.name = m.name, p.description = m.toString(), p;
			}
		}), _.apply(this, arguments);
	}
	function f(e) {
		for (var t = new Uint8Array(e), n = 0; n < t.length; n++) t[n] = ~t[n];
		return t.buffer;
	}
	function g(e) {
		for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0, o = e.length; r < o; r++) n[r] = e.charCodeAt(r);
		return t;
	}
	function h(e) {
		for (var t = window.atob(e), n = t.length, r = new Uint8Array(n), o = 0; o < n; o++) r[o] = t.charCodeAt(o);
		return r.buffer;
	}
	function y(e) {
		var t = Array.from(new Uint8Array(e)), n = t.map(function(e) {
			return String.fromCharCode(e);
		}).join("");
		return window.btoa(n);
	}
	l.encryptData = e, l.decryptData = p;
}), 226);
