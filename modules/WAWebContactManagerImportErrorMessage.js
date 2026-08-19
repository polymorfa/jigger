__d("WAWebContactManagerImportErrorMessage", ["fbt", "WAWebContactImportTypedError"], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		return e === o("WAWebContactImportTypedError").PhoneError.DUPLICATE ? s._(
			/*BTDS*/
			""
		).toString() : e === o("WAWebContactImportTypedError").PhoneError.INVALID ? s._(
			/*BTDS*/
			""
		).toString() : e === o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER ? s._(
			/*BTDS*/
			""
		).toString() : e === o("WAWebContactImportTypedError").NameError.EMPTY || e === o("WAWebContactImportTypedError").NameError.INVALID ? s._(
			/*BTDS*/
			""
		).toString() : e === o("WAWebContactImportTypedError").UsernameError.DUPLICATE ? s._(
			/*BTDS*/
			""
		).toString() : e === o("WAWebContactImportTypedError").ExistingContactError.ALREADY_EXISTS ? s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			""
		).toString();
	}
	l.getContactManagerImportErrorLabel = e;
}), 226);
