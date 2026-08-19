__d("WAWebChatContactList.react", [
	"fbt",
	"WALogger",
	"WAWebBotGating",
	"WAWebBotProfileCollection",
	"WAWebChat.react",
	"WAWebChatCollection",
	"WAWebChatContact.react",
	"WAWebCheckboxSelectableWrapper.react",
	"WAWebContactCollection",
	"WAWebContactComparator",
	"WAWebContactGetters",
	"WAWebFlatList.react",
	"WAWebFrontendContactGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebMultiSelection",
	"WAWebOutContactCell.react",
	"WAWebOutContactLoggingUtils",
	"WAWebOutContactModel",
	"WAWebSectionHeader.react",
	"WAWebSingleSelection",
	"WAWebSpinner.react",
	"WAWebTabOrder",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameSearchLogger",
	"WAWebWamEnumContactSearchEntrypoint",
	"WAWebWamEnumSearchActionName",
	"react",
	"useLazyRef",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useImperativeHandle, _ = m.useMemo, f = m.useRef, g = 1, h = 2, y = 3, C = 4, b = 5, v = 6, S = 7, R = { sectionHeader: {
		fontWeight: "x1s688f",
		color: "xhslqc4",
		$$css: !0
	} }, L = o("WAWebChat.react").ChatFactory(), E = o("WAWebChatContact.react").ContactFactory();
	function k(e) {
		var t, n = e.ref, a = babelHelpers.objectWithoutPropertiesLoose(e, u), i = a.contacts, l = a.disabled, c = a.hideOutContactCheckbox, m = c === void 0 ? !1 : c, R = a.inviteFlow, L = a.onClick, E = a.onFocusAfterLast, k = a.onFocusSearch, T = a.onOutContactClick, D = a.personContactsHeader, x = a.searchEntrypoint, $ = a.searchText, P = a.selectedOutContactIds, N = a.separateContacts, M = a.showBot, w = M === void 0 ? !1 : M, A = a.showHeaderSpinner, F = A === void 0 ? !1 : A, O = a.showMe, B = O === void 0 ? !1 : O, W = a.showPersonGroupDivisionHeader, q = f(null), U = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), V = _(function() {
			var e = [], t = new (r("WAWebMultiSelection"))(e, function(e) {
				return "" + e.id;
			}), n = i.filter(function(e) {
				return e instanceof r("WAWebOutContactModel");
			});
			return t.init(n), P == null || P.forEach(function(e) {
				var r = n.find(function(t) {
					return t.id === e;
				});
				r != null && t.setVal(r, !0, !1);
			}), t;
		}, [i, P]), H = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), G = o("WAWebContactCollection").ContactCollection.assertGet(H), z = w && o("WAWebBotGating").isBotNewChatEntryPointEnabled() ? (t = o("WAWebBotProfileCollection").BotProfileCollection.getDefaultBot()) == null ? void 0 : t.contact : null, j = function() {
			var e = (N == null ? void 0 : N.contacts) || [], t = [], n = [], a = [];
			return i.forEach(function(e) {
				if (!(e instanceof r("WAWebOutContactModel"))) if (o("WAWebContactGetters").getIsGroup(e)) {
					var a = o("WAWebChatCollection").ChatCollection.get(e.id);
					a && n.push(a);
				} else t.push(e);
			}), B && a.push(G), z != null && a.push(z), a.concat(e, t, n);
		}, K = function() {
			U.current.setFirst(!0);
		}, Q = function() {
			U.current.setLast(!0);
		};
		p(n, function() {
			return {
				focusFirst: K,
				focusLast: Q
			};
		});
		var X = function(t) {
			if (t.target === q.current) {
				var e = U.current;
				e.index < 0 ? K() : e.reset(!0);
			}
		}, Y = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = U.current, n = e.next();
			n === e.index && E ? (e.unset(), E(t)) : e.setNext(!0);
		}, J = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = U.current, n = e.prev();
			n > -1 ? e.setPrev(!0) : k && (e.unset(), k(t));
		}, Z = function(t) {
			var e = t.relatedTarget;
			e instanceof HTMLElement && t.currentTarget instanceof HTMLElement && !t.currentTarget.contains(e) && U.current.unset();
		}, ee = function(t, n) {
			var e = n != null ? n : {}, r = e.isUsernameContact, a = t.id.toString();
			if (o("WAWebContactGetters").getIsGroup(t)) {
				var i = o("WAWebChatCollection").ChatCollection.get(t.id);
				return i ? {
					itemKey: a,
					data: i,
					type: C
				} : null;
			}
			return r === !0 ? {
				itemKey: a,
				data: t,
				type: v
			} : {
				itemKey: a,
				data: t,
				type: y
			};
		}, te = r("useWAWebStableCallback")(function(e) {
			if (e.length === 0) return [];
			var t = e[0], n;
			t instanceof r("WAWebOutContactModel") ? n = "contact" : n = o("WAWebContactGetters").getIsGroup(t) ? "group" : "contact";
			for (var a = [], i = e.length > 10, l = "XXX", s = 0; s < e.length; s++) {
				var u = e[s], c = o("WAWebContactComparator").headerOf(u);
				if (i && c && c !== l) {
					var d = s < e.length - 1 && c !== o("WAWebContactComparator").headerOf(e[s + 1]);
					a.push({
						itemKey: "header-" + n + "-" + c,
						data: c,
						separator: d,
						type: g,
						uppercase: !0
					}), l = c;
				}
				if (u instanceof r("WAWebOutContactModel")) a.push({
					itemKey: "out-" + u.phoneNumber,
					data: u,
					type: S
				});
				else {
					var m = ee(u);
					m && a.push(m);
				}
			}
			return a;
		}), ne = _(function() {
			var e = [], t = (N == null ? void 0 : N.contacts) || [], n = [], l = [];
			i.forEach(function(e) {
				e instanceof r("WAWebOutContactModel") ? n.push(e) : o("WAWebContactGetters").getIsGroup(e) ? l.push(e) : n.push(e);
			});
			var u = te(t), c = te(n), d = te(l), m;
			if (N != null && u.length > 0 && (e.push({
				itemKey: "header-" + N.header.toString(),
				data: N.header.toString(),
				separator: !0,
				type: g
			}), e.push.apply(e, u)), W && (c.length > 0 || B) && (m = D != null ? D : s._(
				/*BTDS*/
				""
			), e.push({
				itemKey: "header-" + m.toString(),
				data: m.toString(),
				separator: !0,
				spinner: F,
				type: g
			})), (B || z != null) && (B && e.push({
				itemKey: G.id.toString() + "-myself",
				data: G,
				type: h
			}), z != null && e.push({
				itemKey: z.id.toString(),
				data: z,
				type: b
			})), e.push.apply(e, c), W && d.length > 0) {
				var p;
				a.isCommunityCreation === !0 ? p = s._(
					/*BTDS*/
					""
				).toString() : p = s._(
					/*BTDS*/
					""
				).toString(), e.push({
					itemKey: "header-" + p,
					data: p,
					separator: !0,
					type: g
				});
			}
			return e.push.apply(e, d), e;
		}, [
			N,
			i,
			te,
			W,
			B,
			z,
			D,
			F,
			G,
			a.isCommunityCreation
		]);
		U.current.init(j());
		var re = {
			down: Y,
			up: J,
			"shift+tab": k
		};
		return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: q,
			handlers: re,
			onFocus: X,
			onBlur: Z,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_CONTACT_LIST,
			"data-testid": "contact-list-key",
			tabIndex: 0,
			children: d.jsx(o("WAWebFlatList.react").FlatList, {
				data: ne,
				renderItem: function(t) {
					return d.jsx(I, {
						data: t,
						disabled: l,
						active: U.current,
						onClick: L,
						onOutContactClick: T,
						outContactSelections: V,
						searchEntrypoint: x,
						selectedOutContactIds: P,
						hideOutContactCheckbox: m,
						inviteFlow: R,
						isSearchResult: !B,
						contextEnabled: a.contextEnabled,
						searchText: $
					});
				},
				flatListController: a.flatListController,
				direction: "vertical",
				reorderAnimationsEnabled: !1
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(t) {
		var n = t.active, a = t.contextEnabled, i = t.data, l = t.disabled, u = t.hideOutContactCheckbox, c = t.inviteFlow, m = t.isSearchResult, p = t.onClick, _ = t.onOutContactClick, f = t.outContactSelections, k = t.searchEntrypoint, I = t.searchText, T = t.selectedOutContactIds, D;
		switch (k === "new_chat" ? D = o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT : k === "new_group" && (D = o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP), i.type) {
			case C: {
				var x = i.data;
				return l === !0 ? d.jsx(L, {
					chat: x,
					mode: o("WAWebChat.react").Mode.INFO,
					noContext: !0,
					theme: "disabled"
				}) : d.jsx(L, {
					active: n,
					chat: x,
					mode: o("WAWebChat.react").Mode.INFO,
					noContext: !0,
					onClick: p
				});
			}
			case h: {
				var $ = i.data;
				return d.jsxs(d.Fragment, { children: [d.jsx(E, {
					active: n,
					contact: $,
					onClick: p,
					secondary: s._(
						/*BTDS*/
						""
					),
					waitIdle: !0,
					showMessageYourselfName: !0,
					isSearchResult: m
				}), !1] });
			}
			case b: {
				var P = i.data;
				return d.jsxs(d.Fragment, { children: [d.jsx(E, {
					active: n,
					contact: P,
					onClick: p,
					secondary: s._(
						/*BTDS*/
						""
					),
					waitIdle: !0,
					isSearchResult: m
				}), !1] });
			}
			case y: {
				var N = i.data;
				return d.jsx(E, {
					active: n,
					contact: N,
					onClick: function(t, n, r, a) {
						var e = o("WAWebFrontendContactGetters").getIsMyContact(n), i = o("WAWebChatCollection").ChatCollection.get(n.id) != null, l;
						e && i ? l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT_WITH_EXISTING_CHAT : !e && i ? l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT : e ? l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT : l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT;
						var s = I.startsWith("@");
						o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
							contactSearchEntrypoint: D,
							searchActionName: l,
							searchStartsWithAt: s
						}), p(t, n, r, a);
					},
					secondary: N.isContactBlocked ? s._(
						/*BTDS*/
						""
					) : void 0,
					hideStatus: o("WAWebContactGetters").getIsMe(N),
					waitIdle: !0,
					showMessageYourselfName: o("WAWebContactGetters").getIsMe(N),
					isSearchResult: m,
					showNotifyName: !0,
					truncateName: !0,
					contextEnabled: a
				});
			}
			case v: {
				var M = i.data;
				return d.jsx(E, {
					active: n,
					contact: M,
					onClick: p,
					secondary: M.isContactBlocked ? s._(
						/*BTDS*/
						""
					) : void 0,
					hideStatus: o("WAWebContactGetters").getIsMe(M),
					waitIdle: !0,
					showMessageYourselfName: o("WAWebContactGetters").getIsMe(M),
					isSearchResult: m,
					chatOrigin: "username_contactless_search",
					showNotifyName: !0
				});
			}
			case S: {
				var w = i.data, A = I.length > 0;
				if (_ != null) {
					var F = T != null && T.has(w.id);
					return u === !0 ? d.jsx(r("WAWebOutContactCell.react"), {
						contact: w,
						entryPoint: o("WAWebOutContactLoggingUtils").getOutContactEntryPoint(c, A),
						inviteFlow: c,
						isSearchResult: A,
						onClick: function(t) {
							return _(t, w);
						}
					}) : d.jsx(r("WAWebCheckboxSelectableWrapper.react"), {
						model: w,
						selections: f,
						checked: F,
						onClick: function(t) {
							return _(t, w);
						},
						wrapperTestid: "out-contact-selectable-wrapper",
						children: d.jsx(r("WAWebOutContactCell.react"), {
							contact: w,
							entryPoint: o("WAWebOutContactLoggingUtils").getOutContactEntryPoint(c, A),
							inviteFlow: c,
							isSearchResult: A,
							theme: "chat-checkbox"
						})
					});
				}
				return d.jsx(r("WAWebOutContactCell.react"), {
					contact: w,
					entryPoint: o("WAWebOutContactLoggingUtils").getOutContactEntryPoint(c, A),
					inviteFlow: c,
					isSearchResult: A
				});
			}
			case g: {
				var O = i.data, B = i.spinner, W = B === void 0 ? !1 : B, q = i.uppercase;
				return d.jsxs("div", {
					className: "x1cccnhj x6ikm8r x10wlt62 x1280gxy x1n2onr6",
					children: [W && d.jsx("div", {
						className: "x10l6tqk x78zum5 x6s0dn4 x5yr21d xdg88n9",
						children: d.jsx(o("WAWebSpinner.react").Spinner, {
							size: 24,
							stroke: 6,
							color: "highlight"
						})
					}), d.jsx(r("WAWebSectionHeader.react"), {
						header: O,
						uppercase: q,
						xstyle: R.sectionHeader
					})]
				});
			}
			default: throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["UnknownDataError: invoked from WAWebChatContactList"]))), new (o("WAWebFlatList.react")).UnknownDataError(i);
		}
	}
	I.displayName = I.name + " [from " + i.id + "]", l.default = k;
}), 226);
