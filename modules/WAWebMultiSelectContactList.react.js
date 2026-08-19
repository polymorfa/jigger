__d("WAWebMultiSelectContactList.react", [
	"fbt",
	"WALogger",
	"WAWebCellFrame.react",
	"WAWebChatCollection",
	"WAWebChatUnblockableContactWrapper.react",
	"WAWebCheckboxSelectableWrapper.react",
	"WAWebContactCollection",
	"WAWebContactComparator",
	"WAWebContactSyncLogger",
	"WAWebContactUtils",
	"WAWebContactlessChatUtils",
	"WAWebEmptyState.react",
	"WAWebFbtCommon",
	"WAWebFlatList.react",
	"WAWebFocusTracer",
	"WAWebFrontendContactGetters",
	"WAWebL10NAccentFold",
	"WAWebMultiSelectListHotKeys.react",
	"WAWebNonContactPushNameSearchModel",
	"WAWebOutContactCell.react",
	"WAWebOutContactConsts",
	"WAWebOutContactModel",
	"WAWebPhoneNumberSearch",
	"WAWebProfileImage.react",
	"WAWebSectionHeader.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebUsernameSearchLogger",
	"WAWebUsernameUtils",
	"WAWebWamEnumContactSearchEntrypoint",
	"WAWebWamEnumSearchActionName",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebUnknownContact"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useImperativeHandle, f = m.useMemo, g = m.useRef, h = { emptyStateFill: {
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		flexGrow: "x1iyjqo2",
		minHeight: "x2lwn1j",
		$$css: !0
	} }, y = {
		YOU: "YOU",
		CONTACTS: "CONTACTS",
		UNKNOWN_CONTACTS: "UNKNOWN_CONTACTS",
		FOLLOWERS: "FOLLOWERS",
		MEMBERS: "MEMBERS",
		NON_CONTACT_PUSHNAME: "NON_CONTACT_PUSHNAME"
	}, C = {
		ROW_CONTACTS: "ROW_CONTACTS",
		ROW_OUT_CONTACT: "ROW_OUT_CONTACT",
		ROW_USERNAME_CONTACTS: "ROW_USERNAME_CONTACTS"
	};
	function b(e) {
		var t, n = e.allContacts, r = e.outContacts, a = e.searchText, i = e.selectedUnknownContacts;
		if (!a) return {
			contacts: n,
			selectedUnknownContacts: i,
			filteredOutContacts: r != null ? [].concat(r).sort(o("WAWebContactComparator").ContactComparator) : []
		};
		var l = o("WAWebL10NAccentFold").accentFold(a), s = o("WAWebPhoneNumberSearch").numberSearch(l), u = function(t) {
			return t.filter(function(e) {
				return e.searchMatchExact(l, s);
			});
		};
		return {
			contacts: u(n),
			selectedUnknownContacts: u(i),
			filteredOutContacts: (t = r == null ? void 0 : r.filter(function(e) {
				return e.searchMatchExact(l, s) != null;
			}).sort(o("WAWebContactComparator").ContactComparator)) != null ? t : []
		};
	}
	function v(e) {
		var t = e.active, a = e.allowBlockedContacts, i = e.customSecondaryText, l = e.data, c = e.handleContactClick, m = e.handleUsernameContactRowClicked, p = e.includeYouSection, _ = e.isDisabled, f = e.isSelected, g = e.onOutContactToggle, h = e.outContactInviteEntryPoint, b = e.outContactSelections, v = e.selections;
		switch (l.type) {
			case y.YOU: return d.jsx(r("WAWebSectionHeader.react"), { header: s._(
				/*BTDS*/
				""
			) });
			case y.CONTACTS: return d.jsx(r("WAWebSectionHeader.react"), { header: s._(
				/*BTDS*/
				""
			) });
			case y.MEMBERS: return d.jsx(r("WAWebSectionHeader.react"), { header: s._(
				/*BTDS*/
				""
			) });
			case y.FOLLOWERS: return d.jsx(r("WAWebSectionHeader.react"), { header: r("WAWebFbtCommon")("Followers") });
			case y.UNKNOWN_CONTACTS: return d.jsx(r("WAWebSectionHeader.react"), { header: r("WAWebFbtCommon")("Not in your contacts") });
			case y.NON_CONTACT_PUSHNAME: return d.jsx(r("WAWebSectionHeader.react"), { header: o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader() });
			case C.ROW_CONTACTS: {
				var S, R = l.data, L = l.isUnknownContact, E = function() {
					return c(R, L);
				}, k = s._(
					/*BTDS*/
					"",
					[s._param("contact-name", R.name)]
				), I = (f == null ? void 0 : f(R)) || v.isSelected(R), T = (S = _ == null ? void 0 : _(R)) != null ? S : !1;
				return d.jsx(r("WAWebCheckboxSelectableWrapper.react"), {
					checkboxAriaLabel: k,
					model: R,
					selections: v,
					checked: I,
					disabled: T,
					testid: "multi-select-contact-list-item",
					children: d.jsx(r("WAWebChatUnblockableContactWrapper.react"), {
						contact: R,
						disabled: T,
						onSelect: E,
						customSecondaryText: i == null ? void 0 : i(R.id),
						active: t,
						allowBlockedContacts: a,
						hideYouSuffix: p,
						role: "checkbox",
						checked: I
					})
				}, R.id.toString());
			}
			case C.ROW_OUT_CONTACT: {
				var D = l.data, x = b.isSelected(D), $ = s._(
					/*BTDS*/
					"",
					[s._param("contact-name", D.getName())]
				);
				return d.jsx(r("WAWebCheckboxSelectableWrapper.react"), {
					checkboxAriaLabel: $,
					model: D,
					selections: b,
					checked: x,
					onClick: function() {
						return g(D);
					},
					wrapperTestid: "multi-select-out-contact",
					children: d.jsx(r("WAWebOutContactCell.react"), {
						contact: D,
						entryPoint: h,
						inviteFlow: l.inviteFlow,
						theme: "chat-checkbox"
					})
				});
			}
			case C.ROW_USERNAME_CONTACTS: {
				var P = l.data, N = P.username, M = P.triedKey, w = P.isUsernameSearch, A = "@" + N, F = d.jsx(r("WAWebProfileImage.react"), {}), O = l.data.searchQuery.startsWith("@"), B = m ? o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP : void 0, W = (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						var e = o("WAWebUsernameUtils").getLIDByUsername(N), t = e != null ? o("WAWebContactCollection").ContactCollection.get(e) : null, n = t != null && o("WAWebFrontendContactGetters").getIsMyContact(t), r = e ? o("WAWebChatCollection").ChatCollection.get(e) != null : !1, a;
						if (n && r ? a = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT_WITH_EXISTING_CHAT : !n && r ? a = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT : n ? a = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT : a = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT, o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
							contactSearchEntrypoint: B,
							searchActionName: a,
							isUsernameSearch: w,
							searchStartsWithAt: O
						}), e) {
							c(o("WAWebContactCollection").ContactCollection.assertGet(e), !0);
							return;
						}
						if (m) {
							yield m({
								username: N,
								triedKey: M,
								isUsernameSearch: w
							});
							return;
						}
						var i = yield o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
							username: N,
							initWithError: M
						});
						i && c(o("WAWebContactCollection").ContactCollection.gadd(i), !0);
					});
					return function() {
						return e.apply(this, arguments);
					};
				})();
				return d.jsx(r("WAWebCellFrame.react"), {
					image: F,
					primary: A,
					onClick: W,
					focusable: !0
				});
			}
			default: throw o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["UnknownDataError: invoked from WAWebMultiSelectContactList"]))), new (o("WAWebFlatList.react")).UnknownDataError(l);
		}
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.active, l = a.allowBlockedContacts, u = a.allowUnknownContactSearch, c = u === void 0 ? !0 : u, m = a.contacts, S = a.customSecondaryText, R = a.flatListController, L = a.getInitialItems, E = a.handleUsernameContactRowClicked, k = a.includeYouSection, I = k === void 0 ? !1 : k, T = a.isDisabled, D = a.isSelected, x = a.maxContacts, $ = a.maxContactsExceedErrorMsg, P = a.noResultsText, N = a.onLoading, M = a.onSelectionChanged, w = a.outContactInviteEntryPoint, A = a.outContacts, F = a.outContactSelections, O = a.searchText, B = a.selections, W = a.targetWindow, q = a.updateSelectedContactsState, U = g(null), V = g(), H = g(new Set()), G = f(function() {
			return c ? o("WAWebNonContactPushNameSearchModel").searchNonContactPushnames(O) : o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES;
		}, [c, O]), z = b({
			allContacts: a.contacts,
			outContacts: A,
			searchText: O,
			selectedUnknownContacts: Array.from(H.current)
		}), j = z.contacts, K = z.filteredOutContacts, Q = z.selectedUnknownContacts, X = j.length === 0 && Q.length === 0 && c, Y = r("useWAWebUnknownContact")({
			phoneOrUsername: O,
			searchPhoneNumber: X,
			searchUsername: X,
			onLoading: N,
			requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_CONTACT_LIST
		}), J = Y.error, Z = Y.loading, ee = Y.onRetry, te = Y.unknownContactInfo, ne;
		if (te != null && te.wid) {
			var re, oe = te.chat, ae = te.wid;
			ne = (re = oe == null ? void 0 : oe.contact) != null ? re : o("WAWebContactCollection").ContactCollection.gadd(ae);
		}
		var ie = f(function() {
			return o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(G, j, Q, ne != null ? [ne] : []);
		}, [
			j,
			G,
			Q,
			ne
		]);
		p(function() {
			L && L().forEach(function(e) {
				return B.setVal(e, !0);
			});
		}, []);
		var le = function(t) {
			var e;
			(e = V.current) == null || e.scrollIntoViewIfNeeded(t);
		}, se = function() {
			if (typeof x != "number") return !1;
			var e = F.getSelected().length;
			return B.getSelected().length + e >= x ? (o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: $ != null ? $ : s._(
				/*BTDS*/
				"",
				[s._plural(x, "count")]
			) })), !0) : !1;
		}, ue = function(t) {
			var e = t.contact, n = t.focus, r = t.isUnknownContact, o = t.selected;
			o && se() || (B.setVal(e, o, n), i.setVal(e, n), M && M(e, o), r && H.current.add(e));
		}, ce = function() {
			var e = [];
			if (I && !O) {
				var t = o("WAWebContactCollection").ContactCollection.getMeContact();
				t != null && e.push(t);
			}
			return e.push.apply(e, j.concat(Q)), ne && e.push(ne), e.push.apply(e, ie), e;
		}, de = function(t, n) {
			if (!(T != null && T(t))) {
				var e = B.isSelected(t);
				q == null || q(t, e), ue({
					contact: t,
					focus: !1,
					isUnknownContact: n,
					selected: !e
				});
			}
		}, me = function(t) {
			var e = F.isSelected(t);
			!e && se() || F.setVal(t, !e);
		}, pe = function() {
			U.current && r("WAWebFocusTracer").focus(U.current);
		}, _e = function() {
			i.unset();
		}, fe = function() {
			var e, t = B.getSelected(), n = F.getSelected(), r = t.length + n.length, o = m.length + ((e = A == null ? void 0 : A.length) != null ? e : 0);
			r === o ? (B.unsetAll(), F.unsetAll()) : (m.forEach(function(e) {
				B.setVal(e, !0, !1);
			}), A == null || A.forEach(function(e) {
				F.setVal(e, !0, !1);
			}));
		}, ge = function(t) {
			var e, n = !1;
			if (j.length ? e = j[0] : Q.length ? (e = Q[0], n = !0) : ne ? (e = ne, n = !0) : ie.length && (e = ie[0], n = !0), e) {
				var r = !B.isSelected(e);
				ue({
					contact: e,
					focus: t,
					isUnknownContact: n,
					selected: r
				});
			} else if (A != null && A.length > 0) {
				var o = A[0], a = !F.isSelected(o);
				if (a && se()) return;
				F.setVal(o, a);
			}
		}, he = function() {
			if (a.customGetKnownContacts != null) return a.customGetKnownContacts(j);
			var e = [];
			if (I && !O) {
				var t = o("WAWebContactCollection").ContactCollection.getMeContact();
				t != null && (e.push({
					itemKey: y.YOU,
					type: y.YOU
				}), e.push({
					itemKey: t.id.toString(),
					type: C.ROW_CONTACTS,
					data: t,
					isUnknownContact: !1
				}));
			}
			if (K.length > 0) {
				var n = o("WAWebContactUtils").mergeSortedContacts(j, K);
				n.length > 0 && (e.push({
					itemKey: y.CONTACTS,
					type: y.CONTACTS
				}), e.push.apply(e, n.map(function(e) {
					return e instanceof r("WAWebOutContactModel") ? {
						itemKey: "oc-" + e.id,
						type: C.ROW_OUT_CONTACT,
						data: e,
						inviteFlow: o("WAWebOutContactConsts").WAWebOutContactInviteFlow.GroupInvite
					} : {
						itemKey: e.id.toString(),
						type: C.ROW_CONTACTS,
						data: e,
						isUnknownContact: !1
					};
				})));
			} else j.length && (e.push({
				itemKey: y.CONTACTS,
				type: y.CONTACTS
			}), e.push.apply(e, j.map(function(e) {
				return {
					itemKey: e.id.toString(),
					type: C.ROW_CONTACTS,
					data: e,
					isUnknownContact: !1
				};
			})));
			return e;
		}, ye = function() {
			return ie.length ? [{
				itemKey: y.NON_CONTACT_PUSHNAME,
				type: y.NON_CONTACT_PUSHNAME
			}].concat(ie.map(function(e) {
				return {
					itemKey: "non-contact-pushname-" + e.id.toString(),
					type: C.ROW_CONTACTS,
					data: e,
					isUnknownContact: !0
				};
			})) : [];
		}, Ce = function() {
			return Q.length ? [{
				itemKey: y.UNKNOWN_CONTACTS,
				type: y.UNKNOWN_CONTACTS
			}].concat(Q.map(function(e) {
				return {
					itemKey: e.id.toString(),
					type: C.ROW_CONTACTS,
					data: e,
					isUnknownContact: !0
				};
			})) : ne ? [{
				itemKey: y.UNKNOWN_CONTACTS,
				type: y.UNKNOWN_CONTACTS
			}, {
				itemKey: ne.id.toString(),
				type: C.ROW_CONTACTS,
				data: ne,
				isUnknownContact: !0
			}] : te && te.wid == null && o("WAWebUsernameGatingUtils").usernameSearchEnabled() ? [{
				itemKey: y.UNKNOWN_CONTACTS,
				type: y.UNKNOWN_CONTACTS
			}, {
				itemKey: "unknown-contact-" + te.username,
				type: C.ROW_USERNAME_CONTACTS,
				data: te
			}] : [];
		}, be = function() {
			return [].concat(he(), Ce(), ye());
		}, ve, Se = !1;
		!j.length && K.length === 0 && !Q.length && !ie.length && !te ? (Se = !0, O ? Z ? ve = d.jsx(o("WAWebEmptyState.react").SearchingNonContact, {}) : J ? ve = d.jsx(o("WAWebEmptyState.react").SearchingNonContactError, {
			error: o("WAWebContactlessChatUtils").getErrorStr(J),
			onClick: ee
		}) : ve = d.jsx(o("WAWebEmptyState.react").Search, { noResultsText: P }) : ve = d.jsx(o("WAWebEmptyState.react").ListChats, {})) : ve = d.jsx(o("WAWebFlatList.react").FlatList, {
			ref: V,
			flatListController: R,
			direction: "vertical",
			forceConsistentRenderCount: !1,
			data: be(),
			targetWindow: W,
			renderItem: function(t) {
				return d.jsx(v, {
					handleUsernameContactRowClicked: E,
					data: t,
					active: i,
					handleContactClick: de,
					allowBlockedContacts: l,
					customSecondaryText: S,
					isDisabled: T,
					isSelected: D,
					onOutContactToggle: me,
					outContactInviteEntryPoint: w,
					outContactSelections: F,
					selections: B,
					includeYouSection: I
				});
			}
		});
		var Re = ie.map(function(e) {
			return e.id.toString();
		}).join(",");
		return p(function() {
			i.init(ce());
		}, [
			O,
			ne,
			Re
		]), _(n, function() {
			return {
				focus: pe,
				clearActive: _e,
				selectAll: fe,
				toggleFirst: ge
			};
		}), d.jsx(r("WAWebMultiSelectListHotKeys.react"), {
			active: a.active,
			onLeave: a.onLeaveList,
			ref: U,
			onIndexChange: le,
			xstyle: Se ? h.emptyStateFill : void 0,
			children: ve
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	var R = S;
	l.ContactListSection = y, l.Row = C, l.MultiSelectContactList = R;
}), 226);
