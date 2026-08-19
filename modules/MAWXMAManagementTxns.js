__d("MAWXMAManagementTxns", [
	"FBLogger",
	"MAWDexieTable",
	"MAWMediaManagementTxns",
	"MAWXMAUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r, a, i) {
		var l = t.unstoredDbXMA, u = t.unstoredFavicon, c = t.unstoredHeaderMedia, d = t.unstoredPreviews;
		a === void 0 && (a = !1), i === void 0 && (i = "wa-incoming");
		var m = new Map(), p = function(r) {
			return r != null ? o("MAWMediaManagementTxns").handleUnstoredDbMedia(e, r, n, i, !0).then(function(e) {
				return [r.plaintextHash, e];
			}) : o("MAWDexieTable").dexieResolve([void 0, void 0]);
		};
		a || (m.set(u == null ? void 0 : u.plaintextHash, p(u)).set(c == null ? void 0 : c.plaintextHash, p(c)), d == null || d.forEach(function(e) {
			m.set(e == null ? void 0 : e.plaintextHash, p(e));
		}));
		var _ = Array.from(m.values());
		return o("MAWDexieTable").dexieAll(_).then(function(t) {
			var i = new Map(t), m = (d != null ? d : []).map(function(e) {
				return i.get(e.plaintextHash);
			}).filter(Boolean);
			return s(e, a ? o("MAWXMAUtils").buildUnstoredTombstonedXMA(l) : l, i.get(u == null ? void 0 : u.plaintextHash), i.get(c == null ? void 0 : c.plaintextHash), m, n, r).then(function(e) {
				return {
					dbMedias: t.map(function(e) {
						var t = e[0], n = e[1];
						return n;
					}).filter(Boolean),
					dbXMA: e,
					firstPreview: m[0]
				};
			});
		});
	}
	function s(e, t, n, o, a, i, l) {
		var s, u, c = babelHelpers.extends({}, t, {
			associatedMessageId: l != null ? l : void 0,
			defaultPreviewMediaId: (s = a[0]) == null ? void 0 : s.mediaId,
			defaultPreviewMediaPlaintextHash: (u = a[0]) == null ? void 0 : u.plaintextHash,
			faviconMediaId: n == null ? void 0 : n.mediaId,
			faviconPlaintextHash: n == null ? void 0 : n.plaintextHash,
			headerMediaId: o == null ? void 0 : o.mediaId,
			headerMediaPlaintextHash: o == null ? void 0 : o.plaintextHash,
			msgId: i.msgId,
			previewMediaIds: a.map(function(e) {
				return e.mediaId;
			})
		});
		return e.xma.add(c).then(function(t) {
			return e.xma.get(t);
		}).then(function(e) {
			if (e == null) throw r("FBLogger")("messenger_web").mustfixThrow("Failed to write XMA to db");
			return e;
		});
	}
	function u(e, t, n, r, a, i, l, s, u, c, d, m, p) {
		var _ = o("MAWXMAUtils").isXMAExpired(!1, u.targetExpiringAtSec), f = babelHelpers.extends({}, u, {
			associatedMessageId: l != null ? l : void 0,
			author: s.author,
			externalId: s.externalId,
			isTombstoned: _,
			msgId: i,
			offlineAttachmentId: c,
			targetType: a,
			threadJid: s.chat
		}), g = _ ? f : babelHelpers.extends({}, f, {
			defaultPreviewMediaId: t != null ? t : void 0,
			defaultPreviewMediaPlaintextHash: d != null ? d : void 0,
			faviconMediaId: r != null ? r : void 0,
			faviconPlaintextHash: p != null ? p : void 0,
			headerMediaId: n != null ? n : void 0,
			headerMediaPlaintextHash: m != null ? m : void 0,
			previewMediaIds: t != null ? [t] : []
		});
		return e.xma.add(g).then(function(e) {
			return babelHelpers.extends({}, g, { xmaId: e });
		});
	}
	l.handleUnstoredXMAContent = e, l.saveXMA = u;
}), 98);
