__d("WAWebTeamLinkDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebModalManager",
	"WAWebSectionHeader.react",
	"WAWebTeamLinkCreateInvitationDialog.react",
	"WAWebTeamLinkListInvitationsQuery",
	"WAWebTeamLinkMemberRow.react",
	"WAWebTeamLinkRemoveMemberDialog.react",
	"WAWebTeamLinkRenewInvitationDialog.react",
	"WDSIconIcAddCircle.react",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(19), n = e.onBack, a = _(null), i = a[0], l = a[1], c = p(!0), d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = function(t) {
			c.current && l(t);
		}, t[0] = d) : d = t[0];
		var f = d, g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = function() {
			o("WAWebTeamLinkListInvitationsQuery").fetchTeamLinkInvitations().then(f);
		}, t[1] = g) : g = t[1];
		var h = g, y, C;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = function() {
			return c.current = !0, o("WAWebTeamLinkListInvitationsQuery").fetchTeamLinkInvitations().then(f), (function() {
				c.current = !1;
			});
		}, C = [f], t[2] = y, t[3] = C) : (y = t[2], C = t[3]), m(y, C);
		var b;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (b = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebTeamLinkCreateInvitationDialog.react"), { onCreated: h }));
		}, t[4] = b) : b = t[4];
		var v = b, S;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (S = function(t) {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebTeamLinkRenewInvitationDialog.react"), {
				invitation: t,
				onRenewed: h
			}));
		}, t[5] = S) : S = t[5];
		var R = S, L;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (L = function(t) {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebTeamLinkRemoveMemberDialog.react"), {
				invitation: t,
				onRemoved: h
			}));
		}, t[6] = L) : L = t[6];
		var E = L, k;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (k = function(t) {
			if (t == null) return u.jsx("div", {
				className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "error") return u.jsx("div", {
				className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "secondaryNegative",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "success" && "invitations" in t) {
				var e = t.invitations;
				return e.length === 0 ? u.jsx("div", {
					className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}) : u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebSectionHeader.react"), { header: s._(
					/*BTDS*/
					""
				) }), e.map(function(e, t) {
					var n;
					return u.jsx(r("WAWebTeamLinkMemberRow.react"), {
						invitation: e,
						onRenew: R,
						onRemove: E
					}, (n = e.employeeLid) != null ? n : String(t));
				})] });
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		}, t[7] = k) : k = t[7];
		var I;
		t[8] !== i ? (I = k(i), t[8] = i, t[9] = I) : I = t[9];
		var T = I, D;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[10] = D) : D = t[10];
		var x;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcAddCircle.react"),
			title: s._(
				/*BTDS*/
				""
			),
			testid: "teamlink-create-invite-btn",
			onClick: v,
			buttonVariant: "borderless",
			tabOrder: -1
		}), t[11] = x) : x = t[11];
		var $;
		t[12] !== n ? ($ = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: D,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
			onBack: n,
			menu: x
		}), t[12] = n, t[13] = $) : $ = t[13];
		var P;
		t[14] !== T ? (P = u.jsx(r("WAWebDrawerBody.react"), { children: T }), t[14] = T, t[15] = P) : P = t[15];
		var N;
		return t[16] !== $ || t[17] !== P ? (N = u.jsxs(r("WAWebDrawer.react"), {
			theme: "striped",
			testid: "teamlink-panel",
			children: [$, P]
		}), t[16] = $, t[17] = P, t[18] = N) : N = t[18], N;
	}
	l.default = f;
}), 226);
