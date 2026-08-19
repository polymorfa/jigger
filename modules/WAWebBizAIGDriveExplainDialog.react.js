__d("WAWebBizAIGDriveExplainDialog.react", [
	"fbt",
	"WDSDialogBridge",
	"WDSIconIcDelete.react",
	"WDSIconIcPerson.react",
	"WDSIconIcThumbUp.react",
	"WDSIllustrationWdsPictoAi.react",
	"WDSIntroDialog.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = "https://faq.whatsapp.com/2110604303116586/", d = "https://developers.google.com/terms/api-services-user-data-policy", m = "https://developers.google.com/terms/api-services-user-data-policy#limited-use", p = "https://www.facebook.com/legal/meta-business-ai-terms", _ = "https://www.facebook.com/privacy/policy/";
	function f(e) {
		var t = o("react-compiler-runtime").c(11), n = e.onConnect, a;
		t[0] !== n ? (a = function() {
			o("WDSDialogBridge").closeWDSDialog(), n();
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			icon: r("WDSIconIcThumbUp.react"),
			text: s._(
				/*BTDS*/
				""
			)
		}, t[2] = l) : l = t[2];
		var p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = {
			icon: r("WDSIconIcPerson.react"),
			text: s._(
				/*BTDS*/
				"",
				[s._param("learnMoreLink", u.jsx(r("WDSTextualLink.react"), {
					href: c,
					testid: "biz-ai-gdrive-explain-learn-more",
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}, t[3] = p) : p = t[3];
		var _, f, h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = [
			l,
			p,
			{
				icon: r("WDSIconIcDelete.react"),
				text: s._(
					/*BTDS*/
					""
				)
			}
		], f = s._(
			/*BTDS*/
			"",
			[
				s._param("googleUserDataPolicyLink", u.jsx(r("WDSTextualLink.react"), {
					href: d,
					testid: "biz-ai-gdrive-explain-google-user-data-policy",
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._param("limitedUseRequirementsLink", u.jsx(r("WDSTextualLink.react"), {
					href: m,
					testid: "biz-ai-gdrive-explain-limited-use",
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._param("metaTermsNotice", u.jsx(g, {}))
			]
		), h = u.jsx("div", {
			className: "x6s0dn4 x78zum5 xl56j7k x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i",
			children: u.jsx(r("WDSIllustrationWdsPictoAi.react"), { "aria-hidden": !0 })
		}), t[4] = _, t[5] = f, t[6] = h) : (_ = t[4], f = t[5], h = t[6]);
		var y, C;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), C = s._(
			/*BTDS*/
			""
		), t[7] = y, t[8] = C) : (y = t[7], C = t[8]);
		var b;
		return t[9] !== i ? (b = u.jsx(r("WDSIntroDialog.react"), {
			bullets: _,
			footnote: f,
			illustration: h,
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			onPrimary: i,
			open: !0,
			primaryLabel: y,
			title: C
		}), t[9] = i, t[10] = b) : b = t[10], b;
	}
	function g() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx("span", {
			className: "x1lliihq x98l61r x1ua1l7f",
			children: s._(
				/*BTDS*/
				"",
				[s._param("termsLink", u.jsx(r("WDSTextualLink.react"), {
					href: p,
					testid: "biz-ai-gdrive-explain-meta-terms",
					children: s._(
						/*BTDS*/
						""
					)
				})), s._param("policiesLink", u.jsx(r("WDSTextualLink.react"), {
					href: _,
					testid: "biz-ai-gdrive-explain-meta-policies",
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}), e[0] = t) : t = e[0], t;
	}
	l.default = f;
}), 226);
