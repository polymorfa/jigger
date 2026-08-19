__d("WAWebSwVideoStreamer", [
	"Promise",
	"WACryptoUtils",
	"WALogger",
	"WATypedArraysConcat",
	"WAWebCryptoDecryptPartialMedia",
	"WAWebSWBus",
	"WAWebSWBusActions",
	"WAWebSwUtils",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = 1024, d = 64 * c, m = d * 24, p = (function() {
		function t(e, t, n) {
			this.generation = 0;
			for (var r = t.sidecar, a = [], i = 0; i < r.byteLength; i += o("WAWebCryptoDecryptPartialMedia").HMAC_SIZE) a.push(r.slice(i, i + o("WAWebCryptoDecryptPartialMedia").HMAC_SIZE));
			this.cryptoKeys = {
				iv: t.iv,
				sidecar: a,
				encKey: t.encKey,
				macKey: t.macKey
			}, this.streamData = n, this.clientId = e;
		}
		var a = t.prototype;
		return a.fetchAndDecrypt = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = this, a = this.streamData, i = a.clientUrl, l = a.msgKey, u = _(t), c = u.clientRangeEnd, d = u.clientRangeStart, m = this.computeServerRange(d, c), p = m.serverRangeEnd, f = m.serverRangeStart, g = this.createServerRequest(t, f, p, i), h = yield self.fetch(g);
				if (h.status === 404) return this.handleRMR(t, l);
				if (h.status >= 400) return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sw] videoStreaming processRequest server returns ", " error"])), h.status), this.generation++, r("WAWebSWBus").request(this.clientId, r("WAWebSWBusActions").EXP_BACKOFF, { generation: this.generation }).then(function() {
					return n.fetchAndDecrypt(t);
				});
				this.generation = 0;
				var y = yield h.arrayBuffer(), C = y.byteLength;
				if (!y || C < o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[sw] videoStreaming ciphertext too short ", "B"])), C), new Response("Ciphertext is too short - " + C + " bytes", { status: 500 });
				yield this.validateSidecar(f, y);
				var b = yield o("WAWebCryptoDecryptPartialMedia").cleanupCiphertextAndIv({
					serverRangeStart: f,
					ciphertext: y,
					mediaKeys: this.cryptoKeys
				}), v = b.ciphertext, S = b.iv, R = yield o("WAWebCryptoDecryptPartialMedia").decrypt({
					ciphertext: v,
					iv: S,
					mediaKeys: this.cryptoKeys
				}), L = this.cleanupPlaintext({
					clientRangeEnd: c,
					clientRangeStart: d,
					plaintext: R,
					serverRangeEnd: p,
					serverRangeStart: f
				}), E = this.createClientResponse(h, L, d);
				return this.sendBackArrayBuffer(d, L), E;
			});
			function a(e) {
				return t.apply(this, arguments);
			}
			return a;
		})(), a.handleRMR = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = yield r("WAWebSWBus").request(this.clientId, r("WAWebSWBusActions").REQUEST_RMR, { key: t });
				return this.cryptoKeys.encKey = n.encKey, this.cryptoKeys.iv = n.iv, this.streamData.clientUrl = n.clientUrl, this.streamData.size = n.size, this.fetchAndDecrypt(e);
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.cleanupPlaintext = function(t) {
			var e = t.clientRangeEnd, n = t.clientRangeStart, r = t.plaintext, a = t.serverRangeEnd, i = t.serverRangeStart, l = i === 0 ? 0 : n - (i + o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE), s = e != null ? a - e : 0;
			return r.slice(l, r.byteLength - s);
		}, a.validateSidecar = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var r = t, a = this.cryptoKeys, i = a.iv, l = a.macKey, s = a.sidecar, c = {
					name: "HMAC",
					hash: { name: "SHA-256" }
				}, m, p;
				e === 0 ? (m = 0, p = i) : (m = (e + o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE) / d, p = r.slice(0, o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE), r = r.slice(o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE));
				for (var _ = r.byteLength / d, f = yield self.crypto.subtle.importKey("raw", new Uint8Array(l), c, !1, ["sign"]), g = [], h = 0; h < _; h++) {
					var y = m + h, C = s[y], b = h * d, v = r.slice(b, b + d), S = p;
					p = v.slice(d - o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE, d - o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE + o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE);
					var R = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [new Uint8Array(S), new Uint8Array(v)]);
					g.push(this.validateChunk(R, f, C));
				}
				return (u || (u = n("Promise"))).all(g);
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.validateChunk = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
				var i = yield self.crypto.subtle.sign({ name: "HMAC" }, t, e), l = i.slice(0, o("WAWebCryptoDecryptPartialMedia").HMAC_SIZE);
				if (!o("WACryptoUtils").arrayBuffersEqual(l, a)) return (u || (u = n("Promise"))).reject(r("err")("Invalid Chunk: Does not match sidecar."));
			});
			function t(t, n, r) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.createClientResponse = function(t, n, r) {
			var e = this.streamData.size, o = this.getContentRange(r, n), a = o.contentRangeEnd, i = o.contentRangeStart, l = "bytes " + i + "-" + a + "/" + e, s = new Headers(t.headers);
			s.set("Content-Range", l), s.set("Content-Length", "" + n.byteLength);
			var u = new Response(n, {
				status: t.status === 200 ? 206 : t.status,
				statusText: t.statusText,
				headers: s
			});
			return u;
		}, a.getContentRange = function(t, n) {
			var e = t, r = t + n.byteLength - 1;
			return {
				contentRangeStart: e,
				contentRangeEnd: r
			};
		}, a.sendBackArrayBuffer = function(t, n) {
			var e = this.getContentRange(t, n), o = e.contentRangeEnd, a = e.contentRangeStart, i = {
				start: a,
				end: o,
				buffer: n
			};
			r("WAWebSWBus").request(this.clientId, r("WAWebSWBusActions").SEND_STREAMING_CHUNK, {
				msgKey: this.streamData.msgKey,
				data: i
			});
		}, a.createServerRequest = function(t, n, r, a) {
			var e = new URL(a);
			e.searchParams.set("bytestart", n.toString()), e.searchParams.set("byteend", r.toString());
			var i = o("WAWebSwUtils").manuallyCloneRequest(t, e.toString(), {
				credentials: "omit",
				headers: new Headers({}),
				mode: "cors",
				referrer: t.referrer
			});
			return i;
		}, a.computeServerRange = function(t, n) {
			var e = t, r = n;
			return t ? e = this.roundDown(t, d) : e = 0, n != null && n !== 0 ? r = this.roundUp(n, d) - 1 : r = e + m - 1, e > 0 && (e -= o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE), {
				serverRangeStart: e,
				serverRangeEnd: r
			};
		}, a.roundUp = function(t, n) {
			return Math.ceil(t / n) * n;
		}, a.roundDown = function(t, n) {
			return Math.floor(t / n) * n;
		}, t;
	})();
	function _(e) {
		var t = f(e), n = t.clientRangeEndString, r = t.clientRangeStartString, o = parseInt(r, 10), a = parseInt(n, 10);
		return {
			clientRangeStart: isNaN(o) ? 0 : o,
			clientRangeEnd: isNaN(a) ? null : a
		};
	}
	function f(e) {
		var t = e.headers.get("Range");
		if (t) {
			var n = t.replace("bytes=", "").split("-"), r = n[0], o = n[1];
			return {
				clientRangeStartString: r,
				clientRangeEndString: o
			};
		}
		var a = new URL(e.url);
		return {
			clientRangeStartString: a.searchParams.get("bytesstart"),
			clientRangeEndString: a.searchParams.get("bytesend")
		};
	}
	l.VideoStreamer = p;
}), 98);
