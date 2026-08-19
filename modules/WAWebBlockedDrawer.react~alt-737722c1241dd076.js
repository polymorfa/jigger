__d("WAWebBlockedDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebBlocklistCollection",
	"WAWebBlocklistMigration",
	"WAWebChatContact.react",
	"WAWebChatGetters",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactsModal.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebEmptyState.react",
	"WAWebFindChatAction",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebKeyboardRotateFocus.react",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebWamChatPSALogger",
	"WDSIconIcPersonAdd.react",
	"fbs",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(21), n = e.onClose, a = e.ref, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["add", "remove"], t[0] = i) : i = t[0];
		var l = r("useWAWebEventTargetValue")(o("WAWebBlocklistCollection").BlocklistCollection, i, g), d = c(f), h = d[0], C = _, b = p, v;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			var e = m, t = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
				showMe: !1,
				showWithoutName: !1
			});
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactsModal.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				contacts: t,
				filter: e,
				onCancel: o("WAWebModalManager").closeModalManager,
				onSelect: function(t) {
					return void b(t);
				}
			}));
		}, t[1] = v) : v = t[1];
		var S = v, R;
		t[2] !== h || t[3] !== l ? (R = o("WAWebBlocklistCollection").BlocklistCollection.length > 0 ? u.jsx(r("WAWebFlatListContainer.react"), {
			flatListControllers: [h],
			className: "x6ikm8r x1odjw0f",
			children: u.jsx(o("WAWebFlatList.react").FlatList, {
				flatListController: h,
				direction: "vertical",
				data: l,
				handleKeyboardNavigation: !0,
				role: "list",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				focusableItemSelector: "[data-testid='cell-frame-container']",
				renderItem: function(t) {
					return u.jsx(y, {
						data: t,
						onClick: C,
						onDelete: C
					});
				}
			})
		}) : u.jsx(o("WAWebEmptyState.react").Blocked, { onAddBlockedContact: S }), t[2] = h, t[3] = l, t[4] = R) : R = t[4];
		var L = R, E;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebBlocklistCollection").BlocklistCollection.length > 0 || !o("WAWebABProps").getABPropConfigValue("wds_web_text_layout"), t[5] = E) : E = t[5];
		var k = E, I;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (I = o("WAWebBlocklistCollection").BlocklistCollection.length > 0 ? u.jsx("div", {
			"data-testid": "blocked-description",
			className: "x1okw0bk x109j2v6 x1xnnf8n x1fcywrv xizuyw3 x1f6kntn x1fc57z9 xhslqc4",
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, t[6] = I) : I = t[6];
		var T = I, D;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (D = {
			surface: "unknown",
			viewName: "blocked-contacts"
		}, t[7] = D) : D = t[7];
		var x;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (x = o("WAWebBlocklistCollection").BlocklistCollection.length === 0 ? {
			display: "flex",
			flexDirection: "column"
		} : void 0, t[8] = x) : x = t[8];
		var $;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), t[9] = $) : $ = t[9];
		var P;
		t[10] !== n ? (P = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: $,
			onBack: n,
			focusBackOrCancel: !0,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), t[10] = n, t[11] = P) : P = t[11];
		var N;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (N = k && u.jsx("div", {
			className: "xso031l x1q0q8m5 x120ee7l",
			children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				testid: "li-add-blocked",
				onClick: S,
				icon: u.jsx(r("WDSIconIcPersonAdd.react"), { directional: !0 }),
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[12] = N) : N = t[12];
		var M;
		t[13] !== L ? (M = u.jsxs(r("WAWebDrawerBody.react"), { children: [L, T] }), t[13] = L, t[14] = M) : M = t[14];
		var w;
		t[15] !== M || t[16] !== P ? (w = u.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
			focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
			style: x,
			children: [
				P,
				N,
				M
			]
		}), t[15] = M, t[16] = P, t[17] = w) : w = t[17];
		var A;
		return t[18] !== a || t[19] !== w ? (A = u.jsx(r("WAWebDrawer.react"), {
			ref: a,
			testid: "blocked-contacts-drawer",
			tsNavigationData: D,
			children: w
		}), t[18] = a, t[19] = w, t[20] = A) : A = t[20], A;
	}
	function m(e) {
		return o("WAWebBlocklistCollection").BlocklistCollection.get(e.id) ? r("fbs")._(
			/*BTDS*/
			""
		).toString() : !0;
	}
	async function p(e) {
		var t = await o("WAWebFindChatAction").findOrCreateLatestChat(e.id, "blockFromBlocklistDrawer"), n = t.chat;
		if (n != null && o("WAWebChatGetters").getIsPSA(n)) {
			var r = n.msgs.last();
			o("WAWebWamChatPSALogger").logChatPSARemove(r, 1, 1);
		}
		o("WAWebModalManager").closeModalManager(), o("WAWebBlockContactUtils").handleBlock(n, o("WAWebBlockContants").BlockEntryPoint.BlockList);
	}
	function _(e, t) {
		o("WAWebBlockContactUtils").handleUnblock(t, o("WAWebBlockContants").BlockEntryPoint.BlockList);
	}
	function f() {
		return new (r("WAWebFlatListController"))();
	}
	function g() {
		return o("WAWebBlocklistCollection").BlocklistCollection.dedupedList().map(h);
	}
	function h(e) {
		return {
			itemKey: e.id.toString(),
			blocklist: e
		};
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(11), n = e.data, r = e.onClick, a = e.onDelete, i = n.blocklist, l, s, c;
		if (t[0] !== i) {
			var d = i.contact();
			l = o("WAWebChatContact.react").Contact, s = d, c = d.id.toString(), t[0] = i, t[1] = l, t[2] = s, t[3] = c;
		} else l = t[1], s = t[2], c = t[3];
		var m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = o("WAWebBlocklistMigration").isBlocklistMigrated(), t[4] = m) : m = t[4];
		var p;
		return t[5] !== l || t[6] !== r || t[7] !== a || t[8] !== s || t[9] !== c ? (p = u.jsx(l, {
			contact: s,
			onClick: r,
			onDelete: a,
			showInactiveFlag: m,
			waitIdle: !0,
			tabIndex: -1,
			allowFocusEventPropagation: !0,
			role: "button"
		}, c), t[5] = l, t[6] = r, t[7] = a, t[8] = s, t[9] = c, t[10] = p) : p = t[10], p;
	}
	l.default = d;
}), 226);
