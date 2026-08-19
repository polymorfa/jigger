__d("WAWebGroupInfoPendingParticipantsSection.react", [
	"fbt",
	"WALogger",
	"WAWebBoolFunc",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoExpandButton.react",
	"WAWebChatParticipant.react",
	"WAWebConfirmPopup.react",
	"WAWebDropdownItem.react",
	"WAWebEmojiText.react",
	"WAWebFlatList.react",
	"WAWebFrontendContactGetters",
	"WAWebLidMigrationUtils",
	"WAWebModalManager",
	"WAWebNavigableFlatList.react",
	"WAWebSingleSelection",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebAsync",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState;
	function _(t) {
		var n = o("react-compiler-runtime").c(7), a = t.active, i = t.data, l = t.groupMetadata, u = t.onContextMenu, d = t.pendingParticipants, m = i.id, p;
		if (n[0] !== a || n[1] !== i || n[2] !== l || n[3] !== m || n[4] !== u || n[5] !== d) {
			var _ = d.get(m);
			if (!_) throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[UnknownDataError] WAWebGroupInfoPendingParticipantsSection"]))), new (o("WAWebFlatList.react")).UnknownDataError(i);
			var g = function(t) {
				var e = function() {
					var e = function() {
						o("WAWebModalManager").ModalManager.close(), l.revokeGroupsV4AddInvite([_.id]).then(f);
					};
					o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
						onOK: e,
						okText: s._(
							/*BTDS*/
							""
						),
						onCancel: o("WAWebModalManager").closeModalManager,
						cancelText: s._(
							/*BTDS*/
							""
						),
						children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
							/*BTDS*/
							"",
							[s._param("member", o("WAWebFrontendContactGetters").getFormattedName(_.contact))]
						) })
					}));
				}, n = [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-promote-admin",
					action: e,
					children: s._(
						/*BTDS*/
						""
					)
				}, "promote")];
				u({
					contact: _.contact,
					menu: n,
					trigger: t
				});
			};
			p = c.jsx(r("WAWebChatParticipant.react"), {
				active: a,
				contact: _.contact,
				participant: _,
				contextEnabled: o("WAWebBoolFunc").returnFalse,
				contextMenu: !0,
				onContext: g,
				theme: "refresh",
				showNotifyName: !0,
				isPendingParticipant: !0,
				waitIdle: !0,
				showStatusRingAroundProfilePhoto: !0
			}, _.id.toString()), n[0] = a, n[1] = i, n[2] = l, n[3] = m, n[4] = u, n[5] = d, n[6] = p;
		} else p = n[6];
		return p;
	}
	function f() {
		o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function g(e) {
		"use no forget";
		var t, a, i = e.chat, l = e.flatListController, u = r("nullthrows")(i.groupMetadata, "WAWebGroupInfoPendingParticipantsSection: Chat must have group metadata for group info section."), d = r("nullthrows")((t = i.groupMetadata) == null ? void 0 : t.participants, "WAWebGroupInfoPendingParticipantsSection: Group metadata must have participants."), f = r("nullthrows")((a = i.groupMetadata) == null ? void 0 : a.pendingParticipants, "WAWebGroupInfoPendingParticipantsSection: Group metadata must have pending participants."), g = f.toArray(), y = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(d, "change:isAdmin change:isSuperAdmin", y), o("useWAWebListener").useListener(f, "add remove reset", y);
		var C = p(h(f)), b = C[0], v = C[1], S = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), R = p(), L = R[0], E = R[1];
		r("useWAWebAsync")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield u.queryGroupsV4PendingInvite(), v(h(u.pendingParticipants));
		}), [u]);
		var k = m(function() {
			var e = g;
			h(g) && b && (e = e.slice(0, o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS)), S.current.init(e.map(function(e) {
				return e.contact;
			}));
			var t = new Set(), n = e.filter(function(e) {
				var n, r = e.id, a = (n = o("WAWebLidMigrationUtils").toPn(r)) == null ? void 0 : n.toString();
				return a != null && t.has(a) ? !1 : (t.add(a != null ? a : r.toString()), !0);
			});
			return n.map(function(e) {
				return {
					itemKey: e.id.toString(),
					id: e.id,
					height: 68
				};
			});
		}, [b, g]);
		if (u.isSuspendedOrTerminated()) return c.jsx(c.Fragment, {});
		var I = function(t) {
			var e = t.contact, n = t.menu, r = t.trigger, o = r.type === "click" ? void 0 : r.target;
			E({
				contactId: e.id,
				menu: n,
				anchor: o,
				event: r.anchor ? void 0 : r
			});
		}, T = s._(
			/*BTDS*/
			"",
			[s._plural(f.length, "group-participants")]
		), D;
		f.length > 0 && (D = c.jsx(r("WAWebNavigableFlatList.react"), {
			ariaLabel: T,
			flatListController: l,
			listData: k,
			onRenderItem: function(t) {
				return c.jsx(_, {
					active: S.current,
					data: t,
					onContextMenu: I,
					pendingParticipants: f,
					groupMetadata: u
				});
			},
			selection: S.current,
			rotateList: !0
		}));
		var x;
		if (h(f) && b) {
			var $ = f.length - o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS, P = function() {
				v(!1);
			};
			x = c.jsx(r("WAWebChatInfoExpandButton.react"), {
				numMore: $,
				onClick: P
			});
		}
		var N;
		d.iAmAdmin() && f.length > 0 && (N = c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
			titleXStyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
			titleTestId: "section-participants",
			testid: "group-v4-pending-participant-section",
			title: s._(
				/*BTDS*/
				"",
				[s._param("number", f.length)]
			),
			children: [D, x]
		}));
		var M = function() {
			E(null);
		}, w;
		return L && (w = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ChatContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: M,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: L })
		})), c.jsxs(c.Fragment, { children: [N, w] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return e.length > o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST;
	}
	l.default = g;
}), 226);
