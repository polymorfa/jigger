__d("WAWebMediaHubEmptyGalleryEntryPoint.react", [
	"fbt",
	"$InternalEnum",
	"WAWebABProps",
	"WAWebMediaHubLogger",
	"WAWebMediaHubModalLoadable",
	"WAWebModalManager",
	"WAWebWamEnumActionCode",
	"WAWebWamEnumEntryPointType",
	"WDSButton.react",
	"WDSIconIcFilter.react",
	"WDSText.react",
	"WDSTextLayout.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { button: {
		marginInlineStart: "x1uvdrpn",
		marginInlineEnd: "xviac27",
		$$css: !0
	} }, d = n("$InternalEnum")({
		MEDIA: "media",
		DOCS: "docs",
		LINKS: "links"
	}), m = function(t) {
		o("WAWebMediaHubLogger").logMediaHubAction({
			action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MEDIA_HUB,
			entrypoint: o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE.CONTACT_INFO
		}), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebMediaHubModalLoadable").MediaHubModalLoadable, { initialTab: t }));
	};
	function p(e) {
		return e === d.MEDIA ? s._(
			/*BTDS*/
			""
		) : e === d.DOCS ? s._(
			/*BTDS*/
			""
		) : e === d.LINKS ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function _(e) {
		return e === d.MEDIA ? s._(
			/*BTDS*/
			""
		) : e === d.DOCS ? s._(
			/*BTDS*/
			""
		) : e === d.LINKS ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function f(e) {
		return e === d.MEDIA ? s._(
			/*BTDS*/
			""
		) : e === d.DOCS ? s._(
			/*BTDS*/
			""
		) : e === d.LINKS ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function g(e) {
		var t = e.tabName;
		return o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? u.jsx("div", {
			className: "x78zum5 xdt5ytf x5yr21d xl56j7k x6s0dn4 x2b8uid x1qvou4u x1s70e7g",
			children: u.jsx(r("WDSTextLayout.react"), {
				headline: p(t),
				body: _(t),
				actionsWidth: "hug",
				primaryAction: {
					label: f(t),
					onPress: function() {
						return m(t);
					},
					variant: "borderless",
					Icon: r("WDSIconIcFilter.react")
				},
				testid: "media-hub-empty-gallery"
			})
		}) : u.jsxs("div", {
			className: "x78zum5 xdt5ytf x5yr21d xl56j7k x6s0dn4 x2b8uid x1qvou4u x1s70e7g",
			children: [u.jsxs("div", { children: [u.jsx(r("WDSText.react"), {
				type: "Body1Emphasized",
				colorName: "contentDeemphasized",
				children: p(t)
			}), u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: _(t)
			})] }), u.jsx(r("WDSButton.react"), {
				onPress: function() {
					return m(t);
				},
				Icon: r("WDSIconIcFilter.react"),
				size: "small",
				variant: "borderless",
				widthMode: "fit",
				xstyle: c.button,
				label: f(t)
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.MediaHubTabs = d, l.WAWebMediaHubEmptyGalleryEntryPoint = g;
}), 226);
