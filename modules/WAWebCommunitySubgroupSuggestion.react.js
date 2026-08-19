__d("WAWebCommunitySubgroupSuggestion.react", [
	"fbt",
	"WAWebCellRequest.react",
	"WAWebCellRequestState",
	"WAWebChatEntryPoint",
	"WAWebClock",
	"WAWebDetailImage.react",
	"WAWebDropdownItem.react",
	"WAWebEmojiText.react",
	"WAWebFrontendContactGetters",
	"WAWebOpenChatWithContactAction",
	"WAWebPeopleIcon.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsMeUser",
	"WDSIconIcVisibilityOff.react",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		text: {
			maxWidth: "x193iq5w",
			whiteSpace: "xuxw1ft",
			textOverflow: "xlyipyv",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		dropdownText: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(60), n = e.isAdmin, a = e.onSubgroupSuggestionAction, i = e.subgroupSuggestion, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = ["change:currentState", "change:error"], t[0] = l) : l = t[0];
		var m;
		t[1] !== i.currentState || t[2] !== i.error ? (m = function() {
			return [i.currentState, i.error];
		}, t[1] = i.currentState, t[2] = i.error, t[3] = m) : m = t[3];
		var p = r("useWAWebEventTargetValue")(i, l, m), _ = p[0], f = p[1], g = c(), h = g[0], y = g[1], C;
		t[4] !== i.owner ? (C = o("WAWebUserPrefsMeUser").isMeAccount(i.owner), t[4] = i.owner, t[5] = C) : C = t[5];
		var b = C, v;
		t[6] !== i.ownerContact ? (v = function(t) {
			var e = i.ownerContact.id, n = s._(
				/*BTDS*/
				"",
				[s._param("name", o("WAWebFrontendContactGetters").getFormattedShortName(i.ownerContact))]
			), r = function() {
				o("WAWebOpenChatWithContactAction").openChatWithContact(e, "communitySubgroupSuggestions", o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab);
			};
			y({
				contactId: e,
				menu: [u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "message-suggestion-owner",
					action: r,
					ariaLabel: n,
					addSpacing: !0,
					children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: n,
						xstyle: d.dropdownText
					})
				}, "message-suggestion-owner")],
				anchor: t.target
			});
		}, t[6] = i.ownerContact, t[7] = v) : v = t[7];
		var S = v, R;
		t[8] !== a || t[9] !== i ? (R = function(t, n) {
			t.stopPropagation(), a(i, n);
		}, t[8] = a, t[9] = i, t[10] = R) : R = t[10];
		var L = R, E;
		t[11] !== f ? (E = function(t) {
			t.stopPropagation(), f != null && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: f }));
		}, t[11] = f, t[12] = E) : E = t[12];
		var k = E, I;
		t[13] !== i.ownerContact ? (I = o("WAWebFrontendContactGetters").getFormattedName(i.ownerContact), t[13] = i.ownerContact, t[14] = I) : I = t[14];
		var T = I, D;
		t[15] !== T || t[16] !== n || t[17] !== i.t ? (D = n ? u.jsx("span", { children: s._(
			/*BTDS*/
			"",
			[s._param("user-name", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: T }))]
		) }) : u.jsx("span", { children: o("WAWebClock").Clock.suggestedOnDateStr(i.t) }), t[15] = T, t[16] = n, t[17] = i.t, t[18] = D) : D = t[18];
		var x = D, $;
		t[19] !== i.desc ? ($ = i.desc != null ? {
			title: s._(
				/*BTDS*/
				""
			),
			content: i.desc
		} : void 0, t[19] = i.desc, t[20] = $) : $ = t[20];
		var P = $, N;
		t[21] !== i.participantCount ? (N = i.participantCount != null ? {
			text: s._(
				/*BTDS*/
				"",
				[s._plural(i.participantCount, "participant-count")]
			),
			Icon: o("WAWebPeopleIcon.react").PeopleIcon
		} : void 0, t[21] = i.participantCount, t[22] = N) : N = t[22];
		var M = N, w;
		t[23] !== i.hiddenSubgroup ? (w = i.hiddenSubgroup === !0 ? {
			text: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcVisibilityOff.react")
		} : void 0, t[23] = i.hiddenSubgroup, t[24] = w) : w = t[24];
		var A = w, F;
		if (h) {
			var O;
			t[25] === Symbol.for("react.memo_cache_sentinel") ? (O = function() {
				y(null);
			}, t[25] = O) : O = t[25];
			var B;
			t[26] !== h ? (B = u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "SubgroupSuggestionContextMenu",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: O,
				children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: h })
			}), t[26] = h, t[27] = B) : B = t[27], F = B;
		}
		var W;
		t[28] !== i.groupId ? (W = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			size: o("WAWebDetailImage.react").DetailImageSize.Small,
			id: i.groupId
		}), t[28] = i.groupId, t[29] = W) : W = t[29];
		var q;
		t[30] !== i.subject ? (q = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: i.subject,
			xstyle: d.text
		}), t[30] = i.subject, t[31] = q) : q = t[31];
		var U;
		t[32] !== A || t[33] !== M ? (U = [M, A].filter(Boolean), t[32] = A, t[33] = M, t[34] = U) : U = t[34];
		var V;
		t[35] !== P || t[36] !== U ? (V = {
			description: P,
			customSignals: U
		}, t[35] = P, t[36] = U, t[37] = V) : V = t[37];
		var H;
		t[38] !== L || t[39] !== n ? (H = n ? function(e) {
			L(e, o("WAWebCellRequestState").State.Approved);
		} : void 0, t[38] = L, t[39] = n, t[40] = H) : H = t[40];
		var G;
		t[41] !== L || t[42] !== n ? (G = function(t) {
			n ? L(t, o("WAWebCellRequestState").State.Rejected) : L(t, o("WAWebCellRequestState").State.Canceled);
		}, t[41] = L, t[42] = n, t[43] = G) : G = t[43];
		var z;
		t[44] !== S || t[45] !== b ? (z = !b && {
			onClick: S,
			hoverEnabled: !0
		}, t[44] = S, t[45] = b, t[46] = z) : z = t[46];
		var j;
		t[47] !== x || t[48] !== k || t[49] !== _ || t[50] !== W || t[51] !== q || t[52] !== V || t[53] !== H || t[54] !== G || t[55] !== z ? (j = u.jsx(r("WAWebCellRequest.react"), babelHelpers.extends({
			image: W,
			primary: q,
			secondary: x,
			secondaryTestId: "suggestion-subtitle",
			signals: V,
			state: _,
			onApprove: H,
			onReject: G,
			onError: k
		}, z)), t[47] = x, t[48] = k, t[49] = _, t[50] = W, t[51] = q, t[52] = V, t[53] = H, t[54] = G, t[55] = z, t[56] = j) : j = t[56];
		var K;
		return t[57] !== j || t[58] !== F ? (K = u.jsxs(u.Fragment, { children: [j, F] }), t[57] = j, t[58] = F, t[59] = K) : K = t[59], K;
	}
	l.default = m;
}), 226);
