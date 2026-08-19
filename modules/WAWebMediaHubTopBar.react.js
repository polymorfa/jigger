__d("WAWebMediaHubTopBar.react", [
	"fbt",
	"WAWebClickable.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebMediaHubContextProvider",
	"WAWebMediaHubLogger",
	"WAWebMediaHubSortIcon.react",
	"WAWebModalManager",
	"WAWebTabs.react",
	"WAWebWamEnumActionCode",
	"WDSFlex.stylex",
	"WDSIconIcCheckBox.react",
	"WDSIconIcClose.react",
	"WDSIconIcSearch.react",
	"WDSMargins.stylex",
	"WDSMenuBarItem.react",
	"WDSSearchBar.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = {
		marginTop10: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		}
	}, g = {
		search: {
			height: "x1peatla",
			width: "xh8yej3",
			alignSelf: "xamitd3",
			borderBottomWidth: "x1co6499",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		cancelText: {
			minWidth: "xwrg52n",
			textAlign: "x2b8uid",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		select: {
			alignContent: "xc26acl",
			$$css: !0
		},
		actionRow: {
			width: "xh8yej3",
			$$css: !0
		},
		actionEnd: {
			paddingInlineEnd: "xde1mab",
			$$css: !0
		},
		action: {
			alignContent: "xc26acl",
			justifyItems: "x1o2pa38",
			placeSelf: "x1q46pyc",
			$$css: !0
		},
		tabRoot: {
			width: "xh8yej3",
			$$css: !0
		},
		tabs: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		tabHovered: {
			borderBottomWidth: "xv7zg05",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "xhl97hz",
			$$css: !0
		},
		tabXStyle: {
			borderBottomWidth: "xv7zg05",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x16stqrj",
			flex: "x1u8qi29",
			height: "x1peatla",
			$$css: !0
		},
		tabSelected: {
			paddingTop: "xexx8yu",
			borderBottomColor: "x1rrvw3c",
			$$css: !0
		},
		hidden: {
			display: "x1s85apg",
			$$css: !0
		}
	}, h = function(t) {
		return t === "media" ? s._(
			/*BTDS*/
			""
		) : t === "docs" ? s._(
			/*BTDS*/
			""
		) : t === "links" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
	}, y = [
		"media",
		"docs",
		"links"
	], C = y.map(function(e) {
		return {
			id: e,
			title: h(e)
		};
	});
	function b() {
		var t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), n = t.isSelectMode, a = t.searchQuery, i = t.setIsSelectMode, l = t.setSearchQuery, u = t.setSortOrder, d = t.setTab, h = t.sortOrder, y = t.tab, b = _(!1), R = b[0], L = b[1], E = _(!1), k = E[0], I = E[1], T = R || a !== "" || k, D = p(null);
		m(function() {
			R && D.current && D.current.focus();
		}, [R]);
		var x = s._(
			/*BTDS*/
			""
		), $ = s._(
			/*BTDS*/
			""
		), P = s._(
			/*BTDS*/
			""
		), N = s._(
			/*BTDS*/
			""
		), M;
		return T ? M = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.flexShrink1), { children: c.jsx(r("WDSSearchBar.react"), {
			value: a,
			hintText: y === "docs" ? x : $,
			onValueChange: function(t) {
				l(t), t === "" ? (I(!0), D.current && D.current.focus()) : I(!1);
			},
			onBlur: function() {
				L(!1), I(!1);
			},
			onFocus: function() {
				L(!0), I(!1), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.SEARCH });
			},
			ref: D,
			testid: "media_hub_search_bar"
		}) })) : M = c.jsx(r("WDSMenuBarItem.react"), {
			testid: "btn-search-media-hub",
			title: N,
			icon: r("WDSIconIcSearch.react"),
			onClick: function() {
				L(!R), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.SEARCH });
			}
		}), c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: g.search,
			justify: "all",
			align: "end",
			children: [
				c.jsx(o("WAWebFlex.react").FlexRow, {
					grow: 2,
					xstyle: [
						g.actionRow,
						o("WDSMargins.stylex").wdsMargins.marginStart20,
						f.marginTop10,
						f.marginBottom10
					],
					children: c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [c.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}), c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: v(y)
					})] })
				}),
				c.jsx(r("WAWebTabs.react"), {
					getTitleProps: S,
					selectedId: y,
					wrapperXstyle: [g.tabRoot, T && g.hidden],
					xstyle: g.tabs,
					onSelect: d,
					tabConfigs: C,
					hoveredXStyle: g.tabHovered,
					selectedXStyle: g.tabSelected,
					tabXstyle: g.tabXStyle
				}),
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					grow: 1,
					xstyle: [g.actionRow, g.actionEnd],
					justify: "end",
					alignSelf: "center",
					gap: 8,
					children: [
						M,
						c.jsx(r("WAWebMediaHubSortIcon.react"), {
							setSortOrder: u,
							sortOrder: h
						}),
						n ? c.jsx(o("WAWebClickable.react").Clickable, {
							onClick: function() {
								return i(!1);
							},
							xstyle: [
								g.select,
								g.action,
								g.cancelText
							],
							children: c.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDeemphasized",
								children: r("WAWebFbtCommon")("Cancel")
							})
						}) : c.jsxs(c.Fragment, { children: [c.jsx(r("WDSMenuBarItem.react"), {
							testid: "btn-select-modal",
							title: P,
							icon: r("WDSIconIcCheckBox.react"),
							onClick: function() {
								return i(!0);
							}
						}), c.jsx(r("WDSMenuBarItem.react"), {
							testid: "btn-closer-modal",
							title: r("WAWebFbtCommon")("Close"),
							icon: r("WDSIconIcClose.react"),
							onClick: o("WAWebModalManager").closeModalManager
						})] })
					]
				})
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		return e === "media" ? s._(
			/*BTDS*/
			""
		) : e === "docs" ? s._(
			/*BTDS*/
			""
		) : e === "links" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function S(e, t) {
		return {
			color: e || t ? "wdsContentDefault" : "wdsContentDeemphasized",
			weight: e || t ? "medium" : void 0
		};
	}
	l.default = b;
}), 226);
