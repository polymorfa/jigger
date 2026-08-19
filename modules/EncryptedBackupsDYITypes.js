__d("EncryptedBackupsDYITypes", ["$InternalEnum"], (function(t, n, r, o, a, i) {
	"use strict";
	var e, l = (e = n("$InternalEnum"))({
		NotStarted: 0,
		InProgress: 1,
		Completed: 2,
		Failed: 3
	}), s = e({
		FullSize: 0,
		PreviewsOnly: 1,
		SkipMedia: 2
	}), u = e({
		LastWeek: 0,
		LastMonth: 1,
		Last3Months: 2,
		Last6Months: 3,
		LastYear: 4,
		FromAccountCreation: 5
	});
	function c(e) {
		var t = Date.now(), n = 1440 * 60 * 1e3;
		switch (e) {
			case u.LastWeek: return t - 7 * n;
			case u.LastMonth: return t - 30 * n;
			case u.Last3Months: return t - 90 * n;
			case u.Last6Months: return t - 180 * n;
			case u.LastYear: return t - 365 * n;
			case u.FromAccountCreation: return null;
		}
	}
	var d = e({ Armadillo: 0 });
	i.EncryptedBackupsDYIState = l, i.EncryptedBackupsDYIMediaOption = s, i.EncryptedBackupsDYIDateRange = u, i.getDateRangeCutoffMs = c, i.EncryptedBackupsDYIConfig = d;
}), 66);
