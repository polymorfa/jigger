__d("WAWebSelectGroupParticipantsDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebBlockContactAction",
	"WAWebChatCollection",
	"WAWebChatComparator",
	"WAWebChatContactList.react",
	"WAWebChatParticipantList.react",
	"WAWebClassnames",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactComparator",
	"WAWebContactGetters",
	"WAWebContactSyncLogger",
	"WAWebContactUtils",
	"WAWebContactlessChatUtils",
	"WAWebCopyPasteSelectable.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerUtils",
	"WAWebEmptyState.react",
	"WAWebFbtCommon",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebFocusTracer",
	"WAWebGroupMetadataCollection",
	"WAWebGroupType",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebL10NAccentFold",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebOutContactConsts",
	"WAWebOutContactModel",
	"WAWebPeopleIcon.react",
	"WAWebPhoneNumberSearch",
	"WAWebSelectAllIcon.react",
	"WAWebSpinner.react",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnknownContactSection.react",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebUsernameSearchLogger",
	"WAWebUsernameSearchPlaceholder",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumContactSearchEntrypoint",
	"WAWebWamEnumSearchActionName",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebCommunityMembers",
	"useWAWebCommunitySubgroups",
	"useWAWebFilteredOutContacts",
	"useWAWebFrequentlyContactedContacts",
	"useWAWebStableCallback",
	"useWAWebUnknownContact",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo, f = m.useRef, g = m.useState, h = {
		marginInlineEnd6: {
			marginInlineEnd: "xbelrpt",
			$$css: !0
		},
		paddingTop6: {
			paddingTop: "x1yrsyyn",
			$$css: !0
		}
	}, y = {
		icon: {
			marginInlineEnd: "x7g7pl8",
			$$css: !0
		},
		subgroup: {
			borderStartStartRadius: "x51soum",
			borderStartEndRadius: "x1p52sp3",
			borderEndEndRadius: "xkyogvf",
			borderEndStartRadius: "xluoswm",
			backgroundColor: "x4wrhlh",
			paddingInlineStart: "x1g0dm76",
			paddingInlineEnd: "xpdmqnj",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		selectedSubgroup: {
			backgroundColor: "xa9qhua",
			color: "xhslqc4",
			$$css: !0
		},
		selectAllIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		inputLine: {
			position: "x1n2onr6",
			width: "xh8yej3",
			minHeight: "xisnujt",
			maxHeight: "x1hkcv85",
			overflowY: "x1odjw0f",
			fontSize: "x6prxxf",
			fontWeight: "x1fcty0u",
			lineHeight: "x1fc57z9",
			backgroundColor: "xjbqb8w",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderInlineStartStyle: "xstzfhl",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			outline: "x1a2a7pz",
			transitionProperty: "xshfolx",
			transitionDuration: "x13dflua",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		nextBtnSection: {
			zIndex: "xhtitgo",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "x1l1ennw",
			paddingTop: "x1p5oq8j",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1t1ogtf",
			paddingInlineStart: "x1c1uobl",
			textAlign: "x2b8uid",
			$$css: !0
		}
	}, C = o("WAWebToast.react").genId("max_participant_toast"), b = function(t, n) {
		o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
			contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP,
			searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.PIN_VERFICATION_ERROR_SHOWN,
			isUsernameSearch: n,
			searchStartsWithAt: t
		});
	};
	function v(t) {
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), c = l.communityName, m = l.errorToastOnAddParticipantLimit, v = l.header, S = l.initialSelectedOutContacts, R = S === void 0 ? [] : S, L = l.initialSelectedSubgroup, E = l.nextBtn, k = l.nextBtnContainerXstyle, I = l.nextBtnDetail, T = l.onBack, D = l.onCancel, x = l.onChange, $ = l.onKeyboardEnter, P = l.onOutContactSelectionChange, N = l.parentGroupId, M = l.participants, w = l.selectionSizeLimit, A = l.selectionSizeMin, F = A === void 0 ? 1 : A, O = l.sourceGroupMembers, B = l.testid, W = l.tsNavigationData, q = r("useWAWebUnmountSignal")(), U = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), V = f(null), H = f(null), G = f(null), z = f(null), j = g(L), K = j[0], Q = j[1], X = g(""), Y = X[0], J = X[1], Z = g(!0), ee = Z[0], te = Z[1], ne = g(!1), re = ne[0], oe = ne[1], ae = g(function() {
			return new Set(R.map(function(e) {
				return e.id.toString();
			}));
		}), ie = ae[0], le = ae[1], se = r("useWAWebFilteredOutContacts")(), ue = r("useWAWebFrequentlyContactedContacts")(), ce = !!N && o("WAWebABProps").getABPropConfigValue("parent_group_subgroup_filter"), de = !!(!K && N), me = N ? o("WAWebChatCollection").ChatCollection.get(N) : null, pe = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(me == null ? void 0 : me.groupMetadata), _e = o("useWAWebCommunityMembers").useCommunityMembers(me, pe), fe = _e.members, ge = r("useWAWebCommunitySubgroups")(me == null ? void 0 : me.groupMetadata), he = ge.joinedSubgroups, ye = _(function() {
			var e = [];
			if (!ce || !he.length) return e;
			var t = he.map(function(e) {
				return o("WAWebChatCollection").ChatCollection.assertGet(e);
			}).filter(function(e) {
				var t;
				return ((t = e.groupMetadata) == null ? void 0 : t.groupType) !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
			}).sort(r("WAWebChatComparator"));
			return L && e.push(o("WAWebChatCollection").ChatCollection.assertGet(L)), t.forEach(function(t) {
				t.id.equals(L) || e.push(t);
			}), e;
		}, [
			ce,
			he,
			L
		]), Ce = function(t) {
			var e;
			H.current && (t.preventDefault(), t.stopPropagation(), (e = H.current) == null || e.focusFirst());
		}, be = function(t) {
			J(t.target.value);
		}, ve = function(t) {
			r("WAWebFocusTracer").focus(G.current);
		}, Se = function(t) {
			var e, n;
			t.repeat || ((e = G.current) == null ? void 0 : e.selectionStart) !== 0 || V.current && (t.preventDefault(), t.stopPropagation(), (n = V.current) == null || n.focusLast());
		}, Re = function(t, n) {
			var e = M.filter(function(e) {
				return !e.id.equals(n.id);
			});
			x(e), te(!e.length);
		}, Le = function(t) {
			var e = new Set(ie);
			if (e.delete(t.id.toString()), le(e), P != null && se != null) {
				var n = se.filter(function(t) {
					return e.has(t.id.toString());
				});
				P(Array.from(n));
			}
		}, Ee = function(t) {
			t.key === "Backspace" && !Y && M.length > 0 && (t.preventDefault(), x(M.slice(0, M.length - 1)), te(!0));
		}, ke = function() {
			r("WAWebFocusTracer").focus(G.current);
		}, Ie = function() {
			J("");
		}, Te = function(t) {
			x(M.filter(function(e) {
				return !t.id.equals(e.id);
			})), te(!0);
		}, De = function() {
			return M.length + ie.size;
		}, xe = function(t) {
			De() >= w ? o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
				msg: m,
				id: C
			})) : (J(""), x(M.concat(t)), te(!0));
		}, $e = function(t) {
			oe(!0), o("WAWebBlockContactAction").unblockContact(t).then(function() {
				q.aborted || (xe(t), oe(!1));
			}).catch(function() {
				oe(!1);
			});
		}, Pe = function() {
			var e, t = [];
			if (K && ce) {
				var n = r("WAWebGroupMetadataCollection").assertGet(K), a = [];
				n.participants.forEach(function(e) {
					o("WAWebContactGetters").getIsMe(e.contact) || a.push(e.contact);
				}), e = Array.from(new Set(a).difference(new Set(M)));
			} else {
				var i = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {}), l = [];
				fe && de && (l = fe.filter(function(e) {
					var t = e.id;
					return !o("WAWebUserPrefsMeUser").isMeAccount(t) && !t.isLid();
				}).sort(o("WAWebContactComparator").ContactComparator), t = Array.from(new Set(l).difference(new Set(M))));
				var s = !Y && t.length === 0 && (O == null || O.length === 0) ? ue : [];
				e = Array.from(new Set(i).difference(new Set([].concat(M, l, s))));
			}
			var u = Y;
			if (!u) return {
				contacts: e,
				communityDirectory: t
			};
			u = o("WAWebL10NAccentFold").accentFold(u);
			var c = o("WAWebPhoneNumberSearch").numberSearch(u), d = function(t) {
				return t.searchMatchExact(u, c) != null;
			};
			return {
				contacts: e.filter(d),
				communityDirectory: t.filter(d)
			};
		}, Ne = Pe(), Me = Ne.communityDirectory, we = Ne.contacts, Ae = _(function() {
			if (se == null || se.length === 0) {
				var e = [];
				return e;
			}
			var t = Y ? o("WAWebL10NAccentFold").accentFold(Y) : "", n = Y ? o("WAWebPhoneNumberSearch").numberSearch(t) : null;
			return se.filter(function(e) {
				return !ie.has(e.id.toString()) && (!Y || e.searchMatchExact(t, n) != null);
			}).sort(o("WAWebContactComparator").ContactComparator);
		}, [
			se,
			Y,
			ie
		]), Fe = _(function() {
			return Ae.length === 0 ? we : o("WAWebContactUtils").mergeSortedContacts(we, Ae);
		}, [we, Ae]), Oe = _(function() {
			if (O == null || O.length === 0) {
				var e = [];
				return e;
			}
			if (!Y) return Array.from(O);
			var t = o("WAWebL10NAccentFold").accentFold(Y), n = o("WAWebPhoneNumberSearch").numberSearch(t);
			return O.filter(function(e) {
				return e.searchMatchExact(t, n) != null;
			});
		}, [O, Y]), Be = _(function() {
			if (Oe.length > 0) return {
				contacts: Oe,
				header: s._(
					/*BTDS*/
					""
				)
			};
			if (Me.length > 0) return {
				contacts: Me,
				header: s._(
					/*BTDS*/
					"",
					[s._param("community-name", c)]
				)
			};
			if (!Y && ue.length > 0) {
				var e = new Set(M), t = ue.filter(function(t) {
					return !e.has(t) && !o("WAWebUserPrefsMeUser").isMeAccount(t.id);
				});
				if (t.length > 0) return {
					contacts: t,
					header: s._(
						/*BTDS*/
						""
					)
				};
			}
		}, [
			Me,
			c,
			Oe,
			ue,
			M,
			Y
		]), We = Fe.length === 0 && Be == null, qe = r("useWAWebUnknownContact")({
			phoneOrUsername: Y,
			searchPhoneNumber: We,
			searchUsername: We,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_GROUP
		}), Ue = qe.error, Ve = qe.loading, He = qe.onRetry, Ge = qe.unknownContactInfo, ze = function(t, n) {
			var e = M.find(function(e) {
				return e.id.equals(n.id);
			});
			e ? Te(n) : n.isContactBlocked ? o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "select-group-participants"
				},
				title: s._(
					/*BTDS*/
					""
				),
				onOK: function() {
					$e(n), o("WAWebModalManager").ModalManager.close();
				},
				onCancel: o("WAWebModalManager").closeModalManager,
				okText: s._(
					/*BTDS*/
					""
				),
				cancelText: s._(
					/*BTDS*/
					""
				),
				children: s._(
					/*BTDS*/
					""
				)
			})) : xe(n);
		}, je = function(t, n) {
			var e = ie.has(n.id.toString());
			if (!e && De() >= w) {
				o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
					msg: m,
					id: C
				}));
				return;
			}
			e || J("");
			var r = new Set(ie), a = n.id.toString();
			if (r.has(a) ? r.delete(a) : r.add(a), le(r), P != null && se != null) {
				var i = se.filter(function(e) {
					return r.has(e.id.toString());
				});
				P(Array.from(i));
			}
		}, Ke = r("useWAWebStableCallback")((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (e.preventDefault(), e.stopPropagation(), Ge != null) {
					var t = Ge.isUsernameSearch, n;
					if ((Ge == null ? void 0 : Ge.wid) == null) {
						var r = Y.startsWith("@");
						if (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
							contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP,
							searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
							isUsernameSearch: t,
							searchStartsWithAt: r
						}), Ge.triedKey && b(r, t), n = yield o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
							username: Ge.username,
							initWithError: Ge.triedKey,
							onInvalidKeyError: function() {
								return b(r, t);
							}
						}), n == null) return;
					} else n = Ge.wid;
					ze(e, o("WAWebContactCollection").ContactCollection.gadd(n));
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})()), Qe = function(t) {
			var e;
			t.preventDefault(), t.stopPropagation();
			var n = (e = Be == null ? void 0 : Be.contacts[0]) != null ? e : Fe.find(function(e) {
				return !(e instanceof r("WAWebOutContactModel"));
			}), o = Ae[0];
			n != null && !(n instanceof r("WAWebOutContactModel")) ? ze(t, n) : o instanceof r("WAWebOutContactModel") ? je(t, o) : Ge && Ke(t);
		};
		p(function() {
			G.current && ee && ke();
		}, [M, ee]);
		var Xe;
		re ? Xe = d.jsx("div", {
			className: "x78zum5 xl56j7k",
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				stroke: 6,
				size: 24
			})
		}) : (M.length >= F || N != null || ie.size > 0) && (Xe = E);
		var Ye = (a = se == null ? void 0 : se.filter(function(e) {
			return ie.has(e.id.toString());
		})) != null ? a : [], Je = o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled() ? o("WAWebUsernameSearchPlaceholder").getUsernameSearchPlaceholder() : r("WAWebFbtCommon")("Search name or number");
		M.length && (Je = " ");
		var Ze = function(t) {
			var e = t.target;
			e instanceof HTMLElement && e.getAttribute("data-custom-attr") === "selectedContact" || $();
		}, et;
		Y ? et = Qe : M.length ? et = Ze : et = r("WAWebNoop");
		var tt = {
			down: Ce,
			enter: et,
			up: Se
		};
		tt[r("WAWebL10N").LR("left", "right")] = Se;
		var nt;
		We ? Ve ? nt = d.jsx(o("WAWebEmptyState.react").SearchingNonContact, {}) : Ue ? nt = d.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
			error: o("WAWebContactlessChatUtils").getErrorStr(Ue),
			onClick: He
		}) : Ge ? nt = d.jsx(r("WAWebUnknownContactSection.react"), {
			contactInfo: Ge,
			onUnknownContactClick: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					return Ge && Ke(e);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(),
			searchText: Y
		}) : nt = d.jsx(o("WAWebEmptyState.react").SearchContacts, {}) : nt = d.jsx(r("WAWebChatContactList.react"), {
			ref: H,
			flatListController: U.current,
			contacts: Fe,
			separateContacts: Be,
			onClick: ze,
			onOutContactClick: P != null ? je : void 0,
			selectedOutContactIds: P != null ? ie : void 0,
			hideOutContactCheckbox: !0,
			inviteFlow: o("WAWebOutContactConsts").WAWebOutContactInviteFlow.GroupInvite,
			onFocusSearch: ve,
			showPersonGroupDivisionHeader: de || Oe.length > 0,
			searchText: Y,
			searchEntrypoint: "new_group"
		});
		var rt = function(t) {
			t.equals(K) ? Q(void 0) : Q(t);
		}, ot = function() {
			var e = [];
			for (var t of Fe) t instanceof r("WAWebOutContactModel") || e.push(t);
			var n = e.filter(function(e) {
				return !e.isContactBlocked;
			}), a = new Set(ie);
			Ae.forEach(function(e) {
				a.add(e.id.toString());
			});
			var i = a.size - ie.size;
			if (De() + n.length + i > w) o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
				msg: m,
				id: C
			}));
			else {
				if (J(""), x(M.concat(n)), le(a), P != null && se != null) {
					var l = se.filter(function(e) {
						return a.has(e.id.toString());
					});
					P(Array.from(l));
				}
				te(!0), n.length !== e.length && o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: {
						surface: "unknown",
						viewName: "select-group-participants"
					},
					title: s._(
						/*BTDS*/
						""
					),
					onOK: o("WAWebModalManager").closeModalManager,
					children: s._(
						/*BTDS*/
						""
					)
				}));
			}
		}, at = Ve ? d.jsx(r("WAWebUnstyledButton.react"), {
			onClick: Ie,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd2,
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				size: 20,
				stroke: 5,
				color: "highlight"
			})
		}) : null, it = ce ? d.jsx("div", {
			className: "x1xrf6ya xscbp6u xizuyw3 xhig867 x1280gxy x14aock7 xuxw1ft",
			children: ye.map(function(e, t) {
				return d.jsx(r("WAWebUnstyledButton.react"), {
					onClick: function() {
						return rt(e.id);
					},
					xstyle: [
						y.subgroup,
						t + 1 < ye.length && h.marginInlineEnd6,
						e.id.equals(K) && y.selectedSubgroup
					],
					children: d.jsxs(o("WAWebFlex.react").FlexRow, { children: [d.jsx(o("WAWebPeopleIcon.react").PeopleIcon, {
						width: 20,
						height: 20,
						xstyle: y.icon
					}), d.jsx(o("WAWebName.react").Name, { chat: e })] })
				}, e.id.toString());
			})
		}) : null, lt = K && ce ? d.jsx(r("WAWebUnstyledButton.react"), {
			onClick: ot,
			children: d.jsx(o("WAWebSelectAllIcon.react").SelectAllIcon, {
				title: s._(
					/*BTDS*/
					""
				),
				xstyle: y.selectAllIcon
			})
		}) : null, st = o("WAWebDrawerUtils").getDrawerHeaderType(l.viewType);
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: B,
			viewType: l.viewType,
			tsNavigationData: W != null ? W : void 0,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: v,
				type: st,
				onBack: T,
				onCancel: D
			}), d.jsxs(r("WAWebDrawerBody.react"), { children: [
				d.jsx("div", {
					className: "x9desvi xhig867 xscbp6u xizuyw3 xdj266r x14z9mp xat24cr x1lziwak x1280gxy",
					children: d.jsx("div", { children: d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
						handlers: tt,
						className: (u || (u = r("stylex")))(y.inputLine, h.paddingTop6, o("WDSPaddings.stylex").wdsPaddings.paddingBottom0, o("WDSPaddings.stylex").wdsPaddings.paddingHor2),
						children: [d.jsx(r("WAWebChatParticipantList.react"), {
							ref: V,
							theme: "list-names",
							contacts: M,
							outContacts: Ye,
							onDelete: Re,
							onDeleteOutContact: Le,
							onFocusSearch: ve
						}), d.jsxs(o("WAWebFlex.react").FlexRow, { children: [
							d.jsx("input", {
								"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH,
								"data-testid": "inputarea",
								className: o("WAWebClassnames").classnamesConvertMeToStylexPlease("x1rg5ohu xh8yej3 xt7dq6l x1gxa6cn xyri2b xa0aww2 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak x6prxxf x19v9tvf xzsf02u x16dsc37 xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1a2a7pz", o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS),
								ref: G,
								placeholder: Je,
								onKeyDown: Ee,
								onChange: be,
								value: Y,
								type: "text"
							}),
							d.jsx("span", {
								className: "xixxii4 xlshs6z",
								ref: z,
								children: Y
							}),
							lt,
							at
						] })]
					}) })
				}),
				it,
				d.jsx(r("WAWebFlatListContainer.react"), {
					className: "x1n2onr6 x1iyjqo2 xs83m0k x1r8uery x6ikm8r x1odjw0f x1280gxy",
					flatListControllers: [U.current],
					children: nt
				}),
				d.jsxs(r("WAWebVelocityTransitionGroup"), {
					transitionName: "btn",
					xstyle: [y.nextBtnSection, k],
					children: [Xe, I]
				})
			] })]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
