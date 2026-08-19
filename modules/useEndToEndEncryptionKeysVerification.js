__d("useEndToEndEncryptionKeysVerification", [
	"$InternalEnum",
	"FBLogger",
	"MAWBridgeSendAndReceive",
	"MAWWaitForBackendSetup",
	"MWLSThreadOtherParticipants",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"toMsgrUserJid"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState, d = n("$InternalEnum")({
		VERIFYING: "verifying",
		FAILED: "failed",
		SUCCESS: "success",
		PENDING: "pending"
	});
	function m(e) {
		return e === "pending" ? d.PENDING : e === "success" ? d.SUCCESS : d.FAILED;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(14), a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
			status: d.VERIFYING,
			timestamp: null
		}, t[0] = a) : a = t[0];
		var i = c(a), l = i[0], s = i[1], p = o("MWLSThreadOtherParticipants").useOtherParticipantsIdsStringFromThreadKey(e), _;
		t[1] !== p[0] || t[2] !== p.length ? (_ = p.length > 0 ? r("toMsgrUserJid")(p[0]) : null, t[1] = p[0], t[2] = p.length, t[3] = _) : _ = t[3];
		var f = _, g = p.length > 1, h = f != null && !g, y, C;
		t[4] !== h || t[5] !== f ? (y = function() {
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (!h || f == null) {
						s({
							status: d.FAILED,
							timestamp: null
						});
						return;
					}
					try {
						yield o("MAWWaitForBackendSetup").waitForBackendSetup("kt-verification-dialog");
						var e = yield o("MAWBridgeSendAndReceive").sendAndReceive("kt", "keyVerificationStatus", { userJid: f });
						s({
							status: m(e.status),
							timestamp: e.timestamp
						});
					} catch (e) {
						var t = e;
						r("FBLogger")("wmi_eb").catching(r("getErrorSafe")(t)).mustfix("Key Transparency verification status check failed"), s({
							status: d.FAILED,
							timestamp: null
						});
					}
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			r("promiseDone")(e());
		}, C = [h, f], t[4] = h, t[5] = f, t[6] = y, t[7] = C) : (y = t[6], C = t[7]), u(y, C);
		var b;
		t[8] !== h || t[9] !== f ? (b = function() {
			if (!h || f == null) {
				s({
					status: d.FAILED,
					timestamp: null
				});
				return;
			}
			s({
				status: d.VERIFYING,
				timestamp: null
			});
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						yield o("MAWWaitForBackendSetup").waitForBackendSetup("kt-verification-dialog");
						var e = yield o("MAWBridgeSendAndReceive").sendAndReceive("kt", "runKeyVerification", { userJid: f });
						s({
							status: m(e.status),
							timestamp: e.timestamp
						});
					} catch (e) {
						var t = e;
						r("FBLogger")("wmi_eb").catching(r("getErrorSafe")(t)).mustfix("Key Transparency verification run failed"), s({
							status: d.FAILED,
							timestamp: null
						});
					}
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			r("promiseDone")(e());
		}, t[8] = h, t[9] = f, t[10] = b) : b = t[10];
		var v = b, S;
		return t[11] !== l || t[12] !== v ? (S = {
			result: l,
			runKeyVerification: v
		}, t[11] = l, t[12] = v, t[13] = S) : S = t[13], S;
	}
	l.KeyVerificationStatus = d, l.useE2EEKeyVerification = p;
}), 98);
