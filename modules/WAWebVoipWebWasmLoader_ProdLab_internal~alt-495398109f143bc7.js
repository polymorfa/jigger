__d("WAWebVoipWebWasmLoader_ProdLab_internal", [
	"WAWebVoipQplHelpers",
	"WAWebVoipWasmArtifactRegistry",
	"WAWebVoipWebWasmWorkerResource",
	"WorkerBundleResource",
	"WorkerClient",
	"WorkerMessagePort",
	"bx"
], (function(t, n, r, o, a, i, l) {
	var e = ["type", "__name"], s, u = r("bx").getURL(r("bx")("78864"), { cacheBreaker: "1786009065063" }), c = (function() {
		var t = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0;
		return function(a) {
			var i = this;
			a === void 0 && (a = {});
			function l() {
				return B.buffer != G.buffer && te(), G;
			}
			function c() {
				return B.buffer != G.buffer && te(), z;
			}
			function d() {
				return B.buffer != G.buffer && te(), j;
			}
			function m() {
				return B.buffer != G.buffer && te(), K;
			}
			function p() {
				return B.buffer != G.buffer && te(), Q;
			}
			function _() {
				return B.buffer != G.buffer && te(), X;
			}
			function f() {
				return B.buffer != G.buffer && te(), Y;
			}
			function g() {
				return B.buffer != G.buffer && te(), ee;
			}
			var h = a;
			o("WAWebVoipWasmArtifactRegistry").recordSelectedVoipWasmUri(u);
			var y, C;
			h.ready = new Promise(function(e, t) {
				y = e, C = t;
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
				Object.getOwnPropertyDescriptor(h.ready, e) || Object.defineProperty(h.ready, e, {
					get: function() {
						return Ee("You are getting " + e + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
					},
					set: function() {
						return Ee("You are setting " + e + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
					}
				});
			});
			var b = Object.assign({}, h), v = [], S = "./this.program", R = function(t, n) {
				throw n;
			}, L = typeof window == "object", E = typeof importScripts == "function", k = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", I = !L && !k && !E;
			if (h.ENVIRONMENT) throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
			var T = h.ENVIRONMENT_IS_PTHREAD || !1, D = "";
			function x(e) {
				return h.locateFile ? h.locateFile(e, D) : D + e;
			}
			var $, P, N, M;
			if (I) {
				if (typeof process == "object" && typeof n == "function" || typeof window == "object" || typeof importScripts == "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
				typeof read != "undefined" && ($ = read), N = function(t) {
					if (typeof readbuffer == "function") return new Uint8Array(readbuffer(t));
					var e = read(t, "binary");
					return H(typeof e == "object"), e;
				}, P = function(t, n, r) {
					setTimeout(function() {
						return n(N(t));
					});
				}, typeof clearTimeout == "undefined" && (globalThis.clearTimeout = function(e) {}), typeof setTimeout == "undefined" && (globalThis.setTimeout = function(e) {
					return typeof e == "function" ? e() : Ee();
				}), typeof scriptArgs != "undefined" ? v = scriptArgs : typeof arguments != "undefined" && (v = arguments), typeof quit == "function" && (R = function(t, n) {
					throw setTimeout(function() {
						if (!(n instanceof ft)) {
							var e = n;
							n && typeof n == "object" && n.stack && (e = [n, n.stack]), A("exiting due to exception: " + e);
						}
						quit(t);
					}), n;
				}), typeof print != "undefined" && (typeof console == "undefined" && (console = {}), console.log = print, console.warn = console.error = typeof printErr != "undefined" ? printErr : print);
			} else if (L || E) {
				if (E ? D = self.location.href : typeof document != "undefined" && document.currentScript && (D = document.currentScript.src), t && (D = t), D.indexOf("blob:") !== 0 ? D = D.substr(0, D.replace(/[?#].*/, "").lastIndexOf("/") + 1) : D = "", !(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
				$ = function(t) {
					var e = new XMLHttpRequest();
					return e.open("GET", t, !1), e.send(null), e.responseText;
				}, E && (N = function(t) {
					var e = new XMLHttpRequest();
					return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response);
				}), P = function(t, n, r) {
					var e = new XMLHttpRequest();
					e.open("GET", t, !0), e.responseType = "arraybuffer", e.onload = function() {
						if (e.status == 200 || e.status == 0 && e.response) {
							n(e.response);
							return;
						}
						r();
					}, e.onerror = r, e.send(null);
				}, M = function(t) {
					return document.title = t;
				};
			} else throw new Error("environment detection error");
			var w = h.print || console.log.bind(console), A = h.printErr || console.error.bind(console);
			Object.assign(h, b), b = null, Ii(), h.arguments && (v = h.arguments), Be("arguments", "arguments_"), h.thisProgram && (S = h.thisProgram), Be("thisProgram", "thisProgram"), h.quit && (R = h.quit), Be("quit", "quit_"), H(typeof h.memoryInitializerPrefixURL == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), H(typeof h.pthreadMainPrefixURL == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), H(typeof h.cdInitializerPrefixURL == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), H(typeof h.filePackagePrefixURL == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), H(typeof h.read == "undefined", "Module.read option was removed (modify read_ in JS)"), H(typeof h.readAsync == "undefined", "Module.readAsync option was removed (modify readAsync in JS)"), H(typeof h.readBinary == "undefined", "Module.readBinary option was removed (modify readBinary in JS)"), H(typeof h.setWindowTitle == "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)"), H(typeof h.TOTAL_MEMORY == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), Be("asm", "wasmExports"), Be("read", "read_"), Be("readAsync", "readAsync"), Be("readBinary", "readBinary"), Be("setWindowTitle", "setWindowTitle"), H(L || E || k, "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)"), H(!k, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable."), H(!I, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");
			var F;
			h.wasmBinary && (F = h.wasmBinary), Be("wasmBinary", "wasmBinary");
			var O = h.noExitRuntime || !0;
			Be("noExitRuntime", "noExitRuntime"), typeof WebAssembly != "object" && Ee("no native wasm support detected");
			var B, W, q, U = !1, V;
			function H(e, t) {
				e || Ee("Assertion failed" + (t ? ": " + t : ""));
			}
			var G, z, j, K, Q, X, Y, J, Z, ee;
			function te() {
				var e = B.buffer;
				h.HEAP8 = G = new Int8Array(e), h.HEAP16 = j = new Int16Array(e), h.HEAP32 = Q = new Int32Array(e), h.HEAPU8 = z = new Uint8Array(e), h.HEAPU16 = K = new Uint16Array(e), h.HEAPU32 = X = new Uint32Array(e), h.HEAPF32 = Y = new Float32Array(e), h.HEAPF64 = ee = new Float64Array(e), h.HEAP64 = J = new BigInt64Array(e), h.HEAPU64 = Z = new BigUint64Array(e);
			}
			H(!h.STACK_SIZE, "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"), H(typeof Int32Array != "undefined" && typeof Float64Array != "undefined" && Int32Array.prototype.subarray != null && Int32Array.prototype.set != null, "JS engine does not provide full typed array support");
			var ne = h.INITIAL_MEMORY || 10485760;
			if (Be("INITIAL_MEMORY", "INITIAL_MEMORY"), H(ne >= 1048576, "INITIAL_MEMORY should be larger than STACK_SIZE, was " + ne + "! (STACK_SIZE=1048576)"), T) B = h.wasmMemory;
			else if (h.wasmMemory) B = h.wasmMemory;
			else if (B = new WebAssembly.Memory({
				initial: ne / 65536,
				maximum: 2147483648 / 65536,
				shared: !0
			}), !(B.buffer instanceof SharedArrayBuffer)) throw A("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), k && A("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"), Error("bad memory");
			te(), ne = B.buffer.byteLength, H(ne % 65536 === 0);
			var re;
			function oe() {
				var e = nl();
				H((e & 3) == 0), e == 0 && (e += 4), _()[e >> 2] = 34821223, _()[e + 4 >> 2] = 2310721022, _()[0] = 1668509029;
			}
			function ae() {
				if (!U) {
					var e = nl();
					e == 0 && (e += 4);
					var t = _()[e >> 2], n = _()[e + 4 >> 2];
					(t != 34821223 || n != 2310721022) && Ee("Stack overflow! Stack cookie has been overwritten at " + en(e) + ", expected hex dwords 0x89BACDFE and 0x2135467, but received " + en(n) + " " + en(t)), _()[0] != 1668509029 && Ee("Runtime error: The application has corrupted its heap memory area (address zero)!");
				}
			}
			(function() {
				var e = new Int16Array(1), t = new Int8Array(e.buffer);
				if (e[0] = 25459, t[0] !== 115 || t[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
			})();
			var ie = [], le = [], se = [], ue = !1, ce = 0;
			function de() {
				return O || ce > 0;
			}
			function me() {
				if (H(!T), h.preRun) for (typeof h.preRun == "function" && (h.preRun = [h.preRun]); h.preRun.length;) fe(h.preRun.shift());
				rn(ie);
			}
			function pe() {
				H(!ue), ue = !0, !T && (ae(), !h.noFSInit && !Kt.init.initialized && Kt.init(), Kt.ignorePermissions = !1, Nt.init(), rn(le));
			}
			function _e() {
				if (ae(), !T) {
					if (h.postRun) for (typeof h.postRun == "function" && (h.postRun = [h.postRun]); h.postRun.length;) he(h.postRun.shift());
					rn(se);
				}
			}
			function fe(e) {
				ie.unshift(e);
			}
			function ge(e) {
				le.unshift(e);
			}
			function he(e) {
				se.unshift(e);
			}
			H(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), H(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), H(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), H(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
			var ye = 0, Ce = null, be = null, ve = {};
			function Se(e) {
				for (var t = e;;) {
					if (!ve[e]) return e;
					e = t + Math.random();
				}
			}
			function Re(e) {
				ye++, h.monitorRunDependencies && h.monitorRunDependencies(ye), e ? (H(!ve[e]), ve[e] = 1, Ce === null && typeof setInterval != "undefined" && (Ce = setInterval(function() {
					if (U) {
						clearInterval(Ce), Ce = null;
						return;
					}
					var e = !1;
					for (var t in ve) e || (e = !0, A("still waiting on run dependencies:")), A("dependency: " + t);
					e && A("(end of list)");
				}, 1e4))) : A("warning: run dependency added without ID");
			}
			function Le(e) {
				if (ye--, h.monitorRunDependencies && h.monitorRunDependencies(ye), e ? (H(ve[e]), delete ve[e]) : A("warning: run dependency removed without ID"), ye == 0 && (Ce !== null && (clearInterval(Ce), Ce = null), be)) {
					var t = be;
					be = null, t();
				}
			}
			function Ee(e) {
				h.onAbort && h.onAbort(e), e = "Aborted(" + e + ")", A(e), U = !0, V = 1;
				var t = new WebAssembly.RuntimeError(e);
				throw C(t), t;
			}
			var ke = "data:application/octet-stream;base64,";
			function Ie(e) {
				return e.startsWith(ke);
			}
			function Te(e) {
				return e.startsWith("file://");
			}
			function De(e) {
				return function() {
					H(ue, "native function `" + e + "` called before runtime initialization");
					var t = W[e];
					return H(t, "exported native function `" + e + "` not found"), t.apply(null, arguments);
				};
			}
			var xe = (function(e) {
				function t() {
					return e.apply(this, arguments) || this;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(babelHelpers.wrapNativeSuper(Error)), $e = (function(e) {
				function t() {
					return e.apply(this, arguments) || this;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(xe), Pe = (function(e) {
				function t(t) {
					var n;
					n = e.call(this, t) || this, n.excPtr = t;
					var r = un(t);
					return n.name = r[0], n.message = r[1], n;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(xe), Ne = u;
			function Me(e) {
				if (e == Ne && F) return new Uint8Array(F);
				if (N) return N(e);
				throw "both async and sync fetching of the wasm failed";
			}
			function we(e) {
				return !F && (L || E) && typeof fetch == "function" ? fetch(e, { credentials: "same-origin" }).then(function(t) {
					if (!t.ok) throw "failed to load wasm binary file at '" + e + "'";
					return t.arrayBuffer();
				}).catch(function() {
					return Me(e);
				}) : Promise.resolve().then(function() {
					return Me(e);
				});
			}
			function Ae(e, t, n) {
				return we(e).then(function(e) {
					return WebAssembly.instantiate(e, t);
				}).then(function(e) {
					return e;
				}).then(n, function(e) {
					A("failed to asynchronously prepare wasm: " + e), Te(Ne) && A("warning: Loading from a file URI (" + Ne + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"), Ee(e);
				});
			}
			function Fe(e, t, n, r) {
				return !e && typeof WebAssembly.instantiateStreaming == "function" && !Ie(t) && typeof fetch == "function" ? fetch(t, { credentials: "same-origin" }).then(function(e) {
					var o = WebAssembly.instantiateStreaming(e, n);
					return o.then(r, function(e) {
						return A("wasm streaming compile failed: " + e), A("falling back to ArrayBuffer instantiation"), Ae(t, n, r);
					});
				}) : Ae(t, n, r);
			}
			function Oe() {
				var e = {
					env: Ti,
					wasi_snapshot_preview1: Ti
				};
				function t(e, t) {
					var n = e.exports;
					return W = n, mn(W._emscripten_tls_init), re = W.__indirect_function_table, H(re, "table not found in wasm exports"), ge(W.__wasm_call_ctors), q = t, Le("wasm-instantiate"), o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_FETCH_END), n;
				}
				o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WASM_FETCH_START), Re("wasm-instantiate");
				var n = h;
				function r(e) {
					H(h === n, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), n = null, t(e.instance, e.module);
				}
				if (h.instantiateWasm) try {
					return h.instantiateWasm(e, t);
				} catch (e) {
					A("Module.instantiateWasm callback failed with error: " + e), C(e);
				}
				return Fe(F, Ne, e, r).catch(C), {};
			}
			function Be(e, t, n) {
				n === void 0 && (n = !0), Object.getOwnPropertyDescriptor(h, e) || Object.defineProperty(h, e, {
					configurable: !0,
					get: function() {
						var r = n ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)" : "";
						Ee("`Module." + e + "` has been replaced by `" + t + "`" + r);
					}
				});
			}
			function We(e) {
				Object.getOwnPropertyDescriptor(h, e) && Ee("`Module." + e + "` was supplied but `" + e + "` not included in INCOMING_MODULE_JS_API");
			}
			function qe(e) {
				return e === "FS_createPath" || e === "FS_createDataFile" || e === "FS_createPreloadedFile" || e === "FS_unlink" || e === "addRunDependency" || e === "FS_createLazyFile" || e === "FS_createDevice" || e === "removeRunDependency";
			}
			function Ue(e, t) {
				typeof globalThis != "undefined" && Object.defineProperty(globalThis, e, {
					configurable: !0,
					get: function() {
						pn("`" + e + "` is not longer defined by emscripten. " + t);
					}
				});
			}
			Ue("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
			function Ve(e) {
				typeof globalThis != "undefined" && !Object.getOwnPropertyDescriptor(globalThis, e) && Object.defineProperty(globalThis, e, {
					configurable: !0,
					get: function() {
						var t = "`" + e + "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line", n = e;
						n.startsWith("_") || (n = "$" + e), t += " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='" + n + "')", qe(e) && (t += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), pn(t);
					}
				}), He(e);
			}
			function He(e) {
				Object.getOwnPropertyDescriptor(h, e) || Object.defineProperty(h, e, {
					configurable: !0,
					get: function() {
						var t = "'" + e + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)";
						qe(e) && (t += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), Ee(t);
					}
				});
			}
			function Ge(e) {
				console.warn.apply(console, arguments);
			}
			var ze = {
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
					typeof Kt != "undefined" && Kt.syncfs && Kt.syncfs(!1, function(e) {});
				}
			};
			function je(e, t) {
				var n = t ? Qt(t) : "";
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onCallEvent({
					eventType: e,
					userData: "",
					eventDataJson: n
				});
			}
			function Ke(e) {
				self.__inMLInference = e;
			}
			function Qe() {
				var e = Ee;
				Ee = function(n) {
					if (self.__inMLInference && h._wasm_throw_ml_abort) {
						h.onAbort && h.onAbort(n), n = "Aborted(" + n + ")", A(n);
						var t = Dt(n) + 1, r = dl(), o = pl(t);
						Hn(n, o, t), h._wasm_throw_ml_abort(o), ml(r);
						return;
					}
					e(n);
				};
			}
			function Xe() {
				var e = self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getPersistentDirectoryPath();
				if (e) {
					var t = Dt(e) + 1, n = Pi(t);
					return Hn(e, n, t), n;
				}
				return null;
			}
			function Ye(e) {
				var t = e ? Qt(e) : null, n = self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBweModelPath({ versionName: t });
				if (n) {
					var r = Dt(n) + 1, o = Pi(r);
					return Hn(n, o, r), o;
				}
				return null;
			}
			function Je(e, t) {
				if (t == null) {
					var n = new Error("get_random_bytes_js: rawBytesPtr is null");
					throw n.stack, n;
				}
				var r = new Uint8Array(e), o = self.crypto.getRandomValues(r);
				yi(o, t);
			}
			function Ze(e) {
				var t = Qt(e);
				return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.isParticipantKnownContact({ jid: t });
			}
			function et(e, t, n, r, o, a, i, l, s, u) {
				var d = c(), m = new Uint8Array(n);
				m.set(d.subarray(t, t + n));
				var p = Qt(e);
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks && self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs && self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs({
					userJid: p,
					frameBuffer: m.buffer,
					width: r,
					height: o,
					orientation: a,
					format: i,
					timestamp: l,
					isKeyFrame: s,
					isScreenShare: u
				});
			}
			function tt(e, t, n, r) {
				var o = c(), a = new Uint8Array(r);
				a.set(o.subarray(n, n + r));
				var i = Qt(t), l = Qt(e);
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onSignalingXmpp({
					peerJid: l,
					callId: i,
					xmlPayload: a
				});
			}
			function nt(e, t, n, r) {
				var o = c(), a = o.length;
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
					ip: Qt(n),
					port: r
				});
			}
			function rt(e, t, n, r, o) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initCaptureDriverJS({
					sample_rate: e,
					channels: t,
					bits_per_sample: n,
					frames_per_chunk: r,
					device_type: o
				});
			}
			function ot(e) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startCaptureJS({ device_type: e });
			}
			function at(e) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopCaptureJS({ device_type: e });
			}
			function it(e, t, n, r) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.initPlaybackDriverJS({
					sample_rate: e,
					channels: t,
					bits_per_sample: n,
					frames_per_chunk: r
				});
			}
			function lt() {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startPlaybackJS();
			}
			function st() {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopPlaybackJS();
			}
			function ut() {
				return self.WhatsAppVoipWasmWorkerCompatibleCallbacks.getBrowserAudioProcessingStatus();
			}
			function ct(e, t, n) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startDesktopCaptureJS({
					width: e,
					height: t,
					max_fps: n
				});
			}
			function dt() {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopDesktopCaptureJS();
			}
			function mt(e, t, n, r, o) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.startVideoCaptureJS({
					camera_id: Qt(e),
					width: t,
					height: n,
					max_fps: r,
					isAVUpgrade: !!o
				});
			}
			function pt() {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.stopVideoCaptureJS();
			}
			function _t(e, t) {
				var n = t ? Qt(t).trim() : "";
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
					level: e,
					message: n
				});
			}
			function ft(e) {
				this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e;
			}
			var gt = function(t) {
				t.terminate(), t.removeAllMessageListeners("cmd"), t.addMessageListener("cmd", function(e) {
					var n = e.cmd;
					A("received \"" + n + "\" command from terminated worker: " + t.workerID);
				});
			};
			function ht(e) {
				H(!T, "Internal Error! killThread() can only ever be called from main application thread!"), H(e, "Internal Error! Null pthread_ptr in killThread!");
				var t = nn.pthreads[e];
				delete nn.pthreads[e], gt(t), rl(e), nn.runningWorkers.splice(nn.runningWorkers.indexOf(t), 1), t.pthread_ptr = 0;
			}
			function yt(e) {
				H(!T, "Internal Error! cancelThread() can only ever be called from main application thread!"), H(e, "Internal Error! Null pthread_ptr in cancelThread!");
				var t = nn.pthreads[e];
				t.postMessage({
					cmd: "cancel",
					type: "cmd"
				});
			}
			function Ct(e) {
				H(!T, "Internal Error! cleanupThread() can only ever be called from main application thread!"), H(e, "Internal Error! Null pthread_ptr in cleanupThread!");
				var t = nn.pthreads[e];
				H(t), nn.returnWorkerToPool(t);
			}
			var bt = function(t, n) {
				return c().fill(0, t, t + n), t;
			};
			function vt(e) {
				H(!T, "Internal Error! spawnThread() can only ever be called from main application thread!"), H(e.pthread_ptr, "Internal error, no pthread ptr!");
				var t = nn.getNewWorker();
				if (!t) return 6;
				H(!t.pthread_ptr, "Internal error!"), nn.runningWorkers.push(t), nn.pthreads[e.pthread_ptr] = t, t.pthread_ptr = e.pthread_ptr;
				var n = {
					cmd: "run",
					start_routine: e.startRoutine,
					arg: e.arg,
					pthread_ptr: e.pthread_ptr
				};
				return t.postMessage(babelHelpers.extends({}, n, { type: "cmd" }), e.transferList), 0;
			}
			var St = {
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
					var e = St.isAbs(t), n = t.substr(-1) === "/";
					return t = St.normalizeArray(t.split("/").filter(function(e) {
						return !!e;
					}), !e).join("/"), !t && !e && (t = "."), t && n && (t += "/"), (e ? "/" : "") + t;
				},
				dirname: function(t) {
					var e = St.splitPath(t), n = e[0], r = e[1];
					return !n && !r ? "." : (r && (r = r.substr(0, r.length - 1)), n + r);
				},
				basename: function(t) {
					if (t === "/") return "/";
					t = St.normalize(t), t = t.replace(/\/$/, "");
					var e = t.lastIndexOf("/");
					return e === -1 ? t : t.substr(e + 1);
				},
				join: function() {
					var e = Array.prototype.slice.call(arguments);
					return St.normalize(e.join("/"));
				},
				join2: function(t, n) {
					return St.normalize(t + "/" + n);
				}
			}, Rt = function() {
				if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return function(e) {
					return e.set(crypto.getRandomValues(new Uint8Array(e.byteLength))), e;
				};
				Ee("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
			}, Lt = function(t) {
				return (Lt = Rt())(t);
			}, Et = {
				resolve: function() {
					for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
						var r = n >= 0 ? arguments[n] : Kt.cwd();
						if (typeof r != "string") throw new TypeError("Arguments to path.resolve must be strings");
						if (!r) return "";
						e = r + "/" + e, t = St.isAbs(r);
					}
					return e = St.normalizeArray(e.split("/").filter(function(e) {
						return !!e;
					}), !t).join("/"), (t ? "/" : "") + e || ".";
				},
				relative: function(t, n) {
					t = Et.resolve(t).substr(1), n = Et.resolve(n).substr(1);
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
			}, kt = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0, It = function(t, n, r) {
				for (var e = n + r, o = n; t[o] && !(o >= e);) ++o;
				if (o - n > 16 && t.buffer && kt) return kt.decode(t.slice(n, o));
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
					if ((i & 240) == 224 ? i = (i & 15) << 12 | l << 6 | s : ((i & 248) != 240 && pn("Invalid UTF-8 leading byte " + en(i) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), i = (i & 7) << 18 | l << 12 | s << 6 | t[n++] & 63), i < 65536) a += String.fromCharCode(i);
					else {
						var u = i - 65536;
						a += String.fromCharCode(55296 | u >> 10, 56320 | u & 1023);
					}
				}
				return a;
			}, Tt = [], Dt = function(t) {
				for (var e = 0, n = 0; n < t.length; ++n) {
					var r = t.charCodeAt(n);
					r <= 127 ? e++ : r <= 2047 ? e += 2 : r >= 55296 && r <= 57343 ? (e += 4, ++n) : e += 3;
				}
				return e;
			}, xt = function(t, n, r, o) {
				if (H(typeof t == "string"), !(o > 0)) return 0;
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
						l > 1114111 && pn("Invalid Unicode code point " + en(l) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), n[r++] = 240 | l >> 18, n[r++] = 128 | l >> 12 & 63, n[r++] = 128 | l >> 6 & 63, n[r++] = 128 | l & 63;
					}
				}
				return n[r] = 0, r - e;
			};
			function $t(e, t, n) {
				var r = n > 0 ? n : Dt(e) + 1, o = new Array(r), a = xt(e, o, 0, o.length);
				return t && (o.length = a), o;
			}
			var Pt = function() {
				if (!Tt.length) {
					var e = null;
					if (typeof window != "undefined" && typeof window.prompt == "function" ? (e = window.prompt("Input: "), e !== null && (e += `
`)) : typeof readline == "function" && (e = readline(), e !== null && (e += `
`)), !e) return null;
					Tt = $t(e, !0);
				}
				return Tt.shift();
			}, Nt = {
				ttys: [],
				init: function() {},
				shutdown: function() {},
				register: function(t, n) {
					Nt.ttys[t] = {
						input: [],
						output: [],
						ops: n
					}, Kt.registerDevice(t, Nt.stream_ops);
				},
				stream_ops: {
					open: function(t) {
						var e = Nt.ttys[t.node.rdev];
						if (!e) throw new Kt.ErrnoError(43);
						t.tty = e, t.seekable = !1;
					},
					close: function(t) {
						t.tty.ops.fsync(t.tty);
					},
					fsync: function(t) {
						t.tty.ops.fsync(t.tty);
					},
					read: function(t, n, r, o, a) {
						if (!t.tty || !t.tty.ops.get_char) throw new Kt.ErrnoError(60);
						for (var e = 0, i = 0; i < o; i++) {
							var l;
							try {
								l = t.tty.ops.get_char(t.tty);
							} catch (e) {
								throw new Kt.ErrnoError(29);
							}
							if (l === void 0 && e === 0) throw new Kt.ErrnoError(6);
							if (l == null) break;
							e++, n[r + i] = l;
						}
						return e && (t.node.timestamp = Date.now()), e;
					},
					write: function(t, n, r, o, a) {
						if (!t.tty || !t.tty.ops.put_char) throw new Kt.ErrnoError(60);
						try {
							for (var e = 0; e < o; e++) t.tty.ops.put_char(t.tty, n[r + e]);
						} catch (e) {
							throw new Kt.ErrnoError(29);
						}
						return o && (t.node.timestamp = Date.now()), e;
					}
				},
				default_tty_ops: {
					get_char: function(t) {
						return Pt();
					},
					put_char: function(t, n) {
						n === null || n === 10 ? (w(It(t.output, 0)), t.output = []) : n != 0 && t.output.push(n);
					},
					fsync: function(t) {
						t.output && t.output.length > 0 && (w(It(t.output, 0)), t.output = []);
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
						n === null || n === 10 ? (A(It(t.output, 0)), t.output = []) : n != 0 && t.output.push(n);
					},
					fsync: function(t) {
						t.output && t.output.length > 0 && (A(It(t.output, 0)), t.output = []);
					}
				}
			}, Mt = function(t, n) {
				return H(n, "alignment argument is required"), Math.ceil(t / n) * n;
			}, wt = function(t) {
				t = Mt(t, 65536);
				var e = zi(65536, t);
				return e ? bt(e, t) : 0;
			}, At = {
				ops_table: null,
				mount: function(t) {
					return At.createNode(null, "/", 16895, 0);
				},
				createNode: function(t, n, r, o) {
					if (Kt.isBlkdev(r) || Kt.isFIFO(r)) throw new Kt.ErrnoError(63);
					At.ops_table || (At.ops_table = {
						dir: {
							node: {
								getattr: At.node_ops.getattr,
								setattr: At.node_ops.setattr,
								lookup: At.node_ops.lookup,
								mknod: At.node_ops.mknod,
								rename: At.node_ops.rename,
								unlink: At.node_ops.unlink,
								rmdir: At.node_ops.rmdir,
								readdir: At.node_ops.readdir,
								symlink: At.node_ops.symlink
							},
							stream: { llseek: At.stream_ops.llseek }
						},
						file: {
							node: {
								getattr: At.node_ops.getattr,
								setattr: At.node_ops.setattr
							},
							stream: {
								llseek: At.stream_ops.llseek,
								read: At.stream_ops.read,
								write: At.stream_ops.write,
								allocate: At.stream_ops.allocate,
								mmap: At.stream_ops.mmap,
								msync: At.stream_ops.msync
							}
						},
						link: {
							node: {
								getattr: At.node_ops.getattr,
								setattr: At.node_ops.setattr,
								readlink: At.node_ops.readlink
							},
							stream: {}
						},
						chrdev: {
							node: {
								getattr: At.node_ops.getattr,
								setattr: At.node_ops.setattr
							},
							stream: Kt.chrdev_stream_ops
						}
					});
					var e = Kt.createNode(t, n, r, o);
					return Kt.isDir(e.mode) ? (e.node_ops = At.ops_table.dir.node, e.stream_ops = At.ops_table.dir.stream, e.contents = {}) : Kt.isFile(e.mode) ? (e.node_ops = At.ops_table.file.node, e.stream_ops = At.ops_table.file.stream, e.usedBytes = 0, e.contents = null) : Kt.isLink(e.mode) ? (e.node_ops = At.ops_table.link.node, e.stream_ops = At.ops_table.link.stream) : Kt.isChrdev(e.mode) && (e.node_ops = At.ops_table.chrdev.node, e.stream_ops = At.ops_table.chrdev.stream), e.timestamp = Date.now(), t && (t.contents[n] = e, t.timestamp = e.timestamp), e;
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
						return e.dev = Kt.isChrdev(t.mode) ? t.id : 1, e.ino = t.id, e.mode = t.mode, e.nlink = 1, e.uid = 0, e.gid = 0, e.rdev = t.rdev, Kt.isDir(t.mode) ? e.size = 4096 : Kt.isFile(t.mode) ? e.size = t.usedBytes : Kt.isLink(t.mode) ? e.size = t.link.length : e.size = 0, e.atime = new Date(t.timestamp), e.mtime = new Date(t.timestamp), e.ctime = new Date(t.timestamp), e.blksize = 4096, e.blocks = Math.ceil(e.size / e.blksize), e;
					},
					setattr: function(t, n) {
						n.mode !== void 0 && (t.mode = n.mode), n.timestamp !== void 0 && (t.timestamp = n.timestamp), n.size !== void 0 && At.resizeFileStorage(t, n.size);
					},
					lookup: function(t, n) {
						throw Kt.genericErrors[44];
					},
					mknod: function(t, n, r, o) {
						return At.createNode(t, n, r, o);
					},
					rename: function(t, n, r) {
						if (Kt.isDir(t.mode)) {
							var e;
							try {
								e = Kt.lookupNode(n, r);
							} catch (e) {}
							if (e) for (var o in e.contents) throw new Kt.ErrnoError(55);
						}
						delete t.parent.contents[t.name], t.parent.timestamp = Date.now(), t.name = r, n.contents[r] = t, n.timestamp = t.parent.timestamp, t.parent = n;
					},
					unlink: function(t, n) {
						delete t.contents[n], t.timestamp = Date.now();
					},
					rmdir: function(t, n) {
						var e = Kt.lookupNode(t, n);
						for (var r in e.contents) throw new Kt.ErrnoError(55);
						delete t.contents[n], t.timestamp = Date.now();
					},
					readdir: function(t) {
						var e = [".", ".."];
						for (var n in t.contents) Object.prototype.hasOwnProperty.call(t.contents, n) && e.push(n);
						return e;
					},
					symlink: function(t, n, r) {
						var e = At.createNode(t, n, 41471, 0);
						return e.link = r, e;
					},
					readlink: function(t) {
						if (!Kt.isLink(t.mode)) throw new Kt.ErrnoError(28);
						return t.link;
					}
				},
				stream_ops: {
					read: function(t, n, r, o, a) {
						var e = t.node.contents;
						if (a >= t.node.usedBytes) return 0;
						var i = Math.min(t.node.usedBytes - a, o);
						if (H(i >= 0), i > 8 && e.subarray) n.set(e.subarray(a, a + i), r);
						else for (var l = 0; l < i; l++) n[r + l] = e[a + l];
						return i;
					},
					write: function(t, n, r, o, a, i) {
						if (H(!(n instanceof ArrayBuffer)), n.buffer === l().buffer && (i = !1), !o) return 0;
						var e = t.node;
						if (e.timestamp = Date.now(), n.subarray && (!e.contents || e.contents.subarray)) {
							if (i) return H(a === 0, "canOwn must imply no weird position inside the file"), e.contents = n.subarray(r, r + o), e.usedBytes = o, o;
							if (e.usedBytes === 0 && a === 0) return e.contents = n.slice(r, r + o), e.usedBytes = o, o;
							if (a + o <= e.usedBytes) return e.contents.set(n.subarray(r, r + o), a), o;
						}
						if (At.expandFileStorage(e, a + o), e.contents.subarray && n.subarray) e.contents.set(n.subarray(r, r + o), a);
						else for (var s = 0; s < o; s++) e.contents[a + s] = n[r + s];
						return e.usedBytes = Math.max(e.usedBytes, a + o), o;
					},
					llseek: function(t, n, r) {
						var e = n;
						if (r === 1 ? e += t.position : r === 2 && Kt.isFile(t.node.mode) && (e += t.node.usedBytes), e < 0) throw new Kt.ErrnoError(28);
						return e;
					},
					allocate: function(t, n, r) {
						At.expandFileStorage(t.node, n + r), t.node.usedBytes = Math.max(t.node.usedBytes, n + r);
					},
					mmap: function(t, n, r, o, a) {
						if (!Kt.isFile(t.node.mode)) throw new Kt.ErrnoError(43);
						var e, i, s = t.node.contents;
						if (!(a & 2) && s.buffer === l().buffer) i = !1, e = s.byteOffset;
						else {
							if ((r > 0 || r + n < s.length) && (s.subarray ? s = s.subarray(r, r + n) : s = Array.prototype.slice.call(s, r, r + n)), i = !0, e = wt(n), !e) throw new Kt.ErrnoError(48);
							l().set(s, e);
						}
						return {
							ptr: e,
							allocated: i
						};
					},
					msync: function(t, n, r, o, a) {
						return At.stream_ops.write(t, n, 0, o, r, !1), 0;
					}
				}
			}, Ft = function(t, n, r, o) {
				var e = o ? "" : Se("al " + t);
				P(t, function(r) {
					H(r, "Loading data file \"" + t + "\" failed (no arrayBuffer)."), n(new Uint8Array(r)), e && Le(e);
				}, function(e) {
					if (r) r();
					else throw "Loading data file \"" + t + "\" failed.";
				}), e && Re(e);
			}, Ot = h.preloadPlugins || [];
			function Bt(e, t, n, r) {
				typeof xa != "undefined" && xa.init();
				var o = !1;
				return Ot.forEach(function(a) {
					o || a.canHandle(t) && (a.handle(e, t, n, r), o = !0);
				}), o;
			}
			function Wt(e, t, n, r, o, a, i, l, s, u) {
				var c = t ? Et.resolve(St.join2(e, t)) : e, d = Se("cp " + c);
				function m(n) {
					function m(n) {
						u && u(), l || Kt.createDataFile(e, t, n, r, o, s), a && a(), Le(d);
					}
					Bt(n, c, m, function() {
						i && i(), Le(d);
					}) || m(n);
				}
				Re(d), typeof n == "string" ? Ft(n, function(e) {
					return m(e);
				}, i) : m(n);
			}
			function qt(e) {
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
			function Ut(e, t) {
				var n = 0;
				return e && (n |= 365), t && (n |= 146), n;
			}
			var Vt = {
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
					return typeof window == "object" && (e = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), H(e, "IDBFS used, but indexedDB not supported"), e;
				}),
				DB_VERSION: 21,
				DB_STORE_NAME: "FILE_DATA",
				mount: function(t) {
					return At.mount.apply(null, arguments);
				},
				syncfs: function(t, n, r) {
					Vt.getLocalSet(t, function(e, o) {
						if (e) return r(e);
						Vt.getRemoteSet(t, function(e, t) {
							if (e) return r(e);
							var a = n ? t : o, i = n ? o : t;
							Vt.reconcile(a, i, r);
						});
					});
				},
				quit: function() {
					Object.values(Vt.dbs).forEach(function(e) {
						return e.close();
					}), Vt.dbs = {};
				},
				getDB: function(t, n) {
					var e = Vt.dbs[t];
					if (e) return n(null, e);
					var r;
					try {
						r = Vt.indexedDB().open(t, Vt.DB_VERSION);
					} catch (e) {
						return n(e);
					}
					if (!r) return n("Unable to connect to IndexedDB");
					r.onupgradeneeded = function(e) {
						var t = e.target.result, n = e.target.transaction, r;
						t.objectStoreNames.contains(Vt.DB_STORE_NAME) ? r = n.objectStore(Vt.DB_STORE_NAME) : r = t.createObjectStore(Vt.DB_STORE_NAME), r.indexNames.contains("timestamp") || r.createIndex("timestamp", "timestamp", { unique: !1 });
					}, r.onsuccess = function() {
						e = r.result, Vt.dbs[t] = e, n(null, e);
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
							return St.join2(e, t);
						};
					}
					for (var a = Kt.readdir(t.mountpoint).filter(r).map(o(t.mountpoint)); a.length;) {
						var i = a.pop(), l;
						try {
							l = Kt.stat(i);
						} catch (e) {
							return n(e);
						}
						Kt.isDir(l.mode) && a.push.apply(a, Kt.readdir(i).filter(r).map(o(i))), e[i] = { timestamp: l.mtime };
					}
					return n(null, {
						type: "local",
						entries: e
					});
				},
				getRemoteSet: function(t, n) {
					var e = {};
					Vt.getDB(t.mountpoint, function(t, r) {
						if (t) return n(t);
						try {
							var o = r.transaction([Vt.DB_STORE_NAME], "readonly");
							o.onerror = function(e) {
								n(e.target.error), e.preventDefault();
							};
							var a = o.objectStore(Vt.DB_STORE_NAME), i = a.index("timestamp");
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
						var o = Kt.lookupPath(t);
						r = o.node, e = Kt.stat(t);
					} catch (e) {
						return n(e);
					}
					return Kt.isDir(e.mode) ? n(null, {
						timestamp: e.mtime,
						mode: e.mode
					}) : Kt.isFile(e.mode) ? (r.contents = At.getFileDataAsTypedArray(r), n(null, {
						timestamp: e.mtime,
						mode: e.mode,
						contents: r.contents
					})) : n(new Error("node type not supported"));
				},
				storeLocalEntry: function(t, n, r) {
					try {
						if (Kt.isDir(n.mode)) Kt.mkdirTree(t, n.mode);
						else if (Kt.isFile(n.mode)) Kt.writeFile(t, n.contents, { canOwn: !0 });
						else return r(new Error("node type not supported"));
						Kt.chmod(t, n.mode), Kt.utime(t, n.timestamp, n.timestamp);
					} catch (e) {
						return r(e);
					}
					r(null);
				},
				removeLocalEntry: function(t, n) {
					try {
						var e = Kt.stat(t);
						Kt.isDir(e.mode) ? Kt.rmdir(t) : Kt.isFile(e.mode) && Kt.unlink(t);
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
					var a = [];
					if (Object.keys(n.entries).forEach(function(n) {
						t.entries[n] || (a.push(n), e++);
					}), !e) return r(null);
					var l = !1, s = t.type === "remote" ? t.db : n.db, u = s.transaction([Vt.DB_STORE_NAME], "readwrite"), c = u.objectStore(Vt.DB_STORE_NAME);
					function d(e) {
						if (e && !l) return l = !0, r(e);
					}
					u.onerror = function(e) {
						d(i.error), e.preventDefault();
					}, u.oncomplete = function(e) {
						l || r(null);
					}, o.sort().forEach(function(e) {
						n.type === "local" ? Vt.loadRemoteEntry(c, e, function(t, n) {
							if (t) return d(t);
							Vt.storeLocalEntry(e, n, d);
						}) : Vt.loadLocalEntry(e, function(t, n) {
							if (t) return d(t);
							Vt.storeRemoteEntry(c, e, n, d);
						});
					}), a.sort().reverse().forEach(function(e) {
						n.type === "local" ? Vt.removeLocalEntry(e, d) : Vt.removeRemoteEntry(c, e, d);
					});
				}
			}, Ht = {
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
			}, Gt = {};
			function zt(e) {
				return pn("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling"), e;
			}
			function jt(e) {
				var t = /\b_Z[\w\d_]+/g;
				return e.replace(t, function(e) {
					var t = zt(e);
					return e === t ? e : t + " [" + e + "]";
				});
			}
			var Kt = {
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
					if (n === void 0 && (n = {}), t = Et.resolve(t), !t) return {
						path: "",
						node: null
					};
					var e = {
						follow_mount: !0,
						recurse_count: 0
					};
					if (n = Object.assign(e, n), n.recurse_count > 8) throw new Kt.ErrnoError(32);
					for (var r = t.split("/").filter(function(e) {
						return !!e;
					}), o = Kt.root, a = "/", i = 0; i < r.length; i++) {
						var l = i === r.length - 1;
						if (l && n.parent) break;
						if (o = Kt.lookupNode(o, r[i]), a = St.join2(a, r[i]), Kt.isMountpoint(o) && (!l || l && n.follow_mount) && (o = o.mounted.root), !l || n.follow) for (var s = 0; Kt.isLink(o.mode);) {
							var u = Kt.readlink(a);
							a = Et.resolve(St.dirname(a), u);
							var c = Kt.lookupPath(a, { recurse_count: n.recurse_count + 1 });
							if (o = c.node, s++ > 40) throw new Kt.ErrnoError(32);
						}
					}
					return {
						path: a,
						node: o
					};
				},
				getPath: function(t) {
					for (var e;;) {
						if (Kt.isRoot(t)) {
							var n = t.mount.mountpoint;
							return e ? n[n.length - 1] !== "/" ? n + "/" + e : n + e : n;
						}
						e = e ? t.name + "/" + e : t.name, t = t.parent;
					}
				},
				hashName: function(t, n) {
					for (var e = 0, r = 0; r < n.length; r++) e = (e << 5) - e + n.charCodeAt(r) | 0;
					return (t + e >>> 0) % Kt.nameTable.length;
				},
				hashAddNode: function(t) {
					var e = Kt.hashName(t.parent.id, t.name);
					t.name_next = Kt.nameTable[e], Kt.nameTable[e] = t;
				},
				hashRemoveNode: function(t) {
					var e = Kt.hashName(t.parent.id, t.name);
					if (Kt.nameTable[e] === t) Kt.nameTable[e] = t.name_next;
					else for (var n = Kt.nameTable[e]; n;) {
						if (n.name_next === t) {
							n.name_next = t.name_next;
							break;
						}
						n = n.name_next;
					}
				},
				lookupNode: function(t, n) {
					var e = Kt.mayLookup(t);
					if (e) throw new Kt.ErrnoError(e, t);
					for (var r = Kt.hashName(t.id, n), o = Kt.nameTable[r]; o; o = o.name_next) {
						var a = o.name;
						if (o.parent.id === t.id && a === n) return o;
					}
					return Kt.lookup(t, n);
				},
				createNode: function(t, n, r, o) {
					H(typeof t == "object");
					var e = new Kt.FSNode(t, n, r, o);
					return Kt.hashAddNode(e), e;
				},
				destroyNode: function(t) {
					Kt.hashRemoveNode(t);
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
					return Kt.ignorePermissions ? 0 : n.includes("r") && !(t.mode & 292) || n.includes("w") && !(t.mode & 146) || n.includes("x") && !(t.mode & 73) ? 2 : 0;
				},
				mayLookup: function(t) {
					var e = Kt.nodePermissions(t, "x");
					return e || (t.node_ops.lookup ? 0 : 2);
				},
				mayCreate: function(t, n) {
					try {
						var e = Kt.lookupNode(t, n);
						return 20;
					} catch (e) {}
					return Kt.nodePermissions(t, "wx");
				},
				mayDelete: function(t, n, r) {
					var e;
					try {
						e = Kt.lookupNode(t, n);
					} catch (e) {
						return e.errno;
					}
					var o = Kt.nodePermissions(t, "wx");
					if (o) return o;
					if (r) {
						if (!Kt.isDir(e.mode)) return 54;
						if (Kt.isRoot(e) || Kt.getPath(e) === Kt.cwd()) return 10;
					} else if (Kt.isDir(e.mode)) return 31;
					return 0;
				},
				mayOpen: function(t, n) {
					return t ? Kt.isLink(t.mode) ? 32 : Kt.isDir(t.mode) && (Kt.flagsToPermissionString(n) !== "r" || n & 512) ? 31 : Kt.nodePermissions(t, Kt.flagsToPermissionString(n)) : 44;
				},
				MAX_OPEN_FDS: 4096,
				nextfd: function() {
					for (var e = 0; e <= Kt.MAX_OPEN_FDS; e++) if (!Kt.streams[e]) return e;
					throw new Kt.ErrnoError(33);
				},
				getStreamChecked: function(t) {
					var e = Kt.getStream(t);
					if (!e) throw new Kt.ErrnoError(8);
					return e;
				},
				getStream: function(t) {
					return Kt.streams[t];
				},
				createStream: function(t, n) {
					return n === void 0 && (n = -1), Kt.FSStream || (Kt.FSStream = function() {
						this.shared = {};
					}, Kt.FSStream.prototype = {}, Object.defineProperties(Kt.FSStream.prototype, {
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
					})), t = Object.assign(new Kt.FSStream(), t), n == -1 && (n = Kt.nextfd()), t.fd = n, Kt.streams[n] = t, t;
				},
				closeStream: function(t) {
					Kt.streams[t] = null;
				},
				chrdev_stream_ops: {
					open: function(t) {
						var e = Kt.getDevice(t.node.rdev);
						t.stream_ops = e.stream_ops, t.stream_ops.open && t.stream_ops.open(t);
					},
					llseek: function() {
						throw new Kt.ErrnoError(70);
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
					Kt.devices[t] = { stream_ops: n };
				},
				getDevice: function(t) {
					return Kt.devices[t];
				},
				getMounts: function(t) {
					for (var e = [], n = [t]; n.length;) {
						var r = n.pop();
						e.push(r), n.push.apply(n, r.mounts);
					}
					return e;
				},
				syncfs: function(t, n) {
					typeof t == "function" && (n = t, t = !1), Kt.syncFSRequests++, Kt.syncFSRequests > 1 && A("warning: " + Kt.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
					var e = Kt.getMounts(Kt.root.mount), r = 0;
					function o(e) {
						return H(Kt.syncFSRequests > 0), Kt.syncFSRequests--, n(e);
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
					if (e && Kt.root) throw new Kt.ErrnoError(10);
					if (!e && !o) {
						var i = Kt.lookupPath(r, { follow_mount: !1 });
						if (r = i.path, a = i.node, Kt.isMountpoint(a)) throw new Kt.ErrnoError(10);
						if (!Kt.isDir(a.mode)) throw new Kt.ErrnoError(54);
					}
					var l = {
						type: t,
						opts: n,
						mountpoint: r,
						mounts: []
					}, s = t.mount(l);
					return s.mount = l, l.root = s, e ? Kt.root = s : a && (a.mounted = l, a.mount && a.mount.mounts.push(l)), s;
				},
				unmount: function(t) {
					var e = Kt.lookupPath(t, { follow_mount: !1 });
					if (!Kt.isMountpoint(e.node)) throw new Kt.ErrnoError(28);
					var n = e.node, r = n.mounted, o = Kt.getMounts(r);
					Object.keys(Kt.nameTable).forEach(function(e) {
						for (var t = Kt.nameTable[e]; t;) {
							var n = t.name_next;
							o.includes(t.mount) && Kt.destroyNode(t), t = n;
						}
					}), n.mounted = null;
					var a = n.mount.mounts.indexOf(r);
					H(a !== -1), n.mount.mounts.splice(a, 1);
				},
				lookup: function(t, n) {
					return t.node_ops.lookup(t, n);
				},
				mknod: function(t, n, r) {
					var e = Kt.lookupPath(t, { parent: !0 }), o = e.node, a = St.basename(t);
					if (!a || a === "." || a === "..") throw new Kt.ErrnoError(28);
					var i = Kt.mayCreate(o, a);
					if (i) throw new Kt.ErrnoError(i);
					if (!o.node_ops.mknod) throw new Kt.ErrnoError(63);
					return o.node_ops.mknod(o, a, n, r);
				},
				create: function(t, n) {
					return n = n !== void 0 ? n : 438, n &= 4095, n |= 32768, Kt.mknod(t, n, 0);
				},
				mkdir: function(t, n) {
					return n = n !== void 0 ? n : 511, n &= 1023, n |= 16384, Kt.mknod(t, n, 0);
				},
				mkdirTree: function(t, n) {
					for (var e = t.split("/"), r = "", o = 0; o < e.length; ++o) if (e[o]) {
						r += "/" + e[o];
						try {
							Kt.mkdir(r, n);
						} catch (e) {
							if (e.errno != 20) throw e;
						}
					}
				},
				mkdev: function(t, n, r) {
					return typeof r == "undefined" && (r = n, n = 438), n |= 8192, Kt.mknod(t, n, r);
				},
				symlink: function(t, n) {
					if (!Et.resolve(t)) throw new Kt.ErrnoError(44);
					var e = Kt.lookupPath(n, { parent: !0 }), r = e.node;
					if (!r) throw new Kt.ErrnoError(44);
					var o = St.basename(n), a = Kt.mayCreate(r, o);
					if (a) throw new Kt.ErrnoError(a);
					if (!r.node_ops.symlink) throw new Kt.ErrnoError(63);
					return r.node_ops.symlink(r, o, t);
				},
				rename: function(t, n) {
					var e = St.dirname(t), r = St.dirname(n), o = St.basename(t), a = St.basename(n), i, l, s;
					if (i = Kt.lookupPath(t, { parent: !0 }), l = i.node, i = Kt.lookupPath(n, { parent: !0 }), s = i.node, !l || !s) throw new Kt.ErrnoError(44);
					if (l.mount !== s.mount) throw new Kt.ErrnoError(75);
					var u = Kt.lookupNode(l, o), c = Et.relative(t, r);
					if (c.charAt(0) !== ".") throw new Kt.ErrnoError(28);
					if (c = Et.relative(n, e), c.charAt(0) !== ".") throw new Kt.ErrnoError(55);
					var d;
					try {
						d = Kt.lookupNode(s, a);
					} catch (e) {}
					if (u !== d) {
						var m = Kt.isDir(u.mode), p = Kt.mayDelete(l, o, m);
						if (p) throw new Kt.ErrnoError(p);
						if (p = d ? Kt.mayDelete(s, a, m) : Kt.mayCreate(s, a), p) throw new Kt.ErrnoError(p);
						if (!l.node_ops.rename) throw new Kt.ErrnoError(63);
						if (Kt.isMountpoint(u) || d && Kt.isMountpoint(d)) throw new Kt.ErrnoError(10);
						if (s !== l && (p = Kt.nodePermissions(l, "w"), p)) throw new Kt.ErrnoError(p);
						Kt.hashRemoveNode(u);
						try {
							l.node_ops.rename(u, s, a);
						} catch (e) {
							throw e;
						} finally {
							Kt.hashAddNode(u);
						}
					}
				},
				rmdir: function(t) {
					var e = Kt.lookupPath(t, { parent: !0 }), n = e.node, r = St.basename(t), o = Kt.lookupNode(n, r), a = Kt.mayDelete(n, r, !0);
					if (a) throw new Kt.ErrnoError(a);
					if (!n.node_ops.rmdir) throw new Kt.ErrnoError(63);
					if (Kt.isMountpoint(o)) throw new Kt.ErrnoError(10);
					n.node_ops.rmdir(n, r), Kt.destroyNode(o);
				},
				readdir: function(t) {
					var e = Kt.lookupPath(t, { follow: !0 }), n = e.node;
					if (!n.node_ops.readdir) throw new Kt.ErrnoError(54);
					return n.node_ops.readdir(n);
				},
				unlink: function(t) {
					var e = Kt.lookupPath(t, { parent: !0 }), n = e.node;
					if (!n) throw new Kt.ErrnoError(44);
					var r = St.basename(t), o = Kt.lookupNode(n, r), a = Kt.mayDelete(n, r, !1);
					if (a) throw new Kt.ErrnoError(a);
					if (!n.node_ops.unlink) throw new Kt.ErrnoError(63);
					if (Kt.isMountpoint(o)) throw new Kt.ErrnoError(10);
					n.node_ops.unlink(n, r), Kt.destroyNode(o);
				},
				readlink: function(t) {
					var e = Kt.lookupPath(t), n = e.node;
					if (!n) throw new Kt.ErrnoError(44);
					if (!n.node_ops.readlink) throw new Kt.ErrnoError(28);
					return Et.resolve(Kt.getPath(n.parent), n.node_ops.readlink(n));
				},
				stat: function(t, n) {
					var e = Kt.lookupPath(t, { follow: !n }), r = e.node;
					if (!r) throw new Kt.ErrnoError(44);
					if (!r.node_ops.getattr) throw new Kt.ErrnoError(63);
					return r.node_ops.getattr(r);
				},
				lstat: function(t) {
					return Kt.stat(t, !0);
				},
				chmod: function(t, n, r) {
					var e;
					if (typeof t == "string") {
						var o = Kt.lookupPath(t, { follow: !r });
						e = o.node;
					} else e = t;
					if (!e.node_ops.setattr) throw new Kt.ErrnoError(63);
					e.node_ops.setattr(e, {
						mode: n & 4095 | e.mode & -4096,
						timestamp: Date.now()
					});
				},
				lchmod: function(t, n) {
					Kt.chmod(t, n, !0);
				},
				fchmod: function(t, n) {
					var e = Kt.getStreamChecked(t);
					Kt.chmod(e.node, n);
				},
				chown: function(t, n, r, o) {
					var e;
					if (typeof t == "string") {
						var a = Kt.lookupPath(t, { follow: !o });
						e = a.node;
					} else e = t;
					if (!e.node_ops.setattr) throw new Kt.ErrnoError(63);
					e.node_ops.setattr(e, { timestamp: Date.now() });
				},
				lchown: function(t, n, r) {
					Kt.chown(t, n, r, !0);
				},
				fchown: function(t, n, r) {
					var e = Kt.getStreamChecked(t);
					Kt.chown(e.node, n, r);
				},
				truncate: function(t, n) {
					if (n < 0) throw new Kt.ErrnoError(28);
					var e;
					if (typeof t == "string") {
						var r = Kt.lookupPath(t, { follow: !0 });
						e = r.node;
					} else e = t;
					if (!e.node_ops.setattr) throw new Kt.ErrnoError(63);
					if (Kt.isDir(e.mode)) throw new Kt.ErrnoError(31);
					if (!Kt.isFile(e.mode)) throw new Kt.ErrnoError(28);
					var o = Kt.nodePermissions(e, "w");
					if (o) throw new Kt.ErrnoError(o);
					e.node_ops.setattr(e, {
						size: n,
						timestamp: Date.now()
					});
				},
				ftruncate: function(t, n) {
					var e = Kt.getStreamChecked(t);
					if ((e.flags & 2097155) === 0) throw new Kt.ErrnoError(28);
					Kt.truncate(e.node, n);
				},
				utime: function(t, n, r) {
					var e = Kt.lookupPath(t, { follow: !0 }), o = e.node;
					o.node_ops.setattr(o, { timestamp: Math.max(n, r) });
				},
				open: function(t, n, r) {
					if (t === "") throw new Kt.ErrnoError(44);
					n = typeof n == "string" ? qt(n) : n, r = typeof r == "undefined" ? 438 : r, n & 64 ? r = r & 4095 | 32768 : r = 0;
					var e;
					if (typeof t == "object") e = t;
					else {
						t = St.normalize(t);
						try {
							var o = Kt.lookupPath(t, { follow: !(n & 131072) });
							e = o.node;
						} catch (e) {}
					}
					var a = !1;
					if (n & 64) if (e) {
						if (n & 128) throw new Kt.ErrnoError(20);
					} else e = Kt.mknod(t, r, 0), a = !0;
					if (!e) throw new Kt.ErrnoError(44);
					if (Kt.isChrdev(e.mode) && (n &= -513), n & 65536 && !Kt.isDir(e.mode)) throw new Kt.ErrnoError(54);
					if (!a) {
						var i = Kt.mayOpen(e, n);
						if (i) throw new Kt.ErrnoError(i);
					}
					n & 512 && !a && Kt.truncate(e, 0), n &= -131713;
					var l = Kt.createStream({
						node: e,
						path: Kt.getPath(e),
						flags: n,
						seekable: !0,
						position: 0,
						stream_ops: e.stream_ops,
						ungotten: [],
						error: !1
					});
					return l.stream_ops.open && l.stream_ops.open(l), h.logReadFiles && !(n & 1) && (Kt.readFiles || (Kt.readFiles = {}), t in Kt.readFiles || (Kt.readFiles[t] = 1)), l;
				},
				close: function(t) {
					if (Kt.isClosed(t)) throw new Kt.ErrnoError(8);
					t.getdents && (t.getdents = null);
					try {
						t.stream_ops.close && t.stream_ops.close(t);
					} catch (e) {
						throw e;
					} finally {
						Kt.closeStream(t.fd);
					}
					t.fd = null;
				},
				isClosed: function(t) {
					return t.fd === null;
				},
				llseek: function(t, n, r) {
					if (Kt.isClosed(t)) throw new Kt.ErrnoError(8);
					if (!t.seekable || !t.stream_ops.llseek) throw new Kt.ErrnoError(70);
					if (r != 0 && r != 1 && r != 2) throw new Kt.ErrnoError(28);
					return t.position = t.stream_ops.llseek(t, n, r), t.ungotten = [], t.position;
				},
				read: function(t, n, r, o, a) {
					if (H(r >= 0), o < 0 || a < 0) throw new Kt.ErrnoError(28);
					if (Kt.isClosed(t)) throw new Kt.ErrnoError(8);
					if ((t.flags & 2097155) === 1) throw new Kt.ErrnoError(8);
					if (Kt.isDir(t.node.mode)) throw new Kt.ErrnoError(31);
					if (!t.stream_ops.read) throw new Kt.ErrnoError(28);
					var e = typeof a != "undefined";
					if (!e) a = t.position;
					else if (!t.seekable) throw new Kt.ErrnoError(70);
					var i = t.stream_ops.read(t, n, r, o, a);
					return e || (t.position += i), i;
				},
				write: function(t, n, r, o, a, i) {
					if (H(r >= 0), o < 0 || a < 0) throw new Kt.ErrnoError(28);
					if (Kt.isClosed(t)) throw new Kt.ErrnoError(8);
					if ((t.flags & 2097155) === 0) throw new Kt.ErrnoError(8);
					if (Kt.isDir(t.node.mode)) throw new Kt.ErrnoError(31);
					if (!t.stream_ops.write) throw new Kt.ErrnoError(28);
					t.seekable && t.flags & 1024 && Kt.llseek(t, 0, 2);
					var e = typeof a != "undefined";
					if (!e) a = t.position;
					else if (!t.seekable) throw new Kt.ErrnoError(70);
					var l = t.stream_ops.write(t, n, r, o, a, i);
					return e || (t.position += l), l;
				},
				allocate: function(t, n, r) {
					if (Kt.isClosed(t)) throw new Kt.ErrnoError(8);
					if (n < 0 || r <= 0) throw new Kt.ErrnoError(28);
					if ((t.flags & 2097155) === 0) throw new Kt.ErrnoError(8);
					if (!Kt.isFile(t.node.mode) && !Kt.isDir(t.node.mode)) throw new Kt.ErrnoError(43);
					if (!t.stream_ops.allocate) throw new Kt.ErrnoError(138);
					t.stream_ops.allocate(t, n, r);
				},
				mmap: function(t, n, r, o, a) {
					if ((o & 2) !== 0 && (a & 2) === 0 && (t.flags & 2097155) !== 2) throw new Kt.ErrnoError(2);
					if ((t.flags & 2097155) === 1) throw new Kt.ErrnoError(2);
					if (!t.stream_ops.mmap) throw new Kt.ErrnoError(43);
					return t.stream_ops.mmap(t, n, r, o, a);
				},
				msync: function(t, n, r, o, a) {
					return H(r >= 0), t.stream_ops.msync ? t.stream_ops.msync(t, n, r, o, a) : 0;
				},
				munmap: function(t) {
					return 0;
				},
				ioctl: function(t, n, r) {
					if (!t.stream_ops.ioctl) throw new Kt.ErrnoError(59);
					return t.stream_ops.ioctl(t, n, r);
				},
				readFile: function(t, n) {
					if (n === void 0 && (n = {}), n.flags = n.flags || 0, n.encoding = n.encoding || "binary", n.encoding !== "utf8" && n.encoding !== "binary") throw new Error("Invalid encoding type \"" + n.encoding + "\"");
					var e, r = Kt.open(t, n.flags), o = Kt.stat(t), a = o.size, i = new Uint8Array(a);
					return Kt.read(r, i, 0, a, 0), n.encoding === "utf8" ? e = It(i, 0) : n.encoding === "binary" && (e = i), Kt.close(r), e;
				},
				writeFile: function(t, n, r) {
					r === void 0 && (r = {}), r.flags = r.flags || 577;
					var e = Kt.open(t, r.flags, r.mode);
					if (typeof n == "string") {
						var o = new Uint8Array(Dt(n) + 1), a = xt(n, o, 0, o.length);
						Kt.write(e, o, 0, a, void 0, r.canOwn);
					} else if (ArrayBuffer.isView(n)) Kt.write(e, n, 0, n.byteLength, void 0, r.canOwn);
					else throw new Error("Unsupported data type");
					Kt.close(e);
				},
				cwd: function() {
					return Kt.currentPath;
				},
				chdir: function(t) {
					var e = Kt.lookupPath(t, { follow: !0 });
					if (e.node === null) throw new Kt.ErrnoError(44);
					if (!Kt.isDir(e.node.mode)) throw new Kt.ErrnoError(54);
					var n = Kt.nodePermissions(e.node, "x");
					if (n) throw new Kt.ErrnoError(n);
					Kt.currentPath = e.path;
				},
				createDefaultDirectories: function() {
					Kt.mkdir("/tmp"), Kt.mkdir("/home"), Kt.mkdir("/home/web_user");
				},
				createDefaultDevices: function() {
					Kt.mkdir("/dev"), Kt.registerDevice(Kt.makedev(1, 3), {
						read: function() {
							return 0;
						},
						write: function(t, n, r, o, a) {
							return o;
						}
					}), Kt.mkdev("/dev/null", Kt.makedev(1, 3)), Nt.register(Kt.makedev(5, 0), Nt.default_tty_ops), Nt.register(Kt.makedev(6, 0), Nt.default_tty1_ops), Kt.mkdev("/dev/tty", Kt.makedev(5, 0)), Kt.mkdev("/dev/tty1", Kt.makedev(6, 0));
					var e = new Uint8Array(1024), t = 0, n = function() {
						return t === 0 && (t = Lt(e).byteLength), e[--t];
					};
					Kt.createDevice("/dev", "random", n), Kt.createDevice("/dev", "urandom", n), Kt.mkdir("/dev/shm"), Kt.mkdir("/dev/shm/tmp");
				},
				createSpecialDirectories: function() {
					Kt.mkdir("/proc");
					var e = Kt.mkdir("/proc/self");
					Kt.mkdir("/proc/self/fd"), Kt.mount({ mount: function() {
						var t = Kt.createNode(e, "fd", 16895, 73);
						return t.node_ops = { lookup: function(t, n) {
							var e = +n, r = Kt.getStreamChecked(e), o = {
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
					h.stdin ? Kt.createDevice("/dev", "stdin", h.stdin) : Kt.symlink("/dev/tty", "/dev/stdin"), h.stdout ? Kt.createDevice("/dev", "stdout", null, h.stdout) : Kt.symlink("/dev/tty", "/dev/stdout"), h.stderr ? Kt.createDevice("/dev", "stderr", null, h.stderr) : Kt.symlink("/dev/tty1", "/dev/stderr");
					var e = Kt.open("/dev/stdin", 0), t = Kt.open("/dev/stdout", 1), n = Kt.open("/dev/stderr", 1);
					H(e.fd === 0, "invalid handle for stdin (" + e.fd + ")"), H(t.fd === 1, "invalid handle for stdout (" + t.fd + ")"), H(n.fd === 2, "invalid handle for stderr (" + n.fd + ")");
				},
				ensureErrnoError: function() {
					Kt.ErrnoError || (Kt.ErrnoError = function(t, n) {
						this.name = "ErrnoError", this.node = n, this.setErrno = function(e) {
							this.errno = e;
							for (var t in Gt) if (Gt[t] === e) {
								this.code = t;
								break;
							}
						}, this.setErrno(t), this.message = Ht[t], this.stack && (Object.defineProperty(this, "stack", {
							value: new Error().stack,
							writable: !0
						}), this.stack = jt(this.stack));
					}, Kt.ErrnoError.prototype = new Error(), Kt.ErrnoError.prototype.constructor = Kt.ErrnoError, [44].forEach(function(e) {
						Kt.genericErrors[e] = new Kt.ErrnoError(e), Kt.genericErrors[e].stack = "<generic error, no stack>";
					}));
				},
				staticInit: function() {
					Kt.ensureErrnoError(), Kt.nameTable = new Array(4096), Kt.mount(At, {}, "/"), Kt.createDefaultDirectories(), Kt.createDefaultDevices(), Kt.createSpecialDirectories(), Kt.filesystems = {
						MEMFS: At,
						IDBFS: Vt
					};
				},
				init: function(t, n, r) {
					H(!Kt.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), Kt.init.initialized = !0, Kt.ensureErrnoError(), h.stdin = t || h.stdin, h.stdout = n || h.stdout, h.stderr = r || h.stderr, Kt.createStandardStreams();
				},
				quit: function() {
					Kt.init.initialized = !1, wi(0);
					for (var e = 0; e < Kt.streams.length; e++) {
						var t = Kt.streams[e];
						t && Kt.close(t);
					}
				},
				findObject: function(t, n) {
					var e = Kt.analyzePath(t, n);
					return e.exists ? e.object : null;
				},
				analyzePath: function(t, n) {
					try {
						var e = Kt.lookupPath(t, { follow: !n });
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
						var e = Kt.lookupPath(t, { parent: !0 });
						r.parentExists = !0, r.parentPath = e.path, r.parentObject = e.node, r.name = St.basename(t), e = Kt.lookupPath(t, { follow: !n }), r.exists = !0, r.path = e.path, r.object = e.node, r.name = e.node.name, r.isRoot = e.path === "/";
					} catch (e) {
						r.error = e.errno;
					}
					return r;
				},
				createPath: function(t, n, r, o) {
					t = typeof t == "string" ? t : Kt.getPath(t);
					for (var e = n.split("/").reverse(); e.length;) {
						var a = e.pop();
						if (a) {
							var i = St.join2(t, a);
							try {
								Kt.mkdir(i);
							} catch (e) {}
							t = i;
						}
					}
					return i;
				},
				createFile: function(t, n, r, o, a) {
					var e = St.join2(typeof t == "string" ? t : Kt.getPath(t), n), i = Ut(o, a);
					return Kt.create(e, i);
				},
				createDataFile: function(t, n, r, o, a, i) {
					var e = n;
					t && (t = typeof t == "string" ? t : Kt.getPath(t), e = n ? St.join2(t, n) : t);
					var l = Ut(o, a), s = Kt.create(e, l);
					if (r) {
						if (typeof r == "string") {
							for (var u = new Array(r.length), c = 0, d = r.length; c < d; ++c) u[c] = r.charCodeAt(c);
							r = u;
						}
						Kt.chmod(s, l | 146);
						var m = Kt.open(s, 577);
						Kt.write(m, r, 0, r.length, 0, i), Kt.close(m), Kt.chmod(s, l);
					}
					return s;
				},
				createDevice: function(t, n, r, o) {
					var e = St.join2(typeof t == "string" ? t : Kt.getPath(t), n), a = Ut(!!r, !!o);
					Kt.createDevice.major || (Kt.createDevice.major = 64);
					var i = Kt.makedev(Kt.createDevice.major++, 0);
					return Kt.registerDevice(i, {
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
									throw new Kt.ErrnoError(29);
								}
								if (s === void 0 && e === 0) throw new Kt.ErrnoError(6);
								if (s == null) break;
								e++, n[o + l] = s;
							}
							return e && (t.node.timestamp = Date.now()), e;
						},
						write: function(t, n, r, a, i) {
							for (var e = 0; e < a; e++) try {
								o(n[r + e]);
							} catch (e) {
								throw new Kt.ErrnoError(29);
							}
							return a && (t.node.timestamp = Date.now()), e;
						}
					}), Kt.mkdev(e, a, i);
				},
				forceLoadFile: function(t) {
					if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
					if (typeof XMLHttpRequest != "undefined") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
					if ($) try {
						t.contents = $t($(t.url), !0), t.usedBytes = t.contents.length;
					} catch (e) {
						throw new Kt.ErrnoError(29);
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
							return e.response !== void 0 ? new Uint8Array(e.response || []) : $t(e.responseText || "", !0);
						}, s = this;
						s.setDataGetter(function(e) {
							var n = e * i, r = (e + 1) * i - 1;
							if (r = Math.min(r, t - 1), typeof s.chunks[e] == "undefined" && (s.chunks[e] = l(n, r)), typeof s.chunks[e] == "undefined") throw new Error("doXHR failed!");
							return s.chunks[e];
						}), (a || !t) && (i = t = 1, t = this.getter(0).length, i = t, w("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = t, this._chunkSize = i, this.lengthKnown = !0;
					}, typeof XMLHttpRequest != "undefined") {
						if (!E) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
						var i = new e();
						Object.defineProperties(i, {
							length: { get: function() {
								return this.lengthKnown || this.cacheLength(), this._length;
							} },
							chunkSize: { get: function() {
								return this.lengthKnown || this.cacheLength(), this._chunkSize;
							} }
						});
						var s = {
							isDevice: !1,
							contents: i
						};
					} else var s = {
						isDevice: !1,
						url: r
					};
					var u = Kt.createFile(t, n, s, o, a);
					s.contents ? u.contents = s.contents : s.url && (u.contents = null, u.url = s.url), Object.defineProperties(u, { usedBytes: { get: function() {
						return this.contents.length;
					} } });
					var c = {}, d = Object.keys(u.stream_ops);
					d.forEach(function(e) {
						var t = u.stream_ops[e];
						c[e] = function() {
							return Kt.forceLoadFile(u), t.apply(null, arguments);
						};
					});
					function m(e, t, n, r, o) {
						var a = e.node.contents;
						if (o >= a.length) return 0;
						var i = Math.min(a.length - o, r);
						if (H(i >= 0), a.slice) for (var l = 0; l < i; l++) t[n + l] = a[o + l];
						else for (var l = 0; l < i; l++) t[n + l] = a.get(o + l);
						return i;
					}
					return c.read = function(e, t, n, r, o) {
						return Kt.forceLoadFile(u), m(e, t, n, r, o);
					}, c.mmap = function(e, t, n, r, o) {
						Kt.forceLoadFile(u);
						var a = wt(t);
						if (!a) throw new Kt.ErrnoError(48);
						return m(e, l(), a, t, n), {
							ptr: a,
							allocated: !0
						};
					}, u.stream_ops = c, u;
				},
				absolutePath: function() {
					Ee("FS.absolutePath has been removed; use PATH_FS.resolve instead");
				},
				createFolder: function() {
					Ee("FS.createFolder has been removed; use FS.mkdir instead");
				},
				createLink: function() {
					Ee("FS.createLink has been removed; use FS.symlink instead");
				},
				joinPath: function() {
					Ee("FS.joinPath has been removed; use PATH.join instead");
				},
				mmapAlloc: function() {
					Ee("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
				},
				standardizePath: function() {
					Ee("FS.standardizePath has been removed; use PATH.normalize instead");
				}
			}, Qt = function(t, n) {
				return H(typeof t == "number"), t ? It(c(), t, n) : "";
			}, Xt = {
				DEFAULT_POLLMASK: 5,
				calculateAt: function(t, n, r) {
					if (St.isAbs(n)) return n;
					var e;
					if (t === -100) e = Kt.cwd();
					else {
						var o = Xt.getStreamFromFD(t);
						e = o.path;
					}
					if (n.length == 0) {
						if (!r) throw new Kt.ErrnoError(44);
						return e;
					}
					return St.join2(e, n);
				},
				doStat: function(t, n, r) {
					try {
						var e = t(n);
					} catch (e) {
						if (e && e.node && St.normalize(n) !== St.normalize(Kt.getPath(e.node))) return -54;
						throw e;
					}
					p()[r >> 2] = e.dev, p()[r + 4 >> 2] = e.mode, _()[r + 8 >> 2] = e.nlink, p()[r + 12 >> 2] = e.uid, p()[r + 16 >> 2] = e.gid, p()[r + 20 >> 2] = e.rdev, J[r + 24 >> 3] = BigInt(e.size), p()[r + 32 >> 2] = 4096, p()[r + 36 >> 2] = e.blocks;
					var o = e.atime.getTime(), a = e.mtime.getTime(), i = e.ctime.getTime();
					return J[r + 40 >> 3] = BigInt(Math.floor(o / 1e3)), _()[r + 48 >> 2] = o % 1e3 * 1e3, J[r + 56 >> 3] = BigInt(Math.floor(a / 1e3)), _()[r + 64 >> 2] = a % 1e3 * 1e3, J[r + 72 >> 3] = BigInt(Math.floor(i / 1e3)), _()[r + 80 >> 2] = i % 1e3 * 1e3, J[r + 88 >> 3] = BigInt(e.ino), 0;
				},
				doMsync: function(t, n, r, o, a) {
					if (!Kt.isFile(n.node.mode)) throw new Kt.ErrnoError(43);
					if (o & 2) return 0;
					var e = c().slice(t, t + r);
					Kt.msync(n, e, a, r, o);
				},
				varargs: void 0,
				get: function() {
					H(Xt.varargs != null), Xt.varargs += 4;
					var e = p()[Xt.varargs - 4 >> 2];
					return e;
				},
				getStr: function(t) {
					var e = Qt(t);
					return e;
				},
				getStreamFromFD: function(t) {
					var e = Kt.getStreamChecked(t);
					return e;
				}
			};
			function Yt(e) {
				if (T) return ya(1, 1, e);
				V = e, de() || (nn.terminateAllThreads(), h.onExit && h.onExit(e), U = !0), R(e, new ft(e));
			}
			var Jt = function(t, n) {
				if (V = t, oc(), T) throw H(!n), an(t), "unwind";
				if (de() && !n) {
					var e = "program exited (with status: " + t + "), but keepRuntimeAlive() is set (counter=" + ce + ") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)";
					C(e), A(e);
				}
				Yt(t);
			}, Zt = Jt, en = function(t) {
				return H(typeof t == "number"), t >>>= 0, "0x" + t.toString(16).padStart(8, "0");
			}, tn = function(t) {
				if (t instanceof ft || t == "unwind") return V;
				ae(), t instanceof WebAssembly.RuntimeError && _l() <= 0 && A("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 1048576)"), R(1, t);
			}, nn = {
				unusedWorkers: [],
				runningWorkers: [],
				tlsInitFunctions: [],
				pthreads: {},
				nextWorkerID: 1,
				debugInit: function() {
					function e() {
						var e = 0;
						return ue && typeof Fi != "undefined" && (e = Fi()), "w:" + (h.workerID || 0) + ",t:" + en(e) + ": ";
					}
					var t = Ge;
					Ge = function(r) {
						return t(e() + r);
					};
				},
				init: function() {
					nn.debugInit(), T ? nn.initWorker() : nn.initMainThread();
				},
				initMainThread: function() {
					var e = typeof h.pthreadPoolSizeOverride == "number" ? h.pthreadPoolSizeOverride : 20;
					for (o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_POOL_ALLOC_START); e--;) nn.allocateUnusedWorker();
					fe(function() {
						Re("loading-workers");
						var e = 15e3, t = !1, n = function(a) {
							if (!t) {
								t = !0, clearTimeout(r);
								var n = 0;
								try {
									if (a) {
										var i = [], l = [];
										for (var s of nn.unusedWorkers) s.loaded ? i.push(s) : l.push(s);
										for (var s of l) try {
											gt(s);
										} catch (e) {
											A("voip: ThreadPoolManager: failed to terminate timed-out pthread worker " + s.workerID + ": " + e);
										}
										n = l.length, nn.unusedWorkers = i, A("voip: ThreadPoolManager: pthread worker prewarm timed out after " + e + "ms; continuing with " + i.length + " ready workers");
									}
								} finally {
									Le("loading-workers"), o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_POOL_ALLOC_END, {
										bool: { worker_pool_alloc_timed_out: a },
										int: {
											worker_pool_ready_count: nn.unusedWorkers.length,
											worker_pool_timed_out_count: n
										}
									});
								}
							}
						}, r = setTimeout(function() {
							return n(!0);
						}, e);
						nn.loadWasmModuleToAllWorkers(function() {
							return n(!1);
						});
					});
				},
				initWorker: function() {
					O = !1;
				},
				setExitStatus: function(t) {
					V = t;
				},
				terminateAllThreads__deps: ["$terminateWorker"],
				terminateAllThreads: function() {
					H(!T, "Internal Error! terminateAllThreads() can only ever be called from main application thread!");
					for (var e of nn.runningWorkers) gt(e);
					for (var e of nn.unusedWorkers) gt(e);
					nn.unusedWorkers = [], nn.runningWorkers = [], nn.pthreads = [];
				},
				returnWorkerToPool: function(t) {
					var e = t.pthread_ptr;
					delete nn.pthreads[e], nn.unusedWorkers.push(t), nn.runningWorkers.splice(nn.runningWorkers.indexOf(t), 1), t.pthread_ptr = 0, rl(e);
				},
				receiveObjectTransfer: function(t) {},
				threadInitTLS: function() {
					nn.tlsInitFunctions.forEach(function(e) {
						return e();
					});
				},
				loadWasmModuleToWorker: function(r) {
					return new Promise(function(n) {
						r.addMessageListener("cmd", function(e) {
							var t = e, o = t.cmd;
							if (t.targetThread && t.targetThread != Fi()) {
								var a = nn.pthreads[t.targetThread];
								a ? a.postMessage(babelHelpers.extends({}, t, { type: "cmd" }), t.transferList) : A("Internal error! Worker sent a message \"" + o + "\" to target pthread " + t.targetThread + ", but that thread no longer exists!");
								return;
							}
							o === "checkMailbox" ? Qo() : o === "spawnThread" ? vt(t) : o === "cleanupThread" ? Ct(t.thread) : o === "killThread" ? ht(t.thread) : o === "cancelThread" ? yt(t.thread) : o === "loaded" ? (r.loaded = !0, n(r)) : o === "alert" ? alert("Thread " + t.threadId + ": " + t.text) : t.target === "setimmediate" ? r.postMessage(babelHelpers.extends({}, t, { type: "cmd" })) : o === "callHandler" ? h[t.handler].apply(h, t.args) : o && A("worker sent an unknown command " + o);
						}), r.addMessageListener("waWasmWorkerCompatibleCallback", function(t) {
							var n = t.type, r = t.__name, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
							i.WhatsAppVoipWasmWorkerCompatibleCallbacks[r](o);
						}), r.onerror = function(e) {
							var t = "worker sent an error!";
							throw r.pthread_ptr && (t = "Pthread " + en(r.pthread_ptr) + " sent an error!"), A(t + " " + e.filename + ":" + e.lineno + ": " + e.message), e;
						}, H(B instanceof WebAssembly.Memory, "WebAssembly memory should have been loaded by now!"), H(q instanceof WebAssembly.Module, "WebAssembly Module should have been loaded by now!");
						var o = [], a = [
							"onExit",
							"onAbort",
							"print",
							"printErr"
						];
						for (var l of a) Object.prototype.hasOwnProperty.call(h, l) && o.push(l);
						r.workerID = nn.nextWorkerID++, r.postMessage({
							cmd: "load",
							handlers: o,
							urlOrBlob: h.mainScriptUrlOrBlob || t,
							wasmMemory: B,
							wasmModule: q,
							workerID: r.workerID,
							wasmVariant: "prod-lab",
							type: "cmd"
						});
					});
				},
				loadWasmModuleToAllWorkers: function(t) {
					if (T) return t();
					var e = Promise.all(nn.unusedWorkers.map(nn.loadWasmModuleToWorker));
					e.then(t);
				},
				allocateUnusedWorker: function() {
					var e, t = o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebVoipWebWasmWorkerResource"));
					e = new (o("WorkerMessagePort")).WorkerMessagePort(t, "WAWebVoipWebWasmWorker"), o("WorkerClient").init(e), nn.unusedWorkers.push(e);
				},
				getNewWorker: function() {
					return nn.unusedWorkers.length == 0 && (A("Tried to spawn a new thread, but the thread pool is exhausted.\nThis might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\nIf you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`.\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`."), nn.allocateUnusedWorker(), nn.loadWasmModuleToWorker(nn.unusedWorkers[0])), nn.unusedWorkers.pop();
				}
			};
			h.PThread = nn;
			var rn = function(t) {
				for (; t.length > 0;) t.shift()(h);
			};
			function on() {
				var e = Fi(), t = p()[e + 52 >> 2], n = p()[e + 56 >> 2], r = t - n;
				H(t != 0), H(r != 0), H(t > r, "stackHigh must be higher then stackLow"), ul(t, r), ml(t), oe();
			}
			h.establishStackSpace = on;
			function an(e) {
				if (T) return ya(2, 0, e);
				Zt(e);
			}
			var ln = function(t) {
				var e = dl(), n = t();
				return ml(e), n;
			}, sn = function(t) {
				return ln(function() {
					var e = pl(4), n = pl(4);
					fl(t, e, n);
					var r = _()[e >> 2], o = _()[n >> 2], a = Qt(r);
					Ni(r);
					var i;
					return o && (i = Qt(o), Ni(o)), [a, i];
				});
			};
			function un(e) {
				return sn(e);
			}
			h.getExceptionMessage = un;
			var cn = function(t) {
				return re.get(t);
			};
			function dn(e, t) {
				var n = cn(e)(t);
				ae();
				function r(e) {
					de() ? nn.setExitStatus(e) : ol(e);
				}
				r(n);
			}
			h.invokeEntryPoint = dn;
			function mn(e) {
				nn.tlsInitFunctions.push(e);
			}
			var pn = function(t) {
				pn.shown || (pn.shown = {}), pn.shown[t] || (pn.shown[t] = 1, A(t));
			}, _n = function(t, n, r, o) {
				Ee("Assertion failed: " + Qt(t) + ", at: " + [
					n ? Qt(n) : "unknown filename",
					r,
					o ? Qt(o) : "unknown function"
				]);
			}, fn = [], gn = 0;
			function hn(e) {
				var t = new vn(e);
				return t.get_caught() || (t.set_caught(!0), gn--), t.set_rethrown(!1), fn.push(t), Vi(t.excPtr), t.get_exception_ptr();
			}
			function yn() {
				if (!fn.length) return 0;
				var e = fn[fn.length - 1];
				return Vi(e.excPtr), e.excPtr;
			}
			var Cn = 0;
			function bn() {
				il(0, 0), H(fn.length > 0);
				var e = fn.pop();
				Hi(e.excPtr), Cn = 0;
			}
			function vn(e) {
				this.excPtr = e, this.ptr = e - 24, this.set_type = function(e) {
					_()[this.ptr + 4 >> 2] = e;
				}, this.get_type = function() {
					return _()[this.ptr + 4 >> 2];
				}, this.set_destructor = function(e) {
					_()[this.ptr + 8 >> 2] = e;
				}, this.get_destructor = function() {
					return _()[this.ptr + 8 >> 2];
				}, this.set_caught = function(e) {
					e = e ? 1 : 0, l()[this.ptr + 12 >> 0] = e;
				}, this.get_caught = function() {
					return l()[this.ptr + 12 >> 0] != 0;
				}, this.set_rethrown = function(e) {
					e = e ? 1 : 0, l()[this.ptr + 13 >> 0] = e;
				}, this.get_rethrown = function() {
					return l()[this.ptr + 13 >> 0] != 0;
				}, this.init = function(e, t) {
					this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t);
				}, this.set_adjusted_ptr = function(e) {
					_()[this.ptr + 16 >> 2] = e;
				}, this.get_adjusted_ptr = function() {
					return _()[this.ptr + 16 >> 2];
				}, this.get_exception_ptr = function() {
					var e = hl(this.get_type());
					if (e) return _()[this.excPtr >> 2];
					var t = this.get_adjusted_ptr();
					return t !== 0 ? t : this.excPtr;
				};
			}
			function Sn(e) {
				throw Cn || (Cn = new Pe(e)), Cn;
			}
			var Rn = function(t) {
				var e = Cn && Cn.excPtr;
				if (!e) return ll(0), 0;
				var n = new vn(e);
				n.set_adjusted_ptr(e);
				var r = n.get_type();
				if (!r) return ll(0), e;
				for (var o in t) {
					var a = t[o];
					if (a === 0 || a === r) break;
					var i = n.ptr + 16;
					if (gl(a, r, i)) return ll(a), e;
				}
				return ll(r), e;
			}, Ln = function() {
				return Rn([]);
			}, En = function(t) {
				return Rn([t]);
			}, kn = function(t, n) {
				return Rn([t, n]);
			};
			function In(e) {
				var t = new vn(e).get_exception_ptr();
				return t;
			}
			function Tn() {
				var e = fn.pop();
				e || Ee("no exception to throw");
				var t = e.excPtr;
				throw e.get_rethrown() || (fn.push(e), e.set_rethrown(!0), e.set_caught(!1), gn++), Cn = new Pe(t), Cn;
			}
			function Dn(e) {
				if (e) {
					var t = new vn(e);
					fn.push(t), t.set_rethrown(!0), Tn();
				}
			}
			function xn(e, t, n) {
				var r = new vn(e);
				throw r.init(t, n), Cn = new Pe(e), gn++, Cn;
			}
			function $n() {
				return gn;
			}
			function Pn(e) {
				Qi(e, !E, 1, !L, 1048576, !1), nn.threadInitTLS();
			}
			function Nn(e) {
				T ? postMessage({
					cmd: "cleanupThread",
					thread: e,
					type: "cmd"
				}) : Ct(e);
			}
			function Mn(e, t, n, r) {
				return T ? ya(3, 1, e, t, n, r) : wn(e, t, n, r);
			}
			function wn(e, t, n, r) {
				if (typeof SharedArrayBuffer == "undefined") return A("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
				var o = [], a = 0;
				if (T && (o.length === 0 || a)) return Mn(e, t, n, r);
				var i = {
					startRoutine: n,
					pthread_ptr: e,
					arg: r,
					transferList: o
				};
				return T ? (i.cmd = "spawnThread", postMessage(babelHelpers.extends({}, i, { type: "cmd" }), o), 0) : vt(i);
			}
			function An(e) {
				if (T) return ya(4, 1, e);
				try {
					return e = Xt.getStr(e), Kt.chdir(e), 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			var Fn = function(t) {
				return p()[Ai() >> 2] = t, t;
			};
			function On(e, t, n) {
				if (T) return ya(5, 1, e, t, n);
				Xt.varargs = n;
				try {
					var r = Xt.getStreamFromFD(e);
					switch (t) {
						case 0: {
							var o = Xt.get();
							if (o < 0) return -28;
							var a;
							return a = Kt.createStream(r, o), a.fd;
						}
						case 1:
						case 2: return 0;
						case 3: return r.flags;
						case 4: {
							var o = Xt.get();
							return r.flags |= o, 0;
						}
						case 5: {
							var o = Xt.get(), i = 0;
							return d()[o + i >> 1] = 2, 0;
						}
						case 6:
						case 7: return 0;
						case 16:
						case 8: return -28;
						case 9: return Fn(28), -1;
						default: return -28;
					}
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Bn(e, t) {
				if (T) return ya(6, 1, e, t);
				try {
					var n = Xt.getStreamFromFD(e);
					return Xt.doStat(Kt.stat, n.path, t);
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			var Wn = 9007199254740992, qn = -9007199254740992;
			function Un(e) {
				return e < qn || e > Wn ? NaN : Number(e);
			}
			function Vn(e, t) {
				if (T) return ya(7, 1, e, t);
				t = Un(t);
				try {
					return isNaN(t) ? 61 : (Kt.ftruncate(e, t), 0);
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			var Hn = function(t, n, r) {
				return H(typeof r == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), xt(t, c(), n, r);
			};
			function Gn(e, t, n) {
				if (T) return ya(8, 1, e, t, n);
				try {
					var r = Xt.getStreamFromFD(e);
					r.getdents || (r.getdents = Kt.readdir(r.path));
					for (var o = 280, a = 0, i = Kt.llseek(r, 0, 1), s = Math.floor(i / o); s < r.getdents.length && a + o <= n;) {
						var u, c, m = r.getdents[s];
						if (m === ".") u = r.node.id, c = 4;
						else if (m === "..") {
							var p = Kt.lookupPath(r.path, { parent: !0 });
							u = p.node.id, c = 4;
						} else {
							var _ = Kt.lookupNode(r.node, m);
							u = _.id, c = Kt.isChrdev(_.mode) ? 2 : Kt.isDir(_.mode) ? 4 : Kt.isLink(_.mode) ? 10 : 8;
						}
						H(u), J[t + a >> 3] = BigInt(u), J[t + a + 8 >> 3] = BigInt((s + 1) * o), d()[t + a + 16 >> 1] = 280, l()[t + a + 18 >> 0] = c, Hn(m, t + a + 19, 256), a += o, s += 1;
					}
					return Kt.llseek(r, s * o, 0), a;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function zn(e, t, n) {
				if (T) return ya(9, 1, e, t, n);
				Xt.varargs = n;
				try {
					var r = Xt.getStreamFromFD(e);
					switch (t) {
						case 21509: return r.tty ? 0 : -59;
						case 21505: {
							if (!r.tty) return -59;
							if (r.tty.ops.ioctl_tcgets) {
								var o = r.tty.ops.ioctl_tcgets(r), a = Xt.get();
								p()[a >> 2] = o.c_iflag || 0, p()[a + 4 >> 2] = o.c_oflag || 0, p()[a + 8 >> 2] = o.c_cflag || 0, p()[a + 12 >> 2] = o.c_lflag || 0;
								for (var i = 0; i < 32; i++) l()[a + i + 17 >> 0] = o.c_cc[i] || 0;
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
								for (var a = Xt.get(), s = p()[a >> 2], u = p()[a + 4 >> 2], c = p()[a + 8 >> 2], m = p()[a + 12 >> 2], _ = [], i = 0; i < 32; i++) _.push(l()[a + i + 17 >> 0]);
								return r.tty.ops.ioctl_tcsets(r.tty, t, {
									c_iflag: s,
									c_oflag: u,
									c_cflag: c,
									c_lflag: m,
									c_cc: _
								});
							}
							return 0;
						}
						case 21519: {
							if (!r.tty) return -59;
							var a = Xt.get();
							return p()[a >> 2] = 0, 0;
						}
						case 21520: return r.tty ? -28 : -59;
						case 21531: {
							var a = Xt.get();
							return Kt.ioctl(r, t, a);
						}
						case 21523: {
							if (!r.tty) return -59;
							if (r.tty.ops.ioctl_tiocgwinsz) {
								var f = r.tty.ops.ioctl_tiocgwinsz(r.tty), a = Xt.get();
								d()[a >> 1] = f[0], d()[a + 2 >> 1] = f[1];
							}
							return 0;
						}
						case 21524: return r.tty ? 0 : -59;
						case 21515: return r.tty ? 0 : -59;
						default: return -28;
					}
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function jn(e, t) {
				if (T) return ya(10, 1, e, t);
				try {
					return e = Xt.getStr(e), Xt.doStat(Kt.lstat, e, t);
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Kn(e, t, n) {
				if (T) return ya(11, 1, e, t, n);
				try {
					return t = Xt.getStr(t), t = Xt.calculateAt(e, t), t = St.normalize(t), t[t.length - 1] === "/" && (t = t.substr(0, t.length - 1)), Kt.mkdir(t, n, 0), 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Qn(e, t, n, r) {
				if (T) return ya(12, 1, e, t, n, r);
				try {
					t = Xt.getStr(t);
					var o = r & 256, a = r & 4096;
					return r = r & -6401, H(!r, "unknown flags in __syscall_newfstatat: " + r), t = Xt.calculateAt(e, t, a), Xt.doStat(o ? Kt.lstat : Kt.stat, t, n);
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Xn(e, t, n, r) {
				if (T) return ya(13, 1, e, t, n, r);
				Xt.varargs = r;
				try {
					t = Xt.getStr(t), t = Xt.calculateAt(e, t);
					var o = r ? Xt.get() : 0;
					return Kt.open(t, n, o).fd;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Yn(e, t) {
				if (T) return ya(14, 1, e, t);
				try {
					return e = Xt.getStr(e), Xt.doStat(Kt.stat, e, t);
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Jn(e, t, n) {
				if (T) return ya(15, 1, e, t, n);
				try {
					return t = Xt.getStr(t), t = Xt.calculateAt(e, t), n === 0 ? Kt.unlink(t) : n === 512 ? Kt.rmdir(t) : Ee("Invalid flags passed to unlinkat"), 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function Zn(e) {
				if (e === null) return "null";
				var t = typeof e;
				return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
			}
			function er() {
				for (var e = new Array(256), t = 0; t < 256; ++t) e[t] = String.fromCharCode(t);
				tr = e;
			}
			var tr = void 0;
			function nr(e) {
				for (var t = "", n = e; c()[n];) t += tr[c()[n++]];
				return t;
			}
			var rr = {}, or = {}, ar = {}, ir = void 0;
			function lr(e) {
				throw new ir(e);
			}
			var sr = void 0;
			function ur(e) {
				throw new sr(e);
			}
			function cr(e, t, n) {
				e.forEach(function(e) {
					ar[e] = t;
				});
				function r(t) {
					var r = n(t);
					r.length !== e.length && ur("Mismatched type converter count");
					for (var o = 0; o < e.length; ++o) mr(e[o], r[o]);
				}
				var o = new Array(t.length), a = [], i = 0;
				t.forEach(function(e, t) {
					Object.prototype.hasOwnProperty.call(or, e) ? o[t] = or[e] : (a.push(e), Object.prototype.hasOwnProperty.call(rr, e) || (rr[e] = []), rr[e].push(function() {
						o[t] = or[e], ++i, i === a.length && r(o);
					}));
				}), a.length === 0 && r(o);
			}
			function dr(e, t, n) {
				n === void 0 && (n = {});
				var r = t.name;
				if (e || lr("type \"" + r + "\" must have a positive integer typeid pointer"), Object.prototype.hasOwnProperty.call(or, e)) {
					if (n.ignoreDuplicateRegistrations) return;
					lr("Cannot register type '" + r + "' twice");
				}
				if (or[e] = t, delete ar[e], Object.prototype.hasOwnProperty.call(rr, e)) {
					var o = rr[e];
					delete rr[e], o.forEach(function(e) {
						return e();
					});
				}
			}
			function mr(e, t, n) {
				if (n === void 0 && (n = {}), !("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
				return dr(e, t, n);
			}
			function pr(e, t, n) {
				switch (t) {
					case 0: return n ? function(t) {
						return l()[t];
					} : function(t) {
						return c()[t];
					};
					case 1: return n ? function(t) {
						return d()[t >> 1];
					} : function(t) {
						return m()[t >> 1];
					};
					case 2: return n ? function(t) {
						return p()[t >> 2];
					} : function(t) {
						return _()[t >> 2];
					};
					case 3: return n ? function(t) {
						return J[t >> 3];
					} : function(t) {
						return Z[t >> 3];
					};
					default: throw new TypeError("Unknown integer type: " + e);
				}
			}
			function _r(e, t, n, r, o) {
				t = nr(t);
				var a = fr(n), i = t.indexOf("u") != -1;
				i && (o = (BigInt(1) << BigInt(64)) - BigInt(1)), mr(e, {
					name: t,
					fromWireType: function(t) {
						return t;
					},
					toWireType: function(n, a) {
						if (typeof a != "bigint" && typeof a != "number") throw new TypeError("Cannot convert \"" + Zn(a) + "\" to " + this.name);
						if (a < r || a > o) throw new TypeError("Passing a number \"" + Zn(a) + "\" from JS side to C/C++ side to an argument of type \"" + t + "\", which is outside the valid range [" + r + ", " + o + "]!");
						return a;
					},
					argPackAdvance: 8,
					readValueFromPointer: pr(t, a, !i),
					destructorFunction: null
				});
			}
			function fr(e) {
				switch (e) {
					case 1: return 0;
					case 2: return 1;
					case 4: return 2;
					case 8: return 3;
					default: throw new TypeError("Unknown type size: " + e);
				}
			}
			function gr(e, t, n, r, o) {
				var a = fr(n);
				t = nr(t), mr(e, {
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
						if (n === 1) e = l();
						else if (n === 2) e = d();
						else if (n === 4) e = p();
						else throw new TypeError("Unknown boolean type size: " + t);
						return this.fromWireType(e[r >> a]);
					},
					destructorFunction: null,
					jsType: "boolean"
				});
			}
			function hr(e) {
				if (!(this instanceof Hr) || !(e instanceof Hr)) return !1;
				for (var t = this.$$.ptrType.registeredClass, n = this.$$.ptr, r = e.$$.ptrType.registeredClass, o = e.$$.ptr; t.baseClass;) n = t.upcast(n), t = t.baseClass;
				for (; r.baseClass;) o = r.upcast(o), r = r.baseClass;
				return t === r && n === o;
			}
			function yr(e) {
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
			function Cr(e) {
				function t(e) {
					return e.$$.ptrType.registeredClass.name;
				}
				lr(t(e) + " instance already deleted");
			}
			var br = !1;
			function vr(e) {}
			function Sr(e) {
				e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
			}
			function Rr(e) {
				e.count.value -= 1;
				var t = e.count.value === 0;
				t && Sr(e);
			}
			function Lr(e, t, n) {
				if (t === n) return e;
				if (n.baseClass === void 0) return null;
				var r = Lr(e, t, n.baseClass);
				return r === null ? null : n.downcast(r);
			}
			var Er = {};
			function kr() {
				return Object.keys(Nr).length;
			}
			function Ir() {
				var e = [];
				for (var t in Nr) Object.prototype.hasOwnProperty.call(Nr, t) && e.push(Nr[t]);
				return e;
			}
			var Tr = [];
			function Dr() {
				for (; Tr.length;) {
					var e = Tr.pop();
					e.$$.deleteScheduled = !1, e.delete();
				}
			}
			var xr = void 0;
			function $r(e) {
				xr = e, Tr.length && xr && xr(Dr);
			}
			function Pr() {
				h.getInheritedInstanceCount = kr, h.getLiveInheritedInstances = Ir, h.flushPendingDeletes = Dr, h.setDelayFunction = $r;
			}
			var Nr = {};
			function Mr(e, t) {
				for (t === void 0 && lr("ptr should not be undefined"); e.baseClass;) t = e.upcast(t), e = e.baseClass;
				return t;
			}
			function wr(e, t) {
				return t = Mr(e, t), Nr[t];
			}
			function Ar(e, t) {
				(!t.ptrType || !t.ptr) && ur("makeClassHandle requires ptr and ptrType");
				var n = !!t.smartPtrType, r = !!t.smartPtr;
				return n !== r && ur("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, Or(Object.create(e, { $$: { value: t } }));
			}
			function Fr(e) {
				var t = this.getPointee(e);
				if (!t) return this.destructor(e), null;
				var n = wr(this.registeredClass, t);
				if (n !== void 0) {
					if (n.$$.count.value === 0) return n.$$.ptr = t, n.$$.smartPtr = e, n.clone();
					var r = n.clone();
					return this.destructor(e), r;
				}
				function o() {
					return this.isSmartPointer ? Ar(this.registeredClass.instancePrototype, {
						ptrType: this.pointeeType,
						ptr: t,
						smartPtrType: this,
						smartPtr: e
					}) : Ar(this.registeredClass.instancePrototype, {
						ptrType: this,
						ptr: e
					});
				}
				var a = this.registeredClass.getActualType(t), i = Er[a];
				if (!i) return o.call(this);
				var l;
				this.isConst ? l = i.constPointerType : l = i.pointerType;
				var s = Lr(t, this.registeredClass, l.registeredClass);
				return s === null ? o.call(this) : this.isSmartPointer ? Ar(l.registeredClass.instancePrototype, {
					ptrType: l,
					ptr: s,
					smartPtrType: this,
					smartPtr: e
				}) : Ar(l.registeredClass.instancePrototype, {
					ptrType: l,
					ptr: s
				});
			}
			var Or = function(t) {
				return typeof FinalizationRegistry == "undefined" ? (Or = function(t) {
					return t;
				}, t) : (br = new FinalizationRegistry(function(e) {
					e.leakWarning.stack.replace(/^Error: /, ""), Rr(e.$$);
				}), Or = function(t) {
					var e = t.$$, n = !!e.smartPtr;
					if (n) {
						var r = { $$: e }, o = e.ptrType.registeredClass;
						r.leakWarning = new Error("Embind found a leaked C++ instance " + o.name + " <" + en(e.ptr) + `>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`), "captureStackTrace" in Error && Error.captureStackTrace(r.leakWarning, Fr), br.register(t, r, t);
					}
					return t;
				}, vr = function(t) {
					return br.unregister(t);
				}, Or(t));
			};
			function Br() {
				if (this.$$.ptr || Cr(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
				var e = Or(Object.create(Object.getPrototypeOf(this), { $$: { value: yr(this.$$) } }));
				return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
			}
			function Wr() {
				this.$$.ptr || Cr(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && lr("Object already scheduled for deletion"), vr(this), Rr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
			}
			function qr() {
				return !this.$$.ptr;
			}
			function Ur() {
				return this.$$.ptr || Cr(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && lr("Object already scheduled for deletion"), Tr.push(this), Tr.length === 1 && xr && xr(Dr), this.$$.deleteScheduled = !0, this;
			}
			function Vr() {
				Hr.prototype.isAliasOf = hr, Hr.prototype.clone = Br, Hr.prototype.delete = Wr, Hr.prototype.isDeleted = qr, Hr.prototype.deleteLater = Ur;
			}
			function Hr() {}
			var Gr = 48, zr = 57;
			function jr(e) {
				if (e === void 0) return "_unknown";
				e = e.replace(/[^a-zA-Z0-9_]/g, "$");
				var t = e.charCodeAt(0);
				return t >= Gr && t <= zr ? "_" + e : e;
			}
			function Kr(e, t) {
				var n;
				return e = jr(e), (n = {}, n[e] = function() {
					return t.apply(this, arguments);
				}, n)[e];
			}
			function Qr(e, t, n) {
				if (e[t].overloadTable === void 0) {
					var r = e[t];
					e[t] = function() {
						return Object.prototype.hasOwnProperty.call(e[t].overloadTable, arguments.length) || lr("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"), e[t].overloadTable[arguments.length].apply(this, arguments);
					}, e[t].overloadTable = [], e[t].overloadTable[r.argCount] = r;
				}
			}
			function Xr(e, t, n) {
				Object.prototype.hasOwnProperty.call(h, e) ? ((n === void 0 || h[e].overloadTable !== void 0 && h[e].overloadTable[n] !== void 0) && lr("Cannot register public name '" + e + "' twice"), Qr(h, e, e), Object.prototype.hasOwnProperty.call(h, n) && lr("Cannot register multiple overloads of a function with the same number of arguments (" + n + ")!"), h[e].overloadTable[n] = t) : (h[e] = t, n !== void 0 && (h[e].numArguments = n));
			}
			function Yr(e, t, n, r, o, a, i, l) {
				this.name = e, this.constructor = t, this.instancePrototype = n, this.rawDestructor = r, this.baseClass = o, this.getActualType = a, this.upcast = i, this.downcast = l, this.pureVirtualFunctions = [];
			}
			function Jr(e, t, n) {
				for (; t !== n;) t.upcast || lr("Expected null or instance of " + n.name + ", got an instance of " + t.name), e = t.upcast(e), t = t.baseClass;
				return e;
			}
			function Zr(e, t) {
				if (t === null) return this.isReference && lr("null is not a valid " + this.name), 0;
				t.$$ || lr("Cannot pass \"" + Zn(t) + "\" as a " + this.name), t.$$.ptr || lr("Cannot pass deleted object as a pointer of type " + this.name);
				var n = t.$$.ptrType.registeredClass, r = Jr(t.$$.ptr, n, this.registeredClass);
				return r;
			}
			function eo(e, t) {
				var n;
				if (t === null) return this.isReference && lr("null is not a valid " + this.name), this.isSmartPointer ? (n = this.rawConstructor(), e !== null && e.push(this.rawDestructor, n), n) : 0;
				t.$$ || lr("Cannot pass \"" + Zn(t) + "\" as a " + this.name), t.$$.ptr || lr("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && t.$$.ptrType.isConst && lr("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
				var r = t.$$.ptrType.registeredClass;
				if (n = Jr(t.$$.ptr, r, this.registeredClass), this.isSmartPointer) switch (t.$$.smartPtr === void 0 && lr("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
					case 0:
						t.$$.smartPtrType === this ? n = t.$$.smartPtr : lr("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
						break;
					case 1:
						n = t.$$.smartPtr;
						break;
					case 2:
						if (t.$$.smartPtrType === this) n = t.$$.smartPtr;
						else {
							var o = t.clone();
							n = this.rawShare(n, Io.toHandle(function() {
								o.delete();
							})), e !== null && e.push(this.rawDestructor, n);
						}
						break;
					default: lr("Unsupporting sharing policy");
				}
				return n;
			}
			function to(e, t) {
				if (t === null) return this.isReference && lr("null is not a valid " + this.name), 0;
				t.$$ || lr("Cannot pass \"" + Zn(t) + "\" as a " + this.name), t.$$.ptr || lr("Cannot pass deleted object as a pointer of type " + this.name), t.$$.ptrType.isConst && lr("Cannot convert argument of type " + t.$$.ptrType.name + " to parameter type " + this.name);
				var n = t.$$.ptrType.registeredClass, r = Jr(t.$$.ptr, n, this.registeredClass);
				return r;
			}
			function no(e) {
				return this.fromWireType(p()[e >> 2]);
			}
			function ro(e) {
				return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
			}
			function oo(e) {
				this.rawDestructor && this.rawDestructor(e);
			}
			function ao(e) {
				e !== null && e.delete();
			}
			function io() {
				lo.prototype.getPointee = ro, lo.prototype.destructor = oo, lo.prototype.argPackAdvance = 8, lo.prototype.readValueFromPointer = no, lo.prototype.deleteObject = ao, lo.prototype.fromWireType = Fr;
			}
			function lo(e, t, n, r, o, a, i, l, s, u, c) {
				this.name = e, this.registeredClass = t, this.isReference = n, this.isConst = r, this.isSmartPointer = o, this.pointeeType = a, this.sharingPolicy = i, this.rawGetPointee = l, this.rawConstructor = s, this.rawShare = u, this.rawDestructor = c, !o && t.baseClass === void 0 ? r ? (this.toWireType = Zr, this.destructorFunction = null) : (this.toWireType = to, this.destructorFunction = null) : this.toWireType = eo;
			}
			function so(e, t, n) {
				Object.prototype.hasOwnProperty.call(h, e) || ur("Replacing nonexistant public symbol"), h[e].overloadTable !== void 0 && n !== void 0 ? h[e].overloadTable[n] = t : (h[e] = t, h[e].argCount = n);
			}
			function uo(e, t) {
				e = nr(e);
				function n() {
					return cn(t);
				}
				var r = n();
				return typeof r != "function" && lr("unknown function pointer with signature " + e + ": " + t), r;
			}
			function co(e, t) {
				var n = Kr(t, function(e) {
					this.name = t, this.message = e;
					var n = new Error(e).stack;
					n !== void 0 && (this.stack = this.toString() + `
` + n.replace(/^Error(:[^\n]*)?\n/, ""));
				});
				return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
					return this.message === void 0 ? this.name : this.name + ": " + this.message;
				}, n;
			}
			var mo = void 0;
			function po(e) {
				var t = ji(e), n = nr(t);
				return Ni(t), n;
			}
			function _o(e, t) {
				var n = [], r = {};
				function o(e) {
					if (!r[e] && !or[e]) {
						if (ar[e]) {
							ar[e].forEach(o);
							return;
						}
						n.push(e), r[e] = !0;
					}
				}
				throw t.forEach(o), new mo(e + ": " + n.map(po).join([", "]));
			}
			function fo(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				c = nr(c), a = uo(o, a), l && (l = uo(i, l)), u && (u = uo(s, u)), m = uo(d, m);
				var p = jr(c);
				Xr(p, function() {
					_o("Cannot construct " + c + " due to unbound types", [r]);
				}), cr([
					e,
					t,
					n
				], r ? [r] : [], function(t) {
					t = t[0];
					var n, o;
					r ? (n = t.registeredClass, o = n.instancePrototype) : o = Hr.prototype;
					var i = Kr(p, function() {
						if (Object.getPrototypeOf(this) !== s) throw new ir("Use 'new' to construct " + c);
						if (d.constructor_body === void 0) throw new ir(c + " has no accessible constructor");
						var e = d.constructor_body[arguments.length];
						if (e === void 0) throw new ir("Tried to invoke ctor of " + c + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(d.constructor_body).toString() + ") parameters instead!");
						return e.apply(this, arguments);
					}), s = Object.create(o, { constructor: { value: i } });
					i.prototype = s;
					var d = new Yr(c, i, s, m, n, a, l, u);
					d.baseClass && (d.baseClass.__derivedClasses === void 0 && (d.baseClass.__derivedClasses = []), d.baseClass.__derivedClasses.push(d));
					var _ = new lo(c, d, !0, !1, !1), f = new lo(c + "*", d, !1, !1, !1), g = new lo(c + " const*", d, !1, !0, !1);
					return Er[e] = {
						pointerType: f,
						constPointerType: g
					}, so(p, i), [
						_,
						f,
						g
					];
				});
			}
			function go(e, t) {
				for (var n = [], r = 0; r < e; r++) n.push(_()[t + r * 4 >> 2]);
				return n;
			}
			function ho(e) {
				for (; e.length;) {
					var t = e.pop(), n = e.pop();
					n(t);
				}
			}
			function yo(e, t, n, r, o, a) {
				var i = t.length;
				i < 2 && lr("argTypes array size mismatch! Must at least get return value and 'this' types!"), H(!a, "Async bindings are only supported with JSPI.");
				for (var l = t[1] !== null && n !== null, s = !1, u = 1; u < t.length; ++u) if (t[u] !== null && t[u].destructorFunction === void 0) {
					s = !0;
					break;
				}
				var c = t[0].name !== "void", d = i - 2, m = new Array(d), p = [], _ = [];
				return function() {
					arguments.length !== d && lr("function " + e + " called with " + arguments.length + " arguments, expected " + d + " args!"), _.length = 0;
					var n;
					p.length = l ? 2 : 1, p[0] = o, l && (n = t[1].toWireType(_, this), p[1] = n);
					for (var a = 0; a < d; ++a) m[a] = t[a + 2].toWireType(_, arguments[a]), p.push(m[a]);
					var i = r.apply(null, p);
					function u(e) {
						if (s) ho(_);
						else for (var r = l ? 1 : 2; r < t.length; r++) {
							var o = r === 1 ? n : m[r - 2];
							t[r].destructorFunction !== null && t[r].destructorFunction(o);
						}
						if (c) return t[0].fromWireType(e);
					}
					return u(i);
				};
			}
			function Co(e, t, n, r, o, a) {
				H(t > 0);
				var i = go(t, n);
				o = uo(r, o), cr([], [e], function(e) {
					e = e[0];
					var n = "constructor " + e.name;
					if (e.registeredClass.constructor_body === void 0 && (e.registeredClass.constructor_body = []), e.registeredClass.constructor_body[t - 1] !== void 0) throw new ir("Cannot register multiple constructors with identical number of parameters (" + (t - 1) + ") for class '" + e.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
					return e.registeredClass.constructor_body[t - 1] = function() {
						_o("Cannot construct " + e.name + " due to unbound types", i);
					}, cr([], i, function(r) {
						return r.splice(1, 0, null), e.registeredClass.constructor_body[t - 1] = yo(n, r, null, o, a), [];
					}), [];
				});
			}
			function bo(e, t, n, r, o, a, i, l, s) {
				var u = go(n, r);
				t = nr(t), a = uo(o, a), cr([], [e], function(e) {
					e = e[0];
					var r = e.name + "." + t;
					t.startsWith("@@") && (t = Symbol[t.substring(2)]), l && e.registeredClass.pureVirtualFunctions.push(t);
					function o() {
						_o("Cannot call " + r + " due to unbound types", u);
					}
					var c = e.registeredClass.instancePrototype, d = c[t];
					return d === void 0 || d.overloadTable === void 0 && d.className !== e.name && d.argCount === n - 2 ? (o.argCount = n - 2, o.className = e.name, c[t] = o) : (Qr(c, t, r), c[t].overloadTable[n - 2] = o), cr([], u, function(o) {
						var l = yo(r, o, e, a, i, s);
						return c[t].overloadTable === void 0 ? (l.argCount = n - 2, c[t] = l) : c[t].overloadTable[n - 2] = l, [];
					}), [];
				});
			}
			function vo() {
				Object.assign(So.prototype, {
					get: function(t) {
						return H(this.allocated[t] !== void 0, "invalid handle: " + t), this.allocated[t];
					},
					has: function(t) {
						return this.allocated[t] !== void 0;
					},
					allocate: function(t) {
						var e = this.freelist.pop() || this.allocated.length;
						return this.allocated[e] = t, e;
					},
					free: function(t) {
						H(this.allocated[t] !== void 0), this.allocated[t] = void 0, this.freelist.push(t);
					}
				});
			}
			function So() {
				this.allocated = [void 0], this.freelist = [];
			}
			var Ro = new So();
			function Lo(e) {
				e >= Ro.reserved && --Ro.get(e).refcount === 0 && Ro.free(e);
			}
			function Eo() {
				for (var e = 0, t = Ro.reserved; t < Ro.allocated.length; ++t) Ro.allocated[t] !== void 0 && ++e;
				return e;
			}
			function ko() {
				Ro.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }), Ro.reserved = Ro.allocated.length, h.count_emval_handles = Eo;
			}
			var Io = {
				toValue: function(t) {
					return t || lr("Cannot use deleted val. handle = " + t), Ro.get(t).value;
				},
				toHandle: function(t) {
					switch (t) {
						case void 0: return 1;
						case null: return 2;
						case !0: return 3;
						case !1: return 4;
						default: return Ro.allocate({
							refcount: 1,
							value: t
						});
					}
				}
			};
			function To(e, t) {
				t = nr(t), mr(e, {
					name: t,
					fromWireType: function(t) {
						var e = Io.toValue(t);
						return Lo(t), e;
					},
					toWireType: function(t, n) {
						return Io.toHandle(n);
					},
					argPackAdvance: 8,
					readValueFromPointer: no,
					destructorFunction: null
				});
			}
			function Do(e, t) {
				switch (t) {
					case 2: return function(e) {
						return this.fromWireType(f()[e >> 2]);
					};
					case 3: return function(e) {
						return this.fromWireType(g()[e >> 3]);
					};
					default: throw new TypeError("Unknown float type: " + e);
				}
			}
			function xo(e, t, n) {
				var r = fr(n);
				t = nr(t), mr(e, {
					name: t,
					fromWireType: function(t) {
						return t;
					},
					toWireType: function(t, n) {
						if (typeof n != "number" && typeof n != "boolean") throw new TypeError("Cannot convert " + Zn(n) + " to " + this.name);
						return n;
					},
					argPackAdvance: 8,
					readValueFromPointer: Do(t, r),
					destructorFunction: null,
					jsType: "number"
				});
			}
			function $o(e, t, n, r, o, a, i) {
				var l = go(t, n);
				e = nr(e), o = uo(r, o), Xr(e, function() {
					_o("Cannot call " + e + " due to unbound types", l);
				}, t - 1), cr([], l, function(n) {
					var r = [n[0], null].concat(n.slice(1));
					return so(e, yo(e, r, null, o, a, i), t - 1), h.__WA_INVOKER_FUNCS == null && (h.__WA_INVOKER_FUNCS = new Map()), h.__WA_INVOKER_FUNCS.set(e, {
						argTypes: n.slice(1),
						returnType: n[0]
					}), [];
				});
			}
			function Po(e, t, n, r, o) {
				t = nr(t), o === -1 && (o = 4294967295);
				var a = fr(n), i = function(t) {
					return t;
				};
				if (r === 0) {
					var l = 32 - 8 * n;
					i = function(t) {
						return t << l >>> l;
					};
				}
				var s = t.includes("unsigned"), u = function(n, a) {
					if (typeof n != "number" && typeof n != "boolean") throw new TypeError("Cannot convert \"" + Zn(n) + "\" to " + a);
					if (n < r || n > o) throw new TypeError("Passing a number \"" + Zn(n) + "\" from JS side to C/C++ side to an argument of type \"" + t + "\", which is outside the valid range [" + r + ", " + o + "]!");
				}, c;
				s ? c = function(t, n) {
					return u(n, this.name), n >>> 0;
				} : c = function(t, n) {
					return u(n, this.name), n;
				}, mr(e, {
					name: t,
					fromWireType: i,
					toWireType: c,
					argPackAdvance: 8,
					readValueFromPointer: pr(t, a, r !== 0),
					destructorFunction: null,
					jsType: "number"
				});
			}
			function No(e, t, n) {
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
					var t = _(), n = t[e], r = t[e + 1];
					return new o(t.buffer, r, n);
				}
				n = nr(n), mr(e, {
					name: n,
					fromWireType: a,
					argPackAdvance: 8,
					readValueFromPointer: a
				}, { ignoreDuplicateRegistrations: !0 });
			}
			function Mo(e, t) {
				t = nr(t);
				var n = t === "std::string";
				mr(e, {
					name: t,
					fromWireType: function(t) {
						var e = _()[t >> 2], r = t + 4, o;
						if (n) for (var a = r, i = 0; i <= e; ++i) {
							var l = r + i;
							if (i == e || c()[l] == 0) {
								var s = l - a, u = Qt(a, s);
								o === void 0 ? o = u : (o += "\0", o += u), a = l + 1;
							}
						}
						else {
							for (var d = new Array(e), i = 0; i < e; ++i) d[i] = String.fromCharCode(c()[r + i]);
							o = d.join("");
						}
						return Ni(t), o;
					},
					toWireType: function(t, r) {
						r instanceof ArrayBuffer && (r = new Uint8Array(r));
						var e, o = typeof r == "string";
						o || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || lr("Cannot pass non-string to std::string"), n && o ? e = Dt(r) : e = r.length;
						var a = Pi(4 + e + 1), i = a + 4;
						if (_()[a >> 2] = e, n && o) Hn(r, i, e + 1);
						else if (o) for (var l = 0; l < e; ++l) {
							var s = r.charCodeAt(l);
							s > 255 && (Ni(i), lr("String has UTF-16 code units that do not fit in 8 bits")), c()[i + l] = s;
						}
						else for (var l = 0; l < e; ++l) c()[i + l] = r[l];
						return t !== null && t.push(Ni, a), a;
					},
					argPackAdvance: 8,
					readValueFromPointer: no,
					destructorFunction: function(t) {
						Ni(t);
					},
					jsType: "string"
				});
			}
			var wo = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0, Ao = function(t, n) {
				H(t % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
				for (var e = t, r = e >> 1, o = r + n / 2; !(r >= o) && m()[r];) ++r;
				if (e = r << 1, e - t > 32 && wo) return wo.decode(c().slice(t, e));
				for (var a = "", i = 0; !(i >= n / 2); ++i) {
					var l = d()[t + i * 2 >> 1];
					if (l == 0) break;
					a += String.fromCharCode(l);
				}
				return a;
			}, Fo = function(t, n, r) {
				if (H(n % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!"), H(typeof r == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), r === void 0 && (r = 2147483647), r < 2) return 0;
				r -= 2;
				for (var e = n, o = r < t.length * 2 ? r / 2 : t.length, a = 0; a < o; ++a) {
					var i = t.charCodeAt(a);
					d()[n >> 1] = i, n += 2;
				}
				return d()[n >> 1] = 0, n - e;
			}, Oo = function(t) {
				return t.length * 2;
			}, Bo = function(t, n) {
				H(t % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
				for (var e = 0, r = ""; !(e >= n / 4);) {
					var o = p()[t + e * 4 >> 2];
					if (o == 0) break;
					if (++e, o >= 65536) {
						var a = o - 65536;
						r += String.fromCharCode(55296 | a >> 10, 56320 | a & 1023);
					} else r += String.fromCharCode(o);
				}
				return r;
			}, Wo = function(t, n, r) {
				if (H(n % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!"), H(typeof r == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), r === void 0 && (r = 2147483647), r < 4) return 0;
				for (var e = n, o = e + r - 4, a = 0; a < t.length; ++a) {
					var i = t.charCodeAt(a);
					if (i >= 55296 && i <= 57343) {
						var l = t.charCodeAt(++a);
						i = 65536 + ((i & 1023) << 10) | l & 1023;
					}
					if (p()[n >> 2] = i, n += 4, n + 4 > o) break;
				}
				return p()[n >> 2] = 0, n - e;
			}, qo = function(t) {
				for (var e = 0, n = 0; n < t.length; ++n) {
					var r = t.charCodeAt(n);
					r >= 55296 && r <= 57343 && ++n, e += 4;
				}
				return e;
			}, Uo = function(t, n, r) {
				r = nr(r);
				var e, o, a, i, l;
				n === 2 ? (e = Ao, o = Fo, i = Oo, a = function() {
					return m();
				}, l = 1) : n === 4 && (e = Bo, o = Wo, i = qo, a = function() {
					return _();
				}, l = 2), mr(t, {
					name: r,
					fromWireType: function(r) {
						for (var t = _()[r >> 2], o = a(), i, s = r + 4, u = 0; u <= t; ++u) {
							var c = r + 4 + u * n;
							if (u == t || o[c >> l] == 0) {
								var d = c - s, m = e(s, d);
								i === void 0 ? i = m : (i += "\0", i += m), s = c + n;
							}
						}
						return Ni(r), i;
					},
					toWireType: function(t, a) {
						typeof a != "string" && lr("Cannot pass non-string to C++ string type " + r);
						var e = i(a), s = Pi(4 + e + n);
						return _()[s >> 2] = e >> l, o(a, s + 4, e + n), t !== null && t.push(Ni, s), s;
					},
					argPackAdvance: 8,
					readValueFromPointer: no,
					destructorFunction: function(t) {
						Ni(t);
					}
				});
			};
			function Vo(e, t) {
				t = nr(t), mr(e, {
					isVoid: !0,
					name: t,
					argPackAdvance: 0,
					fromWireType: function() {},
					toWireType: function(t, n) {},
					jsType: "void"
				});
			}
			var Ho = !0, Go = function() {
				return Ho;
			}, zo = function() {
				if (!de()) try {
					T ? ol(V) : Zt(V);
				} catch (e) {
					tn(e);
				}
			}, jo = function(t) {
				if (U) {
					A("user callback triggered after runtime exited or application aborted.  Ignoring.");
					return;
				}
				try {
					t(), zo();
				} catch (e) {
					tn(e);
				}
			};
			function Ko(e) {
				if (typeof Atomics.waitAsync == "function") {
					var t = Atomics.waitAsync(p(), e >> 2, e);
					H(t.async), t.value.then(Qo);
					var n = e + 128;
					Atomics.store(p(), n >> 2, 1);
				}
			}
			h.__emscripten_thread_mailbox_await = Ko;
			var Qo = function() {
				var e = Fi();
				e && (Ko(e), jo(function() {
					return al();
				}));
			};
			h.checkMailbox = Qo;
			var Xo = function(t, n, r) {
				if (t == n) setTimeout(function() {
					return Qo();
				});
				else if (T) postMessage({
					targetThread: t,
					cmd: "checkMailbox",
					type: "cmd"
				});
				else {
					var e = nn.pthreads[t];
					if (!e) {
						A("Cannot send message to thread with ID " + t + ", unknown thread ID!");
						return;
					}
					e.postMessage({
						cmd: "checkMailbox",
						type: "cmd"
					});
				}
			};
			function Yo(e, t, n) {
				return A("emscripten_set_offscreencanvas_size: Build with -sOFFSCREENCANVAS_SUPPORT=1 to enable transferring canvases to pthreads."), -1;
			}
			function Jo(e) {}
			var Zo = function() {
				throw new $e();
			};
			function ea(e) {
				e > 4 && (Ro.get(e).refcount += 1);
			}
			function ta(e, t) {
				var n = or[e];
				return n === void 0 && lr(t + " has unknown type " + po(e)), n;
			}
			function na(e, t) {
				e = ta(e, "_emval_take_value");
				var n = e.readValueFromPointer(t);
				return Io.toHandle(n);
			}
			function ra(e, t) {
				e = Un(e), t = Un(t);
				var n = new Date(e * 1e3);
				p()[t >> 2] = n.getUTCSeconds(), p()[t + 4 >> 2] = n.getUTCMinutes(), p()[t + 8 >> 2] = n.getUTCHours(), p()[t + 12 >> 2] = n.getUTCDate(), p()[t + 16 >> 2] = n.getUTCMonth(), p()[t + 20 >> 2] = n.getUTCFullYear() - 1900, p()[t + 24 >> 2] = n.getUTCDay();
				var r = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0), o = (n.getTime() - r) / (1e3 * 60 * 60 * 24) | 0;
				p()[t + 28 >> 2] = o;
			}
			var oa = function(t) {
				return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
			}, aa = [
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
			], ia = [
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
			], la = function(t) {
				var e = oa(t.getFullYear()), n = e ? aa : ia, r = n[t.getMonth()] + t.getDate() - 1;
				return r;
			};
			function sa(e, t) {
				e = Un(e), t = Un(t);
				var n = new Date(e * 1e3);
				p()[t >> 2] = n.getSeconds(), p()[t + 4 >> 2] = n.getMinutes(), p()[t + 8 >> 2] = n.getHours(), p()[t + 12 >> 2] = n.getDate(), p()[t + 16 >> 2] = n.getMonth(), p()[t + 20 >> 2] = n.getFullYear() - 1900, p()[t + 24 >> 2] = n.getDay();
				var r = la(n) | 0;
				p()[t + 28 >> 2] = r, p()[t + 36 >> 2] = -(n.getTimezoneOffset() * 60);
				var o = new Date(n.getFullYear(), 0, 1), a = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(), i = o.getTimezoneOffset(), l = (a != i && n.getTimezoneOffset() == Math.min(i, a)) | 0;
				p()[t + 32 >> 2] = l;
			}
			var ua = function(t) {
				t = Un(t);
				var e = (function() {
					var e = new Date(p()[t + 20 >> 2] + 1900, p()[t + 16 >> 2], p()[t + 12 >> 2], p()[t + 8 >> 2], p()[t + 4 >> 2], p()[t >> 2], 0), n = p()[t + 32 >> 2], r = e.getTimezoneOffset(), o = new Date(e.getFullYear(), 0, 1), a = new Date(e.getFullYear(), 6, 1).getTimezoneOffset(), i = o.getTimezoneOffset(), l = Math.min(i, a);
					if (n < 0) p()[t + 32 >> 2] = +(a != i && l == r);
					else if (n > 0 != (l == r)) {
						var s = Math.max(i, a), u = n > 0 ? l : s;
						e.setTime(e.getTime() + (u - r) * 6e4);
					}
					p()[t + 24 >> 2] = e.getDay();
					var c = la(e) | 0;
					return p()[t + 28 >> 2] = c, p()[t >> 2] = e.getSeconds(), p()[t + 4 >> 2] = e.getMinutes(), p()[t + 8 >> 2] = e.getHours(), p()[t + 12 >> 2] = e.getDate(), p()[t + 16 >> 2] = e.getMonth(), p()[t + 20 >> 2] = e.getYear(), e.getTime() / 1e3;
				})();
				return BigInt(e);
			};
			function ca(e, t, n, r, o, a, i) {
				if (T) return ya(16, 1, e, t, n, r, o, a, i);
				e = Un(e), o = Un(o), a = Un(a), i = Un(i);
				try {
					if (isNaN(o)) return 61;
					var l = Xt.getStreamFromFD(r), s = Kt.mmap(l, e, o, t, n), u = s.ptr;
					return p()[a >> 2] = s.allocated, _()[i >> 2] = u, 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function da(e, t, n, r, o, a) {
				if (T) return ya(17, 1, e, t, n, r, o, a);
				e = Un(e), t = Un(t), a = Un(a);
				try {
					return isNaN(a) ? 61 : (Xt.doMsync(e, Xt.getStreamFromFD(o), t, r, a), 0);
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			function ma(e, t, n, r, o, a) {
				if (T) return ya(18, 1, e, t, n, r, o, a);
				e = Un(e), t = Un(t), a = Un(a);
				try {
					if (isNaN(a)) return 61;
					var i = Xt.getStreamFromFD(o);
					n & 2 && Xt.doMsync(e, i, t, r, a), Kt.munmap(i);
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return -e.errno;
				}
			}
			var pa = function(t) {
				var e = Dt(t) + 1, n = Pi(e);
				return n && Hn(t, n, e), n;
			}, _a = function(t, n, r) {
				var e = new Date().getFullYear(), o = new Date(e, 0, 1), a = new Date(e, 6, 1), i = o.getTimezoneOffset(), l = a.getTimezoneOffset(), s = Math.max(i, l);
				_()[t >> 2] = s * 60, p()[n >> 2] = +(i != l);
				function u(e) {
					var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
					return t ? t[1] : "GMT";
				}
				var c = u(o), d = u(a), m = pa(c), f = pa(d);
				l < i ? (_()[r >> 2] = m, _()[r + 4 >> 2] = f) : (_()[r >> 2] = f, _()[r + 4 >> 2] = m);
			}, fa = function() {
				Ee("native code called abort()");
			}, ga = [], ha = function(t, n) {
				H(Array.isArray(ga)), H(n % 16 == 0), ga.length = 0;
				var e;
				for (n >>= 2; e = c()[t++];) {
					var r = String.fromCharCode(e), o = [
						"d",
						"f",
						"i"
					];
					o.push("j"), H(o.includes(r), "Invalid character " + e + "(\"" + r + "\") in readEmAsmArgs! Use only [" + o + "], and do not specify \"v\" for void return argument."), n += e != 105 & n, ga.push(e == 105 ? p()[n] : (e == 106 ? J : g())[n++ >> 1]), ++n;
				}
				return ga;
			};
			function ya(e, t) {
				var n = arguments.length - 2, r = arguments, o = 19;
				if (n > o) throw "proxyToMainThread: Too many arguments " + n + " to proxied function idx=" + e + ", maximum supported is " + o;
				return ln(function() {
					for (var o = n * 2, a = pl(o * 8), i = a >> 3, l = 0; l < n; l++) {
						var s = r[2 + l];
						typeof s == "bigint" ? (J[i + 2 * l] = BigInt(1), J[i + 2 * l + 1] = s) : (J[i + 2 * l] = BigInt(0), g()[i + 2 * l + 1] = s);
					}
					return Zi(e, o, a, t);
				});
			}
			var Ca = function(t, n, r, o) {
				var e = ha(n, r);
				return T ? ya.apply(null, [-1 - t, o].concat(e)) : (Object.prototype.hasOwnProperty.call(ze, t) || Ee("No EM_ASM constant found at address " + t), ze[t].apply(null, e));
			}, ba = function(t, n, r) {
				return Ca(t, n, r, 0);
			}, va = function(t, n, r) {
				var e = ha(n, r);
				return Object.prototype.hasOwnProperty.call(ze, t) || Ee("No EM_ASM constant found at address " + t), ze[t].apply(null, e);
			}, Sa = function(t, n, r) {
				return va(t, n, r);
			}, Ra = function(t, n, r) {
				return va(t, n, r);
			}, La = function() {
				ce += 1;
			}, Ea = function() {
				H(ce > 0), ce -= 1;
			}, ka = function(t, n) {
				return La(), setTimeout(function() {
					Ea(), jo(t);
				}, n);
			};
			function Ia(e, t) {
				if (xa.mainLoop.timingMode = e, xa.mainLoop.timingValue = t, !xa.mainLoop.func) return A("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up."), 1;
				if (xa.mainLoop.running || (La(), xa.mainLoop.running = !0), e == 0) xa.mainLoop.scheduler = function() {
					var e = Math.max(0, xa.mainLoop.tickStartTime + t - Ta()) | 0;
					setTimeout(xa.mainLoop.runner, e);
				}, xa.mainLoop.method = "timeout";
				else if (e == 1) xa.mainLoop.scheduler = function() {
					xa.requestAnimationFrame(xa.mainLoop.runner);
				}, xa.mainLoop.method = "rAF";
				else if (e == 2) {
					if (typeof setImmediate == "undefined") {
						var n = [], r = "setimmediate", o = function(t) {
							(t.data === r || t.data.target === r) && (t.stopPropagation(), n.shift()());
						};
						addEventListener("message", o, !0), setImmediate = function(t) {
							n.push(t), E ? (h.setImmediates === void 0 && (h.setImmediates = []), h.setImmediates.push(t), postMessage({
								target: r,
								type: "cmd"
							})) : postMessage(babelHelpers.extends({}, r, { type: "cmd" }), "*");
						};
					}
					xa.mainLoop.scheduler = function() {
						setImmediate(xa.mainLoop.runner);
					}, xa.mainLoop.method = "immediate";
				}
				return 0;
			}
			var Ta;
			Ta = function() {
				return performance.timeOrigin + performance.now();
			};
			function Da(e, t, n, r, o) {
				H(!xa.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), xa.mainLoop.func = e, xa.mainLoop.arg = r;
				var a = xa.mainLoop.currentlyRunningMainloop;
				function i() {
					return a < xa.mainLoop.currentlyRunningMainloop ? (Ea(), !1) : !0;
				}
				if (xa.mainLoop.running = !1, xa.mainLoop.runner = function() {
					if (!U) {
						if (xa.mainLoop.queue.length > 0) {
							var t = Date.now(), n = xa.mainLoop.queue.shift();
							if (n.func(n.arg), xa.mainLoop.remainingBlockers) {
								var r = xa.mainLoop.remainingBlockers, o = r % 1 == 0 ? r - 1 : Math.floor(r);
								n.counted ? xa.mainLoop.remainingBlockers = o : (o = o + .5, xa.mainLoop.remainingBlockers = (8 * r + o) / 9);
							}
							if (w("main loop blocker \"" + n.name + "\" took " + (Date.now() - t) + " ms"), xa.mainLoop.updateStatus(), !i()) return;
							setTimeout(xa.mainLoop.runner, 0);
							return;
						}
						if (i()) {
							if (xa.mainLoop.currentFrameNumber = xa.mainLoop.currentFrameNumber + 1 | 0, xa.mainLoop.timingMode == 1 && xa.mainLoop.timingValue > 1 && xa.mainLoop.currentFrameNumber % xa.mainLoop.timingValue != 0) {
								xa.mainLoop.scheduler();
								return;
							} else xa.mainLoop.timingMode == 0 && (xa.mainLoop.tickStartTime = Ta());
							xa.mainLoop.method === "timeout" && h.ctx && (pn("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), xa.mainLoop.method = ""), xa.mainLoop.runIter(e), ae(), i() && (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), xa.mainLoop.scheduler());
						}
					}
				}, o || (t && t > 0 ? Ia(0, 1e3 / t) : Ia(1, 1), xa.mainLoop.scheduler()), n) throw "unwind";
			}
			var xa = {
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
						xa.mainLoop.scheduler = null, xa.mainLoop.currentlyRunningMainloop++;
					},
					resume: function() {
						xa.mainLoop.currentlyRunningMainloop++;
						var e = xa.mainLoop.timingMode, t = xa.mainLoop.timingValue, n = xa.mainLoop.func;
						xa.mainLoop.func = null, Da(n, 0, !1, xa.mainLoop.arg, !0), Ia(e, t), xa.mainLoop.scheduler();
					},
					updateStatus: function() {
						if (h.setStatus) {
							var e = h.statusMessage || "Please wait...", t = xa.mainLoop.remainingBlockers, n = xa.mainLoop.expectedBlockers;
							t ? t < n ? h.setStatus(e + " (" + (n - t) + "/" + n + ")") : h.setStatus(e) : h.setStatus("");
						}
					},
					runIter: function(t) {
						if (!U) {
							if (h.preMainLoop) {
								var e = h.preMainLoop();
								if (e === !1) return;
							}
							jo(t), h.postMainLoop && h.postMainLoop();
						}
					}
				},
				isFullscreen: !1,
				pointerLock: !1,
				moduleContextCreatedCallbacks: [],
				workers: [],
				init: function() {
					if (xa.initted) return;
					xa.initted = !0;
					var e = {};
					e.canHandle = function(t) {
						return !h.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(t);
					}, e.handle = function(t, n, r, o) {
						var e = new Blob([t], { type: xa.getMimetype(n) });
						e.size !== t.length && (e = new Blob([new Uint8Array(t).buffer], { type: xa.getMimetype(n) }));
						var a = URL.createObjectURL(e);
						H(typeof a == "string", "createObjectURL must return a url as a string");
						var i = new Image();
						i.onload = function() {
							H(i.complete, "Image " + n + " could not be decoded");
							var e = document.createElement("canvas");
							e.width = i.width, e.height = i.height;
							var o = e.getContext("2d");
							o.drawImage(i, 0, 0), Li[n] = e, URL.revokeObjectURL(a), r && r(t);
						}, i.onerror = function(e) {
							w("Image " + a + " could not be decoded"), o && o();
						}, i.src = a;
					}, Ot.push(e);
					var t = {};
					t.canHandle = function(t) {
						return !h.noAudioDecoding && t.substr(-4) in {
							".ogg": 1,
							".wav": 1,
							".mp3": 1
						};
					}, t.handle = function(t, n, r, o) {
						var e = !1;
						function a(o) {
							e || (e = !0, Ei[n] = o, r && r(t));
						}
						var i = new Blob([t], { type: xa.getMimetype(n) }), l = URL.createObjectURL(i);
						H(typeof l == "string", "createObjectURL must return a url as a string");
						var s = new Audio();
						s.addEventListener("canplaythrough", function() {
							return a(s);
						}, !1), s.onerror = function(o) {
							if (e) return;
							A("warning: browser could not fully decode audio " + n + ", trying slower base64 approach");
							function r(e) {
								for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "=", r = "", o = 0, a = 0, i = 0; i < e.length; i++) for (o = o << 8 | e[i], a += 8; a >= 6;) {
									var l = o >> a - 6 & 63;
									a -= 6, r += t[l];
								}
								return a == 2 ? (r += t[(o & 3) << 4], r += n + n) : a == 4 && (r += t[(o & 15) << 2], r += n), r;
							}
							s.src = "data:audio/x-" + n.substr(-3) + ";base64," + r(t), a(s);
						}, s.src = l, ka(function() {
							a(s);
						}, 1e4);
					}, Ot.push(t);
					function n() {
						xa.pointerLock = document.pointerLockElement === h.canvas || document.mozPointerLockElement === h.canvas || document.webkitPointerLockElement === h.canvas || document.msPointerLockElement === h.canvas;
					}
					var r = h.canvas;
					r && (r.requestPointerLock = r.requestPointerLock || r.mozRequestPointerLock || r.webkitRequestPointerLock || r.msRequestPointerLock || function() {}, r.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, r.exitPointerLock = r.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", n, !1), document.addEventListener("mozpointerlockchange", n, !1), document.addEventListener("webkitpointerlockchange", n, !1), document.addEventListener("mspointerlockchange", n, !1), h.elementPointerLock && r.addEventListener("click", function(e) {
						!xa.pointerLock && h.canvas.requestPointerLock && (h.canvas.requestPointerLock(), e.preventDefault());
					}, !1));
				},
				createContext: function(t, n, r, o) {
					if (n && h.ctx && t == h.canvas) return h.ctx;
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
					return e ? (r && (n || H(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), h.ctx = e, n && GL.makeContextCurrent(a), h.useWebGL = n, xa.moduleContextCreatedCallbacks.forEach(function(e) {
						return e();
					}), xa.init()), e) : null;
				},
				destroyContext: function(t, n, r) {},
				fullscreenHandlersInstalled: !1,
				lockPointer: void 0,
				resizeCanvas: void 0,
				requestFullscreen: function(t, n) {
					xa.lockPointer = t, xa.resizeCanvas = n, typeof xa.lockPointer == "undefined" && (xa.lockPointer = !0), typeof xa.resizeCanvas == "undefined" && (xa.resizeCanvas = !1);
					var e = h.canvas;
					function r() {
						xa.isFullscreen = !1;
						var t = e.parentNode;
						(document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === t ? (e.exitFullscreen = xa.exitFullscreen, xa.lockPointer && e.requestPointerLock(), xa.isFullscreen = !0, xa.resizeCanvas ? xa.setFullscreenCanvasSize() : xa.updateCanvasDimensions(e)) : (t.parentNode.insertBefore(e, t), t.parentNode.removeChild(t), xa.resizeCanvas ? xa.setWindowedCanvasSize() : xa.updateCanvasDimensions(e)), h.onFullScreen && h.onFullScreen(xa.isFullscreen), h.onFullscreen && h.onFullscreen(xa.isFullscreen);
					}
					xa.fullscreenHandlersInstalled || (xa.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", r, !1), document.addEventListener("mozfullscreenchange", r, !1), document.addEventListener("webkitfullscreenchange", r, !1), document.addEventListener("MSFullscreenChange", r, !1));
					var o = document.createElement("div");
					e.parentNode.insertBefore(o, e), o.appendChild(e), o.requestFullscreen = o.requestFullscreen || o.mozRequestFullScreen || o.msRequestFullscreen || (o.webkitRequestFullscreen ? function() {
						return o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
					} : null) || (o.webkitRequestFullScreen ? function() {
						return o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
					} : null), o.requestFullscreen();
				},
				requestFullScreen: function() {
					Ee("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)");
				},
				exitFullscreen: function() {
					if (!xa.isFullscreen) return !1;
					var e = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {};
					return e.apply(document, []), !0;
				},
				nextRAF: 0,
				fakeRequestAnimationFrame: function(t) {
					var e = Date.now();
					if (xa.nextRAF === 0) xa.nextRAF = e + 1e3 / 60;
					else for (; e + 2 >= xa.nextRAF;) xa.nextRAF += 1e3 / 60;
					var n = Math.max(xa.nextRAF - e, 0);
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
					var t = xa.fakeRequestAnimationFrame;
					t(e);
				}),
				safeSetTimeout: function(t, n) {
					return ka(t, n);
				},
				safeRequestAnimationFrame: function(t) {
					return La(), xa.requestAnimationFrame(function() {
						Ea(), jo(t);
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
					if (xa.pointerLock) t.type != "mousemove" && "mozMovementX" in t ? xa.mouseMovementX = xa.mouseMovementY = 0 : (xa.mouseMovementX = xa.getMovementX(t), xa.mouseMovementY = xa.getMovementY(t)), typeof SDL != "undefined" ? (xa.mouseX = SDL.mouseX + xa.mouseMovementX, xa.mouseY = SDL.mouseY + xa.mouseMovementY) : (xa.mouseX += xa.mouseMovementX, xa.mouseY += xa.mouseMovementY);
					else {
						var e = h.canvas.getBoundingClientRect(), n = h.canvas.width, r = h.canvas.height, o = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset, a = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
						if (H(typeof o != "undefined" && typeof a != "undefined", "Unable to retrieve scroll position, mouse positions likely broken."), t.type === "touchstart" || t.type === "touchend" || t.type === "touchmove") {
							var i = t.touch;
							if (i === void 0) return;
							var l = i.pageX - (o + e.left), s = i.pageY - (a + e.top);
							l = l * (n / e.width), s = s * (r / e.height);
							var u = {
								x: l,
								y: s
							};
							if (t.type === "touchstart") xa.lastTouches[i.identifier] = u, xa.touches[i.identifier] = u;
							else if (t.type === "touchend" || t.type === "touchmove") {
								var c = xa.touches[i.identifier];
								c || (c = u), xa.lastTouches[i.identifier] = c, xa.touches[i.identifier] = u;
							}
							return;
						}
						var d = t.pageX - (o + e.left), m = t.pageY - (a + e.top);
						d = d * (n / e.width), m = m * (r / e.height), xa.mouseMovementX = d - xa.mouseX, xa.mouseMovementY = m - xa.mouseY, xa.mouseX = d, xa.mouseY = m;
					}
				},
				resizeListeners: [],
				updateResizeListeners: function() {
					var e = h.canvas;
					xa.resizeListeners.forEach(function(t) {
						return t(e.width, e.height);
					});
				},
				setCanvasSize: function(t, n, r) {
					var e = h.canvas;
					xa.updateCanvasDimensions(e, t, n), r || xa.updateResizeListeners();
				},
				windowedWidth: 0,
				windowedHeight: 0,
				setFullscreenCanvasSize: function() {
					if (typeof SDL != "undefined") {
						var e = _()[SDL.screen >> 2];
						e = e | 8388608, p()[SDL.screen >> 2] = e;
					}
					xa.updateCanvasDimensions(h.canvas), xa.updateResizeListeners();
				},
				setWindowedCanvasSize: function() {
					if (typeof SDL != "undefined") {
						var e = _()[SDL.screen >> 2];
						e = e & -8388609, p()[SDL.screen >> 2] = e;
					}
					xa.updateCanvasDimensions(h.canvas), xa.updateResizeListeners();
				},
				updateCanvasDimensions: function(t, n, r) {
					n && r ? (t.widthNative = n, t.heightNative = r) : (n = t.widthNative, r = t.heightNative);
					var e = n, o = r;
					if (h.forcedAspectRatio && h.forcedAspectRatio > 0 && (e / o < h.forcedAspectRatio ? e = Math.round(o * h.forcedAspectRatio) : o = Math.round(e / h.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === t.parentNode && typeof screen != "undefined") {
						var a = Math.min(screen.width / e, screen.height / o);
						e = Math.round(e * a), o = Math.round(o * a);
					}
					xa.resizeCanvas ? (t.width != e && (t.width = e), t.height != o && (t.height = o), typeof t.style != "undefined" && (t.style.removeProperty("width"), t.style.removeProperty("height"))) : (t.width != n && (t.width = n), t.height != r && (t.height = r), typeof t.style != "undefined" && (e != n || o != r ? (t.style.setProperty("width", e + "px", "important"), t.style.setProperty("height", o + "px", "important")) : (t.style.removeProperty("width"), t.style.removeProperty("height"))));
				}
			};
			function $a(e, t, n) {
				function r() {
					cn(e)(t);
				}
				n >= 0 ? ka(r, n) : xa.safeRequestAnimationFrame(r);
			}
			function Pa() {
				E || pn("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread");
			}
			var Na = function(t) {
				H(typeof t == "number"), Qt(t);
			};
			function Ma() {
				return Date.now();
			}
			var wa = function() {
				throw La(), "unwind";
			}, Aa = function() {
				return 2147483648;
			}, Fa = function() {
				return Aa();
			};
			function Oa() {
				return navigator.hardwareConcurrency;
			}
			var Ba = [];
			function Wa(e, t, n, r) {
				nn.currentProxiedOperationCallerThread = t, n /= 2, Ba.length = n;
				for (var o = r >> 3, a = 0; a < n; a++) J[o + 2 * a] ? Ba[a] = J[o + 2 * a + 1] : Ba[a] = g()[o + 2 * a + 1];
				var i = e < 0, l = i ? ze[-e - 1] : ki[e];
				return H(l.length == n, "Call args mismatch in emscripten_receive_on_main_thread_js"), l.apply(null, Ba);
			}
			var qa = function(t) {
				var e = B.buffer, n = t - e.byteLength + 65535 >>> 16;
				try {
					return B.grow(n), te(), 1;
				} catch (n) {
					A("growMemory: Attempted to grow heap from " + e.byteLength + " bytes to " + t + " bytes, but got error: " + n);
				}
			}, Ua = function(t) {
				var e = c().length;
				if (t >>>= 0, t <= e) return !1;
				var n = Aa();
				if (t > n) return A("Cannot enlarge memory, asked to go up to " + t + " bytes, but the limit is " + n + " bytes!"), !1;
				for (var r = function(t, n) {
					return t + (n - t % n) % n;
				}, o = 1; o <= 4; o *= 2) {
					var a = e * (1 + .2 / o);
					a = Math.min(a, t + 100663296);
					var i = Math.min(n, r(Math.max(t, a), 65536)), l = qa(i);
					if (l) return !0;
				}
				return A("Failed to grow the heap from " + e + " bytes to " + i + " bytes, not enough memory!"), !1;
			}, Va = Ea, Ha = La, Ga = {}, za = function() {
				return S || "./this.program";
			}, ja = function() {
				if (!ja.strings) {
					var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: e,
						_: za()
					};
					for (var n in Ga) Ga[n] === void 0 ? delete t[n] : t[n] = Ga[n];
					var r = [];
					for (var n in t) r.push(n + "=" + t[n]);
					ja.strings = r;
				}
				return ja.strings;
			}, Ka = function(t, n) {
				for (var e = 0; e < t.length; ++e) H(t.charCodeAt(e) === (t.charCodeAt(e) & 255)), l()[n++ >> 0] = t.charCodeAt(e);
				l()[n >> 0] = 0;
			};
			function Qa(e, t) {
				if (T) return ya(19, 1, e, t);
				var n = 0;
				return ja().forEach(function(r, o) {
					var a = t + n;
					_()[e + o * 4 >> 2] = a, Ka(r, a), n += r.length + 1;
				}), 0;
			}
			function Xa(e, t) {
				if (T) return ya(20, 1, e, t);
				var n = ja();
				_()[e >> 2] = n.length;
				var r = 0;
				return n.forEach(function(e) {
					r += e.length + 1;
				}), _()[t >> 2] = r, 0;
			}
			function Ya(e) {
				if (T) return ya(21, 1, e);
				try {
					var t = Xt.getStreamFromFD(e);
					return Kt.close(t), 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			var Ja = function(t, n, r, o) {
				for (var e = 0, a = 0; a < r; a++) {
					var i = _()[n >> 2], s = _()[n + 4 >> 2];
					n += 8;
					var u = Kt.read(t, l(), i, s, o);
					if (u < 0) return -1;
					if (e += u, u < s) break;
					typeof o != "undefined" && (o += u);
				}
				return e;
			};
			function Za(e, t, n, r, o) {
				if (T) return ya(22, 1, e, t, n, r, o);
				t = Un(t), n = Un(n), r = Un(r), o = Un(o);
				try {
					if (isNaN(r)) return 61;
					var a = Xt.getStreamFromFD(e), i = Ja(a, t, n, r);
					return _()[o >> 2] = i, 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			var ei = function(t, n, r, o) {
				for (var e = 0, a = 0; a < r; a++) {
					var i = _()[n >> 2], s = _()[n + 4 >> 2];
					n += 8;
					var u = Kt.write(t, l(), i, s, o);
					if (u < 0) return -1;
					e += u, typeof o != "undefined" && (o += u);
				}
				return e;
			};
			function ti(e, t, n, r, o) {
				if (T) return ya(23, 1, e, t, n, r, o);
				t = Un(t), n = Un(n), r = Un(r), o = Un(o);
				try {
					if (isNaN(r)) return 61;
					var a = Xt.getStreamFromFD(e), i = ei(a, t, n, r);
					return _()[o >> 2] = i, 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			function ni(e, t, n, r) {
				if (T) return ya(24, 1, e, t, n, r);
				try {
					var o = Xt.getStreamFromFD(e), a = Ja(o, t, n);
					return _()[r >> 2] = a, 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			function ri(e, t, n, r) {
				if (T) return ya(25, 1, e, t, n, r);
				t = Un(t), r = Un(r);
				try {
					if (isNaN(t)) return 61;
					var o = Xt.getStreamFromFD(e);
					return Kt.llseek(o, t, n), J[r >> 3] = BigInt(o.position), o.getdents && t === 0 && n === 0 && (o.getdents = null), 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			function oi(e) {
				if (T) return ya(26, 1, e);
				try {
					var t = Xt.getStreamFromFD(e);
					return t.stream_ops && t.stream_ops.fsync ? t.stream_ops.fsync(t) : 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			function ai(e, t, n, r) {
				if (T) return ya(27, 1, e, t, n, r);
				try {
					var o = Xt.getStreamFromFD(e), a = ei(o, t, n);
					return _()[r >> 2] = a, 0;
				} catch (e) {
					if (typeof Kt == "undefined" || e.name !== "ErrnoError") throw e;
					return e.errno;
				}
			}
			var ii = function(t, n) {
				return Lt(c().subarray(t, t + n)), 0;
			}, li = function(t) {
				for (var e = t.split("."), n = 0; n < 4; n++) {
					var r = Number(e[n]);
					if (isNaN(r)) return null;
					e[n] = r;
				}
				return (e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24) >>> 0;
			}, si = function(t) {
				return parseInt(t);
			}, ui = function(t) {
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
				for (t.startsWith("::") ? t = t.replace("::", "Z:") : t = t.replace("::", ":Z:"), t.indexOf(".") > 0 ? (t = t.replace(new RegExp("[.]", "g"), ":"), e = t.split(":"), e[e.length - 4] = si(e[e.length - 4]) + si(e[e.length - 3]) * 256, e[e.length - 3] = si(e[e.length - 2]) + si(e[e.length - 1]) * 256, e = e.slice(0, e.length - 2)) : e = t.split(":"), r = 0, o = 0, n = 0; n < e.length; n++) if (typeof e[n] == "string") if (e[n] === "Z") {
					for (o = 0; o < 8 - e.length + 1; o++) i[n + o] = 0;
					r = o - 1;
				} else i[n + r] = Wi(parseInt(e[n], 16));
				else i[n + r] = e[n];
				return [
					i[1] << 16 | i[0],
					i[3] << 16 | i[2],
					i[5] << 16 | i[4],
					i[7] << 16 | i[6]
				];
			}, ci = {
				address_map: {
					id: 1,
					addrs: {},
					names: {}
				},
				lookup_name: function(t) {
					var e = li(t);
					if (e !== null || (e = ui(t), e !== null)) return t;
					var n;
					if (ci.address_map.addrs[t]) n = ci.address_map.addrs[t];
					else {
						var r = ci.address_map.id++;
						H(r < 65535, "exceeded max address mappings of 65535"), n = "172.29." + (r & 255) + "." + (r & 65280), ci.address_map.names[n] = t, ci.address_map.addrs[t] = n;
					}
					return n;
				},
				lookup_addr: function(t) {
					return ci.address_map.names[t] ? ci.address_map.names[t] : null;
				}
			}, di = function(t) {
				var e = Pi(20), n = pa(t);
				_()[e >> 2] = n;
				var r = Pi(4);
				_()[r >> 2] = 0, _()[e + 4 >> 2] = r;
				var o = 2;
				p()[e + 8 >> 2] = o, p()[e + 12 >> 2] = 4;
				var a = Pi(12);
				return _()[a >> 2] = a + 8, _()[a + 4 >> 2] = 0, p()[a + 8 >> 2] = li(ci.lookup_name(t)), _()[e + 16 >> 2] = a, e;
			};
			function mi(e) {
				return T ? ya(28, 1, e) : di(Qt(e));
			}
			function pi(e) {
				return e;
			}
			var _i = function(t, n) {
				for (var e = 0, r = 0; r <= n; e += t[r++]);
				return e;
			}, fi = [
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
			], gi = [
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
			], hi = function(t, n) {
				for (var e = new Date(t.getTime()); n > 0;) {
					var r = oa(e.getFullYear()), o = e.getMonth(), a = (r ? fi : gi)[o];
					if (n > a - e.getDate()) n -= a - e.getDate() + 1, e.setDate(1), o < 11 ? e.setMonth(o + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
					else return e.setDate(e.getDate() + n), e;
				}
				return e;
			}, yi = function(t, n) {
				H(t.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)"), l().set(t, n);
			}, Ci = function(t, n, r, o) {
				var e = p()[o + 40 >> 2], a = {
					tm_sec: p()[o >> 2],
					tm_min: p()[o + 4 >> 2],
					tm_hour: p()[o + 8 >> 2],
					tm_mday: p()[o + 12 >> 2],
					tm_mon: p()[o + 16 >> 2],
					tm_year: p()[o + 20 >> 2],
					tm_wday: p()[o + 24 >> 2],
					tm_yday: p()[o + 28 >> 2],
					tm_isdst: p()[o + 32 >> 2],
					tm_gmtoff: p()[o + 36 >> 2],
					tm_zone: e ? Qt(e) : ""
				}, i = Qt(r), l = {
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
				function m(e, t) {
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
					var t = hi(new Date(e.tm_year + 1900, 0, 1), e.tm_yday), n = new Date(t.getFullYear(), 0, 4), r = new Date(t.getFullYear() + 1, 0, 4), o = f(n), a = f(r);
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
						return m(e / 100 | 0, 2);
					},
					"%d": function(t) {
						return m(t.tm_mday, 2);
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
						return m(t.tm_hour, 2);
					},
					"%I": function(t) {
						var e = t.tm_hour;
						return e == 0 ? e = 12 : e > 12 && (e -= 12), m(e, 2);
					},
					"%j": function(t) {
						return m(t.tm_mday + _i(oa(t.tm_year + 1900) ? fi : gi, t.tm_mon - 1), 3);
					},
					"%m": function(t) {
						return m(t.tm_mon + 1, 2);
					},
					"%M": function(t) {
						return m(t.tm_min, 2);
					},
					"%n": function() {
						return `
`;
					},
					"%p": function(t) {
						return t.tm_hour >= 0 && t.tm_hour < 12 ? "AM" : "PM";
					},
					"%S": function(t) {
						return m(t.tm_sec, 2);
					},
					"%t": function() {
						return "	";
					},
					"%u": function(t) {
						return t.tm_wday || 7;
					},
					"%U": function(t) {
						var e = t.tm_yday + 7 - t.tm_wday;
						return m(Math.floor(e / 7), 2);
					},
					"%V": function(t) {
						var e = Math.floor((t.tm_yday + 7 - (t.tm_wday + 6) % 7) / 7);
						if ((t.tm_wday + 371 - t.tm_yday - 2) % 7 <= 2 && e++, e) {
							if (e == 53) {
								var r = (t.tm_wday + 371 - t.tm_yday) % 7;
								r != 4 && (r != 3 || !oa(t.tm_year)) && (e = 1);
							}
						} else {
							e = 52;
							var n = (t.tm_wday + 7 - t.tm_yday - 1) % 7;
							(n == 4 || n == 5 && oa(t.tm_year % 400 - 1)) && e++;
						}
						return m(e, 2);
					},
					"%w": function(t) {
						return t.tm_wday;
					},
					"%W": function(t) {
						var e = t.tm_yday + 7 - (t.tm_wday + 6) % 7;
						return m(Math.floor(e / 7), 2);
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
				var y = $t(i, !1);
				return y.length > n ? 0 : (yi(y, t), y.length - 1);
			}, bi = function(t, n, r, o, a) {
				return Ci(t, n, r, o);
			};
			nn.init();
			var vi = function(t, n, r, o) {
				t || (t = this), this.parent = t, this.mount = t.mount, this.mounted = null, this.id = Kt.nextInode++, this.name = n, this.mode = r, this.node_ops = {}, this.stream_ops = {}, this.rdev = o;
			}, Si = 365, Ri = 146;
			Object.defineProperties(vi.prototype, {
				read: {
					get: function() {
						return (this.mode & Si) === Si;
					},
					set: function(t) {
						t ? this.mode |= Si : this.mode &= ~Si;
					}
				},
				write: {
					get: function() {
						return (this.mode & Ri) === Ri;
					},
					set: function(t) {
						t ? this.mode |= Ri : this.mode &= ~Ri;
					}
				},
				isFolder: { get: function() {
					return Kt.isDir(this.mode);
				} },
				isDevice: { get: function() {
					return Kt.isChrdev(this.mode);
				} }
			}), Kt.FSNode = vi, Kt.createPreloadedFile = Wt, Kt.staticInit(), Gt = {
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
			}, er(), ir = h.BindingError = (function(e) {
				function t(t) {
					var n;
					return n = e.call(this, t) || this, n.name = "BindingError", n;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(babelHelpers.wrapNativeSuper(Error)), sr = h.InternalError = (function(e) {
				function t(t) {
					var n;
					return n = e.call(this, t) || this, n.name = "InternalError", n;
				}
				return babelHelpers.inheritsLoose(t, e), t;
			})(babelHelpers.wrapNativeSuper(Error)), Vr(), Pr(), io(), mo = h.UnboundTypeError = co(Error, "UnboundTypeError"), vo(), ko(), h.requestFullscreen = function(t, n) {
				xa.requestFullscreen(t, n);
			}, h.requestFullScreen = function() {
				xa.requestFullScreen();
			}, h.requestAnimationFrame = function(t) {
				xa.requestAnimationFrame(t);
			}, h.setCanvasSize = function(t, n, r) {
				xa.setCanvasSize(t, n, r);
			}, h.pauseMainLoop = function() {
				xa.mainLoop.pause();
			}, h.resumeMainLoop = function() {
				xa.mainLoop.resume();
			}, h.getUserMedia = function() {
				xa.getUserMedia();
			}, h.createContext = function(t, n, r, o) {
				return xa.createContext(t, n, r, o);
			};
			var Li = {}, Ei = {}, ki = [
				null,
				Yt,
				an,
				Mn,
				An,
				On,
				Bn,
				Vn,
				Gn,
				zn,
				jn,
				Kn,
				Qn,
				Xn,
				Yn,
				Jn,
				ca,
				da,
				ma,
				Qa,
				Xa,
				Ya,
				Za,
				ti,
				ni,
				ri,
				oi,
				ai,
				mi
			];
			function Ii() {
				We("fetchSettings");
			}
			var Ti = {
				__assert_fail: _n,
				__cxa_begin_catch: hn,
				__cxa_current_primary_exception: yn,
				__cxa_end_catch: bn,
				__cxa_find_matching_catch_2: Ln,
				__cxa_find_matching_catch_3: En,
				__cxa_find_matching_catch_4: kn,
				__cxa_get_exception_ptr: In,
				__cxa_rethrow: Tn,
				__cxa_rethrow_primary_exception: Dn,
				__cxa_throw: xn,
				__cxa_uncaught_exceptions: $n,
				__emscripten_init_main_thread_js: Pn,
				__emscripten_thread_cleanup: Nn,
				__pthread_create_js: wn,
				__resumeException: Sn,
				__syscall_chdir: An,
				__syscall_fcntl64: On,
				__syscall_fstat64: Bn,
				__syscall_ftruncate64: Vn,
				__syscall_getdents64: Gn,
				__syscall_ioctl: zn,
				__syscall_lstat64: jn,
				__syscall_mkdirat: Kn,
				__syscall_newfstatat: Qn,
				__syscall_openat: Xn,
				__syscall_stat64: Yn,
				__syscall_unlinkat: Jn,
				_embind_register_bigint: _r,
				_embind_register_bool: gr,
				_embind_register_class: fo,
				_embind_register_class_constructor: Co,
				_embind_register_class_function: bo,
				_embind_register_emval: To,
				_embind_register_float: xo,
				_embind_register_function: $o,
				_embind_register_integer: Po,
				_embind_register_memory_view: No,
				_embind_register_std_string: Mo,
				_embind_register_std_wstring: Uo,
				_embind_register_void: Vo,
				_emscripten_get_now_is_monotonic: Go,
				_emscripten_notify_mailbox_postmessage: Xo,
				_emscripten_set_offscreencanvas_size: Yo,
				_emscripten_thread_mailbox_await: Ko,
				_emscripten_thread_set_strongref: Jo,
				_emscripten_throw_longjmp: Zo,
				_emval_decref: Lo,
				_emval_incref: ea,
				_emval_take_value: na,
				_gmtime_js: ra,
				_localtime_js: sa,
				_mktime_js: ua,
				_mmap_js: ca,
				_msync_js: da,
				_munmap_js: ma,
				_tzset_js: _a,
				abort: fa,
				call_init_capture_driver_js_sync: rt,
				call_init_playback_driver_js_sync: it,
				call_sendto: nt,
				call_start_capture_js_sync: ot,
				call_start_desktop_capture_js_sync: ct,
				call_start_playback_js_sync: lt,
				call_start_video_capture_js_sync: mt,
				call_stop_capture_js_sync: at,
				call_stop_desktop_capture_js_sync: dt,
				call_stop_playback_js_sync: st,
				call_stop_video_capture_js_sync: pt,
				emscripten_asm_const_async_on_main_thread: ba,
				emscripten_asm_const_double: Sa,
				emscripten_asm_const_int: Ra,
				emscripten_async_call: $a,
				emscripten_check_blocking_allowed: Pa,
				emscripten_console_error: Na,
				emscripten_date_now: Ma,
				emscripten_exit_with_live_runtime: wa,
				emscripten_get_heap_max: Fa,
				emscripten_get_now: Ta,
				emscripten_num_logical_cores: Oa,
				emscripten_receive_on_main_thread_js: Wa,
				emscripten_resize_heap: Ua,
				emscripten_runtime_keepalive_pop: Va,
				emscripten_runtime_keepalive_push: Ha,
				environ_get: Qa,
				environ_sizes_get: Xa,
				exit: Zt,
				fd_close: Ya,
				fd_pread: Za,
				fd_pwrite: ti,
				fd_read: ni,
				fd_seek: ri,
				fd_sync: oi,
				fd_write: ai,
				get_bwe_ml_model_path_js: Ye,
				get_persistent_directory_path_js: Xe,
				get_random_bytes_js: Je,
				getentropy: ii,
				gethostbyname: mi,
				invoke_d: zu,
				invoke_diii: Yu,
				invoke_fi: Xs,
				invoke_fii: _s,
				invoke_fiii: Xu,
				invoke_fiiiiii: xu,
				invoke_i: vl,
				invoke_id: uu,
				invoke_ii: Rl,
				invoke_iid: Vu,
				invoke_iidi: ju,
				invoke_iidii: _u,
				invoke_iidjjjidjjjdjjji: os,
				invoke_iidjjjii: ms,
				invoke_iidjjjiii: is,
				invoke_iiffiii: gs,
				invoke_iiffiiiii: fs,
				invoke_iifi: Eu,
				invoke_iifii: iu,
				invoke_iifiii: su,
				invoke_iii: Ll,
				invoke_iiid: lu,
				invoke_iiifi: cu,
				invoke_iiii: kl,
				invoke_iiiidd: Ou,
				invoke_iiiifiii: vs,
				invoke_iiiifiiiiii: Es,
				invoke_iiiii: xl,
				invoke_iiiiid: Ku,
				invoke_iiiiii: Al,
				invoke_iiiiiii: Il,
				invoke_iiiiiiiddiiid: Wu,
				invoke_iiiiiiii: Ml,
				invoke_iiiiiiiidi: Uu,
				invoke_iiiiiiiifii: au,
				invoke_iiiiiiiii: $l,
				invoke_iiiiiiiiii: Nl,
				invoke_iiiiiiiiiiffiii: hs,
				invoke_iiiiiiiiiii: jl,
				invoke_iiiiiiiiiiii: Rs,
				invoke_iiiiiiiiiiiiffiii: bs,
				invoke_iiiiiiiiiiiii: ks,
				invoke_iiiiiiiiiiiiii: ql,
				invoke_iiiiiiiiiiiiiiffiiiii: Ss,
				invoke_iiiiiiiiiiiiiii: xs,
				invoke_iiiiiiiiiiiiiiiffiiiii: ys,
				invoke_iiiiiiiiiiiiiiii: Qs,
				invoke_iiiiiiiiiiiiiiiiiffiiiii: Cs,
				invoke_iiiiiiiiiiiiiiiiii: Ul,
				invoke_iiiiiiiiiiji: Yl,
				invoke_iiiiiiiiij: Hs,
				invoke_iiiiiiiij: qs,
				invoke_iiiiiiij: Fs,
				invoke_iiiiiiijjii: Ys,
				invoke_iiiiiij: Us,
				invoke_iiiiiijiiii: Gs,
				invoke_iiiiiijjijiiiiiiiiii: Zs,
				invoke_iiiiij: $u,
				invoke_iiiiiji: Bs,
				invoke_iiiiijjii: cs,
				invoke_iiiiijjiii: ds,
				invoke_iiiiijjjii: ss,
				invoke_iiiiijjjiii: us,
				invoke_iiiij: Ds,
				invoke_iiiijiii: pu,
				invoke_iiiijiiji: ns,
				invoke_iiiijjii: ps,
				invoke_iiiijjiii: ls,
				invoke_iiij: Os,
				invoke_iiijddddddd: Ru,
				invoke_iiiji: Xl,
				invoke_iiijii: Kl,
				invoke_iiijiiji: ts,
				invoke_iiijji: es,
				invoke_iiijjiiii: yu,
				invoke_iij: Ts,
				invoke_iiji: zs,
				invoke_iijii: Vs,
				invoke_iijiii: Tu,
				invoke_iijijijiji: Bu,
				invoke_iijj: bu,
				invoke_iijjjiiii: gu,
				invoke_iijjjj: ku,
				invoke_iijjjji: Su,
				invoke_ij: Nu,
				invoke_iji: Fu,
				invoke_j: Vl,
				invoke_ji: zl,
				invoke_jii: As,
				invoke_jiii: Pl,
				invoke_jiiii: Qu,
				invoke_jiiiii: Ks,
				invoke_jiiiiiiii: Ws,
				invoke_jiiiiiji: js,
				invoke_jiij: vu,
				invoke_jij: eu,
				invoke_jj: Pu,
				invoke_v: El,
				invoke_vd: Gu,
				invoke_vi: Tl,
				invoke_vid: nu,
				invoke_viddjjii: hu,
				invoke_vif: $s,
				invoke_viff: Ms,
				invoke_vii: Sl,
				invoke_viid: fu,
				invoke_viidi: qu,
				invoke_viif: ws,
				invoke_viii: bl,
				invoke_viiii: Dl,
				invoke_viiiii: wl,
				invoke_viiiiii: Wl,
				invoke_viiiiiidiii: Zl,
				invoke_viiiiiii: Bl,
				invoke_viiiiiiiddiii: Ql,
				invoke_viiiiiiii: Ol,
				invoke_viiiiiiiii: Fl,
				invoke_viiiiiiiiii: Jl,
				invoke_viiiiiiiiiiii: Ps,
				invoke_viiiiiiiiiiiii: wu,
				invoke_viiiiiiiiiiiiiii: Ju,
				invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: Lu,
				invoke_viiiiiiij: Mu,
				invoke_viiiiij: du,
				invoke_viiiiiji: Hu,
				invoke_viiiij: mu,
				invoke_viiiijiiii: Ls,
				invoke_viiij: Du,
				invoke_viiiji: rs,
				invoke_viij: Ns,
				invoke_viiji: ru,
				invoke_viijii: ou,
				invoke_viijiiii: Js,
				invoke_viijj: Au,
				invoke_viijjdiii: as,
				invoke_vij: Is,
				invoke_viji: Iu,
				invoke_vijiiiii: Hl,
				invoke_vijj: tu,
				invoke_vijji: Cu,
				invoke_vjiiiiii: Gl,
				is_participant_known_contact_js: Ze,
				llvm_eh_typeid_for: pi,
				loggingCallback_js_sync: _t,
				memory: B || h.wasmMemory,
				on_call_event_js_sync: je,
				patch_abort_for_ml_inference: Qe,
				query_browser_audio_processing_status_js_sync: ut,
				renderVideoFrame_js: et,
				sendSignalingXMPP_js_sync: tt,
				set_ml_inference_flag: Ke,
				strftime_l: bi
			}, Di = Oe(), xi = De("__wasm_call_ctors"), $i = De("__cxa_free_exception"), Pi = h._malloc = De("malloc"), Ni = h._free = De("free"), Mi = h._wasm_throw_ml_abort = De("wasm_throw_ml_abort"), wi = h._fflush = De("fflush"), Ai = De("__errno_location"), Fi = h._pthread_self = function() {
				return (Fi = h._pthread_self = W.pthread_self)();
			}, Oi = De("ntohs"), Bi = De("htonl"), Wi = De("htons"), qi = h.__ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj = De("_ZN5folly15SharedMutexImplILb1EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj"), Ui = h.__ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj = De("_ZN5folly15SharedMutexImplILb0EvNSt3__26atomicENS_24SharedMutexPolicyDefaultEE25wakeRegisteredWaitersImplERjj"), Vi = De("__cxa_increment_exception_refcount"), Hi = De("__cxa_decrement_exception_refcount"), Gi = h.__emscripten_tls_init = De("_emscripten_tls_init"), zi = De("emscripten_builtin_memalign"), ji = De("__getTypeName"), Ki = h.__embind_initialize_bindings = De("_embind_initialize_bindings"), Qi = h.__emscripten_thread_init = De("_emscripten_thread_init"), Xi = h.__emscripten_thread_crashed = De("_emscripten_thread_crashed"), Yi = De("emscripten_main_thread_process_queued_calls"), Ji = De("emscripten_main_runtime_thread_id"), Zi = De("_emscripten_run_in_main_runtime_thread_js"), el = De("emscripten_dispatch_to_thread_"), tl = function() {
				return (tl = W.emscripten_stack_get_base)();
			}, nl = function() {
				return (nl = W.emscripten_stack_get_end)();
			}, rl = De("_emscripten_thread_free_data"), ol = h.__emscripten_thread_exit = De("_emscripten_thread_exit"), al = h.__emscripten_check_mailbox = De("_emscripten_check_mailbox"), il = De("setThrew"), ll = De("setTempRet0"), sl = function() {
				return (sl = W.emscripten_stack_init)();
			}, ul = function(t, n) {
				return (ul = W.emscripten_stack_set_limits)(t, n);
			}, cl = function() {
				return (cl = W.emscripten_stack_get_free)();
			}, dl = De("stackSave"), ml = De("stackRestore"), pl = De("stackAlloc"), _l = function() {
				return (_l = W.emscripten_stack_get_current)();
			}, fl = h.___get_exception_message = De("__get_exception_message"), gl = De("__cxa_can_catch"), hl = De("__cxa_is_pointer_type"), yl = h.___start_em_js = 1378172, Cl = h.___stop_em_js = 1383604;
			function bl(e, t, n, r) {
				var o = dl();
				try {
					cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function vl(e) {
				var t = dl();
				try {
					return cn(e)();
				} catch (e) {
					if (ml(t), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Sl(e, t, n) {
				var r = dl();
				try {
					cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Rl(e, t) {
				var n = dl();
				try {
					return cn(e)(t);
				} catch (e) {
					if (ml(n), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ll(e, t, n) {
				var r = dl();
				try {
					return cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function El(e) {
				var t = dl();
				try {
					cn(e)();
				} catch (e) {
					if (ml(t), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function kl(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Il(e, t, n, r, o, a, i) {
				var l = dl();
				try {
					return cn(e)(t, n, r, o, a, i);
				} catch (e) {
					if (ml(l), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Tl(e, t) {
				var n = dl();
				try {
					cn(e)(t);
				} catch (e) {
					if (ml(n), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Dl(e, t, n, r, o) {
				var a = dl();
				try {
					cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function xl(e, t, n, r, o) {
				var a = dl();
				try {
					return cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function $l(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Pl(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function Nl(e, t, n, r, o, a, i, l, s, u) {
				var c = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (ml(c), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ml(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function wl(e, t, n, r, o, a) {
				var i = dl();
				try {
					cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Al(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Fl(e, t, n, r, o, a, i, l, s, u) {
				var c = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (ml(c), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ol(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Bl(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Wl(e, t, n, r, o, a, i) {
				var l = dl();
				try {
					cn(e)(t, n, r, o, a, i);
				} catch (e) {
					if (ml(l), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ql(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
				var _ = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
				} catch (e) {
					if (ml(_), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ul(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h) {
				var y = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h);
				} catch (e) {
					if (ml(y), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Vl(e) {
				var t = dl();
				try {
					return cn(e)();
				} catch (e) {
					if (ml(t), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function Hl(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Gl(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function zl(e, t) {
				var n = dl();
				try {
					return cn(e)(t);
				} catch (e) {
					if (ml(n), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function jl(e, t, n, r, o, a, i, l, s, u, c) {
				var d = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (ml(d), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Kl(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ql(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				var p = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
				} catch (e) {
					if (ml(p), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Xl(e, t, n, r, o) {
				var a = dl();
				try {
					return cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Yl(e, t, n, r, o, a, i, l, s, u, c, d) {
				var m = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d);
				} catch (e) {
					if (ml(m), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Jl(e, t, n, r, o, a, i, l, s, u, c) {
				var d = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (ml(d), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Zl(e, t, n, r, o, a, i, l, s, u, c) {
				var d = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (ml(d), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function es(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ts(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ns(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function rs(e, t, n, r, o, a) {
				var i = dl();
				try {
					cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function os(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
				var g = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
				} catch (e) {
					if (ml(g), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function as(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function is(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ls(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ss(e, t, n, r, o, a, i, l, s, u) {
				var c = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (ml(c), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function us(e, t, n, r, o, a, i, l, s, u, c) {
				var d = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (ml(d), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function cs(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ds(e, t, n, r, o, a, i, l, s, u) {
				var c = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (ml(c), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ms(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ps(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function _s(e, t, n) {
				var r = dl();
				try {
					return cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function fs(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function gs(e, t, n, r, o, a, i) {
				var l = dl();
				try {
					return cn(e)(t, n, r, o, a, i);
				} catch (e) {
					if (ml(l), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function hs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
				var f = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
				} catch (e) {
					if (ml(f), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ys(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v) {
				var S = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v);
				} catch (e) {
					if (ml(S), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Cs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R) {
				var L = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R);
				} catch (e) {
					if (ml(L), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function bs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
				var h = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g);
				} catch (e) {
					if (ml(h), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function vs(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ss(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b) {
				var v = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b);
				} catch (e) {
					if (ml(v), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Rs(e, t, n, r, o, a, i, l, s, u, c, d) {
				var m = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d);
				} catch (e) {
					if (ml(m), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ls(e, t, n, r, o, a, i, l, s, u) {
				var c = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (ml(c), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Es(e, t, n, r, o, a, i, l, s, u, c) {
				var d = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (ml(d), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ks(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				var p = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
				} catch (e) {
					if (ml(p), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Is(e, t, n) {
				var r = dl();
				try {
					cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ts(e, t, n) {
				var r = dl();
				try {
					return cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ds(e, t, n, r, o) {
				var a = dl();
				try {
					return cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function xs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
				var f = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
				} catch (e) {
					if (ml(f), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function $s(e, t, n) {
				var r = dl();
				try {
					cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ps(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				var p = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
				} catch (e) {
					if (ml(p), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ns(e, t, n, r) {
				var o = dl();
				try {
					cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ms(e, t, n, r) {
				var o = dl();
				try {
					cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ws(e, t, n, r) {
				var o = dl();
				try {
					cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function As(e, t, n) {
				var r = dl();
				try {
					return cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function Fs(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Os(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Bs(e, t, n, r, o, a, i) {
				var l = dl();
				try {
					return cn(e)(t, n, r, o, a, i);
				} catch (e) {
					if (ml(l), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ws(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function qs(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Us(e, t, n, r, o, a, i) {
				var l = dl();
				try {
					return cn(e)(t, n, r, o, a, i);
				} catch (e) {
					if (ml(l), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Vs(e, t, n, r, o) {
				var a = dl();
				try {
					return cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Hs(e, t, n, r, o, a, i, l, s, u) {
				var c = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (ml(c), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Gs(e, t, n, r, o, a, i, l, s, u, c) {
				var d = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (ml(d), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function zs(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function js(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function Ks(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function Qs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
				var g = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
				} catch (e) {
					if (ml(g), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Xs(e, t) {
				var n = dl();
				try {
					return cn(e)(t);
				} catch (e) {
					if (ml(n), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ys(e, t, n, r, o, a, i, l, s, u, c) {
				var d = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (ml(d), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Js(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Zs(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C) {
				var b = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C);
				} catch (e) {
					if (ml(b), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function eu(e, t, n) {
				var r = dl();
				try {
					return cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function tu(e, t, n, r) {
				var o = dl();
				try {
					cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function nu(e, t, n) {
				var r = dl();
				try {
					cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ru(e, t, n, r, o) {
				var a = dl();
				try {
					cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ou(e, t, n, r, o, a) {
				var i = dl();
				try {
					cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function au(e, t, n, r, o, a, i, l, s, u, c) {
				var d = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (ml(d), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function iu(e, t, n, r, o) {
				var a = dl();
				try {
					return cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function lu(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function su(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function uu(e, t) {
				var n = dl();
				try {
					return cn(e)(t);
				} catch (e) {
					if (ml(n), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function cu(e, t, n, r, o) {
				var a = dl();
				try {
					return cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function du(e, t, n, r, o, a, i) {
				var l = dl();
				try {
					cn(e)(t, n, r, o, a, i);
				} catch (e) {
					if (ml(l), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function mu(e, t, n, r, o, a) {
				var i = dl();
				try {
					cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function pu(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function _u(e, t, n, r, o) {
				var a = dl();
				try {
					return cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function fu(e, t, n, r) {
				var o = dl();
				try {
					cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function gu(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function hu(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function yu(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Cu(e, t, n, r, o) {
				var a = dl();
				try {
					cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function bu(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function vu(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function Su(e, t, n, r, o, a, i) {
				var l = dl();
				try {
					return cn(e)(t, n, r, o, a, i);
				} catch (e) {
					if (ml(l), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ru(e, t, n, r, o, a, i, l, s, u, c) {
				var d = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c);
				} catch (e) {
					if (ml(d), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Lu(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $) {
				var P = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $);
				} catch (e) {
					if (ml(P), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Eu(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ku(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Iu(e, t, n, r) {
				var o = dl();
				try {
					cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Tu(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Du(e, t, n, r, o) {
				var a = dl();
				try {
					cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function xu(e, t, n, r, o, a, i) {
				var l = dl();
				try {
					return cn(e)(t, n, r, o, a, i);
				} catch (e) {
					if (ml(l), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function $u(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Pu(e, t) {
				var n = dl();
				try {
					return cn(e)(t);
				} catch (e) {
					if (ml(n), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function Nu(e, t) {
				var n = dl();
				try {
					return cn(e)(t);
				} catch (e) {
					if (ml(n), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Mu(e, t, n, r, o, a, i, l, s) {
				var u = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s);
				} catch (e) {
					if (ml(u), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function wu(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
				var _ = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p);
				} catch (e) {
					if (ml(_), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Au(e, t, n, r, o) {
				var a = dl();
				try {
					cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Fu(e, t, n) {
				var r = dl();
				try {
					return cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ou(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Bu(e, t, n, r, o, a, i, l, s, u) {
				var c = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (ml(c), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Wu(e, t, n, r, o, a, i, l, s, u, c, d, m) {
				var p = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u, c, d, m);
				} catch (e) {
					if (ml(p), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function qu(e, t, n, r, o) {
				var a = dl();
				try {
					cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Uu(e, t, n, r, o, a, i, l, s, u) {
				var c = dl();
				try {
					return cn(e)(t, n, r, o, a, i, l, s, u);
				} catch (e) {
					if (ml(c), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Vu(e, t, n) {
				var r = dl();
				try {
					return cn(e)(t, n);
				} catch (e) {
					if (ml(r), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Hu(e, t, n, r, o, a, i, l) {
				var s = dl();
				try {
					cn(e)(t, n, r, o, a, i, l);
				} catch (e) {
					if (ml(s), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Gu(e, t) {
				var n = dl();
				try {
					cn(e)(t);
				} catch (e) {
					if (ml(n), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function zu(e) {
				var t = dl();
				try {
					return cn(e)();
				} catch (e) {
					if (ml(t), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function ju(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ku(e, t, n, r, o, a) {
				var i = dl();
				try {
					return cn(e)(t, n, r, o, a);
				} catch (e) {
					if (ml(i), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Qu(e, t, n, r, o) {
				var a = dl();
				try {
					return cn(e)(t, n, r, o);
				} catch (e) {
					if (ml(a), !(e instanceof xe)) throw e;
					return il(1, 0), BigInt(0);
				}
			}
			function Xu(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Yu(e, t, n, r) {
				var o = dl();
				try {
					return cn(e)(t, n, r);
				} catch (e) {
					if (ml(o), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			function Ju(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _, f) {
				var g = dl();
				try {
					cn(e)(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f);
				} catch (e) {
					if (ml(g), !(e instanceof xe)) throw e;
					il(1, 0);
				}
			}
			h.keepRuntimeAlive = de, h.wasmMemory = B, h.GROWABLE_HEAP_U8 = c, h.GROWABLE_HEAP_F32 = f, h.ExitStatus = ft, h.FS = Kt, h.PThread = nn, h.registeredTypes = or;
			var Zu = [
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
			Zu.forEach(Ve);
			var ec = [
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
			ec.forEach(He);
			var tc;
			be = function e() {
				tc || rc(), tc || (be = e);
			};
			function nc() {
				H(!T), sl(), oe();
			}
			function rc() {
				if (ye > 0) return;
				if (T || nc(), T) {
					y(h), pe(), startWorker(h);
					return;
				}
				if (me(), ye > 0) return;
				function e() {
					tc || (tc = !0, h.calledRun = !0, !U && (pe(), y(h), h.onRuntimeInitialized && h.onRuntimeInitialized(), H(!h._main, "compiled without a main, but one is present. if you added it from JS, use Module[\"onRuntimeInitialized\"]"), _e()));
				}
				h.setStatus ? (h.setStatus("Running..."), setTimeout(function() {
					setTimeout(function() {
						h.setStatus("");
					}, 1), e();
				}, 1)) : e(), ae();
			}
			function oc() {
				var e = w, t = A, n = !1;
				w = A = function(t) {
					n = !0;
				};
				try {
					wi(0), ["stdout", "stderr"].forEach(function(e) {
						var t = Kt.analyzePath("/dev/" + e);
						if (t) {
							var r = t.object, o = r.rdev, a = Nt.ttys[o];
							a && a.output && a.output.length && (n = !0);
						}
					});
				} catch (e) {}
				w = e, A = t, n && pn("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
			}
			if (h.preInit) for (typeof h.preInit == "function" && (h.preInit = [h.preInit]); h.preInit.length > 0;) h.preInit.pop()();
			return rc(), a.ready;
		};
	})();
	typeof l == "object" && typeof i == "object" ? i.exports = c : typeof define == "function" && define.amd && define([], function() {
		return c;
	});
}), 34);
