__d("WAWasmReactor", [
	"FBLogger",
	"WAPromiseQueue",
	"WAResultOrError",
	"WASI",
	"WASISnapshotPreview1",
	"WASMMemoryLogger",
	"decodeProtobuf",
	"encodeProtobuf",
	"getErrorSafe",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = function() {
		return r("FBLogger")("wmi").tags(["WasmReactor"]);
	}, _ = 3e4;
	function f(e) {
		var t = e.stderr, n = e.stdout;
		return {
			stderr: t,
			stdout: n
		};
	}
	var g = (function() {
		function t(e, t) {
			this.$1 = null, this.$4 = e, this.$3 = t;
		}
		var n = t.prototype;
		return n.init = async function(n) {
			var t = this, a = function(r) {
				p().tags([t.$4]).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), r);
			}, i = function(t) {
				p().INFO(s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])), t);
			}, l = o("WASI").createWasi(f({
				stderr: a,
				stdout: i
			})), u = l.getImportObject, c = l.initialize, d = await n(), m = await WebAssembly.instantiate(d, u()), _ = m.exports.memory, g = r("gkx")("4444"), h = o("WASMMemoryLogger").getOrInitWasmMemoryLogger();
			_ instanceof WebAssembly.Memory && g && h != null && h.addWasmInstanceToSet(_, this.$4), this.$1 = await c(m);
		}, n.createWasmCommand = function(n) {
			var e = n.InputSpec, a = n.ResultSpec, i = n.validateResult, l = this;
			return function(s) {
				return l.$3.enqueue(async function() {
					var n = l.$1;
					if (n == null) return p().tags([l.$4]).MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWasmReactor not initialized"]))), o("WAResultOrError").makeError({
						errorName: "wasm-internal-not-initialized",
						failReason: null
					});
					var d = n.drive, m = "input", _ = "output";
					try {
						var f = o("encodeProtobuf").encodeProtobuf(e, s).readBuffer();
						t.$5(d, m, new Uint8Array(f), l.$4), t.$5(d, _, new Uint8Array(0), l.$4), await n.exports.execute_command();
						var g = t.$6(d, _, l.$4);
						if (g.length === 0) return o("WAResultOrError").makeError({
							errorName: "wasm-internal-runtime-error",
							failReason: null
						});
						var h = o("decodeProtobuf").decodeProtobuf(a, g);
						return i(h);
					} catch (e) {
						var y = r("getErrorSafe")(e);
						return p().tags([l.$4]).catching(y).MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Unexpected runtime error: ", ""])), y.message), o("WAResultOrError").makeError({
							errorName: "wasm-internal-runtime-error",
							failReason: null
						});
					} finally {
						var C = t.$2;
						d.unlink(C, m), d.unlink(C, _);
					}
				});
			};
		}, n.DEPRECATED_createWasmCommand = function(n) {
			var e = n.InputSpec, a = n.ResultSpec, i = n.validateResult, l = this;
			return function(s) {
				return l.$3.enqueue(async function() {
					var n = l.$1;
					if (n == null) return p().tags([l.$4]).MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["WAWasmReactor not initialized"]))), o("WAResultOrError").makeError("wasm-internal-not-initialized");
					var u = n.drive, c = "input", _ = "output";
					try {
						var f = o("encodeProtobuf").encodeProtobuf(e, s).readBuffer();
						t.$5(u, c, new Uint8Array(f), l.$4), t.$5(u, _, new Uint8Array(0), l.$4), await n.exports.execute_command();
						var g = t.$6(u, _, l.$4);
						if (g.length === 0) return o("WAResultOrError").makeError("wasm-internal-runtime-error");
						var h = o("decodeProtobuf").decodeProtobuf(a, g);
						return i(h);
					} catch (e) {
						var y = r("getErrorSafe")(e);
						return p().tags([l.$4]).catching(y).MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Unexpected runtime error: ", ""])), y.message), o("WAResultOrError").makeError("wasm-internal-runtime-error");
					} finally {
						var C = t.$2;
						u.unlink(C, c), u.unlink(C, _);
					}
				});
			};
		}, t.$5 = function(n, r, a, i) {
			var e = n.open(t.$2, r, o("WASISnapshotPreview1").OpenFlags.CREAT || o("WASISnapshotPreview1").OpenFlags.TRUNC, 0);
			if (e[0] !== o("WASISnapshotPreview1").RESULT.SUCCESS) throw p().tags([i]).mustfixThrow("Failed to open file for writing: ", r);
			var l = e[1];
			n.write(l, a), n.close(l);
		}, t.$6 = function(n, r, a) {
			var e = n.open(t.$2, r, 0, 0);
			if (e[0] !== o("WASISnapshotPreview1").RESULT.SUCCESS) throw p().tags([a]).mustfixThrow("Failed to open file for reading: ", r);
			var i = e[1], l = n.stat(i);
			if (l[0] !== o("WASISnapshotPreview1").RESULT.SUCCESS) throw n.close(i), p().tags([a]).mustfixThrow("Failed to stat file: ", r);
			var s = l[1].byteLength, u = n.read(i, s);
			if (n.close(i), u[0] !== o("WASISnapshotPreview1").RESULT.SUCCESS) throw p().tags([a]).mustfixThrow("Failed to read from file ", r);
			return u[1];
		}, t;
	})();
	g.$2 = 3;
	async function h(e, t) {
		var n = new (o("WAPromiseQueue")).PromiseQueue(_), r = new g(t, n);
		return await r.init(e), r;
	}
	l.WAWasmReactor = g, l.createWasmInstance = h;
}), 98);
