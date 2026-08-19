__d("MAWMediaBackupTxns", [
	"FBLogger",
	"MAWDbMediaTxns",
	"MAWDexieTable",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = 1;
	function m(t, n, a, i, l, p) {
		return p === void 0 && (p = 0), i == null ? o("MAWDexieTable").dexieResolve() : o("MAWDbMediaTxns").maybeGetMediaBackupRowFromObjectId(t, i).then(function(_) {
			if (_ == null) {
				var f = {
					mediaId: n,
					msgId: a,
					objectId: i
				};
				return l != null && (f = babelHelpers.extends({}, f, { fbid: l })), t.mediaBackup.add(f).then(function(e) {
					return babelHelpers.extends({}, f, { mediaBackupId: e });
				}).catch(function(u) {
					if (u.name === "ConstraintError") {
						if (p < d) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Failed to add mediaBackup entry. Will attempt a retry. Error: ", ""])), u), m(t, n, a, i, l, p + 1);
						throw r("FBLogger")("messenger_web").mustfixThrow("Failed to add mediaBackup entry. Original error: %s, %s", u.name, u.message);
					}
					throw o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Failed to add mediaBackup entry: ", ""])), u), u;
				});
			} else {
				if (_.mediaId !== n || _.msgId !== a) return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] mediaId or msgId cannot differ for an objectId in mediaBackup"]))), _;
				if (_.fbid == null && l != null) {
					var g = babelHelpers.extends({}, _, { fbid: l });
					return t.mediaBackup.put(g).then(function(e) {
						return g;
					});
				} else o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] fbid already exists for objectId"])));
				return _;
			}
		});
	}
	l.linkMediaBackup = m;
}), 98);
