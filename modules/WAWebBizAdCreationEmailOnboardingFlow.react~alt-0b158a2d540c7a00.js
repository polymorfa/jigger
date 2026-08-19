__d("WAWebBizAdCreationEmailOnboardingFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAWebBizAdCreationEmailCollectionDialog.react",
	"WAWebBizAdCreationEmailVerificationDialog.react",
	"WAWebFlex.react",
	"WDSTextualLink.react",
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
		var t = e.adAccountID, n = e.loggerContext, a = e.onCancel, i = e.onComplete, l = m(null), c = l[0], g = l[1], h = m(null), y = h[0], C = h[1], b = r("useWAWebBizAdCreationConfirmEmailOnboarding")(), v = b[0], S = r("useWAWebBizAdCreationSendEmailVerificationCode")(), R = S[0], L = o("useWAWebFlow").useFlow(p.EmailCollection, {
			onEnd: a,
			transitions: o("useWAWebFlow").FlowTransitions.None
		}), E = L[0], k = L[1], I = d(async function(e) {
			if (c == null || y == null) return {
				error: s._(
					/*BTDS*/
					""
				),
				success: !1
			};
			var t = await v(c, e, y);
			return t.success ? { success: !0 } : {
				error: _(t.error),
				success: !1
			};
		}, [
			v,
			c,
			y
		]), T = d(async function() {
			if (c == null) return {
				error: s._(
					/*BTDS*/
					""
				),
				success: !1
			};
			var e = await R(c);
			return e.success ? { success: !0 } : {
				error: f(e.error),
				success: !1
			};
		}, [c, R]);
		if (k.step == null) return null;
		var D = function(t, n) {
			g(t), C(n), k.push(p.Verification);
		}, x = function() {
			g(null), C(null), k.pop();
		}, $;
		e: {
			if (k.step === p.EmailCollection) {
				$ = u.jsx(r("WAWebBizAdCreationEmailCollectionDialog.react"), {
					adAccountID: t,
					loggerContext: n,
					onCancelClick: a,
					onSuccess: D
				});
				break e;
			}
			if (k.step === p.Verification) {
				var P = c != null ? s._(
					/*BTDS*/
					"",
					[s._param("email", c), s._implicitParam("=m4", u.jsx(r("WDSTextualLink.react"), {
						onClick: x,
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
						onClick: x,
						textConfig: "Body2Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				$ = u.jsx(r("WAWebBizAdCreationEmailVerificationDialog.react"), {
					adAccountID: t,
					bodyText: P,
					loggerContext: n,
					onCancel: a,
					onRequestResend: T,
					onSuccess: i,
					titleText: s._(
						/*BTDS*/
						""
					),
					verifyCode: I
				});
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + k.step);
		}
		return u.jsx(E, {
			flow: k,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, { children: $ })
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
