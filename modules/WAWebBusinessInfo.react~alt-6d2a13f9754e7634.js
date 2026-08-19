__d("WAWebBusinessInfo.react", [
	"fbt",
	"WALogger",
	"WAWebBizGetProfileShimlinksQuery",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessHours.react",
	"WAWebBusinessLogEvents",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebChatInfoDrawerSection.react",
	"WAWebDrawerContext",
	"WAWebEmojiText.react",
	"WAWebExpandableText.react",
	"WAWebExternalLink.react",
	"WAWebMap.react",
	"WAWebProductCatalogContext",
	"WAWebStopEvent",
	"WAWebURLUtils",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useContext, m = 590, p = 132, _ = 200, f = { paddingVert16: {
		paddingTop: "x1p57kb1",
		paddingBottom: "xvpt6g3",
		$$css: !0
	} };
	function g(t) {
		var n = t.businessProfile, a = t.showBusinessDetails, i = a === void 0 ? !0 : a, l = t.showDescription, u = l === void 0 ? !0 : l, g = o("useWAWebModelValues").useModelValues(n, [
			"description",
			"address",
			"latitude",
			"longitude",
			"website",
			"email",
			"businessHours",
			"isProfileLinked",
			"coverPhoto",
			"googlePlace",
			"googlePlaceId",
			"showGoogleInfo"
		]), h = g.address, y = g.businessHours, C = g.coverPhoto, b = g.description, v = g.email, S = g.googlePlace, R = g.isProfileLinked, L = g.latitude, E = g.longitude, k = g.showGoogleInfo, I = g.website, T = d(o("WAWebDrawerContext").DrawerContext), D = o("WAWebProductCatalogContext").getProductCatalogSessionId(T), x = b;
		n.id.isCAPISupportAccount() && (x = s._(
			/*BTDS*/
			""
		).toString());
		var $ = [];
		u && x != null && $.push(c.jsx("div", {
			className: "x1jchvi3 xdod15v x14ug900",
			children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
				text: x,
				textLimit: _,
				children: function(t) {
					var e = t.textLimit;
					return c.jsx(o("WAWebEmojiText.react").EmojiText, {
						className: "x1o2sk6j",
						selectable: !0,
						direction: "auto",
						text: x,
						textLimit: e,
						ellipsify: !0,
						multiline: !0,
						inferLinesDirection: !0,
						breakWord: !0
					});
				}
			})
		}));
		var P = i && o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled() && o("WAWebBusinessProfileUtils").isGoogleLinked(n) && k === !0;
		i && !P && y != null && $.push(c.jsx("div", {
			className: "x1jchvi3 xdod15v x14ug900",
			children: c.jsx(r("WAWebBusinessHours.react"), {
				businessHours: y,
				isProfileLinked: R,
				hasCoverPhoto: !!C
			})
		}));
		var N = P ? S == null ? void 0 : S.formattedAddress : null, M = N != null ? N : h;
		i && !P && M != null && $.push(c.jsx("div", {
			className: "x1jchvi3 xdod15v x14ug900",
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
				selectable: !0,
				direction: "auto",
				text: M
			})
		})), i && !P && L != null && E != null && $.push(c.jsx("div", {
			className: "x1jchvi3 xdod15v x14ug900 x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 xefnzgg x1h5wmu3",
			children: c.jsx(r("WAWebMap.react"), {
				lat: L,
				lng: E,
				name: h || "",
				width: m,
				height: p,
				onClick: function() {
					return o("WAWebBusinessLogEvents").logLocationClick(D, R, !!C);
				},
				testid: "business-info-map"
			})
		})), i && v != null && $.push(c.jsx("div", {
			className: "x1jchvi3 xdod15v x14ug900",
			children: c.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: "mailto:" + v,
				onClick: function() {
					return o("WAWebBusinessLogEvents").logEmailClick({
						catalogSessionId: D,
						hasCoverPhoto: !!C,
						isProfileLinked: R
					});
				},
				testid: "business-info-email",
				children: v
			})
		}));
		var w = P ? S == null ? void 0 : S.websiteUri : null, A = w != null ? [{ url: w }] : I;
		if (i && !P && A != null && A.length > 0) {
			var F = function(a) {
				var t = a.e, i = a.signedShimmedUrl, l = a.url;
				o("WAWebStopEvent").stopEvent(t), o("WAWebBusinessLogEvents").logWebsiteClick(D, R, !!C);
				var s = r("WAWebURLUtils").toMaliciousSiteRedirect(l);
				if (i != null) {
					o("WAWebExternalLink.react").openExternalLink(i);
					return;
				}
				o("WAWebBizGetProfileShimlinksQuery").getProfileShimlinks(o("WAWebBusinessProfileCollection").BusinessProfileCollection.convertBusinessProfileIdForLidMigration(n.id.toString()).toString()).then(function(e) {
					var t;
					if (e.type !== "success") {
						o("WAWebExternalLink.react").openExternalLink(s);
						return;
					}
					e.type;
					var n = (t = e.websites.find(function(e) {
						return e.url === l;
					})) == null ? void 0 : t.signedShimmedUrl;
					n != null ? o("WAWebExternalLink.react").openExternalLink(n) : o("WAWebExternalLink.react").openExternalLink(s);
				}).catch(function() {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["BusinessInfo: failed to fetch signed shimmed link"]))), o("WAWebExternalLink.react").openExternalLink(s);
				});
			};
			$.push(c.jsx("div", {
				className: "x1jchvi3 xdod15v x14ug900",
				children: A.map(function(e) {
					var t = e.signedShimmedUrl, n = e.url;
					return c.jsx("div", { children: c.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: n,
						onClick: function(r) {
							return F({
								e: r,
								url: n,
								signedShimmedUrl: t
							});
						},
						testid: "business-info-website",
						children: n
					}) }, n);
				})
			}));
		}
		return $.length === 0 ? null : c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: f.paddingVert16,
			children: $.map(function(e, t) {
				return c.jsx("div", babelHelpers.extends({}, {
					0: {},
					1: { className: "x9u28bd" }
				}[(t !== 0) << 0], { children: e }), t);
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
