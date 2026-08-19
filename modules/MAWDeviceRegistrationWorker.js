__d("MAWDeviceRegistrationWorker", [
	"IGDWebUtils",
	"MAWClearSignalAndTempStores",
	"MAWCryptoAuthTokenWrapper",
	"MAWCurrentUser",
	"MAWDeviceRegistrationActions",
	"MAWDeviceRegistrationODSBump",
	"MAWDeviceRegistrationSessionUtil",
	"MAWDeviceRegistrationUtilWorker",
	"MAWJids",
	"MAWLoggerUtils",
	"MAWODSProxy",
	"MAWQplProxy",
	"MWFBLogger",
	"MessengerWebInitData",
	"Promise",
	"UserAgentData",
	"WADbDeviceRegistration",
	"WADbMetaTxns",
	"WADbRegistrationApi",
	"WAIdentityApi",
	"WAJids",
	"WAMockServerShell",
	"WAOdsEnums",
	"WAPreRegistrationCrypto",
	"WASignalKeys",
	"WATimeUtils",
	"WMIRateLimiter",
	"asyncToGeneratorRuntime",
	"cr:7755",
	"getErrorSafe",
	"getSafeQplErrorMessage",
	"justknobx",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y = r("justknobx")._("3282"), C = r("justknobx")._("3325"), b = {
		key: "device_registration",
		limit: C,
		windowMs: 3600 * 1e3
	}, v = o("MWFBLogger").MWLogger().tags([o("MAWLoggerUtils").Tag.DeviceRegistration]), S = function() {
		return o("IGDWebUtils").isInstagramWebSupportedApp(Number(o("MAWCurrentUser").getAppID()));
	};
	function R(e) {
		return e === 0x453bf7349370c || e === 936619743392459 || e === 487152425211411 || e === 0x3ae327b82f808 ? "instagram.com" : e === 772021112871879 ? "messenger.com" : e === 0x7e36f3fcc43bc ? "facebook.com" : "unknown";
	}
	function L(e, t) {
		return t === void 0 && (t = 400), {
			message: e,
			registrationState: { type: o("WADbDeviceRegistration").RegistrationStatesEnum.failed },
			status: t
		};
	}
	function E(e, t, n) {
		return k.apply(this, arguments);
	}
	function k() {
		return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a, i = x(t, n);
			v.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Beginning device registration"])));
			var l = yield o("MAWDeviceRegistrationUtilWorker").createNewRegistrationMeta();
			i.addPoint("registration_created"), t.addAnnotations({ string: { unique_device_id: l.deviceUUID } }), yield o("WADbRegistrationApi").saveRegistrationMeta(o("MAWCurrentUser").getID(), l), i.addPoint("registration_saved");
			var s = o("MAWCurrentUser").getID(), c = l.deviceUUID, d = o("WAPreRegistrationCrypto").serializeRegistrationData(l.signalRegInfo), m = null, p = !1, _ = (a = p ? 0x39f22521e351a : o("MAWCurrentUser").getAppID()) == null ? void 0 : a.toString();
			if (_ == null) return L("appId is null, cannot register to WhatsApp");
			if (s === "0") return L(o("WADbDeviceRegistration").DEVICE_REGISTER_ERROR_ZERO_AS_USER_ID);
			try {
				var f = yield o("MAWDeviceRegistrationUtilWorker").register(s, e.encrypted_serialized_cat, _, c, d.regId, d.identityPubKeyType, d.identityPubKey, d.signedPreKey);
				i.addPoint("device_registered");
				var g = f == null ? void 0 : f.type;
				if (g != null && o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.REGISTRATION_TYPE,
					key: g
				}), !f || !(f != null && f.success)) {
					var h, y;
					return {
						message: (h = f == null ? void 0 : f.message) != null ? h : o("WADbDeviceRegistration").NULL_RESPONSE_FROM_SERVER,
						registrationState: { type: o("WADbDeviceRegistration").RegistrationStatesEnum.failed },
						status: (y = f == null ? void 0 : f.status) != null ? y : "400"
					};
				}
				m = f.wa_device_id;
			} catch (e) {
				return L(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e));
			}
			if (m == null) return L(o("WADbDeviceRegistration").NULL_RESPONSE_FROM_SERVER);
			var C = o("MAWJids").toUserJid(s);
			if (!S()) {
				var b = r("MessengerWebInitData").sessionId;
				b != null && r("promiseDone")(o("MAWDeviceRegistrationSessionUtil").linkDeviceToTheSession(c, b));
			}
			yield o("WADbRegistrationApi").saveDeviceId(m), t.addPoint("device_saved");
			var R = {
				deviceJid: o("WAJids").toDeviceJid(C, m),
				identity: o("WASignalKeys").serializeIdentity(l.signalRegInfo.identityKeyPair.publicKey),
				userJid: C
			};
			return yield o("WAIdentityApi").saveIdentity(R), t.addPoint("identity_saved"), {
				message: o("WADbDeviceRegistration").DEVICE_SUCCESSFULLY_REGISTERED,
				registrationState: {
					registrationTime: l.registrationUnixTime,
					type: o("WADbDeviceRegistration").RegistrationStatesEnum.finished
				},
				status: 200
			};
		}), k.apply(this, arguments);
	}
	function I(e, t) {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var a = o("MAWQplProxy").startQplUserFlow(r("qpl")._(25307273, "1410"), { string: {
				browser_name: r("UserAgentData").browserName,
				device_os: r("UserAgentData").platformName,
				device_os_version: r("UserAgentData").platformVersion,
				interface: R(Number(o("MAWCurrentUser").getAppID()))
			} }, { providedTimeoutInMs: 2e4 }), i = function(t, n) {
				return o("MAWQplProxy").measurePerfInQPL(a, t, n);
			};
			try {
				var l = t != null ? t : o("MAWCryptoAuthTokenWrapper").getCryptoAuthToken();
				if (l == null || l.encrypted_serialized_cat === "") return v.WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Crypto Auth Token was null or incomplete"]))), a.endFail("empty_cat_token"), L(o("WADbDeviceRegistration").DEVICE_REGISTER_ERROR_EMPTY_CAT_TOKEN, 414);
				if (e != null && o("MAWQplProxy").sendQPLAnnotationsThroughBridge(e, { int: { secondsUntilCATExpiration: Math.floor(l.expiration_time_in_seconds - Date.now() / 1e3) } }), !o("WATimeUtils").isInFuture(o("WATimeUtils").castToUnixTime(l.expiration_time_in_seconds))) return a.endFail("expired_cat_token"), L(o("WADbDeviceRegistration").DEVICE_REGISTER_ERROR_EXPIRED_CAT_TOKEN, 413);
				if (o("WAMockServerShell").isMockServerMode) {
					var s = yield o("MAWDeviceRegistrationUtilWorker").createNewRegistrationMeta();
					return yield (h || (h = n("Promise"))).all([
						o("WADbRegistrationApi").saveRegistrationMeta(o("MAWCurrentUser").getID(), s),
						o("WADbRegistrationApi").saveDeviceId(o("WAJids").interpretAsDeviceId(1)),
						o("WADbMetaTxns").saveCAT(l)
					]), a.addPoint("wa_device_registration_mock_server"), a.endSuccess(), {
						message: "Skipping registration because of Mock Server",
						registrationState: {
							registrationTime: s.registrationUnixTime,
							type: o("WADbDeviceRegistration").RegistrationStatesEnum.finished
						},
						status: 200
					};
				}
				n("cr:7755") != null && (yield n("cr:7755").updateRegDataFromLocalStorage());
				var u = o("MAWDeviceRegistrationActions").getRegistrationMetaWorm(), k = yield i("get_registration_data", u);
				a.addAnnotations({ string: { unique_device_id: k == null ? void 0 : k.deviceUUID } }), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_check", { annotations: {
					bool: { identityCompareResult: k == null ? void 0 : k.identityCompareResult },
					int: { registrationVersion: k == null ? void 0 : k.registrationVersion }
				} });
				var I = (k == null ? void 0 : k.identityCompareResult) === !1;
				if (k == null || k.deviceId == null || I) {
					if (a.addAnnotations({ bool: { isNewRegistartion: !0 } }), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_new_reg_start"), v.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
						"RATE LIMIT SETTINGS LOG ONLY: ",
						" ENABLED: ",
						" COUNT: ",
						""
					])), r("justknobx")._("3587"), y, C), y) {
						var T = yield o("WMIRateLimiter").checkAndRecordAttempt(b), D = {
							bool: { rateLimitBreached: T.limitBreached },
							int: { rateLimitCount: T.currentCount }
						};
						if (a.addAnnotations(D), v.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
							"Client rate limiting check complete. ",
							"/",
							" attempts."
						])), T.currentCount, b.limit), T.limitBreached) if (r("justknobx")._("3587")) a.addAnnotations({ bool: { rateLimitLogOnly: !0 } }), v.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose([
							"Device registration client rate limit exceeded (not skipping). ",
							"/",
							" attempts."
						])), T.currentCount, b.limit);
						else return v.MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
							"Device registration client rate limit exceeded. ",
							"/",
							" attempts."
						])), T.currentCount, b.limit), a.endFail("client_rate_limit_exceeded"), L("client_rate_limit_exceeded", 500);
						v.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Device registration rate limit check passed"])));
					}
					try {
						yield i("clear_signal_stores", o("MAWClearSignalAndTempStores").clearSignalAndTempStores()), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_signal_temp_stores_cleared"), yield i("save_cat", o("WADbMetaTxns").saveCAT(l)), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_cat_saved");
					} catch (e) {
						return L(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e));
					}
					var x = yield i("try_register", E(l, a, e));
					return x.registrationState.type === o("WADbDeviceRegistration").RegistrationStatesEnum.failed ? a.endFail("wa_device_registration_failed", { string: { errorMsg: x.message } }) : (a.addPoint("wa_device_registration_successful"), a.endSuccess()), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_new_reg_end"), x;
				} else {
					a.addAnnotations({ bool: { isNewRegistartion: !1 } }), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_existing_reg_start"), yield i("save_cat", o("WADbMetaTxns").saveCAT(l));
					var $ = r("MessengerWebInitData").sessionId, P = k.lastSessionDeviceWasLinkedTo == null || k.lastSessionDeviceWasLinkedTo !== $;
					$ != null && !(k.deviceUUID === $ || k.deviceUUID.startsWith($ + "-")) && P && !S() && r("promiseDone")(o("MAWDeviceRegistrationSessionUtil").linkDeviceToTheSession(k.deviceUUID, $)), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_existing_reg_end");
				}
				return r("MAWDeviceRegistrationODSBump")("already_registered"), a.addPoint("wa_device_registration_persisted"), a.endSuccess(), v.DEBUG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Skipping device registration"]))), {
					message: o("WADbDeviceRegistration").DEVICE_ALREADY_REGISTERED,
					registrationState: { type: o("WADbDeviceRegistration").RegistrationStatesEnum.finished },
					status: 200
				};
			} catch (e) {
				var N, M = r("getErrorSafe")(e);
				throw a.endFail("uncaught_exception", { string: { errorMsg: (N = M.message) != null ? N : "No error message" } }), M;
			}
		}), T.apply(this, arguments);
	}
	function D(t) {
		r("MAWDeviceRegistrationODSBump")("fail"), v.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), o("WADbDeviceRegistration").FAILED_REGISTRATION_RETRIES);
		for (var n of t) v.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Device registration failure - ", ""])), n);
	}
	function x(e, t) {
		return {
			addAnnotations: function(r) {
				e.addAnnotations(r), t != null && o("MAWQplProxy").sendQPLAnnotationsThroughBridge(t, r);
			},
			addPoint: function(r, a) {
				e.addPoint(r, a), t != null && o("MAWQplProxy").sendQplPointThroughBridge(t, "device_registration_" + r, { annotations: a });
			},
			endCancel: function() {},
			endFail: function(t, n) {},
			endSuccess: function() {},
			getQPLAttrs: function() {
				return { instanceKey: 0 };
			},
			isActive: function() {
				return !0;
			},
			start: function() {}
		};
	}
	l.handleRegistrationError = L, l.setupDeviceRegistration = I, l.logDeviceRegistrationRetryFailure = D;
}), 98);
