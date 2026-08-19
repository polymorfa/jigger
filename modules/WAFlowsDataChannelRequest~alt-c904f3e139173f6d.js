__d("WAFlowsDataChannelRequest", [
	"fbt",
	"CurrentUser",
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
	"err",
	"isStringNotNullAndNotWhitespaceOnly"
], (function(t, n, r, o, a, i, l, s) {
	var e = r("WAFlowsJSONSchemaValidatorSelector")(), u = 1, c = "WA|471011608249857|4b543e9203c0b420cb5617b71ff0b80a", d = function(t) {
		var e = /flows.(.*?).whatsapp/gm, n = /business.(.*?).facebook/gm, r = /web.(.*?).whatsapp/gm, o = new URL(window.location.href).hostname, a = t === "web_tooling" ? n.exec(o) : t === "wa_web" ? r.exec(o) : e.exec(o);
		return a != null ? "https://graph." + a[1] + ".whatsapp.com/graphql/extensions" : m;
	}, m = "https://graph.whatsapp.com/graphql/extensions", p = function(t) {
		return r("WebDriverConfig").isJestE2ETestRun ? d(t) : m;
	}, _ = {
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
	}, f = {
		INVALID_FLOW_TOKEN: 427,
		INVALID_ENCRYPTION: 421,
		TIMEOUT: 504,
		SUCCESS: 200
	};
	function g(e) {
		switch (e) {
			case f.SUCCESS: return null;
			case f.TIMEOUT: return o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENPOINT_TIMEOUT_ERROR;
			case f.INVALID_ENCRYPTION: return o("WAFlowsError").WAFlowsCodedError.INVALID_ENCRYPTION_ERROR_421;
			default: return o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENDPOINT_RESPONSE_ERROR;
		}
	}
	function h(e) {
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
	function y(e, t, n) {
		var r, a, i, l = o("WAFlowsWebNativeBridgeClientABPropsContext.react").clientABPropsHandler(n), s = l.getABPropsFromCache, u = (r = (a = s()) == null || (a = a.extensions_graphql_cta_disable.stringValue) == null ? void 0 : a.split(",")) != null ? r : [], c = (i = e == null ? void 0 : e.code) != null ? i : t, d = c != null && u.includes(c.toString());
		if (!d) return null;
		var m = o("WAFlowsError").WAFlowsCodedError.GRAPHQPL_CTA_DISABLED_CODED_ERROR;
		return e && (m.description = e.description, m.message = e.message), m;
	}
	function C(e, t, n) {
		var r, o = e != null ? h(e) : null, a = t != null ? g(t) : null, i = y(e, a == null ? void 0 : a.code, n);
		return (r = i != null ? i : o) != null ? r : a;
	}
	function b(e) {
		var t, n = e.body, a = e.invoke, i = e.json, l = e.logWAMFlowError, u = e.qplInitPhoenixFlowDrop, c = e.qplScreenNavigationDrop, d = e.queue, m = e.statusCode, p = (t = i.errors) == null ? void 0 : t[0], _ = C(p, m, a), g = o("WAFlowsError").getErrorFromDataChannelResponse(i, _ == null ? void 0 : _.code);
		throw r("isStringNotNullAndNotWhitespaceOnly")(g) && l(g), (p == null ? void 0 : p.code) === o("WAFlowsError").WAFlowsErrorCodes.EXTENSIONS_FEATURES_DISABLED_ERROR && (d.add(c()), d.add(u())), (_ == null ? void 0 : _.code) === o("WAFlowsError").WAFlowsErrorCodes.INVALID_ENCRYPTION_ERROR_421 ? new (o("WAFlowsError")).WAFlowsDataChannelResponseBusinessDecryptionError({
			statusCode: m != null ? m : f.INVALID_ENCRYPTION,
			body: n
		}) : new (o("WAFlowsError")).WAFlowsDataChannelResponseError(s._(
			/*BTDS*/
			""
		), _ != null ? _ : o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENDPOINT_RESPONSE_ERROR, m != null ? {
			statusCode: m,
			body: n
		} : null);
	}
	function v(e) {
		var t = e.actionHandler, n = e.body, r = e.error, a = e.isInvalidFlowToken, i = e.qplScreenNavigationAnnotate, l = e.statusCode;
		throw a && i({ stringAnnotations: { bypassed_error_types: JSON.stringify([o("WAFlowsError").WAFlowsLoggerErrorTypes.BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN]) } }), n != null && t.onInteractivePreviewEventResponse(n), new (o("WAFlowsError")).WAFlowsDataChannelResponseDecryptionError(r, l != null ? {
			statusCode: l,
			body: n
		} : null);
	}
	async function S(e, t, n, a, i, l) {
		var s, u, d = e.data, m = e.extensionId, _ = e.publicKey;
		l === void 0 && (l = !1);
		var g = r("WAFlowsNativeQPLLogger")(n), h = g.getWAFlowsQPLNavigationPoints, y = g.qplInitPhoenixFlowDrop, C = g.qplScreenNavigationAnnotate, S = g.qplScreenNavigationDrop, L = g.qplScreenNavigationPoint, E = h(t), k = E.DecryptionEnd, I = E.DecryptionStart, T = E.EncryptionEnd, D = E.EncryptionStart, x = E.ForwardNetworkEnd, $ = E.ForwardNetworkStart, P = r("WAFlowsPromiseQueue")();
		P.add(L(D));
		var N = babelHelpers.extends({}, d, { flow_token_signature: i }), M = d.version === "4.0" && i != null ? N : d, w = await o("WAFlowsPreviewEncryptionHelper").encryptData(_, (s = JSON.stringify(M)) != null ? s : "");
		P.add(L(T));
		var A = w.encryptedAesKey, F = w.encryptedData, O = w.exportedAesKey, B = w.iv, W = o("WAFlowsWebNativeBridgeClientABPropsContext.react").clientABPropsHandler(n.invoke), q = W.getABPropsFromCache, U = q(), V = "9793760614036679", H = !1;
		if (n.platform === "web_tooling") H = r("CurrentUser").isEmployee();
		else {
			var G;
			H = (G = U == null ? void 0 : U.is_meta_employee_or_internal_tester.boolValue) != null ? G : !1;
		}
		var z = p((u = n.platform) != null ? u : "ios");
		H && (z += "?_emp=1"), P.add(L($));
		var j = await window.fetch(z, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"User-Agent": ""
			},
			body: JSON.stringify({
				access_token: c,
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
		P.add(L(x));
		var K = r("WAFlowsNativeWAMLogger")(n), Q = K.logWAMFlowError;
		if (!j.ok) throw Q(o("WAFlowsError").WAFlowsLoggerErrorTypes.DATA_EXCHANGE_GRAPHQL_INTERNAL_SERVER_ERROR), o("WAFlowsError").WAFlowsCodedError.DATA_EXCHANGE_GRAPHQL_INTERNAL_SERVER_ERROR;
		var X = await j.json(), Y = X.data.xwa_flows_make_flow_endpoint_request, J = Y == null ? void 0 : Y.status_code, Z = Y == null ? void 0 : Y.body, ee = J === f.INVALID_FLOW_TOKEN, te = X.errors != null || J !== f.SUCCESS && !ee;
		if (te && b({
			json: X,
			statusCode: J,
			body: Z,
			invoke: n.invoke,
			logWAMFlowError: Q,
			qplScreenNavigationDrop: S,
			qplInitPhoenixFlowDrop: y,
			queue: P
		}), P.add(L(I)), Y == null) throw o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENDPOINT_RESPONSE_ERROR;
		if (ee && (Z != null ? Z : "").length === 0) throw new (o("WAFlowsError")).WAFlowsDataChannelResponseInvalidTokenError({
			statusCode: J != null ? J : f.INVALID_FLOW_TOKEN,
			body: Z
		});
		var ne = "";
		try {
			ne = await o("WAFlowsPreviewEncryptionHelper").decryptData(O, Z != null ? Z : "", B, String(o("WAFlowsVersionUtils").convertVersion(d.version)), U);
		} catch (e) {
			v({
				actionHandler: n,
				body: Z,
				error: e,
				isInvalidFlowToken: ee,
				qplScreenNavigationAnnotate: C,
				statusCode: J
			});
		}
		return P.add(L(k)), n.onInteractivePreviewEventResponse(ne), R(ne, J, Z, ee, l);
	}
	function R(e, t, n, r, a) {
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
			statusCode: t != null ? t : f.INVALID_FLOW_TOKEN,
			body: n
		}, String(i.error_msg), e);
		try {
			return a && new Set(Object.values(o("WAFlowsShoppingCustomActionCallbacks").FLOWJIntegratedShoppingClickActionType)).has(i.data.sub_action) && (i = babelHelpers.extends({}, i, { screen: "CART" })), L(i);
		} catch (r) {
			throw new (o("WAFlowsError")).WAFlowsDataChannelResponseInvalidResponseFormatError({
				statusCode: t != null ? t : 200,
				body: n
			}, e, r.message);
		}
	}
	function L(t) {
		var n = e.validate(_, t);
		if (!n) throw r("err")(e.errorsText(e.errors, { dataVar: "'response'" }));
		return t;
	}
	function E(e, t, n, a, i) {
		var l;
		i === void 0 && (i = !1), o("WAFlowsUtils").checkIfOnlineOrThrowError();
		var s = (l = e.maxRetries) != null ? l : u, c = 0, d = r("WAFlowsNativeQPLLogger")(t), m = d.qplScreenNavigationAnnotate, p = async function(r) {
			if (c > s) throw o("WAFlowsError").WAFlowsCodedError.BUSINESS_ENDPOINT_RESPONSE_ERROR;
			try {
				return m({ intAnnotations: { forward_network_request_count: c + 1 } }), await S(r, c, t, n, a, i);
			} catch (n) {
				var e = o("WAFlowsError").getWAFlowCodedError(n);
				if (e !== null && t.platform !== "web_tooling") switch (e) {
					case o("WAFlowsError").WAFlowsErrorCodes.INVALID_ENCRYPTION_ERROR_421: return _(r, n);
				}
				throw n;
			}
		}, _ = async function(t, n) {
			if (c += 1, c > s) throw n;
			await new Promise(function(e) {
				return window.setTimeout(function() {
					return e();
				}, c * 500);
			});
			var e = await r("WAFlowsFetchPublicKey")({ force_refresh: !0 }), a = e != null ? e : {}, i = a.public_key;
			return t.publicKey = i != null ? i : t.publicKey, m({ stringAnnotations: {
				bypassed_error_types: JSON.stringify([o("WAFlowsError").WAFlowsLoggerErrorTypes.BUSINESS_ENDPOINT_RESPONSE_421]),
				bypassed_error_messages: JSON.stringify([n.message])
			} }), p(t);
		};
		return p(e);
	}
	l.default = E;
}), 226);
