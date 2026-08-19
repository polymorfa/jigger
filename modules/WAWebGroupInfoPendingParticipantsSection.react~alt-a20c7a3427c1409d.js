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
	"nullthrows",
	"react",
	"useLazyRef",
	"useWAWebAsync",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState;
	function _(t) {
		var n = t.active, a = t.data, i = t.groupMetadata, l = t.onContextMenu, u = t.pendingParticipants, d = a.id, m = u.get(d);
		if (!m) throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[UnknownDataError] WAWebGroupInfoPendingParticipantsSection"]))), new (o("WAWebFlatList.react")).UnknownDataError(a);
		var p = function(t) {
			var e = function() {
				var e = function() {
					o("WAWebModalManager").ModalManager.close(), i.revokeGroupsV4AddInvite([m.id]).then(function() {
						o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) }));
					});
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
						[s._param("member", o("WAWebFrontendContactGetters").getFormattedName(m.contact))]
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
			l({
				contact: m.contact,
				menu: n,
				trigger: t
			});
		};
		return c.jsx(r("WAWebChatParticipant.react"), {
			active: n,
			contact: m.contact,
			participant: m,
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			contextMenu: !0,
			onContext: p,
			theme: "refresh",
			showNotifyName: !0,
			isPendingParticipant: !0,
			waitIdle: !0,
			showStatusRingAroundProfilePhoto: !0
		}, m.id.toString());
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		"use no forget";
		var t, n, a = e.chat, i = e.flatListController, l = r("nullthrows")(a.groupMetadata, "WAWebGroupInfoPendingParticipantsSection: Chat must have group metadata for group info section."), u = r("nullthrows")((t = a.groupMetadata) == null ? void 0 : t.participants, "WAWebGroupInfoPendingParticipantsSection: Group metadata must have participants."), d = r("nullthrows")((n = a.groupMetadata) == null ? void 0 : n.pendingParticipants, "WAWebGroupInfoPendingParticipantsSection: Group metadata must have pending participants."), f = d.toArray(), h = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(u, "change:isAdmin change:isSuperAdmin", h), o("useWAWebListener").useListener(d, "add remove reset", h);
		var y = p(g(d)), C = y[0], b = y[1], v = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), S = p(), R = S[0], L = S[1];
		r("useWAWebAsync")(async function() {
			await l.queryGroupsV4PendingInvite(), b(g(l.pendingParticipants));
		}, [l]);
		var E = m(function() {
			var e = f;
			g(f) && C && (e = e.slice(0, o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS)), v.current.init(e.map(function(e) {
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
		}, [C, f]);
		if (l.isSuspendedOrTerminated()) return c.jsx(c.Fragment, {});
		var k = function(t) {
			var e = t.contact, n = t.menu, r = t.trigger, o = r.type === "click" ? void 0 : r.target;
			L({
				contactId: e.id,
				menu: n,
				anchor: o,
				event: r.anchor ? void 0 : r
			});
		}, I = s._(
			/*BTDS*/
			"",
			[s._plural(d.length, "group-participants")]
		), T;
		d.length > 0 && (T = c.jsx(r("WAWebNavigableFlatList.react"), {
			ariaLabel: I,
			flatListController: i,
			listData: E,
			onRenderItem: function(t) {
				return c.jsx(_, {
					active: v.current,
					data: t,
					onContextMenu: k,
					pendingParticipants: d,
					groupMetadata: l
				});
			},
			selection: v.current,
			rotateList: !0
		}));
		var D;
		if (g(d) && C) {
			var x = d.length - o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS, $ = function() {
				b(!1);
			};
			D = c.jsx(r("WAWebChatInfoExpandButton.react"), {
				numMore: x,
				onClick: $
			});
		}
		var P;
		u.iAmAdmin() && d.length > 0 && (P = c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
			titleXStyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
			titleTestId: "section-participants",
			testid: "group-v4-pending-participant-section",
			title: s._(
				/*BTDS*/
				"",
				[s._param("number", d.length)]
			),
			children: [T, D]
		}));
		var N = function() {
			L(null);
		}, M;
		return R && (M = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ChatContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: N,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: R })
		})), c.jsxs(c.Fragment, { children: [P, M] });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e.length > o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST;
	}
	l.default = f;
}), 226);
