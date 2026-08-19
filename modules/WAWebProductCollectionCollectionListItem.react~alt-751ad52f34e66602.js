__d("WAWebProductCollectionCollectionListItem.react", [
	"fbt",
	"WAWebCellFrame.react",
	"WAWebClickableLink.react",
	"WAWebEmojiText.react",
	"WAWebProductCollection",
	"WAWebStopEvent",
	"WAWebText.react",
	"WAWebUtilsLogQplEvents",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { collectionName: {
		lineHeight: "xdod15v",
		$$css: !0
	} };
	function d(e) {
		var t = e.allItems, n = e.collection, a = e.onSeeAll, i, l;
		n ? (l = n.id, i = n.name) : t && (i = s._(
			/*BTDS*/
			""
		));
		var d = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			xstyle: c.collectionName,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: i,
				ellipsify: !0,
				titlify: !0
			})
		});
		function p(e) {
			o("WAWebStopEvent").stopEvent(e), o("WAWebUtilsLogQplEvents").qplStartCollectionViewAll("Catalog"), a && n ? a(n) : a && a();
		}
		var _ = void 0;
		if (n) switch (n.reviewStatus) {
			case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED:
				_ = u.jsx("span", {
					className: "x30a034",
					children: s._(
						/*BTDS*/
						""
					)
				});
				break;
		}
		return u.jsx(r("WAWebCellFrame.react"), {
			primary: d,
			secondary: _,
			detail: u.jsx(m, {
				name: i,
				onClick: p
			}),
			theme: "collection-header",
			idle: !0,
			className: "x1gx403c x1y332i5"
		}, l);
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.name, n = e.onClick;
		return u.jsx(r("WAWebClickableLink.react"), {
			onClick: n,
			className: "xdod15v",
			title: s._(
				/*BTDS*/
				"",
				[s._param("collectionName", t)]
			),
			tabIndex: 0,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
