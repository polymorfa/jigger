__d("WAWebBizAdCreationEmailOnboardingFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAWebBizAdCreationEmailCollectionDialog.react",
	"WAWebBizAdCreationEmailVerificationDialog.react",
	"WAWebFlex.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationConfirmEmailOnboarding",
	"useWAWebBizAdCreationSendEmailVerificationCode",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = n("$InternalEnum").Mirrored(["EmailCollection", "Verification"]);
	function _(e) {
		return e === "INVALID_OR_EXPIRED_NONCE" ? s._(
			/*BTDS*/
			""
		) : e === "TOO_MANY_ATTEMPTS" ? s._(
			/*BTDS*/
			""
		) : e === "EMAIL_NONCE_MISMATCH" || e === "INVALID_EMAIL" || e === "EMAIL_ALREADY_EXISTS" || e === "INVALID_USER" || e === "GENERIC_ERROR" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function f(e) {
		return e === "TOO_MANY_ATTEMPTS" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(36), n = e.adAccountID, a = e.loggerContext, i = e.onCancel, l = e.onComplete, c = m(null), d = c[0], g = c[1], h = m(null), y = h[0], C = h[1], b = r("useWAWebBizAdCreationConfirmEmailOnboarding")(), v = b[0], S = r("useWAWebBizAdCreationSendEmailVerificationCode")(), R = S[0], L;
		t[0] !== i ? (L = {
			onEnd: i,
			transitions: o("useWAWebFlow").FlowTransitions.None
		}, t[0] = i, t[1] = L) : L = t[1];
		var E = o("useWAWebFlow").useFlow(p.EmailCollection, L), k = E[0], I = E[1], T;
		t[2] !== v || t[3] !== d || t[4] !== y ? (T = async function(t) {
			if (d == null || y == null) return {
				error: s._(
					/*BTDS*/
					""
				),
				success: !1
			};
			var e = await v(d, t, y);
			return e.success ? { success: !0 } : {
				error: _(e.error),
				success: !1
			};
		}, t[2] = v, t[3] = d, t[4] = y, t[5] = T) : T = t[5];
		var D = T, x;
		t[6] !== d || t[7] !== R ? (x = async function() {
			if (d == null) return {
				error: s._(
					/*BTDS*/
					""
				),
				success: !1
			};
			var e = await R(d);
			return e.success ? { success: !0 } : {
				error: f(e.error),
				success: !1
			};
		}, t[6] = d, t[7] = R, t[8] = x) : x = t[8];
		var $ = x;
		if (I.step == null) return null;
		var P;
		t[9] !== I ? (P = function(t, n) {
			g(t), C(n), I.push(p.Verification);
		}, t[9] = I, t[10] = P) : P = t[10];
		var N = P, M;
		t[11] !== I ? (M = function() {
			g(null), C(null), I.pop();
		}, t[11] = I, t[12] = M) : M = t[12];
		var w = M, A;
		e: {
			if (I.step === p.EmailCollection) {
				var F;
				t[13] !== n || t[14] !== N || t[15] !== a || t[16] !== i ? (F = u.jsx(r("WAWebBizAdCreationEmailCollectionDialog.react"), {
					adAccountID: n,
					loggerContext: a,
					onCancelClick: i,
					onSuccess: N
				}), t[13] = n, t[14] = N, t[15] = a, t[16] = i, t[17] = F) : F = t[17], A = F;
				break e;
			}
			if (I.step === p.Verification) {
				var O;
				t[18] !== d || t[19] !== w ? (O = d != null ? s._(
					/*BTDS*/
					"",
					[s._param("email", d), s._implicitParam("=m4", u.jsx(r("WDSTextualLink.react"), {
						onClick: w,
						textConfig: "Body2Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				) : s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
						onClick: w,
						textConfig: "Body2Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				), t[18] = d, t[19] = w, t[20] = O) : O = t[20];
				var B = O, W;
				t[21] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
					/*BTDS*/
					""
				), t[21] = W) : W = t[21];
				var q;
				t[22] !== n || t[23] !== B || t[24] !== $ || t[25] !== a || t[26] !== i || t[27] !== l || t[28] !== D ? (q = u.jsx(r("WAWebBizAdCreationEmailVerificationDialog.react"), {
					adAccountID: n,
					bodyText: B,
					loggerContext: a,
					onCancel: i,
					onRequestResend: $,
					onSuccess: l,
					titleText: W,
					verifyCode: D
				}), t[22] = n, t[23] = B, t[24] = $, t[25] = a, t[26] = i, t[27] = l, t[28] = D, t[29] = q) : q = t[29], A = q;
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + I.step);
		}
		var U;
		t[30] !== A ? (U = u.jsx(o("WAWebFlex.react").FlexColumn, { children: A }), t[30] = A, t[31] = U) : U = t[31];
		var V;
		return t[32] !== k || t[33] !== I || t[34] !== U ? (V = u.jsx(k, {
			flow: I,
			children: U
		}), t[32] = k, t[33] = I, t[34] = U, t[35] = V) : V = t[35], V;
	}
	l.default = g;
}), 226);
