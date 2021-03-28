var ypim_mailPrepared = false;
var ypim_addrPrepared = false;
var ypim_calPrepared = false;
var ypim_notePrepared = false;

function ypim_prepareMail()
{
	if (ypim_mailPrepared)
		return;

	var htmlArray = [
	    '<table cellpadding=4 cellspacing=5 border=0 width="100%" class="pulldown">',
	    '<tr><td><table cellpadding=0 cellspacing=0 border=0 width="100%"><tr><td width=85>',
	    typeof ypim_MA_CheckMail != "undefined" ?  ('<a href="' + ypim_MA_CheckMail + '"><b>' + ypim_i18n_CheckMail + '</b></a>') : ('<a href="' + ypim_MA_Farm_URL + (typeof ypim_MA_BMDomain != "undefined" ? ("/ym/" + ypim_MA_BMDomain) : "/ym") + '/ShowFolder?rb=Inbox&YN=1&YY=' + ypim_MA_YY + '"><b>' + ypim_i18n_CheckMail + '</b></a>'),
	    '</td><td><small class="kcmd">Ctrl+<img src="',
	     ypim_IMG,
	    '/el/shift1.gif" width=9 height=8 hspace=3>+C</small></td></tr><tr><td width=85>',
	    typeof ypim_MA_Compose != "undefined" ? ('<a href="' + ypim_MA_Compose + '"><b>' + ypim_i18n_Compose + '</b></a>') : ('<a href="' + ypim_MA_Farm_URL + (typeof ypim_MA_BMDomain != "undefined" ? ("/ym/" + ypim_MA_BMDomain) : "/ym") + '/Compose?YY=' + ypim_MA_YY + '"><b>' + ypim_i18n_Compose + '</b></a>'),
	'</td><td><small class="kcmd">Ctrl+<img src="',
	    ypim_IMG,
	    '/el/shift1.gif" width=9 height=8 hspace=3>+P</small></td></tr></table></td></tr><tr><td>',
	    '<table cellpadding=0 cellspacing=0 border=0 width="100%"><tr><td width=85>',
	    typeof ypim_MA_Folders != "undefined" ? ('<a href="' + ypim_MA_Folders + '">' + ypim_i18n_Folders + '</a>') : ('<a href="' + ypim_MA_Farm_URL + (typeof ypim_MA_BMDomain != "undefined" ? ("/ym/" + ypim_MA_BMDomain) : "/ym") + '/Folders?YY=' + ypim_MA_YY + '">' + ypim_i18n_Folders + '</a>'),
	    '</td><td><small class="kcmd">Ctrl+<img src="' + ypim_IMG + '/el/shift1.gif" width=9 height=8 hspace=3>+F</small></td></tr><tr><td width=85>',
	    typeof ypim_MA_Search != "undefined" ?  ('<a href="' + ypim_MA_Search + '">' + ypim_i18n_Search + '</a>') : ('<a href="' + ypim_MA_Farm_URL + (typeof ypim_MA_BMDomain != "undefined" ? ("/ym/" + ypim_MA_BMDomain) : "/ym") + '/Search?YY=' + ypim_MA_YY + '">' + ypim_i18n_Search + '</a>'),
	    '</td><td><small class="kcmd">Ctrl+<img src="' + ypim_IMG + '/el/shift1.gif" width=9 height=8 hspace=3>+S</small></td></tr></table></td></tr><tr><td>',
	    '<table cellpadding=0 cellspacing=0 border=0 width="100%"><tr><td width=85>',
	    typeof ypim_MA_Options != "undefined" ? ('<a href="' + ypim_MA_Options + '">' + ypim_i18n_Options + '</a>') : ('<a href="' + ypim_MA_Farm_URL + (typeof ypim_MA_BMDomain != "undefined" ? ("/ym/" + ypim_MA_BMDomain) : "/ym") + '/Options?YY=' + ypim_MA_YY + '">' + ypim_i18n_Options + '</a>'),
	    '</td><td></td></tr><tr><td width=85>',
	    typeof ypim_MA_Help != "undefined" ? ('<a href="' + ypim_MA_Help + '">' + ypim_i18n_Help + '</a>') : ('<a href="' + 'http://help.yahoo.com/help/' + ypim_Loc + '/mail">' + ypim_i18n_Help + '</a>'),
	    '</td><td><small class="kcmd">Ctrl+<img src="' + ypim_IMG + '/el/shift1.gif" width=9 height=8 hspace=3>+H</small></td></tr></table></td></tr></table>'
	];

	var html = htmlArray.join('');
	var oMail = ylib_getObj('mail');
	ylib_insertHTML(oMail, '<table>' + html + '</table>', 'afterBegin');

	ypim_mailPrepared = true;
}

function ypim_prepareAddr()
{
	if (ypim_addrPrepared)
		return;

	var htmlArray = [
	    '<table cellpadding=5 cellspacing=5 border=0 width="100%" class="pulldown" id=addrMenuTb>',
	    '<tr><td nowrap>',
	    typeof ypim_ABAddContact != "undefined" ? ('<a href="' + ypim_ABAddContact + '"><b>' + ypim_i18n_AddContact + '</b></a><br>') : ('<a href="' + ypim_AB_URL + '?addcontact"><b>' + ypim_i18n_AddContact + '</b></a><br>'),
	    typeof ypim_ABAddCategory != "undefined" ? ('<a href="' + ypim_ABAddCategory + '">' + ypim_i18n_AddCategory + '</a><br>') : ('<a href="' + ypim_AB_URL + '?Add&A=g">' + ypim_i18n_AddCategory + '</a><br>'),
	    typeof ypim_ABAddList != "undefined" ? ('<a href="' + ypim_ABAddList + '">' + ypim_i18n_AddList + '</a><br>') : ('<a href="' + ypim_AB_URL + '?edit_grp">' + ypim_i18n_AddList + '</a><br>'),
	    '</td></tr><tr><td nowrap>',
	    typeof ypim_ABViewContacts != "undefined" ? ('<a href="' + ypim_ABViewContacts + '">' + ypim_i18n_ViewContacts + '</a><br>') : ('<a href="' + ypim_AB_URL + '">' + ypim_i18n_ViewContacts + '</a><br>'),
	    typeof ypim_ABViewLists != "undefined" ? ('<a href="' + ypim_ABViewLists + '">' + ypim_i18n_ViewLists + '</a>') : ('<a href="' + ypim_AB_URL + '?A=v&cat=__ll">' + ypim_i18n_ViewLists + '</a>'),
	    '</td></tr><tr><td nowrap><a href="' + ypim_MA_Farm_URL + (typeof ypim_MA_BMDomain != "undefined" ? ("/ym/" + ypim_MA_BMDomain) : "/ym") + '/quickbuilder?">' + ypim_i18n_Quickbuilder + '</a><br>',
	    typeof ypim_ABImportContacts != "undefined" ? ('<a href="' + ypim_ABImportContacts + '">' + ypim_i18n_ImportContacts + '</a><br>') : ('<a href="' + ypim_AB_URL + '?A=B">' + ypim_i18n_ImportContacts + '</a><br>'),
	    ypim_Loc == "us" ? (typeof ypim_ABSync != "undefined" ? ('<a href="' + ypim_ABSync + '">' + ypim_i18n_Synchronize + '</a><br>') : ('<a href="' + ypim_AB_URL + '?A=x&A2=11">' + ypim_i18n_Synchronize + '</a><br>')) : "",
	    '</td></tr><tr><td nowrap>',
	    typeof ypim_ABOptions != "undefined" ? ('<a href="' + ypim_ABOption + '">' + ypim_i18n_AddressesOptions + '</a><br>') : ('<a href="' + ypim_AB_URL + '?A=o">' + ypim_i18n_AddressesOptions + '</a><br>'),
	    '<a href="http://help.yahoo.com/help/' + ypim_Loc + '/ab">' + ypim_i18n_AddressesHelp + '</a><br>',
	    '</td></tr></table>'
	];

	var html = htmlArray.join('');
	var oAddr = ylib_getObj('addr');
	ylib_insertHTML(oAddr, '<table>' + html + '</table>', 'afterBegin');

	ypim_addrPrepared = true;
}

function ypim_prepareCal()
{
	if (ypim_calPrepared)
		return;

	var htmlArray = [
	    '<table cellpadding=4 cellspacing=5 border=0 width="100%" class="pulldown">',
	    '<tr><td nowrap>',
	    ypim_IsCalendarView ? ('<a href="' + ypim_CA_URL + '/?v=' + V_ADD_VIEW + '&t=' + CAL_TIME + '&pv=' + V + '"><b>' + ypim_i18n_AddEvent + '</b></a><br><a href="' + ypim_CA_URL + '/?v=' + V_TASK_EDIT + '&t=' + CAL_TIME + '&pv=' + V + '">' + ypim_i18n_AddTask + '</a><br><a href="' + ypim_CA_URL + '/?v=' + V_EDIT_VIEW + '&evt_type=13&t=' + CAL_TIME + '&pv=' + V + '">' + ypim_i18n_AddBirthday + '</a><br>') : ('<a href="' + ypim_CA_URL + '/?v=5"><b>' + ypim_i18n_AddEvent + '</b></a><br><a href="' + ypim_CA_URL + '/?v=33">' + ypim_i18n_AddTask + '</a><br><a href="' + ypim_CA_URL + '/?v=5&evt_type=13">' + ypim_i18n_AddBirthday + '</a><br>'),
	    '</td></tr><tr><td nowrap>',
	    ypim_IsCalendarView ? ('<a href="' + ypim_CA_URL + '/?v=' + V_DAY_VIEW + '&pv=' + V + '">' + ypim_i18n_Day + '</a><br>') : ('<a href="' + ypim_CA_URL + '/?v=0">' + ypim_i18n_Day + '</a><br>'),
	    ypim_IsCalendarView ? ('<a href="' + ypim_CA_URL + '/?v=' + V_WEEK_VIEW + '&pv=' + V + '">' + ypim_i18n_Week + '</a><br>') : ('<a href="' + ypim_CA_URL + '/?v=1">' + ypim_i18n_Week + '</a><br>'),
	    ypim_IsCalendarView ? ('<a href="' + ypim_CA_URL + '/?v=' + V_MONTH_VIEW + '&pv=' + V + '">' + ypim_i18n_Month + '</a><br>') : ('<a href="' + ypim_CA_URL + '/?v=2">' + ypim_i18n_Month + '</a><br>'),
	    ypim_IsCalendarView ? ('<a href="' + ypim_CA_URL + '/?v=' + V_YEAR_VIEW + '&pv=' + V + '">' + ypim_i18n_Year + '</a><br>') : ('<a href="' + ypim_CA_URL + '/?v=3">' + ypim_i18n_Year + '</a><br>'),
	    '</td></tr><tr><td nowrap>',
	    ypim_IsCalendarView ? ('<a href="' + ypim_CA_URL + '/?v=' + V_EVENT_LIST + '&POS=0&pv=' + V + '">' + ypim_i18n_EventList + '</a><br><a href="' + ypim_CA_URL + '/?v=' + V_EVENT_LIST + '&POS=0&pv=' + V + '&TYP=101&MOD=0">' + ypim_i18n_Reminders + '</a><br>') : ('<a href="' + ypim_CA_URL + '/?v=42">' + ypim_i18n_EventList + '</a><br><a href="' + ypim_CA_URL + '/?v=42&POS=0&TYP=101&MOD=0">' + ypim_i18n_Reminders + '</a><br>'),
	    ypim_IsCalendarView ? ('<a href="' + ypim_CA_URL + '/?v=' + V_TASK_LIST + '&POS=' + POS + '&pv=' + V + '">' + ypim_i18n_Tasks + '</a><br>') : ('<a href="' + ypim_CA_URL + '/?v=32">' + ypim_i18n_Tasks + '</a><br>'),
	    '</td></tr><tr><td nowrap>',
	    ypim_IsCalendarView ? (!IS_OTHER_CAL ? ('<a href="' + ypim_CA_URL + '/?v=' + V_OPT_VIEW_CAL_SHARING + '&pv=' + V + '">' + ypim_i18n_Sharing + '</a><br>') : "") : ('<a href="' + ypim_CA_URL + '/?v=84">' + ypim_i18n_Sharing + '</a><br>'),
	    ypim_Loc == "us" ? (ypim_IsCalendarView ? (!IS_OTHER_CAL ? ('<a href="' + ypim_CA_URL + '/?v=' + V_OPT_VIEW_SYNC + '&pv=' + V + '">' + ypim_i18n_Synchronize + '</a><br>') : "") : ('<a href="' + ypim_CA_URL + '/?v=120">' + ypim_i18n_Synchronize + '</a><br>')) : "",
	    '</td></tr><tr><td nowrap>',
	    ypim_IsCalendarView ? (!IS_OTHER_CAL ? ('<a href="' + ypim_CA_URL + '/?v=' + V_OPT_VIEW_MAIN + '&pv=' + V + '">' + ypim_i18n_CalendarOptions + '</a><br>') : "") : ('<a href="' + ypim_CA_URL + '/?v=70">' + ypim_i18n_CalendarOptions + '</a><br>'),
	    '<a href="http://help.yahoo.com/help/' + ypim_Loc + '/cal">' + ypim_i18n_CalendarHelp + '</a><br></td></tr></table>'
	];

	var html = htmlArray.join('');
	var oCal = ylib_getObj('cal');
	ylib_insertHTML(oCal, '<table>' + html + '</table>', 'afterBegin');

	ypim_calPrepared = true;
}

function ypim_prepareNote()
{
	if (ypim_notePrepared)
		return;

	var htmlArray = [
	    '<table cellpadding=4 cellspacing=5 border=0 width="100%" class=pulldown><tr><td nowrap>',
	    ypim_IsNotepadView ? ('<a href="' + ypim_NP_URL + '/?v=' + V_NOTEPAD_EDIT + '&pv=' + V + '"><b>' + ypim_i18n_AddNote + '</b></a><br>') : ('<a href="' + ypim_NP_URL + '/?v=161"><b>' + ypim_i18n_AddNote + '</b></a><br>'),
	    ypim_IsNotepadView ? ('<a href="' + ypim_NP_URL + '/?v=' + V_NOTEPAD_OPT_CAT + '&pv=' + V + '">' + ypim_i18n_AddFolder + '</a><br>') : ('<a href="' + ypim_NP_URL + '/?v=168">' + ypim_i18n_AddFolder + '</a><br>'),
	    '</td></tr><tr><td nowrap>',
	    ypim_IsNotepadView ? ('<a href="' + ypim_NP_URL + '/?v=' + V_NOTEPAD_LIST_VIEW + '&pv=' + V + '">' + ypim_i18n_ViewNotes + '</a><br>') : ('<a href="' + ypim_NP_URL + '/?v=164">' + ypim_i18n_ViewNotes + '</a><br>'),
	    '</td></tr><tr><td nowrap>',
	    ypim_IsNotepadView ? ('<a href="' + ypim_NP_URL + '/?v=' + V_NOTEPAD_OPT + '&pv=' + V + '">' + ypim_i18n_NotepadOptions + '</a><br>') : ('<a href="' + ypim_NP_URL + '/?v=165">' + ypim_i18n_NotepadOptions + '</a><br>'),
	    '<a href="http://help.yahoo.com/help/' + ypim_Loc + '/notepad">' + ypim_i18n_NotepadHelp + '</a><br></td></tr></table>'
	];

	var html = htmlArray.join('');
	var oNote = ylib_getObj('note');
	ylib_insertHTML(oNote, '<table>' + html + '</table>', 'afterBegin');

	ypim_notePrepared = true;
}
