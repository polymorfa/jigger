__d("MAWDeviceRegistrationInitWorker", [
	"BackendInitLoggingUtils",
	"BrowserLockManager",
	"FBLogger",
	"MAWDeviceRegistrationODSBump",
	"MAWDeviceRegistrationWorker",
	"MAWHMACKey",
	"MAWQplProxy",
	"MAWRotateCAT",
	"MWFBLogger",
	"Promise",
	"WADbDeviceRegistration",
	"WADbRegistrationApi",
	"WAGetRegistrationInfoApi",
	"WAPromiseRetryLoop",
	"WARetryUtils",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"justknobx",
	"memoizeOneWithArgs",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C = o("MWFBLogger").MWLogger().tags([
		"backend",
		"init",
		"deviceRegistration"
	]);
	function b(t) {
		return t === void 0 && (t = !0), r("BrowserLockManager") != null ? o("BackendInitLoggingUtils").measureMawInit("request_maw_registration_lock", function() {
			return new (y || (y = (n("Promise"))))(function(o, a) {
				r("promiseDone")(r("BrowserLockManager").request("maw_registration_lock", n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					r("FBLogger")("wmi").tags([
						"backend",
						"init",
						"deviceRegistration"
					]).DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Running registerDevice with lock"])));
					try {
						var n = yield v(t);
						o(n);
					} catch (e) {
						a(e);
					}
				})));
			});
		}) : (r("FBLogger")("wmi").tags([
			"backend",
			"init",
			"deviceRegistration"
		]).DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Running registerDevice without lock"]))), v(t));
	}
	var v = r("memoizeOneWithArgs")((function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("BackendInitLoggingUtils").measureMawInit("init_device_reg_overall", function() {
				return S();
			}), a = t.message, i = t.registrationState;
			if (i.type === o("WADbDeviceRegistration").RegistrationStatesEnum.failed) throw C.mustfixThrow("registration_failed: " + a);
			if (!e) {
				C.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Skipping HMAC generation and registration data loading"])));
				return;
			}
			r("FBLogger")("wmi").tags([
				"backend",
				"init",
				"deviceRegistration"
			]).DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Generating HMAC and loading registration data"])));
			var l = yield (y || (y = n("Promise"))).all([o("BackendInitLoggingUtils").measureMawInit("load_reg_in_txn", function() {
				return o("WADbRegistrationApi").loadAllRegistrationMetaInTransaction();
			}), o("BackendInitLoggingUtils").measureMawInit("gen_insert_hmac", function() {
				return o("MAWHMACKey").generateAndInsertHMACKey();
			})]), s = l[0], d = l[1];
			return {
				hmacKey: d,
				regData: s
			};
		});
		return function(t) {
			return e.apply(this, arguments);
		};
	})());
	function S() {
		var e = 0, t = new Set(), a = 0, i = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
			code: (function() {
				var i = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
					if (e++, e > o("WADbDeviceRegistration").MAX_DEVICE_REGISTRATION_RETRIES) {
						o("MAWDeviceRegistrationWorker").logDeviceRegistrationRetryFailure(t);
						var i = o("MAWDeviceRegistrationWorker").handleRegistrationError(o("WADbDeviceRegistration").FAILED_REGISTRATION_RETRIES);
						n(i);
						return;
					}
					try {
						var l = null;
						switch (a) {
							case 414:
							case 413:
							case 418: {
								C.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["DeviceRegistration ", ". Rotate CAT"])), a), l = yield o("MAWRotateCAT").rotateCAT({
									initiator: "MAWDeviceRegistrationInitWorker::initDeviceRegistration",
									qplAnnotations: { int: { prevStatusCode: a } }
								});
								break;
							}
							case 400:
							case 401: {
								C.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["DeviceRegistration ", ": User should re-login"])), a), r("justknobx")._("3526") && (l = yield o("MAWRotateCAT").rotateCAT({
									initiator: "MAWDeviceRegistrationInitWorker::initDeviceRegistration",
									qplAnnotations: { int: { prevStatusCode: a } }
								}));
								break;
							}
							case 415: {
								C.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["DeviceRegistration 415: User should take action to  re-register to WAI"])));
								break;
							}
							case 403: {
								C.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["DeviceRegistration 403: User is banned"])));
								break;
							}
							case 500: {
								C.MUSTFIX(f || (f = babelHelpers.taggedTemplateLiteralLoose(["DeviceRegistration 500: Retry is needed"])));
								break;
							}
						}
						var s = e === 1 ? r("qpl")._(25310776, "6155") : null, u = yield o("MAWDeviceRegistrationWorker").setupDeviceRegistration(s, l);
						a = u.status, r("MAWDeviceRegistrationODSBump")("attempt." + e + ".result." + u.registrationState.type), u.registrationState.type === o("WADbDeviceRegistration").RegistrationStatesEnum.finished && (u.registrationState.registrationTime != null && r("MAWDeviceRegistrationODSBump")("success"), C.DEBUG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Registration finished, ending device registration promise retry loop"]))), n(u)), t.add(u.message), o("MAWQplProxy").sendQPLAnnotationsThroughBridge(r("qpl")._(25310776, "6155"), {
							int: { deviceRegistrationLastAttemptCount: e },
							string: { deviceRegistrationLastAttemptMessages: Array.from(t).join(", ") }
						});
					} catch (n) {
						var c = r("getErrorSafe")(n), y = "Uncaught device registration error - " + c.message;
						C.WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose(["", ""])), y), t.add("" + y), o("MAWQplProxy").sendQPLAnnotationsThroughBridge(r("qpl")._(25310776, "6155"), {
							int: { deviceRegistrationLastAttemptCount: e },
							string: { deviceRegistrationLastAttemptMessages: Array.from(t).join(", ") }
						});
					}
				});
				function l(e) {
					return i.apply(this, arguments);
				}
				return l;
			})(),
			name: "deviceRegistration",
			timer: o("WARetryUtils").fibonacciBackoff(!0)
		});
		return i.start(), i.promise().then(function(e) {
			return e.registrationState.type === o("WADbDeviceRegistration").RegistrationStatesEnum.finished && r("promiseDone")(o("WAGetRegistrationInfoApi").updateRegistrationHistory(e.registrationState.registrationTime)), e;
		});
	}
	l.registerDevice = b, l.initDeviceRegistration = S;
}), 98);
