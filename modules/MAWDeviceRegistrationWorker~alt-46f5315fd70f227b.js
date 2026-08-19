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
	"cr:7755",
	"getErrorSafe",
	"getSafeQplErrorMessage",
	"justknobx",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = r("justknobx")._("3282"), y = r("justknobx")._("3325"), C = {
		key: "device_registration",
		limit: y,
		windowMs: 3600 * 1e3
	}, b = o("MWFBLogger").MWLogger().tags([o("MAWLoggerUtils").Tag.DeviceRegistration]), v = function() {
		return o("IGDWebUtils").isInstagramWebSupportedApp(Number(o("MAWCurrentUser").getAppID()));
	};
	function S(e) {
		return e === 0x453bf7349370c || e === 936619743392459 || e === 487152425211411 || e === 0x3ae327b82f808 ? "instagram.com" : e === 772021112871879 ? "messenger.com" : e === 0x7e36f3fcc43bc ? "facebook.com" : "unknown";
	}
	function R(e, t) {
		return t === void 0 && (t = 400), {
			message: e,
			registrationState: { type: o("WADbDeviceRegistration").RegistrationStatesEnum.failed },
			status: t
		};
	}
	async function L(t, n, a) {
		var i, l = I(n, a);
		b.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Beginning device registration"])));
		var s = await o("MAWDeviceRegistrationUtilWorker").createNewRegistrationMeta();
		l.addPoint("registration_created"), n.addAnnotations({ string: { unique_device_id: s.deviceUUID } }), await o("WADbRegistrationApi").saveRegistrationMeta(o("MAWCurrentUser").getID(), s), l.addPoint("registration_saved");
		var u = o("MAWCurrentUser").getID(), c = s.deviceUUID, d = o("WAPreRegistrationCrypto").serializeRegistrationData(s.signalRegInfo), m = null, p = !1, _ = (i = p ? 0x39f22521e351a : o("MAWCurrentUser").getAppID()) == null ? void 0 : i.toString();
		if (_ == null) return R("appId is null, cannot register to WhatsApp");
		if (u === "0") return R(o("WADbDeviceRegistration").DEVICE_REGISTER_ERROR_ZERO_AS_USER_ID);
		try {
			var f = await o("MAWDeviceRegistrationUtilWorker").register(u, t.encrypted_serialized_cat, _, c, d.regId, d.identityPubKeyType, d.identityPubKey, d.signedPreKey);
			l.addPoint("device_registered");
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
			return R(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e));
		}
		if (m == null) return R(o("WADbDeviceRegistration").NULL_RESPONSE_FROM_SERVER);
		var C = o("MAWJids").toUserJid(u);
		if (!v()) {
			var S = r("MessengerWebInitData").sessionId;
			S != null && r("promiseDone")(o("MAWDeviceRegistrationSessionUtil").linkDeviceToTheSession(c, S));
		}
		await o("WADbRegistrationApi").saveDeviceId(m), n.addPoint("device_saved");
		var L = {
			deviceJid: o("WAJids").toDeviceJid(C, m),
			identity: o("WASignalKeys").serializeIdentity(s.signalRegInfo.identityKeyPair.publicKey),
			userJid: C
		};
		return await o("WAIdentityApi").saveIdentity(L), n.addPoint("identity_saved"), {
			message: o("WADbDeviceRegistration").DEVICE_SUCCESSFULLY_REGISTERED,
			registrationState: {
				registrationTime: s.registrationUnixTime,
				type: o("WADbDeviceRegistration").RegistrationStatesEnum.finished
			},
			status: 200
		};
	}
	async function E(e, t) {
		var a = o("MAWQplProxy").startQplUserFlow(r("qpl")._(25307273, "1410"), { string: {
			browser_name: r("UserAgentData").browserName,
			device_os: r("UserAgentData").platformName,
			device_os_version: r("UserAgentData").platformVersion,
			interface: S(Number(o("MAWCurrentUser").getAppID()))
		} }, { providedTimeoutInMs: 2e4 }), i = function(t, n) {
			return o("MAWQplProxy").measurePerfInQPL(a, t, n);
		};
		try {
			var l = t != null ? t : o("MAWCryptoAuthTokenWrapper").getCryptoAuthToken();
			if (l == null || l.encrypted_serialized_cat === "") return b.WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Crypto Auth Token was null or incomplete"]))), a.endFail("empty_cat_token"), R(o("WADbDeviceRegistration").DEVICE_REGISTER_ERROR_EMPTY_CAT_TOKEN, 414);
			if (e != null && o("MAWQplProxy").sendQPLAnnotationsThroughBridge(e, { int: { secondsUntilCATExpiration: Math.floor(l.expiration_time_in_seconds - Date.now() / 1e3) } }), !o("WATimeUtils").isInFuture(o("WATimeUtils").castToUnixTime(l.expiration_time_in_seconds))) return a.endFail("expired_cat_token"), R(o("WADbDeviceRegistration").DEVICE_REGISTER_ERROR_EXPIRED_CAT_TOKEN, 413);
			if (o("WAMockServerShell").isMockServerMode) {
				var f = await o("MAWDeviceRegistrationUtilWorker").createNewRegistrationMeta();
				return await Promise.all([
					o("WADbRegistrationApi").saveRegistrationMeta(o("MAWCurrentUser").getID(), f),
					o("WADbRegistrationApi").saveDeviceId(o("WAJids").interpretAsDeviceId(1)),
					o("WADbMetaTxns").saveCAT(l)
				]), a.addPoint("wa_device_registration_mock_server"), a.endSuccess(), {
					message: "Skipping registration because of Mock Server",
					registrationState: {
						registrationTime: f.registrationUnixTime,
						type: o("WADbDeviceRegistration").RegistrationStatesEnum.finished
					},
					status: 200
				};
			}
			n("cr:7755") != null && await n("cr:7755").updateRegDataFromLocalStorage();
			var g = o("MAWDeviceRegistrationActions").getRegistrationMetaWorm(), E = await i("get_registration_data", g);
			a.addAnnotations({ string: { unique_device_id: E == null ? void 0 : E.deviceUUID } }), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_check", { annotations: {
				bool: { identityCompareResult: E == null ? void 0 : E.identityCompareResult },
				int: { registrationVersion: E == null ? void 0 : E.registrationVersion }
			} });
			var k = (E == null ? void 0 : E.identityCompareResult) === !1;
			if (E == null || E.deviceId == null || k) {
				if (a.addAnnotations({ bool: { isNewRegistartion: !0 } }), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_new_reg_start"), b.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"RATE LIMIT SETTINGS LOG ONLY: ",
					" ENABLED: ",
					" COUNT: ",
					""
				])), r("justknobx")._("3587"), h, y), h) {
					var I = await o("WMIRateLimiter").checkAndRecordAttempt(C), T = {
						bool: { rateLimitBreached: I.limitBreached },
						int: { rateLimitCount: I.currentCount }
					};
					if (a.addAnnotations(T), b.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
						"Client rate limiting check complete. ",
						"/",
						" attempts."
					])), I.currentCount, C.limit), I.limitBreached) if (r("justknobx")._("3587")) a.addAnnotations({ bool: { rateLimitLogOnly: !0 } }), b.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose([
						"Device registration client rate limit exceeded (not skipping). ",
						"/",
						" attempts."
					])), I.currentCount, C.limit);
					else return b.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose([
						"Device registration client rate limit exceeded. ",
						"/",
						" attempts."
					])), I.currentCount, C.limit), a.endFail("client_rate_limit_exceeded"), R("client_rate_limit_exceeded", 500);
					b.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Device registration rate limit check passed"])));
				}
				try {
					await i("clear_signal_stores", o("MAWClearSignalAndTempStores").clearSignalAndTempStores()), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_signal_temp_stores_cleared"), await i("save_cat", o("WADbMetaTxns").saveCAT(l)), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_cat_saved");
				} catch (e) {
					return R(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e));
				}
				var D = await i("try_register", L(l, a, e));
				return D.registrationState.type === o("WADbDeviceRegistration").RegistrationStatesEnum.failed ? a.endFail("wa_device_registration_failed", { string: { errorMsg: D.message } }) : (a.addPoint("wa_device_registration_successful"), a.endSuccess()), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_new_reg_end"), D;
			} else {
				a.addAnnotations({ bool: { isNewRegistartion: !1 } }), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_existing_reg_start"), await i("save_cat", o("WADbMetaTxns").saveCAT(l));
				var x = r("MessengerWebInitData").sessionId, $ = E.lastSessionDeviceWasLinkedTo == null || E.lastSessionDeviceWasLinkedTo !== x;
				x != null && !(E.deviceUUID === x || E.deviceUUID.startsWith(x + "-")) && $ && !v() && r("promiseDone")(o("MAWDeviceRegistrationSessionUtil").linkDeviceToTheSession(E.deviceUUID, x)), e != null && o("MAWQplProxy").sendQplPointThroughBridge(e, "device_registration_existing_reg_end");
			}
			return r("MAWDeviceRegistrationODSBump")("already_registered"), a.addPoint("wa_device_registration_persisted"), a.endSuccess(), b.DEBUG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Skipping device registration"]))), {
				message: o("WADbDeviceRegistration").DEVICE_ALREADY_REGISTERED,
				registrationState: { type: o("WADbDeviceRegistration").RegistrationStatesEnum.finished },
				status: 200
			};
		} catch (e) {
			var P, N = r("getErrorSafe")(e);
			throw a.endFail("uncaught_exception", { string: { errorMsg: (P = N.message) != null ? P : "No error message" } }), N;
		}
	}
	function k(e) {
		r("MAWDeviceRegistrationODSBump")("fail"), b.MUSTFIX(f || (f = babelHelpers.taggedTemplateLiteralLoose(["", ""])), o("WADbDeviceRegistration").FAILED_REGISTRATION_RETRIES);
		for (var t of e) b.MUSTFIX(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Device registration failure - ", ""])), t);
	}
	function I(e, t) {
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
	l.handleRegistrationError = R, l.setupDeviceRegistration = E, l.logDeviceRegistrationRetryFailure = k;
}), 98);
