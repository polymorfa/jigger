__d("WAWebCommunitySubgroupSuggestionsDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCellBorder.react",
	"WAWebCellRequestState",
	"WAWebCommunitySubgroupSuggestion.react",
	"WAWebConfirmPopup.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebSectionHeader.react",
	"WAWebSubgroupSuggestionAction",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSTextualLink.react",
	"react",
	"useWAWebFocusOnMount",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState, _ = {
		paddingBottom6: {
			paddingBottom: "x10b6aqq",
			$$css: !0
		},
		paddingBottom14: {
			paddingBottom: "x1g2khh7",
			$$css: !0
		}
	}, f = {
		disclaimer: {
			textAlign: "x2b8uid",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		footer: {
			position: "x7wzq59",
			bottom: "x1ey2m1c",
			flexGrow: "x1iyjqo2",
			display: "x78zum5",
			alignItems: "xuk3077",
			$$css: !0
		},
		footerRow: {
			width: "xh8yej3",
			$$css: !0
		},
		disclaimerText: {
			textAlign: "x2b8uid",
			lineHeight: "x16h55sf",
			$$css: !0
		},
		emptyStateTitle: {
			textAlign: "x2b8uid",
			lineHeight: "x37zpob",
			$$css: !0
		},
		empty: {
			height: "x5yr21d",
			$$css: !0
		},
		sectionTitle: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function g(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.callbacks, u = i.chat, d = r("useWAWebFocusOnMount")(), g = p(!1), y = g[0], C = g[1], b = m(function() {
			var e;
			return !!(!(u == null || (e = u.groupMetadata) == null) && e.participants.iAmAdmin());
		}, [u == null || (n = u.groupMetadata) == null ? void 0 : n.participants]), v = m(function() {
			var e;
			return ((e = u.groupMetadata) == null ? void 0 : e.getSubgroupSuggestions()) || [];
		}, [u.groupMetadata]), S = function(t, n) {
			var e, r;
			switch (n) {
				case o("WAWebCellRequestState").State.Approved:
					r = o("WAWebSubgroupSuggestionAction").approveSubgroupSuggestions(u, [t], l.onManageCommunityGroupsClick);
					break;
				case o("WAWebCellRequestState").State.Rejected:
					r = o("WAWebSubgroupSuggestionAction").rejectSubgroupSuggestions(u, [t]);
					break;
				case o("WAWebCellRequestState").State.Canceled:
					r = o("WAWebSubgroupSuggestionAction").cancelSubgroupSuggestions(u, [t]);
					break;
				default: break;
			}
			(e = r) == null || e.then(C(!v.some(function(e) {
				var t = e.currentState;
				return t === o("WAWebCellRequestState").State.Pending;
			})));
		}, R = function() {
			var e = v.filter(function(e) {
				return e.currentState === o("WAWebCellRequestState").State.Pending;
			});
			e != null && e.length && o("WAWebSubgroupSuggestionAction").approveSubgroupSuggestions(u, e, l.onManageCommunityGroupsClick).then(function() {
				return C(!0);
			});
		}, L = function() {
			var e = function() {
				o("WAWebModalManager").ModalManager.close();
				var e = v.filter(function(e) {
					return e.currentState === o("WAWebCellRequestState").State.Pending;
				});
				e != null && e.length && o("WAWebSubgroupSuggestionAction").rejectSubgroupSuggestions(u, e).then(function() {
					return C(!0);
				});
			}, t = s._(
				/*BTDS*/
				""
			), n = s._(
				/*BTDS*/
				""
			);
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: e,
				okText: s._(
					/*BTDS*/
					""
				),
				okButtonType: "solid-warning",
				onCancel: o("WAWebModalManager").closeModalManager,
				title: t,
				tsNavigationData: {
					surface: "unknown",
					viewName: "community-subgroup-suggestions"
				},
				children: n
			}));
		};
		r("useWAWebOnUnmount")(function() {
			v.forEach(function(e) {
				e.resetState();
			});
		});
		var E = s._(
			/*BTDS*/
			""
		), k;
		if (v.length > 0) {
			var I = c.jsx(r("WAWebDrawerSection.react"), {
				xstyle: [
					f.disclaimer,
					o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
					o("WDSPaddings.stylex").wdsPaddings.paddingTop24,
					o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
				],
				children: c.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					align: "center",
					children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: b ? s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m2", c.jsx(r("WDSTextualLink.react"), {
							onClick: l.onCommunitySettingsClick,
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					) : s._(
						/*BTDS*/
						""
					) })
				})
			}), T = [], D = [];
			v.forEach(function(e) {
				e.isExistingGroup ? T.push(e) : D.push(e);
			});
			var x = [{
				sectionTitle: s._(
					/*BTDS*/
					"",
					[s._param("suggested-existing-groups-count", T.length, [0])]
				),
				suggestions: T
			}, {
				sectionTitle: s._(
					/*BTDS*/
					"",
					[s._param("suggested-new-groups-count", D.length, [0])]
				),
				suggestions: D
			}], $ = x.map(function(e, t) {
				var n = e.sectionTitle, o = e.suggestions;
				return o.length ? c.jsxs("section", { children: [c.jsx(h, {
					title: n,
					suggestions: o,
					isAdmin: b,
					onSubgroupSuggestionAction: S
				}), t === 0 && D.length ? c.jsx(r("WAWebCellBorder.react"), { noMargin: !0 }) : null] }, t) : null;
			}), P = b ? c.jsx(r("WAWebDrawerSection.react"), {
				xstyle: [
					f.footer,
					o("WDSPaddings.stylex").wdsPaddings.padding16,
					_.paddingBottom6
				],
				children: c.jsxs(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					gap: 8,
					xstyle: f.footerRow,
					children: [c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
						onClick: L,
						disabled: y,
						stretch: !0,
						children: s._(
							/*BTDS*/
							""
						)
					}), c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						onClick: R,
						disabled: y,
						stretch: !0,
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			}) : null;
			k = c.jsxs(c.Fragment, { children: [
				I,
				$,
				P
			] });
		} else k = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: [f.empty, o("WDSPaddings.stylex").wdsPaddings.paddingHor24],
			justify: "center",
			align: "center",
			children: [c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "20",
				color: "secondary",
				xstyle: [f.emptyStateTitle, _.paddingBottom14],
				children: s._(
					/*BTDS*/
					""
				)
			}), c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "14",
				color: "secondary",
				xstyle: f.disclaimerText,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
		return c.jsx("div", {
			role: "complementary",
			ref: d,
			tabIndex: -1,
			"aria-label": E,
			children: c.jsxs(r("WAWebDrawer.react"), {
				ref: a,
				testid: "subgroup-suggestions-drawer",
				theme: "invite",
				tsNavigationData: {
					surface: "unknown",
					viewName: "community-subgroup-suggestions"
				},
				children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: E,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: i.onBack
				}), c.jsx(r("WAWebDrawerBody.react"), { children: k })]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.isAdmin, n = e.onSubgroupSuggestionAction, a = e.suggestions, i = e.title;
		return c.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
			children: [c.jsx(r("WAWebSectionHeader.react"), {
				header: i,
				xstyle: [
					f.sectionTitle,
					o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
					o("WDSPaddings.stylex").wdsPaddings.paddingTop16,
					o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
				]
			}), a == null ? void 0 : a.map(function(e) {
				return c.jsx(r("WAWebCommunitySubgroupSuggestion.react"), {
					subgroupSuggestion: e,
					isAdmin: t,
					onSubgroupSuggestionAction: n
				}, e.id);
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
