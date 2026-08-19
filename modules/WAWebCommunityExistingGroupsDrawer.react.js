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
	"asyncToGeneratorRuntime",
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
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), l, c, m = i.addedExistingGroups, h = i.currentSubgroupCount, y = i.flowSelectedGroups, C = i.groupsSuggestedByMeToCommunity, b = i.isCommunityAdmin, v = i.isCommunityCreation, S = i.isParentGroupClosed, R = i.onBack, L = i.onContinue, E = i.onCreateNewGroup, k = i.setFlowSelectedGroups, I = v === !0 ? o("WAWebCommunityGatingUtils").getParentGroupLinkLimitCommunityCreation() : o("WAWebCommunityGatingUtils").getParentGroupLinkLimit(), T = I - h, D = Array.from(m != null ? m : []), x = f(""), $ = x[0], P = x[1], N = r("useLazyRef")(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}), M = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), w = _(null), A = f(y), F = A[0], O = A[1], B = f([]), W = B[0], q = B[1], U = f(!0), V = U[0], H = U[1], G = _(new (r("WAWebFlatListController"))()), z = _(null);
		p(function() {
			var e;
			(e = z.current) == null || e.triggerFocus();
		}, void 0);
		var j = function() {
			H(!0);
			var e = o("WAWebContactCollection").ContactCollection.filter(function(e) {
				var t;
				if (!o("WAWebContactGetters").getIsGroup(e)) return !1;
				var n = o("WAWebChatCollection").ChatCollection.get(e.id.toString()), a = n == null || (t = n.groupMetadata) == null ? void 0 : t.participants;
				if (a == null || !a.iAmAdmin() || m != null && m.has(e.id)) return !1;
				var i = r("WAWebGroupMetadataCollection").get(e.id.toString());
				return (i == null ? void 0 : i.groupType) === o("WAWebGroupType").GroupType.DEFAULT || (i == null ? void 0 : i.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
			});
			q(e), H(!1);
		};
		p(function() {
			j(), y.forEach(function(e) {
				N.current.setVal(e, !0);
			});
		}, []);
		var K = function() {
			var e;
			(e = z.current) == null || e.triggerFocus();
		}, Q = function() {
			k(F), L();
		}, X = function() {
			var e;
			P(""), (e = z.current) == null || e.clearTextInput();
		}, Y = function(t) {
			N.current.setVal(t, !1), O(N.current.getSelected()), X();
		}, J = function(t, n) {
			Y(n);
		}, Z = function(t) {
			t == null || t.preventDefault(), M.current.setFirst(!0);
		}, ee = function(t) {
			var e;
			M.current.unset(), (e = z.current) == null || e.triggerFocus();
		}, te = r("useWAWebUnmountSignal")(), ne = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
				var a = t;
				yield r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(n, a), te).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["name_group_modal:onSetSubject failed"])));
				}), o("WAWebModalManager").ModalManager.close(), O(N.current.getSelected()), X();
			});
			return function(n, r) {
				return t.apply(this, arguments);
			};
		})(), re = function() {
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
		}, oe = function(t, n) {
			if (F.length >= T && n) o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebCommunitySubgroupsLimitReachedPopup.react"), {
				maxSubgroups: I,
				isCommunityCreation: v
			}));
			else {
				var e = r("WAWebGroupMetadataCollection").get(t.id), a = (e == null ? void 0 : e.isUnnamed) === !0;
				if (a) {
					var i = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(t.id.toString())), l = r("nullthrows")(N.current.list.find(function(e) {
						return e.id.toString() === t.id.toString();
					})), u = s._(
						/*BTDS*/
						""
					);
					o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNameGroupModal.react"), {
						chat: i,
						subtext: u,
						onCancel: function() {
							Y(l), o("WAWebModalManager").ModalManager.close();
						},
						onOK: ne,
						editable: e == null ? void 0 : e.canSetSubject(),
						editRestrictionInfo: e != null && e.restrict ? re : void 0
					}));
				} else O(N.current.getSelected()), X();
			}
		}, ae = function() {
			var e = o("WAArrayDifferenceWith").differenceWith(W, D, function(e, t) {
				return e.id.equals(t);
			});
			return e;
		}, ie;
		F.length > 0 && (ie = d.jsx(o("WAWebRound.react").Round, {
			className: "x1r0gsg0 x11t971q xat24cr xvc5jky",
			testid: "continue-btn",
			label: s._(
				/*BTDS*/
				""
			),
			onClick: Q,
			children: d.jsx(r("WDSIconIcArrowForward.react"), {
				directional: !0,
				height: 30,
				width: 30,
				testid: "community_existing_groups_continue_arrow_forward"
			})
		}));
		var le = function(t) {
			var e = r("WAWebGroupMetadataCollection").get(t.id.toString()), n = (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP, a = !!(C != null && C.some(function(e) {
				return e.equals(t.id);
			}));
			return n || a;
		}, se = function(t, n) {
			if (!(!n || !(t instanceof o("WAWebChatModel").Chat))) {
				var e = r("WAWebGroupMetadataCollection").get(t.id.toString()), a = (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
				if (a) {
					var i, l = (i = t.groupMetadata) == null || (i = i.getParentGroupChat()) == null ? void 0 : i.formattedTitle;
					return s._(
						/*BTDS*/
						"",
						[s._param("community-name", d.jsx(o("WAWebEmojiText.react").EmojiText, { text: l }))]
					);
				} else if (C != null && C.some(function(e) {
					return e.equals(t.id);
				})) return s._(
					/*BTDS*/
					""
				);
			}
		}, ue = ae(), ce = d.jsx(r("WAWebMultiSelectChatList.react"), {
			ref: w,
			active: M.current,
			selections: N.current,
			flatListController: G.current,
			onLeaveList: K,
			searchText: $,
			maxChats: T,
			onSelectionChanged: oe,
			chatFilter: function(t) {
				return ue.some(function(e) {
					return e.id.equals(t.id);
				});
			},
			excludeContacts: !0,
			isCommunityExistingGroupsDrawer: !0,
			isDisabled: le,
			customItemSecondaryText: se
		}), de;
		W.length > 0 ? b ? S ? de = s._(
			/*BTDS*/
			""
		) : de = s._(
			/*BTDS*/
			""
		) : de = s._(
			/*BTDS*/
			""
		) : de = d.jsxs(d.Fragment, { children: [
			s._(
				/*BTDS*/
				""
			),
			" ",
			d.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: g.createNewGroupText,
				onClick: E,
				children: s._(
					/*BTDS*/
					""
				)
			})
		] });
		var me = s._(
			/*BTDS*/
			""
		), pe = (l = s._param("groupcount", F.length, [0]), c = s._param("subgroups-left-to-max", T, [0]), s._(
			/*BTDS*/
			"",
			[
				l,
				c,
				s._implicitParam("=m1", d.jsx("span", {
					dir: r("WAWebL10N").LR("ltr", "rtl"),
					children: s._(
						/*BTDS*/
						"",
						[
							l,
							c,
							s._implicitParam("=m2", d.jsx("span", {
								dir: r("WAWebL10N").LR("ltr", "rtl"),
								children: s._(
									/*BTDS*/
									"",
									[l, c]
								)
							}))
						]
					)
				}))
			]
		));
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-existing-groups"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: pe,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: R
			}), d.jsxs(r("WAWebDrawerBody.react"), { children: [
				d.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: g.paragraph,
					children: de
				}),
				V ? d.jsx("div", {
					className: "x1280gxy x78zum5 xl56j7k x4i7bpe xyri2b x1sgudl8 x1c1uobl",
					children: d.jsx(o("WAWebSpinner.react").Spinner, {})
				}) : d.jsxs(d.Fragment, { children: [d.jsxs("div", {
					className: "xhig867 xscbp6u xizuyw3 x10wh9bi xpm28yp x8viiok x1o7cslx x1280gxy",
					children: [F.length > 0 && d.jsx("div", {
						className: "x9tmck8",
						children: d.jsx(r("WAWebChatParticipantList.react"), {
							theme: "list-names",
							contacts: F,
							onDelete: J,
							onFocusSearch: K
						})
					}), d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
						handlers: { down: Z },
						onFocus: ee,
						children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "community-existing-groups-search",
							title: me,
							ref: z,
							value: $,
							showRemaining: !0,
							onChange: function(t) {
								var e = t.text;
								return P(e);
							},
							placeholder: me,
							maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
							focusOnMount: !0
						})
					})]
				}), d.jsx(r("WAWebFlatListContainer.react"), {
					className: "x1n2onr6 x1iyjqo2 xs83m0k x18xmwgd x6ikm8r x1odjw0f x1280gxy",
					flatListControllers: [G.current],
					children: ce
				})] }),
				d.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "btn",
					xstyle: g.drawerSection,
					children: ie
				})
			] })]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
