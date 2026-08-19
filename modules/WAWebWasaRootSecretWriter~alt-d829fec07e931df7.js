__d("WAWebWasaRootSecretWriter", [
	"WALogger",
	"WAWebProtobufSyncAction.pb",
	"WAWebSyncdConst",
	"WAWebSyncdDb",
	"WAWebWasaRootSecretDb",
	"WAWebWasaUserPrefs",
	"decodeProtobuf",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(e, t, n) {
		await o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(e, t, n), await o("WAWebWasaUserPrefs").setWasaActiveTargetId(e.user, t);
	}
	async function u(e) {
		var t = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
		t != null && await o("WAWebWasaRootSecretDb").removeWasaRootSecretForId(e, t), await o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user);
	}
	async function c(t, n) {
		try {
			var a = await d(t, n);
			return a == null ? !1 : (await o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(t, a.stanzaId, a.secret), !0);
		} catch (t) {
			return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[wasa] maybeRecoverWasaRootSecretFromStore failed: ", ""])), t).catching(r("getErrorSafe")(t)).sendLogs("wasa-root-secret-recovery-failed"), !1;
		}
	}
	async function d(e, t) {
		var n, r, a = "[\"" + o("WAWebSyncdConst").Actions.WasaRootSecret + "\",\"" + e.toJid() + "\"]", i = await o("WAWebSyncdDb").getSyncAction(a);
		if ((i == null ? void 0 : i.binarySyncData) == null) return null;
		var l = (n = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, i.binarySyncData).value) == null ? void 0 : n.wasaRootSecretAction, s = l == null || (r = l.secrets) == null ? void 0 : r.find(function(e) {
			return e.id === t;
		}), u = s == null ? void 0 : s.id, c = s == null ? void 0 : s.rootSecret;
		return u == null || c == null ? null : {
			stanzaId: u,
			secret: new Uint8Array(c)
		};
	}
	l.applyWasaRootSecretForId = s, l.clearWasaRootSecret = u, l.maybeRecoverWasaRootSecretFromStore = c;
}), 98);
