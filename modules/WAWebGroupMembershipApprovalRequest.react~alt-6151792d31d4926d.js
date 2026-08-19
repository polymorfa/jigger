__d("WAWebGroupMembershipApprovalRequest.react", [
	"fbt",
	"WAWebCellRequest.react",
	"WAWebCellRequestState",
	"WAWebConfirmPopup.react",
	"WAWebContactGetters",
	"WAWebContactImage.react",
	"WAWebDetailImage.react",
	"WAWebEmojiText.react",
	"WAWebFindCommonGroupsContactAction",
	"WAWebFrontendContactGetters",
	"WAWebGroupGetMembershipApprovalRequestsJob",
	"WAWebMembershipApprovalRequestAction",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsMeUser",
	"getErrorSafe",
	"nullthrows",
	"react",
	"useWAWebContactValues",
	"useWAWebEventTargetValue",
	"useWAWebGroupParticipantStatus"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = {
		text: {
			maxWidth: "x193iq5w",
			whiteSpace: "xuxw1ft",
			textOverflow: "xlyipyv",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		nameContainer: {
			display: "x1lliihq",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.chat, n = e.onBack, a = e.onRequestClick, i = e.request, l = m(o("WAWebCellRequestState").State.Pending), c = l[0], _ = l[1], h = m(null), y = h[0], C = h[1], b = i.addedByContact, v = i.contact, S = o("useWAWebContactValues").useContactValues(v.id, [
			o("WAWebContactGetters").getId,
			o("WAWebContactGetters").getName,
			o("WAWebFrontendContactGetters").getFormattedShortName,
			o("WAWebContactGetters").getNotifyName,
			o("WAWebFrontendContactGetters").getCommonGroups
		]), R = S[0], L = S[1], E = S[2], k = S[3], I = S[4], T = r("useWAWebGroupParticipantStatus")(t.groupMetadata), D = T[0], x = T[1];
		d(function() {
			o("WAWebFindCommonGroupsContactAction").findCommonGroups(v);
		}, []);
		var $ = r("useWAWebEventTargetValue")(I, ["add", "remove"], function() {
			var e;
			return (e = I == null ? void 0 : I.length) != null ? e : 0;
		}), P = function(t) {
			var e = g(t, i);
			if (f(t)) o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: e }), o("WAWebToastManager").ToastPosition.RIGHT);
			else {
				var r = function() {
					if (o("WAWebModalManager").ModalManager.close(), t instanceof o("WAWebMembershipApprovalRequestAction").GroupError) {
						var e = t.status;
						(e === 401 || e === 404 || e === 423) && n();
					}
				};
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: r,
					children: e
				}));
			}
		}, N = function() {
			a(i);
		}, M = async function(n) {
			n.stopPropagation(), _(o("WAWebCellRequestState").State.Loading);
			try {
				await o("WAWebMembershipApprovalRequestAction").rejectMembershipApprovalRequest(t, i, $), _(o("WAWebCellRequestState").State.Rejected);
			} catch (n) {
				var e = r("getErrorSafe")(n);
				f(e) ? (_(o("WAWebCellRequestState").State.Error), C(e)) : (_(o("WAWebCellRequestState").State.Pending), P(e)), o("WAWebGroupGetMembershipApprovalRequestsJob").queryAndUpdateGroupMembershipApprovalRequests(t.id);
			}
		}, w = async function(n) {
			n.stopPropagation(), _(o("WAWebCellRequestState").State.Loading);
			try {
				await o("WAWebMembershipApprovalRequestAction").approveMembershipApprovalRequest(t, i, $), _(o("WAWebCellRequestState").State.Approved);
			} catch (n) {
				var e = r("getErrorSafe")(n);
				f(e) ? (_(o("WAWebCellRequestState").State.Error), C(e)) : (_(o("WAWebCellRequestState").State.Pending), P(e)), o("WAWebGroupGetMembershipApprovalRequestsJob").queryAndUpdateGroupMembershipApprovalRequests(t.id);
			}
		}, A = function(t) {
			t.stopPropagation(), P(r("nullthrows")(y));
		}, F;
		k != null && (L == null || L === "") && (F = u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "14",
			color: "secondary",
			xstyle: p.text,
			testid: "pushname",
			children: ["~", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: k })]
		}));
		var O;
		$ > 0 && (O = s._(
			/*BTDS*/
			"",
			[s._plural($, "number")]
		));
		var B = u.jsxs("div", {
			"data-testid": "name",
			className: "x193iq5w xuxw1ft xlyipyv x6ikm8r x10wlt62",
			children: [u.jsx(o("WAWebName.react").ContactName, {
				contact: v,
				ellipsify: !0,
				containerXstyle: p.nameContainer
			}), F]
		});
		if (x && o("WAWebUserPrefsMeUser").isMeAccount(b.id)) return u.jsx(r("WAWebCellRequest.react"), {
			image: u.jsx(r("WAWebContactImage.react"), {
				size: o("WAWebDetailImage.react").DetailImageSize.Small,
				contact: v
			}),
			primary: B,
			secondary: u.jsx(u.Fragment, { children: O }),
			secondaryTestId: "common-groups",
			hoverEnabled: !0,
			onClick: N
		});
		var W = u.jsxs(u.Fragment, { children: [u.jsx("div", { children: O }), s._(
			/*BTDS*/
			"",
			[s._param("added by contact", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebFrontendContactGetters").getFormattedShortName(b) }))]
		)] });
		return u.jsx(r("WAWebCellRequest.react"), {
			image: u.jsx(r("WAWebContactImage.react"), {
				size: o("WAWebDetailImage.react").DetailImageSize.Small,
				contact: v
			}),
			primary: B,
			secondary: W,
			secondaryTestId: "common-groups",
			hoverEnabled: !0,
			state: c,
			onApprove: function(t) {
				w(t);
			},
			onReject: function(t) {
				M(t);
			},
			onClick: N,
			onError: A
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e instanceof o("WAWebMembershipApprovalRequestAction").RequestError ? e.status !== 500 : e instanceof o("WAWebMembershipApprovalRequestAction").GroupError ? e.status === 400 : !1;
	}
	function g(e, t) {
		var n = t.contact;
		if (e instanceof o("WAWebMembershipApprovalRequestAction").RequestError) switch (e.status) {
			case 400: return s._(
				/*BTDS*/
				"",
				[s._param("name", u.jsx(o("WAWebName.react").ContactName, { contact: n }))]
			);
			case 404: return s._(
				/*BTDS*/
				""
			);
			case 409: return s._(
				/*BTDS*/
				"",
				[s._param("name", u.jsx(o("WAWebName.react").ContactName, { contact: n }))]
			);
			case 500: return s._(
				/*BTDS*/
				""
			);
		}
		else if (e instanceof o("WAWebMembershipApprovalRequestAction").GroupError) switch (e.status) {
			case 400: return s._(
				/*BTDS*/
				""
			);
			case 401: return s._(
				/*BTDS*/
				""
			);
			case 404: return s._(
				/*BTDS*/
				""
			);
			case 412: return s._(
				/*BTDS*/
				""
			);
			case 423: return s._(
				/*BTDS*/
				""
			);
			case 429: return s._(
				/*BTDS*/
				""
			);
		}
		return s._(
			/*BTDS*/
			""
		);
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = _;
}), 226);
