__d("WAWebTeamLinkCreateInvitationDialog.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactImage.react",
	"WAWebFrontendContactGetters",
	"WAWebL10NAccentFold",
	"WAWebLidMigrationUtils",
	"WAWebModalManager",
	"WAWebPhoneNumberSearch",
	"WAWebTeamLinkCreateInvitationMutation",
	"WAWebTeamLinkInviteCodeCreatedPopup.react",
	"WAWebWidFactory",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useDeferredValue, p = c.useEffect, _ = c.useMemo, f = c.useRef, g = c.useState;
	function h(e) {
		var t = o("react-compiler-runtime").c(52), n = e.onCreated, a = g(""), i = a[0], l = a[1], c = g(""), d = c[0], _ = c[1], h = g(null), C = h[0], b = h[1], v = g(!1), S = v[0], R = v[1], L = g(!1), E = L[0], k = L[1], I = g(!1), T = I[0], D = I[1], x = g(null), $ = x[0], P = x[1], N = f(!0), M, w;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			return N.current = !0, (function() {
				N.current = !1;
			});
		}, w = [], t[0] = M, t[1] = w) : (M = t[0], w = t[1]), p(M, w);
		var A = m(i), F;
		if (t[2] !== A) {
			e: {
				var O = A.trim();
				if (O === "") {
					var B;
					t[4] === Symbol.for("react.memo_cache_sentinel") ? (B = [], t[4] = B) : B = t[4], F = B;
					break e;
				}
				var W = o("WAWebL10NAccentFold").accentFold(O), q = o("WAWebPhoneNumberSearch").numberSearch(W), U = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, { showMe: !1 });
				F = U.filter(function(e) {
					return e.searchMatchExact(W, q) != null;
				});
			}
			t[2] = A, t[3] = F;
		} else F = t[3];
		var V = F, H;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (H = function(t) {
			l(t), b(null), _(""), R(!0), D(!1);
		}, t[5] = H) : H = t[5];
		var G = H, z;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (z = function(t) {
			b(t), l(o("WAWebFrontendContactGetters").getDisplayName(t)), _(o("WAWebFrontendContactGetters").getDisplayName(t)), R(!1);
		}, t[6] = z) : z = t[6];
		var j = z, K = y, Q;
		t[7] !== d || t[8] !== n || t[9] !== C || t[10] !== E ? (Q = function() {
			if (!(C == null || E)) {
				var e;
				try {
					e = String(o("WAWebLidMigrationUtils").toUserLidOrThrow(o("WAWebWidFactory").asUserWidOrThrow(C.id)));
				} catch (e) {
					D(!0);
					return;
				}
				k(!0), D(!1);
				var t = d.trim() !== "" ? d.trim() : o("WAWebFrontendContactGetters").getDisplayName(C);
				o("WAWebTeamLinkCreateInvitationMutation").createTeamLinkInvitation(e, t).then(function(e) {
					if (e.type === "success" && n(), !!N.current) if (k(!1), e.type === "success") {
						var t;
						P((t = e.invitation.nonceCode) != null ? t : "");
					} else D(!0);
				});
			}
		}, t[7] = d, t[8] = n, t[9] = C, t[10] = E, t[11] = Q) : Q = t[11];
		var X = Q;
		if ($ != null) {
			var Y;
			return t[12] !== $ ? (Y = u.jsx(r("WAWebTeamLinkInviteCodeCreatedPopup.react"), {
				nonceCode: $,
				onDone: K
			}), t[12] = $, t[13] = Y) : Y = t[13], Y;
		}
		var J;
		t[14] !== i ? (J = i.trim(), t[14] = i, t[15] = J) : J = t[15];
		var Z = J !== "", ee = V.length > 0, te, ne, re;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (ne = s._(
			/*BTDS*/
			""
		), re = s._(
			/*BTDS*/
			""
		), te = s._(
			/*BTDS*/
			""
		), t[16] = te, t[17] = ne, t[18] = re) : (te = t[16], ne = t[17], re = t[18]);
		var oe = C == null || E, ae;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (ae = { className: "x78zum5 xdt5ytf x1qvou4u x17upfok" }, t[19] = ae) : ae = t[19];
		var ie, le;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (ie = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), le = { className: "x1n2onr6" }, t[20] = ie, t[21] = le) : (ie = t[20], le = t[21]);
		var se;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (se = s._(
			/*BTDS*/
			""
		), t[22] = se) : se = t[22];
		var ue;
		t[23] !== i ? (ue = u.jsx(r("WDSTextField.react"), {
			label: se,
			value: i,
			onValueChange: G,
			testid: "teamlink-create-invite-contact"
		}), t[23] = i, t[24] = ue) : ue = t[24];
		var ce;
		t[25] !== Z || t[26] !== ee || t[27] !== V || t[28] !== S ? (ce = S && Z && ee && u.jsx("div", {
			className: "xav9cv8 xw6alqk x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a x1xiyphd x1odjw0f",
			children: V.map(function(e) {
				return u.jsxs("div", {
					className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x16ovd2e x12xbjc7 x1iw51ew xde1mab x1ypdohk xjbqb8w xkd4ks6",
					onClick: function() {
						return j(e);
					},
					onKeyDown: function(n) {
						(n.key === "Enter" || n.key === " ") && (n.preventDefault(), j(e));
					},
					role: "button",
					tabIndex: 0,
					"data-testid": "teamlink-contact-option",
					children: [u.jsx(r("WAWebContactImage.react"), {
						contact: e,
						size: 32
					}), u.jsxs("div", {
						className: "x78zum5 xdt5ytf xeuugli x1iyjqo2",
						children: [u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							maxLines: 1,
							children: o("WAWebFrontendContactGetters").getDisplayName(e)
						}), u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							maxLines: 1,
							children: o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(e)
						})]
					})]
				}, String(e.id));
			})
		}), t[25] = Z, t[26] = ee, t[27] = V, t[28] = S, t[29] = ce) : ce = t[29];
		var de;
		t[30] !== Z || t[31] !== ee || t[32] !== S ? (de = S && Z && !ee && u.jsx("div", {
			className: "xav9cv8 xw6alqk x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a x1xiyphd x1odjw0f x16ovd2e x12xbjc7 x1iw51ew xde1mab",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[30] = Z, t[31] = ee, t[32] = S, t[33] = de) : de = t[33];
		var me;
		t[34] !== ue || t[35] !== ce || t[36] !== de ? (me = u.jsxs("div", babelHelpers.extends({}, le, { children: [
			ue,
			ce,
			de
		] })), t[34] = ue, t[35] = ce, t[36] = de, t[37] = me) : me = t[37];
		var pe;
		t[38] === Symbol.for("react.memo_cache_sentinel") ? (pe = s._(
			/*BTDS*/
			""
		), t[38] = pe) : pe = t[38];
		var _e;
		t[39] !== d ? (_e = u.jsx(r("WDSTextField.react"), {
			label: pe,
			value: d,
			onValueChange: _,
			testid: "teamlink-create-invite-name"
		}), t[39] = d, t[40] = _e) : _e = t[40];
		var fe;
		t[41] !== T ? (fe = T && u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "secondaryNegative",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[41] = T, t[42] = fe) : fe = t[42];
		var ge;
		t[43] !== me || t[44] !== _e || t[45] !== fe ? (ge = u.jsxs("div", babelHelpers.extends({}, ae, { children: [
			ie,
			me,
			_e,
			fe
		] })), t[43] = me, t[44] = _e, t[45] = fe, t[46] = ge) : ge = t[46];
		var he;
		return t[47] !== X || t[48] !== E || t[49] !== oe || t[50] !== ge ? (he = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: ne,
			okText: re,
			cancelText: te,
			onOK: X,
			onCancel: K,
			okDisabled: oe,
			okSpinner: E,
			testid: "teamlink-create-invite-dialog",
			children: ge
		}), t[47] = X, t[48] = E, t[49] = oe, t[50] = ge, t[51] = he) : he = t[51], he;
	}
	function y() {
		o("WAWebModalManager").closeModalManager();
	}
	l.default = h;
}), 226);
