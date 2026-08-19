__d("WAWebCommunitySettingsDrawer.react", [
	"fbt",
	"WAWebCommunityGatingUtils",
	"WAWebCommunitySubgroupSuggestionsModals.react",
	"WAWebConfirmPopup.react",
	"WAWebDrawer.react",
	"WAWebDrawerBlock.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebGroupConstants",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebSetPropertyGroupAction",
	"WAWebSettingsPopup.react",
	"WAWebText.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebFocusOnMount",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useMemo, m = { paddingTop20: {
		paddingTop: "x1h678fw",
		$$css: !0
	} };
	function p(e) {
		var t = o("react-compiler-runtime").c(21), n = e.settingType, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["id"], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useModelValues(e.chat, a), l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			"allowNonAdminSubGroupCreation",
			"subgroupSuggestions",
			"joinedSubgroups",
			"unjoinedSubgroups"
		], t[1] = l) : l = t[1];
		var u = o("useWAWebModelValues").useModelValues(e.groupMetadata, l), d;
		e: switch (n) {
			case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
				var m;
				t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = [{
					label: s._(
						/*BTDS*/
						""
					),
					secondaryLabel: s._(
						/*BTDS*/
						""
					),
					value: 1
				}, {
					label: s._(
						/*BTDS*/
						""
					),
					secondaryLabel: s._(
						/*BTDS*/
						""
					),
					value: 0
				}], t[2] = m) : m = t[2], d = m;
				break e;
			}
			default: {
				var p;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = [], t[3] = p) : p = t[3], d = p;
			}
		}
		var g = d, h;
		e: {
			var y = u.allowNonAdminSubGroupCreation;
			switch (n) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
					h = y === !0 ? 1 : 0;
					break e;
				}
				default: h = 0;
			}
		}
		var C = h, b;
		e: switch (n) {
			case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
				var v;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
					/*BTDS*/
					""
				), t[4] = v) : v = t[4], b = v;
				break e;
			}
			default: b = "";
		}
		var S = b, R;
		e: {
			if (n === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION) {
				var L;
				t[5] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getMemberAddedGroupsUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				), t[5] = L) : L = t[5], R = L;
				break e;
			}
			R = null;
		}
		var E = R, k;
		t[6] !== i || t[7] !== u.joinedSubgroups || t[8] !== u.subgroupSuggestions || t[9] !== u.unjoinedSubgroups || t[10] !== C || t[11] !== n ? (k = async function(t) {
			if (t === C) {
				o("WAWebModalManager").ModalManager.close();
				return;
			}
			var e = function() {
				o("WAWebSetPropertyGroupAction").setGroupProperty(i, n, t).catch(_);
			};
			e: switch (n) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
					var r = u.subgroupSuggestions.length;
					if (t === 1 && r > 0) {
						if (!await f()) break e;
						var a = u.joinedSubgroups.length + u.unjoinedSubgroups.length, l = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit() - a;
						if (r > l && !await o("WAWebCommunitySubgroupSuggestionsModals.react").confirmCommunityFull(l, r)) break e;
					}
					e();
					break e;
				}
				default: e();
			}
			o("WAWebModalManager").ModalManager.close();
		}, t[6] = i, t[7] = u.joinedSubgroups, t[8] = u.subgroupSuggestions, t[9] = u.unjoinedSubgroups, t[10] = C, t[11] = n, t[12] = k) : k = t[12];
		var I = k, T;
		t[13] !== I ? (T = function(t) {
			I(t);
		}, t[13] = I, t[14] = T) : T = t[14];
		var D;
		return t[15] !== E || t[16] !== C || t[17] !== g || t[18] !== S || t[19] !== T ? (D = c.jsx(r("WAWebSettingsPopup.react"), {
			options: g,
			initialValue: C,
			title: S,
			onSelect: T,
			explanation: E
		}), t[15] = E, t[16] = C, t[17] = g, t[18] = S, t[19] = T, t[20] = D) : D = t[20], D;
	}
	function _() {
		return r("WAWebNoop");
	}
	function f() {
		return new Promise(function(e) {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				okText: s._(
					/*BTDS*/
					""
				),
				onOK: function() {
					return e(!0);
				},
				onCancel: function() {
					return e(!1);
				},
				tsNavigationData: {
					surface: "unknown",
					viewName: "community-settings"
				},
				children: s._(
					/*BTDS*/
					""
				)
			}));
		});
	}
	function g(t) {
		var n = o("react-compiler-runtime").c(22), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.chat, d = l.onBack, _;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = ["allowNonAdminSubGroupCreation"], n[3] = _) : _ = n[3];
		var f = o("useWAWebModelValues").useOptionalModelValues(a.chat.groupMetadata, _), g = r("useWAWebFocusOnMount")(), y;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (y = {
			surface: "unknown",
			viewName: "community-settings"
		}, n[4] = y) : y = n[4];
		var C;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), n[5] = C) : C = n[5];
		var b;
		n[6] !== d ? (b = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: C,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: d
		}), n[6] = d, n[7] = b) : b = n[7];
		var v;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), n[8] = v) : v = n[8];
		var S;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), n[9] = S) : S = n[9];
		var R = !!(f != null && f.allowNonAdminSubGroupCreation), L;
		n[10] !== u ? (L = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(p, {
				settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
				chat: u,
				groupMetadata: r("nullthrows")(u.groupMetadata)
			}), { transition: "modal" });
		}, n[10] = u, n[11] = L) : L = n[11];
		var E;
		n[12] !== R || n[13] !== L ? (E = c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx(r("WAWebDrawerSection.react"), {
			title: S,
			titleXStyle: m.paddingTop20,
			children: c.jsx(h, {
				isEnabled: R,
				onClick: L
			})
		}) }), n[12] = R, n[13] = L, n[14] = E) : E = n[14];
		var k;
		n[15] !== g || n[16] !== E ? (k = c.jsx("div", {
			role: "complementary",
			ref: g,
			tabIndex: -1,
			"aria-label": v,
			children: E
		}), n[15] = g, n[16] = E, n[17] = k) : k = n[17];
		var I;
		return n[18] !== i || n[19] !== k || n[20] !== b ? (I = c.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "community-settings-drawer",
			tsNavigationData: y,
			children: [b, k]
		}), n[18] = i, n[19] = k, n[20] = b, n[21] = I) : I = n[21], I;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(7), n = e.isEnabled, a = e.onClick, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l = i, u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsx("div", {
			className: "x13m54ha",
			children: c.jsx(o("WAWebText.react").WAWebTextTitle, { children: l })
		}), t[1] = u) : u = t[1];
		var d;
		t[2] !== n ? (d = c.jsx(o("WAWebText.react").WAWebTextMuted, {
			testid: "who-can-add-new-groups-setting-state",
			children: n ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), t[2] = n, t[3] = d) : d = t[3];
		var m;
		return t[4] !== a || t[5] !== d ? (m = c.jsxs(r("WAWebDrawerBlock.react"), {
			onClick: a,
			multiline: !0,
			testid: "who-can-add-new-groups-setting",
			ariaLabel: l,
			children: [u, d]
		}), t[4] = a, t[5] = d, t[6] = m) : m = t[6], m;
	}
	l.default = g;
}), 226);
