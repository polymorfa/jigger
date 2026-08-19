__d("EBMandrakeSyncContactMMK", [
	"EBMandrakeFetchContactMMK",
	"EBMandrakeLoadMMK",
	"EBMandrakeLogger",
	"EBMandrakeMMKCache",
	"EBMandrakeProcessTypes",
	"EBMandrakeSaveMMK",
	"EBMinosQplFlow",
	"EBMinosWasmMandrakeValidateNewMmkFromMailbox",
	"Promise",
	"WACryptoUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g;
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = new Map();
			for (var a of t) r.set(a, o("EBMinosQplFlow").startMandrakeMMKFetchQpl());
			var i = t.filter(function(t) {
				var n = o("EBMandrakeMMKCache").getCachedContactMMK(t);
				if (n != null && n.mmk_fbid !== "") {
					var a = r.get(t);
					return a == null || a.endSuccess({ string: { reason: "cache_hit" } }), !1;
				}
				return o("EBMandrakeLogger").mandrakeLogger.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Cached MMK not found or has placeholder fbid for contact ", ""])), t), !0;
			});
			if (i.length !== 0) {
				for (var l of i) {
					var d;
					(d = r.get(l)) == null || d.addPoint("fetch_keys_start");
				}
				var m = yield o("EBMandrakeFetchContactMMK").fetchContactMMK({ contactIds: i });
				for (var p of i) {
					var _;
					(_ = r.get(p)) == null || _.addPoint("fetch_keys_end");
				}
				if (!m.success) {
					o("EBMandrakeLogger").mandrakeLogger.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch contact MMKs: ", ""])), m.error);
					for (var f of i) {
						var h;
						(h = r.get(f)) == null || h.endFailWithError("fetch_keys_failed", m.error);
					}
					return;
				}
				if (m.value == null) {
					o("EBMandrakeLogger").mandrakeLogger.DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Server does not have MMKs for requested contacts"])));
					for (var y of i) {
						var b;
						(b = r.get(y)) == null || b.endSuccess({ string: { reason: "server_does_not_have_keys" } });
					}
					return;
				}
				var v = new Set(), S = m.value.contactMMKs.map(function(e) {
					var t = r.get(e.contactId);
					return v.add(e.contactId), t == null || t.addPoint("validate_and_save_start"), C(e).then(function() {
						t == null || t.endSuccess();
					}, function(n) {
						o("EBMandrakeLogger").mandrakeLogger.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
							"Failed to save MMK for ",
							": ",
							""
						])), e.contactId, n.message), t == null || t.endFailWithError("validate_and_save_failed", n.message);
					});
				});
				for (var R of i) if (!v.has(R)) {
					var L;
					(L = r.get(R)) == null || L.endSuccess({ string: { reason: "not_returned_by_server" } });
				}
				yield (g || (g = n("Promise"))).all(S);
			}
		}), y.apply(this, arguments);
	}
	function C(e) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.contactId, n = e.creatorType, r = e.epochId, a = e.epochPublicData, i = e.mailboxHeadHash, l = e.mmkFbid, s = e.mmkPublicData, u = e.signature;
			if (n === "DETACHED_DEVICE") {
				o("EBMandrakeLogger").mandrakeLogger.DEV(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Skipping DETACHED_DEVICE MMK for ", " — validation not yet supported (milestone 2)"])), t);
				return;
			}
			if (u == null || a == null) {
				o("EBMandrakeLogger").mandrakeLogger.DEV(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Missing signature or epoch data for ", ", skipping"])), t);
				return;
			}
			var c = yield o("EBMandrakeLoadMMK").loadMMK(t), g = c != null && o("WACryptoUtils").arrayBuffersEqual(c.epoch_head, s.epochHead);
			if (g && c != null && c.sequence_number >= s.sequenceNumber && c.mmk_fbid !== "") {
				o("EBMandrakeLogger").mandrakeLogger.DEV(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"MMK for ",
					" already up to date (seq ",
					")"
				])), t, c.sequence_number);
				return;
			}
			var h = g && c != null && c.mmk_fbid !== "" ? o("EBMandrakeProcessTypes").mmkToPublicData(c) : void 0, y = yield o("EBMinosWasmMandrakeValidateNewMmkFromMailbox").mandrakeValidateNewMmkFromMailbox({
				mmkFromMailbox: {
					epochPublicData: a,
					newMmk: s
				},
				prevMmk: h,
				signature: u
			});
			if (!y.success) {
				var C;
				o("EBMandrakeLogger").mandrakeLogger.ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
					"MMK validation failed for ",
					": ",
					""
				])), t, (C = y.error.failReason) != null ? C : "unknown");
				return;
			}
			var b = o("EBMandrakeMMKCache").getPendingMmkSeed(i);
			yield o("EBMandrakeSaveMMK").saveMMK(t, b, s, i, n, l, r), o("EBMandrakeLogger").mandrakeLogger.DEV(f || (f = babelHelpers.taggedTemplateLiteralLoose(["MMK saved for ", ""])), t);
		}), b.apply(this, arguments);
	}
	l.syncContactMMKs = h;
}), 98);
