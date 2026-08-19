const WamSendDocument = 2172 // channel: regular

type SendDocumentEvent struct {
	DocumentSize string `wam:"document_size"` // field 1
	DocumentType DOCUMENTTYPE `wam:"document_type"` // field 2
	DocumentExt string `wam:"document_ext"` // field 3
	DocumentPageSize int64 `wam:"document_page_size"` // field 4
}