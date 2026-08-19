__d("WAWebCommunityExistingGroupsDrawer.react", [
	"fbt",
	"WAAbortError",
	"WAArrayDifferenceWith",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebChatCollection",
	"WAWebChatModel",
	"WAWebChatParticipantList.react",
	"WAWebCommunityGatingUtils",
	"WAWebCommunitySubgroupsLimitReachedPopup.react",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebGroupGatingUtils",
	"WAWebGroupMetadataCollection",
	"WAWebGroupType",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebModalManager",
	"WAWebMultiSelectChatList.react",
	"WAWebMultiSelection",
	"WAWebNameGroupModal.react",
	"WAWebNoop",
	"WAWebRichTextField.react",
	"WAWebRound.react",
	"WAWebSetSubjectGroupAction",
	"WAWebSingleSelection",
	"WAWebSpinner.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WDSIconIcArrowForward.react",
	"nullthrows",
	"react",
	"useLazyRef",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState, g = {
		drawerSection: {
			zIndex: "xhtitgo",
			display: "x78zum5",
			justifyContent: "x1l1ennw",
			paddingBottom: "x1ci70gm",
			marginTop: "xevwqry",
			textAlign: "x2b8uid",
			$$css: !0
		},
		paragraph: {
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			fontSize: "x1f6kntn",
			lineHeight: "x37zpob",
			textAlign: "x2b8uid",
			color: "xhslqc4",
			backgroundColor: "x1280gxy",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			overflowWrap: "x1mzt3pk",
			$$css: !0
		},
		createNewGroupText: {
			color: "x1eqckd8",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i, l, c = a.addedExistingGroups, m = a.currentSubgroupCount, h = a.flowSelectedGroups, y = a.groupsSuggestedByMeToCommunity, C = a.isCommunityAdmin, b = a.isCommunityCreation, v = a.isParentGroupClosed, S = a.onBack, R = a.onContinue, L = a.onCreateNewGroup, E = a.setFlowSelectedGroups, k = b === !0 ? o("WAWebCommunityGatingUtils").getParentGroupLinkLimitCommunityCreation() : o("WAWebCommunityGatingUtils").getParentGroupLinkLimit(), I = k - m, T = Array.from(c != null ? c : []), D = f(""), x = D[0], $ = D[1], P = r("useLazyRef")(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}), N = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), M = _(null), w = f(h), A = w[0], F = w[1], O = f([]), B = O[0], W = O[1], q = f(!0), U = q[0], V = q[1], H = _(new (r("WAWebFlatListController"))()), G = _(null);
		p(function() {
			var e;
			(e = G.current) == null || e.triggerFocus();
		}, void 0);
		var z = function() {
			V(!0);
			var e = o("WAWebContactCollection").ContactCollection.filter(function(e) {
				var t;
				if (!o("WAWebContactGetters").getIsGroup(e)) return !1;
				var n = o("WAWebChatCollection").ChatCollection.get(e.id.toString()), a = n == null || (t = n.groupMetadata) == null ? void 0 : t.participants;
				if (a == null || !a.iAmAdmin() || c != null && c.has(e.id)) return !1;
				var i = r("WAWebGroupMetadataCollection").get(e.id.toString());
				return (i == null ? void 0 : i.groupType) === o("WAWebGroupType").GroupType.DEFAULT || (i == null ? void 0 : i.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
			});
			W(e), V(!1);
		};
		p(function() {
			z(), h.forEach(function(e) {
				P.current.setVal(e, !0);
			});
		}, []);
		var j = function() {
			var e;
			(e = G.current) == null || e.triggerFocus();
		}, K = function() {
			E(A), R();
		}, Q = function() {
			var e;
			$(""), (e = G.current) == null || e.clearTextInput();
		}, X = function(t) {
			P.current.setVal(t, !1), F(P.current.getSelected()), Q();
		}, Y = function(t, n) {
			X(n);
		}, J = function(t) {
			t == null || t.preventDefault(), N.current.setFirst(!0);
		}, Z = function(t) {
			var e;
			N.current.unset(), (e = G.current) == null || e.triggerFocus();
		}, ee = r("useWAWebUnmountSignal")(), te = async function(n, a) {
			var t = n;
			await r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(a, t), ee).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["name_group_modal:onSetSubject failed"])));
			}), o("WAWebModalManager").ModalManager.close(), F(P.current.getSelected()), Q();
		}, ne = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				tsNavigationData: {
					surface: "unknown",
					viewName: "community-existing-groups"
				},
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, re = function(t, n) {
			if (A.length >= I && n) o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebCommunitySubgroupsLimitReachedPopup.react"), {
				maxSubgroups: k,
				isCommunityCreation: b
			}));
			else {
				var e = r("WAWebGroupMetadataCollection").get(t.id), a = (e == null ? void 0 : e.isUnnamed) === !0;
				if (a) {
					var i = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(t.id.toString())), l = r("nullthrows")(P.current.list.find(function(e) {
						return e.id.toString() === t.id.toString();
					})), u = s._(
						/*BTDS*/
						""
					);
					o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNameGroupModal.react"), {
						chat: i,
						subtext: u,
						onCancel: function() {
							X(l), o("WAWebModalManager").ModalManager.close();
						},
						onOK: te,
						editable: e == null ? void 0 : e.canSetSubject(),
						editRestrictionInfo: e != null && e.restrict ? ne : void 0
					}));
				} else F(P.current.getSelected()), Q();
			}
		}, oe = function() {
			var e = o("WAArrayDifferenceWith").differenceWith(B, T, function(e, t) {
				return e.id.equals(t);
			});
			return e;
		}, ae;
		A.length > 0 && (ae = d.jsx(o("WAWebRound.react").Round, {
			className: "x1r0gsg0 x11t971q xat24cr xvc5jky",
			testid: "continue-btn",
			label: s._(
				/*BTDS*/
				""
			),
			onClick: K,
			children: d.jsx(r("WDSIconIcArrowForward.react"), {
				directional: !0,
				height: 30,
				width: 30,
				testid: "community_existing_groups_continue_arrow_forward"
			})
		}));
		var ie = function(t) {
			var e = r("WAWebGroupMetadataCollection").get(t.id.toString()), n = (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP, a = !!(y != null && y.some(function(e) {
				return e.equals(t.id);
			}));
			return n || a;
		}, le = function(t, n) {
			if (!(!n || !(t instanceof o("WAWebChatModel").Chat))) {
				var e = r("WAWebGroupMetadataCollection").get(t.id.toString()), a = (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
				if (a) {
					var i, l = (i = t.groupMetadata) == null || (i = i.getParentGroupChat()) == null ? void 0 : i.formattedTitle;
					return s._(
						/*BTDS*/
						"",
						[s._param("community-name", d.jsx(o("WAWebEmojiText.react").EmojiText, { text: l }))]
					);
				} else if (y != null && y.some(function(e) {
					return e.equals(t.id);
				})) return s._(
					/*BTDS*/
					""
				);
			}
		}, se = oe(), ue = d.jsx(r("WAWebMultiSelectChatList.react"), {
			ref: M,
			active: N.current,
			selections: P.current,
			flatListController: H.current,
			onLeaveList: j,
			searchText: x,
			maxChats: I,
			onSelectionChanged: re,
			chatFilter: function(t) {
				return se.some(function(e) {
					return e.id.equals(t.id);
				});
			},
			excludeContacts: !0,
			isCommunityExistingGroupsDrawer: !0,
			isDisabled: ie,
			customItemSecondaryText: le
		}), ce;
		B.length > 0 ? C ? v ? ce = s._(
			/*BTDS*/
			""
		) : ce = s._(
			/*BTDS*/
			""
		) : ce = s._(
			/*BTDS*/
			""
		) : ce = d.jsxs(d.Fragment, { children: [
			s._(
				/*BTDS*/
				""
			),
			" ",
			d.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: g.createNewGroupText,
				onClick: L,
				children: s._(
					/*BTDS*/
					""
				)
			})
		] });
		var de = s._(
			/*BTDS*/
			""
		), me = (i = s._param("groupcount", A.length, [0]), l = s._param("subgroups-left-to-max", I, [0]), s._(
			/*BTDS*/
			"",
			[
				i,
				l,
				s._implicitParam("=m1", d.jsx("span", {
					dir: r("WAWebL10N").LR("ltr", "rtl"),
					children: s._(
						/*BTDS*/
						"",
						[
							i,
							l,
							s._implicitParam("=m2", d.jsx("span", {
								dir: r("WAWebL10N").LR("ltr", "rtl"),
								children: s._(
									/*BTDS*/
									"",
									[i, l]
								)
							}))
						]
					)
				}))
			]
		));
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-existing-groups"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: me,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: S
			}), d.jsxs(r("WAWebDrawerBody.react"), { children: [
				d.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: g.paragraph,
					children: ce
				}),
				U ? d.jsx("div", {
					className: "x1280gxy x78zum5 xl56j7k x4i7bpe xyri2b x1sgudl8 x1c1uobl",
					children: d.jsx(o("WAWebSpinner.react").Spinner, {})
				}) : d.jsxs(d.Fragment, { children: [d.jsxs("div", {
					className: "xhig867 xscbp6u xizuyw3 x10wh9bi xpm28yp x8viiok x1o7cslx x1280gxy",
					children: [A.length > 0 && d.jsx("div", {
						className: "x9tmck8",
						children: d.jsx(r("WAWebChatParticipantList.react"), {
							theme: "list-names",
							contacts: A,
							onDelete: Y,
							onFocusSearch: j
						})
					}), d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
						handlers: { down: J },
						onFocus: Z,
						children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "community-existing-groups-search",
							title: de,
							ref: G,
							value: x,
							showRemaining: !0,
							onChange: function(t) {
								var e = t.text;
								return $(e);
							},
							placeholder: de,
							maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
							focusOnMount: !0
						})
					})]
				}), d.jsx(r("WAWebFlatListContainer.react"), {
					className: "x1n2onr6 x1iyjqo2 xs83m0k x18xmwgd x6ikm8r x1odjw0f x1280gxy",
					flatListControllers: [H.current],
					children: ue
				})] }),
				d.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "btn",
					xstyle: g.drawerSection,
					children: ae
				})
			] })]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
