__d("WAWebSMBTable.story", [
	"fbt",
	"WAWebFrontendContactGetters",
	"WAWebSMBTable.react",
	"WAWebShowroomStory.react",
	"WAWebShowroomUtils",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = [
		{
			id: "1",
			name: "Alice Johnson",
			phone: "+1 (555) 123-4567"
		},
		{
			id: "2",
			name: "Bob Smith",
			phone: "+1 (555) 234-5678"
		},
		{
			id: "3",
			name: "Charlie Davis",
			phone: "+1 (555) 345-6789"
		},
		{
			id: "4",
			name: "Dana Lee",
			phone: "+1 (555) 456-7890"
		}
	], m = [{
		id: "draft-1",
		name: "Draft Contact",
		phone: "Pending"
	}];
	function p() {
		var e = o("WAWebShowroomUtils").getFilteredContacts().slice(0, 5);
		return e.length === 0 ? d : e.map(function(e) {
			return {
				id: e.id.toString(),
				name: o("WAWebFrontendContactGetters").getDisplayName(e),
				phone: o("WAWebFrontendContactGetters").getFormattedPhoneAndType(e).displayName
			};
		});
	}
	function _(e) {
		return e.id;
	}
	function f(e) {
		var t = e.children;
		return u.jsx("div", {
			className: "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x6ikm8r x10wlt62 xh8yej3",
			children: t
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		return [{
			key: "name",
			header: s._(
				/*BTDS*/
				""
			),
			cell: function(t) {
				var e = t.item;
				return u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: e.name
				});
			},
			width: {
				type: "proportional",
				value: 3
			}
		}, {
			key: "phone",
			header: s._(
				/*BTDS*/
				""
			),
			cell: function(t) {
				var e = t.item;
				return u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: e.phone
				});
			},
			width: {
				type: "proportional",
				value: 2
			}
		}];
	}
	function h() {
		var e = p(), t = c(null), n = t[0], o = t[1], a = e.find(function(e) {
			return e.id === n;
		});
		return u.jsxs(u.Fragment, { children: [u.jsx("div", {
			className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x1e56ztr x1y1aw1k xwib8y2 x1g0dm76 xpdmqnj",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: a != null ? s._(
					/*BTDS*/
					"",
					[s._param("contact-name", a.name)]
				) : s._(
					/*BTDS*/
					""
				)
			})
		}), u.jsx(f, { children: u.jsx(r("WAWebSMBTable.react"), {
			columns: g(),
			items: e,
			getItemKey: _,
			onRowClick: function(t) {
				return o(t.id);
			}
		}) })] });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		var e, t, n = p(), o = c((e = (t = n[0]) == null ? void 0 : t.id) != null ? e : ""), a = o[0], i = o[1];
		return u.jsx(f, { children: u.jsx(r("WAWebSMBTable.react"), {
			columns: g(),
			items: n,
			getItemKey: _,
			onRowClick: function(t) {
				return i(t.id);
			},
			selectedKey: a
		}) });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = {
		storyName: "WAWebSMBTable",
		section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
		component: r("WAWebSMBTable.react"),
		description: "The component <b>&lt;WAWebSMBTable /&gt;</b> is the standard lightweight table for SMB / Business surfaces (Customer Manager, Business Broadcasts, Ad Management). It renders a sticky header row followed by data rows driven by a <b>columns</b> definition.<br/><br/>Key props: <b>columns</b> (each column has a <b>key</b>, a <b>header</b> Fbt or a custom <b>renderHeader</b>, a <b>cell</b> renderer, and a <b>width</b> that is <i>pixel</i>, <i>proportional</i>, or <i>fill</i>), <b>items</b>, and <b>getItemKey</b>. Interaction props: <b>onRowClick</b> (keyboard-accessible rows) and <b>selectedKey</b> to highlight a row. <b>pinnedItems</b> renders rows above the regular data rows. Pagination props: <b>isLoadingMore</b>, <b>hasMore</b>, and <b>onLoadMore</b> drive infinite scroll via an IntersectionObserver sentinel. A column may set <b>stickyEnd</b> to pin a trailing action column during horizontal scroll (not supported together with <b>renderRow</b>).<br/><br/>The examples below show the first few entries from your <b>ContactCollection</b> so the rows reflect real data. If no contacts are available, a small static set is used as a fallback.",
		examples: [
			{
				title: "Basic table with headers",
				description: "Minimal table: pass columns, items, and getItemKey. Each column declares a header (Fbt) and a cell renderer. Proportional widths share the row.",
				example: function() {
					return u.jsx(f, { children: u.jsx(r("WAWebSMBTable.react"), {
						columns: g(),
						items: p(),
						getItemKey: _
					}) });
				}
			},
			{
				title: "Mixed column widths",
				description: "All three width types in one table: pixel (fixed 160px), proportional (shares space by ratio), and fill (takes the remaining space).",
				example: function() {
					var e = [
						{
							key: "name",
							header: s._(
								/*BTDS*/
								""
							),
							cell: function(t) {
								var e = t.item;
								return u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									children: e.name
								});
							},
							width: {
								type: "pixel",
								px: 160
							}
						},
						{
							key: "phone",
							header: s._(
								/*BTDS*/
								""
							),
							cell: function(t) {
								var e = t.item;
								return u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: e.phone
								});
							},
							width: {
								type: "proportional",
								value: 2
							}
						},
						{
							key: "actions",
							header: s._(
								/*BTDS*/
								""
							),
							cell: function() {
								return u.jsx(r("WDSText.react"), {
									type: "Body2Emphasized",
									colorName: "contentActionDefault",
									children: s._(
										/*BTDS*/
										""
									)
								});
							},
							width: { type: "fill" }
						}
					];
					return u.jsx(f, { children: u.jsx(r("WAWebSMBTable.react"), {
						columns: e,
						items: p(),
						getItemKey: _
					}) });
				}
			},
			{
				title: "Clickable rows",
				description: "Passing onRowClick makes rows interactive: they show a pointer cursor, a hover highlight, and are keyboard-accessible (focusable, Enter / Space activate). Click a row to update the banner above the table.",
				example: function() {
					return u.jsx(h, {});
				}
			},
			{
				title: "Selected row",
				description: "With onRowClick set, selectedKey (matched against getItemKey) highlights one row as selected. The first row starts selected; clicking another row moves the selection.",
				example: function() {
					return u.jsx(y, {});
				}
			},
			{
				title: "Pinned items",
				description: "pinnedItems renders above the regular data rows (e.g. draft entries that should always stay at the top regardless of pagination or sorting).",
				example: function() {
					return u.jsx(f, { children: u.jsx(r("WAWebSMBTable.react"), {
						columns: g(),
						items: p(),
						getItemKey: _,
						pinnedItems: m
					}) });
				}
			},
			{
				title: "Loading more",
				description: "isLoadingMore renders a centered spinner below the rows during pagination. Pair with hasMore and onLoadMore to drive infinite scroll: the table observes a bottom sentinel and calls onLoadMore when it scrolls into view.",
				example: function() {
					return u.jsx(f, { children: u.jsx(r("WAWebSMBTable.react"), {
						columns: g(),
						items: p().slice(0, 2),
						getItemKey: _,
						isLoadingMore: !0
					}) });
				}
			},
			{
				title: "Sticky end column",
				description: "A column with stickyEnd pins itself to the inline-end (right in LTR) edge while the rest of the row scrolls horizontally. Use for trailing action columns. This example intentionally overflows so you can scroll the table sideways and see the \"Actions\" column stay put. Note: stickyEnd is not supported together with renderRow.",
				example: function() {
					var e = [
						{
							key: "name",
							header: s._(
								/*BTDS*/
								""
							),
							cell: function(t) {
								var e = t.item;
								return u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									children: e.name
								});
							},
							width: {
								type: "pixel",
								px: 360
							}
						},
						{
							key: "phone",
							header: s._(
								/*BTDS*/
								""
							),
							cell: function(t) {
								var e = t.item;
								return u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: e.phone
								});
							},
							width: {
								type: "pixel",
								px: 320
							}
						},
						{
							key: "actions",
							header: s._(
								/*BTDS*/
								""
							),
							cell: function() {
								return u.jsx(r("WDSText.react"), {
									type: "Body2Emphasized",
									colorName: "contentActionDefault",
									children: s._(
										/*BTDS*/
										""
									)
								});
							},
							stickyEnd: !0,
							width: {
								type: "pixel",
								px: 120
							}
						}
					];
					return u.jsx("div", {
						className: "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xw2csxc xh8yej3",
						children: u.jsx(r("WAWebSMBTable.react"), {
							columns: e,
							items: p(),
							getItemKey: _
						})
					});
				}
			},
			{
				title: "Custom header rendering",
				description: "A column can supply renderHeader instead of header to fully control the header cell (e.g. a sortable header with an affordance). Other columns keep the default header styling.",
				example: function() {
					var e = [{
						key: "name",
						renderHeader: function() {
							return u.jsx(r("WDSText.react"), {
								type: "Body2Emphasized",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							});
						},
						cell: function(t) {
							var e = t.item;
							return u.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDefault",
								children: e.name
							});
						},
						width: {
							type: "proportional",
							value: 3
						}
					}, {
						key: "phone",
						header: s._(
							/*BTDS*/
							""
						),
						cell: function(t) {
							var e = t.item;
							return u.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: e.phone
							});
						},
						width: {
							type: "proportional",
							value: 2
						}
					}];
					return u.jsx(f, { children: u.jsx(r("WAWebSMBTable.react"), {
						columns: e,
						items: p(),
						getItemKey: _
					}) });
				}
			}
		]
	}, b = C;
	l.default = b;
}), 226);
