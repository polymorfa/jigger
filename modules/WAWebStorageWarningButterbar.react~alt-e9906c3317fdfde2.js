__d("WAWebStorageWarningButterbar.react", [
	"fbt",
	"WAWebDbUsageApiConst",
	"WAWebModalManager",
	"WAWebScanDbModal.react",
	"WDSBanner.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.alertType;
		if (t == null) return null;
		var n = null, a = null;
		switch (t) {
			case o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT: return null;
			case o("WAWebDbUsageApiConst").StorageAlertType.LOW_QUOTA_EXCEEDED:
				n = function() {
					o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebScanDbModal.react"), { isHighQuotaExceeded: !1 }));
				}, a = "More than 1GB storage usage detected. This is unusually big storage consumption.";
				break;
			case o("WAWebDbUsageApiConst").StorageAlertType.HIGH_QUOTA_EXCEEDED:
				n = function() {
					o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebScanDbModal.react"), { isHighQuotaExceeded: !0 }));
				}, a = "More than 1.5GB excess storage usage detected. This is unusually big storage consumption.";
				break;
		}
		return n == null || a == null ? null : u.jsx("div", {
			className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
			children: u.jsx(r("WDSBanner.react"), {
				type: "warning",
				title: "[INTERNAL] Unexpected storage consumption detected",
				body: a,
				actionText: s._(
					/*BTDS*/
					""
				),
				onAction: n
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
