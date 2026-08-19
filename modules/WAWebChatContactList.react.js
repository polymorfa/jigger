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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(102), a = t.active, i = t.contextEnabled, l = t.data, u = t.disabled, c = t.hideOutContactCheckbox, m = t.inviteFlow, p = t.isSearchResult, _ = t.onClick, f = t.onOutContactClick, k = t.outContactSelections, I = t.searchEntrypoint, T = t.searchText, D = t.selectedOutContactIds, x;
		switch (n[0] !== I ? (I === "new_chat" ? x = o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT : I === "new_group" && (x = o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP), n[0] = I, n[1] = x) : x = n[1], l.type) {
			case C: {
				var $ = l.data;
				if (u === !0) {
					var P;
					return n[2] !== $ ? (P = d.jsx(L, {
						chat: $,
						mode: o("WAWebChat.react").Mode.INFO,
						noContext: !0,
						theme: "disabled"
					}), n[2] = $, n[3] = P) : P = n[3], P;
				}
				var N;
				return n[4] !== a || n[5] !== $ || n[6] !== _ ? (N = d.jsx(L, {
					active: a,
					chat: $,
					mode: o("WAWebChat.react").Mode.INFO,
					noContext: !0,
					onClick: _
				}), n[4] = a, n[5] = $, n[6] = _, n[7] = N) : N = n[7], N;
			}
			case h: {
				var M = l.data, w;
				n[8] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
					/*BTDS*/
					""
				), n[8] = w) : w = n[8];
				var A;
				return n[9] !== a || n[10] !== p || n[11] !== M || n[12] !== _ ? (A = d.jsxs(d.Fragment, { children: [d.jsx(E, {
					active: a,
					contact: M,
					onClick: _,
					secondary: w,
					waitIdle: !0,
					showMessageYourselfName: !0,
					isSearchResult: p
				}), !1] }), n[9] = a, n[10] = p, n[11] = M, n[12] = _, n[13] = A) : A = n[13], A;
			}
			case b: {
				var F = l.data, O;
				n[14] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
					/*BTDS*/
					""
				), n[14] = O) : O = n[14];
				var B;
				return n[15] !== a || n[16] !== F || n[17] !== p || n[18] !== _ ? (B = d.jsxs(d.Fragment, { children: [d.jsx(E, {
					active: a,
					contact: F,
					onClick: _,
					secondary: O,
					waitIdle: !0,
					isSearchResult: p
				}), !1] }), n[15] = a, n[16] = F, n[17] = p, n[18] = _, n[19] = B) : B = n[19], B;
			}
			case y: {
				var W = l.data, q;
				n[20] !== x || n[21] !== _ || n[22] !== T ? (q = function(t, n, r, a) {
					var e = o("WAWebFrontendContactGetters").getIsMyContact(n), i = o("WAWebChatCollection").ChatCollection.get(n.id) != null, l;
					e && i ? l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT_WITH_EXISTING_CHAT : !e && i ? l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT : e ? l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT : l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT;
					var s = T.startsWith("@");
					o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
						contactSearchEntrypoint: x,
						searchActionName: l,
						searchStartsWithAt: s
					}), _(t, n, r, a);
				}, n[20] = x, n[21] = _, n[22] = T, n[23] = q) : q = n[23];
				var U;
				n[24] !== W.isContactBlocked ? (U = W.isContactBlocked ? s._(
					/*BTDS*/
					""
				) : void 0, n[24] = W.isContactBlocked, n[25] = U) : U = n[25];
				var V;
				n[26] !== W ? (V = o("WAWebContactGetters").getIsMe(W), n[26] = W, n[27] = V) : V = n[27];
				var H;
				n[28] !== W ? (H = o("WAWebContactGetters").getIsMe(W), n[28] = W, n[29] = H) : H = n[29];
				var G;
				return n[30] !== a || n[31] !== W || n[32] !== i || n[33] !== p || n[34] !== q || n[35] !== U || n[36] !== V || n[37] !== H ? (G = d.jsx(E, {
					active: a,
					contact: W,
					onClick: q,
					secondary: U,
					hideStatus: V,
					waitIdle: !0,
					showMessageYourselfName: H,
					isSearchResult: p,
					showNotifyName: !0,
					truncateName: !0,
					contextEnabled: i
				}), n[30] = a, n[31] = W, n[32] = i, n[33] = p, n[34] = q, n[35] = U, n[36] = V, n[37] = H, n[38] = G) : G = n[38], G;
			}
			case v: {
				var z = l.data, j;
				n[39] !== z.isContactBlocked ? (j = z.isContactBlocked ? s._(
					/*BTDS*/
					""
				) : void 0, n[39] = z.isContactBlocked, n[40] = j) : j = n[40];
				var K;
				n[41] !== z ? (K = o("WAWebContactGetters").getIsMe(z), n[41] = z, n[42] = K) : K = n[42];
				var Q;
				n[43] !== z ? (Q = o("WAWebContactGetters").getIsMe(z), n[43] = z, n[44] = Q) : Q = n[44];
				var X;
				return n[45] !== a || n[46] !== z || n[47] !== p || n[48] !== _ || n[49] !== j || n[50] !== K || n[51] !== Q ? (X = d.jsx(E, {
					active: a,
					contact: z,
					onClick: _,
					secondary: j,
					hideStatus: K,
					waitIdle: !0,
					showMessageYourselfName: Q,
					isSearchResult: p,
					chatOrigin: "username_contactless_search",
					showNotifyName: !0
				}), n[45] = a, n[46] = z, n[47] = p, n[48] = _, n[49] = j, n[50] = K, n[51] = Q, n[52] = X) : X = n[52], X;
			}
			case S: {
				var Y = l.data, J = T.length > 0;
				if (f != null) {
					var Z;
					n[53] !== Y || n[54] !== D ? (Z = D != null && D.has(Y.id), n[53] = Y, n[54] = D, n[55] = Z) : Z = n[55];
					var ee = Z;
					if (c === !0) {
						var te;
						n[56] !== m || n[57] !== J ? (te = o("WAWebOutContactLoggingUtils").getOutContactEntryPoint(m, J), n[56] = m, n[57] = J, n[58] = te) : te = n[58];
						var ne;
						n[59] !== f || n[60] !== Y ? (ne = function(t) {
							return f(t, Y);
						}, n[59] = f, n[60] = Y, n[61] = ne) : ne = n[61];
						var re;
						return n[62] !== m || n[63] !== J || n[64] !== Y || n[65] !== te || n[66] !== ne ? (re = d.jsx(r("WAWebOutContactCell.react"), {
							contact: Y,
							entryPoint: te,
							inviteFlow: m,
							isSearchResult: J,
							onClick: ne
						}), n[62] = m, n[63] = J, n[64] = Y, n[65] = te, n[66] = ne, n[67] = re) : re = n[67], re;
					}
					var oe;
					n[68] !== f || n[69] !== Y ? (oe = function(t) {
						return f(t, Y);
					}, n[68] = f, n[69] = Y, n[70] = oe) : oe = n[70];
					var ae;
					n[71] !== m || n[72] !== J ? (ae = o("WAWebOutContactLoggingUtils").getOutContactEntryPoint(m, J), n[71] = m, n[72] = J, n[73] = ae) : ae = n[73];
					var ie;
					n[74] !== m || n[75] !== J || n[76] !== Y || n[77] !== ae ? (ie = d.jsx(r("WAWebOutContactCell.react"), {
						contact: Y,
						entryPoint: ae,
						inviteFlow: m,
						isSearchResult: J,
						theme: "chat-checkbox"
					}), n[74] = m, n[75] = J, n[76] = Y, n[77] = ae, n[78] = ie) : ie = n[78];
					var le;
					return n[79] !== ee || n[80] !== Y || n[81] !== k || n[82] !== oe || n[83] !== ie ? (le = d.jsx(r("WAWebCheckboxSelectableWrapper.react"), {
						model: Y,
						selections: k,
						checked: ee,
						onClick: oe,
						wrapperTestid: "out-contact-selectable-wrapper",
						children: ie
					}), n[79] = ee, n[80] = Y, n[81] = k, n[82] = oe, n[83] = ie, n[84] = le) : le = n[84], le;
				}
				var se;
				n[85] !== m || n[86] !== J ? (se = o("WAWebOutContactLoggingUtils").getOutContactEntryPoint(m, J), n[85] = m, n[86] = J, n[87] = se) : se = n[87];
				var ue;
				return n[88] !== m || n[89] !== J || n[90] !== Y || n[91] !== se ? (ue = d.jsx(r("WAWebOutContactCell.react"), {
					contact: Y,
					entryPoint: se,
					inviteFlow: m,
					isSearchResult: J
				}), n[88] = m, n[89] = J, n[90] = Y, n[91] = se, n[92] = ue) : ue = n[92], ue;
			}
			case g: {
				var ce = l.data, de = l.spinner, me = l.uppercase, pe = de === void 0 ? !1 : de, _e;
				n[93] === Symbol.for("react.memo_cache_sentinel") ? (_e = { className: "x1cccnhj x6ikm8r x10wlt62 x1280gxy x1n2onr6" }, n[93] = _e) : _e = n[93];
				var fe;
				n[94] !== pe ? (fe = pe && d.jsx("div", {
					className: "x10l6tqk x78zum5 x6s0dn4 x5yr21d xdg88n9",
					children: d.jsx(o("WAWebSpinner.react").Spinner, {
						size: 24,
						stroke: 6,
						color: "highlight"
					})
				}), n[94] = pe, n[95] = fe) : fe = n[95];
				var ge;
				n[96] !== ce || n[97] !== me ? (ge = d.jsx(r("WAWebSectionHeader.react"), {
					header: ce,
					uppercase: me,
					xstyle: R.sectionHeader
				}), n[96] = ce, n[97] = me, n[98] = ge) : ge = n[98];
				var he;
				return n[99] !== fe || n[100] !== ge ? (he = d.jsxs("div", babelHelpers.extends({}, _e, { children: [fe, ge] })), n[99] = fe, n[100] = ge, n[101] = he) : he = n[101], he;
			}
			default: throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["UnknownDataError: invoked from WAWebChatContactList"]))), new (o("WAWebFlatList.react")).UnknownDataError(l);
		}
	}
	l.default = k;
}), 226);
