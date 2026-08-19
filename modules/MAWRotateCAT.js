__d("MAWRotateCAT", [
	"FBLogger",
	"MAWBridge",
	"MAWCatQuery.graphql",
	"MAWCryptoAuthToken",
	"MAWFbCat",
	"MAWODSProxy",
	"MAWQplProxy",
	"Promise",
	"WAArrayBufferUtils",
	"WADbDeviceRegistration",
	"WADbMetaTxns",
	"WALogger",
	"WAOdsEnums",
	"WAPromiseRetryLoop",
	"WARetryUtils",
	"asyncToGeneratorRuntime",
	"createWorkerQuery",
	"getErrorSafe",
	"gkx",
	"qpl",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = r("requireDeferred")("WorkerRelayNetwork").__setRef("MAWRotateCAT"), _ = r("qpl")._(1056847537, "2667"), f = 0;
	function g(t) {
		var a = t.initiator, i = t.qplAnnotations;
		f++;
		var l = o("MAWQplProxy").startQplUserFlow(_, {
			int: babelHelpers.extends({}, i.int, { totalRotationCounter: f }),
			string: babelHelpers.extends({}, i.string, { initiator: a })
		});
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.CAT_ROTATION,
			key: "rotateCAT"
		});
		var c = null;
		return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Starting rotate CAT Task Bridge event"]))), r("gkx")("8216") ? (l.addAnnotations({ string: { fetchFrom: "worker" } }), c = C(l).catch(function(e) {
			return l.addPoint("fallback_to_ui"), v().catch(function(t) {
				var o = r("getErrorSafe")(t);
				return l.addPoint("fallback_error", { string: { errorDescriptionUI: o.message } }), (m || (m = n("Promise"))).reject(e);
			});
		})) : (l.addAnnotations({ string: { fetchFrom: "tab" } }), c = v()), c.then(function(e) {
			if (!e) throw l.addPoint("no_valid_result"), r("FBLogger")("messenger_web").mustfixThrow("CAT Rotation failed: no valid result");
			return o("WADbMetaTxns").saveCAT(e);
		}).then(function(e) {
			return l.addPoint("set_fb_cat"), o("MAWFbCat").setFbCat(o("WAArrayBufferUtils").stringToArrayBuffer(e.encrypted_serialized_cat)), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["CAT Finished Rotating"]))), l.endSuccess(), e;
		}).catch(function(e) {
			var t = r("getErrorSafe")(e);
			return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[MAWRotateCAT] Got an error while attempting to rotate CAT: ", ""])), t), l.endFail("error", { string: { errorDescription: t.message } }), null;
		});
	}
	var h = null;
	function y(e) {
		var t;
		if (h != null) return h.promise();
		var a = (t = e == null ? void 0 : e.retries) != null ? t : o("WADbDeviceRegistration").MAX_ROTATE_CRYPTO_AUTH_TOKEN_RETRIES, i = 0, l = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
			code: (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var n, l;
					if (i === a) throw o("WALogger").COUNT(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Unable to rotate CAT"]))), r("FBLogger")("messenger_web").mustfixThrow("Unable to rotate CAT");
					var s = yield g({
						initiator: "MAWRotateCAT::tryRotateCAT",
						qplAnnotations: {
							int: babelHelpers.extends({}, (n = e.qplAnnotations) == null ? void 0 : n.int, {
								retryLoopAllowedRetries: a,
								retryLoopZeroBasedIteration: i
							}),
							string: babelHelpers.extends({}, (l = e.qplAnnotations) == null ? void 0 : l.string, { retryLoopInitiator: e.initiator })
						}
					});
					s != null && (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Rotate CAT finished, ending rotate CAT promise retry loop"]))), t()), i++;
				});
				function l(e) {
					return t.apply(this, arguments);
				}
				return l;
			})(),
			name: "rotateCAT",
			timer: o("WARetryUtils").fibonacciBackoff(!0)
		});
		return l.start(), l.promise().finally(function() {
			h = null;
		}), h = l, l.promise();
	}
	function C(e) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return yield p.load().then(function(e) {
				var t = e.createWorkerNetworkExecute;
				t();
			}), r("createWorkerQuery")(r("MAWCatQuery.graphql"), {}, {
				onExecute: function() {
					e.addPoint("query_executed");
				},
				onResponse: function(n) {
					if (e.addPoint("response_received", {
						bool: {
							response_is_array: Array.isArray(n),
							response_is_null: n === null
						},
						int: { response_array_size: Array.isArray(n) ? n.length : void 0 },
						string: { response_type: typeof n }
					}), typeof n == "object") {
						var t = Array.isArray(n) ? n[0] : n;
						t != null && e.addAnnotations({
							string: { response_payload: JSON.stringify(t.payload) },
							string_array: { response_keys: Object.keys(t) }
						});
					}
				}
			}).then(function(e) {
				return o("MAWCryptoAuthToken").processCatResponse(e);
			}).then(function(e) {
				if (e.error != null) throw r("FBLogger")("messenger_web").mustfixThrow(e.error);
				return e.success;
			});
		}), b.apply(this, arguments);
	}
	function v() {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			return yield o("MAWQplProxy").workerBridgeDeferred.getPromise(), o("MAWBridge").getBridge().sendAndReceive("event", "rotateCryptoAuthToken", {});
		}), S.apply(this, arguments);
	}
	l.rotateCAT = g, l.tryRotateCAT = y;
}), 98);
