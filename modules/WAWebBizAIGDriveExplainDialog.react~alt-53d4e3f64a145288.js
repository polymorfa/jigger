__d("WAWebBizAIGDriveExplainDialog.react", [
	"fbt",
	"WDSDialogBridge",
	"WDSIconIcDelete.react",
	"WDSIconIcPerson.react",
	"WDSIconIcThumbUp.react",
	"WDSIllustrationWdsPictoAi.react",
	"WDSIntroDialog.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = "https://faq.whatsapp.com/2110604303116586/", d = "https://developers.google.com/terms/api-services-user-data-policy", m = "https://developers.google.com/terms/api-services-user-data-policy#limited-use", p = "https://www.facebook.com/legal/meta-business-ai-terms", _ = "https://www.facebook.com/privacy/policy/";
	function f(e) {
		var t = e.onConnect;
		function n() {
			o("WDSDialogBridge").closeWDSDialog(), t();
		}
		return u.jsx(r("WDSIntroDialog.react"), {
			bullets: [
				{
					icon: r("WDSIconIcThumbUp.react"),
					text: s._(
						/*BTDS*/
						""
					)
				},
				{
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
				},
				{
					icon: r("WDSIconIcDelete.react"),
					text: s._(
						/*BTDS*/
						""
					)
				}
			],
			footnote: s._(
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
			),
			illustration: u.jsx("div", {
				className: "x6s0dn4 x78zum5 xl56j7k x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i",
				children: u.jsx(r("WDSIllustrationWdsPictoAi.react"), { "aria-hidden": !0 })
			}),
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			onPrimary: n,
			open: !0,
			primaryLabel: s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		return u.jsx("span", {
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
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
