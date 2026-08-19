__d("WAWebSubgroupSuggestionsBanner.react", [
	"fbt",
	"WAWebCmd",
	"WAWebConversationBanner.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebGroupType",
	"WAWebNux",
	"WAWebSubgroupsNuxIcon.react",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUimUie.react",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = { paddingInlineEnd18: {
		paddingInlineEnd: "x1x5flf6",
		$$css: !0
	} }, m = {
		banner: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		icon: {
			color: "x11askks",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i, l = a.chat, u = a.onClose, p = a.subgroupSuggestionsCount, _ = function() {
			var e, t = (e = l.groupMetadata) == null ? void 0 : e.parentGroup;
			t && (o("WAWebCmd").Cmd.openCommunityPendingGroupsDrawer(t), u());
		};
		return c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "SubgroupSuggestionsBanner",
			escapable: !0,
			children: c.jsx(r("WAWebConversationBanner.react"), {
				ref: n,
				xstyle: m.banner,
				onClick: _,
				onClose: u,
				children: c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [c.jsx(r("WAWebFlexItem.react"), {
						xstyle: d.paddingInlineEnd18,
						children: c.jsx(o("WAWebSubgroupsNuxIcon.react").SubgroupsNuxIcon, {
							xstyle: m.icon,
							height: 20
						})
					}), c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
						as: "span",
						children: (i = s._plural(p, "group_suggestions"), s._(
							/*BTDS*/
							"",
							[i, s._implicitParam("=m0", c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
								color: "accent",
								weight: "semibold",
								children: s._(
									/*BTDS*/
									"",
									[i]
								)
							}))]
						))
					}) })]
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t, n = r("useWAWebEventTargetValue")(e == null || (t = e.groupMetadata) == null ? void 0 : t.subgroupSuggestions, [
			"add",
			"remove",
			"reset"
		], function() {
			var t, n;
			return (t = e == null || (n = e.groupMetadata) == null ? void 0 : n.getSubgroupSuggestions().length) != null ? t : 0;
		});
		return n;
	}
	function f(e) {
		var t, n, a, i = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat(), l = _(i), s = i != null && i.id ? i.id.toString() : "", u = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(s), c = r("useWAWebEventTargetValue")((n = e.groupMetadata) == null ? void 0 : n.participants, [
			"bulk_add",
			"bulk_remove",
			"reset",
			"change:isAdmin"
		], function() {
			var t;
			return !!((t = e.groupMetadata) != null && t.participants.iAmAdmin());
		}), d = r("useWAWebNux")(u), m = d[0], p = d[1], f = ((a = e.groupMetadata) == null ? void 0 : a.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !!i && l > 0 && c && m;
		return [
			f,
			p,
			l
		];
	}
	l.SubgroupSuggestionsBanner = p, l.useSubgroupSuggestionsBanner = f;
}), 226);
