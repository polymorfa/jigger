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
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.communityName, c = i.errorToastOnAddParticipantLimit, m = i.header, v = i.initialSelectedOutContacts, S = v === void 0 ? [] : v, R = i.initialSelectedSubgroup, L = i.nextBtn, E = i.nextBtnContainerXstyle, k = i.nextBtnDetail, I = i.onBack, T = i.onCancel, D = i.onChange, x = i.onKeyboardEnter, $ = i.onOutContactSelectionChange, P = i.parentGroupId, N = i.participants, M = i.selectionSizeLimit, w = i.selectionSizeMin, A = w === void 0 ? 1 : w, F = i.sourceGroupMembers, O = i.testid, B = i.tsNavigationData, W = r("useWAWebUnmountSignal")(), q = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), U = f(null), V = f(null), H = f(null), G = f(null), z = g(R), j = z[0], K = z[1], Q = g(""), X = Q[0], Y = Q[1], J = g(!0), Z = J[0], ee = J[1], te = g(!1), ne = te[0], re = te[1], oe = g(function() {
			return new Set(S.map(function(e) {
				return e.id.toString();
			}));
		}), ae = oe[0], ie = oe[1], le = r("useWAWebFilteredOutContacts")(), se = r("useWAWebFrequentlyContactedContacts")(), ue = !!P && o("WAWebABProps").getABPropConfigValue("parent_group_subgroup_filter"), ce = !!(!j && P), de = P ? o("WAWebChatCollection").ChatCollection.get(P) : null, me = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(de == null ? void 0 : de.groupMetadata), pe = o("useWAWebCommunityMembers").useCommunityMembers(de, me), _e = pe.members, fe = r("useWAWebCommunitySubgroups")(de == null ? void 0 : de.groupMetadata), ge = fe.joinedSubgroups, he = _(function() {
			var e = [];
			if (!ue || !ge.length) return e;
			var t = ge.map(function(e) {
				return o("WAWebChatCollection").ChatCollection.assertGet(e);
			}).filter(function(e) {
				var t;
				return ((t = e.groupMetadata) == null ? void 0 : t.groupType) !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
			}).sort(r("WAWebChatComparator"));
			return R && e.push(o("WAWebChatCollection").ChatCollection.assertGet(R)), t.forEach(function(t) {
				t.id.equals(R) || e.push(t);
			}), e;
		}, [
			ue,
			ge,
			R
		]), ye = function(t) {
			var e;
			V.current && (t.preventDefault(), t.stopPropagation(), (e = V.current) == null || e.focusFirst());
		}, Ce = function(t) {
			Y(t.target.value);
		}, be = function(t) {
			r("WAWebFocusTracer").focus(H.current);
		}, ve = function(t) {
			var e, n;
			t.repeat || ((e = H.current) == null ? void 0 : e.selectionStart) !== 0 || U.current && (t.preventDefault(), t.stopPropagation(), (n = U.current) == null || n.focusLast());
		}, Se = function(t, n) {
			var e = N.filter(function(e) {
				return !e.id.equals(n.id);
			});
			D(e), ee(!e.length);
		}, Re = function(t) {
			var e = new Set(ae);
			if (e.delete(t.id.toString()), ie(e), $ != null && le != null) {
				var n = le.filter(function(t) {
					return e.has(t.id.toString());
				});
				$(Array.from(n));
			}
		}, Le = function(t) {
			t.key === "Backspace" && !X && N.length > 0 && (t.preventDefault(), D(N.slice(0, N.length - 1)), ee(!0));
		}, Ee = function() {
			r("WAWebFocusTracer").focus(H.current);
		}, ke = function() {
			Y("");
		}, Ie = function(t) {
			D(N.filter(function(e) {
				return !t.id.equals(e.id);
			})), ee(!0);
		}, Te = function() {
			return N.length + ae.size;
		}, De = function(t) {
			Te() >= M ? o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
				msg: c,
				id: C
			})) : (Y(""), D(N.concat(t)), ee(!0));
		}, xe = function(t) {
			re(!0), o("WAWebBlockContactAction").unblockContact(t).then(function() {
				W.aborted || (De(t), re(!1));
			}).catch(function() {
				re(!1);
			});
		}, $e = function() {
			var e, t = [];
			if (j && ue) {
				var n = r("WAWebGroupMetadataCollection").assertGet(j), a = [];
				n.participants.forEach(function(e) {
					o("WAWebContactGetters").getIsMe(e.contact) || a.push(e.contact);
				}), e = Array.from(new Set(a).difference(new Set(N)));
			} else {
				var i = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {}), l = [];
				_e && ce && (l = _e.filter(function(e) {
					var t = e.id;
					return !o("WAWebUserPrefsMeUser").isMeAccount(t) && !t.isLid();
				}).sort(o("WAWebContactComparator").ContactComparator), t = Array.from(new Set(l).difference(new Set(N))));
				var s = !X && t.length === 0 && (F == null || F.length === 0) ? se : [];
				e = Array.from(new Set(i).difference(new Set([].concat(N, l, s))));
			}
			var u = X;
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
		}, Pe = $e(), Ne = Pe.communityDirectory, Me = Pe.contacts, we = _(function() {
			if (le == null || le.length === 0) {
				var e = [];
				return e;
			}
			var t = X ? o("WAWebL10NAccentFold").accentFold(X) : "", n = X ? o("WAWebPhoneNumberSearch").numberSearch(t) : null;
			return le.filter(function(e) {
				return !ae.has(e.id.toString()) && (!X || e.searchMatchExact(t, n) != null);
			}).sort(o("WAWebContactComparator").ContactComparator);
		}, [
			le,
			X,
			ae
		]), Ae = _(function() {
			return we.length === 0 ? Me : o("WAWebContactUtils").mergeSortedContacts(Me, we);
		}, [Me, we]), Fe = _(function() {
			if (F == null || F.length === 0) {
				var e = [];
				return e;
			}
			if (!X) return Array.from(F);
			var t = o("WAWebL10NAccentFold").accentFold(X), n = o("WAWebPhoneNumberSearch").numberSearch(t);
			return F.filter(function(e) {
				return e.searchMatchExact(t, n) != null;
			});
		}, [F, X]), Oe = _(function() {
			if (Fe.length > 0) return {
				contacts: Fe,
				header: s._(
					/*BTDS*/
					""
				)
			};
			if (Ne.length > 0) return {
				contacts: Ne,
				header: s._(
					/*BTDS*/
					"",
					[s._param("community-name", l)]
				)
			};
			if (!X && se.length > 0) {
				var e = new Set(N), t = se.filter(function(t) {
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
			Ne,
			l,
			Fe,
			se,
			N,
			X
		]), Be = Ae.length === 0 && Oe == null, We = r("useWAWebUnknownContact")({
			phoneOrUsername: X,
			searchPhoneNumber: Be,
			searchUsername: Be,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_GROUP
		}), qe = We.error, Ue = We.loading, Ve = We.onRetry, He = We.unknownContactInfo, Ge = function(t, n) {
			var e = N.find(function(e) {
				return e.id.equals(n.id);
			});
			e ? Ie(n) : n.isContactBlocked ? o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "select-group-participants"
				},
				title: s._(
					/*BTDS*/
					""
				),
				onOK: function() {
					xe(n), o("WAWebModalManager").ModalManager.close();
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
			})) : De(n);
		}, ze = function(t, n) {
			var e = ae.has(n.id.toString());
			if (!e && Te() >= M) {
				o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
					msg: c,
					id: C
				}));
				return;
			}
			e || Y("");
			var r = new Set(ae), a = n.id.toString();
			if (r.has(a) ? r.delete(a) : r.add(a), ie(r), $ != null && le != null) {
				var i = le.filter(function(e) {
					return r.has(e.id.toString());
				});
				$(Array.from(i));
			}
		}, je = r("useWAWebStableCallback")(async function(e) {
			if (e.preventDefault(), e.stopPropagation(), He != null) {
				var t = He.isUsernameSearch, n;
				if ((He == null ? void 0 : He.wid) == null) {
					var r = X.startsWith("@");
					if (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
						contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP,
						searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
						isUsernameSearch: t,
						searchStartsWithAt: r
					}), He.triedKey && b(r, t), n = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
						username: He.username,
						initWithError: He.triedKey,
						onInvalidKeyError: function() {
							return b(r, t);
						}
					}), n == null) return;
				} else n = He.wid;
				Ge(e, o("WAWebContactCollection").ContactCollection.gadd(n));
			}
		}), Ke = function(t) {
			var e;
			t.preventDefault(), t.stopPropagation();
			var n = (e = Oe == null ? void 0 : Oe.contacts[0]) != null ? e : Ae.find(function(e) {
				return !(e instanceof r("WAWebOutContactModel"));
			}), o = we[0];
			n != null && !(n instanceof r("WAWebOutContactModel")) ? Ge(t, n) : o instanceof r("WAWebOutContactModel") ? ze(t, o) : He && je(t);
		};
		p(function() {
			H.current && Z && Ee();
		}, [N, Z]);
		var Qe;
		ne ? Qe = d.jsx("div", {
			className: "x78zum5 xl56j7k",
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				stroke: 6,
				size: 24
			})
		}) : (N.length >= A || P != null || ae.size > 0) && (Qe = L);
		var Xe = (n = le == null ? void 0 : le.filter(function(e) {
			return ae.has(e.id.toString());
		})) != null ? n : [], Ye = o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled() ? o("WAWebUsernameSearchPlaceholder").getUsernameSearchPlaceholder() : r("WAWebFbtCommon")("Search name or number");
		N.length && (Ye = " ");
		var Je = function(t) {
			var e = t.target;
			e instanceof HTMLElement && e.getAttribute("data-custom-attr") === "selectedContact" || x();
		}, Ze;
		X ? Ze = Ke : N.length ? Ze = Je : Ze = r("WAWebNoop");
		var et = {
			down: ye,
			enter: Ze,
			up: ve
		};
		et[r("WAWebL10N").LR("left", "right")] = ve;
		var tt;
		Be ? Ue ? tt = d.jsx(o("WAWebEmptyState.react").SearchingNonContact, {}) : qe ? tt = d.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
			error: o("WAWebContactlessChatUtils").getErrorStr(qe),
			onClick: Ve
		}) : He ? tt = d.jsx(r("WAWebUnknownContactSection.react"), {
			contactInfo: He,
			onUnknownContactClick: async function(t) {
				return He && je(t);
			},
			searchText: X
		}) : tt = d.jsx(o("WAWebEmptyState.react").SearchContacts, {}) : tt = d.jsx(r("WAWebChatContactList.react"), {
			ref: V,
			flatListController: q.current,
			contacts: Ae,
			separateContacts: Oe,
			onClick: Ge,
			onOutContactClick: $ != null ? ze : void 0,
			selectedOutContactIds: $ != null ? ae : void 0,
			hideOutContactCheckbox: !0,
			inviteFlow: o("WAWebOutContactConsts").WAWebOutContactInviteFlow.GroupInvite,
			onFocusSearch: be,
			showPersonGroupDivisionHeader: ce || Fe.length > 0,
			searchText: X,
			searchEntrypoint: "new_group"
		});
		var nt = function(t) {
			t.equals(j) ? K(void 0) : K(t);
		}, rt = function() {
			var e = [];
			for (var t of Ae) t instanceof r("WAWebOutContactModel") || e.push(t);
			var n = e.filter(function(e) {
				return !e.isContactBlocked;
			}), a = new Set(ae);
			we.forEach(function(e) {
				a.add(e.id.toString());
			});
			var i = a.size - ae.size;
			if (Te() + n.length + i > M) o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
				msg: c,
				id: C
			}));
			else {
				if (Y(""), D(N.concat(n)), ie(a), $ != null && le != null) {
					var l = le.filter(function(e) {
						return a.has(e.id.toString());
					});
					$(Array.from(l));
				}
				ee(!0), n.length !== e.length && o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
		}, ot = Ue ? d.jsx(r("WAWebUnstyledButton.react"), {
			onClick: ke,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd2,
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				size: 20,
				stroke: 5,
				color: "highlight"
			})
		}) : null, at = ue ? d.jsx("div", {
			className: "x1xrf6ya xscbp6u xizuyw3 xhig867 x1280gxy x14aock7 xuxw1ft",
			children: he.map(function(e, t) {
				return d.jsx(r("WAWebUnstyledButton.react"), {
					onClick: function() {
						return nt(e.id);
					},
					xstyle: [
						y.subgroup,
						t + 1 < he.length && h.marginInlineEnd6,
						e.id.equals(j) && y.selectedSubgroup
					],
					children: d.jsxs(o("WAWebFlex.react").FlexRow, { children: [d.jsx(o("WAWebPeopleIcon.react").PeopleIcon, {
						width: 20,
						height: 20,
						xstyle: y.icon
					}), d.jsx(o("WAWebName.react").Name, { chat: e })] })
				}, e.id.toString());
			})
		}) : null, it = j && ue ? d.jsx(r("WAWebUnstyledButton.react"), {
			onClick: rt,
			children: d.jsx(o("WAWebSelectAllIcon.react").SelectAllIcon, {
				title: s._(
					/*BTDS*/
					""
				),
				xstyle: y.selectAllIcon
			})
		}) : null, lt = o("WAWebDrawerUtils").getDrawerHeaderType(i.viewType);
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			testid: O,
			viewType: i.viewType,
			tsNavigationData: B != null ? B : void 0,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: m,
				type: lt,
				onBack: I,
				onCancel: T
			}), d.jsxs(r("WAWebDrawerBody.react"), { children: [
				d.jsx("div", {
					className: "x9desvi xhig867 xscbp6u xizuyw3 xdj266r x14z9mp xat24cr x1lziwak x1280gxy",
					children: d.jsx("div", { children: d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
						handlers: et,
						className: (u || (u = r("stylex")))(y.inputLine, h.paddingTop6, o("WDSPaddings.stylex").wdsPaddings.paddingBottom0, o("WDSPaddings.stylex").wdsPaddings.paddingHor2),
						children: [d.jsx(r("WAWebChatParticipantList.react"), {
							ref: U,
							theme: "list-names",
							contacts: N,
							outContacts: Xe,
							onDelete: Se,
							onDeleteOutContact: Re,
							onFocusSearch: be
						}), d.jsxs(o("WAWebFlex.react").FlexRow, { children: [
							d.jsx("input", {
								"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH,
								"data-testid": "inputarea",
								className: o("WAWebClassnames").classnamesConvertMeToStylexPlease("x1rg5ohu xh8yej3 xt7dq6l x1gxa6cn xyri2b xa0aww2 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak x6prxxf x19v9tvf xzsf02u x16dsc37 xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1a2a7pz", o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS),
								ref: H,
								placeholder: Ye,
								onKeyDown: Le,
								onChange: Ce,
								value: X,
								type: "text"
							}),
							d.jsx("span", {
								className: "xixxii4 xlshs6z",
								ref: G,
								children: X
							}),
							it,
							ot
						] })]
					}) })
				}),
				at,
				d.jsx(r("WAWebFlatListContainer.react"), {
					className: "x1n2onr6 x1iyjqo2 xs83m0k x1r8uery x6ikm8r x1odjw0f x1280gxy",
					flatListControllers: [q.current],
					children: tt
				}),
				d.jsxs(r("WAWebVelocityTransitionGroup"), {
					transitionName: "btn",
					xstyle: [y.nextBtnSection, E],
					children: [Qe, k]
				})
			] })]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
