__d("WAWebAccountLinkingAdminAPI", [
	"WALogger",
	"WASmaxWaffleEncryptedPayloadRequestRPC",
	"WASmaxWaffleGenerateAccessTokensRPC",
	"WASmaxWaffleGenerateWAEntACUserRPC",
	"WAWebAPIParser",
	"WAWebAccountLinkingAPI",
	"WAWebAccountLinkingConstants",
	"WAWebAccountLinkingCryptoUtils",
	"WAWebAccountLinkingDBOperationsAPI",
	"WAWebMetaAiWaffleAuthTokenCache",
	"WAWebWaffleIQErrorHandler",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("account_linking"), R = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(), L = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState(), E = o("WAWebWaffleIQErrorHandler").createWaffleOperationRetryState();
	async function k(t) {
		var n = t.disclosureId, a = t.disclosureLc, i = t.disclosureLg, l = t.disclosureVersion, m = t.rawPassword;
		o("WAWebAccountLinkingAPI").assertModeAllowed("generateWAEntACUser");
		var p = await o("WAWebAccountLinkingAPI").fetchValidCertificate();
		if (p == null) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] GenerateWAEntACUser failed: no valid certificate"])));
			return;
		}
		var _ = p.passwordKeyId, f = p.passwordPublicKey;
		if (f == null || _ == null) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] GenerateWAEntACUser failed: no password PEM"])));
			return;
		}
		var g = await o("WAWebAccountLinkingCryptoUtils").encryptPassword(m, f, _), h = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(), y = h.privateKey, C = h.publicKey, b = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(C, !0), v = {
			version: 1,
			timestamp: Date.now(),
			password: g,
			client_pub_key: b,
			client_pub_key_type: "RSA 2048"
		}, L = await o("WAWebAccountLinkingCryptoUtils").wrapPayloadWithRSAAESEncryption(v, p.encryptionKey), E = await o("WASmaxWaffleGenerateWAEntACUserRPC").sendGenerateWAEntACUserRPC({
			rSAEncryptionMetadataMixinArgs: {
				encryptedKeyElementValue: L.encryptedKey,
				nonceElementValue: L.nonce,
				encryptedDataElementValue: L.cipherText,
				authTagElementValue: L.tag
			},
			timestampElementValue: Date.now(),
			disclosureId: n,
			disclosureVersion: l,
			disclosureLg: i,
			disclosureLc: a
		});
		if (E.name === "GenerateWAEntACUserResponseSuccess") {
			R.reset();
			var k = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(E.value.encryptionMetadataRSAEncryptionMetadataMixin), I = k.data, T = k.key, D = k.nonce, x = k.tag;
			try {
				var $ = await o("WAWebAccountLinkingCryptoUtils").decryptRSAEncryptedPayload(y, T, I, D, x);
				"fbid" in $ ? await S.updateEntCreationData(String($.fbid), g) : o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] GenerateWAEntACUser success, no fbid"])));
			} catch (e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Failed to process generateWAEntACUser response"]))).catching(r("getErrorSafe")(e));
			}
		} else {
			var P = E.value.errorGenerateWaEntAcUserErrors, N = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError("generateWAEntACUser", P.name);
			await o("WAWebAccountLinkingAPI").handleRecoveryAction(N, R), o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] GenerateWAEntACUser RPC failed: ", ""])), P.name);
		}
	}
	async function I() {
		o("WAWebAccountLinkingAPI").assertModeAllowed("generateAccessTokens");
		var e = await S.getAccountLinkingData();
		if (e == null) {
			o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] GenerateAccessTokens failed: no account linking data"])));
			return;
		}
		var t = e.encryptedPassword, n = e.fbid;
		if (n == null || t == null) {
			o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] GenerateAccessTokens failed: missing fbid or encrypted password"])));
			return;
		}
		var r = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(), a = r.privateKey, i = r.publicKey, l = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(i, !0), s = {
			version: 1,
			timestamp: Math.floor(Date.now() / 1e3),
			password: t,
			client_pub_key: l,
			client_pub_key_type: "RSA 2048"
		}, u = await o("WAWebAccountLinkingCryptoUtils").wrapPayloadWithRSAAESEncryption(s), c = await o("WAWebAccountLinkingCryptoUtils").computeIdSign(n), d = await o("WASmaxWaffleGenerateAccessTokensRPC").sendGenerateAccessTokensRPC({
			rSAEncryptionMetadataMixinArgs: {
				encryptedKeyElementValue: u.encryptedKey,
				nonceElementValue: u.nonce,
				encryptedDataElementValue: u.cipherText,
				authTagElementValue: u.tag
			},
			timestampElementValue: Math.floor(Date.now() / 1e3),
			fbidElementValue: n,
			idSignElementValue: c
		});
		if (d.name === "GenerateAccessTokensResponseSuccess") {
			L.reset();
			var h = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(d.value.encryptionMetadataRSAEncryptionMetadataMixin), y = h.data, C = h.key, b = h.nonce, v = h.tag;
			try {
				var R = await o("WAWebAccountLinkingCryptoUtils").decryptRSAEncryptedPayload(a, C, y, b, v);
				if (!("access_token" in R)) {
					o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] GenerateAccessTokens success but response missing access_token"])));
					return;
				}
				var E = d.value.pingIntervalElementValue;
				await S.updateGenerateAccessTokensData({
					accesstoken: R.access_token,
					fbid: "fbid" in R ? String(R.fbid) : null,
					nonce: "nonce" in R ? R.nonce : null,
					pingInterval: E
				});
			} catch (e) {
				o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Failed to process generateAccessTokens response: ", ""])), e).tags("waffle", "account-linking", "generate-access-tokens").sendLogs("waffle-generate-access-tokens-failed", { sampling: .01 });
			}
		} else {
			var k = d.value.errorGenerateAccessTokensErrors, I = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError("generateAccessTokens", k.name);
			await o("WAWebAccountLinkingAPI").handleRecoveryAction(I, L), o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] GenerateAccessTokens RPC failed: ", ""])), k.name);
		}
	}
	var T = {
		FB: 0,
		IG: 1
	}, D = {
		FB: "wa_nta_username_reservation_on_fb",
		IG: "wa_nta_username_reservation_on_ig"
	};
	async function x(e, t, n) {
		o("WAWebAccountLinkingAPI").assertModeAllowed("sendLinkingMutation");
		var a = await S.getAccountLinkingData();
		if (a == null) throw o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Linking mutation failed: no account linking data"]))).sendLogs("waffle-linking-no-data"), r("err")("No account linking data");
		var i = a.accesstoken, l = a.fbid;
		if (l == null || i == null) throw o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Linking mutation failed: missing fbid or access token"]))).sendLogs("waffle-linking-missing-creds"), r("err")("Missing fbid or access token");
		var s = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(), u = s.privateKey, c = s.publicKey, d = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(c, !0), m = {
			version: 1,
			timestamp: Math.floor(Date.now() / 1e3),
			access_token: i,
			client_pub_key: d,
			client_pub_key_type: "RSA 2048",
			action: "waffle_100",
			target_account_type: T[t],
			opaque_target_accounts_to_be_linked_strings: [e],
			linking_entry_point: D[t],
			family_device_id: n
		}, p = await o("WAWebAccountLinkingCryptoUtils").wrapPayloadWithRSAAESEncryption(m), _;
		try {
			_ = await o("WASmaxWaffleEncryptedPayloadRequestRPC").sendEncryptedPayloadRequestRPC({
				actionElementValue: "waffle_100",
				fbidElementValue: l,
				timestampElementValue: Math.floor(Date.now() / 1e3),
				rSAEncryptionMetadataMixinArgs: {
					encryptedKeyElementValue: p.encryptedKey,
					nonceElementValue: p.nonce,
					encryptedDataElementValue: p.cipherText,
					authTagElementValue: p.tag
				}
			});
		} catch (e) {
			throw o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Linking mutation error"]))).catching(r("getErrorSafe")(e)), e;
		}
		if (_.name === "EncryptedPayloadRequestResponseSuccess") {
			var f = o("WAWebAPIParser").parseRSAEncryptionMetadataMixin(_.value.encryptionMetadataRSAEncryptionMetadataMixin), g = f.data, R = f.key, L = f.nonce, k = f.tag, I = await o("WAWebAccountLinkingCryptoUtils").decryptRSAEncryptedPayload(u, R, g, L, k);
			if ("link_mutation_succeeded" in I && I.success === !0 && I.link_mutation_succeeded === !0) await S.updateAccountLinkingState(o("WAWebAccountLinkingConstants").AccountLinkState.Active), o("WAWebMetaAiWaffleAuthTokenCache").refreshMetaAiWaffleAuthTokenBlob();
			else {
				var x = "success" in I ? I.success : void 0, $ = "link_mutation_succeeded" in I ? I.link_mutation_succeeded : void 0;
				throw o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
					"[WAFFLE] Linking mutation failed: success=",
					" link_mutation_succeeded=",
					""
				])), String(x), String($)).sendLogs("waffle-linking-mutation-failed"), r("err")("Linking mutation failed");
			}
		} else {
			var P = _.value.errorEncryptedPayloadRequestErrors, N = await o("WAWebWaffleIQErrorHandler").handleCommonWaffleIQError("linkAction", P.name);
			throw await o("WAWebAccountLinkingAPI").handleRecoveryAction(N, E), o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[WAFFLE] Linking mutation RPC error: ", ""])), P.name).sendLogs("waffle-linking-mutation-rpc-error"), r("err")("Linking mutation RPC error: %s", P.name);
		}
	}
	l.generateWAEntACUser = k, l.generateAccessTokens = I, l.sendLinkingMutation = x;
}), 98);
