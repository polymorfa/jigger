__d("WAWebBizBotTos.react", [
	"WAWebBizBotLogging",
	"WAWebBizBotTosContent.react",
	"WAWebBotTos",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebTos",
	"react",
	"useWAWebFocusOnMount",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useImperativeHandle, p = c.useState;
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chatEntryPoint, l = a.onAccept, s = p(!1), c = s[0], _ = s[1], f = o("WAWebBotTos").hasSeenBotTos();
		o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", function() {
			o("WAWebBotTos").hasAcceptedBizBotTos() && o("WAWebModalManager").ModalManager.close();
		}), m(n, function() {
			return { close: o("WAWebModalManager").closeModalManager };
		});
		var g = async function() {
			_(!0);
			try {
				return await o("WAWebBotTos").acceptBizBotTos(), await (l == null ? void 0 : l()), o("WAWebModalManager").ModalManager.close(), !0;
			} catch (e) {
				return !1;
			} finally {
				_(!1);
			}
		}, h = async function() {
			o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", "nux_continue_clicked", i), await g().then(function(e) {
				e && o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", "nux_select", i);
			});
		}, y = async function() {
			o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", "nux_dismiss", i), await g().then(function(e) {
				e && o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", "nux_dismiss_auto_accept", i);
			});
		}, C = function() {
			y();
		}, b = r("useWAWebFocusOnMount")();
		return d(function() {
			o("WAWebBizBotLogging").logBizBotNuxJourneyEvent("1p", f ? "nux_view_merged" : "nux_view_new", i);
		}, []), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "biz-bot-tos-popup",
			okText: r("WAWebFbtCommon")("OK"),
			onOK: h,
			okSpinner: c === !0,
			onOverlayClick: C,
			ref: b,
			children: u.jsx(r("WAWebBizBotTosContent.react"), {})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
