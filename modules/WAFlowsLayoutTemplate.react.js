__d("WAFlowsLayoutTemplate.react", [
	"JSResourceForInteraction",
	"WAFlowsComponentTemplate.react",
	"WAFlowsSingleColumnLayoutTemplate.react",
	"WAFlowsTypes",
	"react",
	"react-loadable"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo, c = r("react-loadable")({
		loader: function() {
			return r("JSResourceForInteraction")("WAFlowsCartLayoutTemplate.react").__setRef("WAFlowsLayoutTemplate.react").load();
		},
		loading: function(t) {
			return s.jsx(s.Fragment, {});
		}
	}), d = r("react-loadable")({
		loader: function() {
			return r("JSResourceForInteraction")("WAFlowsItemListLayoutTemplate.react").__setRef("WAFlowsLayoutTemplate.react").load();
		},
		loading: function(t) {
			return s.jsx(s.Fragment, {});
		}
	}), m = r("react-loadable")({
		loader: function() {
			return r("JSResourceForInteraction")("WAFlowsItemDetailLayoutTemplate.react").__setRef("WAFlowsLayoutTemplate.react").load();
		},
		loading: function(t) {
			return s.jsx(s.Fragment, {});
		}
	}), p = r("react-loadable")({
		loader: function() {
			return r("JSResourceForInteraction")("WAFlowsCategoryListLayoutTemplate.react").__setRef("WAFlowsLayoutTemplate.react").load();
		},
		loading: function(t) {
			return s.jsx(s.Fragment, {});
		}
	});
	function _(e) {
		var t = e.layout, n = e.screenID, a = s.jsx(r("WAFlowsSingleColumnLayoutTemplate.react"), {}), i = u(function() {
			var e;
			return {
				type: "Form",
				name: n + "_form",
				children: [].concat((e = t == null ? void 0 : t.children) != null ? e : [])
			};
		}, [n, t == null ? void 0 : t.children]);
		if (t) {
			var l = t.type;
			switch (l) {
				case o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN:
					if (t.children != null) return s.jsx(r("WAFlowsComponentTemplate.react"), {
						screenID: n,
						component: i
					}, n + "_form");
					break;
				case o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST: return s.jsx(p, {
					layout: t,
					screenID: n
				});
				case o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL: return s.jsx(m, {
					layout: t,
					screenID: n
				});
				case o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST: return s.jsx(d, {
					layout: t,
					screenID: n
				});
				case o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART: return s.jsx(c, {
					layout: t,
					screenID: n
				});
			}
		}
		return a;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
