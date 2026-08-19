__d("WAWebDebugRaTls", [
	"WABase64",
	"WALogger",
	"WATheiaRaTls",
	"WAWebTEENodeTokenThriftFetcher",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = new Uint8Array(0), m = 100, p = 1e4, _ = 3e4, f = 32, g = Object.freeze({
		0: "CONNECTING",
		1: "OPEN",
		2: "CLOSING",
		3: "CLOSED"
	}), h = Object.freeze((e = {}, e[(c = o("WATheiaRaTls")).WATheiaRaTlsState.INIT.valueOf()] = "INIT", e[c.WATheiaRaTlsState.CONNECTING.valueOf()] = "CONNECTING", e[c.WATheiaRaTlsState.CONNECTED.valueOf()] = "CONNECTED", e[c.WATheiaRaTlsState.CLOSED.valueOf()] = "CLOSED", e[c.WATheiaRaTlsState.ERROR.valueOf()] = "ERROR", e)), y = "wss://teellm.meta.com?x-tee-node-token=<redacted>", C = 1;
	async function b(e, t, n, a) {
		e === void 0 && (e = o("WATheiaRaTls").WATheiaRaTlsClientPolicy.DEBUG), t === void 0 && (t = !0), n === void 0 && (n = "rc"), a === void 0 && (a = !1);
		var i = C++, l = null, c = null;
		try {
			var d = await o("WAWebTEENodeTokenThriftFetcher").fetchNodeTokenViaThrift(n, a), m = d.nodeToken, p = S(o("WABase64").encodeB64(m)), _ = await o("WATheiaRaTls").loadWATheiaRaTls();
			l = _.createSession(e, {
				enableTheiaV2Mode: !0,
				requestTransparencyReport: !0,
				shouldVerifyCert: t
			}), c = await v(p, i);
			var f = await R(l, c, i), g = x(l, e, f);
			return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"[ratls-wasm] connected policy=",
				" steps=",
				" sent=",
				" received=",
				""
			])), e, String(g.handshakeSteps), String(g.sentBytes), String(g.receivedBytes)), g;
		} catch (e) {
			throw o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[ratls-wasm] debug handshake failed"]))).catching(r("getErrorSafe")(e)).sendLogs("ratls-wasm-debug-handshake-failed"), e;
		} finally {
			l != null && l.close(), $(c, i);
		}
	}
	b.doc = "Full flow: fetch a TEE node token via the dev-only thrift endpoint, then run a browser RA-TLS WASM handshake against the teellm WebSocket endpoint. Optional args: clientPolicy, shouldVerifyCert, env, useAcs.", b.paramsToExecute = [];
	function v(e, t) {
		return new Promise(function(n, o) {
			var a = new WebSocket(e);
			a.binaryType = "arraybuffer";
			var i = null, l = function() {
				i != null && self.clearTimeout(i), a.removeEventListener("open", s), a.removeEventListener("error", u), a.removeEventListener("close", c);
			}, s = function() {
				l(), n(a);
			}, u = function(t) {
				l(), o(r("err")("RA-TLS WebSocket open failed"));
			}, c = function(t) {
				l(), o(P(t));
			};
			i = self.setTimeout(function() {
				l(), $(a, t), o(r("err")("RA-TLS WebSocket open timed out"));
			}, p), a.addEventListener("open", s), a.addEventListener("error", u), a.addEventListener("close", c);
		});
	}
	function S(e) {
		return "wss://teellm.meta.com/alpha.teellm.wa.meta.com?x-tee-node-token=" + encodeURIComponent(e);
	}
	async function R(e, t, n) {
		var o = I(t, n), a = null, i = new Promise(function(e, t) {
			a = self.setTimeout(function() {
				t(r("err")("RA-TLS WebSocket handshake timed out"));
			}, _);
		});
		try {
			var l = await Promise.race([L(e, t, o, n), i]);
			return l;
		} catch (e) {
			throw e;
		} finally {
			a != null && self.clearTimeout(a), o.dispose();
		}
	}
	async function L(e, t, n, r) {
		var o = {
			finalAdditionalErrorCode: 0,
			handshakeSteps: 0,
			receivedBytes: 0,
			sentBytes: 0
		}, a = e.performHandshake(d, d, d);
		return k(e, t, o, a, r), await E(e, t, n, o, r), o;
	}
	async function E(e, t, n, a, i) {
		var l = e.getState();
		if (l !== o("WATheiaRaTls").WATheiaRaTlsState.CONNECTED.valueOf()) {
			if (a.handshakeSteps >= m) throw r("err")("RA-TLS handshake did not connect after " + String(a.handshakeSteps) + " steps");
			var s;
			try {
				s = await n.read();
			} catch (e) {
				throw e;
			}
			a.receivedBytes += s.length;
			var u = e.performHandshake(d, s, d);
			return k(e, t, a, u, i), E(e, t, n, a, i);
		}
	}
	function k(e, t, n, a, i) {
		n.handshakeSteps += 1, n.finalAdditionalErrorCode = a.additionalErrorCode;
		var l = e.getState();
		if (n.sentBytes += D(t, a.sendBuffer, i, n.handshakeSteps), l === o("WATheiaRaTls").WATheiaRaTlsState.ERROR.valueOf()) throw r("err")("RA-TLS handshake failed with code " + String(a.additionalErrorCode));
	}
	function I(e, t) {
		var n = [], o = [], a = null, i = function() {
			for (; n.length > 0 && o.length > 0;) {
				var e = n.shift(), t = o.shift();
				e != null && t != null && t.resolve(e);
			}
		}, l = function(t) {
			for (a = t; o.length > 0;) {
				var e = o.shift();
				e != null && e.reject(t);
			}
		}, s = function(t) {
			T(t.data).then(function(e) {
				e.length > 0 && (n.push(e), i());
			}).catch(function(e) {
				l(r("getErrorSafe")(e));
			});
		}, u = function(t) {
			l(r("err")("RA-TLS WebSocket read failed"));
		}, c = function(t) {
			l(P(t));
		};
		return e.addEventListener("message", s), e.addEventListener("error", u), e.addEventListener("close", c), {
			read: function() {
				var e = n.shift();
				return e != null ? Promise.resolve(e) : a != null ? Promise.reject(a) : new Promise(function(e, t) {
					o.push({
						resolve: e,
						reject: t
					});
				});
			},
			dispose: function() {
				e.removeEventListener("message", s), e.removeEventListener("error", u), e.removeEventListener("close", c), l(r("err")("RA-TLS WebSocket byte reader disposed"));
			}
		};
	}
	async function T(e) {
		if (e instanceof ArrayBuffer) return new Uint8Array(e);
		if (Blob !== void 0 && e instanceof Blob) return new Uint8Array(await e.arrayBuffer());
		throw r("err")("RA-TLS WebSocket returned non-binary data");
	}
	function D(e, t, n, r) {
		if (t.length === 0) return 0;
		try {
			e.send(t);
		} catch (e) {
			throw e;
		}
		return t.length;
	}
	function x(e, t, n) {
		return {
			attestationBundleCount: e.getAttestationBundles().length,
			clientPolicy: t,
			endpoint: y,
			finalAdditionalErrorCode: n.finalAdditionalErrorCode,
			handshakeSteps: n.handshakeSteps,
			localServiceTransparencyStreamCount: Object.keys(e.getLocalServiceTransparencyReport()).length,
			receivedBytes: n.receivedBytes,
			sentBytes: n.sentBytes,
			state: "CONNECTED"
		};
	}
	function $(e, t) {
		e != null && e.readyState !== WebSocket.CLOSED && e.close();
	}
	function P(e) {
		return r("err")("RA-TLS WebSocket closed before handshake completed " + V(e));
	}
	function N(e) {
		try {
			var t = new URL(e), n = [];
			t.searchParams.forEach(function(e, t) {
				n.push(t);
			});
			var r = t.searchParams.get("x-tee-node-token");
			return {
				host: t.host,
				nodeTokenLength: r == null ? 0 : r.length,
				nodeTokenPresent: r != null && r.length > 0,
				pathname: t.pathname,
				protocol: t.protocol,
				redacted: y,
				searchParamNames: n.sort()
			};
		} catch (e) {
			return {
				error: z(e),
				redacted: y
			};
		}
	}
	function M(e) {
		return e == null ? null : {
			binaryType: e.binaryType,
			bufferedAmount: e.bufferedAmount,
			readyState: e.readyState,
			readyStateName: H(e.readyState),
			url: y
		};
	}
	function w(e) {
		return {
			finalAdditionalErrorCode: e.finalAdditionalErrorCode,
			handshakeSteps: e.handshakeSteps,
			receivedBytes: e.receivedBytes,
			sentBytes: e.sentBytes
		};
	}
	function A(e) {
		return {
			additionalErrorCode: e.additionalErrorCode,
			recvBuffer: B(e.recvBuffer),
			sendBuffer: B(e.sendBuffer),
			state: e.state,
			stateName: G(e.state),
			transparencyReportDataBuffer: B(e.transparencyReportDataBuffer)
		};
	}
	function F(e) {
		if (e == null) return null;
		try {
			return O(e.getState());
		} catch (e) {
			return {
				error: z(e),
				state: null,
				stateName: "unavailable"
			};
		}
	}
	function O(e) {
		return {
			state: e,
			stateName: G(e)
		};
	}
	function B(e) {
		var t = Math.min(e.length, f);
		if (e.length <= f) return {
			length: e.length,
			previewHex: W(e, 0, t),
			previewLength: t
		};
		var n = Math.max(t, e.length - f);
		return {
			length: e.length,
			previewHex: W(e, 0, t),
			previewLength: t,
			tailHex: W(e, n, e.length),
			tailLength: e.length - n,
			truncatedBytes: n - t
		};
	}
	function W(e, t, n) {
		for (var r = [], o = t; o < n; o++) r.push(e[o].toString(16).padStart(2, "0"));
		return r.join("");
	}
	function q(e) {
		return e instanceof ArrayBuffer ? "ArrayBuffer" : Blob !== void 0 && e instanceof Blob ? "Blob" : typeof e;
	}
	function U(e) {
		return CloseEvent !== void 0 && e instanceof CloseEvent ? {
			code: e.code,
			reason: e.reason,
			type: e.type,
			wasClean: e.wasClean
		} : { type: e.type };
	}
	function V(e) {
		var t, n = U(e);
		return n.code == null ? n.type : n.type + " code=" + String(n.code) + " wasClean=" + String(n.wasClean) + " reason=" + ((t = n.reason) != null ? t : "");
	}
	function H(e) {
		var t;
		return (t = g[e]) != null ? t : "UNKNOWN";
	}
	function G(e) {
		var t;
		return (t = h[e]) != null ? t : "UNKNOWN";
	}
	function z(e) {
		return e instanceof Error ? {
			message: e.message,
			name: e.name,
			stack: e.stack
		} : { message: String(e) };
	}
	var j = { runTheiaRaTlsHandshake: b };
	l.default = j;
}), 98);
