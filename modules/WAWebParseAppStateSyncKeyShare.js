__d("WAWebParseAppStateSyncKeyShare", [
	"WALogger",
	"WALongInt",
	"WASyncdKeyTypes",
	"WAWebSyncdKeyManagementUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		var t = [], n = [];
		for (var r of e.keys) {
			var o = u(r);
			o != null && (o.type === "orphan" ? n.push(o.keyId) : (o.type, t.push(o.keyData)));
		}
		return {
			keys: t,
			orphanKeys: n
		};
	}
	function u(t) {
		var n, r, a, i, l, s;
		if (((n = t.keyId) == null ? void 0 : n.keyId) == null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Key missing keyId"]))), null;
		var u = o("WASyncdKeyTypes").toSyncKeyId(t.keyId.keyId), c = (r = t.keyData) == null ? void 0 : r.keyData, d = o("WALongInt").maybeNumberOrThrowIfTooLarge((a = t.keyData) == null ? void 0 : a.timestamp), m = (i = t.keyData) == null || (i = i.fingerprint) == null ? void 0 : i.currentIndex, p = (l = t.keyData) == null || (l = l.fingerprint) == null ? void 0 : l.deviceIndexes, _ = (s = t.keyData) == null || (s = s.fingerprint) == null ? void 0 : s.rawId;
		return t.keyData == null || c == null || d == null || m == null || p == null || _ == null ? {
			keyId: u,
			type: "orphan"
		} : {
			keyData: {
				fingerprint: {
					currentIndex: m,
					deviceIndexes: p,
					rawId: _
				},
				keyData: o("WASyncdKeyTypes").toSyncKeyData(c),
				keyEpoch: o("WAWebSyncdKeyManagementUtils").getKeyEpoch(u),
				keyId: u,
				timestamp: d
			},
			type: "key"
		};
	}
	l.parseAppStateSyncKeyShare = s;
}), 98);
