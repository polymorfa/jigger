__d("WAWebNewsletterSuspendedConversationPanelBody.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebText_DONOTUSE.react",
	"WAWebWrapperSystemBubble.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = {
		linkColor: {
			color: "x1bvqhpb",
			textDecoration: "x1hl2dhg",
			$$css: !0
		},
		marginBottom2: {
			marginBottom: "x13m54ha",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.isAdminOrOwner, n = e.isGeosuspended;
		return n ? u.jsx(f, {}) : u.jsxs(r("WAWebWrapperSystemBubble.react"), {
			theme: "center",
			children: [u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
				level: "2",
				size: "16",
				weight: "bold",
				xstyle: p.marginBottom2,
				testid: "newsletter-suspended-conversation-panel-system-message-header",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				testid: "newsletter-suspended-conversation-panel-system-message-paragraph",
				children: t ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		var e = m(null), t = e[0], n = e[1];
		if (d(function() {
			async function e() {
				var e = await o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString({ isPreview: !1 });
				n(e);
			}
			e();
		}, []), t != null) return u.jsx(r("WAWebWrapperSystemBubble.react"), {
			theme: "center",
			children: u.jsxs(r("WAWebClickableLink.react"), {
				testid: "newsletter-geosuspended-conversation-panel-system-message-link",
				onClick: g,
				xstyle: p.linkColor,
				children: [u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					ariaLabel: t,
					testid: "newsletter-geosuspended-conversation-panel-system-message-paragraph",
					children: t
				}), u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, { children: s._(
					/*BTDS*/
					""
				) })]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterGeosuspendFaqUrl());
	}
	l.default = _;
}), 226);
