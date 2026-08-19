__d("WAWebNewGroupDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebChevronIcon.react",
	"WAWebClickable.react",
	"WAWebCommunityGetParticipantInfoText",
	"WAWebContactCollection",
	"WAWebDrawer.react",
	"WAWebDrawerBlock.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebDrawerUtils",
	"WAWebEphemeralKicNux.react",
	"WAWebEphemeralL10N",
	"WAWebEphemeralPopup.react",
	"WAWebEphemeralityResolver",
	"WAWebGroupGatingUtils",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNux",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerLoadable.react",
	"WAWebRichTextField.react",
	"WAWebRound.react",
	"WAWebSpinner.react",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUserPrefsNuxPreferences",
	"WAWebVelocityTransitionGroup",
	"WDSColorStyles.stylex",
	"WDSIconIcCheck.react",
	"react",
	"react-compiler-runtime",
	"useWAWebCallbackOnce"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c.useState, p = {
		header: {
			marginBottom: "x13m54ha",
			$$css: !0
		},
		chevronIcon: {
			color: "xhslqc4",
			$$css: !0
		}
	}, _ = { surface: "group-creation" };
	function f(e) {
		var t = o("react-compiler-runtime").c(26), n = e.ephemeralDuration, a = e.handleEphemeralDurationClick, i, l, u, c, m, _, f, g;
		if (t[0] !== n || t[1] !== a) {
			n > 0 ? u = o("WAWebEphemeralL10N").getDisappearingMessageDurationString(n) : u = s._(
				/*BTDS*/
				""
			);
			var h;
			t[10] === Symbol.for("react.memo_cache_sentinel") ? (h = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				xstyle: p.chevronIcon,
				directional: !0,
				height: 21
			}), t[10] = h) : h = t[10];
			var y = h;
			l = r("WAWebDrawerSection.react"), i = r("WAWebDrawerBlock.react"), c = o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT, m = "ephemeral-duration-block", _ = a, f = y, g = s._(
				/*BTDS*/
				"",
				[s._param("duration", u)]
			).toString(), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = u, t[5] = c, t[6] = m, t[7] = _, t[8] = f, t[9] = g;
		} else i = t[2], l = t[3], u = t[4], c = t[5], m = t[6], _ = t[7], f = t[8], g = t[9];
		var C;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x13m54ha" }, t[11] = C) : C = t[11];
		var b;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (b = d.jsx("div", babelHelpers.extends({}, C, { children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "h3",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[12] = b) : b = t[12];
		var v;
		t[13] !== u ? (v = d.jsx(o("WAWebText.react").WAWebTextMuted, {
			as: "p",
			children: u
		}), t[13] = u, t[14] = v) : v = t[14];
		var S;
		t[15] !== i || t[16] !== c || t[17] !== m || t[18] !== _ || t[19] !== f || t[20] !== g || t[21] !== v ? (S = d.jsxs(i, {
			tabOrder: c,
			testid: m,
			onClick: _,
			side: f,
			ariaLabel: g,
			multiline: !0,
			children: [b, v]
		}), t[15] = i, t[16] = c, t[17] = m, t[18] = _, t[19] = f, t[20] = g, t[21] = v, t[22] = S) : S = t[22];
		var R;
		return t[23] !== l || t[24] !== S ? (R = d.jsx(l, { children: S }), t[23] = l, t[24] = S, t[25] = R) : R = t[25], R;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(6), n = e.onGroupPermissions, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			xstyle: p.chevronIcon,
			directional: !0,
			height: 21
		}), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		).toString(), t[1] = l) : l = t[1];
		var u;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = { className: "x13m54ha" }, t[2] = u) : u = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = d.jsx("div", babelHelpers.extends({}, u, { children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "h3",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[3] = c) : c = t[3];
		var m;
		return t[4] !== n ? (m = d.jsx(r("WAWebDrawerSection.react"), { children: d.jsx(r("WAWebDrawerBlock.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			testid: "group-permissions-block",
			onClick: n,
			side: i,
			ariaLabel: l,
			multiline: !0,
			children: c
		}) }), t[4] = n, t[5] = m) : m = t[5], m;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(10), n = e.onAddParticipants, a = e.participants, i;
		t[0] !== a ? (i = o("WAWebCommunityGetParticipantInfoText").getParticipantInfoText(a), t[0] = a, t[1] = i) : i = t[1];
		var l = i, u, c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			xstyle: p.chevronIcon,
			directional: !0,
			height: 21
		}), c = s._(
			/*BTDS*/
			""
		).toString(), t[2] = u, t[3] = c) : (u = t[2], c = t[3]);
		var m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = d.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "h3",
			xstyle: p.header,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[4] = m) : m = t[4];
		var _;
		t[5] !== l ? (_ = d.jsx(o("WAWebText.react").WAWebTextMuted, {
			as: "p",
			children: l
		}), t[5] = l, t[6] = _) : _ = t[6];
		var f;
		return t[7] !== n || t[8] !== _ ? (f = d.jsx(r("WAWebDrawerSection.react"), { children: d.jsxs(r("WAWebDrawerBlock.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			onClick: n,
			side: u,
			ariaLabel: c,
			multiline: !0,
			children: [m, _]
		}) }), t[7] = n, t[8] = _, t[9] = f) : f = t[9], f;
	}
	function y(t) {
		var n = o("react-compiler-runtime").c(77), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebNewGroupDrawer"])));
		var l = a, c = l.participants, p = l.onSubmit, y = l.allowUnnamedGroup, C = l.parentGroupId, b = l.shortenedCreationFlow, v = l.onAddParticipants, S = l.onGroupPermissions, R = l.loading, L;
		n[3] !== c ? (L = c === void 0 ? [] : c, n[3] = c, n[4] = L) : L = n[4];
		var E = L, k = R === void 0 ? !1 : R, I = m(a.subject || ""), T = I[0], D = I[1], x = m(a.thumb), $ = x[0], P = x[1], N = m(a.full), M = N[0], w = N[1], A;
		n[5] !== a.ephemeralDuration ? (A = function() {
			if (a.ephemeralDuration != null) return a.ephemeralDuration;
			var e = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(o("WAWebContactCollection").ContactCollection.getMeContact());
			return e != null ? e : 0;
		}, n[5] = a.ephemeralDuration, n[6] = A) : A = n[6];
		var F = m(A), O = F[0], B = F[1], W;
		n[7] !== a ? (W = function(t, n) {
			P(t), w(n), a.handleLiftGroupInfo == null || a.handleLiftGroupInfo({
				thumb: t,
				full: n
			});
		}, n[7] = a, n[8] = W) : W = n[8];
		var q = W, U;
		n[9] !== O || n[10] !== M || n[11] !== p || n[12] !== E || n[13] !== T || n[14] !== $ ? (U = function() {
			var e = T.trim();
			p({
				ephemeralDuration: O,
				full: M,
				participants: E,
				subject: e,
				thumb: $
			});
		}, n[9] = O, n[10] = M, n[11] = p, n[12] = E, n[13] = T, n[14] = $, n[15] = U) : U = n[15];
		var V = r("useWAWebCallbackOnce")(U), H;
		n[16] !== a ? (H = function(t) {
			D(t), a.handleLiftGroupInfo == null || a.handleLiftGroupInfo({ text: t });
		}, n[16] = a, n[17] = H) : H = n[17];
		var G = H, z;
		n[18] !== a ? (z = function(t) {
			B(t), a.handleLiftGroupInfo == null || a.handleLiftGroupInfo({ ephemeralDuration: t });
		}, n[18] = a, n[19] = z) : z = n[19];
		var j = z, K;
		if (n[20] !== O || n[21] !== j) {
			var Q = function() {
				o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(r("WAWebEphemeralPopup.react"), {
					initialDuration: O,
					onDurationSelected: j
				}));
			};
			K = function() {
				o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.EPHEMERAL) ? o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(r("WAWebEphemeralKicNux.react"), {
					fromMe: !0,
					onOk: Q
				})) : Q();
			}, n[20] = O, n[21] = j, n[22] = K;
		} else K = n[22];
		var X = K, Y;
		n[23] !== y || n[24] !== C || n[25] !== T ? (Y = function() {
			return C || y !== !0 ? T.trim().length > 0 : !0;
		}, n[23] = y, n[24] = C, n[25] = T, n[26] = Y) : Y = n[26];
		var J = Y, Z;
		n[27] !== y || n[28] !== C ? (Z = !C && y === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[27] = y, n[28] = C, n[29] = Z) : Z = n[29];
		var ee = Z, te;
		n[30] !== O || n[31] !== X ? (te = d.jsx(f, {
			ephemeralDuration: O,
			handleEphemeralDurationClick: X
		}), n[30] = O, n[31] = X, n[32] = te) : te = n[32];
		var ne = te, re;
		n[33] !== v || n[34] !== E || n[35] !== b ? (re = b === !0 && v ? d.jsx(h, {
			participants: E,
			onAddParticipants: v
		}) : null, n[33] = v, n[34] = E, n[35] = b, n[36] = re) : re = n[36];
		var oe = re, ae;
		n[37] !== S ? (ae = d.jsx(g, { onGroupPermissions: S }), n[37] = S, n[38] = ae) : ae = n[38];
		var ie = ae, le;
		n[39] !== V || n[40] !== J || n[41] !== k ? (le = J() === !0 ? d.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "btn",
			children: d.jsx("div", {
				className: "xhtitgo x78zum5 x1l1ennw x17r0vjz x178dpqu x2b8uid",
				children: d.jsx(o("WAWebClickable.react").Clickable, {
					onClick: V,
					"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
					children: d.jsx(o("WAWebRound.react").Round, {
						testid: "create-group-btn",
						label: s._(
							/*BTDS*/
							""
						),
						children: k ? d.jsx(o("WAWebSpinner.react").Spinner, {
							color: "white",
							size: 30
						}) : d.jsx(r("WDSIconIcCheck.react"), { iconXstyle: o("WDSColorStyles.stylex").WDSColorStyles.contentOnAccent })
					})
				})
			})
		}) : null, n[39] = V, n[40] = J, n[41] = k, n[42] = le) : le = n[42];
		var se = le, ue;
		n[43] !== a.viewType ? (ue = o("WAWebDrawerUtils").getDrawerHeaderType(a.viewType), n[43] = a.viewType, n[44] = ue) : ue = n[44];
		var ce = ue, de = a.viewType, me;
		n[45] === Symbol.for("react.memo_cache_sentinel") ? (me = s._(
			/*BTDS*/
			""
		), n[45] = me) : me = n[45];
		var pe;
		n[46] !== ce || n[47] !== a.onBack || n[48] !== a.onCancel ? (pe = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: me,
			type: ce,
			onBack: a.onBack,
			onCancel: a.onCancel
		}), n[46] = ce, n[47] = a.onBack, n[48] = a.onCancel, n[49] = pe) : pe = n[49];
		var _e;
		n[50] === Symbol.for("react.memo_cache_sentinel") ? (_e = { className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j" }, n[50] = _e) : _e = n[50];
		var fe;
		n[51] !== M || n[52] !== q ? (fe = d.jsx("div", babelHelpers.extends({}, _e, { children: d.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
			type: o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP,
			attachToChat: !1,
			startImage: M,
			onImageSet: q,
			dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT
		}) })), n[51] = M, n[52] = q, n[53] = fe) : fe = n[53];
		var ge;
		n[54] === Symbol.for("react.memo_cache_sentinel") ? (ge = { className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j" }, n[54] = ge) : ge = n[54];
		var he;
		n[55] === Symbol.for("react.memo_cache_sentinel") ? (he = o("WAWebGroupGatingUtils").getGroupMaxSubject(), n[55] = he) : he = n[55];
		var ye;
		n[56] !== G ? (ye = function(t) {
			G(t.text);
		}, n[56] = G, n[57] = ye) : ye = n[57];
		var Ce = J() ? V : r("WAWebNoop"), be;
		n[58] !== ee || n[59] !== ye || n[60] !== Ce || n[61] !== T ? (be = d.jsx("div", babelHelpers.extends({ "data-testid": "group-subject" }, ge, { children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
			value: T,
			maxLength: he,
			showRemaining: !0,
			onChange: ye,
			title: ee,
			placeholder: ee,
			onEnter: Ce,
			emojiBtnPosition: "side",
			focusOnMount: !0,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT
		}) })), n[58] = ee, n[59] = ye, n[60] = Ce, n[61] = T, n[62] = be) : be = n[62];
		var ve;
		n[63] !== fe || n[64] !== be ? (ve = d.jsxs(r("WAWebDrawerSection.react"), { children: [fe, be] }), n[63] = fe, n[64] = be, n[65] = ve) : ve = n[65];
		var Se;
		n[66] !== oe || n[67] !== se || n[68] !== ne || n[69] !== ie || n[70] !== ve ? (Se = d.jsxs(r("WAWebDrawerBody.react"), { children: [
			ve,
			ne,
			ie,
			oe,
			se
		] }), n[66] = oe, n[67] = se, n[68] = ne, n[69] = ie, n[70] = ve, n[71] = Se) : Se = n[71];
		var Re;
		return n[72] !== a.viewType || n[73] !== i || n[74] !== pe || n[75] !== Se ? (Re = d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "new-group-drawer-submit",
			viewType: de,
			tsNavigationData: _,
			children: [pe, Se]
		}), n[72] = a.viewType, n[73] = i, n[74] = pe, n[75] = Se, n[76] = Re) : Re = n[76], Re;
	}
	l.default = y;
}), 226);
