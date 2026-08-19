__d("WAFlowsDataChannelRequest", [
	"fbt",
	"CurrentUser",
	"Promise",
	"WAFlowsError",
	"WAFlowsFetchPublicKey",
	"WAFlowsJSONSchemaValidatorSelector",
	"WAFlowsNativeQPLLogger",
	"WAFlowsNativeWAMLogger",
	"WAFlowsPreviewEncryptionHelper",
	"WAFlowsPromiseQueue",
	"WAFlowsShoppingCustomActionCallbacks",
	"WAFlowsUtils",
	"WAFlowsVersionUtils",
	"WAFlowsWebNativeBridgeClientABPropsContext.react",
	"WebDriverConfig",
	"asyncToGeneratorRuntime",
	"err",
	"isStringNotNullAndNotWhitespaceOnly"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = r("WAFlowsJSONSchemaValidatorSelector")(), c = 1, d = "WA|471011608249857|4b543e9203c0b420cb5617b71ff0b80a", m = function(t) {
		var e = /flows.(.*?).whatsapp/gm, n = /business.(.*?).facebook/gm, r = /web.(.*?).whatsapp/gm, o = new URL(window.location.href).hostname, a = t === "web_tooling" ? n.exec(o) : t === "wa_web" ? r.exec(o) : e.exec(o);
		return a != null ? "https://graph." + a[1] + ".whatsapp.com/graphql/extensions" : p;
	}, p = "https://graph.whatsapp.com/graphql/extensions", _ = function(t) {
		return r("WebDriverConfig").isJestE2ETestRun ? m(t) : p;
	}, f = {
		type: "object",
		properties: {
			screen: { type: "string" },
			data: {
				type: "object",
				properties: {
					extension_message_response: {
						type: "object",
						properties: { params: { type: "object" } }
					},
					error_message: { type: "string" }
				}
			}
		},
		required: ["screen"]
	}, g = {
		INVALID_FLOW_TOKEN: 427,
		INVALID_ENCRYPTION: 421,
		TIMEOUT: 504,
		SUCCESS: 200
	};
	function h(e) {
		switch (e) {
			case g.SUCCESS: return null;
			case g.TIMEOUT: return o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENPOINT_TIMEOUT_ERROR;
			case g.INVALID_ENCRYPTION: return o("WAFlowsError").WAFlowsCodedError.INVALID_ENCRYPTION_ERROR_421;
			default: return o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENDPOINT_RESPONSE_ERROR;
		}
	}
	function y(e) {
		switch (e.code) {
			case o("WAFlowsError").WAFlowsErrorCodes.INVALID_ENCRYPTION_ERROR_421:
				var t = o("WAFlowsError").WAFlowsCodedError.INVALID_ENCRYPTION_ERROR_421;
				return t.description = e.description, t.message = e.message, t;
			case o("WAFlowsError").WAFlowsErrorCodes.BUSINESS_ENPOINT_TIMEOUT_ERROR:
				var n = o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENPOINT_TIMEOUT_ERROR;
				return n.description = e.description, n.message = e.message, n;
			case o("WAFlowsError").WAFlowsErrorCodes.DATA_EXCHANGE_GRAPHQL_ENDPOINT_INTERNAL_SERVER_ERROR:
			default:
				var r = o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENDPOINT_RESPONSE_ERROR;
				return r.description = e.description, r.message = e.message, r;
		}
	}
	function C(e, t, n) {
		var r, a, i, l = o("WAFlowsWebNativeBridgeClientABPropsContext.react").clientABPropsHandler(n), s = l.getABPropsFromCache, u = (r = (a = s()) == null || (a = a.extensions_graphql_cta_disable.stringValue) == null ? void 0 : a.split(",")) != null ? r : [], c = (i = e == null ? void 0 : e.code) != null ? i : t, d = c != null && u.includes(c.toString());
		if (!d) return null;
		var m = o("WAFlowsError").WAFlowsCodedError.GRAPHQPL_CTA_DISABLED_CODED_ERROR;
		return e && (m.description = e.description, m.message = e.message), m;
	}
	function b(e, t, n) {
		var r, o = e != null ? y(e) : null, a = t != null ? h(t) : null, i = C(e, a == null ? void 0 : a.code, n);
		return (r = i != null ? i : o) != null ? r : a;
	}
	function v(e) {
		var t, n = e.body, a = e.invoke, i = e.json, l = e.logWAMFlowError, u = e.qplInitPhoenixFlowDrop, c = e.qplScreenNavigationDrop, d = e.queue, m = e.statusCode, p = (t = i.errors) == null ? void 0 : t[0], _ = b(p, m, a), f = o("WAFlowsError").getErrorFromDataChannelResponse(i, _ == null ? void 0 : _.code);
		throw r("isStringNotNullAndNotWhitespaceOnly")(f) && l(f), (p == null ? void 0 : p.code) === o("WAFlowsError").WAFlowsErrorCodes.EXTENSIONS_FEATURES_DISABLED_ERROR && (d.add(c()), d.add(u())), (_ == null ? void 0 : _.code) === o("WAFlowsError").WAFlowsErrorCodes.INVALID_ENCRYPTION_ERROR_421 ? new (o("WAFlowsError")).WAFlowsDataChannelResponseBusinessDecryptionError({
			statusCode: m != null ? m : g.INVALID_ENCRYPTION,
			body: n
		}) : new (o("WAFlowsError")).WAFlowsDataChannelResponseError(s._(
			/*BTDS*/
			""
		), _ != null ? _ : o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENDPOINT_RESPONSE_ERROR, m != null ? {
			statusCode: m,
			body: n
		} : null);
	}
	function S(e) {
		var t = e.actionHandler, n = e.body, r = e.error, a = e.isInvalidFlowToken, i = e.qplScreenNavigationAnnotate, l = e.statusCode;
		throw a && i({ stringAnnotations: { bypassed_error_types: JSON.stringify([o("WAFlowsError").WAFlowsLoggerErrorTypes.BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN]) } }), n != null && t.onInteractivePreviewEventResponse(n), new (o("WAFlowsError")).WAFlowsDataChannelResponseDecryptionError(r, l != null ? {
			statusCode: l,
			body: n
		} : null);
	}
	function R(e, t, n, r, o, a) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a, i, l) {
			var s, u, c = e.data, m = e.extensionId, p = e.publicKey;
			l === void 0 && (l = !1);
			var f = r("WAFlowsNativeQPLLogger")(n), h = f.getWAFlowsQPLNavigationPoints, y = f.qplInitPhoenixFlowDrop, C = f.qplScreenNavigationAnnotate, b = f.qplScreenNavigationDrop, R = f.qplScreenNavigationPoint, L = h(t), k = L.DecryptionEnd, I = L.DecryptionStart, T = L.EncryptionEnd, D = L.EncryptionStart, x = L.ForwardNetworkEnd, $ = L.ForwardNetworkStart, P = r("WAFlowsPromiseQueue")();
			P.add(R(D));
			var N = babelHelpers.extends({}, c, { flow_token_signature: i }), M = c.version === "4.0" && i != null ? N : c, w = yield o("WAFlowsPreviewEncryptionHelper").encryptData(p, (s = JSON.stringify(M)) != null ? s : "");
			P.add(R(T));
			var A = w.encryptedAesKey, F = w.encryptedData, O = w.exportedAesKey, B = w.iv, W = o("WAFlowsWebNativeBridgeClientABPropsContext.react").clientABPropsHandler(n.invoke), q = W.getABPropsFromCache, U = q(), V = "9793760614036679", H = !1;
			if (n.platform === "web_tooling") H = r("CurrentUser").isEmployee();
			else {
				var G;
				H = (G = U == null ? void 0 : U.is_meta_employee_or_internal_tester.boolValue) != null ? G : !1;
			}
			var z = _((u = n.platform) != null ? u : "ios");
			H && (z += "?_emp=1"), P.add(R($));
			var j = yield window.fetch(z, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"User-Agent": ""
				},
				body: JSON.stringify({
					access_token: d,
					doc_id: V,
					variables: {
						encrypted_flow_data: F,
						encrypted_aes_key: A,
						initial_vector: B,
						flow_or_version_id: m,
						www_proxy_signature: a
					}
				})
			});
			P.add(R(x));
			var K = r("WAFlowsNativeWAMLogger")(n), Q = K.logWAMFlowError;
			if (!j.ok) throw Q(o("WAFlowsError").WAFlowsLoggerErrorTypes.DATA_EXCHANGE_GRAPHQL_INTERNAL_SERVER_ERROR), o("WAFlowsError").WAFlowsCodedError.DATA_EXCHANGE_GRAPHQL_INTERNAL_SERVER_ERROR;
			var X = yield j.json(), Y = X.data.xwa_flows_make_flow_endpoint_request, J = Y == null ? void 0 : Y.status_code, Z = Y == null ? void 0 : Y.body, ee = J === g.INVALID_FLOW_TOKEN, te = X.errors != null || J !== g.SUCCESS && !ee;
			if (te && v({
				json: X,
				statusCode: J,
				body: Z,
				invoke: n.invoke,
				logWAMFlowError: Q,
				qplScreenNavigationDrop: b,
				qplInitPhoenixFlowDrop: y,
				queue: P
			}), P.add(R(I)), Y == null) throw o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENDPOINT_RESPONSE_ERROR;
			if (ee && (Z != null ? Z : "").length === 0) throw new (o("WAFlowsError")).WAFlowsDataChannelResponseInvalidTokenError({
				statusCode: J != null ? J : g.INVALID_FLOW_TOKEN,
				body: Z
			});
			var ne = "";
			try {
				ne = yield o("WAFlowsPreviewEncryptionHelper").decryptData(O, Z != null ? Z : "", B, String(o("WAFlowsVersionUtils").convertVersion(c.version)), U);
			} catch (e) {
				S({
					actionHandler: n,
					body: Z,
					error: e,
					isInvalidFlowToken: ee,
					qplScreenNavigationAnnotate: C,
					statusCode: J
				});
			}
			return P.add(R(k)), n.onInteractivePreviewEventResponse(ne), E(ne, J, Z, ee, l);
		}), L.apply(this, arguments);
	}
	function E(e, t, n, r, a) {
		var i = {};
		try {
			i = JSON.parse(e);
		} catch (r) {
			throw new (o("WAFlowsError")).WAFlowsDataChannelResponseInvalidResponseFormatError({
				statusCode: t != null ? t : 200,
				body: n
			}, e);
		}
		if (r) throw new (o("WAFlowsError")).WAFlowsDataChannelResponseInvalidTokenError({
			statusCode: t != null ? t : g.INVALID_FLOW_TOKEN,
			body: n
		}, String(i.error_msg), e);
		try {
			return a && new Set(Object.values(o("WAFlowsShoppingCustomActionCallbacks").FLOWJIntegratedShoppingClickActionType)).has(i.data.sub_action) && (i = babelHelpers.extends({}, i, { screen: "CART" })), k(i);
		} catch (r) {
			throw new (o("WAFlowsError")).WAFlowsDataChannelResponseInvalidResponseFormatError({
				statusCode: t != null ? t : 200,
				body: n
			}, e, r.message);
		}
	}
	function k(e) {
		var t = u.validate(f, e);
		if (!t) throw r("err")(u.errorsText(u.errors, { dataVar: "'response'" }));
		return e;
	}
	function I(t, a, i, l, s) {
		var u;
		s === void 0 && (s = !1), o("WAFlowsUtils").checkIfOnlineOrThrowError();
		var d = (u = t.maxRetries) != null ? u : c, m = 0, p = r("WAFlowsNativeQPLLogger")(a), _ = p.qplScreenNavigationAnnotate, f = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (m > d) throw o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENDPOINT_RESPONSE_ERROR;
				try {
					return _({ intAnnotations: { forward_network_request_count: m + 1 } }), yield R(e, m, a, i, l, s);
				} catch (n) {
					var t = o("WAFlowsError").getWAFlowCodedError(n);
					if (t !== null && a.platform !== "web_tooling") switch (t) {
						case o("WAFlowsError").WAFlowsErrorCodes.INVALID_ENCRYPTION_ERROR_421: return g(e, n);
					}
					throw n;
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), g = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
				if (m += 1, m > d) throw a;
				yield new (e || (e = (n("Promise"))))(function(e) {
					return window.setTimeout(function() {
						return e();
					}, m * 500);
				});
				var i = yield r("WAFlowsFetchPublicKey")({ force_refresh: !0 }), l = i != null ? i : {}, s = l.public_key;
				return t.publicKey = s != null ? s : t.publicKey, _({ stringAnnotations: {
					bypassed_error_types: JSON.stringify([o("WAFlowsError").WAFlowsLoggerErrorTypes.BUSINESS_ENDPOINT_RESPONSE_421]),
					bypassed_error_messages: JSON.stringify([a.message])
				} }), f(t);
			});
			return function(n, r) {
				return t.apply(this, arguments);
			};
		})();
		return f(t);
	}
	l.default = I;
}), 226);
