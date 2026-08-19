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
	"asyncToGeneratorRuntime",
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
		var t = e.chat, a = e.onBack, i = e.onRequestClick, l = e.request, c = m(o("WAWebCellRequestState").State.Pending), _ = c[0], h = c[1], y = m(null), C = y[0], b = y[1], v = l.addedByContact, S = l.contact, R = o("useWAWebContactValues").useContactValues(S.id, [
			o("WAWebContactGetters").getId,
			o("WAWebContactGetters").getName,
			o("WAWebFrontendContactGetters").getFormattedShortName,
			o("WAWebContactGetters").getNotifyName,
			o("WAWebFrontendContactGetters").getCommonGroups
		]), L = R[0], E = R[1], k = R[2], I = R[3], T = R[4], D = r("useWAWebGroupParticipantStatus")(t.groupMetadata), x = D[0], $ = D[1];
		d(function() {
			o("WAWebFindCommonGroupsContactAction").findCommonGroups(S);
		}, []);
		var P = r("useWAWebEventTargetValue")(T, ["add", "remove"], function() {
			var e;
			return (e = T == null ? void 0 : T.length) != null ? e : 0;
		}), N = function(t) {
			var e = g(t, l);
			if (f(t)) o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: e }), o("WAWebToastManager").ToastPosition.RIGHT);
			else {
				var n = function() {
					if (o("WAWebModalManager").ModalManager.close(), t instanceof o("WAWebMembershipApprovalRequestAction").GroupError) {
						var e = t.status;
						(e === 401 || e === 404 || e === 423) && a();
					}
				};
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					onOK: n,
					children: e
				}));
			}
		}, M = function() {
			i(l);
		}, w = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				e.stopPropagation(), h(o("WAWebCellRequestState").State.Loading);
				try {
					yield o("WAWebMembershipApprovalRequestAction").rejectMembershipApprovalRequest(t, l, P), h(o("WAWebCellRequestState").State.Rejected);
				} catch (e) {
					var n = r("getErrorSafe")(e);
					f(n) ? (h(o("WAWebCellRequestState").State.Error), b(n)) : (h(o("WAWebCellRequestState").State.Pending), N(n)), o("WAWebGroupGetMembershipApprovalRequestsJob").queryAndUpdateGroupMembershipApprovalRequests(t.id);
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), A = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				e.stopPropagation(), h(o("WAWebCellRequestState").State.Loading);
				try {
					yield o("WAWebMembershipApprovalRequestAction").approveMembershipApprovalRequest(t, l, P), h(o("WAWebCellRequestState").State.Approved);
				} catch (e) {
					var n = r("getErrorSafe")(e);
					f(n) ? (h(o("WAWebCellRequestState").State.Error), b(n)) : (h(o("WAWebCellRequestState").State.Pending), N(n)), o("WAWebGroupGetMembershipApprovalRequestsJob").queryAndUpdateGroupMembershipApprovalRequests(t.id);
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), F = function(t) {
			t.stopPropagation(), N(r("nullthrows")(C));
		}, O;
		I != null && (E == null || E === "") && (O = u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "14",
			color: "secondary",
			xstyle: p.text,
			testid: "pushname",
			children: ["~", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: I })]
		}));
		var B;
		P > 0 && (B = s._(
			/*BTDS*/
			"",
			[s._plural(P, "number")]
		));
		var W = u.jsxs("div", {
			"data-testid": "name",
			className: "x193iq5w xuxw1ft xlyipyv x6ikm8r x10wlt62",
			children: [u.jsx(o("WAWebName.react").ContactName, {
				contact: S,
				ellipsify: !0,
				containerXstyle: p.nameContainer
			}), O]
		});
		if ($ && o("WAWebUserPrefsMeUser").isMeAccount(v.id)) return u.jsx(r("WAWebCellRequest.react"), {
			image: u.jsx(r("WAWebContactImage.react"), {
				size: o("WAWebDetailImage.react").DetailImageSize.Small,
				contact: S
			}),
			primary: W,
			secondary: u.jsx(u.Fragment, { children: B }),
			secondaryTestId: "common-groups",
			hoverEnabled: !0,
			onClick: M
		});
		var q = u.jsxs(u.Fragment, { children: [u.jsx("div", { children: B }), s._(
			/*BTDS*/
			"",
			[s._param("added by contact", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebFrontendContactGetters").getFormattedShortName(v) }))]
		)] });
		return u.jsx(r("WAWebCellRequest.react"), {
			image: u.jsx(r("WAWebContactImage.react"), {
				size: o("WAWebDetailImage.react").DetailImageSize.Small,
				contact: S
			}),
			primary: W,
			secondary: q,
			secondaryTestId: "common-groups",
			hoverEnabled: !0,
			state: _,
			onApprove: function(t) {
				A(t);
			},
			onReject: function(t) {
				w(t);
			},
			onClick: M,
			onError: F
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
