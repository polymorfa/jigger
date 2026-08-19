__d("WAWebCommunityAddParticipantModal.react", [
	"fbt",
	"WAWebCommunityGatingUtils",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebPeopleIcon.react",
	"WDSIconIcNotifications.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		paddingBottom15: {
			paddingBottom: "xr1496l",
			$$css: !0
		},
		paddingTop15: {
			paddingTop: "xqy66fx",
			$$css: !0
		}
	}, m = {
		border: {
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		iconContainer: {
			width: "x1247r65",
			$$css: !0
		},
		tealLighterColor: {
			color: "x1v5yvga",
			$$css: !0
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(17), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.contacts, p = l.onCancel, _ = l.onOK, f;
		n[3] !== u.length ? (f = s._(
			/*BTDS*/
			"",
			[s._plural(u.length, "number")]
		), n[3] = u.length, n[4] = f) : f = n[4];
		var g = f, h;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (h = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[5] = h) : h = n[5];
		var y = h, C;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), n[6] = C) : C = n[6];
		var b = C, v, S;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), S = s._(
			/*BTDS*/
			""
		), n[7] = v, n[8] = S) : (v = n[7], S = n[8]);
		var R;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (R = [m.border, d.paddingBottom15], n[9] = R) : R = n[9];
		var L;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: R,
			children: [c.jsx(o("WAWebFlex.react").FlexContainer, {
				align: "center",
				direction: "horizontal",
				grow: 0,
				justify: "center",
				shrink: 0,
				xstyle: m.iconContainer,
				children: c.jsx(r("WDSIconIcNotifications.react"), {
					height: 18,
					iconXstyle: m.tealLighterColor,
					width: 18
				})
			}), c.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				children: y
			})]
		}), n[10] = L) : L = n[10];
		var E;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: d.paddingTop15,
			children: [c.jsx(o("WAWebFlex.react").FlexContainer, {
				align: "center",
				direction: "horizontal",
				grow: 0,
				justify: "center",
				shrink: 0,
				xstyle: m.iconContainer,
				children: c.jsx(o("WAWebPeopleIcon.react").PeopleIcon, { iconXstyle: m.tealLighterColor })
			}), c.jsx(o("WAWebFlex.react").FlexItem, { children: b })]
		}), n[11] = E) : E = n[11];
		var k;
		return n[12] !== p || n[13] !== _ || n[14] !== i || n[15] !== g ? (k = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			cancelText: v,
			okText: S,
			onCancel: p,
			onOK: _,
			ref: i,
			title: g,
			children: [L, E]
		}), n[12] = p, n[13] = _, n[14] = i, n[15] = g, n[16] = k) : k = n[16], k;
	}
	var _ = p;
	l.CommunityAddParticipantModal = _;
}), 226);
