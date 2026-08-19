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
	"react-compiler-runtime",
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
		var n, a = o("react-compiler-runtime").c(14), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var u = i, p = u.chat, _ = u.onClose, f = u.subgroupSuggestionsCount, g;
		if (a[3] !== ((n = p.groupMetadata) == null ? void 0 : n.parentGroup) || a[4] !== _) {
			var h;
			g = function() {
				var e, t = (e = p.groupMetadata) == null ? void 0 : e.parentGroup;
				t && (o("WAWebCmd").Cmd.openCommunityPendingGroupsDrawer(t), _());
			}, a[3] = (h = p.groupMetadata) == null ? void 0 : h.parentGroup, a[4] = _, a[5] = g;
		} else g = a[5];
		var y = g, C;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsx(r("WAWebFlexItem.react"), {
			xstyle: d.paddingInlineEnd18,
			children: c.jsx(o("WAWebSubgroupsNuxIcon.react").SubgroupsNuxIcon, {
				xstyle: m.icon,
				height: 20
			})
		}), a[6] = C) : C = a[6];
		var b;
		if (a[7] !== f) {
			var v;
			b = c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [C, c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
					as: "span",
					children: (v = s._plural(f, "group_suggestions"), s._(
						/*BTDS*/
						"",
						[v, s._implicitParam("=m0", c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
							color: "accent",
							weight: "semibold",
							children: s._(
								/*BTDS*/
								"",
								[v]
							)
						}))]
					))
				}) })]
			}), a[7] = f, a[8] = b;
		} else b = a[8];
		var S;
		return a[9] !== y || a[10] !== _ || a[11] !== l || a[12] !== b ? (S = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "SubgroupSuggestionsBanner",
			escapable: !0,
			children: c.jsx(r("WAWebConversationBanner.react"), {
				ref: l,
				xstyle: m.banner,
				onClick: y,
				onClose: _,
				children: b
			})
		}), a[9] = y, a[10] = _, a[11] = l, a[12] = b, a[13] = S) : S = a[13], S;
	}
	function _(e) {
		var t, n = o("react-compiler-runtime").c(3), a;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [
			"add",
			"remove",
			"reset"
		], n[0] = a) : a = n[0];
		var i;
		n[1] !== (e == null ? void 0 : e.groupMetadata) ? (i = function() {
			var t, n;
			return (t = e == null || (n = e.groupMetadata) == null ? void 0 : n.getSubgroupSuggestions().length) != null ? t : 0;
		}, n[1] = e == null ? void 0 : e.groupMetadata, n[2] = i) : i = n[2];
		var l = r("useWAWebEventTargetValue")(e == null || (t = e.groupMetadata) == null ? void 0 : t.subgroupSuggestions, a, i);
		return l;
	}
	function f(e) {
		var t, n, a, i = o("react-compiler-runtime").c(11), l;
		if (i[0] !== e.groupMetadata) {
			var s;
			l = (s = e.groupMetadata) == null ? void 0 : s.getParentGroupChat(), i[0] = e.groupMetadata, i[1] = l;
		} else l = i[1];
		var u = l, c = _(u), d;
		if (i[2] !== u) {
			var m = u != null && u.id ? u.id.toString() : "";
			d = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(m), i[2] = u, i[3] = d;
		} else d = i[3];
		var p = d, f;
		i[4] === Symbol.for("react.memo_cache_sentinel") ? (f = [
			"bulk_add",
			"bulk_remove",
			"reset",
			"change:isAdmin"
		], i[4] = f) : f = i[4];
		var g;
		if (i[5] !== ((t = e.groupMetadata) == null ? void 0 : t.participants)) {
			var h;
			g = function() {
				var t;
				return !!((t = e.groupMetadata) != null && t.participants.iAmAdmin());
			}, i[5] = (h = e.groupMetadata) == null ? void 0 : h.participants, i[6] = g;
		} else g = i[6];
		var y = r("useWAWebEventTargetValue")((n = e.groupMetadata) == null ? void 0 : n.participants, f, g), C = r("useWAWebNux")(p), b = C[0], v = C[1], S = ((a = e.groupMetadata) == null ? void 0 : a.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !!u && c > 0 && y && b, R;
		return i[7] !== S || i[8] !== c || i[9] !== v ? (R = [
			S,
			v,
			c
		], i[7] = S, i[8] = c, i[9] = v, i[10] = R) : R = i[10], R;
	}
	l.SubgroupSuggestionsBanner = p, l.useSubgroupSuggestionsBanner = f;
}), 226);
