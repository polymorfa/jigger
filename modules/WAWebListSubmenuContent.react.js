__d("WAWebListSubmenuContent.react", [
	"fbt",
	"WAWebBizLabelEditModal.react",
	"WAWebCreateOrEditListDrawer.react",
	"WAWebDrawerManager",
	"WAWebEditLabelAssociationBridge",
	"WAWebFbtCommon",
	"WAWebLabelCollection",
	"WAWebListUtils",
	"WAWebListsGatingUtils",
	"WAWebListsIntroPopupLoadable",
	"WAWebListsLogging",
	"WAWebListsUtil",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebSchemaLabel",
	"WAWebStateUtils",
	"WAWebWamEnumListAction",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSIconIcAdd.react",
	"WDSIconIcLabelFilled.react",
	"WDSMenu.react",
	"WDSMenuContext",
	"WDSMenuItem.react",
	"WDSToast.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebListener",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useLayoutEffect, g = d.useRef, h = d.useState, y = {
		labelIconColor: function(t) {
			return [{
				color: t != null ? "x14rh7hd" : t,
				$$css: !0
			}, { "--x-color": t != null ? t : void 0 }];
		},
		contentsWrapper: {
			display: "xjp7ctv",
			$$css: !0
		},
		inheritColor: {
			color: "x1heor9g",
			$$css: !0
		}
	};
	function C() {
		return o("WAWebLabelCollection").LabelCollection.filter(function(e) {
			return e.isActive === !1 || e.name == null || e.name === "" ? !1 : e.type !== o("WAWebSchemaLabel").ListType.UNREAD && e.type !== o("WAWebSchemaLabel").ListType.GROUPS && e.type !== o("WAWebSchemaLabel").ListType.COMMUNITY && e.type !== o("WAWebSchemaLabel").ListType.FAVORITES;
		});
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(39), a = t.chat, i = t.chatLabels, l = t.entryPoint, u = p(o("WDSMenuContext").WDSMenuSubmenuRepositionContext), d = u.repositionSubmenu, m, b;
		n[0] !== d ? (m = function() {
			d();
		}, b = [d], n[0] = d, n[1] = m, n[2] = b) : (m = n[1], b = n[2]), f(m, b);
		var R = r("useWAWebNux")(o("WAWebNux").NUX.ADD_TO_LISTS), L = R[0], E = R[1], k;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebListsGatingUtils").isListsEnabled(), n[3] = k) : k = n[3];
		var I = k, T = o("WDSToast.react").useWDSToast(), D = T.showToast, x = h(S), $ = x[0], P = x[1], N;
		n[4] !== i ? (N = function() {
			var e = new Set();
			return i != null && i.forEach(function(t) {
				return e.add(t);
			}), e;
		}, n[4] = i, n[5] = N) : N = n[5];
		var M = h(N), w = M[0], A = M[1], F;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (F = [], n[6] = F) : F = n[6];
		var O = g(F), B = g(a), W = g(i), q, U;
		n[7] !== D ? (q = function() {
			var e = W.current, t = O.current, n = B.current;
			return (function() {
				if (t.length !== 0) {
					var a = new Set(e != null ? e : []), i = new Set(a), l = new Map();
					for (var u of t) l.set(u.id, u.listType), u.type === "add" ? i.add(u.id) : i.delete(u.id);
					var c = [];
					for (var d of i) a.has(d) || c.push({
						id: d,
						listType: l.get(d),
						type: "add"
					});
					for (var m of a) i.has(m) || c.push({
						id: m,
						listType: l.get(m),
						type: "remove"
					});
					if (c.length !== 0) {
						var p = c.length, _ = o("WAWebMobilePlatforms").isSMB() ? s._(
							/*BTDS*/
							"",
							[s._plural(p, "number")]
						) : s._(
							/*BTDS*/
							"",
							[s._plural(p, "number")]
						);
						D({
							type: "success",
							message: _,
							action: {
								label: r("WAWebFbtCommon")("Undo"),
								onPress: function() {
									var e = c.map(v), t = [o("WAWebStateUtils").unproxy(n)];
									o("WAWebEditLabelAssociationBridge").editLabelAssociation(e, t).then(function() {
										o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(e, t);
									});
								}
							}
						});
					}
				}
			});
		}, U = [D], n[7] = D, n[8] = q, n[9] = U) : (q = n[8], U = n[9]), _(q, U);
		var V;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (V = function() {
			P(C());
		}, n[10] = V) : V = n[10];
		var H = V;
		o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "add remove change reorder", H);
		var G;
		n[11] !== a || n[12] !== l || n[13] !== w ? (G = function(t, n) {
			var e = w.has(t), r = !e;
			A(function(e) {
				var n = new Set(e);
				return r ? n.add(t) : n.delete(t), n;
			});
			var i = {
				id: t,
				listType: n != null ? n : void 0,
				type: r ? "add" : "remove"
			}, s = [o("WAWebStateUtils").unproxy(a)];
			O.current.push(i), o("WAWebListsLogging").logListUpdate({
				listId: Number(t),
				listAction: o("WAWebWamEnumListAction").LIST_ACTION.UPDATE_MEMBERS,
				entryPoint: l != null ? l : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS,
				addedChats: r ? [a] : [],
				removedChats: r ? [] : [a]
			}), o("WAWebEditLabelAssociationBridge").editLabelAssociation([i], s).then(function() {
				o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD([i], s);
			});
		}, n[11] = a, n[12] = l, n[13] = w, n[14] = G) : G = n[14];
		var z = G, j;
		n[15] !== a || n[16] !== l ? (j = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
				onBack: o("WAWebDrawerManager").closeDrawerLeft,
				onClose: o("WAWebDrawerManager").closeDrawerLeft,
				entryPoint: l != null ? l : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS,
				preselectedChats: [o("WAWebStateUtils").unproxy(a)]
			}));
		}, n[15] = a, n[16] = l, n[17] = j) : j = n[17];
		var K = j, Q;
		n[18] !== K || n[19] !== L || n[20] !== E ? (Q = function() {
			if (o("WAWebMobilePlatforms").isSMB()) {
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizLabelEditModal.react"), { label: null }));
				return;
			}
			if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
				o("WAWebListsUtil").showMaxListsModal(I);
				return;
			}
			L ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable, { onContinue: function() {
				E(), K();
			} })) : K();
		}, n[18] = K, n[19] = L, n[20] = E, n[21] = Q) : Q = n[21];
		var X = Q, Y;
		n[22] === Symbol.for("react.memo_cache_sentinel") ? (Y = o("WAWebMobilePlatforms").isSMB(), n[22] = Y) : Y = n[22];
		var J = Y, Z;
		if (n[23] !== X || n[24] !== z || n[25] !== $ || n[26] !== w) {
			var ee;
			if (n[28] !== z || n[29] !== w ? (ee = function(n) {
				var t = w.has(n.id), a = J && n.colorIndex != null ? o("WAWebListUtils").colorIndexToHex(n.colorIndex) : null, i = c.jsx(r("WDSMenuItem.react"), {
					Icon: a != null ? r("WDSIconIcLabelFilled.react") : void 0,
					iconXstyle: a != null ? y.inheritColor : void 0,
					title: n.name,
					onPress: function() {
						return z(n.id, n.type);
					},
					isToggleable: !0,
					toggled: t,
					closeMenuOnPress: !1,
					testid: "list-toggle-" + n.id,
					truncateText: !0
				}, a != null ? void 0 : n.id);
				return a != null ? c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.contentsWrapper, y.labelIconColor(a)), { children: i }), n.id) : i;
			}, n[28] = z, n[29] = w, n[30] = ee) : ee = n[30], Z = $.map(ee), $.length > 0) {
				var te;
				n[31] === Symbol.for("react.memo_cache_sentinel") ? (te = c.jsx(r("WDSMenuItem.react"), { type: "separator" }, "separator"), n[31] = te) : te = n[31], Z.push(te);
			}
			var ne;
			n[32] === Symbol.for("react.memo_cache_sentinel") ? (ne = o("WAWebMobilePlatforms").isSMB() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), n[32] = ne) : ne = n[32];
			var re;
			n[33] !== X ? (re = c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcAdd.react"),
				title: ne,
				onPress: X,
				testid: "create-new-list-submenu-item",
				truncateText: !0
			}, "create-new-list-submenu-item"), n[33] = X, n[34] = re) : re = n[34], Z.push(re), n[23] = X, n[24] = z, n[25] = $, n[26] = w, n[27] = Z;
		} else Z = n[27];
		var oe;
		n[35] === Symbol.for("react.memo_cache_sentinel") ? (oe = Math.round(window.innerHeight * .96), n[35] = oe) : oe = n[35];
		var ae = oe, ie;
		n[36] === Symbol.for("react.memo_cache_sentinel") ? (ie = c.jsx("div", { className: "xqu0tyb" }, "bottom-spacer"), n[36] = ie) : ie = n[36];
		var le;
		return n[37] !== Z ? (le = c.jsxs(r("WDSMenu.react"), {
			maxHeight: ae,
			children: [Z, ie]
		}), n[37] = Z, n[38] = le) : le = n[38], le;
	}
	function v(e) {
		return {
			id: e.id,
			listType: e.listType,
			type: e.type === "add" ? "remove" : "add"
		};
	}
	function S() {
		return C();
	}
	l.default = b;
}), 226);
