__d("MAWDbMediaTxns", [
	"MAWDbMsg",
	"MAWDexieTable",
	"MAWMediaUtils",
	"MAWMsgType",
	"MAWODSProxy",
	"WAHashUtils",
	"WALogger",
	"WAOdsEnums",
	"WAResultOrError",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve() : e.media.get({ mediaId: t });
	}
	function m(e, t) {
		return t.length === 0 ? o("MAWDexieTable").dexieResolve(new Map()) : e.media.bulkGet(t).then(function(e) {
			return new Map(e.filter(Boolean).map(function(e) {
				return [e.mediaId, e];
			}));
		});
	}
	function p(e, t) {
		return e.media.where("hashedPlaintextHash").equals(t).first();
	}
	function _(e, t) {
		var n = o("MAWMediaUtils").genHMACPlaintextHash(t);
		return p(e, n);
	}
	function f(e, t) {
		return e.media.where("hashedPlaintextHash").anyOf(t).toArray();
	}
	function g(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve() : h(e, t).then(function(n) {
			var r = n == null ? void 0 : n.mediaId;
			return r != null ? e.media.get({ mediaId: r }) : e.media.get({ objectId: t });
		});
	}
	function h(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve() : e.mediaBackup.get({ objectId: t });
	}
	function y(e, t) {
		if (t == null) return o("MAWDexieTable").dexieResolve();
		var n = e.mediaBackup.where("msgId").equals(t).toArray();
		return n;
	}
	function C(t, n) {
		var a = n.filter(o("MAWDbMsg").isMediaMsg);
		if (a.length === 0) return o("MAWDexieTable").dexieResolve([]);
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[getMsgMediaPairFromMsgs] msgs: ", ""])), a.map(function(e) {
			return "" + e.msgId;
		}));
		var i = a.reduce(function(e, t) {
			return t.mediaId == null ? (o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"mediaId is null for media msg with msgId: ",
				" and msg type ",
				""
			])), t.msgId, t.type), e) : e.set(t.mediaId, t);
		}, new Map()), l = Array.from(i.keys());
		return S(t, l).then(function(e) {
			var t = [];
			return e.forEach(function(e) {
				if (e == null) throw r("err")("Error missing media");
				var n = i.get(e.mediaId);
				if (n == null) throw r("err")("Error missing media");
				var a = o("MAWMediaUtils").genHMACPlaintextHash(e.plaintextHash);
				a !== e.hashedPlaintextHash && (o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[getMsgMediaPairFromMsgs] encountered mismatched hashedPlaintextHash for media. PlaintextHash: ", ""])), o("WAHashUtils").sanitisePlaintextHash(e.plaintextHash)), o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_MEDIA_MISMATCH_HASHED_PLAINTEXT_HASH,
					key: "mismatch." + n.type
				})), t.push([n, e]);
			}), t;
		});
	}
	function b(e, t) {
		if (t.length === 0) return o("MAWDexieTable").dexieResolve([]);
		var n = t.filter(o("MAWDbMsg").isMediaMsg).map(function(e) {
			var t = e.mediaId;
			if (t == null) throw o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["mediaId is null for media msg with msgId: ", ""])), e.msgId), r("err")("mediaId is missing");
			return t;
		});
		return S(e, n).then(function(e) {
			var t = [];
			return e.forEach(function(e) {
				e != null && t.push(e);
			}), t;
		});
	}
	function v(e, t) {
		if (t.type === o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME || o("MAWDbMsg").isMediaMsg(t)) {
			var n = t.mediaId;
			return n == null ? t.type === o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME ? o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeResult()) : o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeError("missing")) : e.media.get(n).then(function(e) {
				return e == null ? o("WAResultOrError").makeError("missing") : o("WAResultOrError").makeResult(e);
			});
		} else return o("MAWDexieTable").dexieResolve(o("WAResultOrError").makeResult());
	}
	function S(e, t) {
		return e.media.bulkGet(t);
	}
	function R(e, t) {
		var n = t.previewMediaIds != null ? S(e, t.previewMediaIds) : o("MAWDexieTable").dexieResolve(), r = t.headerMediaId != null ? e.media.get(t.headerMediaId) : o("MAWDexieTable").dexieResolve(), a = t.faviconMediaId != null ? e.media.get(t.faviconMediaId) : o("MAWDexieTable").dexieResolve(), i = t.defaultPreviewMediaId != null ? e.media.get(t.defaultPreviewMediaId) : o("MAWDexieTable").dexieResolve();
		return o("MAWDexieTable").dexieAll([
			n,
			r,
			a,
			i
		]).then(function(e) {
			var n = e[0], r = e[1], a = e[2], i = e[3];
			if (t.headerMediaId != null && r == null || t.faviconMediaId != null && a == null || n == null) return o("WAResultOrError").makeError("missing");
			var l = [];
			for (var s of n) {
				if (s == null) return o("WAResultOrError").makeError("missing");
				l.push(s);
			}
			return o("WAResultOrError").makeResult({
				defaultPreview: i,
				favicon: a,
				header: r,
				previews: l
			});
		});
	}
	function L(e, t, n) {
		var r = babelHelpers.extends({}, t, n);
		return e.media.put(r);
	}
	l.maybeGetMediaFromMediaId = d, l.maybeBulkGetMediaFromMediaId = m, l.maybeGetMediaFromHashedPlaintextHash = p, l.maybeGetMediaFromPlaintextHash = _, l.maybeBulkGetMediaFromHashedPlaintextHash = f, l.maybeGetMediaFromObjectId = g, l.maybeGetMediaBackupRowFromObjectId = h, l.maybeGetMediaBackupRowFromMsgId = y, l.getMsgMediaPairFromMsgs = C, l.getMediaFromMsgs = b, l.getAndCheckMediaFromMsg = v, l.bulkGetMedias = S, l.getMediaForXMA = R, l.updateMedia = L;
}), 98);
