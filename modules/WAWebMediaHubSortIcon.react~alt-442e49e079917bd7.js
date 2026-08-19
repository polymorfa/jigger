__d("WAWebMediaHubSortIcon.react", [
	"fbt",
	"WAWebMediaHubContextProvider",
	"WDSIconIcRadioButtonChecked.react",
	"WDSIconIcRadioButtonUnchecked.react",
	"WDSIconIcSort.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.setSortOrder, n = e.sortOrder, r = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), a = r.filters, i = r.setFilters, l = r.tab, c = s._(
			/*BTDS*/
			""
		);
		return u.jsx(d, {
			title: c,
			sortOrder: n,
			filters: a,
			shouldHaveFileSort: l !== "links",
			setSortOrder: t,
			setFilters: i
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.filters, n = e.setFilters, o = e.setSortOrder, a = e.shouldHaveFileSort, i = e.sortOrder, l = e.title, c = function(t) {
			(t === "asc" || t === "desc" || t === "fileSizeDesc") && o(t);
		}, d = u.jsxs(r("WDSMenu.react"), { children: [
			u.jsx(r("WDSMenuItem.react"), {
				type: "groupHeader",
				title: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return n("all");
				},
				type: "listItem",
				Icon: r(t === "all" ? "WDSIconIcRadioButtonChecked.react" : "WDSIconIcRadioButtonUnchecked.react")
			}),
			u.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return n("you");
				},
				type: "listItem",
				Icon: r(t === "you" ? "WDSIconIcRadioButtonChecked.react" : "WDSIconIcRadioButtonUnchecked.react")
			}),
			u.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return n("others");
				},
				type: "listItem",
				Icon: r(t === "others" ? "WDSIconIcRadioButtonChecked.react" : "WDSIconIcRadioButtonUnchecked.react")
			}),
			u.jsx(r("WDSMenuItem.react"), { type: "separator" }),
			u.jsx(r("WDSMenuItem.react"), {
				type: "groupHeader",
				title: l
			}),
			u.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return c("desc");
				},
				type: "listItem",
				startAddon: "icon",
				Icon: r(i === "desc" ? "WDSIconIcRadioButtonChecked.react" : "WDSIconIcRadioButtonUnchecked.react")
			}),
			u.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return c("asc");
				},
				type: "listItem",
				startAddon: "icon",
				Icon: r(i === "asc" ? "WDSIconIcRadioButtonChecked.react" : "WDSIconIcRadioButtonUnchecked.react")
			}),
			a && u.jsx(r("WDSMenuItem.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					return c("fileSizeDesc");
				},
				type: "listItem",
				startAddon: "icon",
				Icon: r(i === "fileSizeDesc" ? "WDSIconIcRadioButtonChecked.react" : "WDSIconIcRadioButtonUnchecked.react")
			})
		] });
		return u.jsx(r("WDSMenuBarItem.react"), {
			testid: "btn-sort-modal",
			title: l,
			icon: r("WDSIconIcSort.react"),
			wdsMenuToRender: d,
			menuAlign: "start",
			menuPosition: "below"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 226);
