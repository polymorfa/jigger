__d("WAKemModule", ["err", "requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("WAGetLiboqsWasm").__setRef("WAKemModule"), s = 1568, u = 3168, c = 1568, d = 32, m = "ML-KEM-1024", p = 0, _ = null, f = 0, g = null;
	function h() {
		if (_ == null) throw r("err")("KEM: WASM module not initialized");
		return _;
	}
	function y() {
		return _ != null && f !== 0 ? Promise.resolve() : (g != null || (g = C().catch(function(e) {
			throw _ = null, f = 0, g = null, e;
		})), g);
	}
	async function C() {
		var t = await e.load(), n = t.loadLiboqsWasm, o = await n();
		_ = o;
		var a = T(m);
		try {
			if (f = o._create_kem(a), f === 0) throw r("err")("KEM: Failed to create ML-KEM-1024 instance");
		} finally {
			o._free(a);
		}
	}
	async function b() {
		await y();
		var e = h(), t = e._malloc(s), n = e._malloc(u);
		try {
			var o = e._keypair(f, t, n);
			if (o !== p) throw r("err")("KEM: keypair generation failed with code " + o);
			return {
				publicKey: D(t, s),
				secretKey: D(n, u)
			};
		} finally {
			e._free(t), e._free(n);
		}
	}
	async function v(e) {
		await y();
		var t = h();
		if (e.length !== s) throw r("err")("KEM: invalid public key length " + e.length + ", " + ("expected " + s));
		var n = I(e), o = t._malloc(c), a = t._malloc(d);
		try {
			var i = t._encaps(f, o, a, n);
			if (i !== p) throw r("err")("KEM: encapsulation failed with code " + i);
			return {
				ciphertext: D(o, c),
				sharedSecret: D(a, d)
			};
		} finally {
			t._free(n), t._free(o), t._free(a);
		}
	}
	async function S(e, t) {
		await y();
		var n = h();
		if (e.length !== c) throw r("err")("KEM: invalid ciphertext length " + e.length + ", " + ("expected " + c));
		if (t.length !== u) throw r("err")("KEM: invalid secret key length " + t.length + ", " + ("expected " + u));
		var o = I(e), a = I(t), i = n._malloc(d);
		try {
			var l = n._decaps(f, i, o, a);
			if (l !== p) throw r("err")("KEM: decapsulation failed with code " + l);
			return D(i, d);
		} finally {
			n._free(o), n._free(a), n._free(i);
		}
	}
	var R = s, L = u, E = c, k = d;
	function I(e) {
		var t = h(), n = t._malloc(e.length);
		if (n === 0) throw r("err")("KEM: WASM _malloc failed (out of memory)");
		return t.HEAPU8.set(e, n), n;
	}
	function T(e) {
		var t = new TextEncoder(), n = t.encode(e + "\0");
		return I(new Uint8Array(n));
	}
	function D(e, t) {
		var n = h(), r = new Uint8Array(t);
		return r.set(n.HEAPU8.subarray(e, e + t)), r;
	}
	l.generateKeyPair = b, l.encapsulate = v, l.decapsulate = S, l.KYBER_PUBLIC_KEY_BYTES = R, l.KYBER_SECRET_KEY_BYTES = L, l.KYBER_CIPHERTEXT_BYTES = E, l.KYBER_SHARED_SECRET_BYTES = k;
}), 98);
