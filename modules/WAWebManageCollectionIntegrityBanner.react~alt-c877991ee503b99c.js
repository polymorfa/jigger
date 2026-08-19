__d("WAWebManageCollectionIntegrityBanner.react", [
	"fbt",
	"VultureJSDeadComponent.react",
	"WAWebClickableLink.react",
	"WAWebModalManager",
	"WAWebProductCatalogCatalogConstants",
	"WAWebProductCollection",
	"WAWebProductCollectionCollectionsRejectTranslations.react",
	"WAWebThemeContext",
	"WDSIconIcInfo.react",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"vulture"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginBottom10: {
		marginBottom: "xyorhqc",
		$$css: !0
	} }, m = {
		rejectedBannerWithAppeal: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "xl56j7k",
			height: "xb2rc7v",
			minHeight: "x1ba4aug",
			marginTop: "x1y332i5",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x13a8xbf",
			lineHeight: "xdod15v",
			color: "x1bvqhpb",
			backgroundColor: "xhe2ndm",
			$$css: !0
		},
		rejectedBannerDarkBackground: {
			backgroundColor: "x2fr4xw",
			$$css: !0
		}
	}, p = 10;
	function _() {
		return r("vulture")("s9AxrI4ENfIpb3a34jFmDNWLhBE="), c.jsx("div", {
			className: "x10l6tqk x1kjyjoh x30a034 x1mzt3pk",
			children: c.jsx(r("WDSIconIcInfo.react"), {})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n, a = t.collection, i = t.onAppeal, l = t.onRename;
		r("vulture")("15Go9qbXpHy2dA5fkusBEnfkZrw=");
		var u = ((n = a.rejectReason) != null ? n : "other_violation").toLowerCase(), p = o("WAWebProductCollectionCollectionsRejectTranslations.react").getRejectedCollectionCopy(u, a.commerceUrl), f = o("WAWebThemeContext").useIsDarkTheme(), g = c.jsx(r("WAWebClickableLink.react"), {
			onClick: l,
			children: s._(
				/*BTDS*/
				""
			)
		});
		if (a.canAppeal) {
			var h = c.jsx(r("WAWebClickableLink.react"), {
				onClick: i,
				children: s._(
					/*BTDS*/
					""
				)
			}), y = s._(
				/*BTDS*/
				"",
				[s._param("rename_collection_link", g), s._param("request_another_review_link", h)]
			);
			return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.rejectedBannerWithAppeal, o("WDSPaddings.stylex").wdsPaddings.paddingEnd40, o("WDSPaddings.stylex").wdsPaddings.paddingStart20, d.marginBottom10, f && m.rejectedBannerDarkBackground), { children: [
				p.first,
				c.jsx("br", {}),
				y,
				c.jsx(_, {})
			] }));
		}
		var C = s._(
			/*BTDS*/
			"",
			[s._param("rename_collection_link", g)]
		);
		return c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x78zum5 xdt5ytf xl56j7k xb2rc7v x1ba4aug x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb xhe2ndm" },
			1: { className: "x78zum5 xdt5ytf xl56j7k xb2rc7v x1ba4aug x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb x2fr4xw" }
		}[!!f << 0], { children: [
			p.second,
			c.jsx("br", {}),
			C,
			c.jsx(_, {})
		] }));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED ? o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT * 2 + p : o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT + p;
	}
	function h(e) {
		var t = e.collection, n = e.onEditCollection, a = function() {
			n == null || n(t);
		}, i = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebBizAppealCollectionPopup" }));
		};
		switch (t.reviewStatus) {
			case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING: return c.jsxs("div", {
				className: "x78zum5 x6s0dn4 xjp8j0k x1ba4aug xexx8yu xh7rcd0 x18d9i69 x106a9eq x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb x1mzt3pk x1k43qru",
				children: [s._(
					/*BTDS*/
					""
				), c.jsx("div", {
					className: "x10l6tqk x2ss2xj",
					children: c.jsx(r("WDSIconIcInfo.react"), {})
				})]
			});
			case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED: return c.jsx(f, {
				collection: t,
				onRename: a,
				onAppeal: i
			});
			default: return null;
		}
	}
	h.displayName = h.name + " [from " + i.id + "]", l.getCollectionIntegrityHeight = g, l.CollectionIntegrityBanner = h;
}), 226);
