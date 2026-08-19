__d("WAWebVoipWebWasmLoader_ProdLabvideo_internal.worker", [
	"WorkerBundleResource",
	"WorkerClient",
	"WorkerMessagePort",
	"bx"
], (function(t, n, r, o, a, i, l) {
	var e = ["type", "__name"], s, u = r("bx").getURL(r("bx")("78865"), { cacheBreaker: "1786009127559" }), c = (function() {
		var t = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0;
		return function(r) {
			var a = this;
			r === void 0 && (r = {});
			function i() {
				return O.buffer != H.buffer && ee(), H;
			}
			function l() {
				return O.buffer != H.buffer && ee(), G;
			}
			function c() {
				return O.buffer != H.buffer && ee(), z;
			}
			function d() {
				return O.buffer != H.buffer && ee(), j;
			}
			function m() {
				return O.buffer != H.buffer && ee(), K;
			}
			function p() {
				return O.buffer != H.buffer && ee(), Q;
			}
			function _() {
				return O.buffer != H.buffer && ee(), X;
			}
			function f() {
				return O.buffer != H.buffer && ee(), Z;
			}
			var g = r, h, y;
			g.ready = new Promise(function(e, t) {
				h = e, y = t;
			}), [
				"_malloc",
				"_free",
				"__emscripten_thread_init",
				"__emscripten_thread_exit",
				"__emscripten_thread_crashed",
				"__emscripten_thread_mailbox_await",
				"__emscripten_tls_init",
				"_pthread_self",
				"checkMailbox",
				"establishStackSpace",
				"invokeEntryPoint",
				"PThread",
				"getExceptionMessage",
				"___get_exception_message",
				"_on_call_event_js_sync",
				"_wasm_throw_ml_abort",
				"_set_ml_inference_flag",
				"_patch_abort_for_ml_inference",
				"_get_persistent_directory_path_js",
				"_get_bwe_ml_model_path_js",
				"_get_random_bytes_js",
				"_is_participant_known_contact_js",
				"_renderVideoFrame_js",
				"_sendSignalingXMPP_js_sync",
				"_fflush",
				"___indirect_function_table",
				"__ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
				"__ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj",
				"_call_sendto",
				"_call_init_capture_driver_js_sync",
				"_call_start_capture_js_sync",
				"_call_stop_capture_js_sync",
				"_call_init_playback_driver_js_sync",
				"_call_start_playback_js_sync",
				"_call_stop_playback_js_sync",
				"_query_browser_audio_processing_status_js_sync",
				"_call_start_desktop_capture_js_sync",
				"_call_stop_desktop_capture_js_sync",
				"_call_start_video_capture_js_sync",
				"_call_stop_video_capture_js_sync",
				"_loggingCallback_js_sync",
				"__embind_initialize_bindings",
				"__emscripten_check_mailbox",
				"___start_em_js",
				"___stop_em_js",
				"___start_em_asm",
				"___stop_em_asm",
				"onRuntimeInitialized"
			].forEach(function(e) {
				Object.getOwnPropertyDescriptor(g.ready, e) || Object.defineProperty(g.ready, e, {
					get: function() {
						return Le("You are getting " + e + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
					},
					set: function() {
						return Le("You are setting " + e + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
					}
				});
			});
			var C = Object.assign({}, g), b = [], v = "./this.program", S = function(t, n) {
				throw n;
			}, R = typeof window == "object", L = typeof importScripts == "function", E = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", k = !R && !E && !L;
			if (g.ENVIRONMENT) throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
			var I = g.ENVIRONMENT_IS_PTHREAD || !1, T = "";
			function D(e) {
				return g.locateFile ? g.locateFile(e, T) : T + e;
			}
			var x, $, P, N;
			if (k) {
				if (typeof process == "object" && typeof n == "function" || typeof window == "object" || typeof importScripts == "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
				typeof read != "undefined" && (x = read), P = function(t) {
					if (typeof readbuffer == "function") return new Uint8Array(readbuffer(t));
					var e = read(t, "binary");
					return V(typeof e == "object"), e;
				}, $ = function(t, n, r) {
					setTimeout(function() {
						return n(P(t));
					});
				}, typeof clearTimeout == "undefined" && (globalThis.clearTimeout = function(e) {}), typeof setTimeout == "undefined" && (globalThis.setTimeout = function(e) {
					return typeof e == "function" ? e() : Le();
				}), typeof scriptArgs != "undefined" ? b = scriptArgs : typeof arguments != "undefined" && (b = arguments), typeof quit == "function" && (S = function(t, n) {
					throw setTimeout(function() {
						if (!(n instanceof _t)) {
							var e = n;
							n && typeof n == "object" && n.stack && (e = [n, n.stack]), w("exiting due to exception: " + e);
						}
						quit(t);
					}), n;
				}), typeof print != "undefined" && (typeof console == "undefined" && (console = {}), console.log = print, console.warn = console.error = typeof printErr != "undefined" ? printErr : print);
			} else if (R || L) {
				if (L ? T = self.location.href : typeof document != "undefined" && document.currentScript && (T = document.currentScript.src), t && (T = t), T.indexOf("blob:") !== 0 ? T = T.substr(0, T.replace(/[?#].*/, "").lastIndexOf("/") + 1) : T = "", !(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
				x = function(t) {
					var e = new XMLHttpRequest();
					return e.open("GET", t, !1), e.send(null), e.responseText;
				}, L && (P = function(t) {
					var e = new XMLHttpRequest();
					return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response);
				}), $ = function(t, n, r) {
					var e = new XMLHttpRequest();
					e.open("GET", t, !0), e.responseType = "arraybuffer", e.onload = function() {
						if (e.status == 200 || e.status == 0 && e.response) {
							n(e.response);
							return;
						}
						r();
					}, e.onerror = r, e.send(null);
				}, N = function(t) {
					return document.title = t;
				};
			} else throw new Error("environment detection error");
			var M = g.print || console.log.bind(console), w = g.printErr || console.error.bind(console);
			Object.assign(g, C), C = null, ki(), g.arguments && (b = g.arguments), Oe("arguments", "arguments_"), g.thisProgram && (v = g.thisProgram), Oe("thisProgram", "thisProgram"), g.quit && (S = g.quit), Oe("quit", "quit_"), V(typeof g.memoryInitializerPrefixURL == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), V(typeof g.pthreadMainPrefixURL == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), V(typeof g.cdInitializerPrefixURL == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), V(typeof g.filePackagePrefixURL == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), V(typeof g.read == "undefined", "Module.read option was removed (modify read_ in JS)"), V(typeof g.readAsync == "undefined", "Module.readAsync option was removed (modify readAsync in JS)"), V(typeof g.readBinary == "undefined", "Module.readBinary option was removed (modify readBinary in JS)"), V(typeof g.setWindowTitle == "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)"), V(typeof g.TOTAL_MEMORY == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), Oe("asm", "wasmExports"), Oe("read", "read_"), Oe("readAsync", "readAsync"), Oe("readBinary", "readBinary"), Oe("setWindowTitle", "setWindowTitle"), V(R || L || E, "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)"), V(!E, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable."), V(!k, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");
			var A;
			g.wasmBinary && (A = g.wasmBinary), Oe("wasmBinary", "wasmBinary");
			var F = g.noExitRuntime || !0;
			Oe("noExitRuntime", "noExitRuntime"), typeof WebAssembly != "object" && Le("no native wasm support detected");
			var O, B, W, q = !1, U;
			function V(e, t) {
				e || Le("Assertion failed" + (t ? ": " + t : ""));
			}
			var H, G, z, j, K, Q, X, Y, J, Z;
			function ee() {
				var e = O.buffer;
				g.HEAP8 = H = new Int8Array(e), g.HEAP16 = z = new Int16Array(e), g.HEAP32 = K = new Int32Array(e), g.HEAPU8 = G = new Uint8Array(e), g.HEAPU16 = j = new Uint16Array(e), g.HEAPU32 = Q = new Uint32Array(e), g.HEAPF32 = X = new Float32Array(e), g.HEAPF64 = Z = new Float64Array(e), g.HEAP64 = Y = new BigInt64Array(e), g.HEAPU64 = J = new BigUint64Array(e);
			}
			V(!g.STACK_SIZE, "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"), V(typeof Int32Array != "undefined" && typeof Float64Array != "undefined" && Int32Array.prototype.subarray != null && Int32Array.prototype.set != null, "JS engine does not provide full typed array support");
			var te = g.INITIAL_MEMORY || 10485760;
			if (Oe("INITIAL_MEMORY", "INITIAL_MEMORY"), V(te >= 1048576, "INITIAL_MEMORY should be larger than STACK_SIZE, was " + te + "! (STACK_SIZE=1048576)"), I) O = g.wasmMemory;
			else if (g.wasmMemory) O = g.wasmMemory;
			else if (O = new WebAssembly.Memory({
				initial: te / 65536,
				maximum: 2147483648 / 65536,
				shared: !0
			}), !(O.buffer instanceof SharedArrayBuffer)) throw w("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), E && w("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"), Error("bad memory");
			ee(), te = O.buffer.byteLength, V(te % 65536 === 0);
			var ne;
			function re() {
				var e = tl();
				V((e & 3) == 0), e == 0 && (e += 4), p()[e >> 2] = 34821223, p()[e + 4 >> 2] = 2310721022, p()[0] = 1668509029;
			}
			function oe() {
				if (!q) {
					var e = tl();
					e == 0 && (e += 4);
					var t = p()[e >> 2], n = p()[e + 4 >> 2];
					(t != 34821223 || n != 2310721022) && Le("Stack overflow! Stack cookie has been overwritten at " + Zt(e) + ", expected hex dwords 0x89BACDFE and 0x2135467, but received " + Zt(n) + " " + Zt(t)), p()[0] != 1668509029 && Le("Runtime error: The application has corrupted its heap memory area (address zero)!");
				}
			}
			(function() {
				var e = new Int16Array(1), t = new Int8Array(e.buffer);
				if (e[0] = 25459, t[0] !== 115 || t[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
			})();
			var ae = [], ie = [], le = [], se = !1, ue = 0;
			function ce() {
				return F || ue > 0;
			}
			function de() {
				if (V(!I), g.preRun) for (typeof g.preRun == "function" && (g.preRun = [g.preRun]); g.preRun.length;) _e(g.preRun.shift());
				nn(ae);
			}
			function me() {
				V(!se), se = !0, !I && (oe(), !g.noFSInit && !jt.init.initialized && jt.init(), jt.ignorePermissions = !1, Pt.init(), nn(ie));
			}
			function pe() {
				if (oe(), !I) {
					if (g.postRun) for (typeof g.postRun == "function" && (g.postRun = [g.postRun]); g.postRun.length;) ge(g.postRun.shift());
					nn(le);
				}
			}
			function _e(e) {
				ae.unshift(e);
			}
			function fe(e) {
				ie.unshift(e);
			}
			function ge(e) {
				le.unshift(e);
			}
			V(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), V(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), V(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), V(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
			var he = 0, ye = null, Ce = null, be = {};
			function ve(e) {
				for (var t = e;;) {
					if (!be[e]) return e;
					e = t + Math.random();
				}
			}
			function Se(e) {
				he++, g.monitorRunDependencies && g.monitorRunDependencies(he), e ? (V(!be[e]), be[e] = 1, ye === null && typeof setInterval != "undefined" && (ye = setInterval(function() {
					if (q) {
						clearInterval(ye), ye = null;
						return;
					}
					var e = !1;
					for (var t in be) e || (e = !0, w("still waiting on run dependencies:")), w("dependency: " + t);
					e && w("(end of list)");
				}, 1e4))) : w("warning: run dependency added without ID");
			}
			function Re(e) {
				if (he--, g.monitorRunDependencies && g.monitorRunDependencies(he), e ? (V(be[e]), delete be[e]) : w("warning: run dependency removed without ID"), he == 0 && (ye !== null && (clearInterval(ye), ye = null), Ce)) {
					var t = Ce;
					Ce = null, t();
				}
			}
			function Le(e) {
				g.onAbort && g.onAbort(e), e = "Aborted(" + e + ")", w(e), q = !0, U = 1;
				var t = new WebAssembly.RuntimeError(e);
				throw y(t), t;
			}
			var Ee = "data:application/octet-stream;base64,";
			function ke(e) {
				return e.startsWith(Ee);
			}
			function Ie(e) {
				return e.startsWith("file://");
			}
			function Te(e) {
				return function() {
					V(se, "native function `" + e + "` called before runtime initialization");
					var t = B[e];
					return V(t, "exported native function `" + e + "` not found"), t.apply(null, arguments);
				};
			}
			var De = (function(e) {
				function t() {
					return e.apply(this, arguments) || this;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(babelHelpers.wrapNativeSuper(Error)), xe = (function(e) {
				function t() {
					return e.apply(this, arguments) || this;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(De), $e = (function(e) {
				function t(t) {
					var n;
					n = e.call(this, t) || this, n.excPtr = t;
					var r = sn(t);
					return n.name = r[0], n.message = r[1], n;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(De), Pe = u;
			function Ne(e) {
				if (e == Pe && A) return new Uint8Array(A);
				if (P) return P(e);
				throw "both async and sync fetching of the wasm failed";
			}
			function Me(e) {
				return !A && (R || L) && typeof fetch == "function" ? fetch(e, { credentials: "same-origin" }).then(function(t) {
					if (!t.ok) throw "failed to load wasm binary file at '" + e + "'";
					return t.arrayBuffer();
				}).catch(function() {
					return Ne(e);
				}) : Promise.resolve().then(function() {
					return Ne(e);
				});
			}
			function we(e, t, n) {
				return Me(e).then(function(e) {
					return WebAssembly.instantiate(e, t);
				}).then(function(e) {
					return e;
				}).then(n, function(e) {
					w("failed to asynchronously prepare wasm: " + e), Ie(Pe) && w("warning: Loading from a file URI (" + Pe + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"), Le(e);
				});
			}
			function Ae(e, t, n, r) {
				return !e && typeof WebAssembly.instantiateStreaming == "function" && !ke(t) && typeof fetch == "function" ? fetch(t, { credentials: "same-origin" }).then(function(e) {
					var o = WebAssembly.instantiateStreaming(e, n);
					return o.then(r, function(e) {
						return w("wasm streaming compile failed: " + e), w("falling back to ArrayBuffer instantiation"), we(t, n, r);
					});
				}) : we(t, n, r);
			}
			function Fe() {
				var e = {
					env: Ii,
					wasi_snapshot_preview1: Ii
				};
				function t(e, t) {
					var n = e.exports;
					return B = n, dn(B._emscripten_tls_init), ne = B.__indirect_function_table, V(ne, "table not found in wasm exports"), fe(B.__wasm_call_ctors), W = t, Re("wasm-instantiate"), n;
				}
				Se("wasm-instantiate");
				var n = g;
				function r(e) {
					V(g === n, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), n = null, t(e.instance, e.module);
				}
				if (g.instantiateWasm) try {
					return g.instantiateWasm(e, t);
				} catch (e) {
					w("Module.instantiateWasm callback failed with error: " + e), y(e);
				}
				return Ae(A, Pe, e, r).catch(y), {};
			}
			function Oe(e, t, n) {
				n === void 0 && (n = !0), Object.getOwnPropertyDescriptor(g, e) || Object.defineProperty(g, e, {
					configurable: !0,
					get: function() {
						var r = n ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)" : "";
						Le("`Module." + e + "` has been replaced by `" + t + "`" + r);
					}
				});
			}
			function Be(e) {
				Object.getOwnPropertyDescriptor(g, e) && Le("`Module." + e + "` was supplied but `" + e + "` not included in INCOMING_MODULE_JS_API");
			}
			function We(e) {
				return e === "FS_createPath" || e === "FS_createDataFile" || e === "FS_createPreloadedFile" || e === "FS_unlink" || e === "addRunDependency" || e === "FS_createLazyFile" || e === "FS_createDevice" || e === "removeRunDependency";
			}
			function qe(e, t) {
				typeof globalThis != "undefined" && Object.defineProperty(globalThis, e, {
					configurable: !0,
					get: function() {
						mn("`" + e + "` is not longer defined by emscripten. " + t);
					}
				});
			}
			qe("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
			function Ue(e) {
				typeof globalThis != "undefined" && !Object.getOwnPropertyDescriptor(globalThis, e) && Object.defineProperty(globalThis, e, {
					configurable: !0,
					get: function() {
						var t = "`" + e + "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line", n = e;
						n.startsWith("_") || (n = "$" + e), t += " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='" + n + "')", We(e) && (t += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), mn(t);
					}
				}), Ve(e);
			}
			function Ve(e) {
				Object.getOwnPropertyDescriptor(g, e) || Object.defineProperty(g, e, {
					configurable: !0,
					get: function() {
						var t = "'" + e + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)";
						We(e) && (t += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), Le(t);
					}
				});
			}
			function He(e) {
				console.warn.apply(console, arguments);
			}
			var Ge = {
				1383604: function() {
					return Date.now();
				},
				1383627: function(t, n) {
					var e = "voip: [WasmTimestampCalibration] backgrounding detected: skew_old=" + t.toFixed(1) + "ms, skew_new=" + n.toFixed(1) + "ms, delta=" + (n - t).toFixed(1) + "ms";
					self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
						level: 2,
						message: e
					});
				},
				1383914: function() {
					typeof jt != "undefined" && jt.syncfs && jt.syncfs(!1, function(e) {});
				}
			};
			function ze(e, t) {
				var n = t ? Kt(t) : "";
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onCallEvent({
					eventType: e,
					userData: "",
					eventDataJson: n
				});
			}
			function je(e) {
				self.__inMLInference = e;
			}
			function Ke() {
				var e = Le;
				Le = function(n) {
					if (self.__inMLInference && g._wasm_throw_ml_abort) {
						g.onAbort && g.onAbort(n), n = "Aborted(" + n + ")", w(n);
						var t = Tt(n) + 1, r = cl(), o = ml(t);
						Vn(n, o, t), g._wasm_throw_ml_abort(o), dl(r);
						return;
					}
					e(n);
				};
			}
			function Qe() {
				var e = self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getPersistentDirectoryPath();
				if (e) {
					var t = Tt(e) + 1, n = $i(t);
					return Vn(e, n, t), n;
				}
				return null;
			}
			function Xe(e) {
				var t = e ? Kt(e) : null, n = self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBweModelPath({ versionName: t });
				if (n) {
					var r = Tt(n) + 1, o = $i(r);
					return Vn(n, o, r), o;
				}
				return null;
			}
			function Ye(e, t) {
				if (t == null) {
					var n = new Error("get_random_bytes_js: rawBytesPtr is null");
					throw n.stack, n;
				}
				var r = new Uint8Array(e), o = self.crypto.getRandomValues(r);
				hi(o, t);
			}
			function Je(e) {
				var t = Kt(e);
				return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.isParticipantKnownContact({ jid: t });
			}
			function Ze(e, t, n, r, o, a, i, s, u, c) {
				var d = l(), m = new Uint8Array(n);
				m.set(d.subarray(t, t + n));
				var p = Kt(e);
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks && self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs && self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs({
					userJid: p,
					frameBuffer: m.buffer,
					width: r,
					height: o,
					orientation: a,
					format: i,
					timestamp: s,
					isKeyFrame: u,
					isScreenShare: c
				});
			}
			function et(e, t, n, r) {
				var o = l(), a = new Uint8Array(r);
				a.set(o.subarray(n, n + r));
				var i = Kt(t), s = Kt(e);
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onSignalingXmpp({
					peerJid: s,
					callId: i,
					xmlPayload: a
				});
			}
			function tt(e, t, n, r) {
				var o = l(), a = o.length;
				if (e < 0 || e >= a || t < 0 || e + t > a) return ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"voip: call_sendto: Invalid buffer access - buf: ",
					", len: ",
					", heapSize: ",
					""
				])), e, t, a), -1;
				var i = o.subarray(e, e + t);
				return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.sendDataToRelay({
					data: i,
					len: t,
					ip: Kt(n),
					port: r
				});
			}
			function nt(e, t, n, r, o) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initCaptureDriverJS({
					sample_rate: e,
					channels: t,
					bits_per_sample: n,
					frames_per_chunk: r,
					device_type: o
				});
			}
			function rt(e) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startCaptureJS({ device_type: e });
			}
			function ot(e) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopCaptureJS({ device_type: e });
			}
			function at(e, t, n, r) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initPlaybackDriverJS({
					sample_rate: e,
					channels: t,
					bits_per_sample: n,
					frames_per_chunk: r
				});
			}
			function it() {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startPlaybackJS();
			}
			function lt() {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopPlaybackJS();
			}
			function st() {
				return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBrowserAudioProcessingStatus();
			}
			function ut(e, t, n) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startDesktopCaptureJS({
					width: e,
					height: t,
					max_fps: n
				});
			}
			function ct() {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopDesktopCaptureJS();
			}
			function dt(e, t, n, r, o) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startVideoCaptureJS({
					camera_id: Kt(e),
					width: t,
					height: n,
					max_fps: r,
					isAVUpgrade: !!o
				});
			}
			function mt() {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopVideoCaptureJS();
			}
			function pt(e, t) {
				var n = t ? Kt(t).trim() : "";
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
					level: e,
					message: n
				});
			}
			function _t(e) {
				this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e;
			}
			var ft = function(t) {
				t.terminate(), t.removeAllMessageListeners("cmd"), t.addMessageListener("cmd", function(e) {
					var n = e.cmd;
					w("received \"" + n + "\" command from terminated worker: " + t.workerID);
				});
			};
			function gt(e) {
				V(!I, "Internal Error! killThread() can only ever be called from main application thread!"), V(e, "Internal Error! Null pthread_ptr in killThread!");
				var t = tn.pthreads[e];
				delete tn.pthreads[e], ft(t), nl(e), tn.runningWorkers.splice(tn.runningWorkers.indexOf(t), 1), t.pthread_ptr = 0;
			}
			function ht(e) {
				V(!I, "Internal Error! cancelThread() can only ever be called from main application thread!"), V(e, "Internal Error! Null pthread_ptr in cancelThread!");
				var t = tn.pthreads[e];
				t.postMessage({
					cmd: "cancel",
					type: "cmd"
				});
			}
			function yt(e) {
				V(!I, "Internal Error! cleanupThread() can only ever be called from main application thread!"), V(e, "Internal Error! Null pthread_ptr in cleanupThread!");
				var t = tn.pthreads[e];
				V(t), tn.returnWorkerToPool(t);
			}
			var Ct = function(t, n) {
				return l().fill(0, t, t + n), t;
			};
			function bt(e) {
				V(!I, "Internal Error! spawnThread() can only ever be called from main application thread!"), V(e.pthread_ptr, "Internal error, no pthread ptr!");
				var t = tn.getNewWorker();
				if (!t) return 6;
				V(!t.pthread_ptr, "Internal error!"), tn.runningWorkers.push(t), tn.pthreads[e.pthread_ptr] = t, t.pthread_ptr = e.pthread_ptr;
				var n = {
					cmd: "run",
					start_routine: e.startRoutine,
					arg: e.arg,
					pthread_ptr: e.pthread_ptr
				};
				return t.postMessage(babelHelpers.extends({}, n, { type: "cmd" }), e.transferList), 0;
			}
			var vt = {
				isAbs: function(t) {
					return t.charAt(0) === "/";
				},
				splitPath: function(t) {
					var e = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
					return e.exec(t).slice(1);
				},
				normalizeArray: function(t, n) {
					for (var e = 0, r = t.length - 1; r >= 0; r--) {
						var o = t[r];
						o === "." ? t.splice(r, 1) : o === ".." ? (t.splice(r, 1), e++) : e && (t.splice(r, 1), e--);
					}
					if (n) for (; e; e--) t.unshift("..");
					return t;
				},
				normalize: function(t) {
					var e = vt.isAbs(t), n = t.substr(-1) === "/";
					return t = vt.normalizeArray(t.split("/").filter(function(e) {
						return !!e;
					}), !e).join("/"), !t && !e && (t = "."), t && n && (t += "/"), (e ? "/" : "") + t;
				},
				dirname: function(t) {
					var e = vt.splitPath(t), n = e[0], r = e[1];
					return !n && !r ? "." : (r && (r = r.substr(0, r.length - 1)), n + r);
				},
				basename: function(t) {
					if (t === "/") return "/";
					t = vt.normalize(t), t = t.replace(/\/$/, "");
					var e = t.lastIndexOf("/");
					return e === -1 ? t : t.substr(e + 1);
				},
				join: function() {
					var e = Array.prototype.slice.call(arguments);
					return vt.normalize(e.join("/"));
				},
				join2: function(t, n) {
					return vt.normalize(t + "/" + n);
				}
			}, St = function() {
				if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return function(e) {
					return e.set(crypto.getRandomValues(new Uint8Array(e.byteLength))), e;
				};
				Le("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
			}, Rt = function(t) {
				return (Rt = St())(t);
			}, Lt = {
				resolve: function() {
					for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
						var r = n >= 0 ? arguments[n] : jt.cwd();
						if (typeof r != "string") throw new TypeError("Arguments to path.resolve must be strings");
						if (!r) return "";
						e = r + "/" + e, t = vt.isAbs(r);
					}
					return e = vt.normalizeArray(e.split("/").filter(function(e) {
						return !!e;
					}), !t).join("/"), (t ? "/" : "") + e || ".";
				},
				relative: function(t, n) {
					t = Lt.resolve(t).substr(1), n = Lt.resolve(n).substr(1);
					function e(e) {
						for (var t = 0; t < e.length && e[t] === ""; t++);
						for (var n = e.length - 1; n >= 0 && e[n] === ""; n--);
						return t > n ? [] : e.slice(t, n - t + 1);
					}
					for (var r = e(t.split("/")), o = e(n.split("/")), a = Math.min(r.length, o.length), i = a, l = 0; l < a; l++) if (r[l] !== o[l]) {
						i = l;
						break;
					}
					for (var s = [], l = i; l < r.length; l++) s.push("..");
					return s = s.concat(o.slice(i)), s.join("/");
				}
			}, Et = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0, kt = function(t, n, r) {
				for (var e = n + r, o = n; t[o] && !(o >= e);) ++o;
				if (o - n > 16 && t.buffer && Et) return Et.decode(t.slice(n, o));
				for (var a = ""; n < o;) {
					var i = t[n++];
					if (!(i & 128)) {
						a += String.fromCharCode(i);
						continue;
					}
					var l = t[n++] & 63;
					if ((i & 224) == 192) {
						a += String.fromCharCode((i & 31) << 6 | l);
						continue;
					}
					var s = t[n++] & 63;
					if ((i & 240) == 224 ? i = (i & 15) << 12 | l << 6 | s : ((i & 248) != 240 && mn("Invalid UTF-8 leading byte " + Zt(i) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), i = (i & 7) << 18 | l << 12 | s << 6 | t[n++] & 63), i < 65536) a += String.fromCharCode(i);
					else {
						var u = i - 65536;
						a += String.fromCharCode(55296 | u >> 10, 56320 | u & 1023);
					}
				}
				return a;
			}, It = [], Tt = function(t) {
				for (var e = 0, n = 0; n < t.length; ++n) {
					var r = t.charCodeAt(n);
					r <= 127 ? e++ : r <= 2047 ? e += 2 : r >= 55296 && r <= 57343 ? (e += 4, ++n) : e += 3;
				}
				return e;
			}, Dt = function(t, n, r, o) {
				if (V(typeof t == "string"), !(o > 0)) return 0;
				for (var e = r, a = r + o - 1, i = 0; i < t.length; ++i) {
					var l = t.charCodeAt(i);
					if (l >= 55296 && l <= 57343) {
						var s = t.charCodeAt(++i);
						l = 65536 + ((l & 1023) << 10) | s & 1023;
					}
					if (l <= 127) {
						if (r >= a) break;
						n[r++] = l;
					} else if (l <= 2047) {
						if (r + 1 >= a) break;
						n[r++] = 192 | l >> 6, n[r++] = 128 | l & 63;
					} else if (l <= 65535) {
						if (r + 2 >= a) break;
						n[r++] = 224 | l >> 12, n[r++] = 128 | l >> 6 & 63, n[r++] = 128 | l & 63;
					} else {
						if (r + 3 >= a) break;
						l > 1114111 && mn("Invalid Unicode code point " + Zt(l) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), n[r++] = 240 | l >> 18, n[r++] = 128 | l >> 12 & 63, n[r++] = 128 | l >> 6 & 63, n[r++] = 128 | l & 63;
					}
				}
				return n[r] = 0, r - e;
			};
			function xt(e, t, n) {
				var r = n > 0 ? n : Tt(e) + 1, o = new Array(r), a = Dt(e, o, 0, o.length);
				return t && (o.length = a), o;
			}
			var $t = function() {
				if (!It.length) {
					var e = null;
					if (typeof window != "undefined" && typeof window.prompt == "function" ? (e = window.prompt("Input: "), e !== null && (e += `
`)) : typeof readline == "function" && (e = readline(), e !== null && (e += `
`)), !e) return null;
					It = xt(e, !0);
				}
				return It.shift();
			}, Pt = {
				ttys: [],
				init: function() {},
				shutdown: function() {},
				register: function(t, n) {
					Pt.ttys[t] = {
						input: [],
						output: [],
						ops: n
					}, jt.registerDevice(t, Pt.stream_ops);
				},
				stream_ops: {
					open: function(t) {
						var e = Pt.ttys[t.node.rdev];
						if (!e) throw new jt.ErrnoError(43);
						t.tty = e, t.seekable = !1;
					},
					close: function(t) {
						t.tty.ops.fsync(t.tty);
					},
					fsync: function(t) {
						t.tty.ops.fsync(t.tty);
					},
					read: function(t, n, r, o, a) {
						if (!t.tty || !t.tty.ops.get_char) throw new jt.ErrnoError(60);
						for (var e = 0, i = 0; i < o; i++) {
							var l;
							try {
								l = t.tty.ops.get_char(t.tty);
							} catch (e) {
								throw new jt.ErrnoError(29);
							}
							if (l === void 0 && e === 0) throw new jt.ErrnoError(6);
							if (l == null) break;
							e++, n[r + i] = l;
						}
						return e && (t.node.timestamp = Date.now()), e;
					},
					write: function(t, n, r, o, a) {
						if (!t.tty || !t.tty.ops.put_char) throw new jt.ErrnoError(60);
						try {
							for (var e = 0; e < o; e++) t.tty.ops.put_char(t.tty, n[r + e]);
						} catch (e) {
							throw new jt.ErrnoError(29);
						}
						return o && (t.node.timestamp = Date.now()), e;
					}
				},
				default_tty_ops: {
					get_char: function(t) {
						return $t();
					},
					put_char: function(t, n) {
						n === null || n === 10 ? (M(kt(t.output, 0)), t.output = []) : n != 0 && t.output.push(n);
					},
					fsync: function(t) {
						t.output && t.output.length > 0 && (M(kt(t.output, 0)), t.output = []);
					},
					ioctl_tcgets: function(t) {
						return {
							c_iflag: 25856,
							c_oflag: 5,
							c_cflag: 191,
							c_lflag: 35387,
							c_cc: [
								3,
								28,
								127,
								21,
								4,
								0,
								1,
								0,
								17,
								19,
								26,
								0,
								18,
								15,
								23,
								22,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0
							]
						};
					},
					ioctl_tcsets: function(t, n, r) {
						return 0;
					},
					ioctl_tiocgwinsz: function(t) {
						return [24, 80];
					}
				},
				default_tty1_ops: {
					put_char: function(t, n) {
						n === null || n === 10 ? (w(kt(t.output, 0)), t.output = []) : n != 0 && t.output.push(n);
					},
					fsync: function(t) {
						t.output && t.output.length > 0 && (w(kt(t.output, 0)), t.output = []);
					}
				}
			}, Nt = function(t, n) {
				return V(n, "alignment argument is required"), Math.ceil(t / n) * n;
			}, Mt = function(t) {
				t = Nt(t, 65536);
				var e = Gi(65536, t);
				return e ? Ct(e, t) : 0;
			}, wt = {
				ops_table: null,
				mount: function(t) {
					return wt.createNode(null, "/", 16895, 0);
				},
				createNode: function(t, n, r, o) {
					if (jt.isBlkdev(r) || jt.isFIFO(r)) throw new jt.ErrnoError(63);
					wt.ops_table || (wt.ops_table = {
						dir: {
							node: {
								getattr: wt.node_ops.getattr,
								setattr: wt.node_ops.setattr,
								lookup: wt.node_ops.lookup,
								mknod: wt.node_ops.mknod,
								rename: wt.node_ops.rename,
								unlink: wt.node_ops.unlink,
								rmdir: wt.node_ops.rmdir,
								readdir: wt.node_ops.readdir,
								symlink: wt.node_ops.symlink
							},
							stream: { llseek: wt.stream_ops.llseek }
						},
						file: {
							node: {
								getattr: wt.node_ops.getattr,
								setattr: wt.node_ops.setattr
							},
							stream: {
								llseek: wt.stream_ops.llseek,
								read: wt.stream_ops.read,
								write: wt.stream_ops.write,
								allocate: wt.stream_ops.allocate,
								mmap: wt.stream_ops.mmap,
								msync: wt.stream_ops.msync
							}
						},
						link: {
							node: {
								getattr: wt.node_ops.getattr,
								setattr: wt.node_ops.setattr,
								readlink: wt.node_ops.readlink
							},
							stream: {}
						},
						chrdev: {
							node: {
								getattr: wt.node_ops.getattr,
								setattr: wt.node_ops.setattr
							},
							stream: jt.chrdev_stream_ops
						}
					});
					var e = jt.createNode(t, n, r, o);
					return jt.isDir(e.mode) ? (e.node_ops = wt.ops_table.dir.node, e.stream_ops = wt.ops_table.dir.stream, e.contents = {}) : jt.isFile(e.mode) ? (e.node_ops = wt.ops_table.file.node, e.stream_ops = wt.ops_table.file.stream, e.usedBytes = 0, e.contents = null) : jt.isLink(e.mode) ? (e.node_ops = wt.ops_table.link.node, e.stream_ops = wt.ops_table.link.stream) : jt.isChrdev(e.mode) && (e.node_ops = wt.ops_table.chrdev.node, e.stream_ops = wt.ops_table.chrdev.stream), e.timestamp = Date.now(), t && (t.contents[n] = e, t.timestamp = e.timestamp), e;
				},
				getFileDataAsTypedArray: function(t) {
					return t.contents ? t.contents.subarray ? t.contents.subarray(0, t.usedBytes) : new Uint8Array(t.contents) : new Uint8Array(0);
				},
				expandFileStorage: function(t, n) {
					var e = t.contents ? t.contents.length : 0;
					if (!(e >= n)) {
						var r = 1024 * 1024;
						n = Math.max(n, e * (e < r ? 2 : 1.125) >>> 0), e != 0 && (n = Math.max(n, 256));
						var o = t.contents;
						t.contents = new Uint8Array(n), t.usedBytes > 0 && t.contents.set(o.subarray(0, t.usedBytes), 0);
					}
				},
				resizeFileStorage: function(t, n) {
					if (t.usedBytes != n) if (n == 0) t.contents = null, t.usedBytes = 0;
					else {
						var e = t.contents;
						t.contents = new Uint8Array(n), e && t.contents.set(e.subarray(0, Math.min(n, t.usedBytes))), t.usedBytes = n;
					}
				},
				node_ops: {
					getattr: function(t) {
						var e = {};
						return e.dev = jt.isChrdev(t.mode) ? t.id : 1, e.ino = t.id, e.mode = t.mode, e.nlink = 1, e.uid = 0, e.gid = 0, e.rdev = t.rdev, jt.isDir(t.mode) ? e.size = 4096 : jt.isFile(t.mode) ? e.size = t.usedBytes : jt.isLink(t.mode) ? e.size = t.link.length : e.size = 0, e.atime = new Date(t.timestamp), e.mtime = new Date(t.timestamp), e.ctime = new Date(t.timestamp), e.blksize = 4096, e.blocks = Math.ceil(e.size / e.blksize), e;
					},
					setattr: function(t, n) {
						n.mode !== void 0 && (t.mode = n.mode), n.timestamp !== void 0 && (t.timestamp = n.timestamp), n.size !== void 0 && wt.resizeFileStorage(t, n.size);
					},
					lookup: function(t, n) {
						throw jt.genericErrors[44];
					},
					mknod: function(t, n, r, o) {
						return wt.createNode(t, n, r, o);
					},
					rename: function(t, n, r) {
						if (jt.isDir(t.mode)) {
							var e;
							try {
								e = jt.lookupNode(n, r);
							} catch (e) {}
							if (e) for (var o in e.contents) throw new jt.ErrnoError(55);
						}
						delete t.parent.contents[t.name], t.parent.timestamp = Date.now(), t.name = r, n.contents[r] = t, n.timestamp = t.parent.timestamp, t.parent = n;
					},
					unlink: function(t, n) {
						delete t.contents[n], t.timestamp = Date.now();
					},
					rmdir: function(t, n) {
						var e = jt.lookupNode(t, n);
						for (var r in e.contents) throw new jt.ErrnoError(55);
						delete t.contents[n], t.timestamp = Date.now();
					},
					readdir: function(t) {
						var e = [".", ".."];
						for (var n in t.contents) Object.prototype.hasOwnProperty.call(t.contents, n) && e.push(n);
						return e;
					},
					symlink: function(t, n, r) {
						var e = wt.createNode(t, n, 41471, 0);
						return e.link = r, e;
					},
					readlink: function(t) {
						if (!jt.isLink(t.mode)) throw new jt.ErrnoError(28);
						return t.link;
					}
				},
				stream_ops: {
					read: function(t, n, r, o, a) {
						var e = t.node.contents;
						if (a >= t.node.usedBytes) return 0;
						var i = Math.min(t.node.usedBytes - a, o);
						if (V(i >= 0), i > 8 && e.subarray) n.set(e.subarray(a, a + i), r);
						else for (var l = 0; l < i; l++) n[r + l] = e[a + l];
						return i;
					},
					write: function(t, n, r, o, a, l) {
						if (V(!(n instanceof ArrayBuffer)), n.buffer === i().buffer && (l = !1), !o) return 0;
						var e = t.node;
						if (e.timestamp = Date.now(), n.subarray && (!e.contents || e.contents.subarray)) {
							if (l) return V(a === 0, "canOwn must imply no weird position inside the file"), e.contents = n.subarray(r, r + o), e.usedBytes = o, o;
							if (e.usedBytes === 0 && a === 0) return e.contents = n.slice(r, r + o), e.usedBytes = o, o;
							if (a + o <= e.usedBytes) return e.contents.set(n.subarray(r, r + o), a), o;
						}
						if (wt.expandFileStorage(e, a + o), e.contents.subarray && n.subarray) e.contents.set(n.subarray(r, r + o), a);
						else for (var s = 0; s < o; s++) e.contents[a + s] = n[r + s];
						return e.usedBytes = Math.max(e.usedBytes, a + o), o;
					},
					llseek: function(t, n, r) {
						var e = n;
						if (r === 1 ? e += t.position : r === 2 && jt.isFile(t.node.mode) && (e += t.node.usedBytes), e < 0) throw new jt.ErrnoError(28);
						return e;
					},
					allocate: function(t, n, r) {
						wt.expandFileStorage(t.node, n + r), t.node.usedBytes = Math.max(t.node.usedBytes, n + r);
					},
					mmap: function(t, n, r, o, a) {
						if (!jt.isFile(t.node.mode)) throw new jt.ErrnoError(43);
						var e, l, s = t.node.contents;
						if (!(a & 2) && s.buffer === i().buffer) l = !1, e = s.byteOffset;
						else {
							if ((r > 0 || r + n < s.length) && (s.subarray ? s = s.subarray(r, r + n) : s = Array.prototype.slice.call(s, r, r + n)), l = !0, e = Mt(n), !e) throw new jt.ErrnoError(48);
							i().set(s, e);
						}
						return {
							ptr: e,
							allocated: l
						};
					},
					msync: function(t, n, r, o, a) {
						return wt.stream_ops.write(t, n, 0, o, r, !1), 0;
					}
				}
			}, At = function(t, n, r, o) {
				var e = o ? "" : ve("al " + t);
				$(t, function(r) {
					V(r, "Loading data file \"" + t + "\" failed (no arrayBuffer)."), n(new Uint8Array(r)), e && Re(e);
				}, function(e) {
					if (r) r();
					else throw "Loading data file \"" + t + "\" failed.";
				}), e && Se(e);
			}, Ft = g.preloadPlugins || [];
			function Ot(e, t, n, r) {
				typeof Da != "undefined" && Da.init();
				var o = !1;
				return Ft.forEach(function(a) {
					o || a.canHandle(t) && (a.handle(e, t, n, r), o = !0);
				}), o;
			}
			function Bt(e, t, n, r, o, a, i, l, s, u) {
				var c = t ? Lt.resolve(vt.join2(e, t)) : e, d = ve("cp " + c);
				function m(n) {
					function m(n) {
						u && u(), l || jt.createDataFile(e, t, n, r, o, s), a && a(), Re(d);
					}
					Ot(n, c, m, function() {
						i && i(), Re(d);
					}) || m(n);
				}
				Se(d), typeof n == "string" ? At(n, function(e) {
					return m(e);
				}, i) : m(n);
			}
			function Wt(e) {
				var t = {
					r: 0,
					"r+": 2,
					w: 577,
					"w+": 578,
					a: 1089,
					"a+": 1090
				}, n = t[e];
				if (typeof n == "undefined") throw new Error("Unknown file open mode: " + e);
				return n;
			}
			function qt(e, t) {
				var n = 0;
				return e && (n |= 365), t && (n |= 146), n;
			}
			var Ut = {
				dbs: {},
				indexedDB: (function(e) {
					function t() {
						return e.apply(this, arguments);
					}
					return t.toString = function() {
						return e.toString();
					}, t;
				})(function() {
					if (typeof indexedDB != "undefined") return indexedDB;
					var e = null;
					return typeof window == "object" && (e = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), V(e, "IDBFS used, but indexedDB not supported"), e;
				}),
				DB_VERSION: 21,
				DB_STORE_NAME: "FILE_DATA",
				mount: function(t) {
					return wt.mount.apply(null, arguments);
				},
				syncfs: function(t, n, r) {
					Ut.getLocalSet(t, function(e, o) {
						if (e) return r(e);
						Ut.getRemoteSet(t, function(e, t) {
							if (e) return r(e);
							var a = n ? t : o, i = n ? o : t;
							Ut.reconcile(a, i, r);
						});
					});
				},
				quit: function() {
					Object.values(Ut.dbs).forEach(function(e) {
						return e.close();
					}), Ut.dbs = {};
				},
				getDB: function(t, n) {
					var e = Ut.dbs[t];
					if (e) return n(null, e);
					var r;
					try {
						r = Ut.indexedDB().open(t, Ut.DB_VERSION);
					} catch (e) {
						return n(e);
					}
					if (!r) return n("Unable to connect to IndexedDB");
					r.onupgradeneeded = function(e) {
						var t = e.target.result, n = e.target.transaction, r;
						t.objectStoreNames.contains(Ut.DB_STORE_NAME) ? r = n.objectStore(Ut.DB_STORE_NAME) : r = t.createObjectStore(Ut.DB_STORE_NAME), r.indexNames.contains("timestamp") || r.createIndex("timestamp", "timestamp", { unique: !1 });
					}, r.onsuccess = function() {
						e = r.result, Ut.dbs[t] = e, n(null, e);
					}, r.onerror = function(e) {
						n(e.target.error), e.preventDefault();
					};
				},
				getLocalSet: function(t, n) {
					var e = {};
					function r(e) {
						return e !== "." && e !== "..";
					}
					function o(e) {
						return function(t) {
							return vt.join2(e, t);
						};
					}
					for (var a = jt.readdir(t.mountpoint).filter(r).map(o(t.mountpoint)); a.length;) {
						var i = a.pop(), l;
						try {
							l = jt.stat(i);
						} catch (e) {
							return n(e);
						}
						jt.isDir(l.mode) && a.push.apply(a, jt.readdir(i).filter(r).map(o(i))), e[i] = { timestamp: l.mtime };
					}
					return n(null, {
						type: "local",
						entries: e
					});
				},
				getRemoteSet: function(t, n) {
					var e = {};
					Ut.getDB(t.mountpoint, function(t, r) {
						if (t) return n(t);
						try {
							var o = r.transaction([Ut.DB_STORE_NAME], "readonly");
							o.onerror = function(e) {
								n(e.target.error), e.preventDefault();
							};
							var a = o.objectStore(Ut.DB_STORE_NAME), i = a.index("timestamp");
							i.openKeyCursor().onsuccess = function(t) {
								var o = t.target.result;
								if (!o) return n(null, {
									type: "remote",
									db: r,
									entries: e
								});
								e[o.primaryKey] = { timestamp: o.key }, o.continue();
							};
						} catch (e) {
							return n(e);
						}
					});
				},
				loadLocalEntry: function(t, n) {
					var e, r;
					try {
						var o = jt.lookupPath(t);
						r = o.node, e = jt.stat(t);
					} catch (e) {
						return n(e);
					}
					return jt.isDir(e.mode) ? n(null, {
						timestamp: e.mtime,
						mode: e.mode
					}) : jt.isFile(e.mode) ? (r.contents = wt.getFileDataAsTypedArray(r), n(null, {
						timestamp: e.mtime,
						mode: e.mode,
						contents: r.contents
					})) : n(new Error("node type not supported"));
				},
				storeLocalEntry: function(t, n, r) {
					try {
						if (jt.isDir(n.mode)) jt.mkdirTree(t, n.mode);
						else if (jt.isFile(n.mode)) jt.writeFile(t, n.contents, { canOwn: !0 });
						else return r(new Error("node type not supported"));
						jt.chmod(t, n.mode), jt.utime(t, n.timestamp, n.timestamp);
					} catch (e) {
						return r(e);
					}
					r(null);
				},
				removeLocalEntry: function(t, n) {
					try {
						var e = jt.stat(t);
						jt.isDir(e.mode) ? jt.rmdir(t) : jt.isFile(e.mode) && jt.unlink(t);
					} catch (e) {
						return n(e);
					}
					n(null);
				},
				loadRemoteEntry: function(t, n, r) {
					var e = t.get(n);
					e.onsuccess = function(e) {
						r(null, e.target.result);
					}, e.onerror = function(e) {
						r(e.target.error), e.preventDefault();
					};
				},
				storeRemoteEntry: function(t, n, r, o) {
					try {
						var e = t.put(r, n);
					} catch (e) {
						o(e);
						return;
					}
					e.onsuccess = function() {
						o(null);
					}, e.onerror = function(e) {
						o(e.target.error), e.preventDefault();
					};
				},
				removeRemoteEntry: function(t, n, r) {
					var e = t.delete(n);
					e.onsuccess = function() {
						r(null);
					}, e.onerror = function(e) {
						r(e.target.error), e.preventDefault();
					};
				},
				reconcile: function(t, n, r) {
					var e = 0, o = [];
					Object.keys(t.entries).forEach(function(r) {
						var a = t.entries[r], i = n.entries[r];
						(!i || a.timestamp.getTime() != i.timestamp.getTime()) && (o.push(r), e++);
					});
					var i = [];
					if (Object.keys(n.entries).forEach(function(n) {
						t.entries[n] || (i.push(n), e++);
					}), !e) return r(null);
					var l = !1, s = t.type === "remote" ? t.db : n.db, u = s.transaction([Ut.DB_STORE_NAME], "readwrite"), c = u.objectStore(Ut.DB_STORE_NAME);
					function d(e) {
						if (e && !l) return l = !0, r(e);
					}
					u.onerror = function(e) {
						d(a.error), e.preventDefault();
					}, u.oncomplete = function(e) {
						l || r(null);
					}, o.sort().forEach(function(e) {
						n.type === "local" ? Ut.loadRemoteEntry(c, e, function(t, n) {
							if (t) return d(t);
							Ut.storeLocalEntry(e, n, d);
						}) : Ut.loadLocalEntry(e, function(t, n) {
							if (t) return d(t);
							Ut.storeRemoteEntry(c, e, n, d);
						});
					}), i.sort().reverse().forEach(function(e) {
						n.type === "local" ? Ut.removeLocalEntry(e, d) : Ut.removeRemoteEntry(c, e, d);
					});
				}
			}, Vt = {
				0: "Success",
				1: "Arg list too long",
				2: "Permission denied",
				3: "Address already in use",
				4: "Address not available",
				5: "Address family not supported by protocol family",
				6: "No more processes",
				7: "Socket already connected",
				8: "Bad file number",
				9: "Trying to read unreadable message",
				10: "Mount device busy",
				11: "Operation canceled",
				12: "No children",
				13: "Connection aborted",
				14: "Connection refused",
				15: "Connection reset by peer",
				16: "File locking deadlock error",
				17: "Destination address required",
				18: "Math arg out of domain of func",
				19: "Quota exceeded",
				20: "File exists",
				21: "Bad address",
				22: "File too large",
				23: "Host is unreachable",
				24: "Identifier removed",
				25: "Illegal byte sequence",
				26: "Connection already in progress",
				27: "Interrupted system call",
				28: "Invalid argument",
				29: "I/O error",
				30: "Socket is already connected",
				31: "Is a directory",
				32: "Too many symbolic links",
				33: "Too many open files",
				34: "Too many links",
				35: "Message too long",
				36: "Multihop attempted",
				37: "File or path name too long",
				38: "Network interface is not configured",
				39: "Connection reset by network",
				40: "Network is unreachable",
				41: "Too many open files in system",
				42: "No buffer space available",
				43: "No such device",
				44: "No such file or directory",
				45: "Exec format error",
				46: "No record locks available",
				47: "The link has been severed",
				48: "Not enough core",
				49: "No message of desired type",
				50: "Protocol not available",
				51: "No space left on device",
				52: "Function not implemented",
				53: "Socket is not connected",
				54: "Not a directory",
				55: "Directory not empty",
				56: "State not recoverable",
				57: "Socket operation on non-socket",
				59: "Not a typewriter",
				60: "No such device or address",
				61: "Value too large for defined data type",
				62: "Previous owner died",
				63: "Not super-user",
				64: "Broken pipe",
				65: "Protocol error",
				66: "Unknown protocol",
				67: "Protocol wrong type for socket",
				68: "Math result not representable",
				69: "Read only file system",
				70: "Illegal seek",
				71: "No such process",
				72: "Stale file handle",
				73: "Connection timed out",
				74: "Text file busy",
				75: "Cross-device link",
				100: "Device not a stream",
				101: "Bad font file fmt",
				102: "Invalid slot",
				103: "Invalid request code",
				104: "No anode",
				105: "Block device required",
				106: "Channel number out of range",
				107: "Level 3 halted",
				108: "Level 3 reset",
				109: "Link number out of range",
				110: "Protocol driver not attached",
				111: "No CSI structure available",
				112: "Level 2 halted",
				113: "Invalid exchange",
				114: "Invalid request descriptor",
				115: "Exchange full",
				116: "No data (for no delay io)",
				117: "Timer expired",
				118: "Out of streams resources",
				119: "Machine is not on the network",
				120: "Package not installed",
				121: "The object is remote",
				122: "Advertise error",
				123: "Srmount error",
				124: "Communication error on send",
				125: "Cross mount point (not really error)",
				126: "Given log. name not unique",
				127: "f.d. invalid for this operation",
				128: "Remote address changed",
				129: "Can   access a needed shared lib",
				130: "Accessing a corrupted shared lib",
				131: ".lib section in a.out corrupted",
				132: "Attempting to link in too many libs",
				133: "Attempting to exec a shared library",
				135: "Streams pipe error",
				136: "Too many users",
				137: "Socket type not supported",
				138: "Not supported",
				139: "Protocol family not supported",
				140: "Can't send after socket shutdown",
				141: "Too many references",
				142: "Host is down",
				148: "No medium (in tape drive)",
				156: "Level 2 not synchronized"
			}, Ht = {};
			function Gt(e) {
				return mn("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling"), e;
			}
			function zt(e) {
				var t = /\b_Z[\w\d_]+/g;
				return e.replace(t, function(e) {
					var t = Gt(e);
					return e === t ? e : t + " [" + e + "]";
				});
			}
			var jt = {
				root: null,
				mounts: [],
				devices: {},
				streams: [],
				nextInode: 1,
				nameTable: null,
				currentPath: "/",
				initialized: !1,
				ignorePermissions: !0,
				ErrnoError: null,
				genericErrors: {},
				filesystems: null,
				syncFSRequests: 0,
				lookupPath: function(t, n) {
					if (n === void 0 && (n = {}), t = Lt.resolve(t), !t) return {
						path: "",
						node: null
					};
					var e = {
						follow_mount: !0,
						recurse_count: 0
					};
					if (n = Object.assign(e, n), n.recurse_count > 8) throw new jt.ErrnoError(32);
					for (var r = t.split("/").filter(function(e) {
						return !!e;
					}), o = jt.root, a = "/", i = 0; i < r.length; i++) {
						var l = i === r.length - 1;
						if (l && n.parent) break;
						if (o = jt.lookupNode(o, r[i]), a = vt.join2(a, r[i]), jt.isMountpoint(o) && (!l || l && n.follow_mount) && (o = o.mounted.root), !l || n.follow) for (var s = 0; jt.isLink(o.mode);) {
							var u = jt.readlink(a);
							a = Lt.resolve(vt.dirname(a), u);
							var c = jt.lookupPath(a, { recurse_count: n.recurse_count + 1 });
							if (o = c.node, s++ > 40) throw new jt.ErrnoError(32);
						}
					}
					return {
						path: a,
						node: o
					};
				},
				getPath: function(t) {
					for (var e;;) {
						if (jt.isRoot(t)) {
							var n = t.mount.mountpoint;
							return e ? n[n.length - 1] !== "/" ? n + "/" + e : n + e : n;
						}
						e = e ? t.name + "/" + e : t.name, t = t.parent;
					}
				},
				hashName: function(t, n) {
					for (var e = 0, r = 0; r < n.length; r++) e = (e << 5) - e + n.charCodeAt(r) | 0;
					return (t + e >>> 0) % jt.nameTable.length;
				},
				hashAddNode: function(t) {
					var e = jt.hashName(t.parent.id, t.name);
					t.name_next = jt.nameTable[e], jt.nameTable[e] = t;
				},
				hashRemoveNode: function(t) {
					var e = jt.hashName(t.parent.id, t.name);
					if (jt.nameTable[e] === t) jt.nameTable[e] = t.name_next;
					else for (var n = jt.nameTable[e]; n;) {
						if (n.name_next === t) {
							n.name_next = t.name_next;
							break;
						}
						n = n.name_next;
					}
				},
				lookupNode: function(t, n) {
					var e = jt.mayLookup(t);
					if (e) throw new jt.ErrnoError(e, t);
					for (var r = jt.hashName(t.id, n), o = jt.nameTable[r]; o; o = o.name_next) {
						var a = o.name;
						if (o.parent.id === t.id && a === n) return o;
					}
					return jt.lookup(t, n);
				},
				createNode: function(t, n, r, o) {
					V(typeof t == "object");
					var e = new jt.FSNode(t, n, r, o);
					return jt.hashAddNode(e), e;
				},
				destroyNode: function(t) {
					jt.hashRemoveNode(t);
				},
				isRoot: function(t) {
					return t === t.parent;
				},
				isMountpoint: function(t) {
					return !!t.mounted;
				},
				isFile: function(t) {
					return (t & 61440) === 32768;
				},
				isDir: function(t) {
					return (t & 61440) === 16384;
				},
				isLink: function(t) {
					return (t & 61440) === 40960;
				},
				isChrdev: function(t) {
					return (t & 61440) === 8192;
				},
				isBlkdev: function(t) {
					return (t & 61440) === 24576;
				},
				isFIFO: function(t) {
					return (t & 61440) === 4096;
				},
				isSocket: function(t) {
					return (t & 49152) === 49152;
				},
				flagsToPermissionString: function(t) {
					var e = [
						"r",
						"w",
						"rw"
					][t & 3];
					return t & 512 && (e += "w"), e;
				},
				nodePermissions: function(t, n) {
					return jt.ignorePermissions ? 0 : n.includes("r") && !(t.mode & 292) || n.includes("w") && !(t.mode & 146) || n.includes("x") && !(t.mode & 73) ? 2 : 0;
				},
				mayLookup: function(t) {
					var e = jt.nodePermissions(t, "x");
					return e || (t.node_ops.lookup ? 0 : 2);
				},
				mayCreate: function(t, n) {
					try {
						var e = jt.lookupNode(t, n);
						return 20;
					} catch (e) {}
					return jt.nodePermissions(t, "wx");
				},
				mayDelete: function(t, n, r) {
					var e;
					try {
						e = jt.lookupNode(t, n);
					} catch (e) {
						return e.errno;
					}
					var o = jt.nodePermissions(t, "wx");
					if (o) return o;
					if (r) {
						if (!jt.isDir(e.mode)) return 54;
						if (jt.isRoot(e) || jt.getPath(e) === jt.cwd()) return 10;
					} else if (jt.isDir(e.mode)) return 31;
					return 0;
				},
				mayOpen: function(t, n) {
					return t ? jt.isLink(t.mode) ? 32 : jt.isDir(t.mode) && (jt.flagsToPermissionString(n) !== "r" || n & 512) ? 31 : jt.nodePermissions(t, jt.flagsToPermissionString(n)) : 44;
				},
				MAX_OPEN_FDS: 4096,
				nextfd: function() {
					for (var e = 0; e <= jt.MAX_OPEN_FDS; e++) if (!jt.streams[e]) return e;
					throw new jt.ErrnoError(33);
				},
				getStreamChecked: function(t) {
					var e = jt.getStream(t);
					if (!e) throw new jt.ErrnoError(8);
					return e;
				},
				getStream: function(t) {
					return jt.streams[t];
				},
				createStream: function(t, n) {
					return n === void 0 && (n = -1), jt.FSStream || (jt.FSStream = function() {
						this.shared = {};
					}, jt.FSStream.prototype = {}, Object.defineProperties(jt.FSStream.prototype, {
						object: {
							get: function() {
								return this.node;
							},
							set: function(t) {
								this.node = t;
							}
						},
						isRead: { get: function() {
							return (this.flags & 2097155) !== 1;
						} },
						isWrite: { get: function() {
							return (this.flags & 2097155) !== 0;
						} },
						isAppend: { get: function() {
							return this.flags & 1024;
						} },
						flags: {
							get: function() {
								return this.shared.flags;
							},
							set: function(t) {
								this.shared.flags = t;
							}
						},
						position: {
							get: function() {
								return this.shared.position;
							},
							set: function(t) {
								this.shared.position = t;
							}
						}
					})), t = Object.assign(new jt.FSStream(), t), n == -1 && (n = jt.nextfd()), t.fd = n, jt.streams[n] = t, t;
				},
				closeStream: function(t) {
					jt.streams[t] = null;
				},
				chrdev_stream_ops: {
					open: function(t) {
						var e = jt.getDevice(t.node.rdev);
						t.stream_ops = e.stream_ops, t.stream_ops.open && t.stream_ops.open(t);
					},
					llseek: function() {
						throw new jt.ErrnoError(70);
					}
				},
				major: function(t) {
					return t >> 8;
				},
				minor: function(t) {
					return t & 255;
				},
				makedev: function(t, n) {
					return t << 8 | n;
				},
				registerDevice: function(t, n) {
					jt.devices[t] = { stream_ops: n };
				},
				getDevice: function(t) {
					return jt.devices[t];
				},
				getMounts: function(t) {
					for (var e = [], n = [t]; n.length;) {
						var r = n.pop();
						e.push(r), n.push.apply(n, r.mounts);
					}
					return e;
				},
				syncfs: function(t, n) {
					typeof t == "function" && (n = t, t = !1), jt.syncFSRequests++, jt.syncFSRequests > 1 && w("warning: " + jt.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
					var e = jt.getMounts(jt.root.mount), r = 0;
					function o(e) {
						return V(jt.syncFSRequests > 0), jt.syncFSRequests--, n(e);
					}
					function a(t) {
						if (t) return a.errored ? void 0 : (a.errored = !0, o(t));
						++r >= e.length && o(null);
					}
					e.forEach(function(e) {
						if (!e.type.syncfs) return a(null);
						e.type.syncfs(e, t, a);
					});
				},
				mount: function(t, n, r) {
					if (typeof t == "string") throw t;
					var e = r === "/", o = !r, a;
					if (e && jt.root) throw new jt.ErrnoError(10);
					if (!e && !o) {
						var i = jt.lookupPath(r, { follow_mount: !1 });
						if (r = i.path, a = i.node, jt.isMountpoint(a)) throw new jt.ErrnoError(10);
						if (!jt.isDir(a.mode)) throw new jt.ErrnoError(54);
					}
					var l = {
						type: t,
						opts: n,
						mountpoint: r,
						mounts: []
					}, s = t.mount(l);
					return s.mount = l, l.root = s, e ? jt.root = s : a && (a.mounted = l, a.mount && a.mount.mounts.push(l)), s;
				},
				unmount: function(t) {
					var e = jt.lookupPath(t, { follow_mount: !1 });
					if (!jt.isMountpoint(e.node)) throw new jt.ErrnoError(28);
					var n = e.node, r = n.mounted, o = jt.getMounts(r);
					Object.keys(jt.nameTable).forEach(function(e) {
						for (var t = jt.nameTable[e]; t;) {
							var n = t.name_next;
							o.includes(t.mount) && jt.destroyNode(t), t = n;
						}
					}), n.mounted = null;
					var a = n.mount.mounts.indexOf(r);
					V(a !== -1), n.mount.mounts.splice(a, 1);
				},
				lookup: function(t, n) {
					return t.node_ops.lookup(t, n);
				},
				mknod: function(t, n, r) {
					var e = jt.lookupPath(t, { parent: !0 }), o = e.node, a = vt.basename(t);
					if (!a || a === "." || a === "..") throw new jt.ErrnoError(28);
					var i = jt.mayCreate(o, a);
					if (i) throw new jt.ErrnoError(i);
					if (!o.node_ops.mknod) throw new jt.ErrnoError(63);
					return o.node_ops.mknod(o, a, n, r);
				},
				create: function(t, n) {
					return n = n !== void 0 ? n : 438, n &= 4095, n |= 32768, jt.mknod(t, n, 0);
				},
				mkdir: function(t, n) {
					return n = n !== void 0 ? n : 511, n &= 1023, n |= 16384, jt.mknod(t, n, 0);
				},
				mkdirTree: function(t, n) {
					for (var e = t.split("/"), r = "", o = 0; o < e.length; ++o) if (e[o]) {
						r += "/" + e[o];
						try {
							jt.mkdir(r, n);
						} catch (e) {
							if (e.errno != 20) throw e;
						}
					}
				},
				mkdev: function(t, n, r) {
					return typeof r == "undefined" && (r = n, n = 438), n |= 8192, jt.mknod(t, n, r);
				},
				symlink: function(t, n) {
					if (!Lt.resolve(t)) throw new jt.ErrnoError(44);
					var e = jt.lookupPath(n, { parent: !0 }), r = e.node;
					if (!r) throw new jt.ErrnoError(44);
					var o = vt.basename(n), a = jt.mayCreate(r, o);
					if (a) throw new jt.ErrnoError(a);
					if (!r.node_ops.symlink) throw new jt.ErrnoError(63);
					return r.node_ops.symlink(r, o, t);
				},
				rename: function(t, n) {
					var e = vt.dirname(t), r = vt.dirname(n), o = vt.basename(t), a = vt.basename(n), i, l, s;
					if (i = jt.lookupPath(t, { parent: !0 }), l = i.node, i = jt.lookupPath(n, { parent: !0 }), s = i.node, !l || !s) throw new jt.ErrnoError(44);
					if (l.mount !== s.mount) throw new jt.ErrnoError(75);
					var u = jt.lookupNode(l, o), c = Lt.relative(t, r);
					if (c.charAt(0) !== ".") throw new jt.ErrnoError(28);
					if (c = Lt.relative(n, e), c.charAt(0) !== ".") throw new jt.ErrnoError(55);
					var d;
					try {
						d = jt.lookupNode(s, a);
					} catch (e) {}
					if (u !== d) {
						var m = jt.isDir(u.mode), p = jt.mayDelete(l, o, m);
						if (p) throw new jt.ErrnoError(p);
						if (p = d ? jt.mayDelete(s, a, m) : jt.mayCreate(s, a), p) throw new jt.ErrnoError(p);
						if (!l.node_ops.rename) throw new jt.ErrnoError(63);
						if (jt.isMountpoint(u) || d && jt.isMountpoint(d)) throw new jt.ErrnoError(10);
						if (s !== l && (p = jt.nodePermissions(l, "w"), p)) throw new jt.ErrnoError(p);
						jt.hashRemoveNode(u);
						try {
							l.node_ops.rename(u, s, a);
						} catch (e) {
							throw e;
						} finally {
							jt.hashAddNode(u);
						}
					}
				},
				rmdir: function(t) {
					var e = jt.lookupPath(t, { parent: !0 }), n = e.node, r = vt.basename(t), o = jt.lookupNode(n, r), a = jt.mayDelete(n, r, !0);
					if (a) throw new jt.ErrnoError(a);
					if (!n.node_ops.rmdir) throw new jt.ErrnoError(63);
					if (jt.isMountpoint(o)) throw new jt.ErrnoError(10);
					n.node_ops.rmdir(n, r), jt.destroyNode(o);
				},
				readdir: function(t) {
					var e = jt.lookupPath(t, { follow: !0 }), n = e.node;
					if (!n.node_ops.readdir) throw new jt.ErrnoError(54);
					return n.node_ops.readdir(n);
				},
				unlink: function(t) {
					var e = jt.lookupPath(t, { parent: !0 }), n = e.node;
					if (!n) throw new jt.ErrnoError(44);
					var r = vt.basename(t), o = jt.lookupNode(n, r), a = jt.mayDelete(n, r, !1);
					if (a) throw new jt.ErrnoError(a);
					if (!n.node_ops.unlink) throw new jt.ErrnoError(63);
					if (jt.isMountpoint(o)) throw new jt.ErrnoError(10);
					n.node_ops.unlink(n, r), jt.destroyNode(o);
				},
				readlink: function(t) {
					var e = jt.lookupPath(t), n = e.node;
					if (!n) throw new jt.ErrnoError(44);
					if (!n.node_ops.readlink) throw new jt.ErrnoError(28);
					return Lt.resolve(jt.getPath(n.parent), n.node_ops.readlink(n));
				},
				stat: function(t, n) {
					var e = jt.lookupPath(t, { follow: !n }), r = e.node;
					if (!r) throw new jt.ErrnoError(44);
					if (!r.node_ops.getattr) throw new jt.ErrnoError(63);
					return r.node_ops.getattr(r);
				},
				lstat: function(t) {
					return jt.stat(t, !0);
				},
				chmod: function(t, n, r) {
					var e;
					if (typeof t == "string") {
						var o = jt.lookupPath(t, { follow: !r });
						e = o.node;
					} else e = t;
					if (!e.node_ops.setattr) throw new jt.ErrnoError(63);
					e.node_ops.setattr(e, {
						mode: n & 4095 | e.mode & -4096,
						timestamp: Date.now()
					});
				},
				lchmod: function(t, n) {
					jt.chmod(t, n, !0);
				},
				fchmod: function(t, n) {
					var e = jt.getStreamChecked(t);
					jt.chmod(e.node, n);
				},
				chown: function(t, n, r, o) {
					var e;
					if (typeof t == "string") {
						var a = jt.lookupPath(t, { follow: !o });
						e = a.node;
					} else e = t;
					if (!e.node_ops.setattr) throw new jt.ErrnoError(63);
					e.node_ops.setattr(e, { timestamp: Date.now() });
				},
				lchown: function(t, n, r) {
					jt.chown(t, n, r, !0);
				},
				fchown: function(t, n, r) {
					var e = jt.getStreamChecked(t);
					jt.chown(e.node, n, r);
				},
				truncate: function(t, n) {
					if (n < 0) throw new jt.ErrnoError(28);
					var e;
					if (typeof t == "string") {
						var r = jt.lookupPath(t, { follow: !0 });
						e = r.node;
					} else e = t;
					if (!e.node_ops.setattr) throw new jt.ErrnoError(63);
					if (jt.isDir(e.mode)) throw new jt.ErrnoError(31);
					if (!jt.isFile(e.mode)) throw new jt.ErrnoError(28);
					var o = jt.nodePermissions(e, "w");
					if (o) throw new jt.ErrnoError(o);
					e.node_ops.setattr(e, {
						size: n,
						timestamp: Date.now()
					});
				},
				ftruncate: function(t, n) {
					var e = jt.getStreamChecked(t);
					if ((e.flags & 2097155) === 0) throw new jt.ErrnoError(28);
					jt.truncate(e.node, n);
				},
				utime: function(t, n, r) {
					var e = jt.lookupPath(t, { follow: !0 }), o = e.node;
					o.node_ops.setattr(o, { timestamp: Math.max(n, r) });
				},
				open: function(t, n, r) {
					if (t === "") throw new jt.ErrnoError(44);
					n = typeof n == "string" ? Wt(n) : n, r = typeof r == "undefined" ? 438 : r, n & 64 ? r = r & 4095 | 32768 : r = 0;
					var e;
					if (typeof t == "object") e = t;
					else {
						t = vt.normalize(t);
						try {
							var o = jt.lookupPath(t, { follow: !(n & 131072) });
							e = o.node;
						} catch (e) {}
					}
					var a = !1;
					if (n & 64) if (e) {
						if (n & 128) throw new jt.ErrnoError(20);
					} else e = jt.mknod(t, r, 0), a = !0;
					if (!e) throw new jt.ErrnoError(44);
					if (jt.isChrdev(e.mode) && (n &= -513), n & 65536 && !jt.isDir(e.mode)) throw new jt.ErrnoError(54);
					if (!a) {
						var i = jt.mayOpen(e, n);
						if (i) throw new jt.ErrnoError(i);
					}
					n & 512 && !a && jt.truncate(e, 0), n &= -131713;
					var l = jt.createStream({
						node: e,
						path: jt.getPath(e),
						flags: n,
						seekable: !0,
						position: 0,
						stream_ops: e.stream_ops,
						ungotten: [],
						error: !1
					});
					return l.stream_ops.open && l.stream_ops.open(l), g.logReadFiles && !(n & 1) && (jt.readFiles || (jt.readFiles = {}), t in jt.readFiles || (jt.readFiles[t] = 1)), l;
				},
				close: function(t) {
					if (jt.isClosed(t)) throw new jt.ErrnoError(8);
					t.getdents && (t.getdents = null);
					try {
						t.stream_ops.close && t.stream_ops.close(t);
					} catch (e) {
						throw e;
					} finally {
						jt.closeStream(t.fd);
					}
					t.fd = null;
				},
				isClosed: function(t) {
					return t.fd === null;
				},
				llseek: function(t, n, r) {
					if (jt.isClosed(t)) throw new jt.ErrnoError(8);
					if (!t.seekable || !t.stream_ops.llseek) throw new jt.ErrnoError(70);
					if (r != 0 && r != 1 && r != 2) throw new jt.ErrnoError(28);
					return t.position = t.stream_ops.llseek(t, n, r), t.ungotten = [], t.position;
				},
				read: function(t, n, r, o, a) {
					if (V(r >= 0), o < 0 || a < 0) throw new jt.ErrnoError(28);
					if (jt.isClosed(t)) throw new jt.ErrnoError(8);
					if ((t.flags & 2097155) === 1) throw new jt.ErrnoError(8);
					if (jt.isDir(t.node.mode)) throw new jt.ErrnoError(31);
					if (!t.stream_ops.read) throw new jt.ErrnoError(28);
					var e = typeof a != "undefined";
					if (!e) a = t.position;
					else if (!t.seekable) throw new jt.ErrnoError(70);
					var i = t.stream_ops.read(t, n, r, o, a);
					return e || (t.position += i), i;
				},
				write: function(t, n, r, o, a, i) {
					if (V(r >= 0), o < 0 || a < 0) throw new jt.ErrnoError(28);
					if (jt.isClosed(t)) throw new jt.ErrnoError(8);
					if ((t.flags & 2097155) === 0) throw new jt.ErrnoError(8);
					if (jt.isDir(t.node.mode)) throw new jt.ErrnoError(31);
					if (!t.stream_ops.write) throw new jt.ErrnoError(28);
					t.seekable && t.flags & 1024 && jt.llseek(t, 0, 2);
					var e = typeof a != "undefined";
					if (!e) a = t.position;
					else if (!t.seekable) throw new jt.ErrnoError(70);
					var l = t.stream_ops.write(t, n, r, o, a, i);
					return e || (t.position += l), l;
				},
				allocate: function(t, n, r) {
					if (jt.isClosed(t)) throw new jt.ErrnoError(8);
					if (n < 0 || r <= 0) throw new jt.ErrnoError(28);
					if ((t.flags & 2097155) === 0) throw new jt.ErrnoError(8);
					if (!jt.isFile(t.node.mode) && !jt.isDir(t.node.mode)) throw new jt.ErrnoError(43);
					if (!t.stream_ops.allocate) throw new jt.ErrnoError(138);
					t.stream_ops.allocate(t, n, r);
				},
				mmap: function(t, n, r, o, a) {
					if ((o & 2) !== 0 && (a & 2) === 0 && (t.flags & 2097155) !== 2) throw new jt.ErrnoError(2);
					if ((t.flags & 2097155) === 1) throw new jt.ErrnoError(2);
					if (!t.stream_ops.mmap) throw new jt.ErrnoError(43);
					return t.stream_ops.mmap(t, n, r, o, a);
				},
				msync: function(t, n, r, o, a) {
					return V(r >= 0), t.stream_ops.msync ? t.stream_ops.msync(t, n, r, o, a) : 0;
				},
				munmap: function(t) {
					return 0;
				},
				ioctl: function(t, n, r) {
					if (!t.stream_ops.ioctl) throw new jt.ErrnoError(59);
					return t.stream_ops.ioctl(t, n, r);
				},
				readFile: function(t, n) {
					if (n === void 0 && (n = {}), n.flags = n.flags || 0, n.encoding = n.encoding || "binary", n.encoding !== "utf8" && n.encoding !== "binary") throw new Error("Invalid encoding type \"" + n.encoding + "\"");
					var e, r = jt.open(t, n.flags), o = jt.stat(t), a = o.size, i = new Uint8Array(a);
					return jt.read(r, i, 0, a, 0), n.encoding === "utf8" ? e = kt(i, 0) : n.encoding === "binary" && (e = i), jt.close(r), e;
				},
				writeFile: function(t, n, r) {
					r === void 0 && (r = {}), r.flags = r.flags || 577;
					var e = jt.open(t, r.flags, r.mode);
					if (typeof n == "string") {
						var o = new Uint8Array(Tt(n) + 1), a = Dt(n, o, 0, o.length);
						jt.write(e, o, 0, a, void 0, r.canOwn);
					} else if (ArrayBuffer.isView(n)) jt.write(e, n, 0, n.byteLength, void 0, r.canOwn);
					else throw new Error("Unsupported data type");
					jt.close(e);
				},
				cwd: function() {
					return jt.currentPath;
				},
				chdir: function(t) {
					var e = jt.lookupPath(t, { follow: !0 });
					if (e.node === null) throw new jt.ErrnoError(44);
					if (!jt.isDir(e.node.mode)) throw new jt.ErrnoError(54);
					var n = jt.nodePermissions(e.node, "x");
					if (n) throw new jt.ErrnoError(n);
					jt.currentPath = e.path;
				},
				createDefaultDirectories: function() {
					jt.mkdir("/tmp"), jt.mkdir("/home"), jt.mkdir("/home/web_user");
				},
				createDefaultDevices: function() {
					jt.mkdir("/dev"), jt.registerDevice(jt.makedev(1, 3), {
						read: function() {
							return 0;
						},
						write: function(t, n, r, o, a) {
							return o;
						}
					}), jt.mkdev("/dev/null", jt.makedev(1, 3)), Pt.register(jt.makedev(5, 0), Pt.default_tty_ops), Pt.register(jt.makedev(6, 0), Pt.default_tty1_ops), jt.mkdev("/dev/tty", jt.makedev(5, 0)), jt.mkdev("/dev/tty1", jt.makedev(6, 0));
					var e = new Uint8Array(1024), t = 0, n = function() {
						return t === 0 && (t = Rt(e).byteLength), e[--t];
					};
					jt.createDevice("/dev", "random", n), jt.createDevice("/dev", "urandom", n), jt.mkdir("/dev/shm"), jt.mkdir("/dev/shm/tmp");
				},
				createSpecialDirectories: function() {
					jt.mkdir("/proc");
					var e = jt.mkdir("/proc/self");
					jt.mkdir("/proc/self/fd"), jt.mount({ mount: function() {
						var t = jt.createNode(e, "fd", 16895, 73);
						return t.node_ops = { lookup: function(t, n) {
							var e = +n, r = jt.getStreamChecked(e), o = {
								parent: null,
								mount: { mountpoint: "fake" },
								node_ops: { readlink: function() {
									return r.path;
								} }
							};
							return o.parent = o, o;
						} }, t;
					} }, {}, "/proc/self/fd");
				},
				createStandardStreams: function() {
					g.stdin ? jt.createDevice("/dev", "stdin", g.stdin) : jt.symlink("/dev/tty", "/dev/stdin"), g.stdout ? jt.createDevice("/dev", "stdout", null, g.stdout) : jt.symlink("/dev/tty", "/dev/stdout"), g.stderr ? jt.createDevice("/dev", "stderr", null, g.stderr) : jt.symlink("/dev/tty1", "/dev/stderr");
					var e = jt.open("/dev/stdin", 0), t = jt.open("/dev/stdout", 1), n = jt.open("/dev/stderr", 1);
					V(e.fd === 0, "invalid handle for stdin (" + e.fd + ")"), V(t.fd === 1, "invalid handle for stdout (" + t.fd + ")"), V(n.fd === 2, "invalid handle for stderr (" + n.fd + ")");
				},
				ensureErrnoError: function() {
					jt.ErrnoError || (jt.ErrnoError = function(t, n) {
						this.name = "ErrnoError", this.node = n, this.setErrno = function(e) {
							this.errno = e;
							for (var t in Ht) if (Ht[t] === e) {
								this.code = t;
								break;
							}
						}, this.setErrno(t), this.message = Vt[t], this.stack && (Object.defineProperty(this, "stack", {
							value: new Error().stack,
							writable: !0
						}), this.stack = zt(this.stack));
					}, jt.ErrnoError.prototype = new Error(), jt.ErrnoError.prototype.constructor = jt.ErrnoError, [44].forEach(function(e) {
						jt.genericErrors[e] = new jt.ErrnoError(e), jt.genericErrors[e].stack = "<generic error, no stack>";
					}));
				},
				staticInit: function() {
					jt.ensureErrnoError(), jt.nameTable = new Array(4096), jt.mount(wt, {}, "/"), jt.createDefaultDirectories(), jt.createDefaultDevices(), jt.createSpecialDirectories(), jt.filesystems = {
						MEMFS: wt,
						IDBFS: Ut
					};
				},
				init: function(t, n, r) {
					V(!jt.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), jt.init.initialized = !0, jt.ensureErrnoError(), g.stdin = t || g.stdin, g.stdout = n || g.stdout, g.stderr = r || g.stderr, jt.createStandardStreams();
				},
				quit: function() {
					jt.init.initialized = !1, Mi(0);
					for (var e = 0; e < jt.streams.length; e++) {
						var t = jt.streams[e];
						t && jt.close(t);
					}
				},
				findObject: function(t, n) {
					var e = jt.analyzePath(t, n);
					return e.exists ? e.object : null;
				},
				analyzePath: function(t, n) {
					try {
						var e = jt.lookupPath(t, { follow: !n });
						t = e.path;
					} catch (e) {}
					var r = {
						isRoot: !1,
						exists: !1,
						error: 0,
						name: null,
						path: null,
						object: null,
						parentExists: !1,
						parentPath: null,
						parentObject: null
					};
					try {
						var e = jt.lookupPath(t, { parent: !0 });
						r.parentExists = !0, r.parentPath = e.path, r.parentObject = e.node, r.name = vt.basename(t), e = jt.lookupPath(t, { follow: !n }), r.exists = !0, r.path = e.path, r.object = e.node, r.name = e.node.name, r.isRoot = e.path === "/";
					} catch (e) {
						r.error = e.errno;
					}
					return r;
				},
				createPath: function(t, n, r, o) {
					t = typeof t == "string" ? t : jt.getPath(t);
					for (var e = n.split("/").reverse(); e.length;) {
						var a = e.pop();
						if (a) {
							var i = vt.join2(t, a);
							try {
								jt.mkdir(i);
							} catch (e) {}
							t = i;
						}
					}
					return i;
				},
				createFile: function(t, n, r, o, a) {
					var e = vt.join2(typeof t == "string" ? t : jt.getPath(t), n), i = qt(o, a);
					return jt.create(e, i);
				},
				createDataFile: function(t, n, r, o, a, i) {
					var e = n;
					t && (t = typeof t == "string" ? t : jt.getPath(t), e = n ? vt.join2(t, n) : t);
					var l = qt(o, a), s = jt.create(e, l);
					if (r) {
						if (typeof r == "string") {
							for (var u = new Array(r.length), c = 0, d = r.length; c < d; ++c) u[c] = r.charCodeAt(c);
							r = u;
						}
						jt.chmod(s, l | 146);
						var m = jt.open(s, 577);
						jt.write(m, r, 0, r.length, 0, i), jt.close(m), jt.chmod(s, l);
					}
					return s;
				},
				createDevice: function(t, n, r, o) {
					var e = vt.join2(typeof t == "string" ? t : jt.getPath(t), n), a = qt(!!r, !!o);
					jt.createDevice.major || (jt.createDevice.major = 64);
					var i = jt.makedev(jt.createDevice.major++, 0);
					return jt.registerDevice(i, {
						open: function(t) {
							t.seekable = !1;
						},
						close: function(t) {
							o && o.buffer && o.buffer.length && o(10);
						},
						read: function(t, n, o, a, i) {
							for (var e = 0, l = 0; l < a; l++) {
								var s;
								try {
									s = r();
								} catch (e) {
									throw new jt.ErrnoError(29);
								}
								if (s === void 0 && e === 0) throw new jt.ErrnoError(6);
								if (s == null) break;
								e++, n[o + l] = s;
							}
							return e && (t.node.timestamp = Date.now()), e;
						},
						write: function(t, n, r, a, i) {
							for (var e = 0; e < a; e++) try {
								o(n[r + e]);
							} catch (e) {
								throw new jt.ErrnoError(29);
							}
							return a && (t.node.timestamp = Date.now()), e;
						}
					}), jt.mkdev(e, a, i);
				},
				forceLoadFile: function(t) {
					if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
					if (typeof XMLHttpRequest != "undefined") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
					if (x) try {
						t.contents = xt(x(t.url), !0), t.usedBytes = t.contents.length;
					} catch (e) {
						throw new jt.ErrnoError(29);
					}
					else throw new Error("Cannot load without read() or XMLHttpRequest.");
				},
				createLazyFile: function(t, n, r, o, a) {
					function e() {
						this.lengthKnown = !1, this.chunks = [];
					}
					if (e.prototype.get = function(t) {
						if (!(t > this.length - 1 || t < 0)) {
							var e = t % this.chunkSize, n = t / this.chunkSize | 0;
							return this.getter(n)[e];
						}
					}, e.prototype.setDataGetter = function(t) {
						this.getter = t;
					}, e.prototype.cacheLength = function() {
						var e = new XMLHttpRequest();
						if (e.open("HEAD", r, !1), e.send(null), !(e.status >= 200 && e.status < 300 || e.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + e.status);
						var t = Number(e.getResponseHeader("Content-length")), n, o = (n = e.getResponseHeader("Accept-Ranges")) && n === "bytes", a = (n = e.getResponseHeader("Content-Encoding")) && n === "gzip", i = 1024 * 1024;
						o || (i = t);
						var l = function(n, o) {
							if (n > o) throw new Error("invalid range (" + n + ", " + o + ") or no bytes requested!");
							if (o > t - 1) throw new Error("only " + t + " bytes available! programmer error!");
							var e = new XMLHttpRequest();
							if (e.open("GET", r, !1), t !== i && e.setRequestHeader("Range", "bytes=" + n + "-" + o), e.responseType = "arraybuffer", e.overrideMimeType && e.overrideMimeType("text/plain; charset=x-user-defined"), e.send(null), !(e.status >= 200 && e.status < 300 || e.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + e.status);
							return e.response !== void 0 ? new Uint8Array(e.response || []) : xt(e.responseText || "", !0);
						}, s = this;
						s.setDataGetter(function(e) {
							var n = e * i, r = (e + 1) * i - 1;
							if (r = Math.min(r, t - 1), typeof s.chunks[e] == "undefined" && (s.chunks[e] = l(n, r)), typeof s.chunks[e] == "undefined") throw new Error("doXHR failed!");
							return s.chunks[e];
						}), (a || !t) && (i = t = 1, t = this.getter(0).length, i = t, M("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = t, this._chunkSize = i, this.lengthKnown = !0;
					}, typeof XMLHttpRequest != "undefined") {
						if (!L) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
						var l = new e();
						Object.defineProperties(l, {
							length: { get: function() {
								return this.lengthKnown || this.cacheLength(), this._length;
							} },
							chunkSize: { get: function() {
								return this.lengthKnown || this.cacheLength(), this._chunkSize;
							} }
						});
						var s = {
							isDevice: !1,
							contents: l
						};
					} else var s = {
						isDevice: !1,
						url: r
					};
					var u = jt.createFile(t, n, s, o, a);
					s.contents ? u.contents = s.contents : s.url && (u.contents = null, u.url = s.url), Object.defineProperties(u, { usedBytes: { get: function() {
						return this.contents.length;
					} } });
					var c = {}, d = Object.keys(u.stream_ops);
					d.forEach(function(e) {
						var t = u.stream_ops[e];
						c[e] = function() {
							return jt.forceLoadFile(u), t.apply(null, arguments);
						};
					});
					function m(e, t, n, r, o) {
						var a = e.node.contents;
						if (o >= a.length) return 0;
						var i = Math.min(a.length - o, r);
						if (V(i >= 0), a.slice) for (var l = 0; l < i; l++) t[n + l] = a[o + l];
						else for (var l = 0; l < i; l++) t[n + l] = a.get(o + l);
						return i;
					}
					return c.read = function(e, t, n, r, o) {
						return jt.forceLoadFile(u), m(e, t, n, r, o);
					}, c.mmap = function(e, t, n, r, o) {
						jt.forceLoadFile(u);
						var a = Mt(t);
						if (!a) throw new jt.ErrnoError(48);
						return m(e, i(), a, t, n), {
							ptr: a,
							allocated: !0
						};
					}, u.stream_ops = c, u;
				},
				absolutePath: function() {
					Le("FS.absolutePath has been removed; use PATH_FS.resolve instead");
				},
				createFolder: function() {
					Le("FS.createFolder has been removed; use FS.mkdir instead");
				},
				createLink: function() {
					Le("FS.createLink has been removed; use FS.symlink instead");
				},
				joinPath: function() {
					Le("FS.joinPath has been removed; use PATH.join instead");
				},
				mmapAlloc: function() {
					Le("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
				},
				standardizePath: function() {
					Le("FS.standardizePath has been removed; use PATH.normalize instead");
				}
			}, Kt = function(t, n) {
				return V(typeof t == "number"), t ? kt(l(), t, n) : "";
			}, Qt = {
				DEFAULT_POLLMASK: 5,
				calculateAt: function(t, n, r) {
					if (vt.isAbs(n)) return n;
					var e;
					if (t === -100) e = jt.cwd();
					else {
						var o = Qt.getStreamFromFD(t);
						e = o.path;
					}
					if (n.length == 0) {
						if (!r) throw new jt.ErrnoError(44);
						return e;
					}
					return vt.join2(e, n);
				},
				doStat: function(t, n, r) {
					try {
						var e = t(n);
					} catch (e) {
						if (e && e.node && vt.normalize(n) !== vt.normalize(jt.getPath(e.node))) return -54;
						throw e;
					}
					m()[r >> 2] = e.dev, m()[r + 4 >> 2] = e.mode, p()[r + 8 >> 2] = e.nlink, m()[r + 12 >> 2] = e.uid, m()[r + 16 >> 2] = e.gid, m()[r + 20 >> 2] = e.rdev, Y[r + 24 >> 3] = BigInt(e.size), m()[r + 32 >> 2] = 4096, m()[r + 36 >> 2] = e.blocks;
					var o = e.atime.getTime(), a = e.mtime.getTime(), i = e.ctime.getTime();
					return Y[r + 40 >> 3] = BigInt(Math.floor(o / 1e3)), p()[r + 48 >> 2] = o % 1e3 * 1e3, Y[r + 56 >> 3] = BigInt(Math.floor(a / 1e3)), p()[r + 64 >> 2] = a % 1e3 * 1e3, Y[r + 72 >> 3] = BigInt(Math.floor(i / 1e3)), p()[r + 80 >> 2] = i % 1e3 * 1e3, Y[r + 88 >> 3] = BigInt(e.ino), 0;
				},
				doMsync: function(t, n, r, o, a) {
					if (!jt.isFile(n.node.mode)) throw new jt.ErrnoError(43);
					if (o & 2) return 0;
					var e = l().slice(t, t + r);
					jt.msync(n, e, a, r, o);
				},
				varargs: void 0,
				get: function() {
					V(Qt.varargs != null), Qt.varargs += 4;
					var e = m()[Qt.varargs - 4 >> 2];
					return e;
				},
				getStr: function(t) {
					var e = Kt(t);
					return e;
				},
				getStreamFromFD: function(t) {
					var e = jt.getStreamChecked(t);
					return e;
				}
			};
			function Xt(e) {
				if (I) return ha(1, 1, e);
				U = e, ce() || (tn.terminateAllThreads(), g.onExit && g.onExit(e), q = !0), S(e, new _t(e));
			}
			var Yt = function(t, n) {
				if (U = t, rc(), I) throw V(!n), on(t), "unwind";
				if (ce() && !n) {
					var e = "program exited (with status: " + t + "), but keepRuntimeAlive() is set (counter=" + ue + ") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)";
					y(e), w(e);
				}
				Xt(t);
			}, Jt = Yt, Zt = function(t) {
				return V(typeof t == "number"), t >>>= 0, "0x" + t.toString(16).padStart(8, "0");
			}, en = function(t) {
				if (t instanceof _t || t == "unwind") return U;
				oe(), t instanceof WebAssembly.RuntimeError && pl() <= 0 && w("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 1048576)"), S(1, t);
			}, tn = {
				unusedWorkers: [],
				runningWorkers: [],
				tlsInitFunctions: [],
				pthreads: {},
				nextWorkerID: 1,
				debugInit: function() {
					function e() {
						var e = 0;
						return se && typeof Ai != "undefined" && (e = Ai()), "w:" + (g.workerID || 0) + ",t:" + Zt(e) + ": ";
					}
					var t = He;
					He = function(r) {
						return t(e() + r);
					};
				},
				init: function() {
					tn.debugInit(), I ? tn.initWorker() : tn.initMainThread();
				},
				initMainThread: function() {
					for (var e = typeof g.pthreadPoolSizeOverride == "number" ? g.pthreadPoolSizeOverride : 20; e--;) tn.allocateUnusedWorker();
					_e(function() {
						Se("loading-workers");
						var e = 15e3, t = !1, n = function(o) {
							if (!t) {
								t = !0, clearTimeout(r);
								var n = 0;
								try {
									if (o) {
										var a = [], i = [];
										for (var l of tn.unusedWorkers) l.loaded ? a.push(l) : i.push(l);
										for (var l of i) try {
											ft(l);
										} catch (e) {
											w("voip: ThreadPoolManager: failed to terminate timed-out pthread worker " + l.workerID + ": " + e);
										}
										n = i.length, tn.unusedWorkers = a, w("voip: ThreadPoolManager: pthread worker prewarm timed out after " + e + "ms; continuing with " + a.length + " ready workers");
									}
								} finally {
									Re("loading-workers");
								}
							}
						}, r = setTimeout(function() {
							return n(!0);
						}, e);
						tn.loadWasmModuleToAllWorkers(function() {
							return n(!1);
						});
					});
				},
				initWorker: function() {
					F = !1;
				},
				setExitStatus: function(t) {
					U = t;
				},
				terminateAllThreads__deps: ["$terminateWorker"],
				terminateAllThreads: function() {
					V(!I, "Internal Error! terminateAllThreads() can only ever be called from main application thread!");
					for (var e of tn.runningWorkers) ft(e);
					for (var e of tn.unusedWorkers) ft(e);
					tn.unusedWorkers = [], tn.runningWorkers = [], tn.pthreads = [];
				},
				returnWorkerToPool: function(t) {
					var e = t.pthread_ptr;
					delete tn.pthreads[e], tn.unusedWorkers.push(t), tn.runningWorkers.splice(tn.runningWorkers.indexOf(t), 1), t.pthread_ptr = 0, nl(e);
				},
				receiveObjectTransfer: function(t) {},
				threadInitTLS: function() {
					tn.tlsInitFunctions.forEach(function(e) {
						return e();
					});
				},
				loadWasmModuleToWorker: function(r) {
					return new Promise(function(n) {
						r.addMessageListener("cmd", function(e) {
							var t = e, o = t.cmd;
							if (t.targetThread && t.targetThread != Ai()) {
								var a = tn.pthreads[t.targetThread];
								a ? a.postMessage(babelHelpers.extends({}, t, { type: "cmd" }), t.transferList) : w("Internal error! Worker sent a message \"" + o + "\" to target pthread " + t.targetThread + ", but that thread no longer exists!");
								return;
							}
							o === "checkMailbox" ? Ko() : o === "spawnThread" ? bt(t) : o === "cleanupThread" ? yt(t.thread) : o === "killThread" ? gt(t.thread) : o === "cancelThread" ? ht(t.thread) : o === "loaded" ? (r.loaded = !0, n(r)) : o === "alert" ? alert("Thread " + t.threadId + ": " + t.text) : t.target === "setimmediate" ? r.postMessage(babelHelpers.extends({}, t, { type: "cmd" })) : o === "callHandler" ? g[t.handler].apply(g, t.args) : o && w("worker sent an unknown command " + o);
						}), r.addMessageListener("waWasmWorkerCompatibleCallback", function(t) {
							var n = t.type, r = t.__name, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
							a.WhatsAppVoipWasmWorkerCompatibleCallbacks[r](o);
						}), r.onerror = function(e) {
							var t = "worker sent an error!";
							throw r.pthread_ptr && (t = "Pthread " + Zt(r.pthread_ptr) + " sent an error!"), w(t + " " + e.filename + ":" + e.lineno + ": " + e.message), e;
						}, V(O instanceof WebAssembly.Memory, "WebAssembly memory should have been loaded by now!"), V(W instanceof WebAssembly.Module, "WebAssembly Module should have been loaded by now!");
						var o = [], i = [
							"onExit",
							"onAbort",
							"print",
							"printErr"
						];
						for (var l of i) Object.prototype.hasOwnProperty.call(g, l) && o.push(l);
						r.workerID = tn.nextWorkerID++, r.postMessage({
							cmd: "load",
							handlers: o,
							urlOrBlob: g.mainScriptUrlOrBlob || t,
							wasmMemory: O,
							wasmModule: W,
							workerID: r.workerID,
							wasmVariant: "prod-labvideo",
							type: "cmd"
						});
					});
				},
				loadWasmModuleToAllWorkers: function(t) {
					if (I) return t();
					var e = Promise.all(tn.unusedWorkers.map(tn.loadWasmModuleToWorker));
					e.then(t);
				},
				allocateUnusedWorker: function() {
					var e, t = o("WorkerBundleResource").createDedicatedWebWorker(WAWebVoipWebWasmWorkerResource);
					e = new (o("WorkerMessagePort")).WorkerMessagePort(t, "WAWebVoipWebWasmWorker"), o("WorkerClient").init(e), tn.unusedWorkers.push(e);
				},
				getNewWorker: function() {
					return tn.unusedWorkers.length == 0 && (w("Tried to spawn a new thread, but the thread pool is exhausted.\nThis might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\nIf you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`.\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`."), tn.allocateUnusedWorker(), tn.loadWasmModuleToWorker(tn.unusedWorkers[0])), tn.unusedWorkers.pop();
				}
			};
			g.PThread = tn;
			var nn = function(t) {
				for (; t.length > 0;) t.shift()(g);
			};
			function rn() {
				var e = Ai(), t = m()[e + 52 >> 2], n = m()[e + 56 >> 2], r = t - n;
				V(t != 0), V(r != 0), V(t > r, "stackHigh must be higher then stackLow"), sl(t, r), dl(t), re();
			}
			g.establishStackSpace = rn;
			function on(e) {
				if (I) return ha(2, 0, e);
				Jt(e);
			}
			var an = function(t) {
				var e = cl(), n = t();
				return dl(e), n;
			}, ln = function(t) {
				return an(function() {
					var e = ml(4), n = ml(4);
					_l(t, e, n);
					var r = p()[e >> 2], o = p()[n >> 2], a = Kt(r);
					Pi(r);
					var i;
					return o && (i = Kt(o), Pi(o)), [a, i];
				});
			};
			function sn(e) {
				return ln(e);
			}
			g.getExceptionMessage = sn;
			var un = function(t) {
				return ne.get(t);
			};
			function cn(e, t) {
				var n = un(e)(t);
				oe();
				function r(e) {
					ce() ? tn.setExitStatus(e) : rl(e);
				}
				r(n);
			}
			g.invokeEntryPoint = cn;
			function dn(e) {
				tn.tlsInitFunctions.push(e);
			}
			var mn = function(t) {
				mn.shown || (mn.shown = {}), mn.shown[t] || (mn.shown[t] = 1, w(t));
			}, pn = function(t, n, r, o) {
				Le("Assertion failed: " + Kt(t) + ", at: " + [
					n ? Kt(n) : "unknown filename",
					r,
					o ? Kt(o) : "unknown function"
				]);
			}, _n = [], fn = 0;
			function gn(e) {
				var t = new bn(e);
				return t.get_caught() || (t.set_caught(!0), fn--), t.set_rethrown(!1), _n.push(t), Ui(t.excPtr), t.get_exception_ptr();
			}
			function hn() {
				if (!_n.length) return 0;
				var e = _n[_n.length - 1];
				return Ui(e.excPtr), e.excPtr;
			}
			var yn = 0;
			function Cn() {
				al(0, 0), V(_n.length > 0);
				var e = _n.pop();
				Vi(e.excPtr), yn = 0;
			}
			function bn(e) {
				this.excPtr = e, this.ptr = e - 24, this.set_type = function(e) {
					p()[this.ptr + 4 >> 2] = e;
				}, this.get_type = function() {
					return p()[this.ptr + 4 >> 2];
				}, this.set_destructor = function(e) {
					p()[this.ptr + 8 >> 2] = e;
				}, this.get_destructor = function() {
					return p()[this.ptr + 8 >> 2];
				}, this.set_caught = function(e) {
					e = e ? 1 : 0, i()[this.ptr + 12 >> 0] = e;
				}, this.get_caught = function() {
					return i()[this.ptr + 12 >> 0] != 0;
				}, this.set_rethrown = function(e) {
					e = e ? 1 : 0, i()[this.ptr + 13 >> 0] = e;
				}, this.get_rethrown = function() {
					return i()[this.ptr + 13 >> 0] != 0;
				}, this.init = function(e, t) {
					this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t);
				}, this.set_adjusted_ptr = function(e) {
					p()[this.ptr + 16 >> 2] = e;
				}, this.get_adjusted_ptr = function() {
					return p()[this.ptr + 16 >> 2];
				}, this.get_exception_ptr = function() {
					var e = gl(this.get_type());
					if (e) return p()[this.excPtr >> 2];
					var t = this.get_adjusted_ptr();
					return t !== 0 ? t : this.excPtr;
				};
			}
			function vn(e) {
				throw yn || (yn = new $e(e)), yn;
			}
			var Sn = function(t) {
				var e = yn && yn.excPtr;
				if (!e) return il(0), 0;
				var n = new bn(e);
				n.set_adjusted_ptr(e);
				var r = n.get_type();
				if (!r) return il(0), e;
				for (var o in t) {
					var a = t[o];
					if (a === 0 || a === r) break;
					var i = n.ptr + 16;
					if (fl(a, r, i)) return il(a), e;
				}
				return il(r), e;
			}, Rn = function() {
				return Sn([]);
			}, Ln = function(t) {
				return Sn([t]);
			}, En = function(t, n) {
				return Sn([t, n]);
			};
			function kn(e) {
				var t = new bn(e).get_exception_ptr();
				return t;
			}
			function In() {
				var e = _n.pop();
				e || Le("no exception to throw");
				var t = e.excPtr;
				throw e.get_rethrown() || (_n.push(e), e.set_rethrown(!0), e.set_caught(!1), fn++), yn = new $e(t), yn;
			}
			function Tn(e) {
				if (e) {
					var t = new bn(e);
					_n.push(t), t.set_rethrown(!0), In();
				}
			}
			function Dn(e, t, n) {
				var r = new bn(e);
				throw r.init(t, n), yn = new $e(e), fn++, yn;
			}
			function xn() {
				return fn;
			}
			function $n(e) {
				Ki(e, !L, 1, !R, 1048576, !1), tn.threadInitTLS();
			}
			function Pn(e) {
				I ? postMessage({
					cmd: "cleanupThread",
					thread: e,
					type: "cmd"
				}) : yt(e);
			}
			function Nn(e, t, n, r) {
				return I ? ha(3, 1, e, t, n, r) : Mn(e, t, n, r);
			}
			function Mn(e, t, n, r) {
				if (typeof SharedArrayBuffer == "undefined") return w("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
				var o = [], a = 0;
				if (I && (o.length === 0 || a)) return Nn(e, t, n, r);
				var i = {
					startRoutine: n,
					pthread_ptr: e,
					arg: r,
					transferList: o
				};
				return I ? (i.cmd = "spawnThread", postMessage(babelHelpers.extends({}, i, { type: "cmd" }), o), 0) : bt(i);
			}
			function wn(e) {
				if (I) return ha(4, 1, e);
				try {
					return e = Qt.getStr(e), jt.chdir(e), 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			var An = function(t) {
				return m()[wi() >> 2] = t, t;
			};
			function Fn(e, t, n) {
				if (I) return ha(5, 1, e, t, n);
				Qt.varargs = n;
				try {
					var r = Qt.getStreamFromFD(e);
					switch (t) {
						case 0: {
							var o = Qt.get();
							if (o < 0) return -28;
							var a;
							return a = jt.createStream(r, o), a.fd;
						}
						case 1:
						case 2: return 0;
						case 3: return r.flags;
						case 4: {
							var o = Qt.get();
							return r.flags |= o, 0;
						}
						case 5: {
							var o = Qt.get(), i = 0;
							return c()[o + i >> 1] = 2, 0;
						}
						case 6:
						case 7: return 0;
						case 16:
						case 8: return -28;
						case 9: return An(28), -1;
						default: return -28;
					}
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function On(e, t) {
				if (I) return ha(6, 1, e, t);
				try {
					var n = Qt.getStreamFromFD(e);
					return Qt.doStat(jt.stat, n.path, t);
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			var Bn = 9007199254740992, Wn = -9007199254740992;
			function qn(e) {
				return e < Wn || e > Bn ? NaN : Number(e);
			}
			function Un(e, t) {
				if (I) return ha(7, 1, e, t);
				t = qn(t);
				try {
					return isNaN(t) ? 61 : (jt.ftruncate(e, t), 0);
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			var Vn = function(t, n, r) {
				return V(typeof r == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), Dt(t, l(), n, r);
			};
			function Hn(e, t, n) {
				if (I) return ha(8, 1, e, t, n);
				try {
					var r = Qt.getStreamFromFD(e);
					r.getdents || (r.getdents = jt.readdir(r.path));
					for (var o = 280, a = 0, l = jt.llseek(r, 0, 1), s = Math.floor(l / o); s < r.getdents.length && a + o <= n;) {
						var u, d, m = r.getdents[s];
						if (m === ".") u = r.node.id, d = 4;
						else if (m === "..") {
							var p = jt.lookupPath(r.path, { parent: !0 });
							u = p.node.id, d = 4;
						} else {
							var _ = jt.lookupNode(r.node, m);
							u = _.id, d = jt.isChrdev(_.mode) ? 2 : jt.isDir(_.mode) ? 4 : jt.isLink(_.mode) ? 10 : 8;
						}
						V(u), Y[t + a >> 3] = BigInt(u), Y[t + a + 8 >> 3] = BigInt((s + 1) * o), c()[t + a + 16 >> 1] = 280, i()[t + a + 18 >> 0] = d, Vn(m, t + a + 19, 256), a += o, s += 1;
					}
					return jt.llseek(r, s * o, 0), a;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Gn(e, t, n) {
				if (I) return ha(9, 1, e, t, n);
				Qt.varargs = n;
				try {
					var r = Qt.getStreamFromFD(e);
					switch (t) {
						case 21509: return r.tty ? 0 : -59;
						case 21505: {
							if (!r.tty) return -59;
							if (r.tty.ops.ioctl_tcgets) {
								var o = r.tty.ops.ioctl_tcgets(r), a = Qt.get();
								m()[a >> 2] = o.c_iflag || 0, m()[a + 4 >> 2] = o.c_oflag || 0, m()[a + 8 >> 2] = o.c_cflag || 0, m()[a + 12 >> 2] = o.c_lflag || 0;
								for (var l = 0; l < 32; l++) i()[a + l + 17 >> 0] = o.c_cc[l] || 0;
								return 0;
							}
							return 0;
						}
						case 21510:
						case 21511:
						case 21512: return r.tty ? 0 : -59;
						case 21506:
						case 21507:
						case 21508: {
							if (!r.tty) return -59;
							if (r.tty.ops.ioctl_tcsets) {
								for (var a = Qt.get(), s = m()[a >> 2], u = m()[a + 4 >> 2], d = m()[a + 8 >> 2], p = m()[a + 12 >> 2], _ = [], l = 0; l < 32; l++) _.push(i()[a + l + 17 >> 0]);
								return r.tty.ops.ioctl_tcsets(r.tty, t, {
									c_iflag: s,
									c_oflag: u,
									c_cflag: d,
									c_lflag: p,
									c_cc: _
								});
							}
							return 0;
						}
						case 21519: {
							if (!r.tty) return -59;
							var a = Qt.get();
							return m()[a >> 2] = 0, 0;
						}
						case 21520: return r.tty ? -28 : -59;
						case 21531: {
							var a = Qt.get();
							return jt.ioctl(r, t, a);
						}
						case 21523: {
							if (!r.tty) return -59;
							if (r.tty.ops.ioctl_tiocgwinsz) {
								var f = r.tty.ops.ioctl_tiocgwinsz(r.tty), a = Qt.get();
								c()[a >> 1] = f[0], c()[a + 2 >> 1] = f[1];
							}
							return 0;
						}
						case 21524: return r.tty ? 0 : -59;
						case 21515: return r.tty ? 0 : -59;
						default: return -28;
					}
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function zn(e, t) {
				if (I) return ha(10, 1, e, t);
				try {
					return e = Qt.getStr(e), Qt.doStat(jt.lstat, e, t);
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function jn(e, t, n) {
				if (I) return ha(11, 1, e, t, n);
				try {
					return t = Qt.getStr(t), t = Qt.calculateAt(e, t), t = vt.normalize(t), t[t.length - 1] === "/" && (t = t.substr(0, t.length - 1)), jt.mkdir(t, n, 0), 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Kn(e, t, n, r) {
				if (I) return ha(12, 1, e, t, n, r);
				try {
					t = Qt.getStr(t);
					var o = r & 256, a = r & 4096;
					return r = r & -6401, V(!r, "unknown flags in __syscall_newfstatat: " + r), t = Qt.calculateAt(e, t, a), Qt.doStat(o ? jt.lstat : jt.stat, t, n);
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Qn(e, t, n, r) {
				if (I) return ha(13, 1, e, t, n, r);
				Qt.varargs = r;
				try {
					t = Qt.getStr(t), t = Qt.calculateAt(e, t);
					var o = r ? Qt.get() : 0;
					return jt.open(t, n, o).fd;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Xn(e, t) {
				if (I) return ha(14, 1, e, t);
				try {
					return e = Qt.getStr(e), Qt.doStat(jt.stat, e, t);
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Yn(e, t, n) {
				if (I) return ha(15, 1, e, t, n);
				try {
					return t = Qt.getStr(t), t = Qt.calculateAt(e, t), n === 0 ? jt.unlink(t) : n === 512 ? jt.rmdir(t) : Le("Invalid flags passed to unlinkat"), 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Jn(e) {
				if (e === null) return "null";
				var t = typeof e;
				return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
			}
			function Zn() {
				for (var e = new Array(256), t = 0; t < 256; ++t) e[t] = String.fromCharCode(t);
				er = e;
			}
			var er = void 0;
			function tr(e) {
				for (var t = "", n = e; l()[n];) t += er[l()[n++]];
				return t;
			}
			var nr = {}, rr = {}, or = {}, ar = void 0;
			function ir(e) {
				throw new ar(e);
			}
			var lr = void 0;
			function sr(e) {
				throw new lr(e);
			}
			function ur(e, t, n) {
				e.forEach(function(e) {
					or[e] = t;
				});
				function r(t) {
					var r = n(t);
					r.length !== e.length && sr("Mismatched type converter count");
					for (var o = 0; o < e.length; ++o) dr(e[o], r[o]);
				}
				var o = new Array(t.length), a = [], i = 0;
				t.forEach(function(e, t) {
					Object.prototype.hasOwnProperty.call(rr, e) ? o[t] = rr[e] : (a.push(e), Object.prototype.hasOwnProperty.call(nr, e) || (nr[e] = []), nr[e].push(function() {
						o[t] = rr[e], ++i, i === a.length && r(o);
					}));
				}), a.length === 0 && r(o);
			}
			function cr(e, t, n) {
				n === void 0 && (n = {});
				var r = t.name;
				if (e || ir("type \"" + r + "\" must have a positive integer typeid pointer"), Object.prototype.hasOwnProperty.call(rr, e)) {
					if (n.ignoreDuplicateRegistrations) return;
					ir("Cannot register type '" + r + "' twice");
				}
				if (rr[e] = t, delete or[e], Object.prototype.hasOwnProperty.call(nr, e)) {
					var o = nr[e];
					delete nr[e], o.forEach(function(e) {
						return e();
					});
				}
			}
			function dr(e, t, n) {
				if (n === void 0 && (n = {}), !("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
				return cr(e, t, n);
			}
			function mr(e, t, n) {
				switch (t) {
					case 0: return n ? function(t) {
						return i()[t];
					} : function(t) {
						return l()[t];
					};
					case 1: return n ? function(t) {
						return c()[t >> 1];
					} : function(t) {
						return d()[t >> 1];
					};
					case 2: return n ? function(t) {
						return m()[t >> 2];
					} : function(t) {
						return p()[t >> 2];
					};
					case 3: return n ? function(t) {
						return Y[t >> 3];
					} : function(t) {
						return J[t >> 3];
					};
					default: throw new TypeError("Unknown integer type: " + e);
				}
			}
			function pr(e, t, n, r, o) {
				t = tr(t);
				var a = _r(n), i = t.indexOf("u") != -1;
				i && (o = (BigInt(1) << BigInt(64)) - BigInt(1)), dr(e, {
					name: t,
					fromWireType: function(t) {
						return t;
					},
					toWireType: function(n, a) {
						if (typeof a != "bigint" && typeof a != "number") throw new TypeError("Cannot convert \"" + Jn(a) + "\" to " + this.name);
						if (a < r || a > o) throw new TypeError("Passing a number \"" + Jn(a) + "\" from JS side to C/C++ side to an argument of type \"" + t + "\", which is outside the valid range [" + r + ", " + o + "]!");
						return a;
					},
					argPackAdvance: 8,
					readValueFromPointer: mr(t, a, !i),
					destructorFunction: null
				});
			}
			function _r(e) {
				switch (e) {
					case 1: return 0;
					case 2: return 1;
					case 4: return 2;
					case 8: return 3;
					default: throw new TypeError("Unknown type size: " + e);
				}
			}
			function fr(e, t, n, r, o) {
				var a = _r(n);
				t = tr(t), dr(e, {
					name: t,
					fromWireType: function(t) {
						return !!t;
					},
					toWireType: function(t, n) {
						return n ? r : o;
					},
					argPackAdvance: 8,
					readValueFromPointer: function(r) {
						var e;
						if (n === 1) e = i();
						else if (n === 2) e = c();
						else if (n === 4) e = m();
						else throw new TypeError("Unknown boolean type size: " + t);
						return this.fromWireType(e[r >> a]);
					},
					destructorFunction: null,
					jsType: "boolean"
				});
			}
			function gr(e) {
				if (!(this instanceof Vr) || !(e instanceof Vr)) return !1;
				for (var t = this.$$.ptrType.registeredClass, n = this.$$.ptr, r = e.$$.ptrType.registeredClass, o = e.$$.ptr; t.baseClass;) n = t.upcast(n), t = t.baseClass;
				for (; r.baseClass;) o = r.upcast(o), r = r.baseClass;
				return t === r && n === o;
			}
			function hr(e) {
				return {
					count: e.count,
					deleteScheduled: e.deleteScheduled,
					preservePointerOnDelete: e.preservePointerOnDelete,
					ptr: e.ptr,
					ptrType: e.ptrType,
					smartPtr: e.smartPtr,
					smartPtrType: e.smartPtrType
				};
			}
			function yr(e) {
				function t(e) {
					return e.$$.ptrType.registeredClass.name;
				}
				ir(t(e) + " instance already deleted");
			}
			var Cr = !1;
			function br(e) {}
			function vr(e) {
				e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
			}
			function Sr(e) {
				e.count.value -= 1;
				var t = e.count.value === 0;
				t && vr(e);
			}
			function Rr(e, t, n) {
				if (t === n) return e;
				if (n.baseClass === void 0) return null;
				var r = Rr(e, t, n.baseClass);
				return r === null ? null : n.downcast(r);
			}
			var Lr = {};
			function Er() {
				return Object.keys(Pr).length;
			}
			function kr() {
				var e = [];
				for (var t in Pr) Object.prototype.hasOwnProperty.call(Pr, t) && e.push(Pr[t]);
				return e;
			}
			var Ir = [];
			function Tr() {
				for (; Ir.length;) {
					var e = Ir.pop();
					e.$$.deleteScheduled = !1, e.delete();
				}
			}
			var Dr = void 0;
			function xr(e) {
				Dr = e, Ir.length && Dr && Dr(Tr);
			}
			function $r() {
				g.getInheritedInstanceCount = Er, g.getLiveInheritedInstances = kr, g.flushPendingDeletes = Tr, g.setDelayFunction = xr;
			}
			var Pr = {};
			function Nr(e, t) {
				for (t === void 0 && ir("ptr should not be undefined"); e.baseClass;) t = e.upcast(t), e = e.baseClass;
				return t;
			}
			function Mr(e, t) {
				return t = Nr(e, t), Pr[t];
			}
			function wr(e, t) {
				(!t.ptrType || !t.ptr) && sr("makeClassHandle requires ptr and ptrType");
				var n = !!t.smartPtrType, r = !!t.smartPtr;
				return n !== r && sr("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, Fr(Object.create(e, { $$: { value: t } }));
			}
			function Ar(e) {
				var t = this.getPointee(e);
				if (!t) return this.destructor(e), null;
				var n = Mr(this.registeredClass, t);
				if (n !== void 0) {
					if (n.$$.count.value === 0) return n.$$.ptr = t, n.$$.smartPtr = e, n.clone();
					var r = n.clone();
					return this.destructor(e), r;
				}
				function o() {
					return this.isSmartPointer ? wr(this.registeredClass.instancePrototype, {
						ptrType: this.pointeeType,
						ptr: t,
						smartPtrType: this,
						smartPtr: e
					}) : wr(this.registeredClass.instancePrototype, {
						ptrType: this,
						ptr: e
					});
				}
				var a = this.registeredClass.getActualType(t), i = Lr[a];
				if (!i) return o.call(this);
				var l;
				this.isConst ? l = i.constPointerType : l = i.pointerType;
				var s = Rr(t, this.registeredClass, l.registeredClass);
				return s === null ? o.call(this) : this.isSmartPointer ? wr(l.registeredClass.instancePrototype, {
					ptrType: l,
					ptr: s,
					smartPtrType: this,
					smartPtr: e
				}) : wr(l.registeredClass.instancePrototype, {
					ptrType: l,
					ptr: s
				});
			}
			var Fr = function(t) {
				return typeof FinalizationRegistry == "undefined" ? (Fr = function(t) {
					return t;
				}, t) : (Cr = new FinalizationRegistry(function(e) {
					e.leakWarning.stack.replace(/^Error: /, ""), Sr(e.$$);
				}), Fr = function(t) {
					var e = t.$$, n = !!e.smartPtr;
					if (n) {
						var r = { $$: e }, o = e.ptrType.registeredClass;
						r.leakWarning = new Error("Embind found a leaked C++ instance " + o.name + " <" + Zt(e.ptr) + `>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`), "captureStackTrace" in Error && Error.captureStackTrace(r.leakWarning, Ar), Cr.register(t, r, t);
					}
					return t;
				}, br = function(t) {
					return Cr.unregister(t);
				}, Fr(t));
			};
			function Or() {
				if (this.$$.ptr || yr(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
				var e = Fr(Object.create(Object.getPrototypeOf(this), { $$: { value: hr(this.$$) } }));
				return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
			}
			function Br() {
				this.$$.ptr || yr(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && ir("Object already scheduled for deletion"), br(this), Sr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
			}
			function Wr() {
				return !this.$$.ptr;
			}
			function qr() {
				return this.$$.ptr || yr(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && ir("Object already scheduled for deletion"), Ir.push(this), Ir.length === 1 && Dr && Dr(Tr), this.$$.deleteScheduled = !0, this;
			}
			function Ur() {
				Vr.prototype.isAliasOf = gr, Vr.prototype.clone = Or, Vr.prototype.delete = Br, Vr.prototype.isDeleted = Wr, Vr.prototype.deleteLater = qr;
			}
			function Vr() {}
			var Hr = 48, Gr = 57;
			function zr(e) {
				if (e === void 0) return "_unknown";
				e = e.replace(/[^a-zA-Z0-9_]/g, "$");
				var t = e.charCodeAt(0);
				return t >= Hr && t <= Gr ? "_" + e : e;
			}
			function jr(e, t) {
				var n;
				return e = zr(e), (n = {}, n[e] = function() {
					return t.apply(this, arguments);
				}, n)[e];
			}
			function Kr(e, t, n) {
				if (e[t].overloadTable === void 0) {
					var r = e[t];
					e[t] = function() {
						return Object.prototype.hasOwnProperty.call(e[t].overloadTable, arguments.length) || ir("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"), e[t].overloadTable[arguments.length].apply(this, arguments);
					}, e[t].overloadTable = [], e[t].overloadTable[r.argCount] = r;
				}
			}
			function Qr(e, t, n) {
				Object.prototype.hasOwnProperty.call(g, e) ? ((n === void 0 || g[e].overloadTable !== void 0 && g[e].overloadTable[n] !== void 0) && ir("Cannot register public name '" + e + "' twice"), Kr(g, e, e), Object.prototype.hasOwnProperty.call(g, n) && ir("Cannot register multiple overloads of a function with the same number of arguments (" + n + ")!"), g[e].overloadTable[n] = t) : (g[e] = t, n !== void 0 && (g[e].numArguments = n));
			}
			function Xr(e, t, n, r, o, a, i, l) {
				this.name = e, this.constructor = t, this.instancePrototype = n, this.rawDestructor = r, this.baseClass = o, this.getActualType = a, this.upcast = i, this.downcast = l, this.pureVirtualFunctions = [];
			}
			function Yr(e, t, n) {
				for (; t !== n;) t.upcast || ir("Expected null or instance of " + n.name + ", got an instance of " + t.name), e = t.upcast(e), t = t.baseClass;
				return e;
			}
			function Jr(e, t) {
				if (t === null) return this.isReference && ir("null is not a valid " + this.name), 0;
				t.$$ || ir("Cannot pass \"" + Jn(t) + "\" as a " + this.name), t.$$.ptr || ir("Cannot pass deleted object as a pointer of type " + this.name);
				var n = t.$$.ptrType.registeredClass, r = Yr(t.$$.ptr, n, this.registeredClass);
				return r;
			}
			function Zr(e, t) {
				var n;
				if (t === null) return this.isReference && ir("null is not a valid " + this.name), this.isSmartPointer ? (n = this.rawConstructor(), e !== null && e.push(this.rawDestructor, n), n) : 0;
				t.$$ || ir("Cannot pass \"" + Jn(t) + "\" as a " + this.name), t.$$.ptr || ir("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && t.$$.ptrType.isConst && ir("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
				var r = t.$$.ptrType.registeredClass;
				if (n = Yr(t.$$.ptr, r, this.registeredClass), this.isSmartPointer) switch (t.$$.smartPtr === void 0 && ir("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
					case 0:
						t.$$.smartPtrType === this ? n = t.$$.smartPtr : ir("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
						break;
					case 1:
						n = t.$$.smartPtr;
						break;
					case 2:
						if (t.$$.smartPtrType === this) n = t.$$.smartPtr;
						else {
							var o = t.clone();
							n = this.rawShare(n, ko.toHandle(function() {
								o.delete();
							})), e !== null && e.push(this.rawDestructor, n);
						}
						break;
					default: ir("Unsupporting sharing policy");
				}
				return n;
			}
			function eo(e, t) {
				if (t === null) return this.isReference && ir("null is not a valid " + this.name), 0;
				t.$$ || ir("Cannot pass \"" + Jn(t) + "\" as a " + this.name), t.$$.ptr || ir("Cannot pass deleted object as a pointer of type " + this.name), t.$$.ptrType.isConst && ir("Cannot convert argument of type " + t.$$.ptrType.name + " to parameter type " + this.name);
				var n = t.$$.ptrType.registeredClass, r = Yr(t.$$.ptr, n, this.registeredClass);
				return r;
			}
			function to(e) {
				return this.fromWireType(m()[e >> 2]);
			}
			function no(e) {
				return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
			}
			function ro(e) {
				this.rawDestructor && this.rawDestructor(e);
			}
			function oo(e) {
				e !== null && e.delete();
			}
			function ao() {
				io.prototype.getPointee = no, io.prototype.destructor = ro, io.prototype.argPackAdvance = 8, io.prototype.readValueFromPointer = to, io.prototype.deleteObject = oo, io.prototype.fromWireType = Ar;
			}
			function io(e, t, n, r, o, a, i, l, s, u, c) {
				this.name = e, this.registeredClass = t, this.isReference = n, this.isConst = r, this.isSmartPointer = o, this.pointeeType = a, this.sharingPolicy = i, this.rawGetPointee = l, this.rawConstructor = s, this.rawShare = u, this.rawDestructor = c, !o && t.baseClass === void 0 ? r ? (this.toWireType = Jr, this.destructorFunction = null) : (this.toWireType = eo, this.destructorFunction = null) : this.toWireType = Zr;
			}
			function lo(e, t, n) {
				Object.prototype.hasOwnProperty.call(g, e) || sr("Replacing nonexistant public symbol"), g[e].overloadTable !== void 0 && n !== void 0 ? g[e].overloadTable[n] = t : (g[e] = t, g[e].argCount = n);
			}
			function so(e, t) {
				e = tr(e);
				function n() {
					return un(t);
				}
				var r = n();
				return typeof r != "function" && ir("unknown function pointer with signature " + e + ": " + t), r;
			}
			function uo(e, t) {
				var n = jr(t, function(e) {
					this.name = t, this.message = e;
					var n = new Error(e).stack;
					n !== void 0 && (this.stack = this.toString() + `
` + n.replace(/^Error(:[^\n]*)?\n/, ""));
				});
				return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
					return this.message === void 0 ? this.name : this.name + ": " + this.message;
				}, n;
			}
			var co = void 0;
			function mo(e) {
				var t = zi(e), n = tr(t);
				return Pi(t), n;
			}
			function po(e, t) {
				var n = [], r = {};
				function o(e) {
					if (!r[e] && !rr[e]) {
						if (or[e]) {
							or[e].forEach(o);
							return;
						}
						n.push(e), r[e] = !0;
					}
				}
				throw t.forEach(o), new co(e + ": " + n.map(mo).join([", "]));
			}
			function _o(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				c = tr(c), a = so(o, a), l && (l = so(i, l)), u && (u = so(s, u)), m = so(d, m);
				var p = zr(c);
				Qr(p, function() {
					po("Cannot construct " + c + " due to unbound types", [r]);
				}), ur([
					e,
					t,
					n
				], r ? [r] : [], function(t) {
					t = t[0];
					var n, o;
					r ? (n = t.registeredClass, o = n.instancePrototype) : o = Vr.prototype;
					var i = jr(p, function() {
						if (Object.getPrototypeOf(this) !== s) throw new ar("Use 'new' to construct " + c);
						if (d.constructor_body === void 0) throw new ar(c + " has no accessible constructor");
						var e = d.constructor_body[arguments.length];
						if (e === void 0) throw new ar("Tried to invoke ctor of " + c + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(d.constructor_body).toString() + ") parameters instead!");
						return e.apply(this, arguments);
					}), s = Object.create(o, { constructor: { value: i } });
					i.prototype = s;
					var d = new Xr(c, i, s, m, n, a, l, u);
					d.baseClass && (d.baseClass.__derivedClasses === void 0 && (d.baseClass.__derivedClasses = []), d.baseClass.__derivedClasses.push(d));
					var _ = new io(c, d, !0, !1, !1), f = new io(c + "*", d, !1, !1, !1), g = new io(c + " const*", d, !1, !0, !1);
					return Lr[e] = {
						pointerType: f,
						constPointerType: g
					}, lo(p, i), [
						_,
						f,
						g
					];
				});
			}
			function fo(e, t) {
				for (var n = [], r = 0; r < e; r++) n.push(p()[t + r * 4 >> 2]);
				return n;
			}
			function go(e) {
				for (; e.length;) {
					var t = e.pop(), n = e.pop();
					n(t);
				}
			}
			function ho(e, t, n, r, o, a) {
				var i = t.length;
				i < 2 && ir("argTypes array size mismatch! Must at least get return value and 'this' types!"), V(!a, "Async bindings are only supported with JSPI.");
				for (var l = t[1] !== null && n !== null, s = !1, u = 1; u < t.length; ++u) if (t[u] !== null && t[u].destructorFunction === void 0) {
					s = !0;
					break;
				}
				var c = t[0].name !== "void", d = i - 2, m = new Array(d), p = [], _ = [];
				return function() {
					arguments.length !== d && ir("function " + e + " called with " + arguments.length + " arguments, expected " + d + " args!"), _.length = 0;
					var n;
					p.length = l ? 2 : 1, p[0] = o, l && (n = t[1].toWireType(_, this), p[1] = n);
					for (var a = 0; a < d; ++a) m[a] = t[a + 2].toWireType(_, arguments[a]), p.push(m[a]);
					var i = r.apply(null, p);
					function u(e) {
						if (s) go(_);
						else for (var r = l ? 1 : 2; r < t.length; r++) {
							var o = r === 1 ? n : m[r - 2];
							t[r].destructorFunction !== null && t[r].destructorFunction(o);
						}
						if (c) return t[0].fromWireType(e);
					}
					return u(i);
				};
			}
			function yo(e, t, n, r, o, a) {
				V(t > 0);
				var i = fo(t, n);
				o = so(r, o), ur([], [e], function(e) {
					e = e[0];
					var n = "constructor " + e.name;
					if (e.registeredClass.constructor_body === void 0 && (e.registeredClass.constructor_body = []), e.registeredClass.constructor_body[t - 1] !== void 0) throw new ar("Cannot register multiple constructors with identical number of parameters (" + (t - 1) + ") for class '" + e.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
					return e.registeredClass.constructor_body[t - 1] = function() {
						po("Cannot construct " + e.name + " due to unbound types", i);
					}, ur([], i, function(r) {
						return r.splice(1, 0, null), e.registeredClass.constructor_body[t - 1] = ho(n, r, null, o, a), [];
					}), [];
				});
			}
			function Co(e, t, n, r, o, a, i, l, s) {
				var u = fo(n, r);
				t = tr(t), a = so(o, a), ur([], [e], function(e) {
					e = e[0];
					var r = e.name + "." + t;
					t.startsWith("@@") && (t = Symbol[t.substring(2)]), l && e.registeredClass.pureVirtualFunctions.push(t);
					function o() {
						po("Cannot call " + r + " due to unbound types", u);
					}
					var c = e.registeredClass.instancePrototype, d = c[t];
					return d === void 0 || d.overloadTable === void 0 && d.className !== e.name && d.argCount === n - 2 ? (o.argCount = n - 2, o.className = e.name, c[t] = o) : (Kr(c, t, r), c[t].overloadTable[n - 2] = o), ur([], u, function(o) {
						var l = ho(r, o, e, a, i, s);
						return c[t].overloadTable === void 0 ? (l.argCount = n - 2, c[t] = l) : c[t].overloadTable[n - 2] = l, [];
					}), [];
				});
			}
			function bo() {
				Object.assign(vo.prototype, {
					get: function(t) {
						return V(this.allocated[t] !== void 0, "invalid handle: " + t), this.allocated[t];
					},
					has: function(t) {
						return this.allocated[t] !== void 0;
					},
					allocate: function(t) {
						var e = this.freelist.pop() || this.allocated.length;
						return this.allocated[e] = t, e;
					},
					free: function(t) {
						V(this.allocated[t] !== void 0), this.allocated[t] = void 0, this.freelist.push(t);
					}
				});
			}
			function vo() {
				this.allocated = [void 0], this.freelist = [];
			}
			var So = new vo();
			function Ro(e) {
				e >= So.reserved && --So.get(e).refcount === 0 && So.free(e);
			}
			function Lo() {
				for (var e = 0, t = So.reserved; t < So.allocated.length; ++t) So.allocated[t] !== void 0 && ++e;
				return e;
			}
			function Eo() {
				So.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }), So.reserved = So.allocated.length, g.count_emval_handles = Lo;
			}
			var ko = {
				toValue: function(t) {
					return t || ir("Cannot use deleted val. handle = " + t), So.get(t).value;
				},
				toHandle: function(t) {
					switch (t) {
						case void 0: return 1;
						case null: return 2;
						case !0: return 3;
						case !1: return 4;
						default: return So.allocate({
							refcount: 1,
							value: t
						});
					}
				}
			};
			function Io(e, t) {
				t = tr(t), dr(e, {
					name: t,
					fromWireType: function(t) {
						var e = ko.toValue(t);
						return Ro(t), e;
					},
					toWireType: function(t, n) {
						return ko.toHandle(n);
					},
					argPackAdvance: 8,
					readValueFromPointer: to,
					destructorFunction: null
				});
			}
			function To(e, t) {
				switch (t) {
					case 2: return function(e) {
						return this.fromWireType(_()[e >> 2]);
					};
					case 3: return function(e) {
						return this.fromWireType(f()[e >> 3]);
					};
					default: throw new TypeError("Unknown float type: " + e);
				}
			}
			function Do(e, t, n) {
				var r = _r(n);
				t = tr(t), dr(e, {
					name: t,
					fromWireType: function(t) {
						return t;
					},
					toWireType: function(t, n) {
						if (typeof n != "number" && typeof n != "boolean") throw new TypeError("Cannot convert " + Jn(n) + " to " + this.name);
						return n;
					},
					argPackAdvance: 8,
					readValueFromPointer: To(t, r),
					destructorFunction: null,
					jsType: "number"
				});
			}
			function xo(e, t, n, r, o, a, i) {
				var l = fo(t, n);
				e = tr(e), o = so(r, o), Qr(e, function() {
					po("Cannot call " + e + " due to unbound types", l);
				}, t - 1), ur([], l, function(n) {
					var r = [n[0], null].concat(n.slice(1));
					return lo(e, ho(e, r, null, o, a, i), t - 1), g.__WA_INVOKER_FUNCS == null && (g.__WA_INVOKER_FUNCS = new Map()), g.__WA_INVOKER_FUNCS.set(e, {
						argTypes: n.slice(1),
						returnType: n[0]
					}), [];
				});
			}
			function $o(e, t, n, r, o) {
				t = tr(t), o === -1 && (o = 4294967295);
				var a = _r(n), i = function(t) {
					return t;
				};
				if (r === 0) {
					var l = 32 - 8 * n;
					i = function(t) {
						return t << l >>> l;
					};
				}
				var s = t.includes("unsigned"), u = function(n, a) {
					if (typeof n != "number" && typeof n != "boolean") throw new TypeError("Cannot convert \"" + Jn(n) + "\" to " + a);
					if (n < r || n > o) throw new TypeError("Passing a number \"" + Jn(n) + "\" from JS side to C/C++ side to an argument of type \"" + t + "\", which is outside the valid range [" + r + ", " + o + "]!");
				}, c;
				s ? c = function(t, n) {
					return u(n, this.name), n >>> 0;
				} : c = function(t, n) {
					return u(n, this.name), n;
				}, dr(e, {
					name: t,
					fromWireType: i,
					toWireType: c,
					argPackAdvance: 8,
					readValueFromPointer: mr(t, a, r !== 0),
					destructorFunction: null,
					jsType: "number"
				});
			}
			function Po(e, t, n) {
				var r = [
					Int8Array,
					Uint8Array,
					Int16Array,
					Uint16Array,
					Int32Array,
					Uint32Array,
					Float32Array,
					Float64Array,
					BigInt64Array,
					BigUint64Array
				], o = r[t];
				function a(e) {
					e = e >> 2;
					var t = p(), n = t[e], r = t[e + 1];
					return new o(t.buffer, r, n);
				}
				n = tr(n), dr(e, {
					name: n,
					fromWireType: a,
					argPackAdvance: 8,
					readValueFromPointer: a
				}, { ignoreDuplicateRegistrations: !0 });
			}
			function No(e, t) {
				t = tr(t);
				var n = t === "std::string";
				dr(e, {
					name: t,
					fromWireType: function(t) {
						var e = p()[t >> 2], r = t + 4, o;
						if (n) for (var a = r, i = 0; i <= e; ++i) {
							var s = r + i;
							if (i == e || l()[s] == 0) {
								var u = s - a, c = Kt(a, u);
								o === void 0 ? o = c : (o += "\0", o += c), a = s + 1;
							}
						}
						else {
							for (var d = new Array(e), i = 0; i < e; ++i) d[i] = String.fromCharCode(l()[r + i]);
							o = d.join("");
						}
						return Pi(t), o;
					},
					toWireType: function(t, r) {
						r instanceof ArrayBuffer && (r = new Uint8Array(r));
						var e, o = typeof r == "string";
						o || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || ir("Cannot pass non-string to std::string"), n && o ? e = Tt(r) : e = r.length;
						var a = $i(4 + e + 1), i = a + 4;
						if (p()[a >> 2] = e, n && o) Vn(r, i, e + 1);
						else if (o) for (var s = 0; s < e; ++s) {
							var u = r.charCodeAt(s);
							u > 255 && (Pi(i), ir("String has UTF-16 code units that do not fit in 8 bits")), l()[i + s] = u;
						}
						else for (var s = 0; s < e; ++s) l()[i + s] = r[s];
						return t !== null && t.push(Pi, a), a;
					},
					argPackAdvance: 8,
					readValueFromPointer: to,
					destructorFunction: function(t) {
						Pi(t);
					},
					jsType: "string"
				});
			}
			var Mo = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0, wo = function(t, n) {
				V(t % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
				for (var e = t, r = e >> 1, o = r + n / 2; !(r >= o) && d()[r];) ++r;
				if (e = r << 1, e - t > 32 && Mo) return Mo.decode(l().slice(t, e));
				for (var a = "", i = 0; !(i >= n / 2); ++i) {
					var s = c()[t + i * 2 >> 1];
					if (s == 0) break;
					a += String.fromCharCode(s);
				}
				return a;
			}, Ao = function(t, n, r) {
				if (V(n % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!"), V(typeof r == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), r === void 0 && (r = 2147483647), r < 2) return 0;
				r -= 2;
				for (var e = n, o = r < t.length * 2 ? r / 2 : t.length, a = 0; a < o; ++a) {
					var i = t.charCodeAt(a);
					c()[n >> 1] = i, n += 2;
				}
				return c()[n >> 1] = 0, n - e;
			}, Fo = function(t) {
				return t.length * 2;
			}, Oo = function(t, n) {
				V(t % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
				for (var e = 0, r = ""; !(e >= n / 4);) {
					var o = m()[t + e * 4 >> 2];
					if (o == 0) break;
					if (++e, o >= 65536) {
						var a = o - 65536;
						r += String.fromCharCode(55296 | a >> 10, 56320 | a & 1023);
					} else r += String.fromCharCode(o);
				}
				return r;
			}, Bo = function(t, n, r) {
				if (V(n % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!"), V(typeof r == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), r === void 0 && (r = 2147483647), r < 4) return 0;
				for (var e = n, o = e + r - 4, a = 0; a < t.length; ++a) {
					var i = t.charCodeAt(a);
					if (i >= 55296 && i <= 57343) {
						var l = t.charCodeAt(++a);
						i = 65536 + ((i & 1023) << 10) | l & 1023;
					}
					if (m()[n >> 2] = i, n += 4, n + 4 > o) break;
				}
				return m()[n >> 2] = 0, n - e;
			}, Wo = function(t) {
				for (var e = 0, n = 0; n < t.length; ++n) {
					var r = t.charCodeAt(n);
					r >= 55296 && r <= 57343 && ++n, e += 4;
				}
				return e;
			}, qo = function(t, n, r) {
				r = tr(r);
				var e, o, a, i, l;
				n === 2 ? (e = wo, o = Ao, i = Fo, a = function() {
					return d();
				}, l = 1) : n === 4 && (e = Oo, o = Bo, i = Wo, a = function() {
					return p();
				}, l = 2), dr(t, {
					name: r,
					fromWireType: function(r) {
						for (var t = p()[r >> 2], o = a(), i, s = r + 4, u = 0; u <= t; ++u) {
							var c = r + 4 + u * n;
							if (u == t || o[c >> l] == 0) {
								var d = c - s, m = e(s, d);
								i === void 0 ? i = m : (i += "\0", i += m), s = c + n;
							}
						}
						return Pi(r), i;
					},
					toWireType: function(t, a) {
						typeof a != "string" && ir("Cannot pass non-string to C++ string type " + r);
						var e = i(a), s = $i(4 + e + n);
						return p()[s >> 2] = e >> l, o(a, s + 4, e + n), t !== null && t.push(Pi, s), s;
					},
					argPackAdvance: 8,
					readValueFromPointer: to,
					destructorFunction: function(t) {
						Pi(t);
					}
				});
			};
			function Uo(e, t) {
				t = tr(t), dr(e, {
					isVoid: !0,
					name: t,
					argPackAdvance: 0,
					fromWireType: function() {},
					toWireType: function(t, n) {},
					jsType: "void"
				});
			}
			var Vo = !0, Ho = function() {
				return Vo;
			}, Go = function() {
				if (!ce()) try {
					I ? rl(U) : Jt(U);
				} catch (e) {
					en(e);
				}
			}, zo = function(t) {
				if (q) {
					w("user callback triggered after runtime exited or application aborted.  Ignoring.");
					return;
				}
				try {
					t(), Go();
				} catch (e) {
					en(e);
				}
			};
			function jo(e) {
				if (typeof Atomics.waitAsync == "function") {
					var t = Atomics.waitAsync(m(), e >> 2, e);
					V(t.async), t.value.then(Ko);
					var n = e + 128;
					Atomics.store(m(), n >> 2, 1);
				}
			}
			g.__emscripten_thread_mailbox_await = jo;
			var Ko = function() {
				var e = Ai();
				e && (jo(e), zo(function() {
					return ol();
				}));
			};
			g.checkMailbox = Ko;
			var Qo = function(t, n, r) {
				if (t == n) setTimeout(function() {
					return Ko();
				});
				else if (I) postMessage({
					targetThread: t,
					cmd: "checkMailbox",
					type: "cmd"
				});
				else {
					var e = tn.pthreads[t];
					if (!e) {
						w("Cannot send message to thread with ID " + t + ", unknown thread ID!");
						return;
					}
					e.postMessage({
						cmd: "checkMailbox",
						type: "cmd"
					});
				}
			};
			function Xo(e, t, n) {
				return w("emscripten_set_offscreencanvas_size: Build with -sOFFSCREENCANVAS_SUPPORT=1 to enable transferring canvases to pthreads."), -1;
			}
			function Yo(e) {}
			var Jo = function() {
				throw new xe();
			};
			function Zo(e) {
				e > 4 && (So.get(e).refcount += 1);
			}
			function ea(e, t) {
				var n = rr[e];
				return n === void 0 && ir(t + " has unknown type " + mo(e)), n;
			}
			function ta(e, t) {
				e = ea(e, "_emval_take_value");
				var n = e.readValueFromPointer(t);
				return ko.toHandle(n);
			}
			function na(e, t) {
				e = qn(e), t = qn(t);
				var n = new Date(e * 1e3);
				m()[t >> 2] = n.getUTCSeconds(), m()[t + 4 >> 2] = n.getUTCMinutes(), m()[t + 8 >> 2] = n.getUTCHours(), m()[t + 12 >> 2] = n.getUTCDate(), m()[t + 16 >> 2] = n.getUTCMonth(), m()[t + 20 >> 2] = n.getUTCFullYear() - 1900, m()[t + 24 >> 2] = n.getUTCDay();
				var r = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0), o = (n.getTime() - r) / (1e3 * 60 * 60 * 24) | 0;
				m()[t + 28 >> 2] = o;
			}
			var ra = function(t) {
				return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
			}, oa = [
				0,
				31,
				60,
				91,
				121,
				152,
				182,
				213,
				244,
				274,
				305,
				335
			], aa = [
				0,
				31,
				59,
				90,
				120,
				151,
				181,
				212,
				243,
				273,
				304,
				334
			], ia = function(t) {
				var e = ra(t.getFullYear()), n = e ? oa : aa, r = n[t.getMonth()] + t.getDate() - 1;
				return r;
			};
			function la(e, t) {
				e = qn(e), t = qn(t);
				var n = new Date(e * 1e3);
				m()[t >> 2] = n.getSeconds(), m()[t + 4 >> 2] = n.getMinutes(), m()[t + 8 >> 2] = n.getHours(), m()[t + 12 >> 2] = n.getDate(), m()[t + 16 >> 2] = n.getMonth(), m()[t + 20 >> 2] = n.getFullYear() - 1900, m()[t + 24 >> 2] = n.getDay();
				var r = ia(n) | 0;
				m()[t + 28 >> 2] = r, m()[t + 36 >> 2] = -(n.getTimezoneOffset() * 60);
				var o = new Date(n.getFullYear(), 0, 1), a = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(), i = o.getTimezoneOffset(), l = (a != i && n.getTimezoneOffset() == Math.min(i, a)) | 0;
				m()[t + 32 >> 2] = l;
			}
			var sa = function(t) {
				t = qn(t);
				var e = (function() {
					var e = new Date(m()[t + 20 >> 2] + 1900, m()[t + 16 >> 2], m()[t + 12 >> 2], m()[t + 8 >> 2], m()[t + 4 >> 2], m()[t >> 2], 0), n = m()[t + 32 >> 2], r = e.getTimezoneOffset(), o = new Date(e.getFullYear(), 0, 1), a = new Date(e.getFullYear(), 6, 1).getTimezoneOffset(), i = o.getTimezoneOffset(), l = Math.min(i, a);
					if (n < 0) m()[t + 32 >> 2] = +(a != i && l == r);
					else if (n > 0 != (l == r)) {
						var s = Math.max(i, a), u = n > 0 ? l : s;
						e.setTime(e.getTime() + (u - r) * 6e4);
					}
					m()[t + 24 >> 2] = e.getDay();
					var c = ia(e) | 0;
					return m()[t + 28 >> 2] = c, m()[t >> 2] = e.getSeconds(), m()[t + 4 >> 2] = e.getMinutes(), m()[t + 8 >> 2] = e.getHours(), m()[t + 12 >> 2] = e.getDate(), m()[t + 16 >> 2] = e.getMonth(), m()[t + 20 >> 2] = e.getYear(), e.getTime() / 1e3;
				})();
				return BigInt(e);
			};
			function ua(e, t, n, r, o, a, i) {
				if (I) return ha(16, 1, e, t, n, r, o, a, i);
				e = qn(e), o = qn(o), a = qn(a), i = qn(i);
				try {
					if (isNaN(o)) return 61;
					var l = Qt.getStreamFromFD(r), s = jt.mmap(l, e, o, t, n), u = s.ptr;
					return m()[a >> 2] = s.allocated, p()[i >> 2] = u, 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function ca(e, t, n, r, o, a) {
				if (I) return ha(17, 1, e, t, n, r, o, a);
				e = qn(e), t = qn(t), a = qn(a);
				try {
					return isNaN(a) ? 61 : (Qt.doMsync(e, Qt.getStreamFromFD(o), t, r, a), 0);
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function da(e, t, n, r, o, a) {
				if (I) return ha(18, 1, e, t, n, r, o, a);
				e = qn(e), t = qn(t), a = qn(a);
				try {
					if (isNaN(a)) return 61;
					var i = Qt.getStreamFromFD(o);
					n & 2 && Qt.doMsync(e, i, t, r, a), jt.munmap(i);
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			var ma = function(t) {
				var e = Tt(t) + 1, n = $i(e);
				return n && Vn(t, n, e), n;
			}, pa = function(t, n, r) {
				var e = new Date().getFullYear(), o = new Date(e, 0, 1), a = new Date(e, 6, 1), i = o.getTimezoneOffset(), l = a.getTimezoneOffset(), s = Math.max(i, l);
				p()[t >> 2] = s * 60, m()[n >> 2] = +(i != l);
				function u(e) {
					var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
					return t ? t[1] : "GMT";
				}
				var c = u(o), d = u(a), _ = ma(c), f = ma(d);
				l < i ? (p()[r >> 2] = _, p()[r + 4 >> 2] = f) : (p()[r >> 2] = f, p()[r + 4 >> 2] = _);
			}, _a = function() {
				Le("native code called abort()");
			}, fa = [], ga = function(t, n) {
				V(Array.isArray(fa)), V(n % 16 == 0), fa.length = 0;
				var e;
				for (n >>= 2; e = l()[t++];) {
					var r = String.fromCharCode(e), o = [
						"d",
						"f",
						"i"
					];
					o.push("j"), V(o.includes(r), "Invalid character " + e + "(\"" + r + "\") in readEmAsmArgs! Use only [" + o + "], and do not specify \"v\" for void return argument."), n += e != 105 & n, fa.push(e == 105 ? m()[n] : (e == 106 ? Y : f())[n++ >> 1]), ++n;
				}
				return fa;
			};
			function ha(e, t) {
				var n = arguments.length - 2, r = arguments, o = 19;
				if (n > o) throw "proxyToMainThread: Too many arguments " + n + " to proxied function idx=" + e + ", maximum supported is " + o;
				return an(function() {
					for (var o = n * 2, a = ml(o * 8), i = a >> 3, l = 0; l < n; l++) {
						var s = r[2 + l];
						typeof s == "bigint" ? (Y[i + 2 * l] = BigInt(1), Y[i + 2 * l + 1] = s) : (Y[i + 2 * l] = BigInt(0), f()[i + 2 * l + 1] = s);
					}
					return Ji(e, o, a, t);
				});
			}
			var ya = function(t, n, r, o) {
				var e = ga(n, r);
				return I ? ha.apply(null, [-1 - t, o].concat(e)) : (Object.prototype.hasOwnProperty.call(Ge, t) || Le("No EM_ASM constant found at address " + t), Ge[t].apply(null, e));
			}, Ca = function(t, n, r) {
				return ya(t, n, r, 0);
			}, ba = function(t, n, r) {
				var e = ga(n, r);
				return Object.prototype.hasOwnProperty.call(Ge, t) || Le("No EM_ASM constant found at address " + t), Ge[t].apply(null, e);
			}, va = function(t, n, r) {
				return ba(t, n, r);
			}, Sa = function(t, n, r) {
				return ba(t, n, r);
			}, Ra = function() {
				ue += 1;
			}, La = function() {
				V(ue > 0), ue -= 1;
			}, Ea = function(t, n) {
				return Ra(), setTimeout(function() {
					La(), zo(t);
				}, n);
			};
			function ka(e, t) {
				if (Da.mainLoop.timingMode = e, Da.mainLoop.timingValue = t, !Da.mainLoop.func) return w("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up."), 1;
				if (Da.mainLoop.running || (Ra(), Da.mainLoop.running = !0), e == 0) Da.mainLoop.scheduler = function() {
					var e = Math.max(0, Da.mainLoop.tickStartTime + t - Ia()) | 0;
					setTimeout(Da.mainLoop.runner, e);
				}, Da.mainLoop.method = "timeout";
				else if (e == 1) Da.mainLoop.scheduler = function() {
					Da.requestAnimationFrame(Da.mainLoop.runner);
				}, Da.mainLoop.method = "rAF";
				else if (e == 2) {
					if (typeof setImmediate == "undefined") {
						var n = [], r = "setimmediate", o = function(t) {
							(t.data === r || t.data.target === r) && (t.stopPropagation(), n.shift()());
						};
						addEventListener("message", o, !0), setImmediate = function(t) {
							n.push(t), L ? (g.setImmediates === void 0 && (g.setImmediates = []), g.setImmediates.push(t), postMessage({
								target: r,
								type: "cmd"
							})) : postMessage(babelHelpers.extends({}, r, { type: "cmd" }), "*");
						};
					}
					Da.mainLoop.scheduler = function() {
						setImmediate(Da.mainLoop.runner);
					}, Da.mainLoop.method = "immediate";
				}
				return 0;
			}
			var Ia;
			Ia = function() {
				return performance.timeOrigin + performance.now();
			};
			function Ta(e, t, n, r, o) {
				V(!Da.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), Da.mainLoop.func = e, Da.mainLoop.arg = r;
				var a = Da.mainLoop.currentlyRunningMainloop;
				function i() {
					return a < Da.mainLoop.currentlyRunningMainloop ? (La(), !1) : !0;
				}
				if (Da.mainLoop.running = !1, Da.mainLoop.runner = function() {
					if (!q) {
						if (Da.mainLoop.queue.length > 0) {
							var t = Date.now(), n = Da.mainLoop.queue.shift();
							if (n.func(n.arg), Da.mainLoop.remainingBlockers) {
								var r = Da.mainLoop.remainingBlockers, o = r % 1 == 0 ? r - 1 : Math.floor(r);
								n.counted ? Da.mainLoop.remainingBlockers = o : (o = o + .5, Da.mainLoop.remainingBlockers = (8 * r + o) / 9);
							}
							if (M("main loop blocker \"" + n.name + "\" took " + (Date.now() - t) + " ms"), Da.mainLoop.updateStatus(), !i()) return;
							setTimeout(Da.mainLoop.runner, 0);
							return;
						}
						if (i()) {
							if (Da.mainLoop.currentFrameNumber = Da.mainLoop.currentFrameNumber + 1 | 0, Da.mainLoop.timingMode == 1 && Da.mainLoop.timingValue > 1 && Da.mainLoop.currentFrameNumber % Da.mainLoop.timingValue != 0) {
								Da.mainLoop.scheduler();
								return;
							} else Da.mainLoop.timingMode == 0 && (Da.mainLoop.tickStartTime = Ia());
							Da.mainLoop.method === "timeout" && g.ctx && (mn("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), Da.mainLoop.method = ""), Da.mainLoop.runIter(e), oe(), i() && (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), Da.mainLoop.scheduler());
						}
					}
				}, o || (t && t > 0 ? ka(0, 1e3 / t) : ka(1, 1), Da.mainLoop.scheduler()), n) throw "unwind";
			}
			var Da = {
				mainLoop: {
					running: !1,
					scheduler: null,
					method: "",
					currentlyRunningMainloop: 0,
					func: null,
					arg: 0,
					timingMode: 0,
					timingValue: 0,
					currentFrameNumber: 0,
					queue: [],
					pause: function() {
						Da.mainLoop.scheduler = null, Da.mainLoop.currentlyRunningMainloop++;
					},
					resume: function() {
						Da.mainLoop.currentlyRunningMainloop++;
						var e = Da.mainLoop.timingMode, t = Da.mainLoop.timingValue, n = Da.mainLoop.func;
						Da.mainLoop.func = null, Ta(n, 0, !1, Da.mainLoop.arg, !0), ka(e, t), Da.mainLoop.scheduler();
					},
					updateStatus: function() {
						if (g.setStatus) {
							var e = g.statusMessage || "Please wait...", t = Da.mainLoop.remainingBlockers, n = Da.mainLoop.expectedBlockers;
							t ? t < n ? g.setStatus(e + " (" + (n - t) + "/" + n + ")") : g.setStatus(e) : g.setStatus("");
						}
					},
					runIter: function(t) {
						if (!q) {
							if (g.preMainLoop) {
								var e = g.preMainLoop();
								if (e === !1) return;
							}
							zo(t), g.postMainLoop && g.postMainLoop();
						}
					}
				},
				isFullscreen: !1,
				pointerLock: !1,
				moduleContextCreatedCallbacks: [],
				workers: [],
				init: function() {
					if (Da.initted) return;
					Da.initted = !0;
					var e = {};
					e.canHandle = function(t) {
						return !g.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(t);
					}, e.handle = function(t, n, r, o) {
						var e = new Blob([t], { type: Da.getMimetype(n) });
						e.size !== t.length && (e = new Blob([new Uint8Array(t).buffer], { type: Da.getMimetype(n) }));
						var a = URL.createObjectURL(e);
						V(typeof a == "string", "createObjectURL must return a url as a string");
						var i = new Image();
						i.onload = function() {
							V(i.complete, "Image " + n + " could not be decoded");
							var e = document.createElement("canvas");
							e.width = i.width, e.height = i.height;
							var o = e.getContext("2d");
							o.drawImage(i, 0, 0), Ri[n] = e, URL.revokeObjectURL(a), r && r(t);
						}, i.onerror = function(e) {
							M("Image " + a + " could not be decoded"), o && o();
						}, i.src = a;
					}, Ft.push(e);
					var t = {};
					t.canHandle = function(t) {
						return !g.noAudioDecoding && t.substr(-4) in {
							".ogg": 1,
							".wav": 1,
							".mp3": 1
						};
					}, t.handle = function(t, n, r, o) {
						var e = !1;
						function a(o) {
							e || (e = !0, Li[n] = o, r && r(t));
						}
						var i = new Blob([t], { type: Da.getMimetype(n) }), l = URL.createObjectURL(i);
						V(typeof l == "string", "createObjectURL must return a url as a string");
						var s = new Audio();
						s.addEventListener("canplaythrough", function() {
							return a(s);
						}, !1), s.onerror = function(o) {
							if (e) return;
							w("warning: browser could not fully decode audio " + n + ", trying slower base64 approach");
							function r(e) {
								for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "=", r = "", o = 0, a = 0, i = 0; i < e.length; i++) for (o = o << 8 | e[i], a += 8; a >= 6;) {
									var l = o >> a - 6 & 63;
									a -= 6, r += t[l];
								}
								return a == 2 ? (r += t[(o & 3) << 4], r += n + n) : a == 4 && (r += t[(o & 15) << 2], r += n), r;
							}
							s.src = "data:audio/x-" + n.substr(-3) + ";base64," + r(t), a(s);
						}, s.src = l, Ea(function() {
							a(s);
						}, 1e4);
					}, Ft.push(t);
					function n() {
						Da.pointerLock = document.pointerLockElement === g.canvas || document.mozPointerLockElement === g.canvas || document.webkitPointerLockElement === g.canvas || document.msPointerLockElement === g.canvas;
					}
					var r = g.canvas;
					r && (r.requestPointerLock = r.requestPointerLock || r.mozRequestPointerLock || r.webkitRequestPointerLock || r.msRequestPointerLock || function() {}, r.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, r.exitPointerLock = r.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", n, !1), document.addEventListener("mozpointerlockchange", n, !1), document.addEventListener("webkitpointerlockchange", n, !1), document.addEventListener("mspointerlockchange", n, !1), g.elementPointerLock && r.addEventListener("click", function(e) {
						!Da.pointerLock && g.canvas.requestPointerLock && (g.canvas.requestPointerLock(), e.preventDefault());
					}, !1));
				},
				createContext: function(t, n, r, o) {
					if (n && g.ctx && t == g.canvas) return g.ctx;
					var e, a;
					if (n) {
						var i = {
							antialias: !1,
							alpha: !1,
							majorVersion: 1
						};
						if (o) for (var l in o) i[l] = o[l];
						typeof GL != "undefined" && (a = GL.createContext(t, i), a && (e = GL.getContext(a).GLctx));
					} else e = t.getContext("2d");
					return e ? (r && (n || V(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), g.ctx = e, n && GL.makeContextCurrent(a), g.useWebGL = n, Da.moduleContextCreatedCallbacks.forEach(function(e) {
						return e();
					}), Da.init()), e) : null;
				},
				destroyContext: function(t, n, r) {},
				fullscreenHandlersInstalled: !1,
				lockPointer: void 0,
				resizeCanvas: void 0,
				requestFullscreen: function(t, n) {
					Da.lockPointer = t, Da.resizeCanvas = n, typeof Da.lockPointer == "undefined" && (Da.lockPointer = !0), typeof Da.resizeCanvas == "undefined" && (Da.resizeCanvas = !1);
					var e = g.canvas;
					function r() {
						Da.isFullscreen = !1;
						var t = e.parentNode;
						(document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === t ? (e.exitFullscreen = Da.exitFullscreen, Da.lockPointer && e.requestPointerLock(), Da.isFullscreen = !0, Da.resizeCanvas ? Da.setFullscreenCanvasSize() : Da.updateCanvasDimensions(e)) : (t.parentNode.insertBefore(e, t), t.parentNode.removeChild(t), Da.resizeCanvas ? Da.setWindowedCanvasSize() : Da.updateCanvasDimensions(e)), g.onFullScreen && g.onFullScreen(Da.isFullscreen), g.onFullscreen && g.onFullscreen(Da.isFullscreen);
					}
					Da.fullscreenHandlersInstalled || (Da.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", r, !1), document.addEventListener("mozfullscreenchange", r, !1), document.addEventListener("webkitfullscreenchange", r, !1), document.addEventListener("MSFullscreenChange", r, !1));
					var o = document.createElement("div");
					e.parentNode.insertBefore(o, e), o.appendChild(e), o.requestFullscreen = o.requestFullscreen || o.mozRequestFullScreen || o.msRequestFullscreen || (o.webkitRequestFullscreen ? function() {
						return o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
					} : null) || (o.webkitRequestFullScreen ? function() {
						return o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
					} : null), o.requestFullscreen();
				},
				requestFullScreen: function() {
					Le("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)");
				},
				exitFullscreen: function() {
					if (!Da.isFullscreen) return !1;
					var e = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {};
					return e.apply(document, []), !0;
				},
				nextRAF: 0,
				fakeRequestAnimationFrame: function(t) {
					var e = Date.now();
					if (Da.nextRAF === 0) Da.nextRAF = e + 1e3 / 60;
					else for (; e + 2 >= Da.nextRAF;) Da.nextRAF += 1e3 / 60;
					var n = Math.max(Da.nextRAF - e, 0);
					setTimeout(t, n);
				},
				requestAnimationFrame: (function(e) {
					function t(t) {
						return e.apply(this, arguments);
					}
					return t.toString = function() {
						return e.toString();
					}, t;
				})(function(e) {
					if (typeof requestAnimationFrame == "function") {
						requestAnimationFrame(e);
						return;
					}
					var t = Da.fakeRequestAnimationFrame;
					t(e);
				}),
				safeSetTimeout: function(t, n) {
					return Ea(t, n);
				},
				safeRequestAnimationFrame: function(t) {
					return Ra(), Da.requestAnimationFrame(function() {
						La(), zo(t);
					});
				},
				getMimetype: function(t) {
					return {
						jpg: "image/jpeg",
						jpeg: "image/jpeg",
						png: "image/png",
						bmp: "image/bmp",
						ogg: "audio/ogg",
						wav: "audio/wav",
						mp3: "audio/mpeg"
					}[t.substr(t.lastIndexOf(".") + 1)];
				},
				getUserMedia: function(t) {
					window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(t);
				},
				getMovementX: function(t) {
					return t.movementX || t.mozMovementX || t.webkitMovementX || 0;
				},
				getMovementY: function(t) {
					return t.movementY || t.mozMovementY || t.webkitMovementY || 0;
				},
				getMouseWheelDelta: function(t) {
					var e = 0;
					switch (t.type) {
						case "DOMMouseScroll":
							e = t.detail / 3;
							break;
						case "mousewheel":
							e = t.wheelDelta / 120;
							break;
						case "wheel":
							switch (e = t.deltaY, t.deltaMode) {
								case 0:
									e /= 100;
									break;
								case 1:
									e /= 3;
									break;
								case 2:
									e *= 80;
									break;
								default: throw "unrecognized mouse wheel delta mode: " + t.deltaMode;
							}
							break;
						default: throw "unrecognized mouse wheel event: " + t.type;
					}
					return e;
				},
				mouseX: 0,
				mouseY: 0,
				mouseMovementX: 0,
				mouseMovementY: 0,
				touches: {},
				lastTouches: {},
				calculateMouseEvent: function(t) {
					if (Da.pointerLock) t.type != "mousemove" && "mozMovementX" in t ? Da.mouseMovementX = Da.mouseMovementY = 0 : (Da.mouseMovementX = Da.getMovementX(t), Da.mouseMovementY = Da.getMovementY(t)), typeof SDL != "undefined" ? (Da.mouseX = SDL.mouseX + Da.mouseMovementX, Da.mouseY = SDL.mouseY + Da.mouseMovementY) : (Da.mouseX += Da.mouseMovementX, Da.mouseY += Da.mouseMovementY);
					else {
						var e = g.canvas.getBoundingClientRect(), n = g.canvas.width, r = g.canvas.height, o = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset, a = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
						if (V(typeof o != "undefined" && typeof a != "undefined", "Unable to retrieve scroll position, mouse positions likely broken."), t.type === "touchstart" || t.type === "touchend" || t.type === "touchmove") {
							var i = t.touch;
							if (i === void 0) return;
							var l = i.pageX - (o + e.left), s = i.pageY - (a + e.top);
							l = l * (n / e.width), s = s * (r / e.height);
							var u = {
								x: l,
								y: s
							};
							if (t.type === "touchstart") Da.lastTouches[i.identifier] = u, Da.touches[i.identifier] = u;
							else if (t.type === "touchend" || t.type === "touchmove") {
								var c = Da.touches[i.identifier];
								c || (c = u), Da.lastTouches[i.identifier] = c, Da.touches[i.identifier] = u;
							}
							return;
						}
						var d = t.pageX - (o + e.left), m = t.pageY - (a + e.top);
						d = d * (n / e.width), m = m * (r / e.height), Da.mouseMovementX = d - Da.mouseX, Da.mouseMovementY = m - Da.mouseY, Da.mouseX = d, Da.mouseY = m;
					}
				},
				resizeListeners: [],
				updateResizeListeners: function() {
					var e = g.canvas;
					Da.resizeListeners.forEach(function(t) {
						return t(e.width, e.height);
					});
				},
				setCanvasSize: function(t, n, r) {
					var e = g.canvas;
					Da.updateCanvasDimensions(e, t, n), r || Da.updateResizeListeners();
				},
				windowedWidth: 0,
				windowedHeight: 0,
				setFullscreenCanvasSize: function() {
					if (typeof SDL != "undefined") {
						var e = p()[SDL.screen >> 2];
						e = e | 8388608, m()[SDL.screen >> 2] = e;
					}
					Da.updateCanvasDimensions(g.canvas), Da.updateResizeListeners();
				},
				setWindowedCanvasSize: function() {
					if (typeof SDL != "undefined") {
						var e = p()[SDL.screen >> 2];
						e = e & -8388609, m()[SDL.screen >> 2] = e;
					}
					Da.updateCanvasDimensions(g.canvas), Da.updateResizeListeners();
				},
				updateCanvasDimensions: function(t, n, r) {
					n && r ? (t.widthNative = n, t.heightNative = r) : (n = t.widthNative, r = t.heightNative);
					var e = n, o = r;
					if (g.forcedAspectRatio && g.forcedAspectRatio > 0 && (e / o < g.forcedAspectRatio ? e = Math.round(o * g.forcedAspectRatio) : o = Math.round(e / g.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === t.parentNode && typeof screen != "undefined") {
						var a = Math.min(screen.width / e, screen.height / o);
						e = Math.round(e * a), o = Math.round(o * a);
					}
					Da.resizeCanvas ? (t.width != e && (t.width = e), t.height != o && (t.height = o), typeof t.style != "undefined" && (t.style.removeProperty("width"), t.style.removeProperty("height"))) : (t.width != n && (t.width = n), t.height != r && (t.height = r), typeof t.style != "undefined" && (e != n || o != r ? (t.style.setProperty("width", e + "px", "important"), t.style.setProperty("height", o + "px", "important")) : (t.style.removeProperty("width"), t.style.removeProperty("height"))));
				}
			};
			function xa(e, t, n) {
				function r() {
					un(e)(t);
				}
				n >= 0 ? Ea(r, n) : Da.safeRequestAnimationFrame(r);
			}
			function $a() {
				L || mn("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread");
			}
			var Pa = function(t) {
				V(typeof t == "number"), Kt(t);
			};
			function Na() {
				return Date.now();
			}
			var Ma = function() {
				throw Ra(), "unwind";
			}, wa = function() {
				return 2147483648;
			}, Aa = function() {
				return wa();
			};
			function Fa() {
				return navigator.hardwareConcurrency;
			}
			var Oa = [];
			function Ba(e, t, n, r) {
				tn.currentProxiedOperationCallerThread = t, n /= 2, Oa.length = n;
				for (var o = r >> 3, a = 0; a < n; a++) Y[o + 2 * a] ? Oa[a] = Y[o + 2 * a + 1] : Oa[a] = f()[o + 2 * a + 1];
				var i = e < 0, l = i ? Ge[-e - 1] : Ei[e];
				return V(l.length == n, "Call args mismatch in emscripten_receive_on_main_thread_js"), l.apply(null, Oa);
			}
			var Wa = function(t) {
				var e = O.buffer, n = t - e.byteLength + 65535 >>> 16;
				try {
					return O.grow(n), ee(), 1;
				} catch (n) {
					w("growMemory: Attempted to grow heap from " + e.byteLength + " bytes to " + t + " bytes, but got error: " + n);
				}
			}, qa = function(t) {
				var e = l().length;
				if (t >>>= 0, t <= e) return !1;
				var n = wa();
				if (t > n) return w("Cannot enlarge memory, asked to go up to " + t + " bytes, but the limit is " + n + " bytes!"), !1;
				for (var r = function(t, n) {
					return t + (n - t % n) % n;
				}, o = 1; o <= 4; o *= 2) {
					var a = e * (1 + .2 / o);
					a = Math.min(a, t + 100663296);
					var i = Math.min(n, r(Math.max(t, a), 65536)), s = Wa(i);
					if (s) return !0;
				}
				return w("Failed to grow the heap from " + e + " bytes to " + i + " bytes, not enough memory!"), !1;
			}, Ua = La, Va = Ra, Ha = {}, Ga = function() {
				return v || "./this.program";
			}, za = function() {
				if (!za.strings) {
					var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: e,
						_: Ga()
					};
					for (var n in Ha) Ha[n] === void 0 ? delete t[n] : t[n] = Ha[n];
					var r = [];
					for (var n in t) r.push(n + "=" + t[n]);
					za.strings = r;
				}
				return za.strings;
			}, ja = function(t, n) {
				for (var e = 0; e < t.length; ++e) V(t.charCodeAt(e) === (t.charCodeAt(e) & 255)), i()[n++ >> 0] = t.charCodeAt(e);
				i()[n >> 0] = 0;
			};
			function Ka(e, t) {
				if (I) return ha(19, 1, e, t);
				var n = 0;
				return za().forEach(function(r, o) {
					var a = t + n;
					p()[e + o * 4 >> 2] = a, ja(r, a), n += r.length + 1;
				}), 0;
			}
			function Qa(e, t) {
				if (I) return ha(20, 1, e, t);
				var n = za();
				p()[e >> 2] = n.length;
				var r = 0;
				return n.forEach(function(e) {
					r += e.length + 1;
				}), p()[t >> 2] = r, 0;
			}
			function Xa(e) {
				if (I) return ha(21, 1, e);
				try {
					var t = Qt.getStreamFromFD(e);
					return jt.close(t), 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			var Ya = function(t, n, r, o) {
				for (var e = 0, a = 0; a < r; a++) {
					var l = p()[n >> 2], s = p()[n + 4 >> 2];
					n += 8;
					var u = jt.read(t, i(), l, s, o);
					if (u < 0) return -1;
					if (e += u, u < s) break;
					typeof o != "undefined" && (o += u);
				}
				return e;
			};
			function Ja(e, t, n, r, o) {
				if (I) return ha(22, 1, e, t, n, r, o);
				t = qn(t), n = qn(n), r = qn(r), o = qn(o);
				try {
					if (isNaN(r)) return 61;
					var a = Qt.getStreamFromFD(e), i = Ya(a, t, n, r);
					return p()[o >> 2] = i, 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			var Za = function(t, n, r, o) {
				for (var e = 0, a = 0; a < r; a++) {
					var l = p()[n >> 2], s = p()[n + 4 >> 2];
					n += 8;
					var u = jt.write(t, i(), l, s, o);
					if (u < 0) return -1;
					e += u, typeof o != "undefined" && (o += u);
				}
				return e;
			};
			function ei(e, t, n, r, o) {
				if (I) return ha(23, 1, e, t, n, r, o);
				t = qn(t), n = qn(n), r = qn(r), o = qn(o);
				try {
					if (isNaN(r)) return 61;
					var a = Qt.getStreamFromFD(e), i = Za(a, t, n, r);
					return p()[o >> 2] = i, 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			function ti(e, t, n, r) {
				if (I) return ha(24, 1, e, t, n, r);
				try {
					var o = Qt.getStreamFromFD(e), a = Ya(o, t, n);
					return p()[r >> 2] = a, 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			function ni(e, t, n, r) {
				if (I) return ha(25, 1, e, t, n, r);
				t = qn(t), r = qn(r);
				try {
					if (isNaN(t)) return 61;
					var o = Qt.getStreamFromFD(e);
					return jt.llseek(o, t, n), Y[r >> 3] = BigInt(o.position), o.getdents && t === 0 && n === 0 && (o.getdents = null), 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			function ri(e) {
				if (I) return ha(26, 1, e);
				try {
					var t = Qt.getStreamFromFD(e);
					return t.stream_ops && t.stream_ops.fsync ? t.stream_ops.fsync(t) : 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			function oi(e, t, n, r) {
				if (I) return ha(27, 1, e, t, n, r);
				try {
					var o = Qt.getStreamFromFD(e), a = Za(o, t, n);
					return p()[r >> 2] = a, 0;
				} catch (e) {
					if (typeof jt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			var ai = function(t, n) {
				return Rt(l().subarray(t, t + n)), 0;
			}, ii = function(t) {
				for (var e = t.split("."), n = 0; n < 4; n++) {
					var r = Number(e[n]);
					if (isNaN(r)) return null;
					e[n] = r;
				}
				return (e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24) >>> 0;
			}, li = function(t) {
				return parseInt(t);
			}, si = function(t) {
				var e, n, r, o, a = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, i = [];
				if (!a.test(t)) return null;
				if (t === "::") return [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				];
				for (t.startsWith("::") ? t = t.replace("::", "Z:") : t = t.replace("::", ":Z:"), t.indexOf(".") > 0 ? (t = t.replace(new RegExp("[.]", "g"), ":"), e = t.split(":"), e[e.length - 4] = li(e[e.length - 4]) + li(e[e.length - 3]) * 256, e[e.length - 3] = li(e[e.length - 2]) + li(e[e.length - 1]) * 256, e = e.slice(0, e.length - 2)) : e = t.split(":"), r = 0, o = 0, n = 0; n < e.length; n++) if (typeof e[n] == "string") if (e[n] === "Z") {
					for (o = 0; o < 8 - e.length + 1; o++) i[n + o] = 0;
					r = o - 1;
				} else i[n + r] = Bi(parseInt(e[n], 16));
				else i[n + r] = e[n];
				return [
					i[1] << 16 | i[0],
					i[3] << 16 | i[2],
					i[5] << 16 | i[4],
					i[7] << 16 | i[6]
				];
			}, ui = {
				address_map: {
					id: 1,
					addrs: {},
					names: {}
				},
				lookup_name: function(t) {
					var e = ii(t);
					if (e !== null || (e = si(t), e !== null)) return t;
					var n;
					if (ui.address_map.addrs[t]) n = ui.address_map.addrs[t];
					else {
						var r = ui.address_map.id++;
						V(r < 65535, "exceeded max address mappings of 65535"), n = "172.29." + (r & 255) + "." + (r & 65280), ui.address_map.names[n] = t, ui.address_map.addrs[t] = n;
					}
					return n;
				},
				lookup_addr: function(t) {
					return ui.address_map.names[t] ? ui.address_map.names[t] : null;
				}
			}, ci = function(t) {
				var e = $i(20), n = ma(t);
				p()[e >> 2] = n;
				var r = $i(4);
				p()[r >> 2] = 0, p()[e + 4 >> 2] = r;
				var o = 2;
				m()[e + 8 >> 2] = o, m()[e + 12 >> 2] = 4;
				var a = $i(12);
				return p()[a >> 2] = a + 8, p()[a + 4 >> 2] = 0, m()[a + 8 >> 2] = ii(ui.lookup_name(t)), p()[e + 16 >> 2] = a, e;
			};
			function di(e) {
				return I ? ha(28, 1, e) : ci(Kt(e));
			}
			function mi(e) {
				return e;
			}
			var pi = function(t, n) {
				for (var e = 0, r = 0; r <= n; e += t[r++]);
				return e;
			}, _i = [
				31,
				29,
				31,
				30,
				31,
				30,
				31,
				31,
				30,
				31,
				30,
				31
			], fi = [
				31,
				28,
				31,
				30,
				31,
				30,
				31,
				31,
				30,
				31,
				30,
				31
			], gi = function(t, n) {
				for (var e = new Date(t.getTime()); n > 0;) {
					var r = ra(e.getFullYear()), o = e.getMonth(), a = (r ? _i : fi)[o];
					if (n > a - e.getDate()) n -= a - e.getDate() + 1, e.setDate(1), o < 11 ? e.setMonth(o + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
					else return e.setDate(e.getDate() + n), e;
				}
				return e;
			}, hi = function(t, n) {
				V(t.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)"), i().set(t, n);
			}, yi = function(t, n, r, o) {
				var e = m()[o + 40 >> 2], a = {
					tm_sec: m()[o >> 2],
					tm_min: m()[o + 4 >> 2],
					tm_hour: m()[o + 8 >> 2],
					tm_mday: m()[o + 12 >> 2],
					tm_mon: m()[o + 16 >> 2],
					tm_year: m()[o + 20 >> 2],
					tm_wday: m()[o + 24 >> 2],
					tm_yday: m()[o + 28 >> 2],
					tm_isdst: m()[o + 32 >> 2],
					tm_gmtoff: m()[o + 36 >> 2],
					tm_zone: e ? Kt(e) : ""
				}, i = Kt(r), l = {
					"%c": "%a %b %d %H:%M:%S %Y",
					"%D": "%m/%d/%y",
					"%F": "%Y-%m-%d",
					"%h": "%b",
					"%r": "%I:%M:%S %p",
					"%R": "%H:%M",
					"%T": "%H:%M:%S",
					"%x": "%m/%d/%y",
					"%X": "%H:%M:%S",
					"%Ec": "%c",
					"%EC": "%C",
					"%Ex": "%m/%d/%y",
					"%EX": "%H:%M:%S",
					"%Ey": "%y",
					"%EY": "%Y",
					"%Od": "%d",
					"%Oe": "%e",
					"%OH": "%H",
					"%OI": "%I",
					"%Om": "%m",
					"%OM": "%M",
					"%OS": "%S",
					"%Ou": "%u",
					"%OU": "%U",
					"%OV": "%V",
					"%Ow": "%w",
					"%OW": "%W",
					"%Oy": "%y"
				};
				for (var s in l) i = i.replace(new RegExp(s, "g"), l[s]);
				var u = [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday"
				], c = [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December"
				];
				function d(e, t, n) {
					for (var r = typeof e == "number" ? e.toString() : e || ""; r.length < t;) r = n[0] + r;
					return r;
				}
				function p(e, t) {
					return d(e, t, "0");
				}
				function _(e, t) {
					function n(e) {
						return e < 0 ? -1 : e > 0 ? 1 : 0;
					}
					var r;
					return (r = n(e.getFullYear() - t.getFullYear())) === 0 && (r = n(e.getMonth() - t.getMonth())) === 0 && (r = n(e.getDate() - t.getDate())), r;
				}
				function f(e) {
					switch (e.getDay()) {
						case 0: return new Date(e.getFullYear() - 1, 11, 29);
						case 1: return e;
						case 2: return new Date(e.getFullYear(), 0, 3);
						case 3: return new Date(e.getFullYear(), 0, 2);
						case 4: return new Date(e.getFullYear(), 0, 1);
						case 5: return new Date(e.getFullYear() - 1, 11, 31);
						case 6: return new Date(e.getFullYear() - 1, 11, 30);
					}
				}
				function g(e) {
					var t = gi(new Date(e.tm_year + 1900, 0, 1), e.tm_yday), n = new Date(t.getFullYear(), 0, 4), r = new Date(t.getFullYear() + 1, 0, 4), o = f(n), a = f(r);
					return _(o, t) <= 0 ? _(a, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1;
				}
				var h = {
					"%a": function(t) {
						return u[t.tm_wday].substring(0, 3);
					},
					"%A": function(t) {
						return u[t.tm_wday];
					},
					"%b": function(t) {
						return c[t.tm_mon].substring(0, 3);
					},
					"%B": function(t) {
						return c[t.tm_mon];
					},
					"%C": function(t) {
						var e = t.tm_year + 1900;
						return p(e / 100 | 0, 2);
					},
					"%d": function(t) {
						return p(t.tm_mday, 2);
					},
					"%e": function(t) {
						return d(t.tm_mday, 2, " ");
					},
					"%g": function(t) {
						return g(t).toString().substring(2);
					},
					"%G": function(t) {
						return g(t);
					},
					"%H": function(t) {
						return p(t.tm_hour, 2);
					},
					"%I": function(t) {
						var e = t.tm_hour;
						return e == 0 ? e = 12 : e > 12 && (e -= 12), p(e, 2);
					},
					"%j": function(t) {
						return p(t.tm_mday + pi(ra(t.tm_year + 1900) ? _i : fi, t.tm_mon - 1), 3);
					},
					"%m": function(t) {
						return p(t.tm_mon + 1, 2);
					},
					"%M": function(t) {
						return p(t.tm_min, 2);
					},
					"%n": function() {
						return `
`;
					},
					"%p": function(t) {
						return t.tm_hour >= 0 && t.tm_hour < 12 ? "AM" : "PM";
					},
					"%S": function(t) {
						return p(t.tm_sec, 2);
					},
					"%t": function() {
						return "	";
					},
					"%u": function(t) {
						return t.tm_wday || 7;
					},
					"%U": function(t) {
						var e = t.tm_yday + 7 - t.tm_wday;
						return p(Math.floor(e / 7), 2);
					},
					"%V": function(t) {
						var e = Math.floor((t.tm_yday + 7 - (t.tm_wday + 6) % 7) / 7);
						if ((t.tm_wday + 371 - t.tm_yday - 2) % 7 <= 2 && e++, e) {
							if (e == 53) {
								var r = (t.tm_wday + 371 - t.tm_yday) % 7;
								r != 4 && (r != 3 || !ra(t.tm_year)) && (e = 1);
							}
						} else {
							e = 52;
							var n = (t.tm_wday + 7 - t.tm_yday - 1) % 7;
							(n == 4 || n == 5 && ra(t.tm_year % 400 - 1)) && e++;
						}
						return p(e, 2);
					},
					"%w": function(t) {
						return t.tm_wday;
					},
					"%W": function(t) {
						var e = t.tm_yday + 7 - (t.tm_wday + 6) % 7;
						return p(Math.floor(e / 7), 2);
					},
					"%y": function(t) {
						return (t.tm_year + 1900).toString().substring(2);
					},
					"%Y": function(t) {
						return t.tm_year + 1900;
					},
					"%z": function(t) {
						var e = t.tm_gmtoff, n = e >= 0;
						return e = Math.abs(e) / 60, e = e / 60 * 100 + e % 60, (n ? "+" : "-") + ("0000" + e).slice(-4);
					},
					"%Z": function(t) {
						return t.tm_zone;
					},
					"%%": function() {
						return "%";
					}
				};
				i = i.replace(/%%/g, "\0\0");
				for (var s in h) i.includes(s) && (i = i.replace(new RegExp(s, "g"), h[s](a)));
				i = i.replace(/\0\0/g, "%");
				var y = xt(i, !1);
				return y.length > n ? 0 : (hi(y, t), y.length - 1);
			}, Ci = function(t, n, r, o, a) {
				return yi(t, n, r, o);
			};
			tn.init();
			var bi = function(t, n, r, o) {
				t || (t = this), this.parent = t, this.mount = t.mount, this.mounted = null, this.id = jt.nextInode++, this.name = n, this.mode = r, this.node_ops = {}, this.stream_ops = {}, this.rdev = o;
			}, vi = 365, Si = 146;
			Object.defineProperties(bi.prototype, {
				read: {
					get: function() {
						return (this.mode & vi) === vi;
					},
					set: function(t) {
						t ? this.mode |= vi : this.mode &= ~vi;
					}
				},
				write: {
					get: function() {
						return (this.mode & Si) === Si;
					},
					set: function(t) {
						t ? this.mode |= Si : this.mode &= ~Si;
					}
				},
				isFolder: { get: function() {
					return jt.isDir(this.mode);
				} },
				isDevice: { get: function() {
					return jt.isChrdev(this.mode);
				} }
			}), jt.FSNode = bi, jt.createPreloadedFile = Bt, jt.staticInit(), Ht = {
				EPERM: 63,
				ENOENT: 44,
				ESRCH: 71,
				EINTR: 27,
				EIO: 29,
				ENXIO: 60,
				E2BIG: 1,
				ENOEXEC: 45,
				EBADF: 8,
				ECHILD: 12,
				EAGAIN: 6,
				EWOULDBLOCK: 6,
				ENOMEM: 48,
				EACCES: 2,
				EFAULT: 21,
				ENOTBLK: 105,
				EBUSY: 10,
				EEXIST: 20,
				EXDEV: 75,
				ENODEV: 43,
				ENOTDIR: 54,
				EISDIR: 31,
				EINVAL: 28,
				ENFILE: 41,
				EMFILE: 33,
				ENOTTY: 59,
				ETXTBSY: 74,
				EFBIG: 22,
				ENOSPC: 51,
				ESPIPE: 70,
				EROFS: 69,
				EMLINK: 34,
				EPIPE: 64,
				EDOM: 18,
				ERANGE: 68,
				ENOMSG: 49,
				EIDRM: 24,
				ECHRNG: 106,
				EL2NSYNC: 156,
				EL3HLT: 107,
				EL3RST: 108,
				ELNRNG: 109,
				EUNATCH: 110,
				ENOCSI: 111,
				EL2HLT: 112,
				EDEADLK: 16,
				ENOLCK: 46,
				EBADE: 113,
				EBADR: 114,
				EXFULL: 115,
				ENOANO: 104,
				EBADRQC: 103,
				EBADSLT: 102,
				EDEADLOCK: 16,
				EBFONT: 101,
				ENOSTR: 100,
				ENODATA: 116,
				ETIME: 117,
				ENOSR: 118,
				ENONET: 119,
				ENOPKG: 120,
				EREMOTE: 121,
				ENOLINK: 47,
				EADV: 122,
				ESRMNT: 123,
				ECOMM: 124,
				EPROTO: 65,
				EMULTIHOP: 36,
				EDOTDOT: 125,
				EBADMSG: 9,
				ENOTUNIQ: 126,
				EBADFD: 127,
				EREMCHG: 128,
				ELIBACC: 129,
				ELIBBAD: 130,
				ELIBSCN: 131,
				ELIBMAX: 132,
				ELIBEXEC: 133,
				ENOSYS: 52,
				ENOTEMPTY: 55,
				ENAMETOOLONG: 37,
				ELOOP: 32,
				EOPNOTSUPP: 138,
				EPFNOSUPPORT: 139,
				ECONNRESET: 15,
				ENOBUFS: 42,
				EAFNOSUPPORT: 5,
				EPROTOTYPE: 67,
				ENOTSOCK: 57,
				ENOPROTOOPT: 50,
				ESHUTDOWN: 140,
				ECONNREFUSED: 14,
				EADDRINUSE: 3,
				ECONNABORTED: 13,
				ENETUNREACH: 40,
				ENETDOWN: 38,
				ETIMEDOUT: 73,
				EHOSTDOWN: 142,
				EHOSTUNREACH: 23,
				EINPROGRESS: 26,
				EALREADY: 7,
				EDESTADDRREQ: 17,
				EMSGSIZE: 35,
				EPROTONOSUPPORT: 66,
				ESOCKTNOSUPPORT: 137,
				EADDRNOTAVAIL: 4,
				ENETRESET: 39,
				EISCONN: 30,
				ENOTCONN: 53,
				ETOOMANYREFS: 141,
				EUSERS: 136,
				EDQUOT: 19,
				ESTALE: 72,
				ENOTSUP: 138,
				ENOMEDIUM: 148,
				EILSEQ: 25,
				EOVERFLOW: 61,
				ECANCELED: 11,
				ENOTRECOVERABLE: 56,
				EOWNERDEAD: 62,
				ESTRPIPE: 135
			}, Zn(), ar = g.BindingError = (function(e) {
				function t(t) {
					var n;
					return n = e.call(this, t) || this, n.name = "BindingError", n;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(babelHelpers.wrapNativeSuper(Error)), lr = g.InternalError = (function(e) {
				function t(t) {
					var n;
					return n = e.call(this, t) || this, n.name = "InternalError", n;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(babelHelpers.wrapNativeSuper(Error)), Ur(), $r(), ao(), co = g.UnboundTypeError = uo(Error, "UnboundTypeError"), bo(), Eo(), g.requestFullscreen = function(t, n) {
				Da.requestFullscreen(t, n);
			}, g.requestFullScreen = function() {
				Da.requestFullScreen();
			}, g.requestAnimationFrame = function(t) {
				Da.requestAnimationFrame(t);
			}, g.setCanvasSize = function(t, n, r) {
				Da.setCanvasSize(t, n, r);
			}, g.pauseMainLoop = function() {
				Da.mainLoop.pause();
			}, g.resumeMainLoop = function() {
				Da.mainLoop.resume();
			}, g.getUserMedia = function() {
				Da.getUserMedia();
			}, g.createContext = function(t, n, r, o) {
				return Da.createContext(t, n, r, o);
			};
			var Ri = {}, Li = {}, Ei = [
				null,
				Xt,
				on,
				Nn,
				wn,
				Fn,
				On,
				Un,
				Hn,
				Gn,
				zn,
				jn,
				Kn,
				Qn,
				Xn,
				Yn,
				ua,
				ca,
				da,
				Ka,
				Qa,
				Xa,
				Ja,
				ei,
				ti,
				ni,
				ri,
				oi,
				di
			];
			function ki() {
				Be("fetchSettings");
			}
			var Ii = {
				__assert_fail: pn,
				__cxa_begin_catch: gn,
				__cxa_current_primary_exception: hn,
				__cxa_end_catch: Cn,
				__cxa_find_matching_catch_2: Rn,
				__cxa_find_matching_catch_3: Ln,
				__cxa_find_matching_catch_4: En,
				__cxa_get_exception_ptr: kn,
				__cxa_rethrow: In,
				__cxa_rethrow_primary_exception: Tn,
				__cxa_throw: Dn,
				__cxa_uncaught_exceptions: xn,
				__emscripten_init_main_thread_js: $n,
				__emscripten_thread_cleanup: Pn,
				__pthread_create_js: Mn,
				__resumeException: vn,
				__syscall_chdir: wn,
				__syscall_fcntl64: Fn,
				__syscall_fstat64: On,
				__syscall_ftruncate64: Un,
				__syscall_getdents64: Hn,
				__syscall_ioctl: Gn,
				__syscall_lstat64: zn,
				__syscall_mkdirat: jn,
				__syscall_newfstatat: Kn,
				__syscall_openat: Qn,
				__syscall_stat64: Xn,
				__syscall_unlinkat: Yn,
				_embind_register_bigint: pr,
				_embind_register_bool: fr,
				_embind_register_class: _o,
				_embind_register_class_constructor: yo,
				_embind_register_class_function: Co,
				_embind_register_emval: Io,
				_embind_register_float: Do,
				_embind_register_function: xo,
				_embind_register_integer: $o,
				_embind_register_memory_view: Po,
				_embind_register_std_string: No,
				_embind_register_std_wstring: qo,
				_embind_register_void: Uo,
				_emscripten_get_now_is_monotonic: Ho,
				_emscripten_notify_mailbox_postmessage: Qo,
				_emscripten_set_offscreencanvas_size: Xo,
				_emscripten_thread_mailbox_await: jo,
				_emscripten_thread_set_strongref: Yo,
				_emscripten_throw_longjmp: Jo,
				_emval_decref: Ro,
				_emval_incref: Zo,
				_emval_take_value: ta,
				_gmtime_js: na,
				_localtime_js: la,
				_mktime_js: sa,
				_mmap_js: ua,
				_msync_js: ca,
				_munmap_js: da,
				_tzset_js: pa,
				abort: _a,
				call_init_capture_driver_js_sync: nt,
				call_init_playback_driver_js_sync: at,
				call_sendto: tt,
				call_start_capture_js_sync: rt,
				call_start_desktop_capture_js_sync: ut,
				call_start_playback_js_sync: it,
				call_start_video_capture_js_sync: dt,
				call_stop_capture_js_sync: ot,
				call_stop_desktop_capture_js_sync: ct,
				call_stop_playback_js_sync: lt,
				call_stop_video_capture_js_sync: mt,
				emscripten_asm_const_async_on_main_thread: Ca,
				emscripten_asm_const_double: va,
				emscripten_asm_const_int: Sa,
				emscripten_async_call: xa,
				emscripten_check_blocking_allowed: $a,
				emscripten_console_error: Pa,
				emscripten_date_now: Na,
				emscripten_exit_with_live_runtime: Ma,
				emscripten_get_heap_max: Aa,
				emscripten_get_now: Ia,
				emscripten_num_logical_cores: Fa,
				emscripten_receive_on_main_thread_js: Ba,
				emscripten_resize_heap: qa,
				emscripten_runtime_keepalive_pop: Ua,
				emscripten_runtime_keepalive_push: Va,
				environ_get: Ka,
				environ_sizes_get: Qa,
				exit: Jt,
				fd_close: Xa,
				fd_pread: Ja,
				fd_pwrite: ei,
				fd_read: ti,
				fd_seek: ni,
				fd_sync: ri,
				fd_write: oi,
				get_bwe_ml_model_path_js: Xe,
				get_persistent_directory_path_js: Qe,
				get_random_bytes_js: Ye,
				getentropy: ai,
				gethostbyname: di,
				invoke_d: Gu,
				invoke_diii: Xu,
				invoke_fi: Qs,
				invoke_fii: ps,
				invoke_fiii: Qu,
				invoke_fiiiiii: Du,
				invoke_i: bl,
				invoke_id: su,
				invoke_ii: Sl,
				invoke_iid: Uu,
				invoke_iidi: zu,
				invoke_iidii: pu,
				invoke_iidjjjidjjjdjjji: rs,
				invoke_iidjjjii: ds,
				invoke_iidjjjiii: as,
				invoke_iiffiii: fs,
				invoke_iiffiiiii: _s,
				invoke_iifi: Lu,
				invoke_iifii: au,
				invoke_iifiii: lu,
				invoke_iii: Rl,
				invoke_iiid: iu,
				invoke_iiifi: uu,
				invoke_iiii: El,
				invoke_iiiidd: Fu,
				invoke_iiiifiii: bs,
				invoke_iiiifiiiiii: Ls,
				invoke_iiiii: Dl,
				invoke_iiiiid: ju,
				invoke_iiiiii: wl,
				invoke_iiiiiii: kl,
				invoke_iiiiiiiddiiid: Bu,
				invoke_iiiiiiii: Nl,
				invoke_iiiiiiiidi: qu,
				invoke_iiiiiiiifii: ou,
				invoke_iiiiiiiii: xl,
				invoke_iiiiiiiiii: Pl,
				invoke_iiiiiiiiiiffiii: gs,
				invoke_iiiiiiiiiii: zl,
				invoke_iiiiiiiiiiii: Ss,
				invoke_iiiiiiiiiiiiffiii: Cs,
				invoke_iiiiiiiiiiiii: Es,
				invoke_iiiiiiiiiiiiii: Wl,
				invoke_iiiiiiiiiiiiiiffiiiii: vs,
				invoke_iiiiiiiiiiiiiii: Ds,
				invoke_iiiiiiiiiiiiiiiffiiiii: hs,
				invoke_iiiiiiiiiiiiiiii: Ks,
				invoke_iiiiiiiiiiiiiiiiiffiiiii: ys,
				invoke_iiiiiiiiiiiiiiiiii: ql,
				invoke_iiiiiiiiiiji: Xl,
				invoke_iiiiiiiiij: Vs,
				invoke_iiiiiiiij: Ws,
				invoke_iiiiiiij: As,
				invoke_iiiiiiijjii: Xs,
				invoke_iiiiiij: qs,
				invoke_iiiiiijiiii: Hs,
				invoke_iiiiiijjijiiiiiiiiii: Js,
				invoke_iiiiij: xu,
				invoke_iiiiiji: Os,
				invoke_iiiiijjii: us,
				invoke_iiiiijjiii: cs,
				invoke_iiiiijjjii: ls,
				invoke_iiiiijjjiii: ss,
				invoke_iiiij: Ts,
				invoke_iiiijiii: mu,
				invoke_iiiijiiji: ts,
				invoke_iiiijjii: ms,
				invoke_iiiijjiii: is,
				invoke_iiij: Fs,
				invoke_iiijddddddd: Su,
				invoke_iiiji: Ql,
				invoke_iiijii: jl,
				invoke_iiijiiji: es,
				invoke_iiijji: Zl,
				invoke_iiijjiiii: hu,
				invoke_iij: Is,
				invoke_iiji: Gs,
				invoke_iijii: Us,
				invoke_iijiii: Iu,
				invoke_iijijijiji: Ou,
				invoke_iijj: Cu,
				invoke_iijjjiiii: fu,
				invoke_iijjjj: Eu,
				invoke_iijjjji: vu,
				invoke_ij: Pu,
				invoke_iji: Au,
				invoke_j: Ul,
				invoke_ji: Gl,
				invoke_jii: ws,
				invoke_jiii: $l,
				invoke_jiiii: Ku,
				invoke_jiiiii: js,
				invoke_jiiiiiiii: Bs,
				invoke_jiiiiiji: zs,
				invoke_jiij: bu,
				invoke_jij: Zs,
				invoke_jj: $u,
				invoke_v: Ll,
				invoke_vd: Hu,
				invoke_vi: Il,
				invoke_vid: tu,
				invoke_viddjjii: gu,
				invoke_vif: xs,
				invoke_viff: Ns,
				invoke_vii: vl,
				invoke_viid: _u,
				invoke_viidi: Wu,
				invoke_viif: Ms,
				invoke_viii: Cl,
				invoke_viiii: Tl,
				invoke_viiiii: Ml,
				invoke_viiiiii: Bl,
				invoke_viiiiiidiii: Jl,
				invoke_viiiiiii: Ol,
				invoke_viiiiiiiddiii: Kl,
				invoke_viiiiiiii: Fl,
				invoke_viiiiiiiii: Al,
				invoke_viiiiiiiiii: Yl,
				invoke_viiiiiiiiiiii: $s,
				invoke_viiiiiiiiiiiii: Mu,
				invoke_viiiiiiiiiiiiiii: Yu,
				invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: Ru,
				invoke_viiiiiiij: Nu,
				invoke_viiiiij: cu,
				invoke_viiiiiji: Vu,
				invoke_viiiij: du,
				invoke_viiiijiiii: Rs,
				invoke_viiij: Tu,
				invoke_viiiji: ns,
				invoke_viij: Ps,
				invoke_viiji: nu,
				invoke_viijii: ru,
				invoke_viijiiii: Ys,
				invoke_viijj: wu,
				invoke_viijjdiii: os,
				invoke_vij: ks,
				invoke_viji: ku,
				invoke_vijiiiii: Vl,
				invoke_vijj: eu,
				invoke_vijji: yu,
				invoke_vjiiiiii: Hl,
				is_participant_known_contact_js: Je,
				llvm_eh_typeid_for: mi,
				loggingCallback_js_sync: pt,
				memory: O || g.wasmMemory,
				on_call_event_js_sync: ze,
				patch_abort_for_ml_inference: Ke,
				query_browser_audio_processing_status_js_sync: st,
				renderVideoFrame_js: Ze,
				sendSignalingXMPP_js_sync: et,
				set_ml_inference_flag: je,
				strftime_l: Ci
			}, Ti = Fe(), Di = Te("__wasm_call_ctors"), xi = Te("__cxa_free_exception"), $i = g._malloc = Te("malloc"), Pi = g._free = Te("free"), Ni = g._wasm_throw_ml_abort = Te("wasm_throw_ml_abort"), Mi = g._fflush = Te("fflush"), wi = Te("__errno_location"), Ai = g._pthread_self = function() {
				return (Ai = g._pthread_self = B.pthread_self)();
			}, Fi = Te("ntohs"), Oi = Te("htonl"), Bi = Te("htons"), Wi = g.__ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj = Te("_ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj"), qi = g.__ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj = Te("_ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj"), Ui = Te("__cxa_increment_exception_refcount"), Vi = Te("__cxa_decrement_exception_refcount"), Hi = g.__emscripten_tls_init = Te("_emscripten_tls_init"), Gi = Te("emscripten_builtin_memalign"), zi = Te("__getTypeName"), ji = g.__embind_initialize_bindings = Te("_embind_initialize_bindings"), Ki = g.__emscripten_thread_init = Te("_emscripten_thread_init"), Qi = g.__emscripten_thread_crashed = Te("_emscripten_thread_crashed"), Xi = Te("emscripten_main_thread_process_queued_calls"), Yi = Te("emscripten_main_runtime_thread_id"), Ji = Te("_emscripten_run_in_main_runtime_thread_js"), Zi = Te("emscripten_dispatch_to_thread_"), el = function() {
				return (el = B.emscripten_stack_get_base)();
			}, tl = function() {
				return (tl = B.emscripten_stack_get_end)();
			}, nl = Te("_emscripten_thread_free_data"), rl = g.__emscripten_thread_exit = Te("_emscripten_thread_exit"), ol = g.__emscripten_check_mailbox = Te("_emscripten_check_mailbox"), al = Te("setThrew"), il = Te("setTempRet0"), ll = function() {
				return (ll = B.emscripten_stack_init)();
			}, sl = function(t, n) {
				return (sl = B.emscripten_stack_set_limits)(t, n);
			}, ul = function() {
				return (ul = B.emscripten_stack_get_free)();
			}, cl = Te("stackSave"), dl = Te("stackRestore"), ml = Te("stackAlloc"), pl = function() {
				return (pl = B.emscripten_stack_get_current)();
			}, _l = g.___get_exception_message = Te("__get_exception_message"), fl = Te("__cxa_can_catch"), gl = Te("__cxa_is_pointer_type"), hl = g.___start_em_js = 1378172, yl = g.___stop_em_js = 1383604;
			function Cl(e, t, n, r) {
				var o = cl();
				try {
					un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function bl(e) {
				var t = cl();
				try {
					return un(e)();
				} catch (e) {
					if (dl(t), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function vl(e, t, n) {
				var r = cl();
				try {
					un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Sl(e, t) {
				var n = cl();
				try {
					return un(e)(t);
				} catch (e) {
					if (dl(n), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Rl(e, t, n) {
				var r = cl();
				try {
					return un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ll(e) {
				var t = cl();
				try {
					un(e)();
				} catch (e) {
					if (dl(t), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function El(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function kl(e, t, n, r, o, a, i) {
				var l = cl();
				try {
					return un(e)(t, n, r, o, a, i);
				} catch (e) {
					if (dl(l), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Il(e, t) {
				var n = cl();
				try {
					un(e)(t);
				} catch (e) {
					if (dl(n), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Tl(e, t, n, r, o) {
				var a = cl();
				try {
					un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Dl(e, t, n, r, o) {
				var a = cl();
				try {
					return un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function xl(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function $l(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function Pl(e, t, n, r, o, a, i, l, s, u) {
				var c = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (dl(c), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Nl(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					return un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ml(e, t, n, r, o, a) {
				var i = cl();
				try {
					un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function wl(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Al(e, t, n, r, o, a, i, l, s, u) {
				var c = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (dl(c), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Fl(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ol(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Bl(e, t, n, r, o, a, i) {
				var l = cl();
				try {
					un(e)(t, n, r, o, a, i);
				} catch (e) {
					if (dl(l), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Wl(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
				var _ = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
				} catch (e) {
					if (dl(_), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ql(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h) {
				var y = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h);
				} catch (e) {
					if (dl(y), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ul(e) {
				var t = cl();
				try {
					return un(e)();
				} catch (e) {
					if (dl(t), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function Vl(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Hl(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Gl(e, t) {
				var n = cl();
				try {
					return un(e)(t);
				} catch (e) {
					if (dl(n), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function zl(e, t, n, r, o, a, i, l, s, u, c) {
				var d = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (dl(d), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function jl(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Kl(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				var p = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s, u, c, d, m);
				} catch (e) {
					if (dl(p), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ql(e, t, n, r, o) {
				var a = cl();
				try {
					return un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Xl(e, t, n, r, o, a, i, l, s, u, c, d) {
				var m = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d);
				} catch (e) {
					if (dl(m), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Yl(e, t, n, r, o, a, i, l, s, u, c) {
				var d = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (dl(d), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Jl(e, t, n, r, o, a, i, l, s, u, c) {
				var d = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (dl(d), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Zl(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function es(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					return un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ts(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ns(e, t, n, r, o, a) {
				var i = cl();
				try {
					un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function rs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
				var g = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
				} catch (e) {
					if (dl(g), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function os(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function as(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function is(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ls(e, t, n, r, o, a, i, l, s, u) {
				var c = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (dl(c), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ss(e, t, n, r, o, a, i, l, s, u, c) {
				var d = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (dl(d), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function us(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function cs(e, t, n, r, o, a, i, l, s, u) {
				var c = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (dl(c), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ds(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					return un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ms(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					return un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ps(e, t, n) {
				var r = cl();
				try {
					return un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function _s(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function fs(e, t, n, r, o, a, i) {
				var l = cl();
				try {
					return un(e)(t, n, r, o, a, i);
				} catch (e) {
					if (dl(l), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function gs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
				var f = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
				} catch (e) {
					if (dl(f), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function hs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v) {
				var S = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v);
				} catch (e) {
					if (dl(S), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ys(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R) {
				var L = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R);
				} catch (e) {
					if (dl(L), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Cs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
				var h = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g);
				} catch (e) {
					if (dl(h), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function bs(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					return un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function vs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b) {
				var v = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b);
				} catch (e) {
					if (dl(v), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ss(e, t, n, r, o, a, i, l, s, u, c, d) {
				var m = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d);
				} catch (e) {
					if (dl(m), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Rs(e, t, n, r, o, a, i, l, s, u) {
				var c = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (dl(c), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ls(e, t, n, r, o, a, i, l, s, u, c) {
				var d = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (dl(d), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Es(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				var p = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m);
				} catch (e) {
					if (dl(p), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ks(e, t, n) {
				var r = cl();
				try {
					un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Is(e, t, n) {
				var r = cl();
				try {
					return un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ts(e, t, n, r, o) {
				var a = cl();
				try {
					return un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ds(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
				var f = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
				} catch (e) {
					if (dl(f), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function xs(e, t, n) {
				var r = cl();
				try {
					un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function $s(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				var p = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s, u, c, d, m);
				} catch (e) {
					if (dl(p), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ps(e, t, n, r) {
				var o = cl();
				try {
					un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ns(e, t, n, r) {
				var o = cl();
				try {
					un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ms(e, t, n, r) {
				var o = cl();
				try {
					un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ws(e, t, n) {
				var r = cl();
				try {
					return un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function As(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					return un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Fs(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Os(e, t, n, r, o, a, i) {
				var l = cl();
				try {
					return un(e)(t, n, r, o, a, i);
				} catch (e) {
					if (dl(l), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Bs(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function Ws(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function qs(e, t, n, r, o, a, i) {
				var l = cl();
				try {
					return un(e)(t, n, r, o, a, i);
				} catch (e) {
					if (dl(l), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Us(e, t, n, r, o) {
				var a = cl();
				try {
					return un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Vs(e, t, n, r, o, a, i, l, s, u) {
				var c = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (dl(c), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Hs(e, t, n, r, o, a, i, l, s, u, c) {
				var d = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (dl(d), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Gs(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function zs(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					return un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function js(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function Ks(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
				var g = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
				} catch (e) {
					if (dl(g), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Qs(e, t) {
				var n = cl();
				try {
					return un(e)(t);
				} catch (e) {
					if (dl(n), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Xs(e, t, n, r, o, a, i, l, s, u, c) {
				var d = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (dl(d), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ys(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Js(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C) {
				var b = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C);
				} catch (e) {
					if (dl(b), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Zs(e, t, n) {
				var r = cl();
				try {
					return un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function eu(e, t, n, r) {
				var o = cl();
				try {
					un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function tu(e, t, n) {
				var r = cl();
				try {
					un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function nu(e, t, n, r, o) {
				var a = cl();
				try {
					un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ru(e, t, n, r, o, a) {
				var i = cl();
				try {
					un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ou(e, t, n, r, o, a, i, l, s, u, c) {
				var d = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (dl(d), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function au(e, t, n, r, o) {
				var a = cl();
				try {
					return un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function iu(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function lu(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function su(e, t) {
				var n = cl();
				try {
					return un(e)(t);
				} catch (e) {
					if (dl(n), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function uu(e, t, n, r, o) {
				var a = cl();
				try {
					return un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function cu(e, t, n, r, o, a, i) {
				var l = cl();
				try {
					un(e)(t, n, r, o, a, i);
				} catch (e) {
					if (dl(l), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function du(e, t, n, r, o, a) {
				var i = cl();
				try {
					un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function mu(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					return un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function pu(e, t, n, r, o) {
				var a = cl();
				try {
					return un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function _u(e, t, n, r) {
				var o = cl();
				try {
					un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function fu(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function gu(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function hu(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function yu(e, t, n, r, o) {
				var a = cl();
				try {
					un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Cu(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function bu(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function vu(e, t, n, r, o, a, i) {
				var l = cl();
				try {
					return un(e)(t, n, r, o, a, i);
				} catch (e) {
					if (dl(l), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Su(e, t, n, r, o, a, i, l, s, u, c) {
				var d = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (dl(d), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ru(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $) {
				var P = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $);
				} catch (e) {
					if (dl(P), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Lu(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Eu(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ku(e, t, n, r) {
				var o = cl();
				try {
					un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Iu(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Tu(e, t, n, r, o) {
				var a = cl();
				try {
					un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Du(e, t, n, r, o, a, i) {
				var l = cl();
				try {
					return un(e)(t, n, r, o, a, i);
				} catch (e) {
					if (dl(l), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function xu(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function $u(e, t) {
				var n = cl();
				try {
					return un(e)(t);
				} catch (e) {
					if (dl(n), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function Pu(e, t) {
				var n = cl();
				try {
					return un(e)(t);
				} catch (e) {
					if (dl(n), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Nu(e, t, n, r, o, a, i, l, s) {
				var u = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (dl(u), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Mu(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
				var _ = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
				} catch (e) {
					if (dl(_), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function wu(e, t, n, r, o) {
				var a = cl();
				try {
					un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Au(e, t, n) {
				var r = cl();
				try {
					return un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Fu(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ou(e, t, n, r, o, a, i, l, s, u) {
				var c = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (dl(c), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Bu(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				var p = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u, c, d, m);
				} catch (e) {
					if (dl(p), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Wu(e, t, n, r, o) {
				var a = cl();
				try {
					un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function qu(e, t, n, r, o, a, i, l, s, u) {
				var c = cl();
				try {
					return un(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (dl(c), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Uu(e, t, n) {
				var r = cl();
				try {
					return un(e)(t, n);
				} catch (e) {
					if (dl(r), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Vu(e, t, n, r, o, a, i, l) {
				var s = cl();
				try {
					un(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (dl(s), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Hu(e, t) {
				var n = cl();
				try {
					un(e)(t);
				} catch (e) {
					if (dl(n), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Gu(e) {
				var t = cl();
				try {
					return un(e)();
				} catch (e) {
					if (dl(t), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function zu(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function ju(e, t, n, r, o, a) {
				var i = cl();
				try {
					return un(e)(t, n, r, o, a);
				} catch (e) {
					if (dl(i), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Ku(e, t, n, r, o) {
				var a = cl();
				try {
					return un(e)(t, n, r, o);
				} catch (e) {
					if (dl(a), !(e instanceof De)) throw e;
					return al(1, 0), BigInt(0);
				}
			}
			function Qu(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Xu(e, t, n, r) {
				var o = cl();
				try {
					return un(e)(t, n, r);
				} catch (e) {
					if (dl(o), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			function Yu(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
				var g = cl();
				try {
					un(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
				} catch (e) {
					if (dl(g), !(e instanceof De)) throw e;
					al(1, 0);
				}
			}
			g.keepRuntimeAlive = ce, g.wasmMemory = O, g.GROWABLE_HEAP_U8 = l, g.GROWABLE_HEAP_F32 = _, g.ExitStatus = _t, g.FS = jt, g.PThread = tn, g.registeredTypes = rr;
			var Ju = [
				"writeI53ToI64",
				"writeI53ToI64Clamped",
				"writeI53ToI64Signaling",
				"writeI53ToU64Clamped",
				"writeI53ToU64Signaling",
				"readI53FromI64",
				"readI53FromU64",
				"convertI32PairToI53",
				"convertI32PairToI53Checked",
				"convertU32PairToI53",
				"inetNtop4",
				"inetNtop6",
				"readSockaddr",
				"writeSockaddr",
				"getCallstack",
				"emscriptenLog",
				"convertPCtoSourceLocation",
				"jstoi_s",
				"listenOnce",
				"autoResumeAudioContext",
				"getDynCaller",
				"dynCall",
				"setWasmTableEntry",
				"asmjsMangle",
				"getNativeTypeSize",
				"STACK_SIZE",
				"STACK_ALIGN",
				"POINTER_SIZE",
				"ASSERTIONS",
				"getCFunc",
				"ccall",
				"cwrap",
				"uleb128Encode",
				"sigToWasmTypes",
				"generateFuncType",
				"convertJsFunctionToWasm",
				"getEmptyTableSlot",
				"updateTableMap",
				"getFunctionAddress",
				"addFunction",
				"removeFunction",
				"reallyNegative",
				"unSign",
				"strLen",
				"reSign",
				"formatString",
				"intArrayToString",
				"AsciiToString",
				"stringToUTF8OnStack",
				"registerKeyEventCallback",
				"maybeCStringToJsString",
				"findEventTarget",
				"findCanvasEventTarget",
				"getBoundingClientRect",
				"fillMouseEventData",
				"registerMouseEventCallback",
				"registerWheelEventCallback",
				"registerUiEventCallback",
				"registerFocusEventCallback",
				"fillDeviceOrientationEventData",
				"registerDeviceOrientationEventCallback",
				"fillDeviceMotionEventData",
				"registerDeviceMotionEventCallback",
				"screenOrientation",
				"fillOrientationChangeEventData",
				"registerOrientationChangeEventCallback",
				"fillFullscreenChangeEventData",
				"registerFullscreenChangeEventCallback",
				"JSEvents_requestFullscreen",
				"JSEvents_resizeCanvasForFullscreen",
				"registerRestoreOldStyle",
				"hideEverythingExceptGivenElement",
				"restoreHiddenElements",
				"setLetterbox",
				"softFullscreenResizeWebGLRenderTarget",
				"doRequestFullscreen",
				"fillPointerlockChangeEventData",
				"registerPointerlockChangeEventCallback",
				"registerPointerlockErrorEventCallback",
				"requestPointerLock",
				"fillVisibilityChangeEventData",
				"registerVisibilityChangeEventCallback",
				"registerTouchEventCallback",
				"fillGamepadEventData",
				"registerGamepadEventCallback",
				"registerBeforeUnloadEventCallback",
				"fillBatteryEventData",
				"battery",
				"registerBatteryEventCallback",
				"setCanvasElementSizeCallingThread",
				"setCanvasElementSizeMainThread",
				"setCanvasElementSize",
				"getCanvasSizeCallingThread",
				"getCanvasSizeMainThread",
				"getCanvasElementSize",
				"jsStackTrace",
				"stackTrace",
				"checkWasiClock",
				"wasiRightsToMuslOFlags",
				"wasiOFlagsToMuslOFlags",
				"createDyncallWrapper",
				"setImmediateWrapped",
				"clearImmediateWrapped",
				"polyfillSetImmediate",
				"getPromise",
				"makePromise",
				"idsToPromises",
				"makePromiseCallback",
				"getSocketFromFD",
				"getSocketAddress",
				"_setNetworkCallback",
				"heapObjectForWebGLType",
				"heapAccessShiftForWebGLHeap",
				"webgl_enable_ANGLE_instanced_arrays",
				"webgl_enable_OES_vertex_array_object",
				"webgl_enable_WEBGL_draw_buffers",
				"webgl_enable_WEBGL_multi_draw",
				"emscriptenWebGLGet",
				"computeUnpackAlignedImageSize",
				"colorChannelsInGlTextureFormat",
				"emscriptenWebGLGetTexPixelData",
				"__glGenObject",
				"emscriptenWebGLGetUniform",
				"webglGetUniformLocation",
				"webglPrepareUniformLocationsBeforeFirstUse",
				"webglGetLeftBracePos",
				"emscriptenWebGLGetVertexAttrib",
				"__glGetActiveAttribOrUniform",
				"writeGLArray",
				"emscripten_webgl_destroy_context_before_on_calling_thread",
				"registerWebGlEventCallback",
				"runAndAbortIfError",
				"SDL_unicode",
				"SDL_ttfContext",
				"SDL_audio",
				"GLFW_Window",
				"ALLOC_NORMAL",
				"ALLOC_STACK",
				"allocate",
				"writeStringToMemory",
				"writeAsciiToMemory",
				"registerInheritedInstance",
				"unregisterInheritedInstance",
				"enumReadValueFromPointer",
				"validateThis",
				"getStringOrSymbol",
				"craftEmvalAllocator",
				"emval_get_global",
				"emval_lookupTypes",
				"emval_allocateDestructors",
				"emval_addMethodCaller"
			];
			Ju.forEach(Ue);
			var Zu = [
				"run",
				"addOnPreRun",
				"addOnInit",
				"addOnPreMain",
				"addOnExit",
				"addOnPostRun",
				"addRunDependency",
				"removeRunDependency",
				"FS_createFolder",
				"FS_createPath",
				"FS_createDataFile",
				"FS_createLazyFile",
				"FS_createLink",
				"FS_createDevice",
				"FS_unlink",
				"out",
				"err",
				"callMain",
				"abort",
				"wasmTable",
				"wasmExports",
				"stackAlloc",
				"stackSave",
				"stackRestore",
				"getTempRet0",
				"setTempRet0",
				"GROWABLE_HEAP_I8",
				"GROWABLE_HEAP_I16",
				"GROWABLE_HEAP_U16",
				"GROWABLE_HEAP_I32",
				"GROWABLE_HEAP_U32",
				"GROWABLE_HEAP_F64",
				"writeStackCookie",
				"checkStackCookie",
				"MAX_INT53",
				"MIN_INT53",
				"bigintToI53Checked",
				"ptrToString",
				"zeroMemory",
				"exitJS",
				"getHeapMax",
				"growMemory",
				"ENV",
				"MONTH_DAYS_REGULAR",
				"MONTH_DAYS_LEAP",
				"MONTH_DAYS_REGULAR_CUMULATIVE",
				"MONTH_DAYS_LEAP_CUMULATIVE",
				"isLeapYear",
				"ydayFromDate",
				"arraySum",
				"addDays",
				"ERRNO_CODES",
				"ERRNO_MESSAGES",
				"setErrNo",
				"inetPton4",
				"inetPton6",
				"DNS",
				"getHostByName",
				"Protocols",
				"Sockets",
				"initRandomFill",
				"randomFill",
				"timers",
				"warnOnce",
				"UNWIND_CACHE",
				"readEmAsmArgsArray",
				"readEmAsmArgs",
				"runEmAsmFunction",
				"runMainThreadEmAsm",
				"jstoi_q",
				"getExecutableName",
				"getWasmTableEntry",
				"handleException",
				"runtimeKeepalivePush",
				"runtimeKeepalivePop",
				"callUserCallback",
				"maybeExit",
				"safeSetTimeout",
				"asyncLoad",
				"alignMemory",
				"mmapAlloc",
				"handleAllocatorInit",
				"HandleAllocator",
				"freeTableIndexes",
				"functionsInTableMap",
				"setValue",
				"getValue",
				"PATH",
				"PATH_FS",
				"UTF8Decoder",
				"UTF8ArrayToString",
				"UTF8ToString",
				"stringToUTF8Array",
				"stringToUTF8",
				"lengthBytesUTF8",
				"intArrayFromString",
				"stringToAscii",
				"UTF16Decoder",
				"UTF16ToString",
				"stringToUTF16",
				"lengthBytesUTF16",
				"UTF32ToString",
				"stringToUTF32",
				"lengthBytesUTF32",
				"stringToNewUTF8",
				"writeArrayToMemory",
				"JSEvents",
				"specialHTMLTargets",
				"currentFullscreenStrategy",
				"restoreOldWindowedStyle",
				"demangle",
				"demangleAll",
				"getEnvStrings",
				"doReadv",
				"doWritev",
				"promiseMap",
				"uncaughtExceptionCount",
				"exceptionLast",
				"exceptionCaught",
				"ExceptionInfo",
				"findMatchingCatch",
				"getExceptionMessageCommon",
				"incrementExceptionRefcount",
				"decrementExceptionRefcount",
				"getExceptionMessage",
				"Browser",
				"setMainLoop",
				"wget",
				"SYSCALLS",
				"preloadPlugins",
				"FS_createPreloadedFile",
				"FS_modeStringToFlags",
				"FS_getMode",
				"FS_stdin_getChar_buffer",
				"FS_stdin_getChar",
				"MEMFS",
				"TTY",
				"PIPEFS",
				"SOCKFS",
				"tempFixedLengthArray",
				"miniTempWebGLFloatBuffers",
				"miniTempWebGLIntBuffers",
				"GL",
				"emscripten_webgl_power_preferences",
				"AL",
				"GLUT",
				"EGL",
				"GLEW",
				"IDBStore",
				"SDL",
				"SDL_gfx",
				"GLFW",
				"allocateUTF8",
				"allocateUTF8OnStack",
				"terminateWorker",
				"killThread",
				"cleanupThread",
				"registerTLSInit",
				"cancelThread",
				"spawnThread",
				"exitOnMainThread",
				"proxyToMainThread",
				"emscripten_receive_on_main_thread_js_callArgs",
				"invokeEntryPoint",
				"checkMailbox",
				"InternalError",
				"BindingError",
				"throwInternalError",
				"throwBindingError",
				"awaitingDependencies",
				"typeDependencies",
				"tupleRegistrations",
				"structRegistrations",
				"sharedRegisterType",
				"whenDependentTypesAreResolved",
				"embind_charCodes",
				"embind_init_charCodes",
				"readLatin1String",
				"getTypeName",
				"heap32VectorToArray",
				"requireRegisteredType",
				"UnboundTypeError",
				"PureVirtualError",
				"init_embind",
				"throwUnboundTypeError",
				"ensureOverloadTable",
				"exposePublicSymbol",
				"replacePublicSymbol",
				"extendError",
				"createNamedFunction",
				"embindRepr",
				"registeredInstances",
				"getBasestPointer",
				"getInheritedInstance",
				"getInheritedInstanceCount",
				"getLiveInheritedInstances",
				"registeredPointers",
				"registerType",
				"getShiftFromSize",
				"integerReadValueFromPointer",
				"floatReadValueFromPointer",
				"simpleReadValueFromPointer",
				"runDestructors",
				"craftInvokerFunction",
				"embind__requireFunction",
				"genericPointerToWireType",
				"constNoSmartPtrRawPointerToWireType",
				"nonConstNoSmartPtrRawPointerToWireType",
				"init_RegisteredPointer",
				"RegisteredPointer",
				"RegisteredPointer_getPointee",
				"RegisteredPointer_destructor",
				"RegisteredPointer_deleteObject",
				"RegisteredPointer_fromWireType",
				"runDestructor",
				"releaseClassHandle",
				"finalizationRegistry",
				"detachFinalizer_deps",
				"detachFinalizer",
				"attachFinalizer",
				"makeClassHandle",
				"init_ClassHandle",
				"ClassHandle",
				"ClassHandle_isAliasOf",
				"throwInstanceAlreadyDeleted",
				"ClassHandle_clone",
				"ClassHandle_delete",
				"deletionQueue",
				"ClassHandle_isDeleted",
				"ClassHandle_deleteLater",
				"flushPendingDeletes",
				"delayFunction",
				"setDelayFunction",
				"RegisteredClass",
				"shallowCopyInternalPointer",
				"downcastPointer",
				"upcastPointer",
				"char_0",
				"char_9",
				"makeLegalFunctionName",
				"emval_handles",
				"emval_symbols",
				"init_emval",
				"count_emval_handles",
				"Emval",
				"emval_newers",
				"emval_methodCallers",
				"emval_registeredMethods",
				"IDBFS"
			];
			Zu.forEach(Ve);
			var ec;
			Ce = function e() {
				ec || nc(), ec || (Ce = e);
			};
			function tc() {
				V(!I), ll(), re();
			}
			function nc() {
				if (he > 0) return;
				if (I || tc(), I) {
					h(g), me(), startWorker(g);
					return;
				}
				if (de(), he > 0) return;
				function e() {
					ec || (ec = !0, g.calledRun = !0, !q && (me(), h(g), g.onRuntimeInitialized && g.onRuntimeInitialized(), V(!g._main, "compiled without a main, but one is present. if you added it from JS, use Module[\"onRuntimeInitialized\"]"), pe()));
				}
				g.setStatus ? (g.setStatus("Running..."), setTimeout(function() {
					setTimeout(function() {
						g.setStatus("");
					}, 1), e();
				}, 1)) : e(), oe();
			}
			function rc() {
				var e = M, t = w, n = !1;
				M = w = function(t) {
					n = !0;
				};
				try {
					Mi(0), ["stdout", "stderr"].forEach(function(e) {
						var t = jt.analyzePath("/dev/" + e);
						if (t) {
							var r = t.object, o = r.rdev, a = Pt.ttys[o];
							a && a.output && a.output.length && (n = !0);
						}
					});
				} catch (e) {}
				M = e, w = t, n && mn("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
			}
			if (g.preInit) for (typeof g.preInit == "function" && (g.preInit = [g.preInit]); g.preInit.length > 0;) g.preInit.pop()();
			return nc(), r.ready;
		};
	})();
	typeof l == "object" && typeof i == "object" ? i.exports = c : typeof define == "function" && define.amd && define([], function() {
		return c;
	});
}), 34);
