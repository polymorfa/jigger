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
		var n = t.chat, a = t.chatLabels, i = t.entryPoint, l = p(o("WDSMenuContext").WDSMenuSubmenuRepositionContext), u = l.repositionSubmenu;
		f(function() {
			u();
		}, [u]);
		var d = r("useWAWebNux")(o("WAWebNux").NUX.ADD_TO_LISTS), b = d[0], v = d[1], S = o("WAWebListsGatingUtils").isListsEnabled(), R = o("WDSToast.react").useWDSToast(), L = R.showToast, E = h(function() {
			return C();
		}), k = E[0], I = E[1], T = h(function() {
			var e = new Set();
			return a != null && a.forEach(function(t) {
				return e.add(t);
			}), e;
		}), D = T[0], x = T[1], $ = g([]), P = g(n), N = g(a);
		_(function() {
			var e = N.current, t = $.current, n = P.current;
			return function() {
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
						L({
							type: "success",
							message: _,
							action: {
								label: r("WAWebFbtCommon")("Undo"),
								onPress: function() {
									var e = c.map(function(e) {
										return {
											id: e.id,
											listType: e.listType,
											type: e.type === "add" ? "remove" : "add"
										};
									}), t = [o("WAWebStateUtils").unproxy(n)];
									o("WAWebEditLabelAssociationBridge").editLabelAssociation(e, t).then(function() {
										o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(e, t);
									});
								}
							}
						});
					}
				}
			};
		}, [L]);
		var M = m(function() {
			I(C());
		}, []);
		o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "add remove change reorder", M);
		var w = m(function(e, t) {
			var r = D.has(e), a = !r;
			x(function(t) {
				var n = new Set(t);
				return a ? n.add(e) : n.delete(e), n;
			});
			var l = {
				id: e,
				listType: t != null ? t : void 0,
				type: a ? "add" : "remove"
			}, s = [o("WAWebStateUtils").unproxy(n)];
			$.current.push(l), o("WAWebListsLogging").logListUpdate({
				listId: Number(e),
				listAction: o("WAWebWamEnumListAction").LIST_ACTION.UPDATE_MEMBERS,
				entryPoint: i != null ? i : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS,
				addedChats: a ? [n] : [],
				removedChats: a ? [] : [n]
			}), o("WAWebEditLabelAssociationBridge").editLabelAssociation([l], s).then(function() {
				o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD([l], s);
			});
		}, [
			n,
			i,
			D
		]), A = m(function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
				onBack: o("WAWebDrawerManager").closeDrawerLeft,
				onClose: o("WAWebDrawerManager").closeDrawerLeft,
				entryPoint: i != null ? i : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS,
				preselectedChats: [o("WAWebStateUtils").unproxy(n)]
			}));
		}, [n, i]), F = m(function() {
			if (o("WAWebMobilePlatforms").isSMB()) {
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizLabelEditModal.react"), { label: null }));
				return;
			}
			if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
				o("WAWebListsUtil").showMaxListsModal(S);
				return;
			}
			b ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable, { onContinue: function() {
				v(), A();
			} })) : A();
		}, [
			S,
			A,
			b,
			v
		]), O = o("WAWebMobilePlatforms").isSMB(), B = k.map(function(t) {
			var n = D.has(t.id), a = O && t.colorIndex != null ? o("WAWebListUtils").colorIndexToHex(t.colorIndex) : null, i = c.jsx(r("WDSMenuItem.react"), {
				Icon: a != null ? r("WDSIconIcLabelFilled.react") : void 0,
				iconXstyle: a != null ? y.inheritColor : void 0,
				title: t.name,
				onPress: function() {
					return w(t.id, t.type);
				},
				isToggleable: !0,
				toggled: n,
				closeMenuOnPress: !1,
				testid: "list-toggle-" + t.id,
				truncateText: !0
			}, a != null ? void 0 : t.id);
			return a != null ? c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.contentsWrapper, y.labelIconColor(a)), { children: i }), t.id) : i;
		});
		k.length > 0 && B.push(c.jsx(r("WDSMenuItem.react"), { type: "separator" }, "separator")), B.push(c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcAdd.react"),
			title: o("WAWebMobilePlatforms").isSMB() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			onPress: F,
			testid: "create-new-list-submenu-item",
			truncateText: !0
		}, "create-new-list-submenu-item"));
		var W = Math.round(window.innerHeight * .96);
		return c.jsxs(r("WDSMenu.react"), {
			maxHeight: W,
			children: [B, c.jsx("div", { className: "xqu0tyb" }, "bottom-spacer")]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
