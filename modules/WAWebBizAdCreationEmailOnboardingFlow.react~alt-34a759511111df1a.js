__d("WAWebBizAdCreationEmailOnboardingFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAWebBizAdCreationEmailCollectionDialog.react",
	"WAWebBizAdCreationEmailVerificationDialog.react",
	"WAWebFlex.react",
	"WDSTextualLink.react",
	"asyncToGeneratorRuntime",
	"react",
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
		var t = e.adAccountID, a = e.loggerContext, i = e.onCancel, l = e.onComplete, c = m(null), g = c[0], h = c[1], y = m(null), C = y[0], b = y[1], v = r("useWAWebBizAdCreationConfirmEmailOnboarding")(), S = v[0], R = r("useWAWebBizAdCreationSendEmailVerificationCode")(), L = R[0], E = o("useWAWebFlow").useFlow(p.EmailCollection, {
			onEnd: i,
			transitions: o("useWAWebFlow").FlowTransitions.None
		}), k = E[0], I = E[1], T = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (g == null || C == null) return {
					error: s._(
						/*BTDS*/
						""
					),
					success: !1
				};
				var t = yield S(g, e, C);
				return t.success ? { success: !0 } : {
					error: _(t.error),
					success: !1
				};
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [
			S,
			g,
			C
		]), D = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (g == null) return {
				error: s._(
					/*BTDS*/
					""
				),
				success: !1
			};
			var e = yield L(g);
			return e.success ? { success: !0 } : {
				error: f(e.error),
				success: !1
			};
		}), [g, L]);
		if (I.step == null) return null;
		var x = function(t, n) {
			h(t), b(n), I.push(p.Verification);
		}, $ = function() {
			h(null), b(null), I.pop();
		}, P;
		e: {
			if (I.step === p.EmailCollection) {
				P = u.jsx(r("WAWebBizAdCreationEmailCollectionDialog.react"), {
					adAccountID: t,
					loggerContext: a,
					onCancelClick: i,
					onSuccess: x
				});
				break e;
			}
			if (I.step === p.Verification) {
				var N = g != null ? s._(
					/*BTDS*/
					"",
					[s._param("email", g), s._implicitParam("=m4", u.jsx(r("WDSTextualLink.react"), {
						onClick: $,
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
						onClick: $,
						textConfig: "Body2Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				P = u.jsx(r("WAWebBizAdCreationEmailVerificationDialog.react"), {
					adAccountID: t,
					bodyText: N,
					loggerContext: a,
					onCancel: i,
					onRequestResend: D,
					onSuccess: l,
					titleText: s._(
						/*BTDS*/
						""
					),
					verifyCode: T
				});
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + I.step);
		}
		return u.jsx(k, {
			flow: I,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, { children: P })
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
