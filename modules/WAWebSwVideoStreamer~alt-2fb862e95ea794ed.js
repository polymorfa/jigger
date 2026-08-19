__d("WAWebSwVideoStreamer", [
	"WACryptoUtils",
	"WALogger",
	"WATypedArraysConcat",
	"WAWebCryptoDecryptPartialMedia",
	"WAWebSWBus",
	"WAWebSWBusActions",
	"WAWebSwUtils",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = 1024, c = 64 * u, d = c * 24, m = (function() {
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
		var n = t.prototype;
		return n.fetchAndDecrypt = async function(n) {
			var t = this, a = this.streamData, i = a.clientUrl, l = a.msgKey, u = p(n), c = u.clientRangeEnd, d = u.clientRangeStart, m = this.computeServerRange(d, c), _ = m.serverRangeEnd, f = m.serverRangeStart, g = this.createServerRequest(n, f, _, i), h = await self.fetch(g);
			if (h.status === 404) return this.handleRMR(n, l);
			if (h.status >= 400) return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sw] videoStreaming processRequest server returns ", " error"])), h.status), this.generation++, r("WAWebSWBus").request(this.clientId, r("WAWebSWBusActions").EXP_BACKOFF, { generation: this.generation }).then(function() {
				return t.fetchAndDecrypt(n);
			});
			this.generation = 0;
			var y = await h.arrayBuffer(), C = y.byteLength;
			if (!y || C < o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[sw] videoStreaming ciphertext too short ", "B"])), C), new Response("Ciphertext is too short - " + C + " bytes", { status: 500 });
			await this.validateSidecar(f, y);
			var b = await o("WAWebCryptoDecryptPartialMedia").cleanupCiphertextAndIv({
				serverRangeStart: f,
				ciphertext: y,
				mediaKeys: this.cryptoKeys
			}), v = b.ciphertext, S = b.iv, R = await o("WAWebCryptoDecryptPartialMedia").decrypt({
				ciphertext: v,
				iv: S,
				mediaKeys: this.cryptoKeys
			}), L = this.cleanupPlaintext({
				clientRangeEnd: c,
				clientRangeStart: d,
				plaintext: R,
				serverRangeEnd: _,
				serverRangeStart: f
			}), E = this.createClientResponse(h, L, d);
			return this.sendBackArrayBuffer(d, L), E;
		}, n.handleRMR = async function(t, n) {
			var e = await r("WAWebSWBus").request(this.clientId, r("WAWebSWBusActions").REQUEST_RMR, { key: n });
			return this.cryptoKeys.encKey = e.encKey, this.cryptoKeys.iv = e.iv, this.streamData.clientUrl = e.clientUrl, this.streamData.size = e.size, this.fetchAndDecrypt(t);
		}, n.cleanupPlaintext = function(t) {
			var e = t.clientRangeEnd, n = t.clientRangeStart, r = t.plaintext, a = t.serverRangeEnd, i = t.serverRangeStart, l = i === 0 ? 0 : n - (i + o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE), s = e != null ? a - e : 0;
			return r.slice(l, r.byteLength - s);
		}, n.validateSidecar = async function(t, n) {
			var e = n, r = this.cryptoKeys, a = r.iv, i = r.macKey, l = r.sidecar, s = {
				name: "HMAC",
				hash: { name: "SHA-256" }
			}, u, d;
			t === 0 ? (u = 0, d = a) : (u = (t + o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE) / c, d = e.slice(0, o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE), e = e.slice(o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE));
			for (var m = e.byteLength / c, p = await self.crypto.subtle.importKey("raw", new Uint8Array(i), s, !1, ["sign"]), _ = [], f = 0; f < m; f++) {
				var g = u + f, h = l[g], y = f * c, C = e.slice(y, y + c), b = d;
				d = C.slice(c - o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE, c - o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE + o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE);
				var v = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [new Uint8Array(b), new Uint8Array(C)]);
				_.push(this.validateChunk(v, p, h));
			}
			return Promise.all(_);
		}, n.validateChunk = async function(t, n, a) {
			var e = await self.crypto.subtle.sign({ name: "HMAC" }, n, t), i = e.slice(0, o("WAWebCryptoDecryptPartialMedia").HMAC_SIZE);
			if (!o("WACryptoUtils").arrayBuffersEqual(i, a)) return Promise.reject(r("err")("Invalid Chunk: Does not match sidecar."));
		}, n.createClientResponse = function(t, n, r) {
			var e = this.streamData.size, o = this.getContentRange(r, n), a = o.contentRangeEnd, i = o.contentRangeStart, l = "bytes " + i + "-" + a + "/" + e, s = new Headers(t.headers);
			s.set("Content-Range", l), s.set("Content-Length", "" + n.byteLength);
			var u = new Response(n, {
				status: t.status === 200 ? 206 : t.status,
				statusText: t.statusText,
				headers: s
			});
			return u;
		}, n.getContentRange = function(t, n) {
			var e = t, r = t + n.byteLength - 1;
			return {
				contentRangeStart: e,
				contentRangeEnd: r
			};
		}, n.sendBackArrayBuffer = function(t, n) {
			var e = this.getContentRange(t, n), o = e.contentRangeEnd, a = e.contentRangeStart, i = {
				start: a,
				end: o,
				buffer: n
			};
			r("WAWebSWBus").request(this.clientId, r("WAWebSWBusActions").SEND_STREAMING_CHUNK, {
				msgKey: this.streamData.msgKey,
				data: i
			});
		}, n.createServerRequest = function(t, n, r, a) {
			var e = new URL(a);
			e.searchParams.set("bytestart", n.toString()), e.searchParams.set("byteend", r.toString());
			var i = o("WAWebSwUtils").manuallyCloneRequest(t, e.toString(), {
				credentials: "omit",
				headers: new Headers({}),
				mode: "cors",
				referrer: t.referrer
			});
			return i;
		}, n.computeServerRange = function(t, n) {
			var e = t, r = n;
			return t ? e = this.roundDown(t, c) : e = 0, n != null && n !== 0 ? r = this.roundUp(n, c) - 1 : r = e + d - 1, e > 0 && (e -= o("WAWebCryptoDecryptPartialMedia").BLOCK_SIZE), {
				serverRangeStart: e,
				serverRangeEnd: r
			};
		}, n.roundUp = function(t, n) {
			return Math.ceil(t / n) * n;
		}, n.roundDown = function(t, n) {
			return Math.floor(t / n) * n;
		}, t;
	})();
	function p(e) {
		var t = _(e), n = t.clientRangeEndString, r = t.clientRangeStartString, o = parseInt(r, 10), a = parseInt(n, 10);
		return {
			clientRangeStart: isNaN(o) ? 0 : o,
			clientRangeEnd: isNaN(a) ? null : a
		};
	}
	function _(e) {
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
	l.VideoStreamer = m;
}), 98);
