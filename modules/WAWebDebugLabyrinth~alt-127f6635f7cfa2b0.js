__d("WAWebDebugLabyrinth", [
	"WABase64",
	"WALogger",
	"WAResultOrError",
	"WATimeUtils",
	"WAWebCreateLabyrinthBackupJob",
	"WAWebDebugLabyrinthInboxSnapshotQuery",
	"WAWebDebugLabyrinthRangeQuery",
	"WAWebEBLabyrinthWaWasmReactorSingleton",
	"WAWebLabyrinthCanonicalUserFbid",
	"WAWebLabyrinthDebugStateCache",
	"WAWebLabyrinthWasmCreateBackup",
	"WAWebLabyrinthWasmDecryptMessage",
	"WAWebLabyrinthWasmDeriveMessageKey",
	"WAWebLabyrinthWasmEncryptMessage",
	"WAWebLabyrinthWasmOrfThreadId",
	"WAWebPonyfillsCryptoRandomUUID",
	"WAWebUploadLabyrinthMessagesJob",
	"WAWebUserPrefsMeUser",
	"err",
	"getErrorSafe",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P = "hello labyrinth", N = 20, M = 20, w = 20, A = 20, F = "Call Debug.labyrinthCreateBackupNativeWasm() first";
	o("WAWebEBLabyrinthWaWasmReactorSingleton").ebLabyrinthWaReactor().catch(function(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] eager WA Wasm initialization failed"]))).catching(r("getErrorSafe")(t));
	});
	function O() {
		var e = o("WAWebLabyrinthDebugStateCache").getLabyrinthDebugKeyMaterialCache();
		if (e != null) return e;
		throw r("err")(F);
	}
	function B() {
		var e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().getDeviceId();
		return e != null ? String(e) : null;
	}
	function W() {
		var e = B();
		if (e == null) throw r("err")("Debug.labyrinthCreateBackupNativeWasm requires a live WA Web device id");
		return {
			deviceId: e,
			familyDeviceId: e,
			deviceRegistrationId: e
		};
	}
	async function q(e, t) {
		return Promise.all(e.map(async function(e) {
			return babelHelpers.extends({}, e, { messages: await V(e.messages, t, e.threadId) });
		}));
	}
	async function U(e, t, n) {
		return Promise.all(e.map(async function(e) {
			return babelHelpers.extends({}, e, { messages: await V(e.messages, t, n) });
		}));
	}
	async function V(e, t, n) {
		var a = r("nullthrows")(t.epochRootKey), i = r("nullthrows")(t.epochAnonId), l = new Uint8Array(o("WABase64").decodeB64(i)), u = new Uint8Array(o("WABase64").decodeB64(a));
		return Promise.all(e.map(async function(e) {
			var t = null, a = null;
			try {
				var i = r("nullthrows")(e.encryptedPayload), c = r("nullthrows")(e.encryptionVersion), d = new Uint8Array(o("WABase64").decodeB64(i));
				t = c;
				var m = await o("WAWebLabyrinthWasmDecryptMessage").decryptMessageWasm({
					ciphertext: d,
					encryptionVersion: c,
					epochAnonId: l,
					epochRootKey: u,
					threadId: n
				});
				if (!m.success) throw a = String(m.error), r("err")("decryptMessageWasm failed: " + a);
				var p = new TextDecoder().decode(m.value.plaintext);
				return {
					messageId: e.messageId,
					decryptResult: o("WAResultOrError").makeResult(p)
				};
			} catch (i) {
				var _ = r("getErrorSafe")(i);
				return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"[Debug][Labyrinth] message decrypt failed for message_id ",
					"; thread_id ",
					"; subtype ",
					""
				])), e.messageId, n, String(a != null ? a : _.name)).catching(_), {
					messageId: e.messageId,
					decryptResult: o("WAResultOrError").makeError({
						decryptError: _,
						encryptionVersion: t != null ? t : 0
					})
				};
			}
		}));
	}
	async function H(e) {
		var t, n, a = Math.min((t = e == null ? void 0 : e.numMsgs) != null ? t : N, w), i = Math.min((n = e == null ? void 0 : e.numThreads) != null ? n : M, A);
		try {
			var l = await o("WAWebDebugLabyrinthInboxSnapshotQuery").fetchLabyrinthInboxSnapshot({
				numMsgs: a,
				numThreads: i
			}), s = l == null ? null : await q(l, O());
			return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] labyrinthInboxSnapshot GQL response"]))), s;
		} catch (e) {
			throw o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] labyrinthInboxSnapshot GQL failed"]))).catching(r("getErrorSafe")(e)), e;
		}
	}
	H.doc = "Fetches WA Labyrinth inbox snapshot threads/messages, logs the simplified response, and returns it.", H.paramsToExecute = [];
	async function G(e) {
		var t = r("nullthrows")(e.threadId), n = O(), a = r("nullthrows")(n.ebDeviceId), i = r("nullthrows")(n.orfClientState);
		try {
			var l = await o("WAWebLabyrinthWasmOrfThreadId").labyrinthOrfThreadIdWasm({
				orfClientState: new Uint8Array(o("WABase64").decodeB64(i)),
				threadId: t
			});
			if (!l.success) return o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] labyrinthRangeQuery ORF thread id mapping failed"]))), null;
			var s = await o("WAWebDebugLabyrinthRangeQuery").fetchLabyrinthRangeQuery({
				ebDeviceId: a,
				messageCount: e.numMessages,
				partialThreadId: o("WABase64").encodeB64(new Uint8Array(l.value))
			}), u = s == null ? null : await U(s, n, t);
			return o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] labyrinthRangeQuery GQL response"]))), u;
		} catch (e) {
			throw o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] labyrinthRangeQuery GQL failed"]))).catching(r("getErrorSafe")(e)), e;
		}
	}
	G.doc = "Fetches WA Labyrinth messages for a plain thread id, internally maps it to partial_thread_id, logs the simplified response, and returns it. Do not pass snapshot.threadId. Example: Debug.labyrinthRangeQuery({threadId, numMessages: 10})", G.paramsToExecute = [];
	async function z(e) {
		var t, n = (t = r("nullthrows"))(e.threadId), a = O(), i = t(a.epochAnonId), l = t(a.epochRootKey), s = t(a.orfClientState);
		try {
			var u = await o("WAWebLabyrinthWasmOrfThreadId").labyrinthOrfThreadIdWasm({
				orfClientState: new Uint8Array(o("WABase64").decodeB64(s)),
				threadId: n
			});
			if (!u.success) return o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] labyrinthDecryptFlowInputs ORF thread id mapping failed"]))), null;
			var c = await o("WAWebLabyrinthWasmDeriveMessageKey").deriveMessageKeyWasm({
				epochAnonId: new Uint8Array(o("WABase64").decodeB64(i)),
				epochRootKey: new Uint8Array(o("WABase64").decodeB64(l)),
				threadId: n
			});
			if (!c.success) return o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] labyrinthDecryptFlowInputs message key derivation failed"]))), null;
			var d = {
				messageKey: o("WABase64").encodeB64(new Uint8Array(c.value.messageKey)),
				partialThreadId: o("WABase64").encodeB64(new Uint8Array(u.value))
			};
			return o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] labyrinthDecryptFlowInputs result"]))), d;
		} catch (e) {
			throw o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] labyrinthDecryptFlowInputs failed"]))).catching(r("getErrorSafe")(e)), e;
		}
	}
	z.doc = "Given a plain threadId, returns base64 partialThreadId and base64 messageKey for CLI decrypt flow. Example: Debug.labyrinthDecryptFlowInputs({threadId})", z.paramsToExecute = [];
	async function j() {
		var e = await o("WAWebLabyrinthWasmCreateBackup").createBackupWasm();
		if (!e.success) return o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] createBackupWasm failed"]))), e;
		o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] createBackupWasm success"])));
		var t = W();
		o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] start nativeCreateLabyrinthBackup GQL request"])));
		try {
			var n = await o("WAWebCreateLabyrinthBackupJob").createLabyrinthBackup(e.value, t), a = n.wa_labyrinth_create_backup;
			return (a == null ? void 0 : a.__typename) === "WALabyrinthCreateBackupData" ? o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request success"]))) : (a == null ? void 0 : a.__typename) === "WALabyrinthCreateBackupError" ? o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed"]))) : o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] native create backup GQL response"]))), a;
		} catch (e) {
			throw o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] nativeCreateLabyrinthBackup GQL request failed"]))).catching(r("getErrorSafe")(e)), e;
		}
	}
	j.doc = "Create backup (native): generate Labyrinth backup data with Wasm and call wa_labyrinth_create_backup";
	async function K(e) {
		var t = e.msg, n = e.repeat, a = n === void 0 ? 1 : n, i = e.threadId, l = e.threadType, s = l === void 0 ? "ONE_TO_ONE" : l, u = O(), c = r("nullthrows")(B()), d = r("nullthrows")(u.backupId), m = r("nullthrows")(u.epochId), p = r("nullthrows")(i), _ = t != null ? t : P, f = r("nullthrows")(u.epochRootKey), g = r("nullthrows")(u.mailboxRootKey), h = r("nullthrows")(u.orfClientState), y = r("nullthrows")(u.epochAnonId), C = o("WAWebLabyrinthCanonicalUserFbid").getWaCanonicalUserFbid(), b = Math.max(1, Math.floor(a)), v = await Promise.all(Array.from({ length: b }, function() {
			var e = r("nullthrows")(r("WAWebPonyfillsCryptoRandomUUID")()), t = String(o("WATimeUtils").unixTimeMs());
			return o("WAWebLabyrinthWasmEncryptMessage").encryptMessageWasm({
				backupId: d,
				epochAnonId: y,
				epochId: m,
				epochRootKey: f,
				mailboxRootKey: g,
				orfClientState: h,
				plaintext: _,
				stanzaId: e,
				threadId: p,
				threadType: s,
				timestampMs: t,
				waCanonicalUserFbid: C
			});
		})), S = [];
		for (var R of v.entries()) {
			var L = R[0], N = R[1];
			if (!N.success) return o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] encryptMessageWasm failed"]))), N;
			S.push(N.value);
		}
		o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] encryptMessageWasm success"])));
		var M = {
			deviceId: c,
			epochId: m,
			familyDeviceId: c
		}, w = o("WAWebUploadLabyrinthMessagesJob").wasmResultsToUploadLabyrinthMessagesInput(S, M);
		o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] start nativeUploadLabyrinthMessages GQL request"])));
		try {
			var A = await o("WAWebUploadLabyrinthMessagesJob").uploadLabyrinthMessages(w), F = A.wa_labyrinth_upload_messages;
			return (F == null ? void 0 : F.__typename) === "WALabyrinthUploadMessagesData" ? o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request success"]))) : (F == null ? void 0 : F.__typename) === "WALabyrinthUploadMessagesError" ? o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL request failed"]))) : o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL response"]))), F;
		} catch (e) {
			throw o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["[Debug][Labyrinth] nativeUploadLabyrinthMessages GQL failed"]))).catching(r("getErrorSafe")(e)), e;
		}
	}
	K.doc = "Upload messages (native): encrypt one text message one or more times for a thread with Wasm and batch-upload it through wa_labyrinth_upload_messages. Example: Debug.labyrinthEncryptAndUploadMessageNative({threadId, msg, repeat: 3, threadType: \"ONE_TO_ONE\"})";
	var Q = {
		labyrinthCreateBackupNativeWasm: j,
		labyrinthDecryptFlowInputs: z,
		labyrinthEncryptAndUploadMessageNative: K,
		labyrinthInboxSnapshot: H,
		labyrinthRangeQuery: G
	};
	l.default = Q;
}), 98);
