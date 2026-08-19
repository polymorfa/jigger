__d("WAWebAccountLinkingAPI", [
	"WALogger",
	"WAPromiseDelays",
	"WASmaxWaffleForceDeleteStateRPC",
	"WASmaxWaffleForceSuspendStateRPC",
	"WASmaxWaffleGetCertificateRPC",
	"WASmaxWaffleRefreshAccessTokensRPC",
	"WASmaxWaffleStateExistsRPC",
	"WASmaxWaffleWFPingRPC",
	"WAWebAPIParser",
	"WAWebAccountLinkingConstants",
	"WAWebAccountLinkingCryptoUtils",
	"WAWebAccountLinkingDBOperationsAPI",
	"WAWebAccountLinkingGatingUtils",
	"WAWebAccountLinkingHandler",
	"WAWebDirectConnectionX509",
	"WAWebGraphQLServerError",
	"WAWebMetaAiWaffleAuthTokenCache",
	"WAWebRelayClient",
	"WAWebWaffleCertificateCache",
	"WAWebWaffleFXServiceDataQueryV2Mutation",
	"WAWebWaffleIQErrorHandler",
	"WAWebWaffleLifecycleWamLogger",
	"WAWebWamEnumWaffleLifecycleTraceActionType",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("account_linking"), E = {
		fetchValidCertificate: ["companion", "guest"],
		generateWAEntACUser: ["guest"],
		generateAccessTokens: ["guest"],
		refreshAccessToken: ["companion", "guest"],
		ping: ["companion", "guest"],
		stateExists: ["companion", "guest"],
		forceDeleteState: ["companion", "guest"],
		forceSuspendState: ["companion", "guest"],
		fetchServiceData: ["companion", "guest"],
		sendLinkingMutation: ["guest"]
	};
	function k(t) {
		var n = o("WAWebAccountLinkingGatingUtils").getWaffleMode(), a = E[t];
		if (!a.includes(n)) throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[WAFFLE] API \"",
			"\" not allowed in ",
			" mode"
		])), t, n).sendLogs("waffle-api-mode-not-allowed"), r("err")("[WAFFLE] API \"" + t + "\" not allowed in " + n + " mode");
	}
	async function I() {
		k("fetchValidCertificate");
		var e = await o("WAWebWaffleCertificateCache").loadCertFromIDB();
		if (e != null) {
			var t = await T(e.encryptionPem, e.passwordPem, e.passwordKeyId);
			if (t != null) return t;
		}
		return D();
	}
	async function T(e, t, n) {
		try {
			var a = await o("WAWebDirectConnectionX509").extractCertificates(e), i = await o("WAWebAccountLinkingCryptoUtils").validateCertificateChain(a);
			if (i != null) {
				var l = await i.getPublicKey({ algorithm: {
					algorithm: {
						name: "RSA-OAEP",
						hash: { name: "SHA-1" }
					},
					usages: ["encrypt"]
				} }), u = null;
				return t != null && (u = await o("WAWebAccountLinkingCryptoUtils").importPasswordPublicKey(t)), {
					encryptionKey: l,
					passwordPublicKey: u,
					passwordKeyId: n != null ? n : null
				};
			}
		} catch (e) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Failed to restore cert from PEM"]))).catching(r("getErrorSafe")(e));
		}
		return null;
	}
	async function D() {
		var e = Math.floor(Date.now() / 1e3);
		try {
			var t = await o("WASmaxWaffleGetCertificateRPC").sendGetCertificateRPC({
				hasPasswordPem: !0,
				hasPayloadEncCertificates: !0,
				timestampElementValue: e
			});
			if (t.name === "GetCertificateResponseSuccess") {
				var n, a = t.value.replyGetCertificateResponseMixin, i = (n = a.encryptionPem) == null ? void 0 : n.elementValue;
				if (i != null) {
					var l = String.fromCharCode.apply(null, i), s = await o("WAWebDirectConnectionX509").extractCertificates(l), p = await o("WAWebAccountLinkingCryptoUtils").validateCertificateChain(s);
					if (p != null) {
						var _, f, g = await p.getPublicKey({ algorithm: {
							algorithm: {
								name: "RSA-OAEP",
								hash: { name: "SHA-1" }
							},
							usages: ["encrypt"]
						} }), h = null, y = null, C = null, b = a.passwordPem;
						if (b != null) try {
							C = String.fromCharCode.apply(null, b.elementValue), h = await o("WAWebAccountLinkingCryptoUtils").importPasswordPublicKey(C), y = b.keyId;
						} catch (e) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Failed to import password PEM"]))).catching(r("getErrorSafe")(e));
						}
						var v = (_ = (f = a.encryptionPem) == null ? void 0 : f.ttl) != null ? _ : null;
						return await o("WAWebWaffleCertificateCache").saveCertToIDB(l, C, y, v), {
							encryptionKey: g,
							passwordPublicKey: h,
							passwordKeyId: y
						};
					}
					return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Fetching valid certificate failed"]))), null;
				}
				return null;
			}
			var S = t.value.errorGetCertificateErrors;
			return o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] GetCertificate RPC failed: ", ""])), S.name), null;
		} catch (e) {
			o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["fetchValidCertificate failed"]))).catching(r("getErrorSafe")(e));
		}
	}
	var x = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(), $ = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(), P = null;
	async function N(e, t) {
		e: {
			if (e === "request_nonce") return o("WAWebWaffleIQErrorHandler").handleNonceRetry(t);
			if (e === "refresh_token") {
				var n = t.nextBackoffMs();
				if (n == null) return !1;
				return await o("WAPromiseDelays").delayMs(n), M();
				break e;
			}
			if (e === "refetch_certs") {
				var r = t.nextBackoffMs();
				if (r == null) return !1;
				await o("WAPromiseDelays").delayMs(r);
				var a = await I();
				return a != null;
			}
			if (e === "purge") {
				return o("WAWebMetaAiWaffleAuthTokenCache").clearMetaAiWaffleAuthTokenBlobCache(), await L.purgeWaffleData(), !0;
				break e;
			}
			if (e === "pause") {
				return await o("WAWebAccountLinkingHandler").handlePausedState(), !0;
				break e;
			}
			if (e === "server_purge") {
				var i = await B();
				return i && (o("WAWebMetaAiWaffleAuthTokenCache").clearMetaAiWaffleAuthTokenBlobCache(), await L.purgeWaffleData()), i;
				break e;
			}
			if (e === "server_pause") {
				var l = await W();
				return l && await o("WAWebAccountLinkingHandler").handlePausedState(), l;
				break e;
			}
			if (e === "retry" || e === "handled" || e === "fail") return !1;
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		}
	}
	async function M() {
		k("refreshAccessToken");
		var e = P;
		return e != null ? (o("WAWebWaffleLifecycleWamLogger").logRefreshToken({ traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_DEDUPLICATED }), e) : (P = w().finally(function() {
			P = null;
		}), P);
	}
	async function w() {
		var e = Date.now();
		o("WAWebWaffleLifecycleWamLogger").logRefreshToken({ traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_INITIATED });
		var t = await L.getAccountLinkingData();
		if (t == null) return A(e, !1), !1;
		var n = t.fbid, a = t.nonce, i = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(), l = i.privateKey, s = i.publicKey, u = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(s, !0), c = {
			version: 1,
			timestamp: Date.now(),
			nonce: a,
			client_pub_key: u,
			client_pub_key_type: "RSA 2048"
		}, d = await o("WAWebAccountLinkingCryptoUtils").wrapPayloadWithRSAAESEncryption(c);
		if (n != null) {
			var m = await o("WASmaxWaffleRefreshAccessTokensRPC").sendRefreshAccessTokensRPC({
				rSAEncryptionMetadataMixinArgs: {
					encryptedKeyElementValue: d.encryptedKey,
					nonceElementValue: d.nonce,
					encryptedDataElementValue: d.cipherText,
					authTagElementValue: d.tag
				},
				timestampElementValue: Date.now(),
				fbidElementValue: n
			});
			if (m.name === "RefreshAccessTokensResponseSuccess") {
				x.reset();
				var f = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(m.value.encryptionMetadataRSAEncryptionMetadataMixin), g = f.data, h = f.key, y = f.nonce, C = f.tag;
				try {
					var b = await o("WAWebAccountLinkingCryptoUtils").decryptRSAEncryptedPayload(l, h, g, y, C);
					if ("access_token" in b) return await L.updateAccesstoken(b.access_token), o("WAWebMetaAiWaffleAuthTokenCache").refreshMetaAiWaffleAuthTokenBlob(), o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
						elapsedMs: Date.now() - e,
						hasAccessToken: !0,
						traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_SUCCESS
					}), !0;
					A(e, !1);
				} catch (t) {
					o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Failed to refresh access token"]))).catching(r("getErrorSafe")(t)), A(e, !1);
				}
			} else {
				var v = m.value.errorRefreshAccessTokensErrors, S = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError("refreshAccessToken", v.name);
				o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
					elapsedMs: Date.now() - e,
					errorAction: o("WAWebWaffleLifecycleWamLogger").mapIQErrorActionToWam(S),
					errorCode: o("WAWebWaffleLifecycleWamLogger").mapIQErrorNameToWamCode(v.name),
					traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR
				}), await N(S, x), o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Refresh access token RPC failed: ", ""])), v.name);
			}
		} else A(e, !1);
		return !1;
	}
	function A(e, t) {
		o("WAWebWaffleLifecycleWamLogger").logRefreshToken({
			elapsedMs: Date.now() - e,
			hasAccessToken: t,
			traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.REFRESH_TOKEN_ERROR
		});
	}
	async function F() {
		k("ping");
		var e = Date.now(), t = await L.getAccountLinkingData();
		if (t != null) {
			var n = t.accesstoken, r = t.fbid;
			if (n != null) {
				var a = {
					version: 1,
					timestamp: Date.now(),
					access_token: n
				}, i = await o("WAWebAccountLinkingCryptoUtils").wrapPayloadWithRSAAESEncryption(a);
				if (r != null) {
					var l = await o("WASmaxWaffleWFPingRPC").sendWFPingRPC({
						rSAEncryptionMetadataMixinArgs: {
							encryptedKeyElementValue: i.encryptedKey,
							nonceElementValue: i.nonce,
							encryptedDataElementValue: i.cipherText,
							authTagElementValue: i.tag
						},
						timestampElementValue: Date.now(),
						fbidElementValue: r
					});
					if (l.name === "WFPingResponseSuccess") {
						$.reset();
						var s = l.value.pingIntervalElementValue;
						await L.updatePingInterval(s), o("WAWebWaffleLifecycleWamLogger").logPing({
							elapsedMs: Date.now() - e,
							hasAccessToken: !0
						});
					} else {
						var u = l.value.errorWfPingErrors, c = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError("ping", u.name);
						o("WAWebWaffleLifecycleWamLogger").logPing({
							elapsedMs: Date.now() - e,
							errorAction: o("WAWebWaffleLifecycleWamLogger").mapIQErrorActionToWam(c),
							errorCode: o("WAWebWaffleLifecycleWamLogger").mapIQErrorNameToWamCode(u.name),
							hasAccessToken: !0
						}), await N(c, $), o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Ping failed: ", ""])), u.name);
					}
				} else o("WAWebWaffleLifecycleWamLogger").logPing({
					elapsedMs: Date.now() - e,
					hasAccessToken: !0
				}), o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Ping failed due to null waEntFbid"])));
			}
		}
	}
	async function O() {
		k("stateExists");
		var e = await o("WASmaxWaffleStateExistsRPC").sendStateExistsRPC({ timestampElementValue: Date.now() });
		if (e.name === "StateExistsResponseSuccess") {
			var t = o("WAWebAccountLinkingConstants").AccountLinkingStateExists.cast(e.value.wfStateElementValue);
			if (t != null) return t;
			o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Failed to parse state exists response"])));
		} else {
			var n = e.value.errorStateExistsErrors;
			await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError("stateExists", n.name), o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] StateExists RPC failed: ", ""])), n.name);
		}
	}
	async function B() {
		k("forceDeleteState");
		var e = await o("WASmaxWaffleForceDeleteStateRPC").sendForceDeleteStateRPC({ timestampElementValue: Math.floor(Date.now() / 1e3) });
		if (e.name === "ForceDeleteStateResponseSuccess") return !0;
		var t = e.value.errorForceDeleteStateErrors;
		return o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] ForceDeleteState RPC failed: ", ""])), t.name).sendLogs("waffle-force-delete-state-failed"), !1;
	}
	async function W() {
		k("forceSuspendState");
		var e = await o("WASmaxWaffleForceSuspendStateRPC").sendForceSuspendStateRPC({ timestampElementValue: Math.floor(Date.now() / 1e3) });
		if (e.name === "ForceSuspendStateResponseSuccess") return !0;
		var t = e.value.errorForceSuspendStateErrors;
		return o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] ForceSuspendState RPC failed: ", ""])), t.name).sendLogs("waffle-force-suspend-state-failed", { sampling: .01 }), !1;
	}
	async function q() {
		k("fetchServiceData");
		var e = await L.getAccountLinkingData();
		if (e != null) {
			var t = e.accesstoken, n;
			try {
				n = await o("WAWebRelayClient").commitMutation(r("WAWebWaffleFXServiceDataQueryV2Mutation"), {}, { accessToken: t });
			} catch (e) {
				var a = e instanceof o("WAWebGraphQLServerError").GraphQLServerError ? o("WAWebGraphQLServerError").formatGraphQLServerError(e) : e;
				o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] fetchServiceData mutation failed: ", ""])), a).tags("waffle", "account-linking").sendLogs("waffle-fetch-service-data-mutation-failed", { sampling: .01 });
				return;
			}
			if (n == null) {
				o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Fetching service data result"])));
				return;
			}
			var i = o("WAWebAPIParser").parseServiceData(n);
			if (i == null) {
				o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Fetching service data failed"])));
				return;
			}
			await L.updateServiceData(i);
		}
	}
	l.assertModeAllowed = k, l.fetchValidCertificate = I, l.handleRecoveryAction = N, l.refreshAccessToken = M, l.ping = F, l.stateExists = O, l.forceDeleteState = B, l.forceSuspendState = W, l.fetchServiceData = q;
}), 98);
